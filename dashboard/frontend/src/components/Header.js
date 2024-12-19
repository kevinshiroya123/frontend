import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-right">
        <i className="fas fa-bell"></i>
        <img src="/profile.jpg" alt="User" className="profile-pic" />
      </div>
    </header>
  );
}

export default Header;
