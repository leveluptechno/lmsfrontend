import React, { useState } from "react";
import Education from "../assets/images/Education.png";
// Dummy data for college predictions
const dummyColleges = [
  {
    name: "All India Institute of Medical Sciences (AIIMS)",
    location: "New Delhi",
    cutOffRank: 50,
    seats: 107,
    state: "Delhi",
    course: "MBBS",
    categories: ["General", "OBC", "SC", "ST"],
  },
  {
    name: "Christian Medical College (CMC)",
    location: "Vellore",
    cutOffRank: 100,
    seats: 100,
    state: "Tamil Nadu",
    course: "MBBS",
    categories: ["General", "OBC", "SC", "ST"],
  },
  {
    name: "Armed Forces Medical College (AFMC)",
    location: "Pune",
    cutOffRank: 200,
    seats: 150,
    state: "Maharashtra",
    course: "MBBS",
    categories: ["General", "OBC", "SC", "ST"],
  },
  {
    name: "Maulana Azad Medical College",
    location: "New Delhi",
    cutOffRank: 300,
    seats: 250,
    state: "Delhi",
    course: "MBBS",
    categories: ["General", "OBC", "SC", "ST"],
  },
  {
    name: "King George's Medical University",
    location: "Lucknow",
    cutOffRank: 400,
    seats: 250,
    state: "Uttar Pradesh",
    course: "MBBS",
    categories: ["General", "OBC", "SC", "ST"],
  },
  {
    name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
    location: "Puducherry",
    cutOffRank: 500,
    seats: 200,
    state: "Puducherry",
    course: "MBBS",
    categories: ["General", "OBC", "SC", "ST"],
  },
  {
    name: "Seth G.S. Medical College",
    location: "Mumbai",
    cutOffRank: 600,
    seats: 180,
    state: "Maharashtra",
    course: "MBBS",
    categories: ["General", "OBC", "SC", "ST"],
  },
  {
    name: "Grant Medical College and Sir J.J. Group of Hospitals",
    location: "Mumbai",
    cutOffRank: 700,
    seats: 200,
    state: "Maharashtra",
    course: "MBBS",
    categories: ["General", "OBC", "SC", "ST"],
  },
  {
    name: "Madras Medical College",
    location: "Chennai",
    cutOffRank: 800,
    seats: 250,
    state: "Tamil Nadu",
    course: "BDS",
    categories: ["General", "OBC", "SC", "ST"],
  },
  {
    name: "Institute of Medical Sciences, Banaras Hindu University",
    location: "Varanasi",
    cutOffRank: 900,
    seats: 180,
    state: "Uttar Pradesh",
    course: "MBBS",
    categories: ["General", "OBC", "SC", "ST"],
  },
  {
    name: "Government Medical College",
    location: "Kozhikode",
    cutOffRank: 1000,
    seats: 250,
    state: "Kerala",
    course: "MBBS",
    categories: ["General", "OBC", "SC", "ST"],
  },
  {
    name: "B.J. Medical College",
    location: "Ahmedabad",
    cutOffRank: 1100,
    seats: 250,
    state: "Gujarat",
    course: "BAMS",
    categories: ["General", "OBC", "SC", "ST"],
  },
  {
    name: "Kasturba Medical College",
    location: "Manipal",
    cutOffRank: 1200,
    seats: 250,
    state: "Karnataka",
    course: "MBBS",
    categories: ["General", "OBC", "SC", "ST"],
  },
  {
    name: "Stanley Medical College",
    location: "Chennai",
    cutOffRank: 1300,
    seats: 250,
    state: "Tamil Nadu",
    course: "MBBS",
    categories: ["General", "OBC", "SC", "ST"],
  },
  {
    name: "Government Medical College",
    location: "Thiruvananthapuram",
    cutOffRank: 1400,
    seats: 200,
    state: "Kerala",
    course: "BHMS",
    categories: ["General", "OBC", "SC", "ST"],
  },
  {
    name: "Netaji Subhash Chandra Bose Medical College",
    location: "Jabalpur",
    cutOffRank: 1500,
    seats: 250,
    state: "Madhya Pradesh",
    course: "MBBS",
    categories: ["General", "OBC", "SC", "ST"],
  },
];

