import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const PrivateAdminRoute = ({ children }) => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return null;

  if (!user) {
    return <Navigate to="/admin-login" />;
  }

  if (user.publicMetadata.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateAdminRoute;
