import {
  FaShieldAlt,
  FaDatabase,
  FaUserShield,
  FaSearch,
  FaLock,
  FaCloud,
  FaKey,
  FaUsers,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { SiMongodb, SiExpress } from "react-icons/si";

import "../styles/Footer.css";

function Footer() {
  return (
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
  );
}

export default Footer;