import React from 'react';
import { Link } from 'react-router-dom';
import courseImage1 from "../assets/images/logo.png";
import courseImage2 from "../assets/images/logo.png";
import courseImage3 from "../assets/images/logo.png";
import testimonialImage1 from "../assets/images/logo.png";
import testimonialImage2 from "../assets/images/logo.png";
import testimonialImage3 from "../assets/images/logo.png";
import testimonialImage4 from "../assets/images/logo.png";

const Homepage = () => {
  return (
    <>
      <div className='w-full'>
        {/* Hero Section */}
        <section className='bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 px-10 text-center'>
          <h1 className='text-5xl font-extrabold mb-4'>Welcome to MBBSWALA</h1>
          <p className='text-2xl mb-8'>Your gateway to learning and growth</p>
          <Link to="/courses" className='bg-white text-green-600 py-3 px-8 rounded-full font-semibold hover:bg-green-200 transition duration-300'>
            Explore Courses
          </Link>
        </section>
        
        {/* Courses Section */}
        <section className='py-20 px-10 bg-gray-100'>
          <h2 className='text-4xl font-bold mb-12 text-center'>Popular Courses</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[courseImage1, courseImage2, courseImage3].map((course, index) => (
              <div key={index} className='bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 flex items-center justify-center flex-col transition duration-300'>
                <img src={course} alt={`Course ${index + 1}`} className='w-[50%] h-[50%] object-cover'/>
                <div className='p-6 text-center'>
                  <h3 className='text-2xl font-bold mb-2'>Course {index + 1}</h3>
                  <p className='text-gray-600 mb-4'>Course Description {index + 1}</p>
                  <Link to={`/course-details/${index + 1}`} className='text-green-600 font-semibold hover:underline'>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Psychometric Assessment Section */}
        <section className='bg-gradient-to-r from-pink-400 to-red-500 text-white py-20 px-10 mt-12 text-center rounded-xl mx-4'>
          <h2 className='text-3xl font-bold mb-4'>Psychometric Assessment</h2>
          <p className='text-xl mb-8'>Sign up and start your free assessment</p>
          <Link to="/signup" className='bg-white text-pink-700 py-3 px-8 rounded-full font-semibold hover:bg-pink-200 transition duration-300'>
            Get Started
          </Link>
        </section>

        {/* Test & Assessment Section */}
        <section className='py-20 px-10 bg-gray-100'>
          <h2 className='text-3xl font-bold mb-12 text-center'>Test & Assessment</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {[courseImage1, courseImage3].map((course, index) => (
              <div key={index} className='bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col justify-center items-center'>
                <img src={course} alt={`Assessment ${index + 1}`} className='w-[50%] h-[50%] object-cover'/>
                <div className='p-6 text-center'>
                  <h3 className='text-2xl font-bold mb-2'>{index === 0 ? 'Psychometric Assessment' : 'NEET Predictor Tool'}</h3>
                  <p className='text-gray-600 mb-4'>Description for {index === 0 ? 'Psychometric Assessment' : 'NEET Predictor Tool'}</p>
                  <Link to={`/course-details/${index + 1}`} className='text-green-600 font-semibold hover:underline'>
                    Start Test
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className='bg-gradient-to-r from-blue-400 to-teal-500 text-white py-20 px-10 text-center rounded-xl mx-4'>
          <h2 className='text-3xl font-bold mb-4'>Join Us Today</h2>
          <p className='text-xl mb-8'>Sign up and start your learning journey with us.</p>
          <Link to="/signup" className='bg-white text-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-blue-200 transition duration-300'>
            Get Started
          </Link>
        </section>
        
        {/* Testimonials Section */}
        <section className='py-20 px-10 bg-gray-100 text-center'>
          <h2 className='text-4xl font-bold mb-12'>Testimonials</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {[{image: testimonialImage1, text: "MBBSWALA helped me navigate the complexities of medical school admissions with ease. I highly recommend their services!", name: "Student A"},
              {image: testimonialImage2, text: "Their psychometric assessment was spot on and really helped me understand my strengths.", name: "Student B"},
              {image: testimonialImage3, text: "The NEET predictor tool gave me a realistic estimate and helped me plan my college applications effectively.", name: "Student C"},
              {image: testimonialImage4, text: "Fantastic service and very supportive staff. Highly recommend MBBSWALA.", name: "Student D"}].map((testimonial, index) => (
              <div key={index} className='bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300'>
                <img src={testimonial.image} alt={`Testimonial ${index + 1}`} className='w-[50%] h-[50%] rounded-full mx-auto mb-4'/>
                <p className='text-gray-700 mb-4'>{testimonial.text}</p>
                <p className='font-bold'>{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information Section */}
        <section className='bg-gradient-to-r from-blue-400 to-teal-500 text-white py-20 px-10 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
          <p className='text-xl mb-4'>For any queries or support, reach out to us at:</p>
          <p className='text-xl mb-8'>Email: support@mbbswala.com | Phone: +1 234 567 890</p>
          <Link to="/contact" className='bg-white text-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-blue-200 transition duration-300'>
            Contact Us
          </Link>
        </section>
        
      </div>
    </>
  );
};

export default Homepage;
