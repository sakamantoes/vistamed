import React from "react";

function Bookingpage({ openSidebar }) {
  return (
    <div className="bg-white w-full p-3 h-screen">
      <div className="flex justify-between items-center">
        <div
          className="flex gap-1 flex-col cursor-pointer"
          onClick={openSidebar}
        >
          <div className="bg-black w-[30px] h-[3px]"></div>
          <div className="bg-black w-[30px] h-[3px]"></div>
          <div className="bg-black w-[30px] h-[3px]"></div>
        </div>

        <div className="h-[40px] w-[40px] rounded-full bg-gray-500"></div>
      </div>
      <h1>Book Appointment</h1>

      <form>in</form>
    </div>
  );
}

export default Bookingpage;
