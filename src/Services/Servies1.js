import React from "react";

import PreMedicalConsultancy from "../assets/images/PreMedicalConsultancy.jpeg";
import MedicalApplication from "../assets/images/MedicalApplication.jpeg";
import CareerCounseling from "../assets/images/CareerCounseling.jpeg";
import { Link } from "react-router-dom";
function Servies1() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3498db] to-[#2c3e50] text-white py-12 px-6 md:py-20 md:px-10 text-center font-bold">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4 outlined-text">
          Undergraduate Medical Consultancy
        </h1>
        <p className="text-base md:text-2xl lg:text-4xl mb-6 md:mb-8 font-medium outlined-text">
          Your path to a successful medical career
        </p>

        <style jsx>{`
          .outlined-text {
            text-shadow: -2px -2px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
              1px 1px 0 #000;
          }
        `}</style>
      </section>
      <section className="py-12 px-6 md:py-16 md:px-10 bg-white w-full">
        <div className="flex flex-col gap-8 bg-gray-50 ">
          {[
            {
              img: PreMedicalConsultancy,
              title: "Pre-Medical Consultancy",
              desc: "Get expert guidance on preparing for medical entrance exams, selecting the right courses, and making informed decisions about your medical education path.",
              link: "/service1/course-details/1",
            },
            {
              img: MedicalApplication,
              title: "Medical School Application Assistance",
              desc: "Receive personalized support with your medical school applications, including essay writing, interview preparation, and application strategy.",
              link: "/service1/course-details/2",
            },
            {
              img: CareerCounseling,
              title: "Career Counseling in Medicine",
              desc: "Explore various career options within the medical field, and get advice on choosing a specialty that aligns with your skills and interests.",
              link: "/service1/course-details/3",
            },
          ].map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 flex flex-col md:flex-row transition duration-300 w-full border border-gray-200"
            >
              <div className="w-full md:w-1/3">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-48 md:h-64 lg:h-72 object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between w-full md:w-2/3  ">
                <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#343A40]">
                  {course.title}
                </h3>
                <p className=" mb-2 text-sm sm:text-base lg:text-xl text-[#6C757D] font-medium">
                  {course.desc}
                </p>

                <div className="flex">
                  <Link
                    to={course.link}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-400 to-blue-500 group-hover:from-teal-400 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 transition-all duration-300"
                  >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Show Details
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Servies1;
