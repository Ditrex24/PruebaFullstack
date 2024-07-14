import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { useParams, useNavigate } from 'react-router-dom';

const UserEditForm = () => {
  const { id } = useParams();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/users/${id}`);
        setUsername(response.data.username);
        setEmail(response.data.email);
      } catch (error) {
        setError('Error fetching user');
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/users/${id}`, { username, email });
      navigate('/users');
    } catch (error) {
      setError('Error updating user');
    }
  };

  return (
    <div className="container">
      <h2>Edit User</h2>
      {error && <p className="alert">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
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
        <button type="submit" className="btn-primary">Update</button>
      </form>
      <button className="btn-secondary btn-small" onClick={() => navigate('/users')}>Cancel</button>
    </div>
  );
};

export default UserEditForm;
