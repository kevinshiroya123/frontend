import React, { useState, useEffect } from "react";
import "./More.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaSnapchatGhost, FaYoutube } from "react-icons/fa";
import Collage from "../pages/Section/Collage.js"; // Import the Collage component

function More() {
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrollOffset(offset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="more-page">
      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="#" className="icon facebook">
          <FaFacebookF />
        </a>
        <a href="#" className="icon twitter">
          <FaTwitter />
        </a>
        <a href="#" className="icon instagram">
          <FaInstagram />
        </a>
        <a href="#" className="icon snapchat">
          <FaSnapchatGhost />
        </a>
        <a href="#" className="icon youtube">
          <FaYoutube />
        </a>
      </div>

      {/* Background Section */}
      <div
        className="background-section"
        style={{
          transform: `translateX(-50%) translateY(${scrollOffset * -0.1}px)`,
        }}
      ></div>

      {/* Scrollable Content */}
      <div className="content-section">
        <div className="content">
          <h1 className="page-title">KEVIN</h1>
          <p className="page-subtitle">Exploring Life, Creativity, and Stories!</p>
        </div>
      </div>

      {/* Additional Content */}
      <div className="additional-content-wrapper">
        {/* Vlog Section */}
        <div className="vlog-section">
          <h2 className="vlog-title">MY VLOG</h2>
          <div className="vlog-video-container">
            {/* Background box */}
            <div className="vlog-video-box"></div>
            {/* Iframe */}
            <iframe
              className="vlog-video-iframe"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="vlog-search-bar">
            <input type="text" placeholder="🔍 Search video..." className="vlog-search-input" />
          </div>
          <div className="vlog-grid">
            <div className="vlog-item">
              <a href="https://www.youtube.com/watch?v=abc123" target="_blank" rel="noopener noreferrer">
                <img src="https://img.youtube.com/vi/abc123/hqdefault.jpg" alt="Trends to Try Now!" />
                <p>Trends to Try Now!</p>
              </a>
            </div>
            <div className="vlog-item">
              <a href="https://www.youtube.com/watch?v=def456" target="_blank" rel="noopener noreferrer">
                <img src="https://img.youtube.com/vi/def456/hqdefault.jpg" alt="Alien Attack" />
                <p>Alien Attack</p>
              </a>
            </div>
            <div className="vlog-item">
              <a href="https://www.youtube.com/watch?v=ghi789" target="_blank" rel="noopener noreferrer">
                <img src="https://img.youtube.com/vi/ghi789/hqdefault.jpg" alt="The Natural Look" />
                <p>The Natural Look</p>
              </a>
            </div>
            <div className="vlog-item">
              <a href="https://www.youtube.com/watch?v=jkl012" target="_blank" rel="noopener noreferrer">
                <img src="https://img.youtube.com/vi/jkl012/hqdefault.jpg" alt="Perfect Valentine Makeup" />
                <p>Perfect Valentine Makeup</p>
              </a>
            </div>
          </div>
          <button className="vlog-more-btn">For More Videos</button>
        </div>
        <div className="additional-content">
          <div className="story-text">
            <h1>This is my story</h1>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            <button className="follow-button">Follow Me</button>
          </div>
          <div
            className="story-image"
            style={{
              backgroundPositionY: `${(scrollOffset * -0.1)+200}px`,
            }}
          >
            <div className="story-overlay"></div>
          </div>
        </div>
        <Collage />
      </div>
    </div>
  );
}

export default More;
