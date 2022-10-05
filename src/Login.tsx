import React, { useState } from "react";
import { useAuth } from "./useAuth";

export default function Login() {
  // @ts-ignore
  const { login, user, loginFailed } = useAuth();
  const [emailInput, setEmailInput] = useState("");

  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <input
          type="text"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
      </form>

      <button
        onClick={() => {
          console.log("click fired");
          login(emailInput);
          console.log(user);
        }}
      >
        Login
      </button>

      {loginFailed && <div>Incorrect email</div>}
    </div>
  );
}
