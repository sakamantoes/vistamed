import React from "react";

function HealthMetrics() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="border-gray-400 border rounded-2xl overflow-hidden">
          <div className="p-3">
            <h1>Health Metrics</h1>
            <p>6-month trend of your key health indicators</p>
          </div>

          <div className="w-[650px] h-[330px] bg-gray-300"></div>
          {/* chart */}
        </div>

        <div className="w-[350px] h-[400px] bg-gray-300 rounded-2xl border border-gray-400"></div>
      </div>
    </>
  );
}

export default HealthMetrics;
