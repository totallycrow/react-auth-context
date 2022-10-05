import React, { useState } from "react";
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const navigate = useNavigate();

  const login = async (input: string) => {
    Cookies.set("email", input);
    setUser(true);
    navigate("/");
  };

  const logout = () => {
    Cookies.remove("email");
    setLoginFailed(false);
    setUser(false);
    navigate("/login", { replace: true });
  };

  //   const value = useMemo(
  //     () => ({
  //       user,
  //       login,
  //       logout,
  //     }),
  //     [user]
  //   );

  //   @ts-ignore
  return (
    // @ts-ignore
    <AuthContext.Provider
      // @ts-ignore
      value={{
        login,
        logout,
        user,
        loginFailed,
        setLoginFailed,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
