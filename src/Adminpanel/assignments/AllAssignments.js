import React, { useState, useEffect, useRef } from "react";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";

const AllAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const popupRef = useRef(null);

  useEffect(() => {
    // Fetch assignments data from an API or a mock data source
    // For now, we'll use mock data
    const mockAssignments = [
      {
        id: 1,
        title: "React Basics",
        description: "Introduction to React",
        dueDate: "2024-08-01",
        course: "Course 1",
      },
      {
        id: 2,
        title: "Advanced CSS",
        description: "Deep dive into CSS",
        dueDate: "2024-08-05",
        course: "Course 2",
      },
      {
        id: 3,
        title: "JavaScript Fundamentals",
        description: "Core concepts of JavaScript",
        dueDate: "2024-08-10",
        course: "Course 3",
      },
      // Add more mock assignments as needed
    ];
    setAssignments(mockAssignments);
  }, []);


  //Function for close while clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
        setSelectedAssignment(null);
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
      await fetch(`/api/assignment/${id}`, { method: "DELETE" });
      setAssignments(assignments.filter((assignment) => assignment.id !== id));
    } catch (error) {
      console.error("Error deleting Assignment:", error);
    }
  };

  // Function for View Details of Assignment
  const handleViewDetails = (assignment) => {
    setSelectedAssignment(assignment);
    setIsPopupOpen(true);
    setIsEditMode(false);
  };

   // Function for editing trainer Assignment
   const handleEdit = (assignment) => {
    setSelectedAssignment(assignment);
    setEditFormData(assignment);
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
    setAssignments(
      assignments.map((assignment) =>
        assignment.id === editFormData.id ? editFormData : assignment
      )
    );
    setIsPopupOpen(false);
    setIsEditMode(false);
    setSelectedAssignment(null);
  };


  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 sm:w-full w-80 ml-1">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
      All Assignments
      </h2>
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group m-4 md:mb-0">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
           
            <th className="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Title
            </th>
            <th className="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Due Date
            </th>
            <th className="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Course
            </th>
            <th className="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {assignments.map((assignment) => (
            <tr
              key={assignment.id}
              className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
            >
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Title</span>
                {assignment.title}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Due Date</span>
                {assignment.dueDate}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Course</span>
                {assignment.course}
              </td>
              
              <td className="p-1 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                <button
                  className="text-blue-500 hover:text-blue-700 mr-2"
                  onClick={() => handleViewDetails(assignment)}
                >
                  <FaEye />
                </button>
                <button
                  className="text-yellow-500 hover:text-yellow-700 mr-2"
                  onClick={() => handleEdit(assignment)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(assignment.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup for viewing/editing Course details */}
      {isPopupOpen && selectedAssignment && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 overflow-y-auto">
    <div
      className="bg-white bg-opacity-10 backdrop-blur-md p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg max-w-xs sm:max-w-lg lg:max-w-3xl w-full my-auto  sm:mx-6 lg:mx-auto border border-white border-opacity-20"
      ref={popupRef}
    >
      <h3 className="text-base sm:text-xl lg:text-xl font-bold mb-2 text-neutral-300 text-center">
        {isEditMode ? "Edit Assignment Details" : "Assignment Details"}
      </h3>
      <div className="bg-white bg-opacity-20 p-2 sm:p-4 lg:p-6 rounded-lg shadow-inner flex flex-col items-center sm:flex-row sm:items-start">

        {/* Assignment Details */}
        {isEditMode ? (
          <div className="w-full space-y-1">
            <div>
              <label className="block text-neutral-200 mb-0">Title:</label>
              <input
                type="text"
                name="title"
                value={editFormData.title}
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
              <label className="block text-neutral-200 mb-0">Due Date:</label>
              <input
                type="date"
                name="dueDate"
                value={editFormData.dueDate}
                onChange={handleEditChange}
                className="w-full p-1 rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="block text-neutral-200 mb-0">Course:</label>
              <input
                type="text"
                name="course"
                value={editFormData.course}
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
              <span className="font-bold text-neutral-300">Title: </span>
              <span className="text-neutral-100">{selectedAssignment.title}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-300">Description: </span>
              <span className="text-neutral-100">{selectedAssignment.description}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-300">Due Date: </span>
              <span className="text-neutral-100">{selectedAssignment.dueDate}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-300">Course: </span>
              <span className="text-neutral-100">{selectedAssignment.course}</span>
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

export default AllAssignments;
