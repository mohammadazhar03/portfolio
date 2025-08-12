import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../Styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container text-center">
        <h2>Let's Connect</h2>
        <p>Open to opportunities, collaborations, and challenges.</p>
        <div className="contact-buttons">
          <a href="mailto:azharmohd2703@gmail.com" className="contact-btn">Email Me</a>
          <a href="https://www.linkedin.com/in/azharmohd2002" target="_blank" rel="noopener noreferrer" className="contact-btn">LinkedIn</a>
        </div>

        {/* Simple Footer Inside Contact */}
        <div className="footer-inline">
          <p>© {new Date().getFullYear()} Mohammad Azhar</p>
          <div className="footer-icons">
            <a href="mailto:azharmohd2703@gmail.com"><FaEnvelope /></a>
            <a href="https://github.com/" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/azharmohd2002" target="_blank"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
