import React, { useState } from 'react'

const HiddenMessageChallenge = ({ onComplete, partnerName }) => {
  const [answer, setAnswer] = useState('')
  const [showError, setShowError] = useState(false)

  const hiddenText = [
    "N   O   M   I   R   E   S",
    "L   A   S   P   R   I   M",
    "E   R   A   S   L   E   T",
    "R   A   S   D   E   C   A",
    "D   A   P   A   L   A   B",
    "R   A"
  ]

  const correctAnswer = "NOS"

  const handleSubmit = (e) => {
    e.preventDefault()
    if (answer.toUpperCase() === correctAnswer) {
      onComplete()
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 2000)
    }
  }

  return (
    <div className="hidden-message-challenge">
      <div className="challenge-header">
        <h3>🔍 Mensaje Oculto</h3>
        <p>{partnerName}, encuentra el mensaje secreto...</p>
      </div>

      <div className="hidden-message-container">
        <div className="message-instruction">
          <h4>Instrucción:</h4>
          <p>Solo mira las primeras letras de cada línea...</p>
        </div>

        <div className="hidden-text">
          {hiddenText.map((line, index) => (
            <div key={index} className="text-line">
              {line.split('').map((char, charIndex) => (
                <span key={charIndex} className="letter">
                  {char}
                </span>
              ))}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="answer-form">
          <div className="input-group">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Mensaje oculto..."
              className="hidden-input"
              autoFocus
            />
          </div>

          <button type="submit" className="submit-challenge-btn">
            Revelar Mensaje
          </button>
        </form>

        {showError && (
          <div className="error-message">
            Mensaje incorrecto. Fíjate bien en las primeras letras...
          </div>
        )}

        <div className="hint-box">
          <p>💡 Pista: Lee verticalmente las primeras letras...</p>
        </div>
      </div>
    </div>
  )
}

export default HiddenMessageChallenge
