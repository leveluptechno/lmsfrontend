import React, { useState, useEffect, useRef } from "react";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";

const AllTrainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const popupRef = useRef(null);

  useEffect(() => {
    // Fetch trainers data from an API or a mock data source
    // For now, we'll use mock data
    const mockTrainers = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        gender: "Male",
        dateOfBirth: "1980-05-15",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        address: "123 Elm Street, Springfield",
        education: "M.Sc. in Computer Science",
        specialization: "Full Stack Development",
        experience: "10 years",
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        gender: "Female",
        dateOfBirth: "1985-08-22",
        email: "jane.smith@example.com",
        phone: "098-765-4321",
        address: "456 Maple Avenue, Springfield",
        education: "Ph.D. in Data Science",
        specialization: "Machine Learning",
        experience: "8 years",
        profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        id: 3,
        firstName: "Mark",
        lastName: "Johnson",
        gender: "Male",
        dateOfBirth: "1979-12-10",
        email: "mark.johnson@example.com",
        phone: "567-890-1234",
        address: "789 Oak Lane, Springfield",
        education: "B.Sc. in Information Technology",
        specialization: "Cybersecurity",
        experience: "12 years",
        profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        id: 4,
        firstName: "Emily",
        lastName: "Davis",
        gender: "Female",
        dateOfBirth: "1987-07-18",
        email: "emily.davis@example.com",
        phone: "234-567-8901",
        address: "101 Pine Street, Springfield",
        education: "M.A. in Educational Technology",
        specialization: "Instructional Design",
        experience: "6 years",
        profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        id: 5,
        firstName: "Michael",
        lastName: "Brown",
        gender: "Male",
        dateOfBirth: "1982-11-05",
        email: "michael.brown@example.com",
        phone: "345-678-9012",
        address: "202 Cedar Avenue, Springfield",
        education: "M.Sc. in Network Engineering",
        specialization: "Networking",
        experience: "9 years",
        profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        id: 6,
        firstName: "Sarah",
        lastName: "Wilson",
        gender: "Female",
        dateOfBirth: "1990-03-29",
        email: "sarah.wilson@example.com",
        phone: "456-789-0123",
        address: "303 Birch Lane, Springfield",
        education: "M.Sc. in Artificial Intelligence",
        specialization: "AI and Robotics",
        experience: "7 years",
        profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
      },
      {
        id: 7,
        firstName: "David",
        lastName: "Lee",
        gender: "Male",
        dateOfBirth: "1984-09-15",
        email: "david.lee@example.com",
        phone: "567-890-1234",
        address: "404 Spruce Street, Springfield",
        education: "Ph.D. in Computer Science",
        specialization: "Software Engineering",
        experience: "11 years",
        profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        id: 8,
        firstName: "Jessica",
        lastName: "Taylor",
        gender: "Female",
        dateOfBirth: "1986-02-10",
        email: "jessica.taylor@example.com",
        phone: "678-901-2345",
        address: "505 Palm Avenue, Springfield",
        education: "M.Sc. in Data Analytics",
        specialization: "Data Science",
        experience: "8 years",
        profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
      },
      {
        id: 9,
        firstName: "Robert",
        lastName: "Martin",
        gender: "Male",
        dateOfBirth: "1978-01-20",
        email: "robert.martin@example.com",
        phone: "789-012-3456",
        address: "606 Cherry Street, Springfield",
        education: "M.Sc. in Cybersecurity",
        specialization: "Ethical Hacking",
        experience: "15 years",
        profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
      },
      {
        id: 10,
        firstName: "Sophia",
        lastName: "Anderson",
        gender: "Female",
        dateOfBirth: "1989-06-07",
        email: "sophia.anderson@example.com",
        phone: "890-123-4567",
        address: "707 Poplar Lane, Springfield",
        education: "M.A. in Educational Leadership",
        specialization: "Curriculum Development",
        experience: "5 years",
        profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
      },
    ];
    setTrainers(mockTrainers);
  }, []);

  //Function for close while clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
        setSelectedTrainer(null);
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


  // Function for deleting trainer
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/trainers/${id}`, { method: "DELETE" });
      setTrainers(trainers.filter((trainer) => trainer.id !== id));
    } catch (error) {
      console.error("Error deleting Trainer:", error);
    }
  };

  // Function for View Details of trainer
  const handleViewDetails = (trainer) => {
    setSelectedTrainer(trainer);
    setIsPopupOpen(true);
    setIsEditMode(false);
  };

  // Function for editing trainer details
  const handleEdit = (trainer) => {
    setSelectedTrainer(trainer);
    setEditFormData(trainer);
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
    setTrainers(
      trainers.map((trainer) =>
        trainer.id === editFormData.id ? editFormData : trainer
      )
    );
    setIsPopupOpen(false);
    setIsEditMode(false);
    setSelectedTrainer(null);
  };


  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 sm:w-full w-80 ml-1">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
        All Trainers
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
            Specialization
            </th>
            <th className="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {trainers.map((trainer) => (
            <tr
              key={trainer.id}
              className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
            >
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
                {`${trainer.firstName} ${trainer.lastName}`}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>
                {trainer.email}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>
                {trainer.phone}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Specialization</span>
                {trainer.specialization}
              </td>
              <td className="p-1 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                <button
                  className="text-blue-500 hover:text-blue-700 mr-2"
                  onClick={() => handleViewDetails(trainer)}
                >
                  <FaEye />
                </button>
                <button
                  className="text-yellow-500 hover:text-yellow-700 mr-2"
                  onClick={() => handleEdit(trainer)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(trainer.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup for viewing/editing trainer details */}
      {isPopupOpen && selectedTrainer && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 overflow-y-auto">
    <div
      className="bg-white bg-opacity-10 backdrop-blur-md p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg max-w-xs sm:max-w-lg lg:max-w-3xl w-full my-auto  sm:mx-6 lg:mx-auto border border-white border-opacity-20"
      ref={popupRef}
    >
      <h3 className="text-base sm:text-xl lg:text-xl font-bold mb-2 text-neutral-300 text-center">
        {isEditMode ? "Edit Trainer Details" : "Trainer Details"}
      </h3>
      <div className="bg-white bg-opacity-20 p-2 sm:p-4 lg:p-6 rounded-lg shadow-inner flex flex-col items-center sm:flex-row sm:items-start">
        {/* Profile Picture */}
        <img
          src={selectedTrainer.profilePic}
          alt={`${selectedTrainer.firstName} ${selectedTrainer.lastName}`}
          className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full object-cover mb-3 sm:mb-0 sm:mr-6 lg:mr-8 border-2 border-white"
        />

        {/* Trainer Details */}
        {isEditMode ? (
          <div className="w-full space-y-1">
            <div>
              <label className="block text-neutral-200 mb-0">First Name:</label>
              <input
                type="text"
                name="firstName"
                value={editFormData.firstName}
                onChange={handleEditChange}
                className="w-full p-1 rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="block text-neutral-200 mb-0">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={editFormData.lastName}
                onChange={handleEditChange}
                className="w-full p-1 rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="block text-neutral-200 mb-0">Gender:</label>
              <input
                type="text"
                name="gender"
                value={editFormData.gender}
                onChange={handleEditChange}
                className="w-full p-1 rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="block text-neutral-200 mb-0">D.O.B:</label>
              <input
                type="text"
                name="dateOfBirth"
                value={editFormData.dateOfBirth}
                onChange={handleEditChange}
                className="w-full p-1 rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="block text-neutral-200 mb-0">Email:</label>
              <input
                type="email"
                name="email"
                value={editFormData.email}
                onChange={handleEditChange}
                className="w-full p-1 rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="block text-neutral-200 mb-0">Phone:</label>
              <input
                type="text"
                name="phone"
                value={editFormData.phone}
                onChange={handleEditChange}
                className="w-full p-1 rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="block text-neutral-200 mb-0">Address:</label>
              <input
                type="text"
                name="address"
                value={editFormData.address}
                onChange={handleEditChange}
                className="w-full p-1 rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="block text-neutral-200 mb-0">Education:</label>
              <input
                type="text"
                name="education"
                value={editFormData.education}
                onChange={handleEditChange}
                className="w-full p-1 rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="block text-neutral-200 mb-0">Specialization:</label>
              <input
                type="text"
                name="specialization"
                value={editFormData.specialization}
                onChange={handleEditChange}
                className="w-full p-1 rounded-lg text-gray-800"
              />
            </div>
            <div>
              <label className="block text-neutral-200 mb-0">Experience:</label>
              <input
                type="text"
                name="experience"
                value={editFormData.experience}
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
              <span className="font-bold text-neutral-300">First Name: </span>
              <span className="text-neutral-100">{selectedTrainer.firstName}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-300">Last Name: </span>
              <span className="text-neutral-100">{selectedTrainer.lastName}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-300">Gender: </span>
              <span className="text-neutral-100">{selectedTrainer.gender}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-300">D.O.B: </span>
              <span className="text-neutral-100">{selectedTrainer.dateOfBirth}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-300">Email: </span>
              <span className="text-neutral-100">{selectedTrainer.email}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-300">Phone: </span>
              <span className="text-neutral-100">{selectedTrainer.phone}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-300">Address: </span>
              <span className="text-neutral-100">{selectedTrainer.address}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-300">Education: </span>
              <span className="text-neutral-100">{selectedTrainer.education}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-300">Specialization: </span>
              <span className="text-neutral-100">{selectedTrainer.specialization}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-300">Experience: </span>
              <span className="text-neutral-100">{selectedTrainer.experience}</span>
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

export default AllTrainers;
