import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import FullStack from "../assets/images/FullStack.png";
import instructor from "../assets/images/instructor.png";
import instructor1 from "../assets/images/woman.png";
import { mockCourseData } from "./mockCourseData";
import {
  FaStar,
  FaCheck,
  FaClock,
  FaUsers,
  FaBook,
  FaQuoteLeft,
} from "react-icons/fa";

// Course Page Component
const CoursePage = ({ courseData, onEnrollClick }) => (
  <div className="p-4 sm:p-8 rounded-lg bg-blue-200 bg-opacity-25 min-h-[380px]">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {courseData.title}
        </h1>
      </div>
      <p className="text-gray-700 mb-4 text-base sm:text-lg">
        {courseData.description}
      </p>
      <div className="flex items-center space-x-3 mb-6">
        <img
          src={instructor}
          alt="Instructor"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
        />
        <img
          src={instructor1}
          alt="Instructor"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
        />
        <Link
          to="#"
          className="text-black hover:text-blue-800 font-semibold text-sm sm:text-base"
        >
          {courseData.instructors.join(", ")}
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <button
          onClick={onEnrollClick}
          className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition drop-shadow-xl mb-4 sm:mb-0"
        >
          Enroll Starts Aug 8
        </button>
        <p className="text-gray-600 text-sm sm:text-base">
          <FaUsers className="inline mr-2" />
          {courseData.enrollmentCount.toLocaleString()} already enrolled
        </p>
      </div>
    </div>
  </div>
);

