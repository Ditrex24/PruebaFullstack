import React, { useState } from 'react';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/register', { username, email, password });
      console.log(response.data); 
      alert("Usuario registrado correctamente"); 
      navigate('/login');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <h1>Create new account</h1>
      <p>Already A Member? <a href="/login">Log In</a></p>
      {error && <div className="alert">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">First Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn-primary btn-small">Create account</button>
        </div>
      </form>
      <button className="btn-secondary btn-small" onClick={() => navigate('/')}>Home</button>
    </div>
  );
}

export default RegisterForm;