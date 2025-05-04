import React from "react";
import Welcome from "../../components/dashboard/landing/welcome";
import Appointment from "../../components/dashboard/landing/appointment";
import HealthMetrics from "../../components/dashboard/landing/healthMetrics";
import Records from "../../components/dashboard/landing/records";
import Consultants from "../../components/dashboard/landing/consultants";

function DashboardHome() {
  return (
    <div className="pt-[60px] bg-gray-300/30 flex flex-col justify-center">
      <Welcome />
      <div className="w-[1200px] mx-auto max-w-full px-4 py-4">
        <div className="">
          <Appointment />
          <HealthMetrics />
          <Records />
          <Consultants />
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
