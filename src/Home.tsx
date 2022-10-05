import React from "react";
import { useAuth } from "./useAuth";

export default function Home() {
  // @ts-ignore
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div>
      Home
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
}
