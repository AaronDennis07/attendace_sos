import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

export const StudentRoute = () => {
  const { token } = useAuth();

  console.log()  
  if (!token || token.role.localeCompare('USER')!==0 ) {

    return <Navigate to="/login" />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};