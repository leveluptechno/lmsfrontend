import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer} from 'recharts';

const lineData = [
    { month: 'Jan', Enrollments: 50 },
    { month: 'Feb', Enrollments: 60 },
    { month: 'Mar', Enrollments: 70 },
    { month: 'Apr', Enrollments: 90 },
    { month: 'May', Enrollments: 80 }
  ];

function MonthlyEnrollments() {
  return (
    <div className="flex flex-col flex-1 bg-white h-[22rem] justify-center p-2 w-80 sm:w-full sm:p-4 md:p-6 rounded-sm border border-gray-200 ">
      <strong className="text-gray-700 font-medium">Monthly Enrollments</strong>
      <div className="mt-2 sm:mt-3  sm:w-full md:w-96 lg:w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Enrollments" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>  
        </div>   
    </div>
  )
}

export default MonthlyEnrollments
