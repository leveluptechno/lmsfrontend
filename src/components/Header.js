import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [threeDotDropdownOpen, setThreeDotDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [servicesDropdownOpenThreeDot, setServicesDropdownOpenThreeDot] =
    useState(false);

  const toggleThreeDotDropdown = () => {
    setThreeDotDropdownOpen(!threeDotDropdownOpen);
  };

  const toggleServicesDropdownThreeDot = () => {
    setServicesDropdownOpenThreeDot(!servicesDropdownOpenThreeDot);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#3498db] to-[#2c3e50] flex justify-between items-center relative h-[150px] drop-shadow-lg">
        <Link to="/" className="flex justify-center items-center text-white ">
          <img
            src={logo}
            className="w-17 h-17 md:w-28 md:h-28 mr-2"
            alt="logo"
          />
          <h1 className="text-3xl md:text-4xl font-serif font-bold">LMS</h1>
        </Link>
        {/* Three-dot Dropdown for Mobile */}
        <div className="flex md:hidden absolute top-[54px] right-5">
          <div onClick={toggleThreeDotDropdown} className="cursor-pointer">
            <FiAlignRight size={32} color="#ffffff" />
          </div>
          {/* Dropdown menu */}
          <div
            className={`bg-white text-black font-serif w-[300px] absolute rounded-bl-lg justify-start p-5 shadow-lg  right-[-20px] top-[77px] z-10 ${
              threeDotDropdownOpen ? "flex flex-col" : "hidden"
            }`}
          >
            <Link
              to="/"
              className="hover:bg-white hover:text-black p-2 rounded mx-3 font-sans font-bold"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:bg-white  hover:text-black  p-2 rounded mx-3 font-sans font-bold"
            >
              About
            </Link>
            <Link
              onClick={toggleServicesDropdownThreeDot}
              className="hover:bg-gray-200 p-2 rounded flex items-center mx-3 font-sans font-bold"
            >
              Service <IoMdArrowDropdown />
            </Link>
            <Link
              to="/service1"
              className={` px-4 py-2 hover:bg-gray-200 ${
                servicesDropdownOpenThreeDot ? "block" : "hidden"
              } `}
            >
              UG Medical Consultancy
            </Link>
            <Link
              to="/service2"
              className={` px-4 py-2 hover:bg-gray-200 ${
                servicesDropdownOpenThreeDot ? "block" : "hidden"
              }`}
            >
              PG Medical Consultancy
            </Link>
            <Link
              to="/psychometrictest"
              className="hover:bg-blue-600  hover:text-black  p-2 rounded mx-3 font-sans font-bold"
            >
              Psychometric Test
            </Link>
            <Link
              to="/contactform"
              className="hover:bg-blue-600  hover:text-black  p-2 rounded mx-3 font-sans font-bold"
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              className="hover:bg-blue-600  hover:text-black  p-2 rounded mx-3 font-sans font-bold"
            >
              Login/Signup
            </Link>
          </div>
        </div>
        {/* Main navigation for Desktop */}
        <div className="hidden md:flex justify-end lg:justify-around font-sans items-center gap-3 flex-wrap text-white relative text-[24px] hover:m-2 hover:p-3 p-3 m-2">
          <Link
            to="/"
            className="hover:bg-white rounded-xl hover:text-black	transition duration-300 py-2 px-2 font-sans"
          >
            <span className="underline-animation">Home</span>
          </Link>
          <Link
            to="/about"
            className="hover:bg-white rounded-xl  hover:text-black transition duration-300  py-2 px-2 font-sans"
          >
            <span className="underline-animation">About</span>
          </Link>
          {/* Services dropdown */}
          <div className="relative group">
            <div
              onClick={toggleServicesDropdown}
              className="hover:bg-white rounded-xl hover:text-black transition duration-300 py-2 px-2 font-sans flex justify-center items-center cursor-pointer"
            >
              <span className="underline-animation">Services</span>
              <IoMdArrowDropdown />
              <div
                className={`absolute bg-white top-[100px] left-[9.5px] lg:top-[77px] lg:left-0 text-black rounded shadow-lg mt-2 ${
                  servicesDropdownOpen ? "block" : "hidden"
                } w-[340px] `}
              >
                <Link
                  to="/service1"
                  className="block px-4 py-2 hover:bg-gray-200  transition-all font-sans"
                >
                  UG Medical Consultancy
                </Link>
                <Link
                  to="/service2"
                  className="block px-4 py-2 hover:bg-gray-200 transition-all font-sans"
                >
                  PG Medical Consultancy
                </Link>
              </div>
            </div>
          </div>
          <Link
            to="/psychometrictest"
            className="hover:bg-white rounded-xl  hover:text-black transition duration-300 py-3 px-3 font-sans"
          >
            <span className="underline-animation">Psychometric Test</span>
          </Link>
          <Link
            to="/contactform"
            className="hover:bg-white rounded-xl hover:text-black transition duration-300 py-3 px-3 font-sans"
          >
            <span className="underline-animation">Contact Us</span>
          </Link>
          <button
            onClick={toggleSidebar}
            className="hover:bg-white rounded-xl hover:text-black transition duration-300 py-3 px-3 font-sans "
          >
            <span className="underline-animation">Login/Signup</span>
          </button>
        </div>
      </div>
      {/* Sidebar for Login/Signup */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        >
          <div className="fixed right-0 top-0 w-64 h-full bg-[#F9FAFB] shadow-lg p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold hover:underline text-[#343A40] text-mono ">
                Login/Signup
              </h2>
              <button onClick={toggleSidebar} className="text-xl">
                &times;
              </button>
            </div>
            <div className="flex flex-col space-y-3">
              <Link
                to="/AdminLogin"
                className="block px-4 py-2 text-white text-semibold bg-gradient-to-r from-[#3498db] to-[#2c3e50] shadow-lg text-[18px] text-mono rounded-lg"
              >
                Admin
              </Link>
              <Link
                to="/UserLoginPage"
                className="block px-4 py-2 text-white text-semibold bg-gradient-to-r from-[#3498db] to-[#2c3e50] shadow-lg text-[18px] text-mono rounded-lg"
              >
                User
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
