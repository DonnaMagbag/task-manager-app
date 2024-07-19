import './styles/styles.css';

import { Link, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import Login from './components/Login';
import Register from './components/Register';
import TaskList from './components/TaskList';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleRegister = () => {
    alert('Registration successful!');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  

  return (
    <Router>
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
    </Router>
  );
};

export default App;
