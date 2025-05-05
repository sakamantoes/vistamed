import React, { useState } from "react";
import SideBar from "../../ui/sideBar";
import Bookingpage from "../../ui/bookingpage";

function BookAppointment() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      {sidebarOpen && <SideBar closeSidebar={toggleSidebar} />}
      <Bookingpage openSidebar={toggleSidebar} />
    </div>
  );
}

export default BookAppointment;
