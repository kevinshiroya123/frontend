import React, { useEffect, useRef } from 'react';
import './AboutMe.css';

function AboutMe({ aboutText, panels }) {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible'); // Remove the class when out of view
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div className="about-me-section">
      <h2>About Me</h2>
      <p>{aboutText}</p>

      <div className="info-cards">
        {panels.map((panel, index) => (
          <div
            key={index}
            className="card"
            ref={(el) => (cardsRef.current[index] = el)} // Attach ref to each card
          >
            <h3>{panel.title}</h3>
            <div className="card-content">
              <p>{panel.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
