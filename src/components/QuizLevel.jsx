import React, { useState } from 'react'

const QuizLevel = ({ onComplete, partnerName }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showError, setShowError] = useState(false)

  const questions = [
    {
      question: "What is the most precious thing in life?",
      options: ["Gold", "Love", "Power", "Knowledge"],
      correct: 1
    },
    {
      question: "When two hearts beat as one, what do they create?",
      options: ["Music", "Silence", "Chaos", "Harmony"],
      correct: 3
    },
    {
      question: "What transcends time and space?",
      options: ["Matter", "Energy", "True connection", "Nothing"],
      correct: 2
    }
  ]

  const handleAnswer = (optionIndex) => {
    const newAnswers = [...answers, optionIndex]
    setAnswers(newAnswers)

    if (optionIndex === questions[currentQuestion].correct) {
      if (currentQuestion === questions.length - 1) {
        setTimeout(() => onComplete(), 500)
      } else {
        setCurrentQuestion(prev => prev + 1)
      }
    } else {
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
        setAnswers(newAnswers.slice(0, -1))
      }, 2000)
    }
  }

  return (
    <div className="quiz-level">
      <div className="quiz-header">
        <h2>System Authentication</h2>
        <p>Answer all questions correctly to proceed, {partnerName}.</p>
      </div>

      <div className="quiz-progress">
        Question {currentQuestion + 1} of {questions.length}
      </div>

      <div className="question-container">
        <h3 className="question-text">
          {questions[currentQuestion].question}
        </h3>

        <div className="options-grid">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`option-btn ${showError && answers[answers.length - 1] === index ? 'wrong' : ''}`}
              disabled={showError}
            >
              {option}
            </button>
          ))}
        </div>

        {showError && (
          <div className="error-message">
            Incorrect answer. Please try again.
          </div>
        )}
      </div>
    </div>
  )
}

export default QuizLevel
