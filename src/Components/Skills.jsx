import React from 'react';
import '../Styles/Skills.css';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiJavascript } from 'react-icons/si';

function Skills() {
  return (
    <section className="skills-section " id="skills">
      <div className="container text-center">
        <h2 className="section-title mb-4">My Skills</h2>
        <div className="row justify-content-center">
          {[
            { icon: <FaReact />, label: 'React.js' },
            { icon: <FaNodeJs />, label: 'Node.js' },
            { icon: <SiJavascript />, label: 'JavaScript' },
            { icon: <FaPython />, label: 'Python' },
            { icon: <SiMongodb />, label: 'MongoDB' },
            { icon: <FaHtml5 />, label: 'HTML5' },
            { icon: <FaCss3Alt />, label: 'CSS3' },
            { icon: <FaGitAlt />, label: 'Git' },
          ].map((skill, index) => (
            <div className="col-6 col-sm-4 col-md-3 mb-4" key={index}>
              <div className="p-4 skill-card">
                <div className="skill-icon mb-2">{skill.icon}</div>
                <h6 className="mb-0">{skill.label}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
