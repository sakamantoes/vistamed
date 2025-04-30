import React from "react";

function Hero() {
  return (
    <div className="flex -z-0 flex-col md:flex-row flex-wrap bg-secondary-blue rounded-lg px-6 md:px-10 lg:px-20">
      {/* left side */}
      <div className="md:w1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb[-30px]">
        <p className="text-3xl md:text-6xl lg:text-6xl text-white font-bold  leading-tight md:leading-tight lg:leading-tight">
          Smart Health Data <br /> Platform
        </p>
        <p className="text-white text-[23px]">
          unified records, predictive care and secure access.
        </p>
        <p className="text-black/100">MEDVISTA is the future of healthcare</p>
        <a
          href=""
          className="bg-white flex items-center gap-2 px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Request Demo
        </a>
      </div>

      {/* right side*/}
      <div className="md:w-1/2 relative md:block hidden">
        <img
          src="/img/group.png"
          alt=""
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
        />
      </div>
    </div>
  );
}

export default Hero;
