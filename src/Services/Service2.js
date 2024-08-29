import React from "react";
import imagecourse1 from "../assets/images/applicationassistance.png";
import imagecourse2 from "../assets/images/traininganddev.png";
import imagecourse3 from "../assets/images/careercounseling.png";
import { Link } from "react-router-dom";

function Service2() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#3498db] to-[#2c3e50] text-white py-12 px-6 md:py-20 md:px-10 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4 font-serif">
          PG Medical Consultancy
        </h1>
        <p className="text-base md:text-2xl lg:text-4xl mb-6 md:mb-8 font-medium font-serif">
          That over facility provides
        </p>
      </section>
      <br />
      <section>
        <div className="max-w-7xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-80 p-6 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row transform transition-transform duration-300 hover:scale-105">
            <div className="w-full md:w-1/2 p-4">
              <img
                src={imagecourse3}
                alt="Placeholder"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/3 p-6 flex flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                Career Counseling
              </h2>
              <p className="text-gray-700 text-base md:text-lg lg:text-xl flex-1">
                Guidance on career paths in medicine, including advice on
                choosing specialties and planning career trajectories.
              </p>
              <Link to={"/careercounseling"}>
                <a
                  href="#_"
                  class="relative inline-block px-5 py-2.5 w-40 rounded border-2 border-blue-500 text-blue-500 font-medium group overflow-hidden transition-all duration-200 ease-out"
                >
                  <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-gradient-to-r from-blue-600 to-teal-500 group-hover:h-full opacity-90"></span>
                  <span class="relative group-hover:text-white">
                    Show Details
                  </span>
                </a>
              </Link>
            </div>
          </div>

          <div className="bg-gray-80 p-6 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row transform transition-transform duration-300 hover:scale-105">
            <div className="w-full md:w-1/2 p-4">
              <img
                src={imagecourse1}
                alt="Placeholder"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/3 p-6 flex flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                Application Assistance
              </h2>
              <p className="text-gray-700 text-base md:text-lg lg:text-xl flex-1">
                Help with the application process for postgraduate medical
                programs, including writing personal statements and preparing
                for interviews.
              </p>
              <Link to={"/applicationassistance"}>
                <a
                  href="#_"
                  class="relative inline-block px-5 py-2.5 w-40 rounded border-2 border-blue-500 text-blue-500 font-medium group overflow-hidden transition-all duration-200 ease-out"
                >
                  <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-gradient-to-r from-blue-600 to-teal-500 group-hover:h-full opacity-90"></span>
                  <span class="relative group-hover:text-white">
                    Show Details
                  </span>
                </a>
              </Link>
            </div>
          </div>

          <div className="bg-gray-80 p-6 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row transform transition-transform duration-300 hover:scale-105">
            <div className="w-full md:w-1/2 p-4">
              <img
                src={imagecourse2}
                alt="Placeholder"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/3 p-6 flex flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                Training and Development
              </h2>
              <p className="text-gray-700 text-base md:text-lg lg:text-xl flex-1">
                Support with professional development, such as organizing
                workshops, seminars, and continuing education opportunities.
              </p>
              <Link to={"/traininganddev"}>
                <a
                  href="#_"
                  class="relative inline-block px-5 py-2.5 w-40 rounded border-2 border-blue-500 text-blue-500 font-medium group overflow-hidden transition-all duration-200 ease-out"
                >
                  <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-gradient-to-r from-blue-600 to-teal-500 group-hover:h-full opacity-90"></span>
                  <span class="relative group-hover:text-white">
                    Show Details
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service2;
