import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students data from an API or a mock data source
    // For now, we'll use mock data
    const mockStudents = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        course: "React Basics",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phone: "098-765-4321",
        course: "Advanced CSS",
      },
      {
        id: 3,
        firstName: "Mark",
        lastName: "Johnson",
        email: "mark.johnson@example.com",
        phone: "567-890-1234",
        course: "JavaScript Fundamentals",
      },
      // Add more mock students as needed
    ];
    setStudents(mockStudents);
  }, []);

  const handleDelete = (id) => {
    // Implement delete functionality
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">All Students</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">First Name</th>
              <th className="py-2 px-4 border-b">Last Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Course</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="py-2 px-4 border-b">{student.firstName}</td>
                <td className="py-2 px-4 border-b">{student.lastName}</td>
                <td className="py-2 px-4 border-b">{student.email}</td>
                <td className="py-2 px-4 border-b">{student.phone}</td>
                <td className="py-2 px-4 border-b">{student.course}</td>
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
                      onClick={() => handleDelete(student.id)}
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

export default AllStudents;
