import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";

const AllAssignments = () => {
  const [assignments, setAssignments] = useState([]);

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

  const handleDelete = (id) => {
    // Implement delete functionality
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">All Assignments</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Due Date</th>
              <th className="py-2 px-4 border-b">Course</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.id}>
                <td className="py-2 px-4 border-b">{assignment.title}</td>
                <td className="py-2 px-4 border-b">{assignment.description}</td>
                <td className="py-2 px-4 border-b">{assignment.dueDate}</td>
                <td className="py-2 px-4 border-b">{assignment.course}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEye />
                    </button>
                    <button className="text-yellow-500 hover:text-yellow-700">
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(assignment.id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAssignments;
