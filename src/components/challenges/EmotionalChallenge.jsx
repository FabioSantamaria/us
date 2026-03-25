import React, { useState } from 'react'

const EmotionalChallenge = ({ onComplete, partnerName }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showError, setShowError] = useState(false)

  const question = "¿Qué momento especial compartimos bajo las estrellas?"
  const options = [
    "Nuestra primera cita",
    "El día que nos conocimos", 
    "Cuando dijiste 'te quiero'",
    "Nuestra primera aventura"
  ]
  const correctAnswer = "Cuando dijiste 'te quiero'"

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedAnswer === correctAnswer) {
      onComplete()
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 2000)
    }
  }

  return (
    <div className="emotional-challenge">
      <div className="challenge-header">
        <h3>💝 Desafío Emocional</h3>
        <p>Esta pregunta solo tú y {partnerName} conocen la respuesta...</p>
      </div>

      <div className="question-container">
        <h4 className="question">{question}</h4>
        
        <form onSubmit={handleSubmit} className="answer-form">
          <div className="options-grid">
            {options.map((option, index) => (
              <label key={index} className="option-label">
                <input
                  type="radio"
                  name="emotional-answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  className="radio-input"
                />
                <span className="option-text">{option}</span>
              </label>
            ))}
          </div>

          <button 
            type="submit" 
            className="submit-challenge-btn"
            disabled={!selectedAnswer}
          >
            Enviar Respuesta
          </button>
        </form>

        {showError && (
          <div className="error-message">
            Respuesta incorrecta. Piensa en ese momento especial...
          </div>
        )}
      </div>
    </div>
  )
}

export default EmotionalChallenge
