import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";

const AllTrainers = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    // Fetch trainers data from an API or a mock data source
    // For now, we'll use mock data
    const mockTrainers = [
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
      // Add more mock trainers as needed
    ];
    setTrainers(mockTrainers);
  }, []);

  const handleDelete = (id) => {
    // Implement delete functionality
    setTrainers(trainers.filter((trainer) => trainer.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">All Trainers</h2>
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
            {trainers.map((trainer) => (
              <tr key={trainer.id}>
                <td className="py-2 px-4 border-b">{trainer.firstName}</td>
                <td className="py-2 px-4 border-b">{trainer.lastName}</td>
                <td className="py-2 px-4 border-b">{trainer.email}</td>
                <td className="py-2 px-4 border-b">{trainer.phone}</td>
                <td className="py-2 px-4 border-b">{trainer.course}</td>
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
                      onClick={() => handleDelete(trainer.id)}
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

export default AllTrainers;
