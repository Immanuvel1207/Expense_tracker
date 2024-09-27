// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Your Expenses</h2>
      {/* Map over your expenses and display them here */}
      <div className="expense-item">
        <h4>Expense Title</h4>
        <p>Amount: $100</p>
      </div>
    </div>
  );
};

export default Dashboard;
