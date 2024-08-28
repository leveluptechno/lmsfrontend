// ContactForm.js
import React, { useState } from "react";
import GoogleMapsComponent from "../components/GoogleMapsComponent"; // Replace with correct path to GoogleMapsComponent
import contact from "../assets/images/contact.jpg";
// import ContactHero from "../assets/images/ContactHero.jpg";
import { Link } from "react-router-dom";

const ContactForm = ({ googleApiKey }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend or display message)
    console.log(formData);
    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="py-12">
          <div className="max-w-7xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            <h1 className="text-5xl font-bold text-center py-6">Contact Us</h1>
            {/* Contact Banner */}
            <div className="relative py-6">
              <img
                src={contact}
                alt="Contact Us Banner"
                className="w-[1000px] h-[400px] mx-auto object-cover"
              />
            </div>
            <h2 className="text-4xl font-bold text-center pb-5">
              Let’s Start a Conversation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 py-6">
              {/* Information Section */}
              <div className="space-y-6">
                <div className="mb-8">
                  <h4 className="text-3xl font-bold mb-2">
                    How We Can Help You:
                  </h4>
                  <p className="mb-4 ">
                    <span className="text-[#343A40] font-semibold text-lg">
                      Discover our platform's features and benefits.
                    </span>
                    <br />
                    <span className="text-[#6C757D] font-medium text-base">
                      Request a personalized demo of Learning Hubspot’s
                      educational consultancy services.
                    </span>
                  </p>
                  <p className="mb-4">
                    <span className="text-[#343A40] font-semibold text-lg">
                      Master your educational goals{" "}
                    </span>
                    <br />
                    <span className="text-[#6C757D] font-medium text-base">
                      From&nbsp;
                      <Link className="text-blue-500 hover:underline">
                        Learning Hubspot Academy courses
                      </Link>
                      &nbsp;to industry&nbsp;
                      <Link className="text-blue-500 hover:underline">
                        research
                      </Link>
                      &nbsp;and&nbsp;
                      <Link className="text-blue-500 hover:underline">
                        insights
                      </Link>
                      , learn how to excel in various educational programs
                      through our consultancy.
                    </span>
                  </p>
                  <p className="mb-8">
                    <span className="text-[#343A40] font-semibold text-lg">
                      Explore opportunities with Learning Hubspot
                    </span>
                    <br />
                    <p className="text-[#6C757D] font-medium text-base">
                      Search&nbsp;
                      <Link className="text-blue-500 hover:underline">
                        open positions
                      </Link>
                      , read about our company culture and values, and explore
                      our charitable initiatives.
                    </p>
                  </p>
                </div>

                <h4 className="text-3xl font-bold mb-4">Points of Contact</h4>
                <p className="mb-4">
                  <strong className="text-[#343A40] ">
                    Bhopal | Learning Hubspot
                  </strong>
                  <br />
                  <p className="text-[#6C757D] text-base">
                    SM-1 Mansarovar complex
                    <br />
                    MP Nagar, Bhopal
                  </p>
                </p>
                <p className="mb-4">
                  <strong className="text-[#343A40]">
                    Contact Number Inquiries
                  </strong>
                  <br />
                  +91 7894561230
                </p>
                <p className="mb-4">
                  <strong className="text-[#343A40]">
                    Information and Sales
                  </strong>
                  <br />
                  <Link className="text-blue-500 hover:underline">
                    contactleveluptechnologies@gmail.com
                  </Link>
                </p>
                <p className="mb-4">
                  <strong className="text-[#343A40]">Support</strong>
                  <br />
                  <Link className="text-blue-500 hover:underline">
                    contactleveluptechnologies@gmail.com
                  </Link>
                </p>
                <p className="mb-4">
                  <strong className="text-[#343A40]">
                    Verification of Employment
                  </strong>
                  <br />
                  <Link className="text-blue-500 hover:underline">
                    contactleveluptechnologies@gmail.com
                  </Link>
                </p>

                <h4 className="text-xl font-bold mb-4 text-[#343A40]">
                  Additional Office Locations
                </h4>
                <p>
                  <strong className="text-[#343A40]">Bhopal</strong>
                  <br />
                  SM-1 Mansarovar complex, MP Nagar, Bhopal
                </p>
              </div>

              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6 shadow-lg w-auto px-4 rounded-lg bg-gray-50"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 pt-12"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    required
                  >
                    <option value="">Select a department</option>
                    <option value="Admissions">Admissions</option>
                    <option value="Financial Aid">Financial Aid</option>
                    <option value="Academic Affairs">Academic Affairs</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Consultancy Inquiry">
                      Consultancy Inquiry
                    </option>
                    <option value="Career Counseling Inquiry">
                      Career Counseling Inquiry
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter the subject of your message"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message here"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 p-5">
          <GoogleMapsComponent apiKey={googleApiKey} />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
