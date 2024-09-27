// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Your Expenses</h2>
      <div className="expense-item">
        <h4>Food</h4>
        <p>Amount: $100</p>
      </div>
    </div>
  );
};

export default Dashboard;
