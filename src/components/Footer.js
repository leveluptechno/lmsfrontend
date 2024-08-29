import React from "react";
import { Link } from "react-router-dom";
import {
  FaLocationDot,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#2c3e50] to-[#34495e] font-sans mt-[30px] w-full p-5 rounded-tr-[50px] rounded-tl-[50px] text-white">
      <div className="flex flex-col md:flex-row gap-10 justify-between p-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <img src={logo} className="w-24 h-24" alt="LMS Logo" />
          <h1 className="text-[28px] font-bold">LMS</h1>
        </div>

        {/* Links and Courses Section */}
        <div className="flex flex-col gap-10 text-left">
          <div className="flex gap-20">
            {/* Links */}
            <div className="flex flex-col gap-3">
              <h2 className="mb-6 text-[28px]">Links</h2>
              <Link to="/" className="hover:text-gray-300 transition">
                Home
              </Link>
              <Link to="/about" className="hover:text-gray-300 transition">
                About
              </Link>
              <Link to="/services" className="hover:text-gray-300 transition">
                Services
              </Link>
              <Link
                to="/contactform"
                className="hover:text-gray-300 transition"
              >
                Contact Us
              </Link>
              <Link to="/resource" className="hover:text-gray-300 transition">
                Resource
              </Link>
              <Link to="/login" className="hover:text-gray-300 transition">
                Login
              </Link>
              <Link to="/signup" className="hover:text-gray-300 transition">
                Signup
              </Link>
            </div>

            {/* Courses */}
            <div className="flex flex-col gap-3">
              <h2 className="mb-6 text-[28px]">Courses</h2>
              <Link to="/service1" className="hover:text-gray-300 transition">
                UG Medical Consultancy
              </Link>
              <Link to="/service2" className="hover:text-gray-300 transition">
                PG Medical Consultancy
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col gap-5">
          <h2 className="mb-6 text-[28px]">Contact Info Section</h2>
          {[
            {
              icon: FaLocationDot,
              text: "SM-1 Mansarovar complex, MP Nagar, Bhopal",
            },
            { icon: MdEmail, text: "contactleveluptechnologies@gmail.com" },
            { icon: FaPhone, text: "+91 7894561230" },
          ].map(({ icon: Icon, text }, index) => (
            <div key={index} className="flex items-center gap-3 -mt-2">
              <Icon className="text-[#3498db]" size={21} />
              <p>{text}</p>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-[28px]">Subscribe to our Newsletter</h2>
          <form className="flex flex-col md:flex-row gap-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md w-full text-black"
            />
            <Link
              to="/courses"
              className="bg-white text-green-600 py-3 px-8 rounded-md font-semibold hover:bg-green-200 transition duration-300 animate-fadeInUp"
            >
              Subscribe
            </Link>
          </form>
        </div>
      </div>

      {/* Social Links and Footer Bottom Section */}
      <div className="flex flex-col items-center mt-10">
        <div className="flex gap-4">
          {[
            { icon: FaFacebook, url: "https://facebook.com" },
            { icon: FaTwitter, url: "https://twitter.com" },
            { icon: FaInstagram, url: "https://instagram.com" },
            { icon: FaLinkedin, url: "https://linkedin.com" },
          ].map(({ icon: Icon, url }, index) => (
            <Link
              key={index}
              to={url}
              className="text-[#3498db] hover:text-gray-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={24} />
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 mt-5 text-center">
          <p>&copy; {currentYear} LMS. All rights reserved.</p>
          <p className="flex flex-wrap justify-center">
            Designed and Developed by{" "}
            <strong className="text-[#3498db] ml-1">
              LevelTechUp Technologies Pvt Ltd.
            </strong>
          </p>
          <p className="">
            <Link to="/terms" className="hover:underline transition">
              Terms of Service
            </Link>{" "}
            |{" "}
            <Link to="/privacy" className="hover:underline transition">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
