import React from "react";
import { useAuth } from "./useAuth";

export default function Home() {
  // @ts-ignore
  const { user } = useAuth();
  console.log(user);
  return <div>Home</div>;
}
