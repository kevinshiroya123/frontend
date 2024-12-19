import React from "react";
import "./Projects.css";
import projectImage from "../images/download.png"; // Import the image

function Project() {
  return (
    <section className="project-section">
      <div className="project-header">
        <div className="project-icon"></div>
        <h1 className="project-title">My Projects</h1>
      </div>
      <p className="project-description">
        Welcome to my portfolio! Here, I showcase my creative projects and share the stories behind each one. Feel free to explore and get inspired. Click on the projects to learn more about my process and the outcomes.
      </p>

      {/* Project Card */}
      <div className="project-card">
        <div className="project-text">
          <h2>Project Title 01</h2>
          <h3>My Role</h3>
          <p>
            Dive into the details of my first project. From ideation to execution, I poured my passion into this work. Learn about the challenges I faced, the solutions I devised, and the impact it made.
          </p>
        </div>
        <div className="project-image">
          <img src={projectImage} alt="Project Visual" />
        </div>
      </div>
    </section>
  );
}

export default Project;
