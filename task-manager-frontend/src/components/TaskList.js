import '../styles/styles.css';

import React, { useEffect, useState } from "react";

import Task from './Task';
import TaskForm from './TaskForm';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/tasks")
            .then((response) => response.json())
            .then((data) => setTasks(data))
            .catch((error) => console.error('Error fetching tasks:', error));
    }, []);

    const handleDelete = (taskId) => {
        fetch(`http://localhost:8080/api/tasks/${taskId}`, { method: 'DELETE' })
          .then(() => {
            setTasks(tasks.filter(task => task.id !== taskId));
          })
          .catch(error => console.error('Error deleting task:', error));
      };
    
      const handleSave = (task) => {
        fetch('http://localhost:8080/api/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(task),
        })
          .then(response => response.json())
          .then(newTask => {
            setTasks([...tasks, newTask]);
          })
          .catch(error => console.error('Error saving task:', error));
      };
    
      return (
        <div>
          <h2>Task List</h2>
          <TaskForm onSave={handleSave} />
          {tasks.map(task => (
            <Task key={task.id} task={task} onDelete={handleDelete} />
          ))}
        </div>
      );
    };
    
    export default TaskList;