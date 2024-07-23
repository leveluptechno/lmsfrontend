// ContactForm.js
import React, { useState } from "react";
import GoogleMapsComponent from "../components/GoogleMapsComponent"; // Replace with correct path to GoogleMapsComponent
import contact from "../assets/images/contact.jpg";

const ContactForm = ({ googleApiKey }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      message: "",
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <h2 className="text-3xl font-bold text-center py-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 py-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
            <div className="flex items-center justify-center">
              <img src={contact} alt="Contact Us" className="w-full md:max-w-sm rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 p-5 ">
        <GoogleMapsComponent apiKey={googleApiKey} />
      </div>
    </div>
  );
};

export default ContactForm;
