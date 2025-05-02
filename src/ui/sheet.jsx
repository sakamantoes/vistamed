import React from "react";

function Sheet({ isOpen, setSheetState, className, type = "right", children }) {
  return (
    <div className="">
      {isOpen && (
        <div
          className="fixed z-[1] w-screen h-screen inset-0 bg-black/10 backdrop-blur-[2px] backdrop-saturate-150"
          onClick={() => setSheetState(false)}
        ></div>
      )}

      <div
        className={`h-full fixed top-0 z-[20] ${
          isOpen
            ? type === "right"
              ? "right-0"
              : type === "left"
              ? "left-0"
              : ""
            : type === "right"
            ? "right-[-1000px]"
            : type === "left"
            ? "left-[1000px]"
            : ""
        } max-w-full w-[250px] h-screen  transition-all duration-500 shadow ${className}`}
      >
        {/* Close button */}
        <button onClick={() => setSheetState(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>

        {/* Sheet content */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default Sheet;
