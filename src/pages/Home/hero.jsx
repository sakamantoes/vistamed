import React from "react";

function Hero() {
  return (
    <div>
      <div className="py-2 px-7 -z-10 bg-primary-blue md:h-[90vh] h-[60vh] flex items-center justify-center hero -z-10">
        <div className="flex items-center justify-center flex-col md:leading-9 ">
          <h1 className="text-primary-blue text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold  max-sm:text-center">
            Smart Health Data Platform
          </h1>
          <p className="font-semibold text-[13px] md:text-[17px] text-blue-100 max-sm:text-center">
            unified records, predictive care and secure access.
          </p>
          <p className=" max-sm:text-center text-accent-1">
            MEDIVISTA is the future of healthcare
          </p>
          <button className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-1 hover:scale-105 transition-all duration-500 font-bold">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
