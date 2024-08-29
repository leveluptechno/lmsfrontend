import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import resetPasswordImage from "../../assets/images/reset-p.png";

const ResetPasswordPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // success or error

  const navigate = useNavigate();

  const closeAlert = () => {
    setShowAlert(false);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
      setAlertMessage("Passwords do not match.");
      setAlertType("error");
      setShowAlert(true);
      return;
    }

    try {
      const formData = {
        newPassword,
        confirmPassword,
      };

      const response = await axios.post(
        `http://localhost:4000/auth/reset-password?token=${token}`,
        formData
      );

      setSuccessMessage("Password reset successfully!");
      setAlertMessage(response.data.message);
      setAlertType("success");
      setShowAlert(true);
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      console.error("Error resetting password:", error.message);
      setSuccessMessage("Error resetting password. Please try again.");
      setAlertMessage("Error resetting password. Please try again.");
      setAlertType("error");
      setShowAlert(true);
    }
  };

  return (
    <div className="flex items-center justify-center bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-white rounded-lg shadow-md overflow-hidden md:flex">
        {/* Left side (image) */}
        <div className="md:w-1/2">
          <img
            src={resetPasswordImage}
            alt="Reset Password"
            className="h-full w-full object-cover md:block hidden"
          />
        </div>
        {/* Right side (form) */}
        <div className="p-8 md:w-1/2 ">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold dark:text-[#343A40]">
              Change your password
            </h2>
            <p className="text-sm mt-3 text-center font-medium sm:text-3xl lg:text-base text-[#343A40] tracking-normal ">
              Your new password must be different from previous used passwords.
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleResetPassword}>
            <input type="hidden" name="token" value={token} />
            <div className="rounded-md shadow-sm flex flex-col gap-5">
              <div>
                <label
                  htmlFor="new-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#343A40]"
                >
                  New password
                </label>
                <input
                  id="new-password"
                  name="new-password"
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className={`appearance-none shadow-lg leading-tight relative block flex w-full px-2 py-3 mt-2 border-b-2 ${
                    passwordsMatch ? "border-gray-300" : "border-red-500"
                  } placeholder-gray-500 text-gray-800 rounded-md 
                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                  focus:text-[#6C757D]`}
                  placeholder="******"
                />
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#343A40]"
                >
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
                    setPasswordsMatch(newPassword === e.target.value);
                  }}
                  className={`appearance-none shadow-lg leading-tight relative block flex w-full px-2 py-3 mt-2 border-b-2 ${
                    passwordsMatch ? "border-gray-300" : "border-red-500"
                  } placeholder-gray-500 text-gray-800 rounded-md 
                  focus:outline-none focus:ring-indigo-500 
                  focus:border-indigo-300 focus:z-10 sm:text-sm
                  focus:text-[#6C757D]`}
                  placeholder="******"
                />
              </div>
              {!passwordsMatch && (
                <p className="text-red-500 text-sm">Passwords do not match.</p>
              )}
              {successMessage && (
                <p
                  className={`text-sm mt-4 ${
                    successMessage.includes("successfully")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {successMessage}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="group relative w-full flex justify-center text-white bg-[#3498db] hover:bg-[#2c3e50]
                  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg 
                  text-sm px-5 py-2.5 text-center dark:bg-primary-600 "
              >
                Reset password
              </button>
              <Link
                className="font-medium text-blue-700 text-sm text-center hover:underline dark:text-primary-500"
                to="/login"
              >
                Return to Login
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Alert Popup */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className={`bg-white rounded-lg shadow-lg p-6 w-full max-w-md ${
              alertType === "success"
                ? "border-l-4 border-green-500"
                : "border-l-4 border-red-500"
            }`}
          >
            <p
              className={`text-center ${
                alertType === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {alertMessage}
            </p>
            <button
              onClick={closeAlert}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mx-auto block"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPasswordPage;
