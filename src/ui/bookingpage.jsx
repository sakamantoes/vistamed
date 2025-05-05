import React from "react";

function Bookingpage({ onMenuClick }) {
  return (
    <div className="bg-white w-full p-5 h-screen">
      <div className="flex items-center justify-between ">
        <h1 className="text-3xl font-semibold">Book Appointment</h1>
        <div className="flex gap-3 items-center">
          {/* Menu icon (3 bars) */}
          <div
            className="flex gap-1 flex-col md:hidden cursor-pointer"
            onClick={onMenuClick}
          >
            <div className="bg-black w-[30px] h-[3px]"></div>
            <div className="bg-black w-[30px] h-[3px]"></div>
            <div className="bg-black w-[30px] h-[3px]"></div>
          </div>

          <div className="h-[40px] w-[40px] rounded-full bg-gray-500"></div>
        </div>
      </div>

      <form className="flex items-center gap-4 my-19 flex-col justify-center">
        <select
          name=""
          id=""
          className="md:w-[500px] w-full border p-3 rounded-md font-semibold"
        >
          <option value="Select Hospital">Select Hospital</option>
          <option value="Select Hospital">Select Hospital</option>
          <option value="Select Hospital">Select Hospital</option>
          <option value="Select Hospital">Select Hospital</option>
        </select>

        <select
          name=""
          id=""
          className="md:w-[500px] w-full border p-3 rounded-md font-semibold"
        >
          <option value="Select Hospital">Select Department</option>
          <option value="Select Hospital">Select Department</option>
          <option value="Select Hospital">Select Department</option>
          <option value="Select Hospital">Select Department</option>
        </select>

        <select
          name=""
          id=""
          className="md:w-[500px] w-full border p-3 rounded-md font-semibold"
        >
          <option value="Select Hospital">Select Doctor</option>
          <option value="Select Hospital">Select Doctor</option>
          <option value="Select Hospital">Select Doctor</option>
          <option value="Select Hospital">Select Doctor</option>
        </select>
      </form>

      <div className="flex items-center justify-center flex-col">
        <div className=" p-2 w-full md:w-[500px] flex items-center justify-between ">
          <span className="cursor-pointer w-7 h-7 flex shadow-2xs justify-center items-center rounded-full bg-gray-300">
            <svg
              width="14"
              height="16"
              viewBox="0 0 20 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.7435 22.5837L4.72617 13.2388L18.7435 3.89388C18.9276 3.77116 19.0857 3.61339 19.2088 3.42957C19.3319 3.24574 19.4176 3.03948 19.461 2.82254C19.5044 2.6056 19.5046 2.38224 19.4617 2.16521C19.4188 1.94818 19.3335 1.74173 19.2108 1.55765C19.0881 1.37357 18.9303 1.21547 18.7465 1.09236C18.5627 0.96926 18.3564 0.883568 18.1394 0.84018C17.9225 0.796792 17.6991 0.796558 17.4821 0.839492C17.2651 0.882426 17.0586 0.967687 16.8746 1.09041L0.984461 11.6838C0.728489 11.8545 0.51861 12.0857 0.373452 12.357C0.228293 12.6282 0.152344 12.9311 0.152344 13.2388C0.152344 13.5465 0.228293 13.8494 0.373452 14.1206C0.51861 14.3919 0.728489 14.6231 0.984461 14.7938L16.8746 25.3872C17.0586 25.5099 17.2651 25.5952 17.4821 25.6381C17.6991 25.681 17.9225 25.6808 18.1394 25.6374C18.3564 25.594 18.5627 25.5083 18.7465 25.3852C18.9303 25.2621 19.0881 25.104 19.2108 24.92C19.3335 24.7359 19.4188 24.5294 19.4617 24.3124C19.5046 24.0954 19.5044 23.872 19.461 23.6551C19.4176 23.4381 19.3319 23.2319 19.2088 23.048C19.0857 22.8642 18.9276 22.7064 18.7435 22.5837Z"
                fill="black"
              />
            </svg>
          </span>
          <h1 className="font-bold text-2xl">January</h1>
          <span className="cursor-pointer w-7 h-7 flex shadow-2xs justify-center items-center rounded-full bg-gray-300">
            <svg
              width="14"
              height="16"
              viewBox="0 0 20 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.781844 22.5837L14.7992 13.2388L0.781844 3.89388C0.597765 3.77116 0.439659 3.61339 0.316555 3.42957C0.193451 3.24574 0.107758 3.03948 0.0643701 2.82254C0.0209823 2.6056 0.0207518 2.38224 0.0636856 2.16521C0.10662 1.94818 0.191879 1.74173 0.314598 1.55765C0.437317 1.37357 0.595092 1.21547 0.778914 1.09236C0.962735 0.96926 1.169 0.883568 1.38594 0.84018C1.60288 0.796792 1.82624 0.796558 2.04327 0.839492C2.2603 0.882426 2.46675 0.967687 2.65083 1.09041L18.5409 11.6838C18.7969 11.8545 19.0068 12.0857 19.1519 12.357C19.2971 12.6282 19.373 12.9311 19.373 13.2388C19.373 13.5465 19.2971 13.8494 19.1519 14.1206C19.0068 14.3919 18.7969 14.6231 18.5409 14.7938L2.65083 25.3872C2.46675 25.5099 2.2603 25.5952 2.04327 25.6381C1.82624 25.681 1.60288 25.6808 1.38594 25.6374C1.169 25.594 0.962735 25.5083 0.778914 25.3852C0.595092 25.2621 0.437317 25.104 0.314598 24.92C0.191879 24.7359 0.10662 24.5294 0.0636856 24.3124C0.0207518 24.0954 0.0209823 23.872 0.0643701 23.6551C0.107758 23.4381 0.193451 23.2319 0.316555 23.048C0.439659 22.8642 0.597765 22.7064 0.781844 22.5837Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
        <div className="h-[2px] w-[300px] md:w-[400px] my-2 bg-gray-300"></div>
        <div className="md:w-[490px] w-[350px] bg-gray-300 h-[200px] flex items-center justify-center">
          {/*  */}
          calender
        </div>
      </div>

      <div className="w-[300px] md:w-[500px] py-3 grid md:grid-cols-3 grid-cols-2 md:gap-3.5 gap-1.5 justify-evenly m-5  mx-auto flex-wrap">
        <button className="border-gray-400 border-2 py-0.5 md:px-6 px-2">
          8:30 AM
        </button>
        <button className="border-gray-400 border-2 py-0.5 md:px-6 px-2">
          9:30 AM
        </button>
        <button className="border-gray-400 border-2 py-0.5 md:px-6 px-2">
          11:30 AM
        </button>
        <button className="border-gray-400 border-2 py-0.5 md:px-6 px-2">
          2:30 PM
        </button>
      </div>

      <div className="pl-4 flex gap-2.5 flex-col">
        <p>
          <strong className="text-[17px]">Doctor:</strong> Not Select
        </p>
        <p>
          <strong className="text-[17px]">Date:</strong> Not Select
        </p>
        <p>
          <strong className="text-[17px]">Time:</strong> Not Select
        </p>
      </div>

      <div className="flex items-center justify-center my-2">
        <button className="bg-primary-blue text-white font-bold py-1 px-6 rounded-2xl">
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default Bookingpage;
