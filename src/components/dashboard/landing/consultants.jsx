import React from "react";

function Consultants() {
  return (
    <div className="flex items-center justify-center gap-4  flex-wrap">
      <div className="lg:w-[900px] w-full lg:flex gap-3 space-y-3 lg:space-y-0">
        <div className="sm:w-1/2 flex bg-gray-200 rounded-md flex-col gap-3 p-4">
          <div className="flex items-center justify-between mb-1.5">
            <h2 className="text-md font-semibold">Recent Consultations</h2>
            <p className="flex items-center font-semibold text-[12px]">
              See all{" "}
              <span>
                <svg
                  width="15"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4023 11.6423C14.0063 11.0005 14.0063 9.99947 13.4023 9.35772L7.27318 2.84553C6.95775 2.51038 6.43035 2.4944 6.09521 2.80983C5.76006 3.12526 5.74408 3.65266 6.05951 3.9878L12.1886 10.5L6.05951 17.0122C5.74408 17.3473 5.76006 17.8747 6.09521 18.1902C6.43035 18.5056 6.95775 18.4896 7.27318 18.1545L13.4023 11.6423Z"
                    fill="#667185"
                  />
                </svg>
              </span>
            </p>
          </div>
          <div className="lg:flex items-center justify-between">
            {" "}
            <div className="">
              <div className="border border-gray-400 p-1 flex gap-1.5 items-center ">
                {/* image */}
                <img src="/img/Avatars.png" alt="" className="w-[40px]" />
                <div className="flex flex-col">
                  <strong className="text-[12px]"> Dr chan</strong>
                  <span className="text-[10px] font-semibold text-gray-500">
                    Practioner
                  </span>
                </div>
                <button className="m-2 text-[11px] font-bold border border-gray-500 cursor-pointer rounded-2xl px-2">
                  Message
                </button>
              </div>
              <div className="border border-gray-400 p-1 flex gap-1.5 items-center ">
                {/* image */}
                <img src="/img/Avatars (1).png" alt="" className="w-[40px]" />
                <div className="flex flex-col">
                  <strong className="text-[12px]"> Dr mary</strong>
                  <span className="text-[10px] font-semibold text-gray-500">
                    Practioner
                  </span>
                </div>
                <button className="m-2 text-[11px] font-bold border border-gray-500 cursor-pointer rounded-2xl px-2">
                  Message
                </button>
              </div>
              <div className="border border-gray-400 p-1 flex gap-1.5 items-center ">
                {/* image */}
                <img src="/img/Avatars (3).png" alt="" className="w-[40px]" />
                <div className="flex flex-col">
                  <strong className="text-[12px]"> Dr nara</strong>
                  <span className="text-[10px] font-semibold text-gray-500">
                    Practioner
                  </span>
                </div>
                <button className="m-2 text-[11px] font-bold border border-gray-500 cursor-pointer rounded-2xl px-2">
                  Message
                </button>
              </div>
              <div className="border border-gray-400 p-1 flex gap-1.5 items-center ">
                {/* image */}
                <img src="/img/Avatars (2).png" alt="" className="w-[40px]" />
                <div className="flex flex-col">
                  <strong className="text-[12px]"> Dr Ali</strong>
                  <span className="text-[10px] font-semibold text-gray-500">
                    Practioner
                  </span>
                </div>
                <button className="m-2 text-[11px] font-bold border border-gray-500 cursor-pointer rounded-2xl px-2">
                  Message
                </button>
              </div>
            </div>
            <div className="">
              <div className="border border-gray-400 p-1 flex gap-1.5 items-center ">
                {/* image */}
                <img src="/img/Avatars.png" alt="" className="w-[40px]" />
                <div className="flex flex-col">
                  <strong className="text-[12px]"> Dr chan</strong>
                  <span className="text-[10px] font-semibold text-gray-500">
                    Practioner
                  </span>
                </div>
                <button className="m-2 text-[11px] font-bold border border-gray-500 cursor-pointer rounded-2xl px-2">
                  Message
                </button>
              </div>
              <div className="border border-gray-400 p-1 flex gap-1.5 items-center ">
                {/* image */}
                <img src="/img/Avatars (1).png" alt="" className="w-[40px]" />
                <div className="flex flex-col">
                  <strong className="text-[12px]"> Dr mary</strong>
                  <span className="text-[10px] font-semibold text-gray-500">
                    Practioner
                  </span>
                </div>
                <button className="m-2 text-[11px] font-bold border border-gray-500 cursor-pointer rounded-2xl px-2">
                  Message
                </button>
              </div>
              <div className="border border-gray-400 p-1 flex gap-1.5 items-center ">
                {/* image */}
                <img src="/img/Avatars (3).png" alt="" className="w-[40px]" />
                <div className="flex flex-col">
                  <strong className="text-[12px]"> Dr nara</strong>
                  <span className="text-[10px] font-semibold text-gray-500">
                    Practioner
                  </span>
                </div>
                <button className="m-2 text-[11px] font-bold border border-gray-500 cursor-pointer rounded-2xl px-2">
                  Message
                </button>
              </div>
              <div className="border border-gray-400 p-1 flex gap-1.5 items-center ">
                {/* image */}
                <img src="/img/Avatars (2).png" alt="" className="w-[40px]" />
                <div className="flex flex-col">
                  <strong className="text-[12px]"> Dr Ali</strong>
                  <span className="text-[10px] font-semibold text-gray-500">
                    Practioner
                  </span>
                </div>
                <button className="m-2 text-[11px] font-bold border border-gray-500 cursor-pointer rounded-2xl px-2">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:w-1/2 p-4 bg-gray-300 rounded-md flex flex-col gap-4">
          <p>Quick Action</p>
          <hr />
          <div className="flex gap-1.5 items-center mb-0.2">
            <span>
              <svg
                width="38"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="#F0F2F5" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 13C20.5523 13 21 13.4477 21 14V15H27V14C27 13.4477 27.4477 13 28 13C28.5523 13 29 13.4477 29 14V15H30C32.2091 15 34 16.7909 34 19V30C34 32.2091 32.2091 34 30 34H18C15.7909 34 14 32.2091 14 30V19C14 16.7909 15.7909 15 18 15H19V14C19 13.4477 19.4477 13 20 13ZM27 17C27 17.5523 27.4477 18 28 18C28.5523 18 29 17.5523 29 17H30C31.1046 17 32 17.8954 32 19V19.5H16V19C16 17.8954 16.8954 17 18 17H19C19 17.5523 19.4477 18 20 18C20.5523 18 21 17.5523 21 17H27ZM32 21.5H16V30C16 31.1046 16.8954 32 18 32H30C31.1046 32 32 31.1046 32 30V21.5Z"
                  fill="#344054"
                />
              </svg>
            </span>
            <p className="flex-1">
              <strong className="font-semibold text-[16px]">
                Book an Appointment
              </strong>
              <br />
              <span className="text-[13px]  text-gray-600 ">
                {" "}
                find a doctor and specializations
              </span>
            </p>
            <span>
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </div>

          <div className="flex gap-1.5 items-center mb-0.2">
            <span>
              <svg
                width="38"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="#F0F2F5" />
                <path
                  d="M18 22C18 21.4477 18.4477 21 19 21H24C24.5523 21 25 21.4477 25 22C25 22.5523 24.5523 23 24 23H19C18.4477 23 18 22.5523 18 22Z"
                  fill="#344054"
                />
                <path
                  d="M19 25C18.4477 25 18 25.4477 18 26C18 26.5523 18.4477 27 19 27H28C28.5523 27 29 26.5523 29 26C29 25.4477 28.5523 25 28 25H19Z"
                  fill="#344054"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24C34 29.5228 29.5228 34 24 34C23.1677 34 22.3578 33.8981 21.5827 33.7056L16.0388 33.0126C14.8405 32.8628 14.0077 31.7459 14.2063 30.5547L14.5491 28.4974C14.5511 28.4854 14.5514 28.4733 14.5499 28.4613L14.2944 26.4173C14.1019 25.6422 14 24.8323 14 24ZM24 16C19.5817 16 16 19.5817 16 24C16 24.6866 16.0863 25.3515 16.248 25.9853L16.2636 26.0462L16.5344 28.2132C16.5599 28.4171 16.5557 28.6235 16.5219 28.8262L16.179 30.8835C16.1674 30.9536 16.2164 31.0193 16.2868 31.0281L21.9538 31.7364L22.0147 31.752C22.6485 31.9137 23.3135 32 24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16Z"
                  fill="#344054"
                />
              </svg>
            </span>
            <p className="flex-1">
              <strong className="font-semibold text-[16px]">
                Request Consultation
              </strong>
              <br />
              <span className="text-[13px]  text-gray-600">
                {" "}
                Talk to a specialist
              </span>
            </p>
            <span>
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </div>

          <div className="flex gap-1.5 items-center mb-0.2">
            <span>
              <svg
                width="38"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="#F0F2F5" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.0002 17.5C21.5149 17.5 19.5002 19.5147 19.5002 22C19.5002 24.4853 21.5149 26.5 24.0002 26.5C26.4854 26.5 28.5002 24.4853 28.5002 22C28.5002 19.5147 26.4854 17.5 24.0002 17.5ZM21.5002 22C21.5002 20.6193 22.6194 19.5 24.0002 19.5C25.3809 19.5 26.5002 20.6193 26.5002 22C26.5002 23.3807 25.3809 24.5 24.0002 24.5C22.6194 24.5 21.5002 23.3807 21.5002 22Z"
                  fill="#344054"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.8094 15.592C22.3471 13.9002 25.6532 13.9002 28.1909 15.592C31.6218 17.8793 32.585 22.495 30.3553 25.9636L26.5237 31.9238C25.3428 33.7607 22.6575 33.7607 21.4766 31.9238L17.6451 25.9636C15.4153 22.495 16.3785 17.8793 19.8094 15.592ZM20.9188 17.2561C22.7847 16.0121 25.2156 16.0121 27.0815 17.2561C29.6042 18.9379 30.3124 22.3317 28.6729 24.882L24.8413 30.8422C24.4477 31.4546 23.5526 31.4546 23.159 30.8422L19.3274 24.882C17.6879 22.3317 18.3961 18.9379 20.9188 17.2561Z"
                  fill="#344054"
                />
              </svg>
            </span>
            <p className="flex-1">
              <strong className="font-semibold text-[16px]">
                Location of Hospital near you
              </strong>
              <br />
              <span className="text-[13px]  text-gray-600 ">
                {" "}
                Find closest hospital
              </span>
            </p>
            <span>
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </div>

          <div className="flex gap-1.5 items-center mb-0.2">
            <span>
              <svg
                width="38"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="#F0F2F5" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M35 15.4294C35 14.0405 33.6191 13.0745 32.3144 13.5506L25.0165 16.2137L17.6882 16.7867C15.6063 16.9495 14 18.6864 14 20.7746V22.2254C14 24.3136 15.6063 26.0505 17.6882 26.2133L18.1008 26.2455L18.8045 32.3589C18.9777 33.864 20.252 35 21.7671 35C23.5542 35 24.9401 33.4388 24.7282 31.6643L24.1375 26.7176L25.0165 26.7863L32.3144 29.4494C33.6191 29.9255 35 28.9595 35 27.5706V15.4294ZM17.8441 18.7807L24.2308 18.2813V24.7188L17.8441 24.2193C16.8032 24.1379 16 23.2695 16 22.2254V20.7746C16 19.7305 16.8032 18.8621 17.8441 18.7807ZM33 27.5706L26.2308 25.1004V17.8996L33 15.4294L33 27.5706ZM20.7914 32.1302L20.1323 26.4044L22.1043 26.5586L22.7423 31.9014C22.8121 32.4858 22.3557 33 21.7671 33C21.2681 33 20.8484 32.6259 20.7914 32.1302Z"
                  fill="#344054"
                />
              </svg>
            </span>
            <p className="flex-1">
              <strong className="font-semibold text-[16px]">Emergency</strong>
              <br />
              <span className="text-[13px] text-gray-600">
                Request immediate help
              </span>
            </p>
            <span>
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultants;
