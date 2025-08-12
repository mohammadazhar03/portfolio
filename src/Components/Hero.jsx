import React from 'react';
import '../Styles/Hero.css';
import profileImage from '../assets/azhar2.jpg';

function Hero() {
  return (
    <section id='hero' className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 text-center text-md-start" data-aos="fade-right">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Mohammad Azhar</span>
            </h1>
            <p className="hero-subtitle">
              Full-Stack Developer | React Enthusiast | Python Programmer
            </p>
            <p className="hero-description">
              Passionate about building performant web applications with beautiful UIs and scalable backends. I love exploring new technologies and bringing ideas to life through code.
            </p>
            <ul className="hero-bullets">
              <li>🔧 MERN Stack Developer</li>
              <li>🚀 Real-time Web Apps Enthusiast</li>
              <li>📊 Frontend Web Development</li>
            </ul>
            <a href="#projects" className="btn btn-outline-light mt-3">
              View My Work
            </a>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0" data-aos="fade-left">
            <img
              src={profileImage}
              alt="Mohammad Azhar"
              className="hero-img-large"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
