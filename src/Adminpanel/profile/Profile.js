// ./src/ProfilePage.js
import React from 'react';
import profileimg from '../../assets/images/man.png'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Profile</h2>
        
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <img
              src={profileimg}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto lg:mx-0"
            />
            <h3 className="mt-4 text-xl font-semibold">User Name</h3>
            <p className="text-gray-600">user@example.com</p>
            <p className="text-gray-600">(123) 456-7890</p>
            <p className="text-gray-600">123 User St, City, Country</p>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="w-full lg:w-2/3 mt-6 lg:mt-0 lg:ml-6">
            <h4 className="text-lg font-semibold mb-4">Academic Information</h4>
            <div className="mb-4">
              <h5 className="font-semibold">Courses Enrolled</h5>
              <ul className="list-disc list-inside">
                <li>Course 1</li>
                <li>Course 2</li>
                <li>Course 3</li>
              </ul>
            </div>
            <div className="mb-4">
              <h5 className="font-semibold">Completed Courses</h5>
              <ul className="list-disc list-inside">
                <li>Course A</li>
                <li>Course B</li>
              </ul>
            </div>
            <div className="mb-4">
              <h5 className="font-semibold">Achievements and Certifications</h5>
              <ul className="list-disc list-inside">
                <li>Certification 1</li>
                <li>Certification 2</li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold mt-8 mb-4">Settings</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300">
                Change Password
              </button>
              <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300">
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
