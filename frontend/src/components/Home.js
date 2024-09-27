import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Home() {
  const { user, logout } = useContext(AuthContext); // Access user and logout from context
  const navigate = useNavigate();

  // Redirect if user is not logged in
  if (!user) {
    navigate('/');
  }

  return (
    <div>
      <h2>Welcome, {user?.username}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
