import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleSidebar}>
        <span className={`line ${isSidebarOpen ? 'rotate-top' : ''}`}></span>
        <span className={`line ${isSidebarOpen ? 'hide' : ''}`}></span>
        <span className={`line ${isSidebarOpen ? 'rotate-bottom' : ''}`}></span>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'active' : 'hidden'}`}>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setSidebarOpen(false)}
            >
              <i className="fas fa-home"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setSidebarOpen(false)}
            >
              <i className="fas fa-folder-open"></i> Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setSidebarOpen(false)}
            >
              <i className="fas fa-envelope"></i> Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/more"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setSidebarOpen(false)}
            >
              <i className="fas fa-ellipsis-h"></i> More
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
