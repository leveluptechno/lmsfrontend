import React from "react";

const Report = () => {
  const data = [
    {
      id: 1,
      student: "John Doe",
      course: "Math 101",
      grade: "A",
      status: "Completed",
    },
    {
      id: 2,
      student: "Jane Smith",
      course: "History 201",
      grade: "B",
      status: "In Progress",
    },
    // Add more data as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Reports</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Student</th>
              <th className="py-2 px-4 border-b">Course</th>
              <th className="py-2 px-4 border-b">Grade</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b">{item.student}</td>
                <td className="py-2 px-4 border-b">{item.course}</td>
                <td className="py-2 px-4 border-b">{item.grade}</td>
                <td className="py-2 px-4 border-b">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
