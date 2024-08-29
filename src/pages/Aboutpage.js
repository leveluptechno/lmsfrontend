import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

import teamImage1 from "../assets/images/man.png";
import teamImage2 from "../assets/images/woman.jpg";
import teamImage3 from "../assets/images/man1.png";
import historyImage from "../assets/images/historyimages.png";
import chooseUsImage from "../assets/images/whychooseus.png";
import {
  FaUserMd,
  FaGraduationCap,
  FaStethoscope,
  FaClipboardCheck,
  FaUserTie,
  FaComments,
  FaChartLine,
} from "react-icons/fa";

const AboutPage = () => {
  const teamMembers = [
    {
      image: teamImage1,
      name: "Dr. John Doe",
      role: "Founder & Medical Director",
      description:
        "Dr. John is a board-certified physician with over 20 years of experience in medical education and admissions counseling.",
      socialLinks: [
        { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/johndoe" },
        { icon: "fab fa-twitter", url: "https://twitter.com/johndoe" },
      ],
    },
    {
      image: teamImage2,
      name: "Dr. Jane Smith",
      role: "Chief Admissions Consultant",
      description:
        "Dr. Jane specializes in medical school admissions and has helped hundreds of students secure spots in top medical programs.",
      socialLinks: [
        {
          icon: "fab fa-linkedin",
          url: "https://www.linkedin.com/in/janesmith",
        },
        { icon: "fab fa-facebook", url: "https://www.facebook.com/janesmith" },
      ],
    },
    {
      image: teamImage3,
      name: "Dr. Robert Brown",
      role: "Senior Medical Career Advisor",
      description:
        "Dr. Robert brings extensive experience in medical residency placements and career counseling for aspiring physicians.",
      socialLinks: [
        {
          icon: "fab fa-linkedin",
          url: "https://www.linkedin.com/in/robertbrown",
        },
        {
          icon: "fab fa-instagram",
          url: "https://www.instagram.com/robertbrown",
        },
      ],
    },
  ];

  const missionStatement =
    "At MedConsult Pro, our mission is to guide and empower aspiring medical professionals throughout their educational journey. We are committed to providing expert consultancy services, personalized mentorship, and comprehensive support to help our clients achieve their goals in the competitive field of medicine.";

  const testimonials = [
    {
      text: "MedConsult Pro's guidance was invaluable in helping me secure a competitive residency position. Their insights into the application process were spot-on.",
      author: "Dr. Sarah Johnson",
      role: "First-year Resident, Internal Medicine",
    },
    {
      text: "As a hospital administrator, I found MedConsult Pro's advice on policy implementation and staff development to be transformative for our institution.",
      author: "Michael Chen",
      role: "Hospital CEO",
    },
    {
      text: "The MCAT preparation strategies provided by MedConsult Pro were crucial to my success. I improved my score significantly and got into my dream medical school.",
      author: "Emily Rodriguez",
      role: "First-year Medical Student",
    },
    {
      text: "MedConsult Pro's career counseling helped me transition from clinical practice to healthcare management. Their expertise in diverse medical career paths is unparalleled.",
      author: "Dr. James Lee",
      role: "Healthcare Consultant",
    },
    {
      text: "The mock interviews conducted by MedConsult Pro were incredibly realistic and helped me feel confident during my actual medical school interviews.",
      author: "Alex Patel",
      role: "Incoming Medical Student",
    },
    {
      text: "MedConsult Pro's guidance throughout my fellowship application process was exceptional. Their attention to detail and personalized approach made all the difference.",
      author: "Dr. Maria Sanchez",
      role: "Cardiology Fellow",
    },
  ];

  const whyChooseUs = [
    {
      icon: "fas fa-user-md",
      text: "Expert guidance from experienced physicians",
    },
    {
      icon: "fas fa-graduation-cap",
      text: "Comprehensive medical school admissions support",
    },
    {
      icon: "fas fa-stethoscope",
      text: "Specialized residency application assistance",
    },
    {
      icon: "fas fa-clipboard-check",
      text: "Personalized MCAT preparation strategies",
    },
    { icon: "fas fa-user-tie", text: "Medical career planning and counseling" },
    {
      icon: "fas fa-comments",
      text: "Mock interviews with feedback from medical professionals",
    },
    {
      icon: "fas fa-chart-line",
      text: "Proven track record of client success",
    },
  ];

  return (
    <>
      <p className="bg-blue-50 pt-3"></p>
      <div className="bg-blue-50 py-20 px-4 md:px-10 lg:px-20">
        <MissionStatement missionStatement={missionStatement} />
        <TeamSection teamMembers={teamMembers} />
        <HistorySection />
        <WhyChooseUsSection whyChooseUs={whyChooseUs} />
        <TestimonialsSection testimonials={testimonials} />
        <CallToAction />
      </div>
    </>
  );
};

const MissionStatement = ({ missionStatement }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg shadow-lg mb-16 text-white"
  >
    <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
    <p className="text-lg leading-relaxed">{missionStatement}</p>
  </motion.section>
);

const TeamSection = ({ teamMembers }) => (
  <section className="mb-16">
    <h2 className="text-4xl font-bold mb-8 text-blue-800 text-center">
      Meet Our Expert Team
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  </section>
);

const TeamMember = ({ image, name, role, description, socialLinks }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
  >
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mb-4 object-cover"
    />
    <h3 className="text-xl font-bold mb-2 text-blue-800">{name}</h3>
    <p className="text-lg text-blue-600 mb-4">{role}</p>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex space-x-4 mt-4">
      {socialLinks.map((link, linkIndex) => (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          key={linkIndex}
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
        >
          <i className={`${link.icon} text-xl`} />
        </a>
      ))}
    </div>
  </motion.div>
);

const HistorySection = () => (
  <section className="mb-16">
    <h2 className="text-4xl font-bold mb-8 text-blue-800 text-center py-4">
      Our Journey in Medical Consultancy
    </h2>
    <div className="flex flex-col md:flex-row justify-center items-center">
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        src={historyImage}
        alt="Our History"
        className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-6 md:mb-0 md:mr-8"
      />
      <div className="md:w-2/3">
        <p className="text-lg text-gray-700 mb-4">
          Founded in 2005, MedConsult Pro has been at the forefront of medical
          education consultancy. Our journey began with a vision to bridge the
          gap between aspiring medical professionals and their dream careers.
        </p>
        <p className="text-lg text-gray-700">
          Over the years, we've guided thousands of students through medical
          school admissions, helped countless residents secure their ideal
          placements, and advised numerous physicians on career advancement. Our
          commitment to excellence and personalized guidance has made us a
          trusted name in the medical community.
        </p>
      </div>
    </div>
  </section>
);

const WhyChooseUsSection = () => {
  const whyChooseUs = [
    {
      icon: <FaUserMd />,
      text: "Expert guidance from experienced physicians",
    },
    {
      icon: <FaGraduationCap />,
      text: "Comprehensive medical school admissions support",
    },
    {
      icon: <FaStethoscope />,
      text: "Specialized residency application assistance",
    },
    {
      icon: <FaClipboardCheck />,
      text: "Personalized MCAT preparation strategies",
    },
    {
      icon: <FaUserTie />,
      text: "Medical career planning and counseling",
    },
    {
      icon: <FaComments />,
      text: "Mock interviews with feedback from medical professionals",
    },
    {
      icon: <FaChartLine />,
      text: "Proven track record of client success",
    },
  ];

  return (
    <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-8 text-blue-800 text-center">
        Why Choose MedConsult Pro
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={chooseUsImage}
          alt="Why Choose Us"
          className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-6 md:mb-0 md:mr-8"
        />
        <ul className="md:w-2/3 list-none pl-0 text-lg text-gray-700">
          {whyChooseUs.map((item, index) => (
            <li key={index} className="mb-4 flex items-start">
              <span className="text-blue-600 mr-3 text-xl">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-blue-800 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ text, author, role, rating }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
  >
    <div className="flex-grow">
      <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
      <p className="text-gray-700 mb-4 italic">{text}</p>
      <FaQuoteRight className="text-blue-500 text-3xl ml-auto" />
    </div>
    <div className="mt-4">
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-yellow-400 ${
              i < rating ? "opacity-100" : "opacity-30"
            }`}
          />
        ))}
      </div>
      <p className="font-semibold text-gray-800">{author}</p>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  </motion.div>
);

const CallToAction = () => (
  <section className="mb-16 text-center">
    <h2 className="text-4xl font-bold mb-8 text-blue-800">
      Start Your Medical Journey with Us
    </h2>
    <p className="text-lg text-gray-700 mb-6">
      Take the first step towards your dream medical career. Schedule a
      consultation with our expert advisors to discuss your goals and create a
      personalized plan for success.
    </p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-300"
    >
      Schedule a Consultation
    </motion.button>
  </section>
);

export default AboutPage;
