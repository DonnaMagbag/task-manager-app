import '../styles/styles.css';

import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
      <h3>{task.title}</h3>
        <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default Task;