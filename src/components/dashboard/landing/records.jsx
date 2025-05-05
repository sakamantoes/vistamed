import React from "react";

function Records() {
  return (
    <div className="flex flex-wrap md:flex-row gap-4 items-center justify-center my-5">
      <div className="lg:w-[900px] lg:flex  gap-3">
        <div className="lg:w-1/2 w-full bg-gray-200 rounded-2xl p-2 md:p-5">
          <div className="relative">
            <h3 className="text-left font-bold text-sec-blue text-[20px] md:text-[25px]">
              Past Appointments
            </h3>
            <a
              href=""
              className="capitalize text-left absolute top-2 font-semibold right-0 md:flex hidden text-[14px] items-center"
            >
              view all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
          <div className="mt-2 text-rose-500 text-[15px] md:text-xl font-bold text-left">
            Appointments Overview
          </div>

          <div className="flex gap-3 flex-col text-[15px]">
            <div className="">
              <strong>Date & Time:</strong>
              March 12, 2025. 10:00AM
            </div>

            <div className="">
              <strong>Hospital/Clinic :</strong>
              Mercy General Hospital
            </div>

            <div className="">
              <strong>Department/Specialty :</strong>
              Cardiology
            </div>

            <div className="">
              <strong> Doctors Name : </strong>
              Dr.
            </div>

            <div className="text-rose-500 text-xl font-bold text-left">
              Visit Summary
            </div>
            <div className="">
              <strong>Diagnosis :</strong>
            </div>

            <div className="">
              <strong>Prescribed Medicine:</strong>
            </div>
            <div className="">
              <strong>Recommendation:</strong>
            </div>
            <a className="flex items-center font-semibold  md:hidden text-purple-500">
              view more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 h-[420px] bg-gray-200 rounded-2xl p-2 md:p-5">
          <div className="flex relative items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="">
                {/* icon */}
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 35 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.0911 15.2885H20.4245V3.0577H2.92448V39.7501H32.0911V15.2885ZM30.8836 12.2308L23.3411 4.32358V12.2308H30.8836ZM1.46615 0H23.3411L35.0078 12.2308V41.2789C35.0078 41.6844 34.8542 42.0733 34.5807 42.36C34.3072 42.6467 33.9363 42.8078 33.5495 42.8078H1.46615C1.07937 42.8078 0.708439 42.6467 0.434949 42.36C0.161458 42.0733 0.0078125 41.6844 0.0078125 41.2789V1.52885C0.0078125 1.12337 0.161458 0.734504 0.434949 0.447789C0.708439 0.161075 1.07937 0 1.46615 0ZM8.75781 21.4039H26.2578V24.4616H8.75781V21.4039ZM8.75781 12.2308H16.0495V15.2885H8.75781V12.2308ZM8.75781 30.577H26.2578V33.6347H8.75781V30.577Z"
                    fill="black"
                  />
                </svg>
              </div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-sec-blue">
                Recent Health Records
              </h3>
            </div>
            <a
              href=""
              className="capitalize text-left  font-semibold right-0 md:flex hidden text-[14px] items-center"
            >
              view all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>

          <div className="">
            <div className="flex justify-between border-b border-black/20 p-2">
              <div className="">
                <h2 className="font-bold text-[15px]">Routine Checkup</h2>
                <p className="font-semibold text-gray-600 text-[13px]">
                  March 18, 2025, DR, Sarah Johnson
                </p>
              </div>
              <div className="cursor-pointer flex items-center justify-center gap-1.5">
                <div className="">
                  {/* transaction icon */}
                  <svg
                    width="25"
                    height="23"
                    viewBox="0 0 35 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0911 15.2885H20.4245V3.0577H2.92448V39.7501H32.0911V15.2885ZM30.8836 12.2308L23.3411 4.32358V12.2308H30.8836ZM1.46615 0H23.3411L35.0078 12.2308V41.2789C35.0078 41.6844 34.8542 42.0733 34.5807 42.36C34.3072 42.6467 33.9363 42.8078 33.5495 42.8078H1.46615C1.07937 42.8078 0.708439 42.6467 0.434949 42.36C0.161458 42.0733 0.0078125 41.6844 0.0078125 41.2789V1.52885C0.0078125 1.12337 0.161458 0.734504 0.434949 0.447789C0.708439 0.161075 1.07937 0 1.46615 0ZM8.75781 21.4039H26.2578V24.4616H8.75781V21.4039ZM8.75781 12.2308H16.0495V15.2885H8.75781V12.2308ZM8.75781 30.577H26.2578V33.6347H8.75781V30.577Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="">
                  {/* download icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-between border-b border-black/20 p-2">
              <div className="">
                <h2 className="font-bold text-[15px]">Routine Checkup</h2>
                <p className="font-semibold text-gray-600 text-[13px]">
                  March 18, 2025, DR, Sarah Johnson
                </p>
              </div>
              <div className="cursor-pointer flex items-center justify-center gap-1.5">
                <div className="">
                  {/* transaction icon */}
                  <svg
                    width="25"
                    height="23"
                    viewBox="0 0 35 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0911 15.2885H20.4245V3.0577H2.92448V39.7501H32.0911V15.2885ZM30.8836 12.2308L23.3411 4.32358V12.2308H30.8836ZM1.46615 0H23.3411L35.0078 12.2308V41.2789C35.0078 41.6844 34.8542 42.0733 34.5807 42.36C34.3072 42.6467 33.9363 42.8078 33.5495 42.8078H1.46615C1.07937 42.8078 0.708439 42.6467 0.434949 42.36C0.161458 42.0733 0.0078125 41.6844 0.0078125 41.2789V1.52885C0.0078125 1.12337 0.161458 0.734504 0.434949 0.447789C0.708439 0.161075 1.07937 0 1.46615 0ZM8.75781 21.4039H26.2578V24.4616H8.75781V21.4039ZM8.75781 12.2308H16.0495V15.2885H8.75781V12.2308ZM8.75781 30.577H26.2578V33.6347H8.75781V30.577Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="">
                  {/* download icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-between border-b border-black/20 p-2">
              <div className="">
                <h2 className="font-bold text-[15px]">Annual Physical</h2>
                <p className="font-semibold text-gray-600 text-[13px]">
                  April 18, 2025, DR, Michael Johnson
                </p>
              </div>
              <div className="cursor-pointer flex items-center justify-center gap-1.5">
                <div className="">
                  {/* transaction icon */}
                  <svg
                    width="25"
                    height="23"
                    viewBox="0 0 35 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0911 15.2885H20.4245V3.0577H2.92448V39.7501H32.0911V15.2885ZM30.8836 12.2308L23.3411 4.32358V12.2308H30.8836ZM1.46615 0H23.3411L35.0078 12.2308V41.2789C35.0078 41.6844 34.8542 42.0733 34.5807 42.36C34.3072 42.6467 33.9363 42.8078 33.5495 42.8078H1.46615C1.07937 42.8078 0.708439 42.6467 0.434949 42.36C0.161458 42.0733 0.0078125 41.6844 0.0078125 41.2789V1.52885C0.0078125 1.12337 0.161458 0.734504 0.434949 0.447789C0.708439 0.161075 1.07937 0 1.46615 0ZM8.75781 21.4039H26.2578V24.4616H8.75781V21.4039ZM8.75781 12.2308H16.0495V15.2885H8.75781V12.2308ZM8.75781 30.577H26.2578V33.6347H8.75781V30.577Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="">
                  {/* download icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-between border-b border-black/20 p-2">
              <div className="">
                <h2 className="font-bold text-[15px]">Blood Work Analysi</h2>
                <p className="font-semibold text-gray-600 text-[13px]">
                  March 18, 2025, DR, Orji Johnson
                </p>
              </div>
              <div className="cursor-pointer flex items-center justify-center gap-1.5">
                <div className="">
                  {/* transaction icon */}
                  <svg
                    width="25"
                    height="23"
                    viewBox="0 0 35 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0911 15.2885H20.4245V3.0577H2.92448V39.7501H32.0911V15.2885ZM30.8836 12.2308L23.3411 4.32358V12.2308H30.8836ZM1.46615 0H23.3411L35.0078 12.2308V41.2789C35.0078 41.6844 34.8542 42.0733 34.5807 42.36C34.3072 42.6467 33.9363 42.8078 33.5495 42.8078H1.46615C1.07937 42.8078 0.708439 42.6467 0.434949 42.36C0.161458 42.0733 0.0078125 41.6844 0.0078125 41.2789V1.52885C0.0078125 1.12337 0.161458 0.734504 0.434949 0.447789C0.708439 0.161075 1.07937 0 1.46615 0ZM8.75781 21.4039H26.2578V24.4616H8.75781V21.4039ZM8.75781 12.2308H16.0495V15.2885H8.75781V12.2308ZM8.75781 30.577H26.2578V33.6347H8.75781V30.577Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="">
                  {/* download icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <a className="flex items-center text-[16px] font-semibold  md:hidden text-purple-500">
              view more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Records;
