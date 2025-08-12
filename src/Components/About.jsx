import React from 'react';
import '../Styles/About.css';
import profileImage from '../assets/azhar4.jpg'; // Make sure the path is correct

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <img
            src={profileImage}
            alt="Mohammad Azhar"
            className="about-img circle" // or use "rounded-rectangle"
          />
          <div className="about-card">
            <p>
              I'm <strong>Mohammad Azhar</strong>, a dedicated Full-Stack Developer passionate about creating dynamic web applications using modern technologies like <strong>React</strong>, <strong>Node.js</strong>, and <strong>Python</strong>.
            </p>
            <p>
              I enjoy crafting user-friendly, responsive, and efficient solutions that solve real-world problems. Whether it’s frontend interaction or backend logic, I strive to deliver clean and impactful code.
            </p>
            <p>
              I'm always learning and seeking challenges that help me grow as a developer and build meaningful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
