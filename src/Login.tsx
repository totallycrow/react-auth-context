import React from "react";
import { useAuth } from "./useAuth";

export default function Login() {
  // @ts-ignore
  const { login, user } = useAuth();
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          console.log("click fired");
          login();
          console.log(user);
        }}
      >
        Login
      </button>
    </div>
  );
}
