import React from "react";

function Privacy() {
  return (
    <div className="">
      <div className="md:w-[800px] w-[390px] mx-auto">
        <nav className="flex items-center md:gap-30 ">
          <img src="/img/logo.png" alt="" className="w-[200px]" />
          <h1 className="text-3xl text-primary-blue font-bold">
            Privacy Policy
          </h1>
        </nav>
        <div className="text-2xl ">
          <div className="flex flex-col gap-9 mb-7">
            <p>
              <strong>Effective Date: </strong> 14th April 2025
            </p>{" "}
            <p className="text-[19px]">
              At <strong>MEDIVISTA,</strong> your privacy and the protection of
              your personal health information are our highest priorities. This
              Privacy Policy outlines how we collect, use, protect, and share
              your information.
            </p>
          </div>

          <div className="flex flex-col gap-9  mb-7">
            <strong>1. Information We Collect</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <div className="flex items-center gap-4">
                {" "}
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Personal Identification Information: Name, date of birth,
                contact information.
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                medical Information: Health records, prescriptions, lab results,
                allergies, surgeries, and predictive health insights
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>Usage Data:
                Platform access logs, interaction history, device information.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9  mb-7">
            <strong>2. How We use your information</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <div className="flex items-center gap-4">
                {" "}
                <div className="w-2 h-2 bg-black rounded-full"></div>
                To provide secure access to your unified health records.
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                To deliver personalized health insights and predictive risk
                assessments.
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>To support
                healthcare providers in improving diagnoses and treatment plans.
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>To enhance
                and optimize platform performance and security.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9  mb-7">
            <strong>3. Information Sharing</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <div>We only share your information in the following cases:</div>
              <div className="flex items-center gap-4">
                {" "}
                <div className="w-2 h-2 bg-black rounded-full"></div>
                With authorized healthcare providers involved in your care.
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                With insurance companies or research bodies, strictly with your
                consent and after data anonymization.
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>To comply
                with legal obligations, if required by law.
              </div>
              <p>We never sell your personal data.</p>
            </div>
          </div>

          <div className="flex flex-col gap-9  mb-7">
            <strong>4. Data Security</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <div className="flex items-center gap-4">
                {" "}
                <div className="w-2 h-2 bg-black rounded-full"></div>
                All data is encrypted during transmission and storage.
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                We use blockchain technologies to ensure data integrity.
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>Access is
                restricted to authorized personnel only, monitored through audit
                trails.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9  mb-7">
            <strong>5. Your Right</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <div className="flex items-center gap-4">
                {" "}
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Access: You can request to view your health records anytime.
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Correction: You can request corrections to inaccurate
                information.
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>Deletion:
                You may request deletion of your account and associated records,
                subject to applicable laws.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9  mb-7">
            <strong>6. Children Privacy</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <p>
                Our platform is not intended for individuals under the age of 18
                without parental or guardian consent
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-9  mb-7">
            <strong>7. Changes to This Policy</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <p>
                We may update this Privacy Policy periodically. Users will be
                notified of significant changes via the platform or email.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-9  mb-7">
            <strong>8. Contact Us</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <p>
                For questions or concerns regarding your privacy, please
                contact: Email: support@medivista.health Phone:
                +234-XXX-XXX-XXXX Address: Umuahia Center, Abia State, Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
