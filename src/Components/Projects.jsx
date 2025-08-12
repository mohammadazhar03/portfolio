import React from 'react';
import '../Styles/Projects.css';

const projects = [
  {
    title: "Course4You",
    description: "An educational platform for course browsing, student login, and announcements using React and localStorage.",
    link: "https://course4you.netlify.app/" // replace with actual URL if deployed
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React, Bootstrap, and modern animations.",
    link: "https://your-portfolio-link.com"
  },
  {
    title: "Weather App",
    description: "Built using OpenWeatherMap API and React. Displays real-time weather updates.",
    link: "https://your-weather-app.com"
  },
  {
    title: "Blog Platform",
    description: "A MERN-stack based blogging platform with JWT authentication and CRUD features.",
    link: "https://your-blog-platform.com"
  }
];


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
