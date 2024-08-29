import React from "react";
import DashboardStartsGrid from "./components/DashboardstartsGrid";
import BarCharts from "./components/BarCharts";
import CourseDistribution from "./components/CourseDistribution";
import MonthlyEnrollments from "./components/MonthlyEnrollments";
import RevenueAnalysis from "./components/RevenueAnalysis";
import LatestCourses from "./components/LatestCourses";
import Leaderboard from "./components/Leaderboard";

const Dashboard = () => {
  return (
    <div className="flex flex-col px-1 gap-4 h-screen overflow-y-auto">
      <DashboardStartsGrid />
      <div className="flex  gap-4 px-1  flex-col md:flex-col lg:flex-row sm:flex-col">
        <BarCharts />
        <CourseDistribution />
      </div>
      <div className="flex flex-col   px-1 md:flex-col lg:flex-row gap-4">
        <MonthlyEnrollments />
        <RevenueAnalysis />
      </div>
      <div className="flex flex-col  px-1 md:flex-col lg:flex-row sm:flex-col gap-4">
        <LatestCourses />
        <Leaderboard />
      </div>
    </div>
  );
};

export default Dashboard;

// function BoxWrapper({children}) {
//   return <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'> {children} </div>
// }
