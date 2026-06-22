import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="hero-container">

      {/* LEFT SIDE */}
      <div className="hero-left">

        <h1>Secure Cloud Storage System</h1>

        <p>
          Upload, encrypt, search and manage your files securely using
          Attribute-Based Keyword Search over encrypted cloud data.
        </p>

        {/* REGISTER BUTTON */}
        <button
          className="register-btn"
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>

      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">

        <div className="hero-cards">

          <div
            className="card"
            onClick={() => navigate("/owner")}
          >
            <h3>👨‍💼 Data Owner</h3>
            <p>Upload & encrypt files</p>
          </div>

          <div
            className="card"
            onClick={() => navigate("/user")}
          >
            <h3>👤 Data User</h3>
            <p>Search & download files</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default HeroSection;