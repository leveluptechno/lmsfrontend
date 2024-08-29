// ./src/ProfilePage.js
import React from 'react';
import profileimg from '../../assets/images/man.png';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Admin Profile</h2>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Profile Picture and Basic Info */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <img
              src={profileimg}
              alt="Admin Profile"
              className="w-40 h-40 rounded-full mx-auto lg:mx-0 border-4 border-indigo-500"
            />
            <h3 className="mt-4 text-2xl font-semibold text-indigo-700">Admin Name</h3>
            <p className="text-gray-600">admin@example.com</p>
            <p className="text-gray-600">(123) 456-7890</p>
            <p className="text-gray-600">123 Admin St, City, Country</p>
          </div>

          {/* Admin Details */}
          <div className="w-full lg:w-2/3 mt-6 lg:mt-0 lg:ml-8">
            <h4 className="text-xl font-semibold mb-4 text-indigo-700">Administrative Information</h4>
            <div className="mb-6">
              <h5 className="font-semibold text-indigo-600">Role</h5>
              <p className="text-gray-600">Super Admin</p>
            </div>
            <div className="mb-6">
              <h5 className="font-semibold text-indigo-600">Department</h5>
              <p className="text-gray-600">Management</p>
            </div>
            <div className="mb-6">
              <h5 className="font-semibold text-indigo-600">Joined Date</h5>
              <p className="text-gray-600">January 1, 2020</p>
            </div>
            <div className="mb-6">
              <h5 className="font-semibold text-indigo-600">Recent Activities</h5>
              <ul className="list-disc list-inside text-gray-600">
                <li>Updated course curriculum</li>
                <li>Approved new trainer applications</li>
                <li>Managed student enrollment</li>
              </ul>
            </div>

            {/* Settings */}
            <h4 className="text-xl font-semibold mt-8 mb-4 text-indigo-700">Settings</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-200">
                Change Password
              </button>
              <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-200">
                Manage Permissions
              </button>
              <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-200">
                Account Settings
              </button>
              <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-200">
                Notification Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
