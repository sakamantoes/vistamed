import React from "react";
import { Doctor, Patient } from "../../components/auth/patientAndDoctor";
import UnAuthNav from "../../components/common/unAuthNav";

function Login() {
  const router = new URLSearchParams(location.search);
  return (
    <>
      <UnAuthNav />
      <div className="pt-[65px]">
        {router.get("loginAs") == "doctor" ? <Doctor /> : <Patient />}
      </div>
    </>
  );
}

export default Login;
