import '../styles/styles.css';

import React, { useState } from "react";

const TaskForm = ({ onSave }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ title, description, dueDate });
        setTitle('');
        setDescription('');
        setDueDate('');
    };

    return (
        <div className="form-container">
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                </div>
                <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                </div>
                <div className="form-group">
                <label htmlFor="dueDate">Due Date</label>
                <input
                    type="date"
                    id="dueDate"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
                </div>
                <button type="submit">Save Task</button>
        </form>
        </div>
        );
};

export default TaskForm;

