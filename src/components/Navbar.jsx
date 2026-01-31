import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">Varsha Palchuri</div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
       
        <a href="#projects" onClick={handleLinkClick}>Projects</a>
        <a href="#skills" onClick={handleLinkClick}>Skills</a>
         <a href="#education" onClick={handleLinkClick}>Education</a>
        <a href="#achievements" onClick={handleLinkClick}>Achievements</a>
        <a href="#certifications" onClick={handleLinkClick}>Certifications</a>
        <a href="#publications" onClick={handleLinkClick}>Publications</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
        <a href="/Bhavya_Varsha_Resume.pdf" download className="resume-btn">Download Resume</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}