// ForgotPasswordPage.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import forgotPasswordImage from "../../assets/images/forgot.png"; // Replace with your actual image path

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);

  const handleResetRequest = async (e) => {
    e.preventDefault();
    // Add your reset password request logic here (e.g., using Firebase, Auth0, or custom backend)
    try {
      // Example: Firebase authentication
      // await firebase.auth().sendPasswordResetEmail(email);
      setResetSent(true);
      console.log("Password reset email sent successfully!");
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
    }
  };

  return (
    <div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className=" w-full bg-white rounded-lg shadow-md overflow-hidden md:flex">
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
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Reset your password
            </h2>
            {!resetSent ? (
              <p className="mt-2 text-center text-sm text-gray-600">
                Please enter your email address to receive a password reset
                link.
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
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
              </div>
            )}

            {!resetSent ? (
              <div>
                <Link
                  to="/resetpassword"
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send reset email
                </Link>
              </div>
            ) : (
              <div className="text-center">
                <Link
                  to="/login"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Return to login
                </Link>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
