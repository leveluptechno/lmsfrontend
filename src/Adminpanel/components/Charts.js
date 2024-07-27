// src/components/Charts.js
import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

const pieData = [
  { name: 'Completed Courses', value: 1028 },
  { name: 'Active Courses', value: 15 },
  { name: 'New Registrations', value: 89 }
];

const barData = [
  { name: 'Jan', Students: 50 },
  { name: 'Feb', Students: 30 },
  { name: 'Mar', Students: 70 },
  { name: 'Apr', Students: 90 },
  { name: 'May', Students: 65 }
];

const lineData = [
  { month: 'Jan', Enrollments: 50 },
  { month: 'Feb', Enrollments: 60 },
  { month: 'Mar', Enrollments: 70 },
  { month: 'Apr', Enrollments: 90 },
  { month: 'May', Enrollments: 80 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Charts = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
      <h3 className="text-xl font-semibold mb-2">Course Statistics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pie Chart */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-2">Course Distribution</h4>
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Line Chart */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-2">Monthly Enrollments</h4>
          <LineChart width={500} height={300} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Enrollments" stroke="#8884d8" />
          </LineChart>
        </div>

        {/* Bar Chart */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-2">Monthly Student Registrations</h4>
          <BarChart width={500} height={300} data={barData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Students" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Charts;
