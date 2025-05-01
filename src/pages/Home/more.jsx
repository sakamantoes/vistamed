import React from "react";

const moreData = [
  {
    src: "/img/student-card.png",
    title: "Universal  Patient ID",
    body: "Secured  And UNIQUE IDENTIFIERS FOR EVERY PATIENT ",
  },
  {
    src: "/img/ai.png",
    title: "aI Health Predictors",
    body: " Forecast health risks using machine learning",
  },
  {
    src: "/img/timer.png",
    title: "Real-Time Access ",
    body: "Access and sync records across all facilities  ",
  },
  {
    src: "/img/hospital.png",
    title: "Hospital integration",
    body: "connect easily via API  TO EXISTING EMRS ",
  },
  {
    src: "/img/protection.png",
    title: "data security",
    body: "End-to-end encryption and access control  ",
  },
  {
    src: "/img/dashboard.png",
    title: "patient dashboard",
    body: "Track Medical history, Prescription, and more.... ",
  },
];

function More() {
  return (
    <div className="py-10 flex justify-center items-center flex-col">
      <h1 className="text-center text-2xl font-bold text-sec-blue mb-3.5 ">
        Key Features
      </h1>
      <div className="grid md:grid-cols-3 gap-8 items-center justify-center">
        {moreData.map(({ title, body, src }, i) => (
          <div
            key={i}
            className=" bg-secondary-gray w-[280px] md:w-[300px] h-[170px] rounded-md flex items-center justify-start flex-row py-3 px-2 hover:translate-y-[-10px] transition-all duration-500 autoDisplay"
          >
            <div className="w-1/2">
              <h1 className="capitalized text-primary-blue font-bold text-[20px]">
                {title}
              </h1>
              <p className="word-spacing-custom text-[13px] text-gray-600">
                {body}
              </p>
            </div>

            <div className="w-1/2">
              <img src={src} alt="icon" className="w-[180px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default More;
