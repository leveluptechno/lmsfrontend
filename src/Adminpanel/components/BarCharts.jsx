import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

const barData = [
  { name: 'Jan', Students: 50 },
  { name: 'Feb', Students: 30 },
  { name: 'Mar', Students: 70 },
  { name: 'Apr', Students: 90 },
  { name: 'May', Students: 65 }
];

function Charts() {
  return (
    <div className="flex flex-col flex-1 bg-white h-[22rem] justify-center p-2 w-80 sm:w-full sm:p-4 md:p-6 rounded-sm border border-gray-200 ">
      <strong className="text-gray-700 font-medium text-sm sm:text-base md:text-lg">Monthly Student Registrations</strong>
      <div className="mt-2 sm:mt-3  sm:w-full md:w-full lg:w-full h-64 ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barData}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Students" fill="#0ea5e9" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;
