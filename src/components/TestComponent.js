import React, { useState } from "react";
import axios from "axios";
import { questions } from "./Psychometrictestquestion";
import passImage from "../assets/images/right.jpg";
import failImage from "../assets/images/wrong.jpg";
import PiechartOfRejult from "./charts/PiechartOfRejult";

const TestComponent = () => {
  // All the state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const [result, setresult] = useState(null);
  const [ResultEror, setResultError] = useState(null);

  // all the events and all the functionality are added here

  const handleAnswerOptionClick = () => {
    questions[currentQuestion].selectedOption = selectedOption; // Store the selected option for the current question

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null); // Reset selected option for next question
    } else {
      setShowScore(true);
      submitAnswers(); // Call the submit function when all questions are answered
      fetchResult();
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCorrectAnswers(0); // Reset correct answers count
    setIncorrectAnswers(0); // Reset incorrect answers count
    setShowScore(false);
    setSelectedOption(null);
    setApiResponse(null); // Reset API response
    setError(null); // Reset error state
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const submitAnswers = async () => {
    const answers = questions.map((question, index) => ({
      question: question.question,
      correctAnswer: question.correctAnswer,
      selectedOption:
        index === currentQuestion
          ? selectedOption
          : question.selectedOption || "Not Answered",
    }));

    try {
      const response = await axios.post(
        "http://localhost:4000/psychometric-assessment/take",
        { answers },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsInN1YiI6IjY2YzQ0MzkwNWFiODA2MzJkMTI2NDZiNSIsImlhdCI6MTcyNDgyMDYzNiwiZXhwIjoxNzI0OTA3MDM2fQ.mrjD_4_t2zFO4nJq5icgD1IHdA164tAOtj6NI4pTUu8`, // Replace with your actual token
          },
        }
      );
      setApiResponse(response.data);
      console.log("successful "); // Store the API response in state
    } catch (error) {
      setError("Failed to submit data. Please try again." + error);
    }
  };

  const fetchResult = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/psychometric-assessment/results",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsInN1YiI6IjY2YzIxYTc0ZmQ5Yzg1NjllYjE0NGI1MiIsImlhdCI6MTcyNDY4MTkxNSwiZXhwIjoxNzI0NzY4MzE1fQ.EKmcZr2s9gGZyEapabmJ6U1r0pvUpxlP0C2DVjDIzSY `,
          },
        }
      );
      setresult(response.data);
      console.log(response);
    } catch (ResultEror) {
      setResultError("failed to submit result" + ResultEror);
    }
  };

  const field1 = "MBBS, BHMS, BAMS";
  const field3 = "Nursing, Pharmacy, Bsc";
  const field2 = "Better Luck, Try Again Next Time";

  const getResultImage = () => {
    return score >= 33 ? passImage : failImage;
  };

  const getFieldResult = () => {
    if (score > 77 && score <= 100) {
      return field1;
    } else if (score < 77 && score >= 33) {
      return field3;
    } else {
      console.log("fail");
    }
  };

  // Progress Bar
  const progressBar = () => {
    return ((currentQuestion + 1) / questions.length) * 100;
  };

  // Pie chart data
  const pieData = [
    { name: "Correct", value: correctAnswers },
    { name: "Incorrect", value: incorrectAnswers },
  ];

  return (
    <div className="container mx-auto p-4">
      {showScore ? (
        // Test result section
        <div className="result flex justify-center items-center flex-col">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full">
            <div className="w-full lg:w-2/2 flex justify-center items-center mt-12 lg:mb-0">
              <img
                src={getResultImage()}
                alt={score >= 33 ? "Pass" : "Fail"}
                className="w-2/3 lg:w-2/4 h-auto object-contain"
              />
            </div>
            <div className="w-full lg:w-2/2 flex justify-center items-center">
              <div className="w-[100%] lg:w-4/4 h-70 mt-10">
                <PiechartOfRejult data={pieData} />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4 text-center w-full mb-10 mt-33">
            <div className="p-4 md:w-1/1 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-4 rounded-lg">
                <p className="text-2xl font-semibold">Total Marks</p>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  {questions.length}
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/1 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-4 rounded-lg">
                <p className="text-2xl font-semibold">You Obtained</p>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  {score}
                </h2>
              </div>
            </div>
          </div>

          <div className="mb-2">
            <h2 className="font-bold text-2xl mb-2">
              {score >= 33 ? (
                <h2 className="text-4xl  md:text-3xl lg:text-4xl font-medium mb-2 title-font text-center text-green-500">
                  Pass
                </h2>
              ) : (
                <h2 className="text-red-600 text-4xl  mb-2 text-center  md:text-3xl lg:text-4xl font-medium title-font">
                  Fail
                </h2>
              )}
              {result ? (
                <p className="text-xl  md:text-1xl lg:text-2xl font-medium title-font text-blue-500 ">
                  Result received
                </p>
              ) : (
                <p className="text-xl text-red-500  md:text-1xl lg:text-2xl font-medium title-font">
                  {ResultEror}
                </p>
              )}
            </h2>
          </div>

          <div className="mb-1">
            <h2 className="mb-2 font-bold text-2xl">
              {score > 33
                ? `The Desired Field For You Is: ${getFieldResult()}`
                : field2}
            </h2>
          </div>

          <div className="text-blue-500">
            {apiResponse ? (
              <p className="text-xl  md:text-1xl lg:text-2xl font-medium title-font">
                API Response Received
              </p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <p>No Response</p>
            )}
          </div>

          <button
            onClick={restartQuiz}
            className="bg-blue-700 text-white py-2 px-4 rounded mt-4 font-semibold hover:bg-blue-800 transition duration-300"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="progress-bar bg-gray-200 h-2 rounded-full overflow-hidden mb-4">
            <div
              className="bg-blue-500 h-full"
              style={{ width: `${progressBar()}%` }}
            />
          </div>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <label key={option.value} className="block mb-2">
                <input
                  type="radio"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={() => handleOptionChange(option.value)}
                  className="mr-2"
                />
                {option.label}
              </label>
            ))}
          </div>
          <button
            onClick={handleAnswerOptionClick}
            disabled={selectedOption === null} // Disable button until an option is selected
            className="bg-blue-700 text-white py-2 px-4 rounded mt-4"
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default TestComponent;
