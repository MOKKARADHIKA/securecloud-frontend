import { motion } from "framer-motion";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";


function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  const active = (path) => location.pathname.includes(path);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="dashboard-layout"
    >

      {/* SIDEBAR */}
      <div className="sidebar">

        <h2 className="logo">☁ Cloud System</h2>

        {/* DATA OWNER MENU */}
{role === "DATA_OWNER" && (
  <>
    <Link
      to="/dashboard/upload"
      className={active("/upload") ? "active-link" : ""}
    >
      📤 Upload
    </Link>

    <Link
      to="/dashboard/cloud"
      className={active("/cloud") ? "active-link" : ""}
    >
      ☁ Cloud
    </Link>
  </>
)}

{/* DATA USER MENU */}
{role === "DATA_USER" && (
  <>
    <Link
      to="/dashboard/search"
      className={active("/search") ? "active-link" : ""}
    >
      🔍 Search
    </Link>
  </>
)}

        <Link to="/dashboard/analytics">
  📊 Analytics
</Link>

        <div className="role-box">
          Role: <b>{role}</b>
        </div>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>

      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">
        <Outlet />
      </div>

    </motion.div>
  );
}

export default Dashboard;