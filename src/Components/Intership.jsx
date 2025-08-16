import React, { useEffect } from 'react';
import '../Styles/Internship.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Internship = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // JSON data inside the file
  const internships = [
    {
      company: "Datapoint IT Solutions",
      role: "Frontend Web Developer",
      duration: "May 2023 - June 2023 ",
      description: "Worked on building dynamic web applications using React and Node.js, implementing REST APIs and improving UI/UX."
    },
    {
      company: "CodeForDigitalIndia",
      role: "Frontend Web Developer",
      duration: "Sep 2024 - Feb 2025 ",
      description: "Mean Stack and Java Development; contributed to feature development and bug fixing for various modules."
    }
  ];

  return (
    <section className="internship-section">
      <h2 className="section-title">Internships</h2>

      <div className="internship-roadmap">
        {internships.map((internship, index) => (
          <div key={index} className="roadmap-item">
            <div
              className="roadmap-box"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <h3>{internship.company}</h3>
              <h4>{internship.role}</h4>
              <span className="duration">{internship.duration}</span>
              <p>{internship.description}</p>
            </div>
            {index < internships.length - 1 && <div className="roadmap-connector"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internship;
