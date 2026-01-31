import React from "react";
import "./Education.css";

export default function Education() {
  const education = [
    {
      institution: "K L E F Deemed To Be University",
      degree: "B.Tech CSE",
      duration: "2023 – 2027",
      location: "Vijayawada, India",
      gpa: "9.47 / 10",
      icon: "🎓"
    },
    {
      institution: "Oxford Junior College",
      degree: "Class XII",
      duration: "2021 – 2023",
      location: "Narasaraopeta, India",
      gpa: "9.6 / 10",
      icon: "📚"
    },
    {
      institution: "Akshara School",
      degree: "Class X",
      duration: "2020 – 2021",
      location: "Gurazala, India",
      gpa: "10 / 10",
      icon: "🏫"
    }
  ];

  return (
    <section id="education">
      <div className="education-header">
        <h2>Education</h2>
        <div className="header-underline"></div>
      </div>

      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-card" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="education-icon">
              <span>{edu.icon}</span>
            </div>
            
            <div className="education-content">
              <div className="education-main">
                <h3 className="institution-name">{edu.institution}</h3>
                <span className="education-duration">{edu.duration}</span>
              </div>
              
              <p className="degree-name">{edu.degree}</p>
              
              <div className="education-details">
                <div className="detail-item">
                  <span className="detail-label">GPA:</span>
                  <span className="detail-value gpa-value">{edu.gpa}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">📍</span>
                  <span className="detail-value">{edu.location}</span>
                </div>
              </div>
            </div>

            <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
          </div>
        ))}
      </div>
    </section>
  );
}