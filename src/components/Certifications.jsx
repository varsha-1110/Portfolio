import React, { useState } from "react";
import "./Certifications.css";

export default function Certifications() {
  const [hoveredCert, setHoveredCert] = useState(null);

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: "☁️",
      color: "#FF9900",
      description: "Foundation-level understanding of AWS Cloud, services, and terminology",
      skills: ["Cloud Computing", "AWS Services", "Cloud Architecture", "Cloud Security"],
      date: "Sept 19, 2025 - Sept 19, 2028",
      verifyUrl: "https://www.credly.com/badges/007fe6ad-ce26-41bc-b234-005e2dbd716f/public_url",
      downloadUrl: "/AWS Certified Cloud Practitioner certificate.pdf", // Replace with your actual PDF path
    },
    {
      title: "MongoDB Associate Node.js Developer",
      issuer: "MongoDB University",
      icon: "🍃",
      color: "#00ED64",
      description: "Proficiency in building applications with MongoDB and Node.js",
      skills: ["JavaScript", "Node.js", "MongoDB", "Data Modeling", "CRUD Operations"],
      date: "April 26, 2025",
      verifyUrl: "https://www.credly.com/badges/74792f3f-9d52-48a0-a7cd-fd102aa17f2c/public_url",
      downloadUrl: "/MongoDB Certified Associate Developer.pdf", // Replace with your actual PDF path
    },
    {
      title: "GitHub Foundations",
      issuer: "GitHub",
      icon: "🐙",
      color: "#181717",
      description: "Fundamental knowledge of GitHub and collaborative development",
      skills: ["DevOps", "CI/CD", "GitHub Actions", "Release Management"],
      date: "April 11, 2025 - April 11, 2028",
      verifyUrl: "https://www.credly.com/badges/de0c7da6-6d9c-4101-8411-c9df1291cf05/public_url",
      downloadUrl: "/GitHubFoundations.pdf", // Replace with your actual PDF path
    },
    {
      title: "Salesforce AI Associate",
      issuer: "Salesforce",
      icon: "🤖",
      color: "#00A1E0",
      description: "Understanding of AI concepts and Salesforce AI capabilities",
      skills: ["Artificial Intelligence", "CRM", "Salesforce Platform", "AI Ethics"],
      date: "2024",
      verifyUrl: "https://trailhead.salesforce.com/credentials/certification-detail-print/?searchString=your-cert-id",
      downloadUrl: "/Salesforce AIAssociate.pdf", // Replace with your actual PDF path
    },
  ];

  const handleVerifyClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDownload = (downloadUrl, certTitle) => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${certTitle.replace(/\s+/g, '-').toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certifications">
      <div className="certifications-header">
        <h2>Certifications</h2>
        <p className="certifications-subtitle">
          Industry-recognized credentials demonstrating expertise
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="certification-card"
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setHoveredCert(index)}
            onMouseLeave={() => setHoveredCert(null)}
          >
            <div className="cert-badge" style={{ background: cert.color }}>
              <span className="cert-icon">{cert.icon}</span>
            </div>

            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">
                <span className="issuer-icon">🏛️</span>
                {cert.issuer}
              </p>
              <p className="cert-date">
                <span className="date-icon">📅</span>
                {cert.date}
              </p>

              <div className={`cert-details ${hoveredCert === index ? 'visible' : ''}`}>
                <p className="cert-description">{cert.description}</p>
                
                <div className="cert-skills">
                  <h4>Key Skills:</h4>
                  <div className="skills-tags">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="cert-actions">
                <button 
                  className="verify-btn"
                  onClick={() => handleVerifyClick(cert.verifyUrl)}
                  title="Verify Certificate"
                >
                  <span>Verify</span>
                  <span className="verify-arrow">→</span>
                </button>
                <button 
                  className="download-btn"
                  onClick={() => handleDownload(cert.downloadUrl, cert.title)}
                  title="Download Certificate"
                >
                  <span>Download</span>
                  <span className="download-icon">→</span>
                </button>
              </div>
            </div>

            <div className="cert-corner"></div>
          </div>
        ))}
      </div>
    </section>
  );
}