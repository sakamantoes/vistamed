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

function UnAuthNav() {
  const [isOpen, setSheetState] = useState(false);

  return (
    <div className="h-[60px] fixed w-full bg-white backdrop-blur-md  mx-auto flex items-center justify-between md:px-10 px-4 overflow-hidde z-[40]">
      <div className="">
        <img
          src="/img/logo.png"
          alt="logo"
          className="xs:w-30 w-28 translate-x-[-30px] object-cover"
        />
      </div>

      <ul className="sm:flex gap-10 items-center hidden">
        {NavBar.map(({ to, title, isDropDown }, i) =>
          isDropDown?.length ? (
            <Dropdown
              type="click"
              key={i}
              DropdownTitle={
                <li className="inline-flex items-center gap-1 group hover:bg-secondary-blue/10  px-1 py-1 rounded-[7px]">
                  <Link to={to} className="capitalize">
                    {title}
                  </Link>

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
                <ul className="bg-white/80 shadow translate-y-[6px] backdrop-blur-md backdrop-saturate-200 rounded-md px-2 space-y-1 py-2">
                  {isDropDown.map(({ to, title }, i) => (
                    <li
                      key={i}
                      className="py-1 text-[13px] hover:bg-secondary-blue/10 px-1 rounded-md"
                    >
                      <Link to={to} className="capitalize">
                        {title}
                      </Link>
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

      <div className="flex items-center gap-3">
        <Link to="/auth" className="xs:block btn-xx hidden">
          Get Started
        </Link>

        <Sheet
          isOpen={isOpen}
          setSheetState={setSheetState}
          className={
            "bg-white h-full sm:hidden flex flex-col items-center pt-10 font-semibold text-[20px] z-50"
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

export default UnAuthNav;
