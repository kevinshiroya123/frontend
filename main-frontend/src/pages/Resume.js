import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section className="resume-section">
       <div className="resume-icon-title">
        <div className="resume-icon"></div>
        <h1 className="resume-title">My Resume</h1>
      </div>
      <div className="resume-header">
        <h2>Work Experience</h2>
        <button className="download-button">Download Resume</button>
      </div>

      {/* Work Experience Section */}
      <div className="work-experience">
        <div className="experience-card">
          <div className="experience-left">
            <p><strong>2010 - Present</strong></p>
            <p>Creative Director</p>
            <p>Creative Agency XYZ</p>
            <p>New York, USA</p>
          </div>
          <div className="experience-right">
            <p>
              I'm passionate about creating unique and compelling visual experiences. As a creative director,
              I have led numerous successful projects that have pushed the boundaries of creativity and innovation
              in the digital space.
            </p>
          </div>
        </div>
        <div className="experience-card">
          <div className="experience-left">
            <p><strong>2010 - Present</strong></p>
            <p>Creative Director</p>
            <p>Creative Agency XYZ</p>
            <p>New York, USA</p>
          </div>
          <div className="experience-right">
            <p>
              I'm passionate about creating unique and compelling visual experiences. As a creative director,
              I have led numerous successful projects that have pushed the boundaries of creativity and innovation
              in the digital space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
