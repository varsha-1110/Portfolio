import React from "react";
import "./Achievements.css";

export default function Achievements() {
  const achievements = [
    {
      title: "Build for Bharat",
      badge: "FINALIST",
      badgeColor: "#10b981",
      icon: "🏅",
      description: "Finalist in a student innovation challenge for building impactful technical solutions.",
      gradient: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)"
    },
    {
      title: "Code for Bharat – Season 2",
      badge: "SEMI-FINALIST",
      badgeColor: "#f59e0b",
      icon: "🏆",
      description: "Semi-finalist in a national-level hackathon focused on real-world problem solving.",
      gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
    }
  ];

  return (
    <section id="achievements">
      <div className="achievements-header">
        <h2>Achievements & Recognition</h2>
        <div className="header-underline-white"></div>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="achievement-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="achievement-badge" style={{ background: achievement.badgeColor }}>
              {achievement.badge}
            </div>

            <div 
              className="achievement-icon-box" 
              style={{ background: achievement.gradient }}
            >
              <span className="achievement-icon">{achievement.icon}</span>
            </div>

            <div className="achievement-content">
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>

            <div className="achievement-glow" style={{ background: achievement.gradient }}></div>
          </div>
        ))}
      </div>
    </section>
  );
}