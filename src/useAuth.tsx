import React, { useState } from "react";
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  const login = async () => {
    setUser(true);
    navigate("/");
  };

  const logout = () => {
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
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
