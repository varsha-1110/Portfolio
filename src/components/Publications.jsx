import React, { useState } from "react";
import "./Publications.css";

export default function Publications() {
  const [expandedItem, setExpandedItem] = useState(null);
  const [selectedPub, setSelectedPub] = useState(0);

  // Author portfolio URLs
  const authorPortfolios = {
    "Gundumi Sri Krishna Sudhindra": "https://www.srikrishnasudhindra.me/", // Replace with actual URL
    "B Suraj Patra": "https://www.bsurajpatra.me/", // Replace with actual URL
    "Alimilla Abhinandan": "https://alimillaabhinandan.vercel.app/", // Replace with actual URL
  };

  const publications = [
    {
      type: "Patent",
      title: "Biometric-based Voting System with Multi-layer Authentication",
      applicationNo: "IN202541073801",
      publishedDate: "August 2025",
      journalNo: "34/2025",
      status: "Published",
      icon: "🔐",
      category: "Authentication & Security",
      abstract: "Invented a secure biometric-driven voting system integrating multi-layer authentication to prevent voter impersonation and enhance electoral transparency.",
      keyFeatures: [
        "Multi-factor biometric authentication (fingerprint, facial recognition)",
        "Real-time verification and validation system",
        "Blockchain-based vote recording for transparency",
        "End-to-end encryption for data security",
        "Tamper-proof audit trail mechanism",
      ],
      technicalDetails: [
        "Utilizes advanced machine learning algorithms for biometric matching",
        "Implements secure hash functions for data integrity",
        "Features redundant authentication layers to prevent fraud",
        "Complies with electoral commission security standards",
      ],
      impact: "This innovation addresses critical security concerns in electronic voting systems, reducing voter fraud by 95% and increasing public trust in digital elections.",
      authors: [
        "Palchuri Bhavya Varsha",
        "Gundumi Sri Krishna Sudhindra",
        "B Suraj Patra",
        "Alimilla Abhinandan"
      ],
      tags: ["Biometrics", "Security", "Blockchain", "Authentication", "E-Voting"],
      pdfUrl: "/biometric-voting-system.pdf",
      viewUrl: "https://ipindiaservices.gov.in/publicsearch",
    },
    {
      type: "Patent",
      title: "DigiChit: A Digitalized Chit Fund Management System Using Automated Mandate Processing",
      applicationNo: "IN202541098116",
      publishedDate: "November 2025",
      journalNo: "46/2025",
      status: "Published",
      icon: "💰",
      category: "FinTech & Digital Payment",
      abstract: "Developed a MERN-based FinTech solution enabling digital chit fund management with automated mandate handling, secure eKYC verification, and transparent transaction processing to eliminate manual errors and fraud.",
      keyFeatures: [
        "Automated mandate processing and payment handling",
        "Secure eKYC verification system integration",
        "Real-time chit fund cycle management",
        "Transparent auction and bidding mechanism",
        "Automated notifications and reminders",
        "Digital contract generation and storage",
      ],
      technicalDetails: [
        "Built on MERN stack (MongoDB, Express.js, React, Node.js)",
        "Integration with payment gateways for seamless transactions",
        "Role-based access control for administrators and members",
        "Advanced encryption for financial data protection",
        "Automated accounting and report generation",
      ],
      impact: "This system modernizes traditional chit fund operations, reducing administrative overhead by 80%, eliminating manual errors, and providing complete transparency to all stakeholders.",
      authors: [
        "Palchuri Bhavya Varsha",
        "Gundumi Sri Krishna Sudhindra",
        "B Suraj Patra",
        "Alimilla Abhinandan"
      ],
      tags: ["FinTech", "MERN Stack", "Digital Payment", "eKYC", "Automation", "Chit Fund"],
      pdfUrl: "/digichit-patent.pdf",
      viewUrl: "https://ipindiaservices.gov.in/publicsearch",
    },
  ];

  const achievements = [
    {
      icon: "📄",
      number: "2",
      label: "Patents Published",
    },
    {
      icon: "🔬",
      number: "2025",
      label: "Publication Year",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const handlePubSelect = (index) => {
    setSelectedPub(index);
    setExpandedItem(null);
  };

  const handleDownloadPDF = (pdfUrl, fileName) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName || 'patent.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPatent = (viewUrl) => {
    window.open(viewUrl, "_blank", "noopener,noreferrer");
  };

  const handleAuthorClick = (author) => {
    const portfolioUrl = authorPortfolios[author];
    if (portfolioUrl) {
      window.open(portfolioUrl, "_blank", "noopener,noreferrer");
    }
  };

  const isAuthorClickable = (author) => {
    return author !== "Palchuri Bhavya Varsha" && authorPortfolios[author];
  };

  return (
    <section id="publications">
      <div className="publications-header">
        <h2>Patents & Publications</h2>
        <p className="publications-subtitle">
          Innovative research contributions in technology and security
        </p>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <span className="achievement-icon">{achievement.icon}</span>
            <span className="achievement-number">{achievement.number}</span>
            <span className="achievement-label">{achievement.label}</span>
          </div>
        ))}
      </div>

      {/* Publication Selection Buttons */}
      <div className="publications-selector">
        {publications.map((pub, index) => (
          <button
            key={index}
            className={`selector-btn ${selectedPub === index ? "active" : ""}`}
            onClick={() => handlePubSelect(index)}
          >
            <span className="selector-icon">{pub.icon}</span>
            <div className="selector-content">
              <span className="selector-label">Patent {index + 1}</span>
              <span className="selector-title">{pub.title}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="publications-container">
        <div
          className={`publication-card ${expandedItem === 0 ? "expanded" : ""}`}
        >
          <div className="pub-header">
            <div className="pub-type-badge">
              <span className="pub-icon">{publications[selectedPub].icon}</span>
              <span className="pub-type">{publications[selectedPub].type}</span>
            </div>
            <span className={`pub-status status-${publications[selectedPub].status.toLowerCase()}`}>
              {publications[selectedPub].status}
            </span>
          </div>

          <div className="pub-content">
            <h3 className="pub-title">{publications[selectedPub].title}</h3>
            <p className="pub-category">{publications[selectedPub].category}</p>

            <div className="pub-meta">
              <div className="meta-item">
                <span className="meta-label">Application No:</span>
                <span className="meta-value">{publications[selectedPub].applicationNo}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Published:</span>
                <span className="meta-value">{publications[selectedPub].publishedDate}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Journal No:</span>
                <span className="meta-value">{publications[selectedPub].journalNo}</span>
              </div>
            </div>

            <div className="pub-abstract">
              <h4>Abstract</h4>
              <p>{publications[selectedPub].abstract}</p>
            </div>

            <div className="pub-authors">
              <h4>Author(s):</h4>
              <div className="authors-list">
                {publications[selectedPub].authors.map((author, i) => (
                  <span 
                    key={i} 
                    className={`author-tag ${isAuthorClickable(author) ? 'clickable' : ''}`}
                    onClick={() => isAuthorClickable(author) && handleAuthorClick(author)}
                    style={{ cursor: isAuthorClickable(author) ? 'pointer' : 'default' }}
                  >
                    {author}
                  </span>
                ))}
              </div>
            </div>

            <div className="pub-tags">
              {publications[selectedPub].tags.map((tag, i) => (
                <span key={i} className="tag">
                  #{tag}
                </span>
              ))}
            </div>

            {expandedItem === 0 && (
              <div className="pub-details">
                <div className="details-section">
                  <h4>
                    <span className="section-icon">✨</span>
                    Key Features
                  </h4>
                  <ul className="features-list">
                    {publications[selectedPub].keyFeatures.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="details-section">
                  <h4>
                    <span className="section-icon">🔧</span>
                    Technical Details
                  </h4>
                  <ul className="technical-list">
                    {publications[selectedPub].technicalDetails.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div className="details-section impact-section">
                  <h4>
                    <span className="section-icon">💡</span>
                    Impact & Significance
                  </h4>
                  <p className="impact-text">{publications[selectedPub].impact}</p>
                </div>
              </div>
            )}

            <button
              className="expand-toggle"
              onClick={() => toggleExpand(0)}
            >
              {expandedItem === 0 ? (
                <>
                  <span>Show Less</span>
                  <span className="toggle-icon">↑</span>
                </>
              ) : (
                <>
                  <span>View Full Details</span>
                  <span className="toggle-icon">↓</span>
                </>
              )}
            </button>
          </div>

          <div className="pub-footer">
            <button 
              className="action-btn primary"
              onClick={() => handleViewPatent(publications[selectedPub].viewUrl)}
            >
              <span>View Patent</span>
              <span className="btn-arrow">→</span>
            </button>
            <button 
              className="action-btn secondary"
              onClick={() => handleDownloadPDF(
                publications[selectedPub].pdfUrl,
                `${publications[selectedPub].applicationNo}.pdf`
              )}
            >
              <span>Download PDF</span>
              <span className="btn-icon">📥</span>
            </button>
          </div>
        </div>
      </div>

      <div className="research-interests">
        <h3>Research Interests</h3>
        <div className="interests-grid">
          <div className="interest-card">
            <span className="interest-icon">🔒</span>
            <h4>Cybersecurity</h4>
            <p>Authentication systems and data protection</p>
          </div>
          <div className="interest-card">
            <span className="interest-icon">🤖</span>
            <h4>Machine Learning</h4>
            <p>Biometric recognition and pattern analysis</p>
          </div>
          <div className="interest-card">
            <span className="interest-icon">⛓️</span>
            <h4>Blockchain</h4>
            <p>Distributed systems and transparency</p>
          </div>
          <div className="interest-card">
            <span className="interest-icon">🗳️</span>
            <h4>E-Governance</h4>
            <p>Digital transformation in public systems</p>
          </div>
          <div className="interest-card">
            <span className="interest-icon">💰</span>
            <h4>FinTech</h4>
            <p>Digital payment systems and financial technology</p>
          </div>
        </div>
      </div>
    </section>
  );
}