import React, { useState } from 'react'

const CipherChallenge = ({ onComplete, partnerName }) => {
  const [answer, setAnswer] = useState('')
  const [showError, setShowError] = useState(false)

  const cipherText = "3-15-4-9-7-15"
  const correctAnswer = "CODIGO"

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
    <div className="cipher-challenge">
      <div className="challenge-header">
        <h3>🔐 Puzzle Cifrado</h3>
        <p>{partnerName}, descifra este mensaje secreto...</p>
      </div>

      <div className="cipher-container">
        <div className="cipher-info">
          <h4>Sistema de Cifrado:</h4>
          <p>A=1, B=2, C=3, ..., Z=26</p>
        </div>

        <div className="cipher-text">
          <h4>Mensaje Cifrado:</h4>
          <div className="encrypted-message">{cipherText}</div>
        </div>

        <form onSubmit={handleSubmit} className="answer-form">
          <div className="input-group">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Palabra descifrada..."
              className="cipher-input"
              autoFocus
            />
          </div>

          <button type="submit" className="submit-challenge-btn">
            Descifrar Mensaje
          </button>
        </form>

        {showError && (
          <div className="error-message">
            Respuesta incorrecta. Revisa tu descifrado...
          </div>
        )}

        <div className="hint-box">
          <p>💡 Pista: Cada número representa una letra del alfabeto</p>
        </div>
      </div>
    </div>
  )
}

export default CipherChallenge
