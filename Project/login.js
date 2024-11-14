import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetching all user data from db.json
      const response = await axios.get('http://localhost:5000/users');
      const users = response.data;

      // Check if user credentials match any user in db.json
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        alert('Login successful!');
        navigate('/home'); // Navigate to Home page on successful login
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error logging in. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
