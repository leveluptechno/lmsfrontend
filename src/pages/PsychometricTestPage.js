import React, { useState, useRef } from "react"
import psychometricImage from "../assets/images/psychometrictest.jpg";
import child from "../assets/images/child.jpg";
import TestComponent from "../components/TestComponent";

const PsychometricTestPage = () => {
  const [showQuestions, setShowQuestions] = useState(false);
  const testSectionRef = useRef(null);

  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
    if (!showQuestions) {
      // Scroll to the test section when it becomes visible
      setTimeout(() => {
        testSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <div className="w-full">
        {/* Psychometric Test Section */}
        <section className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-20 px-10 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Psychometric Test</h1>
          <p className="text-2xl mb-8">
            Assess your skills and strengths with our Psychometric Test.
          </p>
          <img
            src={psychometricImage}
            alt="Psychometric Test"
            className="mx-auto mb-8 w-[600px] rounded-lg shadow-lg"
          />
          <button
            onClick={toggleQuestions}
            className="bg-white text-pink-700 py-3 px-8 rounded-full font-semibold hover:bg-pink-200 transition duration-300"
          >
            Start Test
          </button>
        </section>

        {/* Test Component Section */}
        <section ref={testSectionRef} className={`flex justify-center items-center h-[500px] ${showQuestions ? "block" : "hidden"}`}>
          <div className="md:w-[600px] lg:w-[700px] xl:w-[800px] bg-white shadow-lg p-8 rounded-lg">
            <TestComponent />
          </div>
        </section>

        {/* Additional Content Section */}
        <section className="py-20 px-10 bg-gray-100">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What is a Psychometric Test?
            </h2>
            <div className="flex gap-5 flex-col lg:flex-row">
              <img
                src={child}
                alt="child"
                className="w-[80%] h-[80%] self-center  lg:w-[40%] lg:h-[40%] rounded-lg shadow-lg"
              />
              <div>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  imperdiet urna lectus, sit amet gravida ante lacinia nec. Nam
                  euismod, felis eget auctor tristique, turpis massa varius
                  enim, eget malesuada nulla dui vel ipsum. Duis convallis
                  lacinia tellus sit amet molestie. Proin ut lorem dui. Aliquam
                  erat volutpat. Donec scelerisque, risus sed imperdiet
                  placerat, sem tellus venenatis ligula, non viverra leo nulla
                  vel odio. Vivamus in consectetur augue, nec dapibus nulla.
                </p>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Morbi posuere sapien vel odio malesuada, nec facilisis mi
                  varius. Donec auctor nisi sit amet tortor pretium, quis
                  posuere nunc vehicula. Suspendisse potenti. Integer
                  sollicitudin lacus ac quam ultricies lacinia.
                </p>
              </div>
            </div>
            <div className="mt-5">
              <button
                onClick={toggleQuestions}
                className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 px-8 rounded-full font-semibold hover:bg-pink-600 transition duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PsychometricTestPage;
