import React from "react";

function Welcome() {
  return (
    <div className="md:px-21 px-4 py-2 bg-white">
      <div className="flex items-center justify-between mb-3.5">
        <div className="">
          <h1 className="md:text-[2rem] text-[21px] leading-[1.1] font-semibold text-primary-blue">
            Welcome, Nweke Paschal!
          </h1>
          <p className="md:text-[13px] text-[13px] w-[300px] md:w-[450px] text-[#3b3b3b] font-semibold">
            It's a sunny day today, we hope you're taking good care of your
            health 😊
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-0.5">
          <div className="h-1 md:w-[30px] w-[20px] bg-black rounded-md"></div>
          <div className="h-1 md:w-[30px] w-[20px] bg-black rounded-md"></div>
          <div className="h-1 md:w-[30px] w-[20px] bg-black rounded-md"></div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2">
        <p className="font-semibold text-[12.4px] sm:text-[13px] md:text-[14px]">
          Your health dashboard is up to date: Today 8:45AM
        </p>

        <div className="md:flex hidden gap-3 flex-row items-center justify-center">
          <button className="bg-primary-blue text-white h-[40px] px-1 sm:px-2 md:px-2 rounded-md cursor-pointer">
            + New Health Activity
          </button>
          <button className="flex cursor-pointer items-center justify-center gap-3 border-2 shadow-md px-5 py-0.5 rounded-md">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-200">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="17.5" r="17.5" fill="#D9D9D9" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 9.5C14.4602 9.5 14.8333 9.8731 14.8333 10.3333V11.1667H19.8333V10.3333C19.8333 9.8731 20.2064 9.5 20.6667 9.5C21.1269 9.5 21.5 9.8731 21.5 10.3333V11.1667H22.3333C24.1743 11.1667 25.6667 12.6591 25.6667 14.5V23.6667C25.6667 25.5076 24.1743 27 22.3333 27H12.3333C10.4924 27 9 25.5076 9 23.6667V14.5C9 12.6591 10.4924 11.1667 12.3333 11.1667H13.1667V10.3333C13.1667 9.8731 13.5398 9.5 14 9.5ZM19.8333 12.8333C19.8333 13.2936 20.2064 13.6667 20.6667 13.6667C21.1269 13.6667 21.5 13.2936 21.5 12.8333H22.3333C23.2538 12.8333 24 13.5795 24 14.5V14.9167H10.6667V14.5C10.6667 13.5795 11.4129 12.8333 12.3333 12.8333H13.1667C13.1667 13.2936 13.5398 13.6667 14 13.6667C14.4602 13.6667 14.8333 13.2936 14.8333 12.8333H19.8333ZM24 16.5833H10.6667V23.6667C10.6667 24.5871 11.4129 25.3333 12.3333 25.3333H22.3333C23.2538 25.3333 24 24.5871 24 23.6667V16.5833Z"
                  fill="#344054"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-left font-semibold">Date</p>
              <strong>28th April, 2025</strong>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
