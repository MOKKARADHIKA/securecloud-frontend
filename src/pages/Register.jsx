import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("DATA_USER");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
        role
      });

      alert("Registration Successful");

    if (role === "DATA_OWNER") {
  navigate("/owner");
} else {
  navigate("/user");
}
    } catch (err) {
      console.log(err);
      alert("Registration Failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Register</h2>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <select onChange={(e) => setRole(e.target.value)}>
          <option value="DATA_USER">Data User</option>
          <option value="DATA_OWNER">Data Owner</option>
        </select>

        <button onClick={handleRegister}>
          Register
        </button>
       

      </div>
    </div>
  );
}

export default Register;