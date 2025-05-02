import React, { Children, useEffect, useState } from "react";

function Dropdown({
  DropdownTitle,
  DropdownMenu,
  className = "",
  type = "hover",
}) {
  const [dropdownToggle, setDropDownToggle] = useState(false);
  return (
    <div className={`${type == "hover" ? "group" : ""}`}>
      {dropdownToggle && (
        <div
          className="absolute w-[100vw] h-[100vh] left-0 inset-0"
          onClick={
            type == "click"
              ? () => setDropDownToggle(!dropdownToggle)
              : () => {}
          }
        ></div>
      )}
      <button
        data-active={dropdownToggle}
        onClick={
          type == "click" ? () => setDropDownToggle(!dropdownToggle) : () => {}
        }
      >
        {DropdownTitle}
      </button>

      <div
        data-active={dropdownToggle}
        className={`
        fixed z-[10]
        ${
          type == "click"
            ? dropdownToggle
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-none"
            : type == "hover"
            ? "group-hover:opacity-100 group-hover:pointer-events-auto opacity-0 pointer-none:"
            : ""
        }  ${className}`}
      >
        {DropdownMenu}
      </div>
    </div>
  );
}

export default Dropdown;
