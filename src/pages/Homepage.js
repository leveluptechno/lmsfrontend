import React from "react";
import { Link } from "react-router-dom";
import courseImage1 from "../assets/images/BBA.jpg";
import courseImage2 from "../assets/images/B.tech.jpg";
import courseImage3 from "../assets/images/Bca.jpg";
import predictiveImages from "../assets/images/predictive-chart.png";
import psychometrictest from "../assets/images/critical-thinking.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Homepage = () => {
  return (
    <>
      <div className="w-full">
        <style>
          {`
        @keyframes customAni {
        0% {
	      animation-timing-function: ease-in;
	      opacity: 1;
	         transform: translateY(-45px);
         }

         24% {
	        opacity: 1;
          }

            40% {
	       animation-timing-function: ease-in;
	     transform: translateY(-24px);
         }

            65% {
	      animation-timing-function: ease-in;
	       transform: translateY(-12px);
         }

      82% {
	      animation-timing-function: ease-in;
	    transform: translateY(-6px);
       }

  93% {
	animation-timing-function: ease-in;
	transform: translateY(-4px);
  }

      25%,
     55%,
     75%,
     87% {
	    animation-timing-function: ease-out;
	   transform: translateY(0px);
     }

     100% {
     	animation-timing-function: ease-out;
	   opacity: 1;
	   transform: translateY(0px);
     }
   }


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

        .animate-customAni{
        animation: customAni 2s ease-in 0s 1 normal none;
        }
        .delay-200{
        animation-delay:0.2s;
        }

        `}
        </style>

        <section className="bg-gradient-to-r from-[#3498db] to-[#2c3e50] text-white pb-20 px-10 text-center">
          <h1 className="text-5xl font-extrabold mb-4 animate-fadeInDown pt-10">
            Welcome to Learning HubSpot
          </h1>
          <p className="text-2xl mb-8 animate-fadeInDown ">
            Your gateway to learning and growth
          </p>
          <Link
            to="/courses"
            className="bg-white text-green-600 py-3 px-8 rounded-full font-semibold hover:bg-green-200 transition duration-300 animate-fadeInUp"
          >
            Explore Courses
          </Link>
        </section>

        {/* Courses Section */}
        <section className="py-20 px-10 bg-white">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fadeInUp">
            Popular Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {[courseImage1, courseImage2, courseImage3].map((course) => (
              <div className="bg-white shadow-2xl rounded-2xl border-zinc-950 overflow-hidden transform hover:scale-105 flex items-center justify-center flex-col animate-fadeInDown transition duration-300  cursor-pointer">
                <img
                  src={course}
                  alt={`Course`}
                  className="w-[40%] h-[70%] p-7 object-cover"
                />
                <div className="p-4 text-center" s>
                  <h3 className="text-2xl font-bold mb-2 animate-fadeInDown">
                    Bachelor of Business Administration
                  </h3>
                  <p className="text-gray-600 mb-4 animate-fadeInDown">
                    An undergraduate course in business administration and
                    management.
                  </p>
                  <Link
                    to={`/course-details/`}
                    className="text-green-600 font-semibold hover:underline animate-fadeInDown"
                  >
                    Learn More
                  </Link>
                  <linK>Learn More</linK>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Psychometric Assessment Section */}
        <section className="bg-[#e74c3c] text-white py-20 px-10 mt-12 mb-12 text-center rounded-xl mx-4 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-4 ">Psychometric Assessment</h2>
          <p className="text-xl mb-8">Sign up and start your free assessment</p>
          <Link
            to="/signup"
            className="bg-white text-pink-700 py-3 px-8 rounded-full font-semibold hover:bg-pink-200  transition duration-300 animate-customAni "
          >
            Get Started
          </Link>
        </section>

        {/* Test & Assessment Section */}
        <section className="py-20 px-10 bg-gray-100">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fadeInUp">
            Test & Assessment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col justify-center items-center animate-fadeInUp cursor-pointer">
              <img
                src={psychometrictest}
                alt="Psychometric Assessment"
                className="w-[40%] h-[80%] p-10 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">
                  Psychometric Assessment
                </h3>
                <p className="text-gray-600 mb-4">
                  Description for Psychometric Assessment
                </p>
                <Link
                  to="/psychometrictest"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Start Test
                </Link>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col justify-center items-center animate-fadeInUp cursor-pointer">
              <img
                src={predictiveImages}
                alt="NEET Predictor Tool"
                className="w-[40%] h-[80%] p-10 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">NEET Predictor Tool</h3>
                <p className="text-gray-600 mb-4">
                  Description for NEET Predictor Tool
                </p>
                <Link
                  to="/neetpredictortool"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Start Test
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-gradient-to-r from-blue-400 to-teal-500 text-white py-20 px-10 text-center rounded-xl mx-4 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-4 animate-fadeInUp">
            Join Us Today
          </h2>
          <p className="text-xl mb-8 animate-fadeInUp">
            Sign up and start your learning journey with us.
          </p>
          <Link
            to="/signup"
            className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-blue-200 transition duration-300"
          >
            Get Started
          </Link>
        </section>
        <br />
        {/* Testimonials Section */}
        <section className="text-center pt-10">
          <h2 className="text-5xl font-bold text-black mb-10">Testimonials</h2>
          <div className="w-full py-6 px-6 bg-blue-200">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              className="max-w-6xl mx-auto relative"
            >
              {[
                {
                  name: "John Doe",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  text: "Learning Hubspot has completely transformed my understanding of complex subjects. The tutors are knowledgeable and always willing to help.",
                  rating: 5,
                },
                {
                  name: "Jane Smith",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  text: "The resources provided by Learning Hubspot are top-notch. I have improved my grades significantly since joining.",
                  rating: 4,
                },
                {
                  name: "Alice Johnson",
                  image: "https://randomuser.me/api/portraits/women/21.jpg",
                  text: "The personalized attention and customized study plans have been a game changer for me. Highly recommend Learning Hubspot!",
                  rating: 5,
                },
                {
                  name: "Tom Wilson",
                  image: "https://randomuser.me/api/portraits/men/45.jpg",
                  text: "The interactive sessions and resources offered have been invaluable to my academic success.",
                  rating: 4,
                },
                {
                  name: "Emily Davis",
                  image: "https://randomuser.me/api/portraits/women/46.jpg",
                  text: "Fantastic support and guidance throughout my courses. I feel much more confident in my studies now.",
                  rating: 5,
                },
                {
                  name: "Michael Brown",
                  image: "https://randomuser.me/api/portraits/men/47.jpg",
                  text: "The courses are well-structured and the feedback from tutors is always constructive and helpful.",
                  rating: 4,
                },
                {
                  name: "Sarah Lee",
                  image: "https://randomuser.me/api/portraits/women/48.jpg",
                  text: "Great learning environment with excellent resources and knowledgeable instructors.",
                  rating: 5,
                },
                {
                  name: "David Clark",
                  image: "https://randomuser.me/api/portraits/men/49.jpg",
                  text: "The flexibility and quality of the courses have exceeded my expectations.",
                  rating: 4,
                },
                {
                  name: "Laura Adams",
                  image: "https://randomuser.me/api/portraits/women/50.jpg",
                  text: "The personalized study plans and support have made a significant difference in my learning experience.",
                  rating: 5,
                },
                {
                  name: "James Martinez",
                  image: "https://randomuser.me/api/portraits/men/51.jpg",
                  text: "Highly recommend for anyone looking to enhance their knowledge and skills.",
                  rating: 5,
                },
                {
                  name: "Natalie Wilson",
                  image: "https://randomuser.me/api/portraits/women/52.jpg",
                  text: "The quality of instruction and resources is top-notch. I've learned so much in a short period.",
                  rating: 4,
                },
                {
                  name: "Chris Evans",
                  image: "https://randomuser.me/api/portraits/men/53.jpg",
                  text: "A great place for learning with supportive staff and a variety of resources.",
                  rating: 4,
                },
                // Additional testimonials
                {
                  name: "Olivia Thompson",
                  image: "https://randomuser.me/api/portraits/women/54.jpg",
                  text: "Learning Hubspot's platform is easy to navigate and the tutors are fantastic. I've gained so much confidence in my studies.",
                  rating: 5,
                },
                {
                  name: "Liam Walker",
                  image: "https://randomuser.me/api/portraits/men/55.jpg",
                  text: "The community aspect of Learning Hubspot has been incredibly supportive. I've made great friends and study partners.",
                  rating: 5,
                },
                {
                  name: "Emma Harris",
                  image: "https://randomuser.me/api/portraits/women/56.jpg",
                  text: "The best decision I made for my education was joining Learning Hubspot. The variety of courses is impressive.",
                  rating: 4,
                },
                {
                  name: "Daniel Anderson",
                  image: "https://randomuser.me/api/portraits/men/57.jpg",
                  text: "I love the interactive learning modules and personalized feedback. It's the perfect platform for self-paced learning.",
                  rating: 5,
                },
                {
                  name: "Sophia Robinson",
                  image: "https://randomuser.me/api/portraits/women/58.jpg",
                  text: "Highly recommend Learning Hubspot for anyone looking to improve their skills in a supportive environment.",
                  rating: 5,
                },
                {
                  name: "Mason King",
                  image: "https://randomuser.me/api/portraits/men/59.jpg",
                  text: "The resources and support offered are unparalleled. Learning Hubspot is a game changer for students.",
                  rating: 4,
                },
                // Add more testimonials as needed
              ].map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white shadow-xl rounded-lg transform hover:scale-105 transition duration-500 p-8 flex flex-col items-center justify-between h-[480px] overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-32 h-32 rounded-full border-4 border-teal-500 object-cover mb-6 transition-transform duration-500 hover:scale-110"
                    />
                    <p className="text-lg text-gray-700 mb-4 italic transition-colors duration-300 hover:text-gray-900">
                      "{testimonial.text}"
                    </p>
                    <p className="text-xl font-semibold text-gray-800 mb-4">
                      {testimonial.name}
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-2xl ${
                            i < testimonial.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev swiper-nav-btn left-0"></div>
              <div className="swiper-button-next swiper-nav-btn right-0"></div>
            </Swiper>
          </div>
        </section>
        <br></br>
        {/* Contact Information Section */}
        <section className="bg-gradient-to-r from-blue-400 to-teal-500 text-white py-20 px-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl mb-4">
            For any queries or support, reach out to us at:
          </p>
          <p className="text-xl mb-8">
            Email: support@mbbswala.com | Phone: +1 234 567 890
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-blue-200 transition duration-300"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </>
  );
};

export default Homepage;
