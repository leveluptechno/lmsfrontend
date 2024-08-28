import React from "react";

import PreMedicalConsultancy from "../assets/images/PreMedicalConsultancy.jpeg";
import MedicalApplication from "../assets/images/MedicalApplication.jpeg";
import CareerCounseling from "../assets/images/CareerCounseling.jpeg";
import { Link } from "react-router-dom";
function Servies1() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-12 px-6 md:py-20 md:px-10 text-center  font-bold ">
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
                {/* <Link to={course.link}>
                  <p class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group hover:scale-110 border border-black">
                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#12858fe6] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Learn More
                    </span>
                  </p>
                </Link> */}
                <div className="flex">
                  {/* <Link to={course.link}>
                    <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 px-6 sm:px-8 md:px-10 lg:px-12 rounded-full font-semibold hover:bg-pink-600 transition duration-300 text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-auto">
                      Show Details
                    </button>
                  </Link> */}
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
      {/* <Link to={"/userDashbord"}>
        <button>UserDashbord</button>
      </Link> */}
    </>
  );
}

export default Servies1;
