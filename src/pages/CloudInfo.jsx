import { useNavigate } from "react-router-dom";
import "../styles/CloudInfo.css";
import Footer from "../components/Footer";

function CloudInfo() {
  const navigate = useNavigate();

  return (
    <>
    <div className="cloud-page">

      {/* Background Blobs */}
      <div className="cloud-bg-blobs">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Breadcrumb */}
      {/* <div className="cloud-breadcrumb">
        <span onClick={() => navigate("/")}>
          Home
        </span>
        {" > "}
        <span>Cloud Storage</span>
      </div> */}

      {/* Hero Section */}
      <section className="cloud-hero-section">

        <div className="cloud-badge">
          SecureCloud Platform
        </div>

        <h1 className="cloud-title">
          ☁ Secure Cloud Storage
        </h1>

        <p className="cloud-hero-subtitle">
          Enterprise-grade encrypted cloud infrastructure powered by
          Multi-Authority Attribute-Based Encryption (MA-ABE),
          enabling secure data storage, controlled access,
          privacy-preserving keyword search, and enhanced cloud security.
        </p>

      </section>

      {/* Statistics */}
      <div className="cloud-stats-grid">

        <div className="cloud-stat-card">
          <h2>256-Bit</h2>
          <p>AES Encryption</p>
        </div>

        <div className="cloud-stat-card">
          <h2>100%</h2>
          <p>Encrypted Files</p>
        </div>

        <div className="cloud-stat-card">
          <h2>Multi</h2>
          <p>Authority Security</p>
        </div>

        <div className="cloud-stat-card">
          <h2>24/7</h2>
          <p>Availability</p>
        </div>

      </div>

      {/* Information Cards */}

      <div className="cloud-info-cards-grid">

        <div className="cloud-info-card">
          <h3>🔒 Secure Storage Infrastructure</h3>

          <p>
            Store and manage encrypted files securely using
            enterprise-grade cloud architecture designed to
            protect sensitive information from unauthorized access.
          </p>
        </div>

        <div className="cloud-info-card">
          <h3>🛡 End-to-End Encryption</h3>

          <p>
            Every file is encrypted before cloud storage,
            ensuring confidentiality and integrity throughout
            the entire lifecycle of the data.
          </p>
        </div>

        <div className="cloud-info-card">
          <h3>👥 Multi-Authority Access Control</h3>

          <p>
            Multiple trusted authorities independently manage
            user attributes, eliminating reliance on a single
            central authority.
          </p>
        </div>

        <div className="cloud-info-card">
          <h3>⚡ Privacy-Preserving Search</h3>

          <p>
            Search encrypted files efficiently without revealing
            file contents or compromising sensitive information.
          </p>
        </div>

      </div>

      {/* Features */}

      <section className="cloud-features-section">

        <h2 className="cloud-section-title">
          Platform Features
        </h2>

        <ul className="cloud-feature-list">
          <li>🔐 End-to-End File Encryption</li>
          <li>☁ Secure Cloud Storage</li>
          <li>👥 Attribute-Based Access Control</li>
          <li>⚡ Encrypted Keyword Search</li>
          <li>🛡 Multi-Authority Architecture</li>
          <li>📊 Activity Monitoring</li>
        </ul>

      </section>

      {/* CTA */}

      <section className="cloud-cta-section">

        <h2>
          Start Protecting Your Data Today
        </h2>

        <p>
          Access SecureCloud and experience enterprise-grade
          protection for sensitive cloud data.
        </p>

        <div className="cloud-button-group">

          <button
            className="cloud-primary-btn"
            onClick={() => navigate("/owner")}
          >
            Login as Data Owner
          </button>

          <button
            className="cloud-secondary-btn"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

        </div>

      </section>

    </div>

      <Footer />
    </>
    
  );
}

export default CloudInfo;