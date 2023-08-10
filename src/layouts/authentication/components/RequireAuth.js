import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "hooks/useAuth";
import { useEffect } from "react";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  useEffect(() => {
    console.log("AuthProvider: useEffect: auth: ", auth);
  }, []);

  return auth?.email ? (
    <Outlet />
  ) : (
    <Navigate to="/authentication/sign-in" state={{ from: location }} replace />
  );
};

export default RequireAuth;
