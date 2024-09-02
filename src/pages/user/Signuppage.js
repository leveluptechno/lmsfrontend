import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiPhone, FiHome, FiMapPin } from "react-icons/fi";
import signupImage from "../../assets/images/signup.png";
import axios from "axios";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phone, setphone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number.";
    }
    return "";
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const errorMessage = validatePassword(newPassword);
    setPasswordError(errorMessage);
  };

  const handlephoneChange = (e) => {
    const value = e.target.value;
    const validInput = value.replace(/[^0-9+\-()\s]/g, "");
    setphone(validInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
      confirmPassword,
      phone,
      address,
      city
    };

    console.log(formData);

    try {
      const response = await axios.post
      ("http://localhost:4000/auth/signup",
        formData
      );
      console.log(response.data);

      if (response.data.statusCode === 201) {
        navigate('/login');
      } else {
        alert("Error signing up");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex items-center justify-center bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Left side (image) */}
          <div className="md:w-1/2 h-full p-4 md:p-6">
            <img
              src={signupImage}
              alt="signup"
              className="w-full h-64 md:h-full object-cover rounded-lg "
            />
          </div>

          {/* Right side (form) */}
          <div className="p-8 md:w-1/2">
            <div>
              <h2 className="mt-6 text-center text-4xl drop-shadow-xl font-extrabold text-[#343A40] font-sans">
                Create your account
              </h2>
              <p className="text-sm mt-3 text-center font-medium sm:text-3xl lg:text-base text-[#343A40] tracking-normal ">
              Welcome! Please fill in the details to get started.
              </p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm flex flex-col gap-5 ">

              {/* Name Input */}
              <div className="relative">
                <label htmlFor="name" 
                className="block text-lg text-[#343A40] font-medium text-sm mb-2 tracking-widest uppercase">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full py-3 px-2 pr-10 mt-2 text-gray-800 shadow appearance-none leading-tight 
                  focus:text-[#6C757D] border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none 
                  focus:ring-indigo-500 focus:border-indigo-300 focus:z-10 sm:text-sm"
                  placeholder="Enter your full name"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <FiUser className="text-[#6C757D]" />
                </span>
              </div>

              {/* Email Input */}
              <div className="relative">
                <label htmlFor="email-address" 
                className="block text-lg text-[#343A40] font-medium text-sm mb-2 tracking-widest uppercase">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full py-3 px-2 pr-10 mt-2 text-gray-800 shadow appearance-none leading-tight 
                  focus:text-[#6C757D] border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none 
                  focus:ring-indigo-500 focus:border-indigo-300 focus:z-10 sm:text-sm"
                  placeholder="Enter your email"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <FiMail className="text-[#6C757D]" />
                </span>
              </div>

              {/* Password Input */}
              <div className="relative">
                <label htmlFor="password" className="block text-lg text-[#343A40] font-medium text-sm mb-2 tracking-widest uppercase">
                  Password
                </label>
                <input 
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="block w-full py-3 px-2 mt-2 
                  text-gray-800 shadow appearance-none leading-tight 
                  focus:text-[#6C757D]
                  border-b-2 border-gray-300 placeholder-gray-500 
                  text-gray-900 focus:outline-none focus:ring-indigo-500 
                  focus:border-indigo-300 focus:z-10 sm:text-sm"
                  id="password"
                  placeholder="********"
                  required
                  /> 
                  {passwordError && (
                    <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                  )}  
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <FiLock className="text-[#6C757D]" />
                </span>
              </div>

              {/**confirm password */}
              <div className="relative">
              <label htmlFor="confirm-password" 
                  class="block text-lg text-[#343A40] font-medium text-sm mb-2 tracking-widest uppercase">
                  Confirm Password
              </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                  className="block w-full py-3 px-2 mt-2 
                  text-gray-800 shadow appearance-none leading-tight 
                  focus:text-[#6C757D]
                  border-b-2 border-gray-300 placeholder-gray-500 
                  text-gray-900 focus:outline-none focus:ring-indigo-500 
                  focus:border-indigo-300 focus:z-10 sm:text-sm"
                  placeholder="********"
                />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <FiLock className="text-[#6C757D]" />
                </span>
              </div>

              {/**contact number input */}
              <div className="relative">
                <label htmlFor="contact-number" className="block text-lg text-[#343A40] font-medium text-sm mb-2 tracking-widest uppercase">
                  Contact Number
                </label>
                <input
                  id="contact-number"
                  name="contact-number"
                  type="tel"
                  required
                  value={phone}
                  onChange={handlephoneChange}
                  pattern="[0-9+\-\(\)\s]*"
                  className="block w-full py-3 px-2 pr-10 mt-2 text-gray-800 shadow appearance-none leading-tight 
                  focus:text-[#6C757D] border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none 
                  focus:ring-indigo-500 focus:border-indigo-300 focus:z-10 sm:text-sm"
                  placeholder="+1 234 567 890"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <FiPhone className="text-[#6C757D]" />
                </span>
              </div>

                          

              <div className="relative">
                <label htmlFor="address" className="block text-lg text-[#343A40] font-medium text-sm mb-2 tracking-widest uppercase">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="block w-full py-3 px-2 pr-10 mt-2 text-gray-800 shadow appearance-none leading-tight 
                  focus:text-[#6C757D] border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none 
                  focus:ring-indigo-500 focus:border-indigo-300 focus:z-10 sm:text-sm"
                  placeholder="Enter your address"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <FiHome className="text-[#6C757D]" />
                </span>
              </div>

               
              <div className="relative">
                <label htmlFor="city" className="block text-lg text-[#343A40] font-medium text-sm mb-2 tracking-widest uppercase">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="block w-full py-3 px-2 pr-10 mt-2 text-gray-800 shadow appearance-none leading-tight 
                  focus:text-[#6C757D] border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none 
                  focus:ring-indigo-500 focus:border-indigo-300 focus:z-10 sm:text-sm"
                  placeholder="Enter your city"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <FiMapPin className="text-[#6C757D]" />
                </span>
              </div>
              </div>

              <div>
                <button
                  type="submit"
                  onChange={handleSubmit}
                  className="group relative w-full flex justify-center text-white bg-[#3498db] hover:bg-[#2c3e50]
                  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg 
                  text-sm px-5 py-2.5 text-center dark:bg-primary-600 "
                >
                  Sign Up
                </button>
              </div>

              <div className="text-sm mt-4 text-center ">
                <p className="text-sm text-[#6C757D] font-semibold text-[16px]">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-[#007BFF] hover:text-indigo-500"
                  >
                    Log In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