function CollegePredictorForm() {
  const [formData, setFormData] = useState({
    rank: "",
    category: "",
    state: "",
    courseApplicationNo: "",
    dob: "",
    phoneNo: "",
    course: "",
  });

  const [colleges, setColleges] = useState([]);
  const [showColleges, setShowColleges] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setShowColleges(false); // Hide colleges when any field changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const { rank, category, state, course, courseApplicationNo, dob, phoneNo } =
      formData;
    if (
      !rank ||
      !category ||
      !state ||
      !course ||
      !courseApplicationNo ||
      !dob ||
      !phoneNo
    ) {
      setFormError("Please fill all the fields.");
      setShowColleges(false);
      return;
    }

    setFormError("");
    const rankNum = parseInt(rank);
    const filteredColleges = dummyColleges.filter(
      (college) => college.cutOffRank >= rankNum
      //   &&
      //     college.state === state &&
      //     college.course === course &&
      //     college.categories.includes(category)
    );
    setColleges(filteredColleges.slice(0, 5)); // Show top 5 matches
    setShowColleges(true);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="flex-1 p-8 lg:p-16">
        <img
          src={Education}
          alt="College Predictor"
          className="w-full h-auto object-contain rounded-lg shadow-lg mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
          NEET College Predictor 2024
        </h1>
        <p className="text-xl text-indigo-700">
          Predict your colleges based on NEET marks and ranks with precision.
        </p>
      </div>
      <div className="flex-1 bg-white p-8 lg:p-16 rounded-tl-3xl rounded-bl-3xl shadow-2xl">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8">
          College Predictor
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="Rank"
            name="rank"
            value={formData.rank}
            onChange={handleChange}
            placeholder="Enter your rank"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DropdownField
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              options={["General", "OBC", "SC", "ST"]}
            />
            <DropdownField
              label="Course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              options={["MBBS", "BDS", "BAMS", "BHMS"]}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DropdownField
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              options={[
                "Delhi",
                "Tamil Nadu",
                "Maharashtra",
                "Uttar Pradesh",
                "Karnataka",
                "Kerala",
                "West Bengal",
                "Gujarat",
                "Puducherry",
                "Madhya Pradesh",
              ]}
            />
            <InputField
              label="Application No."
              name="courseApplicationNo"
              value={formData.courseApplicationNo}
              onChange={handleChange}
              placeholder="Enter application number"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Date of Birth"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
            />
            <InputField
              label="Phone Number"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>
          <div className="flex items-center mt-6">
            <input
              type="checkbox"
              id="notRobot"
              className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="notRobot" className="ml-2 text-sm text-gray-700">
              I'm not a robot
            </label>
          </div>
          {formError && (
            <p className="text-red-500 text-center font-medium">{formError}</p>
          )}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out font-semibold text-lg shadow-md"
          >
            Predict Colleges
          </button>
        </form>

        <div className="mt-12">
          {showColleges && colleges.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">
                Predicted Colleges
              </h2>
              {colleges.map((college, index) => (
                <div
                  key={index}
                  className="p-6 border border-indigo-200 rounded-lg bg-white hover:bg-indigo-50 transition duration-300 ease-in-out shadow-md"
                >
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                    {college.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{college.location}</p>
                  <p className="text-indigo-900 font-medium mb-1">
                    Cut-off Rank: {college.cutOffRank}
                  </p>
                  <p className="text-gray-700">Seats: {college.seats}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <footer className="text-center mt-12">
          <p className="text-gray-500">
            © {new Date().getFullYear()} NEET College Predictor | All Rights
            Reserved
          </p>
        </footer>
      </div>
    </div>
  );
}

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out shadow-sm"
        placeholder={placeholder}
      />
    </div>
  );
}

function DropdownField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out shadow-sm"
      >
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CollegePredictorForm;
