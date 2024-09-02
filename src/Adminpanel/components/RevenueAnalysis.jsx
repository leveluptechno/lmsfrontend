import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 35000 },
  { month: 'Feb', revenue: 28000 },
  { month: 'Mar', revenue: 34000 },
  { month: 'Apr', revenue: 32000 },
  { month: 'May', revenue: 40000 },
  { month: 'Jun', revenue: 32000 },
  { month: 'Jul', revenue: 35000 },
  { month: 'Aug', revenue: 55000 },
  { month: 'Sep', revenue: 38000 },
  { month: 'Oct', revenue: 30000 },
  { month: 'Nov', revenue: 25000 },
  { month: 'Dec', revenue: 32000 },
];

const RevenueAnalysis = () => {
  return (
    <div className="flex flex-col flex-1 bg-white h-[22rem] justify-center p-2 w-80 sm:w-full sm:p-4 md:p-6 rounded-sm border border-gray-200 ">
		<strong className="text-gray-700 font-medium">Monthly Revenue</strong>
		<div className="mt-2 sm:mt-3  sm:w-full md:w-96 lg:w-full h-64">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="revenue" fill="#8884d8" />
    </BarChart>
    </ResponsiveContainer> 
    </div>
    </div>
  );
};

export default RevenueAnalysis;