const CourseStats = ({ stats }) => (
  <section className="-mt-4 sm:-mt-14 bg-blue-200 bg-opacity-5 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="bg-gray-50 rounded-lg shadow drop-shadow-xl p-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center">
            <FaBook className="text-3xl text-blue-600 mx-auto mb-2" />
            <span className="block text-lg font-semibold">
              {stats.courseSeries}
            </span>
            <p className="text-sm text-gray-600">
              Comprehensive career credential
            </p>
          </div>
          <div className="text-center border-l-2 border-gray-500">
            <FaStar className="text-3xl text-yellow-400 mx-auto mb-2" />
            <span className="block text-lg font-semibold">{stats.rating}</span>
            <p className="text-sm text-gray-600">
              ({stats.reviews.toLocaleString()} reviews)
            </p>
          </div>
          <div className="text-center border-l-2 border-gray-500 max-[500px]:border-l-0">
            <FaUsers className="text-3xl text-green-600 mx-auto mb-2" />
            <span className="block text-lg font-semibold">{stats.level}</span>
            <p className="text-sm text-gray-600">
              No prior experience required
            </p>
          </div>
          <div className="text-center border-l-2 border-gray-500">
            <FaClock className="text-3xl text-purple-600 mx-auto mb-2" />
            <span className="block text-lg font-semibold">
              Flexible schedule
            </span>
            <p className="text-sm text-gray-600">{stats.duration}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Course Details About Component
const CourseDetailsAbout = ({ aboutData }) => (
  <div className="max-w-8xl mx-auto px-4 py-5">
    <section className="mb-12 drop-shadow-lg">
      <h2 className="text-3xl font-bold mb-6">What you'll learn</h2>
      <ul className="space-y-4">
        {aboutData.learningOutcomes.map((item, index) => (
          <li key={index} className="flex items-start">
            <FaCheck className="text-green-600 mt-1 mr-3 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>

    <section className="pb-3">
      <h2 className="text-3xl font-bold mb-6">Skills you'll gain</h2>
      <div className="flex flex-wrap gap-3">
        {aboutData.skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium drop-shadow-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  </div>
);

// Course Component with Dropdowns for Description and Skills
const Course = ({
  title,
  hours,
  rating,
  ratingsCount,
  description,
  skills,
  Course,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 p-4 sm:p-6 rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-semibold flex justify-between items-center">
        {title}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-600 focus:outline-none"
        >
          {isOpen ? "−" : "+"}
        </button>
      </h3>
      <p className="text-gray-600">
        {Course} • {hours} hours • {rating}{" "}
        <span className="text-blue-700">★{""} </span>({ratingsCount} ratings)
      </p>
      {isOpen && (
        <>
          <div className="mt-4">
            <h4 className="text-md font-semibold mb-2">What You'll Learn</h4>
            <ul className="list-disc list-inside pl-5 space-y-2">
              {description.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="text-md font-semibold mb-2">Skills You'll Gain</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-2 py-1 rounded text-sm text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Course Description Component
const CourseDescription = ({ courses }) => (
  <div className="max-w-8xl mx-auto px-4 py-12">
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold mb-6">
        Professional Certificate - 12 course series
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Embark on a transformative journey into the world of software
        development. This comprehensive program equips you with cutting-edge
        skills in front-end, back-end, and cloud-native application development,
        preparing you for a rewarding career in just 4 months.
      </p>
    </div>
    <div className="space-y-6">
      {courses.map((course) => (
        <Course key={course.title} {...course} />
      ))}
    </div>
  </div>
);

// Outcome Component
const Outcome = ({ outcomeData }) => (
  <div className="max-w-8xl mx-auto px-4 py-8 sm:py-12">
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-6">
          Launch Your Career in Cloud Application Development
        </h2>
        <ul className="space-y-4">
          {outcomeData.careerOutcomes.map((item, index) => (
            <li key={index} className="flex items-start">
              <FaCheck className="text-green-600 mt-1 mr-3 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 md:pl-8">
        <img
          src={FullStack}
          alt="Career Prep"
          className="rounded-lg shadow-lg mb-6"
        />
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg shadow">
            <span className="block text-2xl font-bold text-blue-600">
              {outcomeData.salaryInfo.median}
            </span>
            <span className="text-gray-600">median U.S. salary</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <span className="block text-2xl font-bold text-green-600">
              {outcomeData.salaryInfo.jobOpenings}
            </span>
            <span className="text-gray-600">U.S. job openings</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialCard = ({ name, role, company, content, rating }) => (
  <div className="flex-none w-full md:w-1/3 p-4">
    <div className="bg-gradient-to-r from-white via-blue-50 to-blue-100 p-6 rounded-lg shadow-lg border-t-4 border-blue-600 transition-transform transform hover:scale-105 hover:shadow-2xl h-full">
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4 shadow-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="font-semibold text-xl text-blue-900">{name}</h3>
          <p className="text-gray-600 text-sm">
            {role} at {company}
          </p>
        </div>
      </div>
      <div className="mb-4 text-gray-700">
        <FaQuoteLeft className="text-blue-500 mb-2" />
        <p className="italic">{content}</p>
      </div>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = ({ testimonials }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: scrollRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-5 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
        What Our Students Say
      </h2>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hidden snap-x snap-mandatory w-full"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

// Popup Component
const Popup = ({ show, onClose }) => {
  const [selectedDuration, setSelectedDuration] = useState(null);

  if (!show) return null;

  // Content for different durations
  const getContentForDuration = (duration) => {
    switch (duration) {
      case "1 month":
        return {
          timeEstimate: "20+ hours/week",
          monthlyCost: "₹4,091",
          totalCost: "₹4,091",
        };
      case "3 months":
        return {
          timeEstimate: "17 hours/week",
          monthlyCost: "₹2,727",
          totalCost: "₹8,182",
        };
      case "6 months":
        return {
          timeEstimate: "9 hours/week",
          monthlyCost: "₹2,046",
          totalCost: "₹12,274",
        };
      default:
        return {
          timeEstimate: "17 hours/week",
          monthlyCost: "₹2,727",
          totalCost: "₹8,182",
        };
    }
  };

  const { timeEstimate, monthlyCost, totalCost } =
    getContentForDuration(selectedDuration);

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">
          Enroll in this 15-course Professional Certificate
        </h2>
        <ul className="mb-4 space-y-2 text-gray-600">
          <li>✓ Unlimited access to all 15 courses</li>
          <li>✓ EMI payment options</li>
          <li>✓ Shareable certificate of completion from IBM</li>
          <li>✓ 14 day refund period</li>
        </ul>
        <p className="text-lg font-medium mb-4">
          How much time do you need to finish?
        </p>
        <div className="flex justify-around mb-4">
          <button
            onClick={() => setSelectedDuration("1 month")}
            className={`py-2 px-4 rounded-lg ${
              selectedDuration === "1 month"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
          >
            1 month
          </button>
          <button
            onClick={() => setSelectedDuration("3 months")}
            className={`py-2 px-4 rounded-lg ${
              selectedDuration === "3 months"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
          >
            3 months
          </button>
          <button
            onClick={() => setSelectedDuration("6 months")}
            className={`py-2 px-4 rounded-lg ${
              selectedDuration === "6 months"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
          >
            6 months
          </button>
        </div>
        <div className="text-sm text-gray-500">
          <p>
            Estimated study time: <strong>{timeEstimate}</strong>
          </p>
          <p className="mt-2">
            <strong>{monthlyCost}/month</strong> Total {totalCost}
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

// Main Component
const Course1 = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [showPopup, setShowPopup] = useState(false);
  const courseData = mockCourseData;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleEnrollClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen border-b-2 border-gray-400">
      <CoursePage courseData={courseData} onEnrollClick={handleEnrollClick} />
      <CourseStats stats={courseData.stats} />
      <div className="max-w-6xl mx-auto px-4 mt-8 sm:mt-12 drop-shadow-xl rounded-md border-b-2 border-blue-500">
        <div className="flex space-x-4 sm:space-x-6 border-b-2 pb-4 mb-8 overflow-x-auto drop-shadow-md">
          {["About", "Outcomes", "Courses"].map((tab) => (
            <button
              key={tab}
              className={`text-base sm:text-lg font-semibold py-2 px-3 sm:px-4 ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {activeTab === "About" && (
          <CourseDetailsAbout aboutData={courseData.about} />
        )}
        {activeTab === "Outcomes" && (
          <Outcome outcomeData={courseData.outcomes} />
        )}
        {activeTab === "Courses" && (
          <CourseDescription courses={courseData.courses} />
        )}
      </div>
      <div className="py-8">
        <Testimonials testimonials={courseData.testimonials} />
      </div>

      <Popup show={showPopup} onClose={closePopup} />
    </div>
  );
};

export default Course1;
