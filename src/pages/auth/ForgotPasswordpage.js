import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import forgotPasswordImage from "../../assets/images/Forgot_password.png";
import axios from "axios";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleResetRequest = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        email,
      };

      const response = await axios.post(
        "http://localhost:4000/auth/forgot-password",
        formData
      );

      setResetSent(true);
      setAlertMessage(response.data.message);
      setShowAlert(true); // Shows the custom alert popup
      console.log("Password reset email sent successfully!");
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
      setAlertMessage("Error sending password reset email. Please try again.");
      setShowAlert(true); // Shows the custom alert popup with error message
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex items-center justify-center bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-white rounded-lg shadow-md overflow-hidden md:flex">
        {/* Left side (image) */}
        <div className="md:w-1/2">
          <img
            src={forgotPasswordImage}
            alt="Forgot Password"
            className="h-full w-full object-cover md:block hidden"
          />
        </div>
        {/* Right side (form) */}
        <div className="p-8 md:w-1/2">
          <div>
            <h2 className="mt-6 text-center text-4xl drop-shadow-xl font-extrabold text-[#343A40] font-sans">
              Forgot your password?
            </h2>
            {!resetSent ? (
              <p className="text-sm mt-3 text-center font-medium sm:text-3xl lg:text-base text-[#343A40] tracking-normal ">
                Enter your email address below to request an account password
                reset.
              </p>
            ) : (
              <p className="mt-2 text-center text-sm text-gray-600">
                Password reset email sent! Please check your inbox.
              </p>
            )}
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleResetRequest}>
            <input type="hidden" name="remember" value="true" />
            {!resetSent && (
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="relative mb-6 data-twe-input-wrapper-init">
                  <label
                    htmlFor="email"
                    className="block text-lg text-[#343A40] font-medium text-sm mb-2 tracking-widest uppercase"
                  >
                    Email*
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
                    placeholder="Enter your email address"
                    autoComplete="email"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <FiMail className="text-[#6C757D]" />
                  </span>
                </div>
              </div>
            )}

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 
                  focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 
                  dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-normal text-gray-500 dark:text-gray-800"
                >
                  I accept the{" "}
                  <Link
                    className="font-medium text-blue-700 hover:underline dark:text-primary-500"
                    to="/TermsConditionPage"
                  >
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>

            {!resetSent ? (
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center text-white bg-[#3498db] hover:bg-[#2c3e50]
                  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg 
                  text-sm px-5 py-2.5 text-center dark:bg-primary-600 "
                >
                  Send reset email
                </button>
              </div>
            ) : (
              <div className="text-center">
                <Link
                  to="/login"
                  className="group relative w-full flex justify-center text-white bg-[#3498db] hover:bg-[#2c3e50]
                  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg 
                  text-sm px-5 py-2.5 text-center dark:bg-primary-600 "
                >
                  Return to login
                </Link>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Alert Popup */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
          <div className="bg-gray-200 rounded-lg shadow-lg p-6 w-1/3 border-2 border-gray-500 shadow-md shadow-gray-700 ">
            <p className="text-lg font-bold flex items-center justify-center text-gray-800 ">
              {alertMessage}
            </p>
            <button
              onClick={closeAlert}
              className="mt-4 py-2 px-4 rounded 
              focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mx-auto block
              bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordPage;
