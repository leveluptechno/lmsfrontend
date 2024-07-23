// ResetPasswordPage.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import resetPasswordImage from '../../assets/images/reset.png'; // Replace with your actual image path

const ResetPasswordPage = () => {
  const { token } = useParams(); // Assuming you have a route parameter for the reset token
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    
    // Add your reset password logic here (e.g., using Firebase, Auth0, or custom backend)
    try {
      // Example: Firebase authentication
      // await firebase.auth().confirmPasswordReset(token, newPassword);
      console.log('Password reset successfully!');
    } catch (error) {
      console.error('Error resetting password:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
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
        <div className="p-8 md:w-1/2">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Reset your password
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleResetPassword}>
            <input type="hidden" name="token" value={token} />
            <div className="rounded-md shadow-sm flex flex-col gap-5">
              <div>
                <label htmlFor="new-password" className="sr-only">
                  New Password
                </label>
                <input
                  id="new-password"
                  name="new-password"
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className={`appearance-none relative block w-full px-3 py-2 border ${
                    passwordsMatch ? 'border-gray-300' : 'border-red-500'
                  } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  placeholder="New password"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="sr-only">
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
                  className={`appearance-none relative block w-full px-3 py-2 border ${
                    passwordsMatch ? 'border-gray-300' : 'border-red-500'
                  } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  placeholder="Confirm password"
                />
              </div>
              {!passwordsMatch && (
                <p className="text-red-500 text-sm">Passwords do not match.</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Reset password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
