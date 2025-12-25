import { useAuth } from "@/context/AuthContext.jsx";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
