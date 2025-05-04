import React from "react";
import AuthNav from "../components/common/authNav";
import { Outlet } from "react-router";
import Footer from "../components/common/footer";

function DashboardLayout() {
  return (
    <div className="">
      <AuthNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default DashboardLayout;
