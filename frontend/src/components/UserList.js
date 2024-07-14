import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/users');
        console.log(response.data);  
        setUsers(response.data.users);  
        setLoading(false);
      } catch (error) {
        setError('Error fetching users');
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      setError('Error deleting user');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h2>Lista de Usuarios</h2>
      <ul className="user-list">
        {Array.isArray(users) && users.length > 0 ? (
          users.map(user => (
            <li key={user.id} className="user-item">
              <span>{user.username} - {user.email}</span>
              <div className="user-buttons">
                <button className="btn btn-small btn-primary" onClick={() => navigate(`/users/edit/${user.id}`)}>Editar</button>
                <button className="btn btn-small btn-secondary" onClick={() => handleDelete(user.id)}>Eliminar</button>
              </div>
            </li>
          ))
        ) : (
          <p>No users found</p>
        )}
      </ul>
      <button className="btn btn-primary btn-small" onClick={() => navigate('/')}>Home</button>
    </div>
  );
};

export default UsersList;