import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Register from './components/RegisterForm';
import Login from './components/LoginForm';
import UsersList from './components/UserList';
import UserDetail from './components/UserDetail';


function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div>
          <Link to="/register">Join</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
      <footer className="footer">
        <p>© 2024 Sergio Vasquez</p>
      </footer>
    </div>
  );
}

export default App;
