// src/components/CourseDetails1.js
import React from "react";
import Engineering from "../assets/images/Engineering.jpg";
import { Link } from "react-router-dom";

const ProcessSection = () => (
  <section className="p-6 bg-white py-8 mx-4 md:mx-8 shadow-xl rounded-2xl mt-10 border border-gray-200">
    <div className="mb-2">
      <h4 className="text-2xl md:text-3xl text-[#343A40] font-bold mb-2">
        Process: Step-by-step guide to the consultancy process
      </h4>
      <hr className="gradient-hr mb-8 mt-3" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border-r border-gray-300 pr-6 text-gray-700 last:border-r-0">
          <div className="font-semibold text-[#343A40] text-xl">Step 1</div>
          <p className="text-[#6C757D] mt-1 text-base font-medium">
            Initial Consultation: Understanding your goals and aspirations
          </p>
        </div>
        <div className="border-r border-gray-300 pr-6 text-gray-700 last:border-r-0">
          <div className="font-semibold text-[#343A40] text-xl">Step 2</div>
          <p className="text-[#6C757D] mt-1 text-base font-medium">
            Detailed Guidance: Providing personalized course and college options
          </p>
        </div>
        <div className="border-r border-gray-300 pr-6 text-gray-700 last:border-r-0">
          <div className="font-semibold text-xl text-[#343A40]">Step 3</div>
          <p className="text-[#6C757D] mt-1 text-base font-medium">
            Application Assistance: Helping with the application and
            documentation process
          </p>
        </div>
        <div className="text-gray-700">
          <div className="font-semibold text-[#343A40] text-xl">Step 4</div>
          <p className="text-[#6C757D] mt-1 text-base font-medium">
            Post-Admission Support: Providing continued guidance after securing
            admission
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
        Packages: Different consultancy packages according to the Pre-Medical
        Consultancy
      </h4>
      <hr className="gradient-hr mb-6 mt-4" />
      <p className="text-[#6C757D] font-medium">
        *Packages are designed to meet various needs and budgets
      </p>
      <div className="mt-6">
        <div className="bg-gray-100 shadow-lg rounded-lg p-6 mb-6 border border-gray-300">
          <h5 className="text-xl font-bold text-[#343A40] mb-2">
            Basic Package
          </h5>
          <p className="text-[#6C757D] mb-4 font-semibold">
            Perfect for students seeking general guidance on entrance exams and
            course selection.
          </p>
          <ul className="list-disc list-inside text-[#6C757D] mb-4 font-medium">
            <li>Entrance Exam Preparation Guide</li>
            <li>Course and College Selection Advice</li>
            <li>Basic Application Assistance</li>
          </ul>
          <p className="font-bold text-[#343A40]">$200</p>
        </div>
        <div className="bg-gray-100 shadow-lg rounded-lg p-6 mb-6 border border-gray-300">
          <h5 className="text-xl font-bold text-[#343A40] mb-2">
            Standard Package
          </h5>
          <p className="text-[#6C757D] mb-4 font-semibold">
            For students looking for more detailed support including
            personalized guidance and application help.
          </p>
          <ul className="list-disc list-inside text-[#6C757D] mb-4  font-medium">
            <li>Comprehensive Entrance Exam Preparation</li>
            <li>Personalized Course and College Recommendations</li>
            <li>Full Application Assistance</li>
            <li>Career Counseling Session</li>
          </ul>
          <p className="font-bold text-[#343A40]">$350</p>
        </div>
        <div className="bg-gray-100 shadow-lg rounded-lg p-6 border border-gray-300">
          <h5 className="text-xl font-bold text-[#343A40] mb-2">
            Premium Package
          </h5>
          <p className="text-[#6C757D] mb-4 font-semibold">
            For students seeking extensive support throughout the entire
            consultancy process.
          </p>
          <ul className="list-disc list-inside text-[#6C757D] mb-4 font-medium">
            <li>Intensive Entrance Exam Coaching</li>
            <li>Custom Course and College Planning</li>
            <li>Full Application Support with Document Review</li>
            <li>Personalized Career Counseling and Follow-up</li>
            <li>Post-Admission Support</li>
          </ul>
          <p className="font-bold text-[#343A40]">$500</p>
        </div>
      </div>
    </div>
  </section>
);

function CourseDetails1() {
  return (
    <>
      <br />

      {/* Hero Section */}
      <section className="relative text-white py-12 px-6 md:py-20 md:px-10 text-center font-bold ">
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
            Undergraduate Medical Consultancy
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
                Undergraduate Medical Consultancy
              </Link>
              <p>
                <strong>/</strong>
              </p>
              <li className="transform hover:scale-105 underline  hover:shadow-xl">
                Medical Consultancy
              </li>
            </ul>
          </div>
        </section>

        <section className="p-6 bg-white py-8 mx-4 md:mx-8 shadow-xl rounded-2xl mt-10 border border-gray-200">
          <style>
            {`.gradient-hr {
   position: relative;
   border: 0;
   height: 4px; /* Adjust height as needed */
 }
 .gradient-hr::before {
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: linear-gradient(to right, #4caf50, #2196f3); /* Green to Blue gradient */
 }`}
          </style>
          <div className="mb-6 ">
            <h4 className="text-2xl md:text-3xl font-bold mb-2 text-[#343A40]">
              Pre-Medical Consultancy
            </h4>
            <hr className="gradient-hr mb-6 mt-4" />
            <div className="flex flex-wrap gap-8">
              <div className="flex-1">
                <p className="font-semibold text-lg mb-2 text-[#343A40]">
                  Services Offered*:
                </p>
                <ul className="list-disc list-inside text-[#6C757D] font-medium">
                  <li>Entrance Exam Preparation</li>
                  <li>Course Selection Guidance</li>
                  <li>Application Assistance</li>
                  <li>Career Counseling</li>
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
            {/* <hr className="gradient-hr mb-4 mt-5" /> */}
          </div>
        </section>

        <ProcessSection />
        <PackagesSection />
      </div>
    </>
  );
}

export default CourseDetails1;
