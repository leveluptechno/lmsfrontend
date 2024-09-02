import React from "react";

// Dummy data, later comes from API
const latestCourses = [
  {
    id: 1,
    courseName: "React for Beginners",
    instructor: "John Doe",
    dateAdded: "2024-08-01",
    status: "Active",
  },
  {
    id: 2,
    courseName: "Advanced Node.js",
    instructor: "Jane Smith",
    dateAdded: "2024-07-25",
    status: "Active",
  },
  {
    id: 3,
    courseName: "Introduction to Python",
    instructor: "Michael Johnson",
    dateAdded: "2024-07-20",
    status: "Completed",
  },
  {
    id: 4,
    courseName: "UX/UI Design Fundamentals",
    instructor: "Emily Davis",
    dateAdded: "2024-08-05",
    status: "Pending",
  },
  {
    id: 5,
    courseName: "Data Structures and Algorithms",
    instructor: "Robert Brown",
    dateAdded: "2024-07-30",
    status: "Completed",
  },
  {
    id: 6,
    courseName: "Machine Learning Basics",
    instructor: "Sarah Wilson",
    dateAdded: "2024-07-18",
    status: "Active",
  },
];

function LatestCourses() {
  return (
    <div className="flex-1 bg-white p-3 rounded-sm border border-gray-200 w-80 sm:w-full">
      <strong className="text-gray-700 font-medium block mb-3">Latest Courses</strong>
      <div className="overflow-x-visible ">
        <table className="min-w-full text-gray-700 table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="sm:px-4 px-2 py-3 text-left text-xs sm:text-lg">Course Name</th>
              <th className="sm:px-4 px-2 py-3 text-left text-xs sm:text-lg">Instructor</th>
              <th className="sm:px-4 px-2 py-3 text-left text-xs sm:text-lg">Date Added</th>
              <th className="sm:px-4 px-2 py-3 text-left text-xs sm:text-lg">Status</th>
            </tr>
          </thead>
          <tbody>
            {latestCourses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="sm:px-4 px-1 py-3 text-xs sm:text-lg">{course.courseName}</td>
                <td className="sm:px-4 px-1 py-3 text-xs sm:text-lg">{course.instructor}</td>
                <td className="sm:px-4 px-1 py-3 text-xs sm:text-lg">
                  {new Date(course.dateAdded).toLocaleDateString()}
                </td>
                <td className="sm:px-4 px-1 py-3 text-xs sm:text-lg">
                  <span
                    className={`text-xs font-normal rounded-full px-2 py-1 ${
                      course.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : course.status === "Active"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {course.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LatestCourses;
