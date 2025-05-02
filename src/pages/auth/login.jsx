import React from "react";
import { Doctor, Patient } from "../../components/auth/patientAndDoctor";

function Login() {
  const router = new URLSearchParams(location.search);
  return <>{router.get("loginAs") == "doctor" ? <Doctor /> : <Patient />}</>;
}

export default Login;
