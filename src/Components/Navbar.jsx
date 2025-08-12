import React, { useState, useEffect } from 'react';
import '../Styles/Navbar.css';
import AzharLogo from '../assets/azhar-logo.svg';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on window resize (desktop view)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="custom-navbar navbar navbar-dark fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a href="#hero" className="navbar-brand d-flex align-items-center">
            <img src={AzharLogo} alt="Azhar Logo" height="36" />
          </a>
          <button
            className="btn btn-outline-light d-lg-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <ul className="navbar-nav d-none d-lg-flex flex-row gap-4 pe-5">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>×</button>
        <a href="#hero" className="home-link" onClick={() => setSidebarOpen(false)}>Home</a>
        <a href="#about" onClick={() => setSidebarOpen(false)}>About</a>
        <a href="#projects" onClick={() => setSidebarOpen(false)}>Projects</a>
        <a href="#skills" onClick={() => setSidebarOpen(false)}>Skills</a>
        <a href="#contact" onClick={() => setSidebarOpen(false)}>Contact</a>
      </div>
    </>
  );
}

export default Navbar;
