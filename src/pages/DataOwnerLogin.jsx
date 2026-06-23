import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../styles/DataOwnerLogin.module.css";
import Footer from "../components/Footer";


function DataOwnerLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("SECURE");

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prev) => (prev === "SECURE" ? "ENCRYPTED" : "SECURE"));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = async () => {
    try {
      // const res = await fetch("https://securecloud-backend.vercel.app", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     email: username,
      //     password,
      //     role: "DATA_OWNER",
      //   }),
      // });

      const res = await fetch(
  "https://securecloud-backend.vercel.app/api/auth/login",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: username,
      password,
      role: "DATA_OWNER",
    }),
  }
);

      const data = await res.json();

      if (!res.ok) {
        const goRegister = window.confirm(
          "You are not registered yet. Click OK to Register."
        );

        if (goRegister) navigate("/register");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);

      const role = data.user.role;

      if (role === "DATA_OWNER") navigate("/dashboard/upload");
      else if (role === "DATA_USER") navigate("/dashboard/search");
      else navigate("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (

 <>

  {/* TOP ENTERPRISE BAR */}
      <div className={styles.topBar}>
        <div className={styles.brand}>
          SecureCloud Console
        </div>

        <div className={styles.statusMini}>
          Security Status:
          <span className={styles.status}>
            {status}
          </span>
        </div>
      </div>
    {/* BREADCRUMB */}
    {/* <div className={styles.breadcrumb}>
      <span onClick={() => navigate("/")}>
        Home
      </span>

      <span className={styles.separator}>›</span>

      <span>Data Owner Login</span>
    </div> */}

    <div className={styles.page}>

      {/* soft animated background */}
      <div className={styles.bgBlobs}>
        <span></span>
        <span></span>
        <span></span>
      </div>

     

      

      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>SecureCloud Control Center</h1>

        <p>
          Enterprise-grade Multi-Authority Attribute-Based Encryption system
          with AES-256 secure storage and searchable encrypted cloud.
        </p>

        <div className={styles.heroGrid}>
          {[
            "Zero Trust Architecture",
            "Encrypted Cloud Layer",
            "Secure Search Engine",
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.heroCard}
              whileHover={{ scale: 1.04 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FEATURES */}
      <section className={styles.features}>
        <h2>Security Capabilities</h2>

        <div className={styles.grid}>
          {[
            ["AES-256 Encryption", "Military-grade encryption for files"],
            ["Attribute-Based Access", "Multi-authority secure control"],
            ["Secure Search", "Search without decrypting data"],
            ["Cloud Isolation", "Fully separated encrypted storage"],
            ["JWT Authentication", "Secure token sessions"],
            ["Audit Logs", "Full activity tracking system"],
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LOGIN */}
      <section className={styles.loginSection}>
        <motion.div
          className={styles.loginCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2>Data Owner Login</h2>
          <p>Access your secure encryption workspace</p>

          <input
            type="text"
            placeholder="Enter email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleLogin}
          >
            Login Securely
          </motion.button>

          <div className={styles.loginActions}>
  <button
    className={styles.homeBtn}
    onClick={() => navigate("/")}
  >
    ← Back to Home
  </button>
</div>
        </motion.div>
      </section>

      <div className={styles.trust}>
        Trusted by Enterprise Cloud Systems • AES-256 • JWT • Multi-Authority Encryption
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default DataOwnerLogin;