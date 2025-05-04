import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className=" relative mt-9 bg-gray-400 w-full md:w-full py-8 text-gray-600">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center flex-col  md:flex-row">
          <div className="">
            <div className="">
              <img
                src="/img/logo.png"
                alt=""
                className="xs:w-[300px] w-[200px] translate-y-[-20px] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col m-4">
            <h1 className="font-semibold text-black text-2xl ">OUR SERVICE</h1>
            <Link to="" className="text-primary-blue p-2" c>
              DIABETIC RETINOPATHY
            </Link>
            <Link to="" className="text-primary-blue p-2" c>
              GLAUCOMA
            </Link>
            <Link to="" className="text-primary-blue p-2" c>
              ULRA SOUND SCAN
            </Link>
          </div>

          <div className="flex flex-col m-4">
            <h1 className="font-semibold text-2xl text-black">CONTACT US</h1>
            <Link to="" className="text-primary-blue p-2">
              phone: 09059041035
            </Link>
            <Link to="" className="text-primary-blue p-2">
              Phone: 07011917726
            </Link>
            <Link to="" className="text-primary-blue p-2">
              info@Medvista.com
            </Link>
          </div>

          <div className="flex flex-col m-4">
            <h1 className="font-semibold text-2xl text-black">FOLLOW US</h1>
            <Link to="" className="text-primary-blue p-2">
              Facebook
            </Link>
            <Link to="" className="text-primary-blue p-2">
              Twitter X
            </Link>
            <Link to="" className="text-primary-blue p-2">
              Linkedin
            </Link>
          </div>
        </div>

        <div className="flex flex-col px-20 items-center">
          <div className="flex items-center flex-col md:flex-row gap-5 justify-between">
            <p>condition to use</p>
            <p>Privacy Notice</p>
            <p>Consumer Health</p>
            <p>Data privacy</p>
            <p>Disclosure</p>
            <p>Your ADs</p>
            <p>Privacy choice</p>
          </div>
          <p>{new Date().getFullYear()} MEDVISTA</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex items-end justify-center text-[17px] md:text-2xl bg-white mt-4">
        @ MEDIVISTA. Care Beyond Boundaries<sup className="text-[12px]">TM</sup>
      </div>
    </footer>
  );
}

export default Footer;
