import React, { useState } from 'react'

const RiddleChallenge = ({ onComplete, partnerName }) => {
  const [answer, setAnswer] = useState('')
  const [showError, setShowError] = useState(false)

  const riddle = "Tengo ciudades pero no casas, montañas pero no árboles, agua pero no peces. ¿Qué soy?"
  const correctAnswer = "MAPA"

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
    <div className="riddle-challenge">
      <div className="challenge-header">
        <h3>🧩 Archive Access</h3>
        <p>Descifrando metáforas del sistema...</p>
      </div>

      <div className="riddle-container">
        <div className="riddle-text">
          {riddle}
        </div>

        <form onSubmit={handleSubmit} className="answer-form">
          <div className="input-group">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Respuesta del archivo..."
              className="riddle-input"
              autoFocus
            />
          </div>

          <button type="submit" className="submit-challenge-btn">
            Descifrar Archivo
          </button>
        </form>

        {showError && (
          <div className="error-message">
            Archivo corrupto. Intenta otra decodificación...
          </div>
        )}

        <div className="hint-box">
          <p>💡 Pista: Piensa en navegación y orientación...</p>
        </div>
      </div>
    </div>
  )
}

export default RiddleChallenge
