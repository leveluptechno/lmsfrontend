import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiEye, FiEyeOff } from "react-icons/fi";
import loginImage from "../../assets/images/log-in.png";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

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
    // Validate the password and set the error message
    const errorMessage = validatePassword(newPassword);
    setPasswordError(errorMessage);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (passwordError) {
      alert("Please fix the password errors before submitting.");
      return;
    }
    try {
      // if login is successful
      const formData = {
        email,
        password,
      };

      const response = await axios.post(
        "http://localhost:4000/auth/login",
        formData
      );

      if (response.data.msg.statusCode === 200) {
        const { accessToken } = response.data;

        //store access token in local storage
        localStorage.setItem("accessToken", "Bearer " + accessToken);

        setPopupMessage("Logged in successfully!");
        setIsPopupVisible(true);
        setTimeout(() => {
          setIsPopupVisible(false);
          console.log(response.data.user.role)
          if
            (response.data.user.role === "admin")

            {
              navigate("/admin");

            } else {
              navigate('/');
            }
          
        }, 3000); //hides popup after 3 seconds
      } else {
        setPopupMessage("Invalid email or password");
        setIsPopupVisible(true);
        setTimeout(() => {
          setIsPopupVisible(false);
        }, 3000);
      }
    } catch (error) {
      setPopupMessage("Error logging in:" + error.message);
      setIsPopupVisible(true);
      setTimeout(() => {
        setIsPopupVisible(false);
      }, 3000);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="w-full flex items-center justify-center bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Left side (image) */}
          <div className="md:w-1/2">
            <img
              src={loginImage}
              alt="Login"
              className="h-full w-full object-cover md:block hidden"
            />
          </div>
          {/* Right side (form) */}
          <div className="p-8 md:w-1/2">
            <div>
              <h2 className="mt-6 text-center text-4xl drop-shadow-xl font-extrabold text-[#343A40] font-sans">
                Log in to your account
              </h2>
              <p className="text-sm mt-3 text-center font-medium sm:text-3xl lg:text-base text-[#343A40] tracking-normal">
                Welcome back! Please enter your details.
              </p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm flex flex-col gap-5 ">
                {/* Email Input */}
                <div className="relative">
                  <label
                    htmlFor="email-address"
                    className="block text-lg text-[#343A40] font-medium text-sm mb-2 tracking-widest uppercase"
                  >
                    Email address*
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
                  <label
                    htmlFor="password"
                    className="block text-lg text-[#343A40] font-medium text-sm mb-2 tracking-widest uppercase"
                  >
                    Password*
                  </label>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
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
                    <p className="text-red-500 text-sm mt-2">
                      {passwordError}
                    </p>
                  )}
                  <span
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <FiEyeOff className="text-[#6C757D]" />
                    ) : (
                      <FiEye className="text-[#6C757D]" />
                    )}
                  </span>
                </div>
              </div>

              <div className="mb-6 flex items-center justify-between ">
                <div className="flex items-center ">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900 text-[14px]"
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  to="/forgotPassword"
                  className="text-[#007BFF] font-semibold text-[14px]"
                >
                  Forgot password?
                </Link>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center text-white bg-[#3498db] hover:bg-[#2c3e50]
                  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg 
                  text-sm px-5 py-2.5 text-center dark:bg-primary-600 "
                >
                  Log in
                </button>
              </div>

              <div className="text-sm mt-4 text-center ">
                <p className="text-sm text-[#6C757D] font-semibold text-[16px]">
                  Don{"'"}t have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-[#007BFF] hover:text-indigo-500"
                  >
                    Create account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/**popup message */}
      {isPopupVisible && (
        <div
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 
        bg-green-500 text-white px-4 py-2 rounded-lg shadow-md"
        >
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
