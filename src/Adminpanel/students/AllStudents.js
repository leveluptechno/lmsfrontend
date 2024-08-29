import React, { useState, useEffect, useRef } from "react";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const popupRef = useRef(null);

  useEffect(() => {
    const mockStudents = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        course: "React Basics",
        dateOfBirth: "1995-05-15",
        gender: "Male",
        address: "123 Elm Street, Springfield",
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phone: "098-765-4321",
        course: "Advanced CSS",
        dateOfBirth: "1993-08-22",
        gender: "Female",
        address: "456 Maple Avenue, Springfield",
        profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        id: 3,
        firstName: "Mark",
        lastName: "Johnson",
        email: "mark.johnson@example.com",
        phone: "567-890-1234",
        course: "JavaScript Fundamentals",
        dateOfBirth: "1990-12-10",
        gender: "Male",
        address: "789 Oak Lane, Springfield",
        profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        id: 4,
        firstName: "Emily",
        lastName: "Davis",
        email: "emily.davis@example.com",
        phone: "234-567-8901",
        course: "Web Design",
        dateOfBirth: "1992-07-18",
        gender: "Female",
        address: "101 Pine Street, Springfield",
        profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        id: 5,
        firstName: "Michael",
        lastName: "Brown",
        email: "michael.brown@example.com",
        phone: "345-678-9012",
        course: "Database Management",
        dateOfBirth: "1988-11-05",
        gender: "Male",
        address: "202 Cedar Avenue, Springfield",
        profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        id: 6,
        firstName: "Sarah",
        lastName: "Wilson",
        email: "sarah.wilson@example.com",
        phone: "456-789-0123",
        course: "Networking Basics",
        dateOfBirth: "1994-03-29",
        gender: "Female",
        address: "303 Birch Lane, Springfield",
        profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
      },
      {
        id: 7,
        firstName: "David",
        lastName: "Lee",
        email: "david.lee@example.com",
        phone: "567-890-1234",
        course: "Cloud Computing",
        dateOfBirth: "1991-09-15",
        gender: "Male",
        address: "404 Spruce Street, Springfield",
        profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        id: 8,
        firstName: "Jessica",
        lastName: "Taylor",
        email: "jessica.taylor@example.com",
        phone: "678-901-2345",
        course: "AI and Machine Learning",
        dateOfBirth: "1989-02-10",
        gender: "Female",
        address: "505 Palm Avenue, Springfield",
        profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
      },
      {
        id: 9,
        firstName: "Robert",
        lastName: "Martin",
        email: "robert.martin@example.com",
        phone: "789-012-3456",
        course: "Cybersecurity",
        dateOfBirth: "1996-01-20",
        gender: "Male",
        address: "606 Cherry Street, Springfield",
        profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
      },
      {
        id: 10,
        firstName: "Sophia",
        lastName: "Anderson",
        email: "sophia.anderson@example.com",
        phone: "890-123-4567",
        course: "Data Science",
        dateOfBirth: "1992-06-07",
        gender: "Female",
        address: "707 Poplar Lane, Springfield",
        profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
      },

    ];

    setStudents(mockStudents);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
        setSelectedStudent(null);
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

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/students/${id}`, { method: "DELETE" });
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setIsPopupOpen(true);
    setIsEditMode(false);
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setEditFormData(student);
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
    setStudents(
      students.map((student) =>
        student.id === editFormData.id ? editFormData : student
      )
    );
    setIsPopupOpen(false);
    setIsEditMode(false);
    setSelectedStudent(null);
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 sm:w-full w-80 ml-1">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
        All Students
      </h2>
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group m-4 md:mb-0">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
            <th className="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Name
            </th>

            <th className="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Email Address
            </th>
            <th className="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Mobile
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
          {students.map((student) => (
            <tr
              key={student.id}
              className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
            >
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
                {`${student.firstName} ${student.lastName}`}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>
                {student.email}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>
                {student.phone}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Course</span>
                {student.course}
              </td>
              <td className="p-1 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                <button
                  className="text-blue-500 hover:text-blue-700 mr-2"
                  onClick={() => handleViewDetails(student)}
                >
                  <FaEye />
                </button>
                <button
                  className="text-yellow-500 hover:text-yellow-700 mr-2"
                  onClick={() => handleEdit(student)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(student.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup for viewing/editing student details */}
      {isPopupOpen && selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 ">
          <div
            className="bg-white bg-opacity-10 backdrop-blur-md p-6 sm:p-6 lg:p-8 rounded-2xl shadow-lg max-w-xs sm:max-w-lg lg:max-w-2xl w-full mt-2 border border-white border-opacity-20 "
            ref={popupRef}
          >
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold mb-3 text-neutral-300 text-center">
              {isEditMode ? "Edit Student Details" : "Student Details"}
            </h3>
            <div className="bg-white bg-opacity-20 p-4 sm:p-6 lg:p-8 rounded-lg shadow-inner flex flex-col items-center sm:flex-row sm:items-start">
              {/* Profile Picture */}
              <img
                src={selectedStudent.profilePic}
                alt={`${selectedStudent.firstName} ${selectedStudent.lastName}`}
                className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full object-cover mb-2 sm:mb-0 sm:mr-5 border-2 border-white"
              />

              {/* Student Details */}
              {isEditMode ? (
                <div className="w-full">
                  <div className="mb-2">
                    <label className="block text-neutral-200 mb-2">First Name:</label>
                    <input
                      type="text"
                      name="firstName"
                      value={editFormData.firstName}
                      onChange={handleEditChange}
                      className="w-full p-2 rounded-lg text-gray-800"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-neutral-200 mb-2">Last Name:</label>
                    <input
                      type="text"
                      name="lastName"
                      value={editFormData.lastName}
                      onChange={handleEditChange}
                      className="w-full p-2 rounded-lg text-gray-800"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-neutral-200 mb-2">Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleEditChange}
                      className="w-full p-2 rounded-lg text-gray-800"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-neutral-200 mb-2">Phone:</label>
                    <input
                      type="text"
                      name="phone"
                      value={editFormData.phone}
                      onChange={handleEditChange}
                      className="w-full p-2 rounded-lg text-gray-800"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-neutral-200 mb-2">Course:</label>
                    <input
                      type="text"
                      name="course"
                      value={editFormData.course}
                      onChange={handleEditChange}
                      className="w-full p-2 rounded-lg text-gray-800"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-2"
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
                <div>
                  <div className="mb-2">
                    <span className="font-bold text-neutral-300">First Name: </span>
                    <span className="text-neutral-100">{selectedStudent.firstName}</span>
                  </div>
                  <div className="mb-2">
                    <span className="font-bold text-neutral-300">Last Name: </span>
                    <span className="text-neutral-100">{selectedStudent.lastName}</span>
                  </div>
                  <div className="mb-2">
                    <span className="font-bold text-neutral-300">Email: </span>
                    <span className="text-neutral-100">{selectedStudent.email}</span>
                  </div>
                  <div className="mb-2">
                    <span className="font-bold text-neutral-300">Phone: </span>
                    <span className="text-neutral-100">{selectedStudent.phone}</span>
                  </div>
                  <div className="mb-2">
                    <span className="font-bold text-neutral-300">Course: </span>
                    <span className="text-neutral-100">{selectedStudent.course}</span>
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

export default AllStudents;
