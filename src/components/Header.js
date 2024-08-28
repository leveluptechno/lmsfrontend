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
      <div className="w-full rounded-lg bg-gradient-to-r from-[#3498db] to-[#2c3e50] h-[130px] shadow-lg flex justify-between items-center p-5 relative z-20 drop-shadow-xl">
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
            className={`bg-white text-[#2c3e50] font-serif w-[300px] absolute rounded-bl-lg justify-start p-5 shadow-lg  right-[-20px] top-[77px] z-10 ${
              threeDotDropdownOpen ? "flex flex-col" : "hidden"
            }`}
          >
            <Link to="/" className="p-2 rounded hover:bg-[#ecf0f1]">
              <span>Home</span>
            </Link>
            <Link to="/about" className="hover:bg-[#ecf0f1] p-2 rounded">
              About
            </Link>
            <Link
              onClick={toggleServicesDropdownThreeDot}
              className="p-2 rounded flex items-center hover:bg-[#ecf0f1]"
            >
              Service <IoMdArrowDropdown />
            </Link>
            <Link
              to="/service1"
              className={`px-4 py-2 hover:bg-[#ecf0f1] ${
                servicesDropdownOpenThreeDot ? "block" : "hidden"
              } `}
            >
              UG Medical Consultancy
            </Link>
            <Link
              to="/service2"
              className={`px-4 py-2 hover:bg-[#ecf0f1] ${
                servicesDropdownOpenThreeDot ? "block" : "hidden"
              }`}
            >
              PG Medical Consultancy
            </Link>
            <Link
              to="/psychometrictest"
              className="p-2 rounded hover:bg-[#ecf0f1]"
            >
              Psychometric Test
            </Link>
            <Link to="/contactform" className="p-2 rounded hover:bg-[#ecf0f1]">
              Contact Us
            </Link>
            <Link to="/login" className="p-2 rounded hover:bg-[#ecf0f1]">
              Login/Signup
            </Link>
          </div>
        </div>
        {/* Main navigation for Desktop */}
        <div className="hidden md:flex justify-end lg:justify-around font-sans text-5xl items-center flex-wrap text-white relative text-[25px]">
          <Link
            to="/"
            className="hover:bg-[#34495e] p-4 rounded-lg hover:font-semibold transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:bg-[#34495e] p-4 rounded-lg hover:font-semibold transition duration-300"
          >
            About
          </Link>
          {/* Services dropdown */}
          <div className="relative group hover:bg-[#34495e] p-4 rounded-lg transition duration-300">
            <div
              onClick={toggleServicesDropdown}
              className="flex justify-center items-center cursor-pointer"
            >
              <span className="hover:font-semibold">Services</span>
              <IoMdArrowDropdown />
              <div
                className={`absolute bg-white top-[100px] left-[9.5px] lg:top-[77px] lg:left-0 text-[#2c3e50] rounded shadow-lg mt-2 ${
                  servicesDropdownOpen ? "block" : "hidden"
                } w-[340px]`}
              >
                <Link
                  to="/service1"
                  className="block px-4 py-2 hover:bg-[#ecf0f1]"
                >
                  UG Medical Consultancy
                </Link>
                <Link
                  to="/service2"
                  className="block px-4 py-2 hover:bg-[#ecf0f1]"
                >
                  PG Medical Consultancy
                </Link>
              </div>
            </div>
          </div>
          <Link
            to="/psychometrictest"
            className="hover:bg-[#34495e] p-4 rounded-lg hover:font-semibold transition duration-300"
          >
            Psychometric Test
          </Link>
          <Link
            to="/contactform"
            className="hover:bg-[#34495e] p-4 rounded-lg hover:font-semibold transition duration-300"
          >
            Contact Us
          </Link>
          <button
            onClick={toggleSidebar}
            className="hover:bg-[#34495e] p-4 rounded-lg hover:font-semibold transition duration-300"
          >
            Login/Signup
          </button>
        </div>
      </div>

      {/* Sidebar for Login/Signup */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
          <div className="fixed right-0 top-0 w-64 h-full bg-white shadow-lg p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#2c3e50]">Login/Signup</h2>
              <button
                onClick={toggleSidebar}
                className="text-xl text-[#2c3e50]"
              >
                &times;
              </button>
            </div>
            <Link
              to="/login"
              className="block px-4 py-2 hover:bg-[#ecf0f1] text-[#2c3e50]"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-2 hover:bg-[#ecf0f1] text-[#2c3e50]"
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
