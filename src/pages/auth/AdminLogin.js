import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import AdminLoginImage from "../../assets/images/Admin_login.png";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
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
      alert("Please fix the password errors before submitting. ");
      return;
    }
    try {
      console.log("Logged in successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="w-full flex items-center justify-center bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Left side (image) */}
          <div className="md:w-1/2">
            <img
              src={AdminLoginImage}
              alt="Signup"
              className="h-full w-full object-cover md:block hidden"
            />
          </div>

          {/* Right side (form) */}
          <div className="p-8 md:w-1/2">
            <div>
              <h2 className="mt-6 text-center text-4xl drop-shadow-xl font-extrabold text-[#343A40] font-sans">
                Admin Login
              </h2>
              <p className="text-sm mt-3 text-center font-medium sm:text-3xl lg:text-base text-[#343A40] tracking-normal ">
                Please enter your username and password.
              </p>
            </div>

            <form className="mt-8 space-y-3" onSubmit={handleLogin}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm flex flex-col gap-5 ">
                <div className="relative mb-6 data-twe-input-wrapper-init">
                  <label
                    htmlFor="email"
                    class="block text-lg text-[#343A40] font-medium text-sm mb-2 tracking-widest uppercase"
                  >
                    username*
                  </label>

                  <input
                    type="email"
                    required
                    className="block w-full py-3 px-2 mt-2 
                  text-gray-800 shadow appearance-none leading-tight 
                  focus:text-[#6C757D]
                  border-b-2 border-gray-300 placeholder-gray-500 
                  text-gray-900 focus:outline-none focus:ring-indigo-500 
                  focus:border-indigo-300 focus:z-10 sm:text-sm"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Username"
                    autocomplete="email"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <FiMail className="text-[#6C757D]" />
                  </span>
                </div>

                <div className="relative mb-6 data-twe-input-wrapper-init">
                  <label
                    htmlFor="password"
                    className="block text-lg text-[#343A40] font-medium text-sm mb-2 tracking-widest uppercase"
                  >
                    password*
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    class="block w-full py-3 px-2 mt-2 
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
              </div>

              <div class="mb-2 flex items-center justify-end">
                <Link
                  to="/forgotPassword"
                  href="forgotPassword"
                  class="text-[#007BFF] font-semibold text-[14px]"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
