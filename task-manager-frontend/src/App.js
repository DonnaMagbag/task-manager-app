import './styles/styles.css';

import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import Login from './components/Login';
import Register from './components/Register';
import TaskList from './components/TaskList';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    navigate('/tasks');
  };

  const handleRegister = () => {
    alert('Registration successful!');
    navigate('/login');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div>
      <nav>
        {!isAuthenticated && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </nav>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/tasks" element={isAuthenticated ? <TaskList /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;

