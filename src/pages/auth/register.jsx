import React from "react";
import { Link } from "react-router";
import UnAuthNav from "../../components/common/unAuthNav";

function Register() {
  return (
    <>
      <UnAuthNav />
      <div className="pt-[65px] w-full flex items-center justify-center gap-7 flex-col bg-gray px-3 py-4">
        <div className="max-w-[500px] w-full">
          {" "}
          <form className="w-full gap-7 flex flex-col rounded-sm">
            <h1 className="font-bold md:text-3xl text-lg text-center">
              Create an Account
            </h1>
            <fieldset className="border flex justify-evenly items-center flex-col md:text-2xl text-lg md:flex-row py-8 px-2 gap-5 ">
              <legend className=" font-bold pl-1 md:text-2xl text-lg  pr-10">
                Name Datails:
              </legend>
              <select
                name="Title"
                id=""
                className="border text-sm py-2 px-1 w-full"
              >
                <option value="TITLE">TITLE</option>
                <option value="MR">MR</option>
                <option value="MRS">MRS</option>
                <option value="MS">MS</option>
                <option value="DOCTOR">DOCTOR</option>
                <option value="OTHER">OTHER</option>
              </select>
              <input
                type="text"
                placeholder="First Name"
                className="border w-full text-sm p-2"
              />
              <input
                type="text"
                placeholder="Middle Name"
                className="border w-full p-2 text-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border w-full p-2 text-sm"
              />
            </fieldset>
            <fieldset className="border  flex justify-evenly items-center flex-col md:flex-row py-8 px-2 gap-5 ">
              <legend className="font-bold md:text-2xl text-lg  pl-1 pr-10">
                Address Datails:
              </legend>
              <select
                name="Title"
                id=""
                className="border py-2 px-1 w-full text-sm"
              >
                country
                <option value="TITLE">Country</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Algeria">Algeria</option>
                <option value="DOCTOAngolaR">Angola</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
              <select name="Title" id="" className="border py-2 px-1 w-full ">
                <option value="State">State</option>
                <option value="Abia">Abia</option>
                <option value="Abuja federal capital territory">
                  Abuja federal capital territory
                </option>
                <option value="Adamawa">Adamawa</option>
                <option value="Bauchi">Bauchi</option>
              </select>
              <select name="Title" id="" className="border py-2 px-1 w-full ">
                <option value="LGA">LGA</option>
                <option value="Aba North">Aba North</option>
                <option value="Aba South">Aba South</option>
                <option value="Isiala North">Isiala North</option>
                <option value="Isiala South">Isiala South</option>
                <option value="Arochukwu">Arochukwu</option>
              </select>
              <input
                type="text"
                placeholder="Address"
                className="border w-full p-2"
              />
            </fieldset>
            <fieldset className="border grid md:grid-cols-3 py-8 px-2 gap-5">
              <legend className=" font-bold md:text-2xl text-lg  pl-1 pr-10">
                Personal Datails:
              </legend>
              <input
                type="text"
                placeholder="Age"
                className="border w-full md:w-[150px] p-2"
              />

              <input type="date" className="border w-full  md:w-[200px] p-2" />

              <select
                name="Title"
                id=""
                className="border py-2 px-1 w-full md:w-[150px] "
              >
                <option value="LGA">Gender</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
              </select>

              <input
                type="password"
                placeholder="Password"
                className="border w-full md:w-[150px] p-2"
              />

              <input
                type="text"
                placeholder="confirm Password"
                className="border w-full md:w-[150px] p-2"
              />
              <input
                type="tel"
                placeholder="NIN Number"
                className="border w-full md:w-[150px] p-2"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border w-full md:w-[150px] p-2"
              />
              <input
                type="email"
                placeholder="Email A ddress"
                className="border w-full md:w-[300px] p-2"
              />
            </fieldset>
            <div className="flex flex-col gap-1">
              <div className="flex ">
                <input
                  type="checkbox"
                  className="w-[40px] border-0 bg-accent-1"
                />
                <p>Remember me</p>
              </div>
              <div className="flex ">
                <input
                  type="checkbox"
                  className="w-[40px] border-0 bg-accent-1"
                />
                <p>Accept our Terms & Conditions</p>
              </div>
            </div>
            <button className="bg-primary-blue text-white w-[140px] py-2 mx-auto">
              Sign Up
            </button>

            <p>
              Already have an Account?{" "}
              <Link to="/auth" className="ml-3 text-primary-blue">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
