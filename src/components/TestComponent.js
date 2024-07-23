// TestComponent.js
import React, { useState } from "react";
import { questions } from "./Psychometrictestquestion";
import passImage from "../assets/images/right.jpg";
import failImage from "../assets/images/wrong.jpg";

const TestComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerOptionClick = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null); // Reset selected option for next question
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const getResultImage = () => {
    if (score >= 5) {
      return passImage;
    } else {
      return failImage;
    }
  };

  return (
    <div className="container">
      {showScore ? (
        <div className="result flex justify-center items-center flex-col">
          <img src={getResultImage()} alt={score >= 5 ? "Pass" : "Fail"} className="mb-4 w-[50%] h-[50%]" />
          <h2>You scored {score} out of {questions.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
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
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4"
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default TestComponent;
