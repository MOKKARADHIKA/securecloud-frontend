import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <nav className="navbar">

      <Link to="/">Home</Link>
      <Link to="/owner">Data Owner</Link>
      <Link to="/user">Data User</Link>

      {/* <Link to="/dashboard/search">Search</Link> */}
    <Link to="/search-info">Search</Link>
     <Link to="/cloud">Cloud</Link>
<Link to="/upload">Upload</Link>
      {localStorage.getItem("token") && (
        <button onClick={handleLogout}>
          Logout
        </button>
      )}

    </nav>
  );
}

export default Navbar;