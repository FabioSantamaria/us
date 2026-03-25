import React, { useState } from 'react'

const RiddleChallenge = ({ onComplete, partnerName }) => {
  const [answer, setAnswer] = useState('')
  const [showError, setShowError] = useState(false)

  const riddle = "Tengo ciudades pero no casas, montañas pero no árboles, agua pero no peces. ¿Qué soy?"
  const correctAnswer = "MAPA"

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('RiddleChallenge submitted:', answer)
    if (answer.toUpperCase() === correctAnswer) {
      console.log('RiddleChallenge correct answer, calling onComplete')
      onComplete()
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 2000)
    }
  }

  console.log('RiddleChallenge render')

  return (
    <div className="riddle-challenge">
      <div className="challenge-header">
        <h3>🧩 Adivinanza</h3>
        <p>{partnerName}, demuestra tu ingenio...</p>
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
              placeholder="Tu respuesta..."
              className="riddle-input"
              autoFocus
            />
          </div>

          <button type="submit" className="submit-challenge-btn">
            Resolver Adivinanza
          </button>
        </form>

        {showError && (
          <div className="error-message">
            Respuesta incorrecta. Piensa en algo que exploras...
          </div>
        )}

        <div className="hint-box">
          <p>💡 Pista: Es algo que usas para orientarte...</p>
        </div>
      </div>
    </div>
  )
}

export default RiddleChallenge
