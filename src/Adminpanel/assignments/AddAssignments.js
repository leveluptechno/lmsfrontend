import React, { useState } from "react";
import { Button, Stack } from '@mui/material';

const AddAssignment = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the assignment by sending formData to your API
    console.log("Form submitted", formData);
    // Reset form
    setFormData({
      title: "",
      description: "",
      dueDate: "",
      course: "",
    });
  };

  return (
    <div className="p-4 bg-gray-200">
    <h2 className="text-2xl font-semibold mb-4">Add New Assignment</h2>
    <div className="bg-gray-100 shadow-md rounded-lg p-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            type="description"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dueDate">
          Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
          Course
          </label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        


        <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
          <Stack spacing={4} direction="row">
            <Button variant="contained" type="submit">
              Add Course
            </Button>
          </Stack>
        </div>
      </form>
    </div>
  </div>
  );
};

export default AddAssignment;
