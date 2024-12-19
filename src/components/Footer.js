import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* Left Section */}
      <div className="footer-left">
        <div className="contact-columns">
          <div className="contact-column">
            <p><strong>Call</strong></p>
            <p>9163360708</p>
          </div>
          <div className="contact-column">
            <p><strong>Write</strong></p>
            <p>kevinshiroya27@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <p><strong>Follow Us</strong></p>
        <div className="footer-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
