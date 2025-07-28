import React from 'react';
import './Slidebar.css';

const Slidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="avatar">M</div>
        <h2>Welcome, Manik</h2>
        <p>This is your personal tasks manager</p>
      </div>
      <nav className="nav">
        <ul>
          <li>Dashboard</li>
          <li>Tasks</li>
          <li>Settings</li>
        </ul>
      </nav>
    </div>
  );
};

export default Slidebar;
