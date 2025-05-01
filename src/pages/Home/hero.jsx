import React from "react";

function Hero() {
  return (
    <div>
      <div className="py-2 px-7 -z-10 bg-primary-blue md:h-[90vh] h-[60vh] flex items-center justify-center hero">
        <div className="flex items-center justify-center flex-col md:leading-9 ">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold  max-sm:text-center">
            Smart Health Data Platform
          </h1>
          <p className="font-semibold text-[13px] md:text-[17px] text-gray-300  max-sm:text-center">
            unified records, predictive care and secure access.
          </p>
          <p className=" max-sm:text-center">
            MEDIVISTA is the future of healthcare
          </p>
          <a
            href=""
            className="bg-white px-5 py-2 rounded-md font-bold tracking-wide"
          >
            Request Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
