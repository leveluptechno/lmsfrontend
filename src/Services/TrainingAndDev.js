import React from "react";
import { Link } from "react-router-dom";

function TrainingAndDev() {
  return (
    <>
      <style>
        {`
        .gradient-hr {
          position: relative;
          border: 0;
          height: 3px;
        }
        .gradient-hr::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to right, #4caf50, #2196f3);
        }
        .underline-animation {
          position: relative;
        }
        .underline-animation::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #2196f3;
          transform: scaleX(0);
          transition: transform 0.3s ease-in-out;
        }
        .underline-animation:hover::after {
          transform: scaleX(1);
        }
        `}
      </style>
      <div className="bg-[#F2F2F2] min-h-screen">
        <header className="bg-gradient-to-r from-[#3498db] to-[#2c3e50] text-white py-16 px-6 md:py-24 md:px-10 text-center font-serif">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 font-serif leading-tight">
            PG Medical Training and Development
          </h1>
          <p className="text-base md:text-2xl lg:text-4xl mb-6 md:mb-8 font-medium font-serif">
            Enhance your medical expertise with our specialized training
            programs
          </p>
        </header>

        <div className="bg-gray-100 py-4 px-4 text-gray-700 text-lg md:text-xl shadow-md">
          <div className="max-w-6xl lg:mx-1 mx-auto flex items-center space-x-2">
            <Link
              className="underline-animation hover:text-blue-600 transition duration-300"
              to={"/"}
            >
              Home
            </Link>
            <span className="text-gray-600">&gt;</span>
            <Link
              className="underline-animation hover:text-blue-600 transition duration-300"
              to={"/Service2"}
            >
              PG Medical Consultancy
            </Link>
            <span className="text-gray-600">&gt;</span>
            <span className="text-gray-800 font-medium">
              Training and Development
            </span>
          </div>
        </div>
        <br />
        <section className="mb-12 max-w-8xl mx-auto flex justify-center py-4 bg-slate-100">
          <div className="flex flex-col gap-8 max-w-8xl">
            <div className="p-6 bg-gray-50 py-8 shadow-xl rounded-2xl mt-5 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-400">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black-500">
                PG Medical Training and Development Programs
              </h2>
              <hr className="gradient-hr mb-4" />
              <p className="text-lg mb-4 text-gray-600 leading-relaxed font-medium">
                Our PG Medical Training and Development programs are designed to
                enhance your medical skills, knowledge, and expertise. We offer
                a range of specialized courses and workshops to support your
                continuous professional development.
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2 font-medium">
                <li>Clinical Skills Enhancement</li>
                <li>Medical Research Methodology</li>
                <li>Advanced Diagnostic Techniques</li>
                <li>Medical Ethics and Communication</li>
                <li>Leadership in Healthcare</li>
              </ul>
            </div>

            <section className="p-6 bg-gray-50 py-8 shadow-xl rounded-2xl mt-5 border border-gray-200 transition-all duration-300 hover:shadow-2xl">
              <div className="mb-6">
                <h4 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
                  Training Process: Our Approach to Medical Education
                </h4>
                <hr className="gradient-hr mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="border-r border-gray-300 pr-6  last:border-r-0">
                    <div className="font-semibold text-blue-600 text-xl">
                      Step 1
                    </div>
                    <p className="text-gray-600 mt-1 text-base font-medium">
                      Needs Assessment: Identifying your specific learning
                      requirements
                    </p>
                  </div>
                  <div className="border-r border-gray-300 pr-6  last:border-r-0">
                    <div className="font-semibold text-blue-600 text-xl">
                      Step 2
                    </div>
                    <p className="text-gray-600 mt-1 text-base font-medium">
                      Customized Curriculum: Developing tailored training
                      programs
                    </p>
                  </div>
                  <div className="border-r border-gray-300 pr-6 last:border-r-0">
                    <div className="font-semibold text-blue-600 text-xl">
                      Step 3
                    </div>
                    <p className="text-gray-600 mt-1 text-base font-medium">
                      Interactive Learning: Engaging in hands-on training
                      sessions
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-600 text-xl">
                      Step 4
                    </div>
                    <p className="text-gray-600 mt-1 text-base font-medium">
                      Evaluation and Feedback: Assessing progress and providing
                      continuous support
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="p-6 bg-gray-50 py-8 shadow-xl rounded-2xl mt-5 border border-gray-200 transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                Additional Training Resources
              </h2>
              <hr className="gradient-hr mb-4" />
              <p className="text-lg mb-4 font-semibold text-gray-600">
                We offer a variety of supplementary resources to support your
                medical training and development.
              </p>
              <ul className="list-disc pl-6 font-medium text-lg text-gray-600 space-y-2">
                <li>Online Learning Modules</li>
                <li>Medical Simulation Labs</li>
                <li>Peer-to-Peer Learning Networks</li>
                <li>Mentorship Programs</li>
                <li>Access to Medical Journals and Publications</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="p-6 bg-white shadow-xl rounded-2xl mt-10 border border-gray-200">
          <div className="mt-4 mb-4">
            <h4 className="text-2xl md:text-3xl font-bold mb-2 text-[#343A40]">
              Training Packages: Tailored Medical Education Options
            </h4>
            <hr className="gradient-hr mb-4" />
            <p className="text-[#6C757D] font-medium">
              *Our training packages are designed to cater to various
              specializations and learning needs in postgraduate medical
              education.
            </p>
            <div className="mt-6">
              <div className="bg-gray-100 shadow-lg rounded-lg p-6 mb-6 border border-gray-300 h-full transition-all duration-300 hover:shadow-2xl">
                <h5 className="text-2xl font-bold text-[#343A40] mb-2">
                  Foundation Package
                </h5>
                <p className="text-gray-600 mb-4 font-semibold">
                  Essential training for PG medical students and early career
                  professionals.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 font-medium">
                  <li>Core Clinical Skills Workshop</li>
                  <li>Basic Research Methodology Course</li>
                  <li>Medical Ethics Seminar</li>
                </ul>
                <p className="font-bold text-2xl text-blue-600">$800</p>
              </div>
              <div className="bg-gray-100 shadow-lg rounded-lg p-6 mb-6 border border-gray-300 h-full transition-all duration-300 hover:shadow-2xl">
                <h5 className="text-2xl font-bold text-[#343A40] mb-2">
                  Advanced Clinical Package
                </h5>
                <p className="text-gray-600 mb-4 font-semibold">
                  Specialized training for experienced medical professionals.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 font-medium">
                  <li>Advanced Diagnostic Techniques Course</li>
                  <li>Subspecialty Clinical Skills Training</li>
                  <li>Medical Leadership Workshop</li>
                </ul>
                <p className="font-bold text-2xl text-blue-600">$1500</p>
              </div>
              <div className="bg-gray-100 shadow-lg rounded-lg p-6 border border-gray-300 h-full transition-all duration-300 hover:shadow-2xl">
                <h5 className="text-2xl font-bold text-[#343A40] mb-2">
                  Comprehensive Development Program
                </h5>
                <p className="text-gray-600 mb-4 font-semibold">
                  Holistic training covering clinical, research, and
                  professional development aspects.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 font-medium">
                  <li>Intensive Clinical Skills Bootcamp</li>
                  <li>Advanced Research and Publication Workshop</li>
                  <li>Medical Communication and Presentation Skills</li>
                  <li>Personalized Mentorship Program</li>
                </ul>
                <p className="font-bold text-2xl text-blue-600">$2500</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 text-center bg-gray-100 mt-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Additional Information
            </h2>
            <p className="text-xl mb-8 text-gray-600 leading-relaxed">
              Our PG Medical Training and Development programs are designed to
              provide comprehensive, up-to-date, and practical education to
              enhance your medical career. We offer flexible learning options,
              including in-person workshops and online modules. For more
              information on our training programs and how we can support your
              professional development, please contact us.
            </p>
            <Link
              to="/contactform"
              className="inline-block px-8 py-4 bg-green-500 text-white rounded-lg text-xl font-medium hover:bg-green-600 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default TrainingAndDev;
