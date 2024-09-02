import React, { useState, useEffect, useRef } from "react";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const popupRef = useRef(null);

  useEffect(() => {
    // Fetch courses data from an API or a mock data source
    // For now, we'll use mock data
    const mockCourses = [
      {
        id: 1,
        courseName: "React Basics",
        description: "Introduction to React",
        instructor: "John Doe",
        startDate: "2024-07-20",
        endDate: "2024-08-20",
      },
      {
        id: 2,
        courseName: "Advanced CSS",
        description: "Deep dive into CSS",
        instructor: "Jane Smith",
        startDate: "2024-07-18",
        endDate: "2024-08-18",
      },
      {
        id: 3,
        courseName: "JavaScript Fundamentals",
        description: "Core concepts of JavaScript",
        instructor: "Mark Johnson",
        startDate: "2024-07-15",
        endDate: "2024-08-15",
      },
      // Add more mock courses as needed
    ];
    setCourses(mockCourses);
  }, []);

  //Function for close while clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
        setSelectedCourse(null);
        setIsEditMode(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);


  // Function for deleting Course
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/course/${id}`, { method: "DELETE" });
      setCourses(courses.filter((course) => course.id !== id));
    } catch (error) {
      console.error("Error deleting Course:", error);
    }
  };

  // Function for View Details of Course
  const handleViewDetails = (course) => {
    setSelectedCourse(course);
    setIsPopupOpen(true);
    setIsEditMode(false);
  };

   // Function for editing trainer Course
   const handleEdit = (course) => {
    setSelectedCourse(course);
    setEditFormData(course);
    setIsPopupOpen(true);
    setIsEditMode(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    setCourses(
      courses.map((course) =>
        course.id === editFormData.id ? editFormData : course
      )
    );
    setIsPopupOpen(false);
    setIsEditMode(false);
    setSelectedCourse(null);
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 sm:w-full w-80 ml-1">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
        All Courses
      </h2>
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group m-4 md:mb-0">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
            <th className="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Course Name
            </th>
            <th className="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Instructor
            </th>
            <th className="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Start Date
            </th>
            <th className="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            End Date
            </th>
            <th className="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {courses.map((course) => (
            <tr
              key={course.id}
              className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
            >
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Course Name</span>
                {course.courseName}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Instructor</span>
                {course.instructor}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Start Date</span>
                {course.startDate}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">End Date</span>
                {course.endDate}
              </td>
              <td className="p-1 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                <button
                  className="text-blue-500 hover:text-blue-700 mr-2"
                  onClick={() => handleViewDetails(course)}
                >
                  <FaEye />
                </button>
                <button
                  className="text-yellow-500 hover:text-yellow-700 mr-2"
                  onClick={() => handleEdit(course)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(course.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup for viewing/editing Course details */}
      {isPopupOpen && selectedCourse && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 overflow-y-auto">
    <div
      className="bg-white bg-opacity-10 backdrop-blur-md p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg max-w-xs sm:max-w-lg lg:max-w-3xl w-full my-auto  sm:mx-6 lg:mx-auto border border-white border-opacity-20"
      ref={popupRef}
    >
      <h3 className="text-base sm:text-xl lg:text-xl font-bold mb-2 text-neutral-300 text-center">
        {isEditMode ? "Edit Course Details" : "Course Details"}
      </h3>
      <div className="bg-white bg-opacity-20 p-2 sm:p-4 lg:p-6 rounded-lg shadow-inner flex flex-col items-center sm:flex-row sm:items-start">

        {/* Course Details */}
        {isEditMode ? (
          <div className="w-full space-y-1">
            <div>
              <label className="block text-neutral-200 mb-0">Course Name:</label>
              <input
                type="text"
                name="courseName"
                value={editFormData.courseName}
                onChange={handleEditChange}
                className="w-full p-1 rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="block text-neutral-200 mb-0">Description:</label>
              <input
                type="text"
                name="description"
                value={editFormData.description}
                onChange={handleEditChange}
                className="w-full p-1 rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="block text-neutral-200 mb-0">Instructor:</label>
              <input
                type="text"
                name="instructor"
                value={editFormData.instructor}
                onChange={handleEditChange}
                className="w-full p-1 rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="block text-neutral-200 mb-0">Start Date:</label>
              <input
                type="date"
                name="startDate"
                value={editFormData.startDate}
                onChange={handleEditChange}
                className="w-full p-1 rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="block text-neutral-200 mb-0">End Date:</label>
              <input
                type="date"
                name="endDate"
                value={editFormData.endDate}
                onChange={handleEditChange}
                className="w-full p-1 rounded-lg text-gray-800"
              />
            </div>
            
            <div className="flex justify-end space-x-3 mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg"
                onClick={() => {
                  setIsPopupOpen(false);
                  setIsEditMode(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full space-y-2">
            <div>
              <span className="font-bold text-neutral-300">Course Name: </span>
              <span className="text-neutral-100">{selectedCourse.courseName}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-300">Description: </span>
              <span className="text-neutral-100">{selectedCourse.description}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-300">Instructor: </span>
              <span className="text-neutral-100">{selectedCourse.instructor}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-300">Start Date: </span>
              <span className="text-neutral-100">{selectedCourse.startDate}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-300">End Date: </span>
              <span className="text-neutral-100">{selectedCourse.endDate}</span>
            </div>
            
          </div>
        )}
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default AllCourses;
