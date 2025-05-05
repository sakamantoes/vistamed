import React, { useState } from "react";
import SideBar from "../../ui/sideBar";
import Bookingpage from "../../ui/bookingpage";

function BookAppointment() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex relative">
      <SideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Bookingpage onMenuClick={toggleSidebar} />
    </div>
  );
}

export default BookAppointment;
