import React, { useEffect, useState } from 'react';
import './Hero.css';
import axios from 'axios';
import AboutMe from './Section/AboutMe';


function Hero() {
  const [heroData, setHeroData] = useState({
    image: "",
    name: "",
    title: "",
    socialLinks: {},
    welcomeTitle: "",
    welcomeText: "",
    aboutMe: "",
    portfolio: "", // Portfolio filename from the database
  });

  const API_URL = process.env.REACT_APP_API_URL; // Use environment variable for backend URL
  console.log('API URL:', process.env.REACT_APP_API_URL);


  useEffect(() => {
    // Fetch content from backend
    axios
      .get(`${API_URL}/api/hero`) // Use API_URL from environment variables
      .then((response) => setHeroData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [API_URL]);

  const handlePortfolioDownload = () => {
    if (!heroData.portfolio) {
      console.error('Portfolio filename is not available');
      return;
    }

    const link = document.createElement('a');
    link.href = `${API_URL}/api/hero/portfolio/download`; // Dynamic API endpoint with API_URL
    link.download = heroData.portfolioFilename; // Use the filename from the database
    link.click();
  };

  const panels = [
    { title: 'Education', content: 'Bachelor of Science in Computer Science.' },
    { title: 'Skills', content: 'React, Node.js, Python, and Machine Learning.' },
    { title: 'Hobbies', content: 'Photography, Traveling, and Cooking.' },
  ];

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          {/* Right Content - Text Content */}
          <div className="text-content">
            <h2>Hi, I'm {heroData.name}</h2>
            <hr className="divider" />
            <p>{heroData.title}</p>
            <div className="social-icons">
              {heroData.socialLinks.facebook && (
                <a
                  href={heroData.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              )}
              {heroData.socialLinks.twitter && (
                <a
                  href={heroData.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              )}
              {heroData.socialLinks.linkedin && (
                <a
                  href={heroData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              )}
              {heroData.socialLinks.instagram && (
                <a
                  href={heroData.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              )}
            </div>
            <h1>{heroData.welcomeTitle}</h1>
            <p>{heroData.welcomeText}</p>
          </div>
          {/* Left Content - Profile Image */}
          <div className="profile-image">
          <img
  src="https://resume-3ka0.onrender.com/uploads/Clipped_image_20241130_143550.png"
  alt="Profile"
  className="profile-full-image"
/>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="hero-buttons">
        <button className="btn btn-portfolio" onClick={handlePortfolioDownload}>
          DOWNLOAD PORTFOLIO
        </button>
        <button className="btn btn-projects">PROJECTS</button>
      </div>
              
      <AboutMe aboutText={heroData.aboutMe} panels={panels} />
    </section>
  );
}

export default Hero;
