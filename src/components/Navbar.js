import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggles the menu visibility state
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY <= lastScrollY); // Show navbar when scrolling up
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    // Close menu if the window is resized to a larger width
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${isVisible ? 'show' : 'hide'}`}>
      <div className="logo-and-position">
        <div className="logo">
          <div className="logo-icon"></div>
          <span>Kevin Shiroya</span>
        </div>
        <div className="position">
          <span className="divider">/</span>
          <span className="title">PROJECT MANAGER</span>
        </div>
      </div>

      {/* Hamburger Button */}
      <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {/* Dropdown Menu */}
      <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={toggleMenu}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''} onClick={toggleMenu}>
              RESUME
            </Link>
          </li>
          <li>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={toggleMenu}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={toggleMenu}>
              CONTACT
            </Link>
          </li>
          <li>
          <Link to="/more" className={location.pathname === '/more' ? 'active' : ''} onClick={toggleMenu}>
              MORE
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
