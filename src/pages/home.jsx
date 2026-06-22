import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import {
  FaShieldAlt,
  FaUserShield,
  FaSearch,
  FaLock,
  FaCloud,
  FaKey,
  FaUsers,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer
} from "react-icons/fa";

import { SiMongodb, SiExpress } from "react-icons/si";

import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();

  return (

    
 

    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero-section">

        <h1>
          Multi-Authority Attribute-Based
          Keyword Search over Encrypted
          Cloud Data
        </h1>

        <p>
          Securely store, search, and manage encrypted documents
          in cloud storage with role-based access control,
          AES encryption, and secure keyword search.
        </p>

        <div className="hero-buttons">
          <button
            className="owner-btn"
            onClick={() => navigate("/owner")}
          >
            Data Owner Login
          </button>

          <button
            className="user-btn"
            onClick={() => navigate("/user")}
          >
            Data User Login
          </button>
        </div>

      </section>
     
     
    {/* NAVBAR BELOW HERO */}
    <Navbar />







<section className="trust-section">

  <div className="section-header">
    <span className="section-tag">
      SECURITY FRAMEWORK
    </span>

    <h2>
      Trusted Security Technologies
    </h2>

    <p>
      Enterprise-grade protection mechanisms designed
      to secure cloud data, user access, and encrypted
      search operations.
    </p>
  </div>

  <div className="trust-grid">

    <div className="trust-card">
      <span className="trust-icon">🔒</span>
      <h3>AES-256 Encryption</h3>
      <p>
        Military-grade encryption for secure
        document protection.
      </p>
    </div>

    <div className="trust-card">
      <span className="trust-icon">☁</span>
      <h3>Cloud Security</h3>
      <p>
        Secure cloud storage with encrypted
        file management.
      </p>
    </div>

    <div className="trust-card">
      <span className="trust-icon">🔑</span>
      <h3>JWT Authentication</h3>
      <p>
        Secure identity verification and
        session management.
      </p>
    </div>

    <div className="trust-card">
      <span className="trust-icon">🛡</span>
      <h3>Access Control</h3>
      <p>
        Multi-authority role management
        and permissions.
      </p>
    </div>

  </div>

</section>

      {/* FEATURES */}
      <section className="features-section">

        <h2>Key Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>🔒 AES Encryption</h3>
            <p>
              Protect uploaded files using advanced
              encryption techniques.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔍 Keyword Search</h3>
            <p>
              Search encrypted documents efficiently
              without compromising security.
            </p>
          </div>

          <div className="feature-card">
            <h3>☁ Secure Cloud Storage</h3>
            <p>
              Store files securely with cloud-based
              encrypted storage.
            </p>
          </div>

          <div className="feature-card">
            <h3>👥 Multi-Authority Access</h3>
            <p>
              Separate access privileges for
              Data Owners and Data Users.
            </p>
          </div>
          <div className="feature-card">
  <h3>🛡 Role-Based Access Control</h3>
  <p>
    Grant secure access permissions based on
    user roles, ensuring only authorized
    users can access sensitive documents.
  </p>
</div>

<div className="feature-card">
  <h3>⚡ Fast Secure Retrieval</h3>
  <p>
    Retrieve encrypted files quickly using
    optimized keyword indexing while
    maintaining complete data confidentiality.
  </p>
</div>

        </div>

      </section>





      <section className="about-section">

  <div className="about-content">

    <div className="about-left">

      <h2>Secure Data Management Platform</h2>

      <p>
        Our platform enables organizations to securely
        store, search and retrieve encrypted documents
        from cloud environments without compromising
        confidentiality.
      </p>

      <p>
        By combining AES encryption, keyword-based
        retrieval and multi-authority access control,
        the system ensures maximum security and
        operational efficiency.
      </p>

    </div>

    <div className="about-right">

      <div className="about-card">
        🔐 Enterprise Security
      </div>

      <div className="about-card">
        ⚡ High Performance Search
      </div>

      <div className="about-card">
        ☁ Cloud Scalability
      </div>

      <div className="about-card">
        🛡 Access Governance
      </div>

    </div>

  </div>

</section>

      {/* WORKFLOW */}
      <section className="workflow-section">

        <h2>How It Works</h2>

        <div className="workflow">

          <div className="step">
            <span>1️⃣</span>
            <h4>Upload</h4>
          </div>

          <div className="arrow">➜</div>

          <div className="step">
            <span>2️⃣</span>
            <h4>Encrypt</h4>
          </div>

          <div className="arrow">➜</div>

          <div className="step">
            <span>3️⃣</span>
            <h4>Store</h4>
          </div>

          <div className="arrow">➜</div>

          <div className="step">
            <span>4️⃣</span>
            <h4>Search</h4>
          </div>

          <div className="arrow">➜</div>

          <div className="step">
            <span>5️⃣</span>
            <h4>Download</h4>
          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="stats-section">

        <h2>Project Statistics</h2>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>120+</h3>
            <p>Files Stored</p>
          </div>

          <div className="stat-card">
            <h3>450+</h3>
            <p>Searches</p>
          </div>

          <div className="stat-card">
            <h3>300+</h3>
            <p>Downloads</p>
          </div>

          <div className="stat-card">
            <h3>50+</h3>
            <p>Users</p>
          </div>

        </div>

      </section>



      <section className="team-section">

  <h2>Leadership Team</h2>

  <div className="team-grid">

    <div className="team-card">

      <div className="avatar">
        👨‍💼
      </div>

      <h3>Platform Administrator</h3>

      <p>
        Responsible for platform management,
        monitoring and access control.
      </p>

    </div>

    <div className="team-card">

      <div className="avatar">
        👨‍💻
      </div>

      <h3>Data Owner</h3>

      <p>
        Uploads encrypted documents and manages
        permissions securely.
      </p>

    </div>

    <div className="team-card">

      <div className="avatar">
        👩‍💻
      </div>

      <h3>Authorized User</h3>

      <p>
        Searches and accesses encrypted files
        based on granted privileges.
      </p>

    </div>

  </div>

</section>







<section className="contact-section">

  <div className="contact-box">

    <span className="contact-tag">
      SECURE COLLABORATION
    </span>

    <h2>
      Protect Your Critical Data Today
    </h2>

    <p>
      Experience enterprise-grade encrypted storage,
      secure search capabilities, and advanced
      access management for sensitive information.
    </p>

    <div className="contact-buttons">

      <button className="primary-contact-btn">
        Get Started
      </button>

      <button className="secondary-contact-btn">
        Request Demo
      </button>

    </div>

  </div>

</section>

      {/* FOOTER */}
   <footer className="footer">

  <div className="footer-container">

    {/* Company */}
    <div className="footer-section">

      <h3>
        <FaShieldAlt className="footer-logo-icon" />
        SecureCloud
      </h3>

      <p>
        Multi-Authority Attribute-Based Keyword Search
        over Encrypted Cloud Data.
      </p>

      <p className="footer-tagline">
        Secure • Searchable • Encrypted
      </p>

    </div>

    {/* Modules */}
    <div className="footer-section">

      <h4>Project Modules</h4>

      <ul>

        <li>
          <FaDatabase />
          Data Owner
        </li>

        <li>
          <FaUserShield />
          Data User
        </li>

        <li>
          <FaSearch />
          Keyword Search
        </li>

        <li>
          <FaLock />
          File Encryption
        </li>

      </ul>

    </div>

    {/* Security */}
    <div className="footer-section">

      <h4>Security Features</h4>

      <ul>

        <li>
          <FaShieldAlt />
          AES Encryption
        </li>

        <li>
          <FaCloud />
          Cloud Storage
        </li>

        <li>
          <FaKey />
          JWT Authentication
        </li>

        <li>
          <FaUsers />
          Role-Based Access
        </li>

      </ul>

    </div>

    {/* Technology */}
    <div className="footer-section">

      <h4>Technology Stack</h4>

      <ul>

        <li>
          <FaReact />
          React.js
        </li>

        <li>
          <FaNodeJs />
          Node.js
        </li>

        <li>
          <SiMongodb />
          MongoDB
        </li>

        <li>
          <SiExpress />
          Express.js
        </li>

      </ul>

    </div>

  </div>

  <div className="footer-bottom">

    <p>
      © 2026 SecureCloud. All Rights Reserved.
    </p>

    <p>
      B.Tech Final Year Project | Full Stack Application
    </p>

  </div>

</footer>
    </div>
   
  );
}

export default Home;