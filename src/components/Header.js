import React, { useState } from 'react';
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';
import { FiAlignRight } from "react-icons/fi";

const Header = () => {
  const [threeDotDropdownOpen, setThreeDotDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleThreeDotDropdown = () => {
    setThreeDotDropdownOpen(!threeDotDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className='w-full bg-gradient-to-r from-blue-500 to-teal-400 h-[130px] shadow-lg flex justify-between items-center p-5'>
        <Link to="/"  className='flex justify-center items-center text-white'>
          <img src={logo} className='w-28 h-28 mr-2' alt='logo' />
          <h1 className='text-5xl font-serif font-bold'>LMS</h1>
        </Link>
        <div className='flex md:hidden relative'>
          <div onClick={toggleThreeDotDropdown} className='cursor-pointer'>
            <FiAlignRight size={32} color='#ffffff' />
          </div>
          {threeDotDropdownOpen && (
            <div className='bg-white text-black font-serif w-[300px] absolute flex rounded-bl-lg justify-start p-5 shadow-lg flex-col right-[-20px] top-[54px] h-[300px] z-10'>
              <Link to="/" className='hover:bg-gray-200 p-2 rounded'>Home</Link>
              <Link to="/about" className='hover:bg-gray-200 p-2 rounded'>About</Link>
              <Link to="/psychometric-test" className='hover:bg-gray-200 p-2 rounded'>Psychometric Test</Link>
              <Link to="/contact" className='hover:bg-gray-200 p-2 rounded'>Contact Us</Link>
              <Link to="/login" className='hover:bg-gray-200 p-2 rounded'>Login/Signup</Link>
            </div>
          )}
        </div>
        <div className='hidden md:flex justify-around font-serif items-center gap-3 flex-wrap text-white relative text-[25px]'>
          <Link to="/" className='hover:underline'>Home</Link>
          <Link to="/about" className='hover:underline'>About</Link>
          <div className='relative group'>
            <button className='hover:underline focus:outline-none'>
              Services

            </button>
            <div className='hidden group-hover:block absolute bg-white text-black rounded p-3 shadow-lg mt-2'>
              <Link to="/service1" className='block px-4 py-2 hover:bg-gray-200'>UG Medical Consultancy</Link>
              <Link to="/service2" className='block px-4 py-2 hover:bg-gray-200'>PG Medical Consultancy</Link>
              {/* <Link to="/service3" className='block px-4 py-2 hover:bg-gray-200'>Service 3</Link> */}
            </div>
          </div>
          <Link to="/psychometric-test" className='hover:underline'>Psychometric Test</Link>
          <Link to="/contact" className='hover:underline'>Contact Us</Link>
          <button onClick={toggleSidebar} className='hover:underline'>Login/Signup</button>
        </div>
      </div>
      {isSidebarOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-20'>
          <div className='fixed right-0 top-0 w-64 h-full bg-white shadow-lg p-5'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-bold'>Login/Signup</h2>
              <button onClick={toggleSidebar} className='text-xl'>&times;</button>
            </div>
            <Link to="/login" className='block px-4 py-2 hover:bg-gray-200'>Login</Link>
            <Link to="/signup" className='block px-4 py-2 hover:bg-gray-200'>Signup</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
