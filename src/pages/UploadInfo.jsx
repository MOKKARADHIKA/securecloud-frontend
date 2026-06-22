import { useNavigate } from "react-router-dom";
import "../styles/UploadInfo.css";
import Footer from "../components/Footer";


function UploadInfo() {
  const navigate = useNavigate();

  return (
    <>
    <div className="upload-page">


      

      {/* Background Effects */}
      <div className="upload-bg">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Breadcrumb */}
      

      {/* Hero Section */}
      <section className="upload-hero">

        <div className="upload-badge">
          Secure Document Management
        </div>

        <h1>⬆ Secure Document Upload</h1>

        <p>
          Upload confidential files to the cloud using
          enterprise-grade encryption and secure storage
          mechanisms. Every uploaded document is protected
          before it reaches cloud storage, ensuring privacy,
          integrity, and controlled access.
        </p>

      </section>

      {/* Info Cards */}
      <div className="upload-cards">

        <div className="upload-card">
          <h3>🔐 End-to-End Encryption</h3>
          <p>
            Files are encrypted before storage, ensuring
            that sensitive information remains protected
            from unauthorized access.
          </p>
        </div>

        <div className="upload-card">
          <h3>☁ Secure Cloud Storage</h3>
          <p>
            Uploaded documents are stored in a secure cloud
            environment with high availability and reliability.
          </p>
        </div>

        <div className="upload-card">
          <h3>👥 Attribute-Based Access</h3>
          <p>
            Access permissions are controlled using
            user attributes and security policies.
          </p>
        </div>

        <div className="upload-card">
          <h3>🛡 Data Integrity</h3>
          <p>
            Security mechanisms ensure uploaded files
            remain authentic and unaltered.
          </p>
        </div>

      </div>

      {/* Features */}
      <section className="upload-features">

        <h2>Key Benefits</h2>

        <div className="feature-grid">

          <div className="feature-item">
            ⚡ Fast & Secure Uploads
          </div>

          <div className="feature-item">
            🔒 Encrypted Storage
          </div>

          <div className="feature-item">
            ☁ Cloud Availability
          </div>

          <div className="feature-item">
            👥 Role-Based Access
          </div>

          <div className="feature-item">
            📊 Secure Management
          </div>

          <div className="feature-item">
            🛡 Enterprise Security
          </div>

        </div>

      </section>



      <section className="upload-process">

  <h2>How Secure Upload Works</h2>

  <div className="upload-cards">

  <div className="upload-card">
    <h3>🔒 End-to-End Encryption</h3>
    <p>Files are encrypted before reaching cloud storage.</p>
  </div>

  <div className="upload-card">
    <h3>☁ Secure Cloud Storage</h3>
    <p>Enterprise-grade storage with high availability.</p>
  </div>

  <div className="upload-card">
    <h3>👥 Attribute Access Control</h3>
    <p>Only authorized users can access protected files.</p>
  </div>

  <div className="upload-card">
    <h3>⚡ Fast Upload Processing</h3>
    <p>Optimized upload workflow with secure indexing.</p>
  </div>

</div>
</section>


      {/* CTA */}
      <section className="upload-cta">
        

        <h2>Ready to Upload Securely?</h2>
<p className="upload-hero-text">
  SecureCloud provides a highly secure document upload
  platform designed for enterprise environments. Files
  are encrypted before being stored in the cloud,
  ensuring confidentiality, integrity, and controlled
  access through Multi-Authority Attribute-Based
  Encryption (MA-ABE).
</p>
        <button
          onClick={() => navigate("/owner")}
        >
          Login as Data Owner
        </button>


  <button
    className="upload-home-btn"
    onClick={() => navigate("/")}
  >
    Back to Home
  </button>


      </section>

    </div>
   <Footer/>
    </>
  );
}

export default UploadInfo;