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
      <div className="w-full bg-gradient-to-r from-blue-500 to-teal-400 h-[130px] shadow-lg flex justify-between items-center p-5 relative z-10">
        <Link to="/" className="flex justify-center items-center text-white">
          <img
            src={logo}
            className="w-20 h-20 md:w-28 md:h-28 mr-2"
            alt="logo"
          />
          <h1 className="text-3xl md:text-5xl font-serif font-bold">LMS</h1>
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
            <Link to="/" className="hover:bg-gray-200 p-2 rounded">
              Home
            </Link>
            <Link to="/about" className="hover:bg-gray-200 p-2 rounded">
              About
            </Link>
            <Link
              onClick={toggleServicesDropdownThreeDot}
              className="hover:bg-gray-200 p-2 rounded flex items-center "
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
              className="hover:bg-gray-200 p-2 rounded"
            >
              Psychometric Test
            </Link>
            <Link to="/contactform" className="hover:bg-gray-200 p-2 rounded">
              Contact Us
            </Link>
            <Link to="/login" className="hover:bg-gray-200 p-2 rounded">
              Login/Signup
            </Link>
          </div>
        </div>
        {/* Main navigation for Desktop */}
        <div className="hidden  md:flex justify-end lg:justify-around font-serif items-center gap-3 flex-wrap text-white relative text-[25px]">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          {/* Services dropdown */}
          <div className="relative group">
            <div
              onClick={toggleServicesDropdown}
              className="hover:underline flex justify-center items-center cursor-pointer"
            >
              Services
              <IoMdArrowDropdown />
              <div
                className={`absolute bg-white top-[100px] left-[9.5px]  lg:top-[77px] lg:left-0 text-black rounded shadow-lg mt-2 ${
                  servicesDropdownOpen ? "block" : "hidden"
                } w-[340px]`}
              >
                <Link
                  to="/service1"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  UG Medical Consultancy
                </Link>
                <Link
                  to="/service2"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  PG Medical Consultancy
                </Link>
              </div>
            </div>
          </div>
          <Link to="/psychometrictest" className="hover:underline">
            Psychometric Test
          </Link>
          <Link to="/contactform" className="hover:underline">
            Contact Us
          </Link>
          <button onClick={toggleSidebar} className="hover:underline">
            Login/Signup
          </button>
        </div>
      </div>
      {/* Sidebar for Login/Signup */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
          <div className="fixed right-0 top-0 w-64 h-full bg-white shadow-lg p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Login/Signup</h2>
              <button onClick={toggleSidebar} className="text-xl">
                &times;
              </button>
            </div>
            <Link to="/login" className="block px-4 py-2 hover:bg-gray-200">
              Login
            </Link>
            <Link to="/signup" className="block px-4 py-2 hover:bg-gray-200">
              Signup
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
