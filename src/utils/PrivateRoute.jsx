import { Navigate } from "react-router-dom";

function PrivateRoute({ children, allowedRoles }) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/owner" />;
  }

  // if roles are restricted
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;