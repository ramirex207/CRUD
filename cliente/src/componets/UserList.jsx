import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../sass/UserList.scss';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    }
    fetchUsers();
  }, []);

  async function deleteUser(id) {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='list_container'>
      <h1>Lista de Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cédula</th>
            <th>Celular</th>
            <th>Correo electrónico</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.Ci}</td>
              <td>{user.celular}</td>
              <td>{user.email}</td>
              <td>{user.rol}</td>
              <td>
                <button className='edit_button'>Editar</button>
                <button className='delete_button' onClick={() => deleteUser(user._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
