import React from "react";
import { Link } from "react-router";

function Banner() {
  return (
    <div className="flex bg-primary-blue rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 -z-10">
      {/* left side */}
      <div className="flex-1 py-0 sm:py-10 md:py-16 lg:py24 lg:pl-5 text-center">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Keep your health in check </p>
          <p className="mt-0.2">with 100+ doctors</p>
        </div>

        <Link to="/auth/register">
          <button className="bg-white text-sm sm:text-base text-gray-600 px-2 py-1 mb-1.5 md:px-8 md:py-3 rounded-full mt-1 hover:scale-105 transition-all duration-500">
            Create Account
          </button>
        </Link>
      </div>

      {/* right side */}
      <div className="hidden md:block md:w-1/2 lg:w-[280px] relative">
        <img
          src="/img/doc2.png"
          alt=""
          className="w-full absolute bottom-0 right-20 max-w-md"
        />
      </div>
    </div>
  );
}

export default Banner;
