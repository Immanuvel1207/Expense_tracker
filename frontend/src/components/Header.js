// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Expense Tracker</div>
      <nav>
        <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
