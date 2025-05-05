import React from "react";

function HealthMetrics() {
  return (
    <>
      <div className="flex justify-center">
        <div className="lg:w-[900px]  flex lg:flex-row flex-col w-full gap-3 items-start ">
          <div className="lg:w-1/2 w-full border-gray-400 border rounded-2xl overflow-hidden">
            <div className="p-3">
              <h1 className="font-semibold text-2xl">Health Metrics</h1>
              <p className="text-md pb-0.5">
                6-month trend of your key health indicators
              </p>
              <hr />
            </div>

            <div className="w-full h-[319px] bg-gray-300"></div>
            {/* chart */}
          </div>

          <div className="lg:w-1/2 w-full h-[400px] bg-gray-300 rounded-2xl border border-gray-400"></div>
        </div>
      </div>
    </>
  );
}

export default HealthMetrics;
