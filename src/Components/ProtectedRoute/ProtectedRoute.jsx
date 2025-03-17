import { Navigate } from "react-router-dom";
import { useAuth } from "../../Services/Context/AuthContext";


const ProtectedRouted = ({ children }) => {
  const { isAdmin, loading } = useAuth();

  console.log("is admin: ", isAdmin);

  if (loading) return <div>Loading...</div>; 
  if (!isAdmin) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRouted;