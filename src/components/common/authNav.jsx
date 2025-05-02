import React, { useState } from "react";
import { Link } from "react-router";
import Dropdown from "../../ui/dropdown";
import Sheet from "../../ui/sheet";

const NavBar = [
  {
    isDropDown: [
      {
        to: "/feature-1",
        title: "electronic health Records",
      },
      {
        to: "/feature-2",
        title: "AI Health Predictor",
      },
      {
        to: "/feature-3",
        title: "Patient Engagement",
      },
      {
        to: "/feature-1",
        title: "Telemedicine",
      },
      {
        to: "/feature-2",
        title: "Revenue cycle management",
      },
      {
        to: "/feature-3",
        title: "Healthcare analytics",
      },
      {
        to: "/feature-3",
        title: "maternity care",
      },
    ],
    title: "Features",
  },

  {
    to: "/benefits",
    title: "Benefits",
  },
  {
    to: "/contacts",
    title: "Contact",
  },
];

function AuthNav() {
  const [isOpen, setSheetState] = useState(false);

  return (
    <div className="h-[60px] fixed border w-full bg-white mx-auto flex items-center justify-between md:px-10 px-4 overflow-hidden z-10">
      <div className="flex items-center md:gap-5">
        <img
          src="/img/logo.png"
          alt="logo"
          className="xs:w-30 w-28 translate-x-[-30px] object-cover"
        />

        {/* search input */}
        <div className="bg-accent-1 relative items-center sm:flex h-7 md:w-[287px] hidden w-[240px]  rounded-xs">
          <svg
            className="absolute w-4 h-4 ml-1"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 27.5L18.3333 18.8333M1 11.6111C1 12.9389 1.26153 14.2537 1.76966 15.4805C2.27779 16.7072 3.02257 17.8218 3.96148 18.7607C4.90038 19.6996 6.01502 20.4444 7.24176 20.9526C8.46849 21.4607 9.7833 21.7222 11.1111 21.7222C12.4389 21.7222 13.7537 21.4607 14.9805 20.9526C16.2072 20.4444 17.3218 19.6996 18.2607 18.7607C19.1996 17.8218 19.9444 16.7072 20.4526 15.4805C20.9607 14.2537 21.2222 12.9389 21.2222 11.6111C21.2222 10.2833 20.9607 8.96849 20.4526 7.74176C19.9444 6.51502 19.1996 5.40038 18.2607 4.46148C17.3218 3.52257 16.2072 2.77779 14.9805 2.26966C13.7537 1.76153 12.4389 1.5 11.1111 1.5C9.7833 1.5 8.46849 1.76153 7.24176 2.26966C6.01502 2.77779 4.90038 3.52257 3.96148 4.46148C3.02257 5.40038 2.27779 6.51502 1.76966 7.74176C1.26153 8.96849 1 10.2833 1 11.6111Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            type="text"
            className="w-full pl-6 text-[13px]"
            placeholder="Search here"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link to={"/"}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 36 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 32.5C22 34.7091 20.2091 36.5 18 36.5C15.7909 36.5 14 34.7091 14 32.5H22ZM18 0.5C10.26 0.5 4.00003 7.65997 4.00003 16.5V21.08L0 32.5H10C10 36.9183 13.5817 40.5 18 40.5C22.4182 40.5 26 36.9183 26 32.5H36L32 21.08V17.08C32 9.5 27.58 2.55997 21.1 1.08003C20.094 0.761624 19.0531 0.566848 18 0.5ZM5.64 28.5L7.78003 22.5L7.99997 21.76V16.5C7.99997 9.87997 12.48 4.50003 18 4.50003C18.7213 4.49878 19.44 4.58609 20.14 4.76C24.62 5.85997 28 11.12 28 16.98V21.76L28.22 22.4L30.36 28.5H5.64Z"
              fill="black"
            />
          </svg>
        </Link>

        <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden"></div>

        <Sheet
          isOpen={isOpen}
          setSheetState={setSheetState}
          className={
            "bg-white sm:hidden flex flex-col items-center pt-10 font-semibold text-[20px]"
          }
        >
          <div className="px-1">
            <ul className="space-y-5 flex flex-col">
              {NavBar.map(({ to, title, isDropDown }, i) =>
                isDropDown?.length ? (
                  <Dropdown
                    type="click"
                    key={i}
                    DropdownTitle={
                      <li className="inline-flex items-center gap-1 group hover:bg-secondary-blue/10  px-1 py-1 rounded-[7px]">
                        <Link to={to}>{title}</Link>

                        <svg
                          className="w-2 h-2 group-hover:rotate-[180deg] transition-all duration-500"
                          viewBox="0 0 28 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3 0L14 16.5L25 0L28 2L14 23L0 2L3 0Z"
                            fill="black"
                          />
                        </svg>
                      </li>
                    }
                    DropdownMenu={
                      <ul className="bg-white/50 shadow translate-y-[6px] backdrop-blur-md backdrop-saturate-200 rounded-md px-2 space-y-1 py-2">
                        {isDropDown.map(({ to, title }, i) => (
                          <li
                            key={i}
                            className="py-1 text-[13px] hover:bg-secondary-blue/10 px-1 rounded-md"
                          >
                            <Link to={to}>{title}</Link>
                          </li>
                        ))}
                      </ul>
                    }
                  />
                ) : (
                  <li
                    key={i}
                    className="inline-flex items-center gap-1 group hover:bg-secondary-blue/10  px-1 py-1 rounded-[7px]"
                  >
                    <Link to={to}>{title}</Link>
                    {!!isDropDown?.length && (
                      <svg
                        className="w-2 h-2 group-hover:rotate-[180deg] transition-all duration-500"
                        viewBox="0 0 28 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3 0L14 16.5L25 0L28 2L14 23L0 2L3 0Z"
                          fill="black"
                        />
                      </svg>
                    )}
                  </li>
                )
              )}
            </ul>
            <Link to="/auth" className="xs:block btn-xx hidden">
              Get Started
            </Link>
          </div>
        </Sheet>
        <button
          className="space-y-[2px] cursor-pointer sm:hidden"
          onClick={() => setSheetState(true)}
        >
          <div className="w-6 h-1 bg-[#212121] rounded-md"></div>
          <div className="w-6 h-1 bg-[#212121] rounded-md"></div>
          <div className="w-6 h-1 bg-[#212121] rounded-md"></div>
        </button>
      </div>
    </div>
  );
}

export default AuthNav;
