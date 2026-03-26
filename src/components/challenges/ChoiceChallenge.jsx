import React, { useState } from 'react'

const ChoiceChallenge = ({ onComplete, partnerName }) => {
  const [selectedChoice, setSelectedChoice] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const choices = [
    {
      id: 'logic',
      title: '🧠 Seguir la Lógica',
      description: 'Analizar patrones y encontrar la solución racional',
      isCorrect: false,
      message: '🤔 La lógica es útil, pero a veces el corazón sabe más...'
    },
    {
      id: 'heart',
      title: '❤️ Seguir el Corazón',
      description: 'Confiar en el instinto y lo que sentimos',
      isCorrect: true,
      message: '💖 ¡Decisión correcta! Prioridad emocional confirmada...'
    }
  ]

  const handleChoice = (choice) => {
    setSelectedChoice(choice)
    setShowResult(true)
    
    if (choice.isCorrect) {
      setTimeout(() => onComplete(), 3000)
    } else {
      setTimeout(() => {
        setShowResult(false)
        setSelectedChoice(null)
      }, 3000)
    }
  }

  return (
    <div className="choice-challenge">
      <div className="challenge-header">
        <h3>🎭 Emotional Override</h3>
        <p>Sistema en conflicto... Lógica vs emoción...</p>
      </div>

      <div className="choice-container">
        <h4>Selecciona el protocolo correcto:</h4>
        
        <div className="choices-grid">
          {choices.map((choice) => (
            <button
              key={choice.id}
              onClick={() => handleChoice(choice)}
              className={`choice-btn ${selectedChoice?.id === choice.id ? 'selected' : ''}`}
              disabled={showResult}
            >
              <h5>{choice.title}</h5>
              <p>{choice.description}</p>
            </button>
          ))}
        </div>

        {showResult && selectedChoice && (
          <div className={`result-message ${selectedChoice.isCorrect ? 'success' : 'error'}`}>
            <p>{selectedChoice.message}</p>
            {selectedChoice.isCorrect && (
              <p className="next-hint">🎁 Sistema sincronizado. Busca en el lugar de descanso...</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ChoiceChallenge
