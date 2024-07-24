import React from 'react';
import teamImage1 from "../assets/images/man (1).png";
import teamImage2 from "../assets/images/woman.png";
import teamImage3 from "../assets/images/man.png";
import historyImage from "../assets/images/history.svg";
import chooseUsImage from "../assets/images/choose.png";

const Aboutpage = () => {
  return (
    <div className='bg-gray-100 py-20 px-10'>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }

          .animate-fadeInDown {
            animation: fadeInDown 1s ease-out;
          }

          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out;
          }

          .delay-100 {
            animation-delay: 0.1s;
          }

          .delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>

      {/* Mission Statement */}
      <section className='mb-16 text-center'>
        <h1 className='text-4xl font-bold mb-4 text-blue-700 animate-fadeInDown'>Our Mission</h1>
        <p className='text-lg text-gray-700 mx-auto max-w-4xl animate-fadeInUp'>
          At MBBSWALA, our mission is to empower aspiring medical students with the knowledge, tools, and guidance they need to succeed in their medical careers. We are dedicated to providing comprehensive support and consultancy services to help our clients achieve their academic and professional goals.
        </p>
      </section>

      {/* Team Introduction */}
      <section className='mb-16'>
        <h2 className='text-3xl font-bold mb-8 text-blue-700 text-center animate-fadeInDown'>Meet Our Team</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white shadow-lg p-3 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 animate-fadeIn flex flex-col justify-center items-center'>
            <img src={teamImage1} alt='Team Member' className='w-[40%] h-[70%] p-5 object-cover' />
            <div className=' text-center'>
              <h3 className='text-xl font-bold mb-2'>John Doe</h3>
              <p className='text-gray-600 mb-4'>Founder & CEO</p>
              <p className='text-gray-600'>John is a seasoned professional with over 20 years of experience in medical consultancy.</p>
            </div>
          </div>
          <div className='bg-white shadow-lg p-1 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 animate-fadeIn delay-100 flex flex-col justify-center items-center'>
            <img src={teamImage2} alt='Team Member' className='w-[40%] h-[70%] p-5 object-cover' />
            <div className=' text-center'>
              <h3 className='text-xl font-bold mb-2'>Jane Smith</h3>
              <p className='text-gray-600 mb-4'>Chief Consultant</p>
              <p className='text-gray-600'>Jane has a deep understanding of medical admissions and has helped hundreds of students secure their spots.</p>
            </div>
          </div>
          <div className='bg-white shadow-lg p-3 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 animate-fadeIn delay-200 flex flex-col justify-center items-center'>
            <img src={teamImage3} alt='Team Member' className='w-[40%] h-[70%] p-5 object-cover' />
            <div className=' text-center'>
              <h3 className='text-xl font-bold mb-2'>Robert Brown</h3>
              <p className='text-gray-600 mb-4'>Senior Advisor</p>
              <p className='text-gray-600'>Robert brings a wealth of knowledge in medical education and career planning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className='mb-16'>
        <h2 className='text-3xl font-bold mb-8 text-blue-700 text-center animate-fadeInDown'>Our History</h2>
        <div className='flex flex-col md:flex-row justify-center items-center animate-fadeInUp'>
          <img src={historyImage} alt='History' className='w-[50%] h-[50%] md:w-[20%] md:h-[20%] object-cover rounded-lg mb-6 md:mb-0 md:mr-8' />
          <p className='text-lg text-gray-700 max-w-2xl'>
            Founded in 2005, MBBSWALA has a rich history of helping students achieve their dreams of becoming medical professionals. Over the years, we have grown into a trusted consultancy, known for our personalized approach and commitment to excellence. Our team of experts has guided thousands of students through the complexities of medical admissions, making their journey smoother and more successful.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='mb-16'>
        <h2 className='text-3xl font-bold mb-8 text-blue-700 text-center animate-fadeInDown'>Why Choose Us</h2>
        <div className='flex flex-col justify-center  md:flex-row items-center animate-fadeInUp'>
          <img src={chooseUsImage} alt='Why Choose Us' className='w-[50%] h-[50%] md:w-[20%] md:h-[20%] object-cover rounded-lg mb-6 md:mb-0 md:mr-8' />
          <ul className='list-disc text-lg text-gray-700 max-w-2xl pl-5'>
            <li>Expert guidance from seasoned professionals</li>
            <li>Comprehensive support throughout the admission process</li>
            <li>Personalized approach tailored to individual needs</li>
            <li>Proven track record of success</li>
            <li>In-depth knowledge of medical education and career planning</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
