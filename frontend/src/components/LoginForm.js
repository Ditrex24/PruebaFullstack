import React, { useState } from 'react';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/login', { username, password });
      console.log(response.data);  
      alert("Acceso Autorizado");
      navigate('/users');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <h2>Login de Usuario</h2>
      {error && <div className="alert">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username o Email:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <button type="submit" className="btn-primary btn-small">Iniciar Sesión</button>
        </div>
      </form>
      <button className="btn-secondary  btn-small" onClick={() => navigate('/')}>Home</button>
    </div>
  );
};

export default LoginForm;
