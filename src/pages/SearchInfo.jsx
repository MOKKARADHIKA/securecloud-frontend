import { useNavigate } from "react-router-dom";
import "../styles/SearchInfo.css";
import Footer from "../components/Footer";

function SearchInfo() {
  const navigate = useNavigate();

  
  return (
     <>

      <div className="search-page">

        {/* Background Effects */}
        <div className="search-bg">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Hero */}
        <section className="search-hero">

          <div className="search-badge">
            Secure Keyword Search System
          </div>

          <h1>🛡️ Secure Encrypted Search Portal</h1>

          <p>
            SecureCloud enables authorized users to perform
            keyword searches over encrypted cloud data without
            revealing sensitive information. Our Multi-Authority
            Attribute-Based Encryption architecture ensures that
            only authorized users can discover and access
            protected documents.
          </p>

        </section>

        {/* Feature Cards */}
        <div className="search-cards">

          <div className="search-card">
            <h3>🔐 Privacy Preserving Search</h3>
            <p>
              Search encrypted files without exposing document
              contents to cloud providers.
            </p>
          </div>

          <div className="search-card">
            <h3>⚡ Fast Keyword Retrieval</h3>
            <p>
              Efficient indexing techniques provide quick and
              accurate document discovery.
            </p>
          </div>

          <div className="search-card">
            <h3>👥 Attribute-Based Access</h3>
            <p>
              Access search results only when user attributes
              satisfy security policies.
            </p>
          </div>

          <div className="search-card">
            <h3>☁ Secure Cloud Platform</h3>
            <p>
              Enterprise-grade cloud storage with secure
              encrypted indexing mechanisms.
            </p>
          </div>

        </div>

        {/* Process */}
        <section className="search-process">

          <h2>How Secure Search Works</h2>

          <div className="process-grid">

            <div className="process-card">
              <h3>1️⃣ Enter Keyword</h3>
              <p>
                User enters a keyword to search documents.
              </p>
            </div>

            <div className="process-card">
              <h3>2️⃣ Secure Matching</h3>
              <p>
                Search is performed on encrypted indexes.
              </p>
            </div>

            <div className="process-card">
              <h3>3️⃣ Access Verification</h3>
              <p>
                User attributes are verified securely.
              </p>
            </div>

            <div className="process-card">
              <h3>4️⃣ Retrieve Results</h3>
              <p>
                Authorized documents are returned safely.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="search-cta">

          <h2>Ready to Search Securely?</h2>

          <p>
            Register as a Data User and gain secure access to
            encrypted cloud search functionality powered by
            Multi-Authority Attribute-Based Encryption.
          </p>

          <div className="search-btn-group">

            <button
              className="search-primary-btn"
              onClick={() => navigate("/user")}
            >
              Register / Login as User
            </button>

            <button
              className="search-secondary-btn"
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

export default SearchInfo;