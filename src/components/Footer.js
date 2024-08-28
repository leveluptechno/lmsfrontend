import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#2c3e50] to-[#34495e] font-serif mt-[30px] w-full flex flex-col gap-[30px] p-5 rounded-tr-[50px] rounded-tl-[50px]">
      <div className="flex flex-col md:flex-row gap-5 justify-around p-[30px]">
        <div className="flex flex-col items-center text-white">
          <img src={logo} className="w-24 h-24" alt="logo" />
          <h1 className="text-[28px] font-bold">LMS</h1>
        </div>

        <div className="text-white flex flex-col md:mt-4 ">
          <h1 className="text-[22px] font-semibold">Quick Links</h1>
          <div className="flex flex-col  gap-2">
            <Link to="/" className="hover:text-[#3498db] transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#3498db] transition">
              About
            </Link>
            <Link to="/services" className="hover:text-[#3498db] transition">
              Services
            </Link>
            <Link to="/resources" className="hover:text-[#3498db] transition">
              Resources
            </Link>
            <Link to="/contactform" className="hover:text-[#3498db] transition">
              Contact Us
            </Link>
            <Link to="/login" className="hover:text-[#3498db] transition">
              Login/Signup
            </Link>
          </div>
        </div>

        <div className="flex flex-col text-white md:mt-5 items-start gap-5">
          <div className="flex items-center gap-3">
            <FaLocationDot className="mt-[5px] text-[#3498db]" size={22} />
            <p>SM-1 Mansarovar complex, MP Nagar, Bhopal</p>
          </div>
          <div className="flex items-center gap-3">
            <MdEmail className="mt-[5px] text-[#3498db]" size={22} />
            <p>contactleveluptechnologies@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="mt-[5px] text-[#3498db]" size={22} />
            <p>+91 7894561230</p>
          </div>
        </div>
      </div>

      <div className="flex text-white flex-wrap justify-center items-center gap-3">
        <p>&copy; {new Date().getFullYear()} LMS. All rights reserved.</p>
        <p className="flex flex-wrap justify-center">
          Designed and Developed by{" "}
          <strong className="text-[#3498db] ml-1">
            LevelTechUp Technologies Pvt Ltd.
          </strong>
        </p>
        <p>
          <a href="/terms" className="hover:text-[#3498db] transition">
            Terms of Service
          </a>{" "}
          |
          <a href="/privacy" className="hover:text-[#3498db] transition">
            {" "}
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
