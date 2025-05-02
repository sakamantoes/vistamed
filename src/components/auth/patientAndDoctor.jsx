import React from "react";

export function Patient() {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <form action="">
          <h1 className="font-bold text-3xl">Patient Login</h1>
          <div>
            <label htmlFor="Email">User Email</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" />
          </div>
          <div>
            <input type="checkbox" />
            <p></p>
          </div>
          <button>Login</button>
        </form>
      </div>
    </>
  );
}

export function Doctor() {
  return (
    <>
      <h1>doctors</h1>
    </>
  );
}
