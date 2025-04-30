import React from "react";

const moreData = [
  {
    title: "Universal  Patient ID",
    body: "Secured  And UNIQUE IDENTIFIERS FOR EVERY PATIENT ",
  },
  {
    title: "aI Health Predictors",
    body: " Forecast health risks using machine learning",
  },
  {
    title: "Real-Time Access ",
    body: "Access and sync records across all facilities  ",
  },
  {
    title: "Hospital integration",
    body: "connect easily via API  TO EXISTING EMRS ",
  },
  {
    title: "data security",
    body: "End-to-end encryption and access control  ",
  },
  {
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
        {moreData.map(({ title, body }, i) => (
          <div
            key={i}
            className=" bg-secondary-gray w-[280px] md:w-[270px] h-[170px] rounded-md flex items-center justify-start flex-col py-3 px-2 hover:translate-y-[-10px] transition-all duration-500 autoDisplay"
          >
            <h1 className="capitalized text-primary-blue font-bold text-[20px]">
              {title}
            </h1>
            <p className="word-spacing-custom">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default More;
