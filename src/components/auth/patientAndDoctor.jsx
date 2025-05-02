import React from "react";
import { Link } from "react-router";

export function Patient() {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <form className="shadow-2xl p-5 border border-gray-400 rounded-md    ">
          <h1 className="font-bold text-3xl text-center mb-9">Patient Login</h1>
          <div className="flex flex-col gap-[1px] mb-2.5">
            <label htmlFor="Email" className="font-bold text-[17px]">
              User Email
            </label>
            <input
              type="text"
              className="py-3 px-1.5 rounded-[3PX] border border-gray-700"
            />
          </div>
          <div className="flex flex-col gap-[1px]">
            <label htmlFor="password" className="font-bold text-[17px]">
              Password
            </label>
            <input
              type="password"
              className="py-3 px-1.5 rounded-[3PX] border border-gray-700"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex my-5  gap-1">
              <input type="checkbox" />
              <p>Agree to terms and condition.</p>
            </div>

            <Link to="/auth/register">
              <p className="text-blue-600">Create an account here</p>
            </Link>
          </div>

          <button className="text-center bg-primary-blue text-white py-2 px-6 cursor-pointer mb-2 flex items-center justify-center mx-auto">
            Login
          </button>

          <div className="flex justify-between gap-6">
            <div className=" w-[200px] bg-gray-500 text-center text-white py-1">
              Google
            </div>
            <div className="w-[200px] bg-gray-500 text-center text-white py-1">
              Facebook
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export function Doctor() {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <form className="shadow-2xl p-5 border border-gray-400 rounded-md    ">
          <h1 className="font-bold text-3xl text-center mb-9">Doctor Login</h1>
          <div className="flex flex-col gap-[1px] mb-2.5">
            <label htmlFor="Email" className="font-bold text-[17px]">
              User Email
            </label>
            <input
              type="text"
              className="py-3 px-1.5 rounded-[3PX] border border-gray-700"
            />
          </div>
          <div className="flex flex-col gap-[1px]">
            <label htmlFor="password" className="font-bold text-[17px]">
              Password
            </label>
            <input
              type="password"
              className="py-3 px-1.5 rounded-[3PX] border border-gray-700"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex my-5  gap-1">
              <input type="checkbox" />
              <p>Agree to terms and condition.</p>
            </div>

            <Link to="/auth/doctorForm">
              <p className="text-blue-600">Create an account here</p>
            </Link>
          </div>
          <button className="text-center bg-primary-blue text-white py-2 px-8 cursor-pointer mb-2 flex items-center justify-center mx-auto">
            Login
          </button>

          <div className="flex justify-between gap-6">
            <div className=" w-[200px] bg-gray-500 text-center text-white py-1">
              Google
            </div>
            <div className="w-[200px] bg-gray-500 text-center text-white py-1">
              Facebook
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export function DoctorForm() {
  return (
    <div className="flex items-center justify-center p-5">
      <form className="shadow-2xl p-5 border border-gray-400 md:w-[700px] rounded-md">
        <h1 className="font-bold text-3xl text-center mb-9">
          Create Your Doctors Account
        </h1>
        <div className="mb-5">
          <h1 className="font-bold">Text ONE</h1>
          <div className="flex flex-col gap-[1px] my-1">
            <input
              type="text"
              className="py-3 px-1.5 rounded-[3PX] bg-gray-300/50 border border-gray-700"
            />
          </div>
          <div className="flex flex-col gap-[1px]">
            <select
              name=""
              id=""
              className="py-3 px-1.5 rounded-[3PX] bg-gray-300/50 border border-gray-700"
            >
              <option value="nurse">nurse</option>
              <option value="doctor">doctor</option>
              <option value="doctor2">doctor2</option>
              <option value="nurse2">nurse2</option>
            </select>
          </div>
          <div className="flex flex-col gap-[1px] my-1">
            <input
              type="text"
              className="py-3 px-1.5 rounded-[3PX] bg-gray-300/50 border border-gray-700"
            />
          </div>
          <div className="flex flex-col gap-[1px]">
            <input
              type="password"
              className="py-3 px-1.5 rounded-[3PX] bg-gray-300/50 border border-gray-700"
            />
          </div>
          <div className="flex flex-col gap-[1px] my-1">
            <input
              type="text"
              className="py-3 px-1.5 rounded-[3PX] bg-gray-300/50 border border-gray-700"
            />
          </div>
        </div>

        <div className="mb-5">
          <h1 className="font-bold">Text TWO</h1>
          <div className="flex flex-col gap-[1px] my-1">
            <input
              type="text"
              className="py-3 px-1.5 rounded-[3PX] bg-gray-300/50 border border-gray-700"
            />
          </div>
          <div className="flex flex-col gap-[1px]">
            <input
              type="password"
              className="py-3 px-1.5 rounded-[3PX] bg-gray-300/50 border border-gray-700"
            />
          </div>
          <div className="flex flex-col gap-[1px] my-1">
            <input
              type="text"
              className="py-3 px-1.5 rounded-[3PX] bg-gray-300/50 border border-gray-700"
            />
          </div>
        </div>

        <div className="mb-5">
          <h1 className="font-bold">Text TWO</h1>
          <div className="flex flex-col gap-[1px]">
            <input
              type="password"
              className="py-3 px-1.5 rounded-[3PX] bg-gray-300/50 border border-gray-700"
            />
          </div>
          <div className="flex flex-col gap-[1px] my-1">
            <input
              type="text"
              className="py-3 px-1.5 rounded-[3PX] bg-gray-300/50 border border-gray-700"
            />
          </div>
        </div>

        <div className="flex my-1  gap-1">
          <input type="checkbox" />
          <p>Agree to terms and condition.</p>
        </div>
        <div className="flex gap-1">
          <input type="checkbox" />
          <p>Agree to terms and condition.</p>
        </div>

        <button className="text-center bg-primary-blue text-white py-2 px-8 cursor-pointer mb-2 flex items-center justify-center mx-auto">
          Login
        </button>

        <Link to="/auth/login?loginAs=doctor" className="text-center mt-0.5">
          <p>Already have a doctor account? Login</p>
        </Link>
      </form>
    </div>
  );
}
