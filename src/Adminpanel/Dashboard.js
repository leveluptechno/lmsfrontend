import React from 'react';
import Charts from './components/Charts';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Total Students</h3>
          <p className="text-gray-600">1,234</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Courses Offered</h3>
          <p className="text-gray-600">56</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Completed Courses</h3>
          <p className="text-gray-600">1,028</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Active Courses</h3>
          <p className="text-gray-600">15</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">New Registrations</h3>
          <p className="text-gray-600">89</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Recent Activity</h3>
          <ul className="text-gray-600">
            <li>- John Doe completed the course "React Basics"</li>
            <li>- Jane Smith registered for "Advanced CSS"</li>
            <li>- Mark Johnson started "JavaScript Fundamentals"</li>
          </ul>
        </div>
      </div>
        <div className='w-full mt-4'>
        <Charts />
        </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Latest Courses</h3>
        <div className="bg-white shadow-md rounded-lg p-4">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Course Name</th>
                <th className="py-2 px-4 border-b">Instructor</th>
                <th className="py-2 px-4 border-b">Date Added</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">React Basics</td>
                <td className="py-2 px-4 border-b">John Doe</td>
                <td className="py-2 px-4 border-b">2024-07-20</td>
                <td className="py-2 px-4 border-b">Active</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Advanced CSS</td>
                <td className="py-2 px-4 border-b">Jane Smith</td>
                <td className="py-2 px-4 border-b">2024-07-18</td>
                <td className="py-2 px-4 border-b">Active</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">JavaScript Fundamentals</td>
                <td className="py-2 px-4 border-b">Mark Johnson</td>
                <td className="py-2 px-4 border-b">2024-07-15</td>
                <td className="py-2 px-4 border-b">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
