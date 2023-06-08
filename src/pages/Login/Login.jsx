import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [user] = useAuthState(auth);

  if (user) navigate("/profile");

  return <div></div>;
};

export default Login;
