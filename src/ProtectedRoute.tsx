import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import Cookies from "js-cookie";

export const ProtectedRoute = ({ children }: any) => {
  // @ts-ignore
  const { user, setLoginFailed } = useAuth();
  const cookie = Cookies.get("email");

  console.log(user);

  if (cookie !== "jankowalski@gmail.com") {
    setLoginFailed(true);

    return <Navigate to="/login" />;
  }
  return children;
};
