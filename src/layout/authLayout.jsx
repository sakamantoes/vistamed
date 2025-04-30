import React from "react";
import AuthNav from "../components/common/authNav";
import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <>
      <AuthNav />
      <Outlet />
    </>
  );
}

export default AuthLayout;
