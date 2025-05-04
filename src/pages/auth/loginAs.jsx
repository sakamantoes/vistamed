import React from "react";
import { Link } from "react-router";
import Footer from "../../components/common/footer";

function LoginAs() {
  return (
    <>
      <div className=" flex items-center justify-center flex-col">
        <img
          src="/img/logo.png"
          alt="logo"
          className="translate-Y-[-30px] object-cover"
        />
        <p
          className="text-primary-blue font-bold text-2xl
        "
        >
          Welcome to MEDIVISTA
        </p>
        <p className="font-bold">
          Please select on of the above option to proceed further{" "}
        </p>

        <div className="grid md:grid-cols-2 w-[550px] items-center justify-center mt-2.5 gap-5 my-1.5">
          <div className="w-[250px] flex justify-center items-center flex-col gap-0.5">
            <img src="/img/docLog.png" alt="" className="object-cover " />
            <Link
              to="/auth/login?loginAs=doctor"
              className="bg-primary-blue mt-[5px] text-white text-2xl text-center py-2 w-full "
            >
              Doctor
            </Link>
          </div>
          <div className="w-[250px] flex justify-center items-center flex-col gap-0.5">
            <img src="/img/patLog.png" alt="" className="object-cover " />
            <Link
              to="/auth/login?loginAs=patient"
              className="bg-primary-blue mt-[5px] text-white text-2xl text-center py-2 w-full "
            >
              Patient
            </Link>
          </div>
        </div>

        <div className=" flex justify-between gap-10">
          <div className="flex gap-1.5">
            <svg
              width="20"
              height="48"
              viewBox="0 0 40 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="25" r="19" stroke="black" stroke-width="2" />
              <path
                d="M12.376 26.2C12.376 24.3867 12.7387 22.808 13.464 21.464C14.1893 20.0987 15.192 19.0427 16.472 18.296C17.7733 17.5493 19.256 17.176 20.92 17.176C23.0747 17.176 24.8453 17.6987 26.232 18.744C27.64 19.7893 28.568 21.24 29.016 23.096H25.88C25.5813 22.0293 24.9947 21.1867 24.12 20.568C23.2667 19.9493 22.2 19.64 20.92 19.64C19.256 19.64 17.912 20.216 16.888 21.368C15.864 22.4987 15.352 24.1093 15.352 26.2C15.352 28.312 15.864 29.944 16.888 31.096C17.912 32.248 19.256 32.824 20.92 32.824C22.2 32.824 23.2667 32.5253 24.12 31.928C24.9733 31.3307 25.56 30.4773 25.88 29.368H29.016C28.5467 31.16 27.608 32.6 26.2 33.688C24.792 34.7547 23.032 35.288 20.92 35.288C19.256 35.288 17.7733 34.9147 16.472 34.168C15.192 33.4213 14.1893 32.3653 13.464 31C12.7387 29.6347 12.376 28.0347 12.376 26.2Z"
                fill="black"
              />
            </svg>
            <p>
              {new Date().getFullYear()} Medivista Limited. All <br /> rights
              reserved
            </p>
          </div>

          <div className="flex justify-between gap-3    ">
            <div className="">
              <Link to="/aboutPage/privacy">Privacy</Link>
              <hr />
            </div>
            <div className="">
              <Link to="/aboutPage/privacy">policy</Link>
              <hr />
            </div>
            <div className="">
              <Link to="/aboutPage/T&C">Terms and condition</Link>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAs;
