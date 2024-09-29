// src/components/Register.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Ensure this line is present

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://expense-tracker-1ein.onrender.com/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert('User registered successfully');
      navigate('/login');
    } else {
      const data = await response.json();
      alert(data.message);
    }
  };

  return (
    <div className="register-container">
      <h1 style={{color:'white'}}>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
