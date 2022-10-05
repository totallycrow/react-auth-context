import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const ProtectedRoute = ({ children }: any) => {
  // @ts-ignore
  const { user } = useAuth();
  console.log(user);
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
