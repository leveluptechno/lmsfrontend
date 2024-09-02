import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaBookOpen, FaUserGraduate, FaTasks, FaFileAlt, FaChartBar, FaUsers, FaBars } from "react-icons/fa";
import { IoMdLogOut, IoMdSettings } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import logo from "../../assets/images/logo.png";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [studentDropdown, setStudentDropdown] = useState(false);
  const [trainerDropdown, setTrainerDropdown] = useState(false);
  const [courseDropdown, setCourseDropdown] = useState(false);
  const [assignmentDropdown, setAssignmentDropdown] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  const location = useLocation();

  const toggleDropdown = (setDropdown) => {
    setDropdown((prev) => !prev);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="h-screen overflow-y-auto bg-gray-950 text-white flex">
      {/* Overlay for small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={handleCloseSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-950 text-white transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <Link
          to="/admin"
          className="flex items-center justify-center h-20 border-b border-gray-700 cursor-pointer"
        >
          <img src={logo} alt="logo" className="w-20 h-20" />
          <h1 className="text-2xl font-semibold ml-1">LMS</h1>
        </Link>
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col p-4 space-y-2">
            <Link
              to="/admin"
              className={`flex items-center p-2 hover:bg-gray-700 rounded ${
                location.pathname === "/admin" ? "bg-gray-700" : ""
              }`}
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
                <div className="flex flex-col  ml-8">
                  <Link
                    to="/admin/addstudents"
                    className={`p-2 mt-2 hover:bg-gray-700 rounded ${
                      location.pathname === "/admin/addstudents" ? "bg-gray-700" : ""
                    }`}
                  >
                    Add Student
                  </Link>
                  <Link
                    to="/admin/allstudent"
                    className={`p-2 mt-2 hover:bg-gray-700 rounded ${
                      location.pathname === "/admin/allstudent" ? "bg-gray-700" : ""
                    }`}
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
                    className={`p-2 mt-2 hover:bg-gray-700 rounded ${
                      location.pathname === "/admin/addtrainer" ? "bg-gray-700" : ""
                    }`}
                  >
                    Add Trainer
                  </Link>
                  <Link
                    to="/admin/alltrainers"
                    className={`p-2 mt-2 hover:bg-gray-700 rounded ${
                      location.pathname === "/admin/alltrainers" ? "bg-gray-700" : ""
                    }`}
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
                    className={`p-2 mt-2 hover:bg-gray-700 rounded ${
                      location.pathname === "/admin/addcourses" ? "bg-gray-700" : ""
                    }`}
                  >
                    Add Course
                  </Link>
                  <Link
                    to="/admin/allcourse"
                    className={`p-2 mt-2 hover:bg-gray-700 rounded ${
                      location.pathname === "/admin/allcourse" ? "bg-gray-700" : ""
                    }`}
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
                    className={`p-2 mt-2 hover:bg-gray-700 rounded ${
                      location.pathname === "/admin/addassignment" ? "bg-gray-700" : ""
                    }`}
                  >
                    Add Assignment
                  </Link>
                  <Link
                    to="/admin/allassignment"
                    className={`p-2 mt-2 hover:bg-gray-700 rounded ${
                      location.pathname === "/admin/allassignment" ? "bg-gray-700" : ""
                    }`}
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
                    className={`p-2 mt-2 hover:bg-gray-700 rounded ${
                      location.pathname === "/admin/adduser" ? "bg-gray-700" : ""
                    }`}
                  >
                    Add User
                  </Link>
                  <Link
                    to="/admin/alluser"
                    className={`p-2 mt-2 hover:bg-gray-700 rounded ${
                      location.pathname === "/admin/alluser" ? "bg-gray-700" : ""
                    }`}
                  >
                    All Users
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/admin/reports"
              className={`flex items-center p-2 hover:bg-gray-700 rounded ${
                location.pathname === "/admin/reports" ? "bg-gray-700" : ""
              }`}
            >
              <FaChartBar size={24} />
              <span className="ml-4">Reports</span>
            </Link>

            <Link
              to="/admin/contents"
              className={`flex items-center p-2 hover:bg-gray-700 rounded ${
                location.pathname === "/admin/contents" ? "bg-gray-700" : ""
              }`}
            >
              <FaFileAlt size={24} />
              <span className="ml-4">Content</span>
            </Link>

            {/* {Bottom Links} */}
            <div className="gap-0.5 pt-2 border-t border-neutral-700">
              <Link
                to="/admin/settings"
                className={`flex items-center p-2 hover:bg-gray-700 rounded ${
                  location.pathname === "/admin/settings" ? "bg-gray-700" : ""
                }`}
              >
                <IoMdSettings size={24} />
                <span className="ml-4">Settings</span>
              </Link>
              <Link
                to="/"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <IoMdLogOut size={24} />
                <span className="ml-4 text-red-500 cursor-pointer">Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Burger Menu */}
      <button
        className="fixed  top-5 left-4 z-40 md:hidden text-black"
        onClick={handleSidebarToggle}
      >
        <FaBars size={24} />
      </button>
    </div>
  );
};

export default Sidebar;
