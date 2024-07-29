import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import {
  FaBookOpen,
  FaUserGraduate,
  FaTasks,
  FaFileAlt,
  FaChartBar,
  FaUsers,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import logo from "../../assets/images/logo.png";

const Sidebar = () => {
  const [studentDropdown, setStudentDropdown] = useState(false);
  const [trainerDropdown, setTrainerDropdown] = useState(false);
  const [courseDropdown, setCourseDropdown] = useState(false);
  const [assignmentDropdown, setAssignmentDropdown] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  const toggleDropdown = (setDropdown) => {
    setDropdown((prev) => !prev);
  };

  return (
    <div className="h-screen bg-gray-800 text-white w-64 flex flex-col">
      <Link to="/admin" className="flex items-center justify-center h-20 border-b border-gray-700 cursor-pointer">
        <img src={logo} alt="logo" className="w-20 h-20" />
        <h1 className="text-2xl font-semibold ml-4">LMS</h1>
      </Link>
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col p-4 space-y-4">
          <Link
            to="/admin"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <MdDashboard size={24} />
            <span className="ml-4">Dashboard</span>
          </Link>

          {/* Students Dropdown */}
          <div className="flex flex-col">
            <div
              className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
              onClick={() => toggleDropdown(setStudentDropdown)}
            >
              <FaUserGraduate size={24} />
              <span className="ml-4">Students</span>
              <BsChevronDown className="ml-auto" />
            </div>
            {studentDropdown && (
              <div className="flex flex-col ml-8">
                <Link
                  to="/admin/addstudents"
                  className="p-2 hover:bg-gray-700 rounded"
                >
                  Add Student
                </Link>
                <Link
                  to="/admin/allstudent"
                  className="p-2 hover:bg-gray-700 rounded"
                >
                  All Students
                </Link>
              </div>
            )}
          </div>

          {/* Trainers Dropdown */}
          <div className="flex flex-col">
            <div
              className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
              onClick={() => toggleDropdown(setTrainerDropdown)}
            >
              <FaUsers size={24} />
              <span className="ml-4">Trainers</span>
              <BsChevronDown className="ml-auto" />
            </div>
            {trainerDropdown && (
              <div className="flex flex-col ml-8">
                <Link
                  to="/admin/addtrainer"
                  className="p-2 hover:bg-gray-700 rounded"
                >
                  Add Trainer
                </Link>
                <Link
                  to="/admin/alltrainers"
                  className="p-2 hover:bg-gray-700 rounded"
                >
                  All Trainers
                </Link>
              </div>
            )}
          </div>

          {/* Courses Dropdown */}
          <div className="flex flex-col">
            <div
              className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
              onClick={() => toggleDropdown(setCourseDropdown)}
            >
              <FaBookOpen size={24} />
              <span className="ml-4">Courses</span>
              <BsChevronDown className="ml-auto" />
            </div>
            {courseDropdown && (
              <div className="flex flex-col ml-8">
                <Link
                  to="/admin/addcourses"
                  className="p-2 hover:bg-gray-700 rounded"
                >
                  Add Course
                </Link>
                <Link
                  to="/admin/allcourse"
                  className="p-2 hover:bg-gray-700 rounded"
                >
                  All Courses
                </Link>
              </div>
            )}
          </div>

          {/* Assignments Dropdown */}
          <div className="flex flex-col">
            <div
              className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
              onClick={() => toggleDropdown(setAssignmentDropdown)}
            >
              <FaTasks size={24} />
              <span className="ml-4">Assignments</span>
              <BsChevronDown className="ml-auto" />
            </div>
            {assignmentDropdown && (
              <div className="flex flex-col ml-8">
                <Link
                  to="/admin/addassignment"
                  className="p-2 hover:bg-gray-700 rounded"
                >
                  Add Assignment
                </Link>
                <Link
                  to="/admin/allassignment"
                  className="p-2 hover:bg-gray-700 rounded"
                >
                  All Assignments
                </Link>
              </div>
            )}
          </div>

          {/* Users Dropdown */}
          <div className="flex flex-col">
            <div
              className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
              onClick={() => toggleDropdown(setUserDropdown)}
            >
              <FaUsers size={24} />
              <span className="ml-4">Users</span>
              <BsChevronDown className="ml-auto" />
            </div>
            {userDropdown && (
              <div className="flex flex-col ml-8">
                <Link
                  to="/admin/adduser"
                  className="p-2 hover:bg-gray-700 rounded"
                >
                  Add User
                </Link>
                <Link
                  to="/admin/alluser"
                  className="p-2 hover:bg-gray-700 rounded"
                >
                  All Users
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/admin/reports"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <FaChartBar size={24} />
            <span className="ml-4">Reports</span>
          </Link>

          <Link
            to="/admin/contents"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <FaFileAlt size={24} />
            <span className="ml-4">Content</span>
          </Link>

          <Link
            to="/admin/settings"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <IoMdSettings size={24} />
            <span className="ml-4">Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
