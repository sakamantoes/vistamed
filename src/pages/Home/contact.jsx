import React from "react";

function Contact() {
  return (
    <div className="flex items-center justify-center">
      <div className="  w-[400px] flex items-center justify-center flex-col">
        <h1 className="text-center text-primary-blue font-bold text-2xl my-2">
          Get In Touch
        </h1>
        <form
          className="flex
         flex-col gap-3"
        >
          <div className="flex flex-col">
            <label htmlFor="">EMAIL</label>
            <input
              type="text"
              placeholder="Enter Email"
              className=" border border-gray-600/50 sm:w-[500px] w-[300px] py-3 px-1 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">NAME</label>
            <input
              type="text"
              placeholder="Enter Name"
              className=" border border-gray-600/50 sm:w-[500px] w-[300px] py-3 px-1 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">MESSAGE</label>
            <textarea
              type="text"
              placeholder="Enter Message..."
              className=" border border-gray-600/50 sm:w-[500px] w-[300px] h-[200px] py-3 px-1 rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
