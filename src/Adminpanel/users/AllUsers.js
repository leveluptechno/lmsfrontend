import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from an API or a mock data source
    // For now, we'll use mock data
    const mockUsers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Trainer' },
      { id: 3, name: 'Mark Johnson', email: 'mark@example.com', role: 'Admin' },
      // Add more mock users as needed
    ];
    setUsers(mockUsers);
  }, []);

  const handleDelete = (id) => {
    // Implement delete functionality
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">All Users</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.role}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEye />
                    </button>
                    <button className="text-yellow-500 hover:text-yellow-700">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(user.id)}>
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

export default AllUsers;
