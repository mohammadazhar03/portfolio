import React from 'react';
import '../Styles//Education.css';

const educationData = [
  { degree: "B.E in Information Technology", school: "Lords Institute of Engineering Technology", year: "2021 - 2024" },
  { degree: "Diploma in Mechanical Engineering", school: "Sri Sangameshwara Govt Polytechnic", year: "2018 - 2021" }
];

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <p className="school">{edu.school}</p>
              <p className="year">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
