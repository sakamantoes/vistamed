import React from "react";

function AboutPage() {
  return (
    <div className="md:w-[800px] w-[390px] mx-auto">
      <nav className="flex items-center md:gap-30 ">
        <img src="/img/logo.png" alt="" className="w-[200px]" />
        <h1 className="text-3xl text-primary-blue font-bold">About Us</h1>
      </nav>
      <div className="text-2xl text-center">
        At MEDIVISTA, we envision a future where healthcare is seamlessly
        connected, intelligent, and proactive. Born from a desire to bridge the
        gap between fragmented patient records and predictive care, MEDIVISTA
        offers a unified digital health platform that empowers hospitals,
        healthcare providers, and patients. Our AI-driven system not only
        ensures instant access to comprehensive health records but also predicts
        potential health risks, enabling early intervention and smarter
        healthcare decisions. With a team passionate about innovation and
        patient-centered technology, MEDIVISTA is committed to transforming
        healthcare in Nigeria and beyond — making medical data accessible,
        actionable, and secure for all. Together, we are shaping a healthier,
        smarter tomorrow
      </div>
    </div>
  );
}

export default AboutPage;
