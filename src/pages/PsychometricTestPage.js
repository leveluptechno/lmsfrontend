import React, { useState, useRef } from "react";
import psychometricImage from "../assets/images/psychometrictest.jpg";
import child from "../assets/images/child.jpg";
import TestComponent from "../components/TestComponent";
import personality from "../assets/images/personality.png";
import apptitude from "../assets/images/apptitude.png";
import skills from "../assets/images/skills.png";
import think from "../assets/images/think.png";
import personlitytrait from "../assets/images/personlitytrait.png";
import work from "../assets/images/work.png";
import motivated from "../assets/images/motivated.png";
import decisionmaking from "../assets/images/decisionmaking.png";
import interpersonal from "../assets/images/interpersonal.png";
import learning from "../assets/images/learning.png";
import man from "../assets/images/man.png";
import woman from "../assets/images/woman.png";

const PsychometricTestPage = () => {
  const [showQuestions, setShowQuestions] = useState(false);
  const testSectionRef = useRef(null);
  // eslint-disable-next-line
  const [Accordion, setAccordion] = useState(false);
  const [Accordion2, setAccordion2] = useState(false);
  const [Accordion3, setAccordion3] = useState(false);
  const [Accordion4, setAccordion4] = useState(false);
  const [Accordion5, setAccordion5] = useState(false);
  // eslint-disable-next-line

  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
    if (!showQuestions) {
      // Scroll to the test section when it becomes visible
      setTimeout(() => {
        testSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const cardData = [
    {
      title: "Holistic Personality Understanding",
      text: "Gain a deeper understanding of your personality. Assess dimensions like Extraversion, Agreeableness, and Conscientiousness to better understand yourself and improve how you interact with the world.",
    },
    {
      title: "Career Path Clarity",
      text: "Identify career paths that align with your strengths and interests. Receive tailored recommendations for careers that fit your personality, skills, and values, helping you make informed career decisions.",
    },
    {
      title: "Skill and Competency Mapping",
      text: "Map your skills and competencies for professional growth. Understand your existing skills and identify areas for development, enabling you to build a strong foundation for career advancement.",
    },
    {
      title: "Informed Decision-Making",
      text: "Make well-informed decisions with confidence. Use the insights gained from psychometric assessments to guide important life choices, such as educational paths, career moves, and personal development goals.",
    },
  ];

  return (
    <>
      <div className="w-full">
        {/* Psychometric Test Section */}

        <section className="bg-gradient-to-r from-[#3498db] to-[#2c3e50] text-white py-16 px-4 lg:px-10 text-center">
          <h5 className="text-4xl   mb-4">
            Psychometric Assessment in Healthcare - Cultivate Excellence
          </h5>
          <p className="text-2xl mb-4">
            Unleashing Potential Through Comprehensive Psychometric Tools
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={toggleQuestions}
              className="bg-white text-blue-500 py-3 px-5 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition duration-300"
            >
              REQUEST MOCK TEST
            </button>
          </div>
        </section>

        {/* test categories sections */}
        <section className="bg-custom-bg-2 text-custom-dark-gray py-14 px-5 text-center -mb-10">
          <h5 className="text-center text-4xl px-4 font-semibold text-blue-500  -mb-6 ">
            Choose Various Types of Psychometric Tests To Test Your Ability And
            Choose Suitable Course
          </h5>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 drop-shadow-xl">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={psychometricImage}
                />
              </div>
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                  <h3 className="text-custom-dark-gray text-3xl font-semibold -mt-20 ">
                    Top 8 Categories Included In Psychometric Assessment{" "}
                  </h3>

                  <div className="flex flex-wrap -m-2 mt-10">
                    {/* Category Cards */}
                    {[
                      { src: think, title: "Interest Inventory" },
                      { src: personlitytrait, title: "Personality Traits" },
                      { src: skills, title: "Skills and Competencies" },
                      { src: work, title: "Work Values" },
                      { src: motivated, title: "Motivations" },
                      { src: decisionmaking, title: "Decision-Making Style" },
                      { src: interpersonal, title: "Interpersonal Skills" },
                      { src: learning, title: "Learning Preferences" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="p-2 lg:w-1/3 md:w-1/2 w-full hover:scale-105 transition duration-300"
                      >
                        <div className="h-full flex items-center p-4 rounded-lg bg-white shadow-lg border">
                          <img
                            alt={item.title}
                            className="w-14 h-14  object-cover object-center flex-shrink-0 rounded-full -mr-0"
                            src={item.src}
                          />
                          <div className="flex-grow">
                            <h2 className="text-custom-dark-grey text-lg title-font font-medium">
                              {item.title}
                            </h2>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" flex -mt-10 justify-center">
                  <button
                    onClick={toggleQuestions}
                    className="bg-blue-500 text-white py-3 px-5 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition duration-300"
                  >
                    TRY FOR FREE
                  </button>
                </div>
              </section>
            </div>
          </section>
        </section>

        {/* Test Component Section */}

        <section
          ref={testSectionRef}
          className={`flex justify-center mt-10 items-center h-[auto] ${
            showQuestions ? "block" : "hidden"
          }`}
        >
          <div className="md:w-[37.50%] lg:w-[70%] xl:w-[800px] bg-white shadow-2xl  p-8 rounded-lg  mt-10 mb-10">
            <TestComponent />
          </div>
        </section>

        {/* defining psychometric test  */}
        <section className="bg-gray-50  p-2">
          <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-4 my-5 mx-2 lg:mx-36 ">
            {/* Psychometric Test */}
            <div className="flex-shrink-0 lg:w-1/4 md:w-1/3 w-full flex items-center justify-center">
              <div className="flex items-center    py-2 px-3 rounded-lg bg-white max-w-xs shadow-lg">
                <img
                  alt="psychometric test"
                  className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-2"
                  src={think}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-semibold title-font  lg:text-base whitespace-nowrap">
                    Psychometric Test
                  </h2>
                </div>
              </div>
            </div>
            {/* Equal sign */}
            <div className="flex justify-center items-center lg:w-auto w-auto">
              <p className="text-xl lg:text-2xl">=</p>
            </div>
            {/* Personality Tests */}
            <div className="flex-shrink-0 lg:w-1/4 md:w-1/3 w-full flex items-center justify-center">
              <div className="flex items-center   py-2 px-3 rounded-lg bg-white max-w-xs shadow-lg">
                <img
                  alt="personality test"
                  className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-2"
                  src={personality}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium text-sm lg:text-base whitespace-nowrap">
                    Personality Tests
                  </h2>
                </div>
              </div>
            </div>
            {/* Plus sign */}
            <div className="flex justify-center items-center lg:w-auto w-auto">
              <p className="text-xl lg:text-2xl">+</p>
            </div>
            {/* Aptitude Tests */}
            <div className="flex-shrink-0 lg:w-1/4 md:w-1/3 w-full flex items-center justify-center">
              <div className="flex items-center shadow-lg py-2 px-3 rounded-lg bg-white max-w-xs">
                <img
                  alt="aptitude test"
                  className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-2"
                  src={apptitude}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium text-sm lg:text-base whitespace-nowrap">
                    Aptitude Tests
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Content Section: what is psychometric test  */}
        <section className="py-16 px-10 bg-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
              What is a Psychometric Test?
            </h2>
            <div className="flex gap-5 flex-col lg:flex-row  items-center">
              <div>
                <p
                  className="  text-lg text-gray-700 mb-7 relative leading-relaxed lg:w-[90%] mx-3 text-justify justify-center items-center"
                  style={{ boxSizing: "border-box" }}
                >
                  A Psychometric Test is a specialized assessment tool designed
                  to evaluate an individual's mental capabilities, personality
                  traits, attitudes, behaviors, and other psychological
                  characteristics. These tests are widely used across various
                  fields, including education, recruitment, career counseling,
                  and personal development, to gain a deeper understanding of a
                  person’s psychological makeup and potential.
                </p>
                <p className="text-lg text-gray-700  leading-relaxed mx-3 lg:w-[90%] text-justify box-border  ">
                  Psychometric tests also play a role in personal development.
                  They offer insights into an individual's strengths,
                  weaknesses, and areas for improvement, contributing to
                  self-awareness and personal growth. For instance,
                  understanding one's personality traits can aid in improving
                  interpersonal relationships and professional interactions.
                </p>
              </div>
              <img
                src={child}
                alt="child"
                className=" flex items-center  w-[80%] h-[80%]  lg:w-[40%] lg:h-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="mt-5  flex justify-center">
              <button
                onClick={toggleQuestions}
                className=" bg-blue-500 text-white py-3 px-5 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition duration-300 justify-center "
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* benefits  */}
        <section className="bg-custom-bg-2 py-10 px-4 md:px-20 lg:px-44">
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl mb-2 text-blue-500">
            Benefits Of Psychometric Assessment
          </h2>
          <h4 className="text-center text-lg md:text-xl mb-6 text-custom-body">
            The Psychometric Assessment Tools are based on Validated Scientific
            Theories and Practices
          </h4>
          <div className="container mx-auto mb-5">
            <div className="flex flex-wrap justify-center">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="p-2 w-full sm:w-1/2 lg:w-1/4 hover:scale-105 transition duration-300 box-border"
                >
                  <div className="h-full bg-white rounded-lg drop-shadow-lg p-4 flex flex-col justify-between shadow-xl">
                    <div>
                      <h2 className="text-lg md:text-xl font-medium title-font mb-2 text-custom-dark-gray">
                        {card.title}
                      </h2>
                      <p className="leading-relaxed text-lg ">
                        {card.text}
                        {"..."}
                      </p>
                    </div>

                    <button className="flex justify-end text-lg text-blue-500">
                      Read More...
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team section  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium title-font text-blue-500 mb-5">
                Our Team
              </h1>
            </div>
            <div className="flex flex-wrap justify-center mx-auto">
              {/* Team Member 1 */}
              <div className="p-4 w-full sm:w-1/2 lg:w-1/4 bg-gray-100 mr-0 md:mr-6 mb-4 md:mb-0 rounded-md hover:scale-105 transition duration-300">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    src={man}
                    alt="Team Member"
                    className="w-[50%] md:w-[70%] h-[50%] md:h-[70%] p-5 object-cover"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Alper Kamu
                    </h2>
                    <h3 className="text-gray-500 mb-3">Founder & CEO</h3>
                    <p className="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="p-4 w-full sm:w-1/2 lg:w-1/4 bg-gray-100 mr-0 md:mr-6 mb-4 md:mb-0 rounded-md hover:scale-105 transition duration-300">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    src={woman}
                    alt="Team Member"
                    className="w-[50%] md:w-[70%] h-[50%] md:h-[70%] p-5 object-cover"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Atticus Finch
                    </h2>
                    <h3 className="text-gray-500 mb-3">Chief Consultant</h3>
                    <p className="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="p-4 w-full sm:w-1/2 lg:w-1/4 bg-gray-100 rounded-md hover:scale-105 transition duration-300">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    src={man}
                    alt="Team Member"
                    className="w-[50%] md:w-[70%] h-[50%] md:h-[70%] p-5 object-cover"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Henry Letham
                    </h2>
                    <h3 className="text-gray-500 mb-3">Senior Advisor</h3>
                    <p className="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section className="bg-custom-bg-2 w-full h-full p-4 md:p-10 flex flex-col">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mb-10 text-blue-500 font-semibold">
            Frequently Asked Questions (FAQs)
          </h1>

          {/* Accordion Item 1 */}
          <div className="mx-2 md:mx-20 p-3 py-1 bg-white rounded-lg border border-gray-300 shadow-md mb-2">
            <button
              className="container flex justify-between my-2 items-center"
              onClick={() => setAccordion(!Accordion)}
            >
              <span className="text-lg md:text-xl font-semibold">
                1. What Is Psychometric Test?
              </span>
              {Accordion ? (
                <span className="text-3xl md:text-4xl">-</span>
              ) : (
                <span className="text-3xl md:text-4xl">+</span>
              )}
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-md ${
                Accordion
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden pt-2 border-t border-gray-200">
                A psychometric test is a tool used to measure an individual's
                mental capabilities and personality traits. It helps assess
                various psychological characteristics to gain insights into
                behavior, abilities, and potential, often used for recruitment
                and personal development.
              </div>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="mx-2 md:mx-20 p-3 py-1 bg-white rounded-lg border border-gray-300 shadow-md mb-2">
            <button
              className="container flex justify-between my-2 items-center"
              onClick={() => setAccordion2(!Accordion2)}
            >
              <span className="text-lg md:text-xl font-semibold">
                2. How Long Does The Psychometric Test Take?
              </span>
              {Accordion2 ? (
                <span className="text-3xl md:text-4xl">-</span>
              ) : (
                <span className="text-3xl md:text-4xl">+</span>
              )}
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-md ${
                Accordion2
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden pt-2 border-t border-gray-200">
                The duration of a psychometric test varies depending on the type
                and complexity of the test. Typically, it can range from 30
                minutes to an hour, but some comprehensive tests may take
                longer.
              </div>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="mx-2 md:mx-20 p-3 py-1 bg-white rounded-lg border border-gray-300 shadow-md mb-2">
            <button
              className="container flex justify-between my-2 items-center"
              onClick={() => setAccordion3(!Accordion3)}
            >
              <span className="text-lg md:text-xl font-semibold">
                3. Are Psychometric Tests Reliable?
              </span>
              {Accordion3 ? (
                <span className="text-3xl md:text-4xl">-</span>
              ) : (
                <span className="text-3xl md:text-4xl">+</span>
              )}
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-md ${
                Accordion3
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden pt-2 border-t border-gray-200">
                Yes, psychometric tests are designed to be reliable and valid
                measures of psychological traits. When administered correctly,
                they provide consistent and accurate insights into an
                individual's capabilities and personality.
              </div>
            </div>
          </div>

          {/* Accordion Item 4 */}
          <div className="mx-2 md:mx-20 p-3 py-1 bg-white rounded-lg border border-gray-300 shadow-md mb-2">
            <button
              className="container flex justify-between my-2 items-center"
              onClick={() => setAccordion4(!Accordion4)}
            >
              <span className="text-lg md:text-xl font-semibold">
                4.Can you prepare for a psychometric assessment?
              </span>
              {Accordion4 ? (
                <span className="text-3xl md:text-4xl">-</span>
              ) : (
                <span className="text-3xl md:text-4xl">+</span>
              )}
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-md ${
                Accordion4
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden pt-2 border-t border-gray-200">
                While you can't change your inherent personality traits, you can
                prepare for the cognitive aspects of a psychometric assessment
                by practicing similar tests, familiarizing yourself with the
                types of questions asked, and improving your time management
                skills. Many practice tests are available online to help you
                prepare.{" "}
              </div>
            </div>
          </div>

          {/* Accordion Item 5 */}
          <div className="mx-2 md:mx-20 p-3 py-1 bg-white rounded-lg border border-gray-300 shadow-md mb-2">
            <button
              className="container flex justify-between my-2 items-center"
              onClick={() => setAccordion5(!Accordion5)}
            >
              <span className="text-lg md:text-xl font-semibold">
                5. How are Psychometric Assessments Useful in the Medical Field?
              </span>
              {Accordion5 ? (
                <span className="text-3xl md:text-4xl">-</span>
              ) : (
                <span className="text-3xl md:text-4xl">+</span>
              )}
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-md ${
                Accordion5
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden pt-2 border-t border-gray-200">
                Psychometric assessments in the medical field are valuable tools
                for evaluating the psychological traits and cognitive abilities
                of healthcare professionals. They help in assessing skills like
                critical thinking, problem-solving, empathy, and stress
                management, which are crucial for patient care. These
                assessments are also used in medical education and training to
                identify areas where individuals may need development, ensuring
                that medical staff are well-suited for their demanding roles.
                Additionally, psychometric tests can be used in patient care to
                understand psychological aspects of health conditions, aiding in
                the diagnosis and treatment planning process.{" "}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PsychometricTestPage;
