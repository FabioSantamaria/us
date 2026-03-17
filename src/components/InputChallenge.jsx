import React, { useState } from 'react'

const InputChallenge = ({ 
  title, 
  description, 
  hint, 
  correctAnswer, 
  onComplete, 
  partnerName,
  inputType = 'text',
  placeholder = 'Enter your answer...'
}) => {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const [attempts, setAttempts] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const normalizedInput = input.toUpperCase().trim()
    
    if (normalizedInput === correctAnswer.toUpperCase()) {
      onComplete()
    } else {
      setAttempts(prev => prev + 1)
      setError('Incorrect. Please try again.')
      setTimeout(() => setError(''), 3000)
    }
  }

  return (
    <div className="input-challenge">
      <div className="challenge-header">
        <h2 className="challenge-title">{title}</h2>
        <p className="challenge-description">{description}</p>
        {partnerName && (
          <p className="personal-message">For {partnerName}, with love...</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="challenge-form">
        <div className="input-group">
          <input
            type={inputType}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="challenge-input"
            autoFocus
          />
          {hint && (
            <p className="hint-text">Hint: {hint}</p>
          )}
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <button type="submit" className="submit-btn">
          Submit Answer
        </button>

        {attempts > 0 && (
          <p className="attempts-counter">Attempts: {attempts}</p>
        )}
      </form>
    </div>
  )
}

export default InputChallenge
