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
              <input type="checkbox" className="cursor-pointer" />
              <p>Agree to terms and condition.</p>
            </div>

            <Link to="/auth/register">
              <p className="text-blue-600">Create an account here</p>
            </Link>
          </div>

          <Link to="/dashboard">
            {" "}
            <button className="text-center bg-primary-blue text-white py-2 px-6 cursor-pointer flex items-center justify-center mx-auto mb-4">
              Login
            </button>
          </Link>

          <div className="flex justify-between items-center gap-9">
            <div className="bg-gray-300 cursor-pointer flex h-[37px] justify-center items-center gap-1 px-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.8 14.6438H30.6253V14.5833H17.5003V20.4166H25.7421C24.5397 23.8124 21.3088 26.25 17.5003 26.25C12.6681 26.25 8.75033 22.3321 8.75033 17.5C8.75033 12.6678 12.6681 8.74996 17.5003 8.74996C19.7308 8.74996 21.7601 9.59142 23.3052 10.9659L27.4301 6.841C24.8255 4.41361 21.3416 2.91663 17.5003 2.91663C9.44668 2.91663 2.91699 9.44631 2.91699 17.5C2.91699 25.5536 9.44668 32.0833 17.5003 32.0833C25.554 32.0833 32.0837 25.5536 32.0837 17.5C32.0837 16.5221 31.983 15.5677 31.8 14.6438Z"
                  fill="#FFC107"
                />
                <path
                  d="M4.59766 10.7121L9.38901 14.226C10.6855 11.0162 13.8253 8.74996 17.4995 8.74996C19.7301 8.74996 21.7593 9.59142 23.3044 10.9659L27.4293 6.841C24.8247 4.4136 21.3408 2.91663 17.4995 2.91663C11.8981 2.91663 7.04037 6.07902 4.59766 10.7121Z"
                  fill="#FF3D00"
                />
                <path
                  d="M17.5004 32.0833C21.2673 32.0833 24.69 30.6418 27.2778 28.2975L22.7642 24.4781C21.2511 25.6295 19.4017 26.2521 17.5004 26.25C13.7073 26.25 10.4865 23.8314 9.2732 20.4561L4.51758 24.1201C6.93112 28.8429 11.8326 32.0833 17.5004 32.0833Z"
                  fill="#4CAF50"
                />
                <path
                  d="M31.7997 14.6439H30.625V14.5834H17.5V20.4167H25.7418C25.1666 22.0328 24.1306 23.4451 22.7617 24.4789L22.7639 24.4774L27.2774 28.2968C26.958 28.587 32.0833 24.7917 32.0833 17.5C32.0833 16.5222 31.9827 15.5677 31.7997 14.6439Z"
                  fill="#1976D2"
                />
              </svg>
              <p>Sign up with Google</p>
            </div>
            <div className="bg-gray-300 cursor-pointer flex h-[37px] justify-center items-center gap-1 px-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_798_1071)">
                  <path
                    d="M35 17.5C35 7.83508 27.1649 0 17.5 0C7.83508 0 0 7.83508 0 17.5C0 26.2347 6.39953 33.4746 14.7656 34.7874V22.5586H10.3223V17.5H14.7656V13.6445C14.7656 9.25859 17.3783 6.83594 21.3757 6.83594C23.2903 6.83594 25.293 7.17773 25.293 7.17773V11.4844H23.0863C20.9124 11.4844 20.2344 12.8334 20.2344 14.2174V17.5H25.0879L24.312 22.5586H20.2344V34.7874C28.6005 33.4746 35 26.2348 35 17.5Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M24.312 22.5586L25.0879 17.5H20.2344V14.2174C20.2344 12.8332 20.9124 11.4844 23.0863 11.4844H25.293V7.17773C25.293 7.17773 23.2903 6.83594 21.3756 6.83594C17.3783 6.83594 14.7656 9.25859 14.7656 13.6445V17.5H10.3223V22.5586H14.7656V34.7874C15.6702 34.9291 16.5844 35.0002 17.5 35C18.4156 35.0002 19.3298 34.9291 20.2344 34.7874V22.5586H24.312Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_798_1071">
                    <rect width="35" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>Sign up with Facebook</p>
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
          </div>
          <button className="text-center bg-primary-blue text-white py-2 px-8 cursor-pointer mb-4 flex items-center justify-center mx-auto">
            Login
          </button>

          <div className="flex justify-between items-center gap-9">
            <div className="bg-gray-300 cursor-pointer flex h-[37px] justify-center items-center gap-1 px-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.8 14.6438H30.6253V14.5833H17.5003V20.4166H25.7421C24.5397 23.8124 21.3088 26.25 17.5003 26.25C12.6681 26.25 8.75033 22.3321 8.75033 17.5C8.75033 12.6678 12.6681 8.74996 17.5003 8.74996C19.7308 8.74996 21.7601 9.59142 23.3052 10.9659L27.4301 6.841C24.8255 4.41361 21.3416 2.91663 17.5003 2.91663C9.44668 2.91663 2.91699 9.44631 2.91699 17.5C2.91699 25.5536 9.44668 32.0833 17.5003 32.0833C25.554 32.0833 32.0837 25.5536 32.0837 17.5C32.0837 16.5221 31.983 15.5677 31.8 14.6438Z"
                  fill="#FFC107"
                />
                <path
                  d="M4.59766 10.7121L9.38901 14.226C10.6855 11.0162 13.8253 8.74996 17.4995 8.74996C19.7301 8.74996 21.7593 9.59142 23.3044 10.9659L27.4293 6.841C24.8247 4.4136 21.3408 2.91663 17.4995 2.91663C11.8981 2.91663 7.04037 6.07902 4.59766 10.7121Z"
                  fill="#FF3D00"
                />
                <path
                  d="M17.5004 32.0833C21.2673 32.0833 24.69 30.6418 27.2778 28.2975L22.7642 24.4781C21.2511 25.6295 19.4017 26.2521 17.5004 26.25C13.7073 26.25 10.4865 23.8314 9.2732 20.4561L4.51758 24.1201C6.93112 28.8429 11.8326 32.0833 17.5004 32.0833Z"
                  fill="#4CAF50"
                />
                <path
                  d="M31.7997 14.6439H30.625V14.5834H17.5V20.4167H25.7418C25.1666 22.0328 24.1306 23.4451 22.7617 24.4789L22.7639 24.4774L27.2774 28.2968C26.958 28.587 32.0833 24.7917 32.0833 17.5C32.0833 16.5222 31.9827 15.5677 31.7997 14.6439Z"
                  fill="#1976D2"
                />
              </svg>
              <p>Sign up with Google</p>
            </div>
            <div className="bg-gray-300 cursor-pointer flex h-[37px] justify-center items-center gap-1 px-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_798_1071)">
                  <path
                    d="M35 17.5C35 7.83508 27.1649 0 17.5 0C7.83508 0 0 7.83508 0 17.5C0 26.2347 6.39953 33.4746 14.7656 34.7874V22.5586H10.3223V17.5H14.7656V13.6445C14.7656 9.25859 17.3783 6.83594 21.3757 6.83594C23.2903 6.83594 25.293 7.17773 25.293 7.17773V11.4844H23.0863C20.9124 11.4844 20.2344 12.8334 20.2344 14.2174V17.5H25.0879L24.312 22.5586H20.2344V34.7874C28.6005 33.4746 35 26.2348 35 17.5Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M24.312 22.5586L25.0879 17.5H20.2344V14.2174C20.2344 12.8332 20.9124 11.4844 23.0863 11.4844H25.293V7.17773C25.293 7.17773 23.2903 6.83594 21.3756 6.83594C17.3783 6.83594 14.7656 9.25859 14.7656 13.6445V17.5H10.3223V22.5586H14.7656V34.7874C15.6702 34.9291 16.5844 35.0002 17.5 35C18.4156 35.0002 19.3298 34.9291 20.2344 34.7874V22.5586H24.312Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_798_1071">
                    <rect width="35" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>Sign up with Facebook</p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
