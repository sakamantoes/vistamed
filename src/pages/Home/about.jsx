import React from "react";

function About() {
  return (
    <div className="bg-access-2 flex flex-col gap-[6rem] -z-10">
      <div className=" flex items-center justify-center flex-col w-full">
        <p className="pt-3 pb-5 font-bold text-4xl text-primary-blue">
          Why MEDIVISTA
        </p>
        <p className="text-center md:w-[900px] w-[350px] text-[15px] font-semibold text-gray-600 ">
          MEDIVISITA bridges gap in healthcare by eliminating fragmented
          records, enabling early diagnosis, and <br /> giving both doctors and
          patient a smarter, more connected experience
        </p>
      </div>

      <div className="flex items-center justify-center flex-col">
        <p className="pt-3 pb-5 font-bold text-4xl text-primary-blue">
          Mission and Vision
        </p>
        <div className="w-[300px] md:w-[600px] px-2 flex items-center justify-center flex-col gap-10 pb-3.5">
          <div className="">
            <p className="font-bold text-2xl">Mission Statement:</p>
            <p className=" text-xl text-gray-600 ">
              To revolutionize healthcare delivery by making health data
              accessible, intelligent, and predictive — empowering patients,
              healthcare providers, and institutions to make better, faster, and
              more informed decisions.
            </p>
          </div>

          <div className="">
            <p className="font-bold text-2xl">Vision Statement:</p>
            <p className=" text-xl text-gray-600 ">
              To become Africa’s leading intelligent health data platform,
              creating a future where every individual’s medical journey is
              connected, predictive, and centered on proactive wellness
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
