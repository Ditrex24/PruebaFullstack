import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from '../axios';

const UserDelete = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const deleteUser = async () => {
      try {
        await axios.delete(`/users/${id}`);
        setLoading(false);
        history.push('/users');  
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    };

    deleteUser();
  }, [id, history]);

  if (loading) {
    return <p>Eliminando usuario...</p>;
  }

  return (
    <div>
      <h2>Eliminar Usuario</h2>
      <p>Usuario eliminado correctamente.</p>
    </div>
  );
};

export default UserDelete;