import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses data from an API or a mock data source
    // For now, we'll use mock data
    const mockCourses = [
      {
        id: 1,
        name: "React Basics",
        description: "Introduction to React",
        instructor: "John Doe",
        startDate: "2024-07-20",
        endDate: "2024-08-20",
      },
      {
        id: 2,
        name: "Advanced CSS",
        description: "Deep dive into CSS",
        instructor: "Jane Smith",
        startDate: "2024-07-18",
        endDate: "2024-08-18",
      },
      {
        id: 3,
        name: "JavaScript Fundamentals",
        description: "Core concepts of JavaScript",
        instructor: "Mark Johnson",
        startDate: "2024-07-15",
        endDate: "2024-08-15",
      },
      // Add more mock courses as needed
    ];
    setCourses(mockCourses);
  }, []);

  const handleDelete = (id) => {
    // Implement delete functionality
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">All Courses</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Course Name</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Instructor</th>
              <th className="py-2 px-4 border-b">Start Date</th>
              <th className="py-2 px-4 border-b">End Date</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="py-2 px-4 border-b">{course.name}</td>
                <td className="py-2 px-4 border-b">{course.description}</td>
                <td className="py-2 px-4 border-b">{course.instructor}</td>
                <td className="py-2 px-4 border-b">{course.startDate}</td>
                <td className="py-2 px-4 border-b">{course.endDate}</td>
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
                      onClick={() => handleDelete(course.id)}
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

export default AllCourses;
