import React from "react";
import { Link } from "react-router-dom";
import steve from "../assets/images/steve.jpg";
import emily from "../assets/images/emily.jpg";
import jackson from "../assets/images/jakson.jpg";
import mitchell from "../assets/images/micthell.jpg";
import { motion } from "framer-motion";
import { FaSearch, FaBookmark, FaBook, FaArrowRight } from "react-icons/fa";

const DoctorCard = ({ image, name, title, description }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white rounded-lg overflow-hidden shadow-lg w-full md:w-64 lg:w-72 transition-all duration-300"
  >
    <div className="h-48 md:h-56 lg:h-64 bg-cover bg-center">
      <img src={image} alt={name} className="h-full w-full object-cover" />
    </div>
    <div className="p-6">
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-blue-800">
        {name}
      </h2>
      <p className="text-yellow-600 font-semibold mb-4">{title}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const HowItWorksItem = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-start mb-8 bg-white p-6 rounded-lg shadow-md"
  >
    <div className="bg-blue-100 rounded-full w-14 h-14 flex justify-center items-center mr-4">
      <Icon className="text-blue-600 text-2xl" />
    </div>
    <div>
      <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-800">
        {title}
      </h2>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const FieldCard = ({ field, title }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg p-6 text-center w-full md:w-60 lg:w-64 h-auto flex flex-col items-center shadow-lg"
  >
    <p className="text-blue-800 font-bold text-xl md:text-2xl mb-3">{field}</p>
    <h2 className="text-lg md:text-base mb-5 text-gray-600">{title}</h2>
    <div className="mt-auto">
      <Link
        to="#"
        className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition duration-300 flex items-center"
      >
        Learn More <FaArrowRight className="ml-2" />
      </Link>
    </div>
  </motion.div>
);

const Resource = () => {
  const doctors = [
    {
      image: steve,
      name: "Dr. Steve Johnson",
      title: "Surgeon",
      description: "A distinguished surgeon with over 15 years of experience.",
    },
    {
      image: emily,
      name: "Dr. Emily Chen",
      title: "General Practitioner",
      description:
        "Dedicated to compassionate patient care and holistic health.",
    },
    {
      image: jackson,
      name: "Dr. Jackson Lee",
      title: "Cardiologist",
      description:
        "Committed to excellence in cardiovascular health and research.",
    },
    {
      image: mitchell,
      name: "Dr. Michelle Taylor",
      title: "Pediatrician",
      description: "Passionate about children's health and developmental care.",
    },
  ];

  const howItWorksSteps = [
    {
      icon: FaSearch,
      title: "Search Your Favorite Topic",
      description:
        "Explore our vast library of medical resources to find the information you need.",
    },
    {
      icon: FaBookmark,
      title: "Bookmark & Save for Later",
      description:
        "Save important articles and resources for quick access when you need them.",
    },
    {
      icon: FaBook,
      title: "Read & Learn",
      description:
        "Dive into expert-curated content and enhance your medical knowledge.",
    },
  ];

  const fields = [
    { field: "Medicine", title: "Expert Medical Guidance" },
    { field: "Research", title: "Cutting-edge Studies" },
    { field: "Education", title: "Continuing Medical Education" },
    { field: "Technology", title: "Healthcare Innovation" },
  ];

  return (
    <div className="bg-gray-50 text-black font-sans">
      <section className="py-16 bg-gradient-to-r from-[#3498db] to-[#2c3e50]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
            Expert Resources for Medical Professionals
          </h1>
          <p className="text-xl text-center text-white max-w-3xl mx-auto">
            Access a wealth of knowledge from leading experts in various medical
            fields.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">
            Meet Our Experts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} {...doctor} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">
            How It Works
          </h2>
          <div className="space-y-8">
            {howItWorksSteps.map((step, index) => (
              <HowItWorksItem key={index} {...step} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-2xl md:text-3xl text-blue-800 font-semibold mb-8">
              Ready to Expand Your Knowledge?
            </p>
            <Link
              to="/courses"
              className="bg-blue-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center"
            >
              Explore Our Courses <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">
            Explore Our Fields of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {fields.map((field, index) => (
              <FieldCard key={index} {...field} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resource;
