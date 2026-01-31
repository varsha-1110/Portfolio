import React, { useState } from "react";
import "./Skills.css";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillsData = {
    frontend: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "JavaScript", level: 88, icon: "🟨" },
      { name: "HTML/CSS", level: 92, icon: "🎨" },
      { name: "Tailwind CSS", level: 85, icon: "💨" },
    ],
    backend: [
      { name: "Node.js", level: 87, icon: "🟢" },
      { name: "Express.js", level: 85, icon: "🚂" },
      { name: "MongoDB", level: 83, icon: "🍃" },
      { name: "RESTful APIs", level: 88, icon: "🔌" },
    ],
    programming: [
      { name: "Java", level: 82, icon: "☕" },
      { name: "C/C++", level: 80, icon: "🔧" },
      { name: "Python", level: 78, icon: "🐍" },
    ],
    tools: [
      { name: "Git", level: 85, icon: "📦" },
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "AWS", level: 72, icon: "☁️" },
      { name: "CI/CD", level: 70, icon: "🔄" },
      { name: "Power BI", level: 80, icon: "📊" },
    ],
  };

  const softSkills = [
    { name: "Team Management", icon: "👥" },
    { name: "Problem-Solving", icon: "🧩" },
    { name: "Collaboration", icon: "🤝" },
    { name: "Negotiation", icon: "💼" },
    { name: "Adaptability", icon: "🔄" },
    { name: "Communication", icon: "💬" },
  ];

  const categories = [
    { id: "all", label: "All Skills", icon: "🌟" },
    { id: "frontend", label: "Frontend", icon: "🎨" },
    { id: "backend", label: "Backend", icon: "⚙️" },
    { id: "programming", label: "Programming", icon: "💻" },
    { id: "tools", label: "Tools & Others", icon: "🛠️" },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return Object.entries(skillsData).flatMap(([category, skills]) =>
        skills.map(skill => ({ ...skill, category }))
      );
    }
    return skillsData[activeCategory]?.map(skill => ({ ...skill, category: activeCategory })) || [];
  };

  return (
    <section id="skills">
      <div className="skills-header">
        <h2>Technical Expertise</h2>
        <p className="skills-subtitle">
          Proficient in modern technologies and development practices
        </p>
      </div>

      <div className="skills-categories">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? "active" : ""}`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span className="category-icon">{category.icon}</span>
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {getFilteredSkills().map((skill, index) => (
          <div 
            key={index} 
            className="skill-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-header">
              <span className="skill-icon">{skill.icon}</span>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
            <div className="skill-bar-container">
              <div 
                className="skill-bar"
                style={{ width: `${skill.level}%` }}
              >
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="soft-skills-section">
        <h3 className="soft-skills-title">
          <span className="title-icon">✨</span>
          Soft Skills
        </h3>
        <div className="soft-skills-grid">
          {softSkills.map((skill, index) => (
            <div 
              key={index} 
              className="soft-skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="soft-skill-icon">{skill.icon}</span>
              <span className="soft-skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}