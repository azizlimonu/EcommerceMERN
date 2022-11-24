import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  const auth = useSelector((state) => state.auth);

  if (auth.id==="") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;