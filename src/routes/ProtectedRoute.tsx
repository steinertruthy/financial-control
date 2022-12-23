import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export const ProtectRoute = () => {
  const { user } = useAuthContext();

  return <>{user ? <Outlet /> : <Navigate to="/" replace={true} />}</>;
};
