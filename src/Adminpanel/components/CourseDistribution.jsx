import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const pieData = [
    { name: 'Completed Courses', value: 110 },
    { name: 'Active Courses', value: 20 },
    { name: 'New Registrations', value: 101 }
  ]

    const RADIAN = Math.PI / 180
    const COLORS = ['#00C49F', '#FFBB28', '#FF8042']

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5
        const x = cx + radius * Math.cos(-midAngle * RADIAN)
        const y = cy + radius * Math.sin(-midAngle * RADIAN)
    
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        )
    }
    

    export default function CourseDistribution() {
  return (
    <div className=" flex flex-col  bg-white h-[22rem] justify-center p-2 w-80 lg:w-96 md:w-auto   sm:p-4 md:p-6 rounded-sm border border-gray-200  ">
    <strong className="text-gray-700 font-medium">Course Distribution</strong>
    <div className="mt-3 w-full flex-1 text-xs sm:w-full md:w-80 lg:w-full ml-0 md:ml-24 lg:ml-0">
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={300}>
                <Pie
                    data={pieData}
                    cx="50%"
                    cy="45%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={105}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {pieData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    </div>
</div>

  )
}

