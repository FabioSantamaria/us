import React, { useState } from 'react'

const EmotionalLevel = ({ onComplete, partnerName }) => {
  const [showHint, setShowHint] = useState(false)
  const [showError, setShowError] = useState(false)
  const [answer, setAnswer] = useState('')

  const question = "¿Quién dijo primero 'te quiero'?"
  const correctAnswer = "YO" // Ajustar según vuestra historia
  
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
    <div className="emotional-level">
      <div className="level-header">
        <h2>🔓 Desafío Emocional</h2>
        <p>Esta pregunta solo tú y {partnerName} conocen la respuesta...</p>
      </div>

      <div className="question-container">
        <h3 className="emotional-question">{question}</h3>
        
        <form onSubmit={handleSubmit} className="answer-form">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Escribe tu respuesta..."
            className="answer-input"
            autoFocus
          />
          <button type="submit" className="submit-btn">
            Desbloquear Pista
          </button>
        </form>

        {showError && (
          <div className="error-message">
            Respuesta incorrecta. Piensa en ese momento especial...
          </div>
        )}

        <button 
          onClick={() => setShowHint(!showHint)} 
          className="hint-btn"
        >
          {showHint ? 'Ocultar' : 'Mostrar'} Pista
        </button>

        {showHint && (
          <div className="hint-box">
            <p>💡 Recuerda esa noche especial bajo las estrellas...</p>
          </div>
        )}
      </div>

      <div className="physical-hint">
        <h3>🎁 Cuando aciertes...</h3>
        <p>Busca donde guardamos nuestras primeras fotos. Allí encontrarás:</p>
        <ul>
          <li>Un pequeño regalo</li>
          <li>El código para el siguiente nivel: <strong>2_7_</strong></li>
        </ul>
      </div>
    </div>
  )
}

export default EmotionalLevel
