import React from "react";

function TermsCondition() {
  return (
    <div className="pt-[65px]">
      <div className=" md:w-[800px]  w-[390px]px-2 mx-auto">
        <nav className="flex items-center md:gap-30 ">
          <img src="/img/logo.png" alt="" className="w-[200px]" />
          <h1 className="text-3xl text-primary-blue font-bold">
            Terms And Condition
          </h1>
        </nav>
        <div className="flex flex-col gap-9 mb-7">
          <p>
            <strong>Effective Date: </strong> 14th April 2025
          </p>{" "}
          <p className="text-[19px]">
            At <strong>MEDIVISTA,</strong> your privacy and the protection of
            your personal health information are our highest priorities. This
            Privacy Policy outlines how we collect, use, protect, and share your
            information.
          </p>
        </div>

        <div className="text-2xl">
          <div className="flex flex-col gap-9  mb-7">
            <strong>1. Use of the Platform</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <div className="flex items-center gap-4">
                {" "}
                <div className="w-2 h-2 bg-black rounded-full"></div>
                You must be at least 18 years old or have parental/guardian
                consent to use MEDIVISTA.
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                You agree to use the platform only for lawful healthcare-related
                purposes.
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Unauthorized access, misuse of data, or interference with the
                platform’s functionality is strictly prohibited.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9  mb-7">
            <strong>2. Account Security</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <div className="flex items-center gap-4">
                {" "}
                <div className="w-2 h-2 bg-black rounded-full"></div>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Notify MEDIVISTA immediately of any unauthorized access or
                suspicious activities.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9  mb-7">
            <strong>3. Medical Disclaimer</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <div className="flex items-center gap-4">
                {" "}
                <div className="w-2 h-2 bg-black rounded-full"></div>
                MEDIVISTA provides predictive analytics and health record{" "}
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Notify MEDIVISTA immediately of any unauthorized access or
                suspicious activities.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9  mb-7">
            <strong>4. Intellectual Property</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <div className="flex items-center gap-4">
                {" "}
                <div className="w-2 h-2 bg-black rounded-full"></div>
                All content, software, and designs within MEDIVISTA are owned by
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Notify MEDIVISTA immediately of any unauthorized access or
                suspicious activities.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9  mb-7">
            <strong>5. Medical Disclaimer</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <div className="flex items-center gap-4">
                {" "}
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Your personal health data is processed in accordance with our
                Privacy Policy.
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                De-identified (anonymous) data may be used for research, and
                analytics.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9  mb-7">
            <strong>6.Service Modifications</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <div className="flex items-center gap-4">
                {" "}
                <div className="w-2 h-2 bg-black rounded-full"></div>
                We may add, modify, or discontinue features at any time without
                prior notice.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9  mb-7">
            <strong>7. Limitation of Liability</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <div className="flex items-center gap-4">
                {" "}
                <div className="w-2 h-2 bg-black rounded-full"></div>
                MEDIVISTA is not liable for any indirect, incidental, or
                resulting using of the platform.
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Our maximum liability is limited to the amount paid (if any) by
                you accessing the platform.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9  mb-7">
            <strong>8. Governing Law</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <div className="flex items-center gap-4">
                {" "}
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              These Terms are governed by the laws of the Federal Republic of
              Nigeria.
            </div>
          </div>

          <div className="flex flex-col gap-9  mb-7">
            <strong>9. Medical Disclaimer</strong>
            <div className="text-[19px] flex flex-col gap-3">
              <div className="flex items-center gap-4">
                {" "}
                For any inquiries about these Terms, please contact: Email:
                legal@medivista.health Phone: +234-XXX-XXX-XXXX
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsCondition;
