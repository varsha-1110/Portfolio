import React, { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AaharExpress",
      subtitle: "Food Delivery & Donation Platform",
      date: "Jan 2025 – Present",
      status: "In Development",
      category: "Full Stack Web App",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
      desc: [
        "Built a comprehensive food delivery platform that connects donors with recipients to reduce food waste and combat hunger.",
        "Implemented dual-workflow system allowing donors to list surplus food and users to request donations in real-time.",
        "Designed responsive UI with React and Tailwind CSS ensuring seamless experience across all devices.",
        "Integrated secure user authentication with JWT tokens and role-based access control.",
        "Developed RESTful APIs for efficient data management and real-time updates.",
      ],
      features: [
        "Real-time food listing and tracking",
        "Geolocation-based donor matching",
        "Donation history and analytics",
        "Admin dashboard for monitoring",
      ],
      github: "https://github.com/varsha-1110/aaharexpress",
      live: "#",
      image: "🍽️",
    },
    {
      title: "SafeWebVerify",
      subtitle: "AI-Powered Phishing Detection System",
      date: "Jun 2024 – Present",
      status: "Active",
      category: "Machine Learning & Security",
      tech: ["React", "Node.js", "Flask", "Python", "MongoDB", "Machine Learning", "JWT"],
      desc: [
        "Developed an intelligent phishing detection application using MERN stack integrated with Flask-based ML API.",
        "Implemented machine learning models achieving 90%+ accuracy in identifying malicious URLs and phishing attempts.",
        "Created real-time URL monitoring system that analyzes websites using multiple security parameters.",
        "Integrated JWT-based authentication system for secure user sessions and data protection.",
        "Built comprehensive dashboard displaying threat analysis, security scores, and historical scan data.",
      ],
      features: [
        "Real-time URL scanning and analysis",
        "ML-based threat detection",
        "Security score dashboard",
        "Phishing attempt history tracking",
      ],
      github: "https://github.com/varsha-1110/safewebverify",
      live: "#",
      image: "🛡️",
    },
    {
  title: "Velocity Run",
  subtitle: "Endless Runner Game",
  date: "Feb 2025 – Present",
  status: "In Development",
  category: "Game Development",
  tech: ["Unity", "C#", "Game Physics", "UI Systems"],
  desc: [
    "Developing a fast-paced endless runner game focused on smooth controls, increasing difficulty, and engaging gameplay mechanics.",
    "Implemented core gameplay features including player movement, obstacle spawning, collision detection, and score tracking.",
    "Designed progressive difficulty system where speed and obstacle density increase over time.",
    "Created responsive in-game UI including score display, pause menu, and game-over screens.",
    "Optimized performance to ensure smooth gameplay across different screen resolutions and devices.",
  ],
  features: [
    "Endless procedurally generated path",
    "Dynamic obstacle and power-up system",
    "Score and high-score tracking",
    "Pause, restart, and game-over mechanics",
  ],
  github: "https://github.com/varsha-1110/velocity-run",
  live: "#",
  image: "🎮",
},

    {
      title: "KarmaSync",
      subtitle: "Project Management & Collaboration Tool",
      date: "Apr 2024 – Jul 2024",
      status: "Completed",
      category: "Full Stack Web App",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "WebSocket"],
      desc: [
        "Created a comprehensive project management tool with Kanban-style workflows and interactive dashboards.",
        "Implemented role-based access control with three user levels: Admin, Manager, and Team Member.",
        "Developed real-time collaboration features allowing team members to update tasks and communicate seamlessly.",
        "Built secure JWT-based authentication system with refresh token mechanism for extended sessions.",
        "Designed intuitive drag-and-drop interface for task management and project organization.",
      ],
      features: [
        "Kanban board with drag-and-drop",
        "Real-time team collaboration",
        "Task assignment and tracking",
        "Project analytics and reports",
      ],
      github: "https://github.com/varsha-1110/karmasync",
      live: "#",
      image: "📊",
    },
  ];

  return (
    <section id="projects">
      <div className="projects-header">
        <h2>Featured Projects</h2>
        <p className="projects-subtitle">
          Building innovative solutions with modern technologies
        </p>
      </div>
      
      <div className="project-grid">
        {projects.map((project, i) => (
          <div 
            key={i} 
            className="project-card"
            onClick={() => setSelectedProject(selectedProject === i ? null : i)}
          >
            <div className="project-header">
              <div className="project-icon">{project.image}</div>
              <span className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-category">{project.category}</p>
              <p className="project-date">📅 {project.date}</p>
              
              <div className="tech-stack">
                {project.tech.map((tech, j) => (
                  <span key={j} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <ul className="project-description">
                {project.desc.slice(0, selectedProject === i ? project.desc.length : 2).map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
              
              {selectedProject === i && (
                <div className="project-details">
                  <h4>Key Features:</h4>
                  <ul className="features-list">
                    {project.features.map((feature, j) => (
                      <li key={j}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Code</span>
                  <span className="link-arrow">→</span>
                </a>
                {project.live !== "#" && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link live-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Live Demo</span>
                    <span className="link-arrow">→</span>
                  </a>
                )}
              </div>
              
              <button className="expand-btn">
                {selectedProject === i ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}