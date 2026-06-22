import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DataUserLogin.css";
import Footer from "../components/Footer";

function DataUserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
          role: "DATA_USER"
        })
      });

      const data = await res.json();

      // ❌ LOGIN FAILED
      if (!res.ok) {
        const goRegister = window.confirm(
          "You are not registered yet. Click OK to Register."
        );

        if (goRegister) {
          navigate("/register");
        }

        return;
      }

      // ✅ LOGIN SUCCESS
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);

      alert("Login Successful");

      if (data.user.role === "DATA_USER") {
        navigate("/dashboard/search");
      } else {
        navigate("/dashboard/upload");
      }

    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

 return (
  <>
  <div className="user-login-page">

    {/* BACKGROUND */}
    <div className="bg-blobs">
      <span></span>
      <span></span>
      <span></span>
    </div>

    {/* MAIN CONTAINER */}
    <div className="login-container">

      {/* LEFT INFO PANEL */}
      <div className="info-panel">

        <h1>Secure Data User Portal</h1>

        <p>
          Access encrypted cloud data using attribute-based secure authentication.
          This system ensures privacy, integrity, and controlled access for all users.
        </p>

        {/* USER INFO CARDS */}
        <div className="info-grid">

          <div className="info-box">
            <h3>👤 Data User</h3>
            <p>
              Authorized users can search and access encrypted files securely.
            </p>
          </div>

          <div className="info-box">
            <h3>🔐 Security Layer</h3>
            <p>
              Multi-authority encryption ensures no single point of compromise.
            </p>
          </div>

          <div className="info-box">
            <h3>⚡ Fast Search</h3>
            <p>
              Optimized keyword search over encrypted cloud data.
            </p>
          </div>

          <div className="info-box">
            <h3>🏢 Cloud System</h3>
            <p>
              Secure cloud infrastructure with controlled data access policies.
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT LOGIN PANEL */}
      <div className="login-box">

        <h2>Login</h2>

        <p className="sub-text">Enter your credentials to continue</p>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Sign In
        </button>


        <div className="login-actions">
  <button
    className="home-btn"
    onClick={() => navigate("/")}
  >
    ← Back to Home
  </button>
</div>

      </div>

    </div>
  </div>
  <Footer/>
  </>
);
}

export default DataUserLogin;