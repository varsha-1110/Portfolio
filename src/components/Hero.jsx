import React from "react";
import profileImg from "../assets/varsha.jpeg";
import "./Hero.css";


export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-greeting">Hello, I'm</span>
          <h1 className="hero-name">PALCHURI BHAVYA VARSHA</h1>
          <h2 className="hero-title">
  Full Stack Developer | Game Developer | UI/UX Designer
</h2>

<p className="hero-description">
  B.Tech CSE (Honors) student with hands-on experience in full-stack web development,
  game development, and UI/UX design. Skilled in building scalable web applications,
  developing interactive and performance-focused game experiences, and designing
  intuitive, user-centric interfaces. Proficient in modern JavaScript frameworks,
  responsive design principles, backend integration, databases, and creating engaging
  digital products across web and interactive platforms.
</p>

          <div className="hero-contact">
            <span>📍 Gurazala, India - 522415</span>
            <span>📧 2300030500cseelge@gmail.com</span>
            <span>☎ +91 7569503047</span>
          </div>


          <div className="hero-links">
            <a href="https://linkedin.com/in/varsha-palchuri" target="_blank" rel="noopener noreferrer" className="hero-link">
              LinkedIn
            </a>
            <a href="https://github.com/varsha-1110" target="_blank" rel="noopener noreferrer" className="hero-link">
              GitHub
            </a>
            <a href="/Bhavya_Varsha_Resume.pdf" download className="resume-btn">
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
  <img src={profileImg} alt="Bhavya Varsha" className="hero-profile-img" />
</div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll Down</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
}