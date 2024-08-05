import React from "react";
import Engineering from "../assets/images/Engineering.jpg";
import { Link } from "react-router-dom";

const ProcessSection = () => (
  <section className="p-6 bg-white py-8 mx-4 md:mx-8 shadow-xl rounded-2xl mt-10 border border-gray-200">
    <div className="mb-2">
      <h4 className="text-2xl md:text-3xl text-[#343A40] font-bold mb-2">
        Process: Step-by-step Guide to the Application Process
      </h4>
      <hr className="gradient-hr mb-8 mt-3" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border-r border-gray-300 pr-6 text-gray-700 last:border-r-0">
          <div className="font-semibold text-[#343A40] text-xl">Step 1</div>
          <p className="text-[#6C757D] mt-1 text-base font-medium">
            Initial Consultation
          </p>
        </div>
        <div className="border-r border-gray-300 pr-6 text-gray-700 last:border-r-0">
          <div className="font-semibold text-[#343A40] text-xl">Step 2</div>
          <p className="text-[#6C757D] mt-1 text-base font-medium">
            Document Review
          </p>
        </div>
        <div className="border-r border-gray-300 pr-6 text-gray-700 last:border-r-0">
          <div className="font-semibold text-[#343A40] text-xl">Step 3</div>
          <p className="text-[#6C757D] mt-1 text-base font-medium">
            Mock Interviews
          </p>
        </div>
        <div className="text-gray-700">
          <div className="font-semibold text-[#343A40] text-xl">Step 4</div>
          <p className="text-[#6C757D] mt-1 text-base font-medium">
            Final Application Submission
          </p>
        </div>
      </div>
    </div>
  </section>
);

const PackagesSection = () => (
  <section className="p-6 bg-white py-8 mx-4 md:mx-8 shadow-xl rounded-2xl mt-10 border border-gray-200">
    <div className="mt-4">
      <h4 className="text-2xl md:text-3xl font-bold mb-2 text-[#343A40]">
        Packages: Different Application Packages and Pricing
      </h4>
      <hr className="gradient-hr mb-6 mt-4" />
      <div className="flex flex-col gap-8">
        <div className="bg-gray-100 shadow-lg rounded-lg p-6 border border-gray-300">
          <p className="font-semibold text-lg mb-2 text-[#343A40]">
            Basic Package:
          </p>
          <p className="text-[#6C757D] font-medium">
            Includes initial consultation and document review.
          </p>
          <p className="font-semibold text-lg text-[#343A40] mt-2">
            Price: $500
          </p>
        </div>
        <div className="bg-gray-100 shadow-lg rounded-lg p-6 border border-gray-300">
          <p className="font-semibold text-lg mb-2 text-[#343A40]">
            Premium Package:
          </p>
          <p className="text-[#6C757D] font-medium">
            Includes basic package services plus mock interviews.
          </p>
          <p className="font-semibold text-lg text-[#343A40] mt-2">
            Price: $1000
          </p>
        </div>
        <div className="bg-gray-100 shadow-lg rounded-lg p-6 border border-gray-300">
          <p className="font-semibold text-lg mb-2 text-[#343A40]">
            Ultimate Package:
          </p>
          <p className="text-[#6C757D] font-medium">
            Includes premium package services plus application strategy and
            final submission assistance.
          </p>
          <p className="font-semibold text-lg text-[#343A40] mt-2">
            Price: $1500
          </p>
        </div>
      </div>
      <p className="text-[#6C757D] font-medium mt-6">
        *Packages can be customized to suit individual needs.
      </p>
    </div>
  </section>
);

function CourseDetails2() {
  return (
    <>
      <br />
      {/* Hero Section */}
      <section className="relative text-white py-12 px-6 md:py-20 md:px-10 text-center font-bold">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${Engineering})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
            WebkitFilter: "blur(6px)",
            zIndex: -1,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4 outlined-text">
            Medical School Application Assistance
          </h1>
        </div>
        <style jsx>{`
          .outlined-text {
            text-shadow: -5px -5px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
              1px 1px 0 #000;
          }
        `}</style>
      </section>

      <div className="bg-gray-200">
        <br />
        {/* Breadcrumb Section */}
        <section className="p-6 bg-white py-6 mx-4 md:mx-8 shadow-xl rounded-2xl border border-gray-200">
          <div className="mb-4">
            <ul className="flex flex-wrap space-x-4 md:space-x-11 text-xl md:text-2xl font-semibold text-[#343A40]">
              <Link
                to="/"
                className="transform hover:scale-105 underline hover:shadow-xl"
              >
                Home
              </Link>
              <p>
                <strong>/</strong>
              </p>
              <Link
                to="/service1"
                className="transform hover:scale-105 underline px-4 md:px-2 hover:shadow-xl"
              >
                Medical School Application Assistance
              </Link>
              <p>
                <strong>/</strong>
              </p>
              <li className="transform hover:scale-105 underline hover:shadow-xl">
                Application Assistance
              </li>
            </ul>
          </div>
        </section>

        {/* Services and Specialties Section */}
        <section className="p-6 bg-white py-8 mx-4 md:mx-8 shadow-xl rounded-2xl mt-10 border border-gray-200">
          <style>
            {`.gradient-hr {
              position: relative;
              border: 0;
              height: 4px;
            }
            .gradient-hr::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: linear-gradient(to right, #4caf50, #2196f3);
            }`}
          </style>
          <div className="mb-6">
            <h4 className="text-2xl md:text-3xl font-bold mb-2 text-[#343A40]">
              Application Assistance
            </h4>
            <hr className="gradient-hr mb-6 mt-4" />
            <div className="flex flex-wrap gap-8">
              <div className="flex-1">
                <p className="font-semibold text-lg mb-2 text-[#343A40]">
                  Services Offered*:
                </p>
                <ul className="list-disc list-inside text-[#6C757D] font-medium">
                  <li>Personal Statement Review</li>
                  <li>Resume Building</li>
                  <li>Mock Interviews</li>
                  <li>Application Strategy</li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="font-semibold mb-2 text-lg text-[#343A40]">
                  Specialties Covered*:
                </p>
                <ul className="list-disc list-inside text-[#6C757D] font-medium">
                  <li>Medicine</li>
                  <li>Dentistry</li>
                  <li>Pharmacy</li>
                  <li>Nursing</li>
                </ul>
              </div>
            </div>
            <hr className="gradient-hr mb-4 mt-5" />
          </div>
        </section>

        <ProcessSection />
        <PackagesSection />
      </div>
    </>
  );
}

export default CourseDetails2;
