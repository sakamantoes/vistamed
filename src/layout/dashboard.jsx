import React from "react";
import AuthNav from "../components/common/authNav";
import { Outlet } from "react-router";

function DashboardLayout() {
  return (
    <div className="">
      <AuthNav />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
