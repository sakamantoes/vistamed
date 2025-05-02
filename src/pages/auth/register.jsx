import React from "react";

function Register() {
  return (
    <div className="flex items-center justify-center gap-7 flex-col h-[100vh]">
      <form className="md:w-[500px] gap-7 flex items-center justify-center flex-col">
        <h1 className="font-bold text-3xl ">Create an Account</h1>
        <fieldset className="border w-[100%] flex justify-center items-center flex-row py-1.5 ">
          <legend className="mr-5 font-bold pl-1 pr-10">Name Dateils:</legend>

          <select name="Title" id="" className="border p-2.5">
            <option value="TITLE">TITLE</option>
            <option value="MR">MR</option>
            <option value="MRS">MRS</option>
            <option value="MS">MS</option>
            <option value="DOCTOR">DOCTOR</option>
            <option value="OTHER">OTHER</option>
          </select>
        </fieldset>

        <fieldset className="border w-[100%]">
          <legend>Address Dateils:</legend>
        </fieldset>

        <fieldset className="border w-[100%]">
          <legend>Personal Dateils:</legend>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;
