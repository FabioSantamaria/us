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
      message: '💖 ¡Correcto! El corazón nunca miente...'
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
        <h3>🎭 El Momento de la Verdad</h3>
        <p>{partnerName}, llega el momento de elegir tu camino...</p>
      </div>

      <div className="choice-container">
        <h4>¿Cómo resolverás este enigma?</h4>
        
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
              <p className="next-hint">🎁 Busca en nuestra cocina el siguiente regalo...</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ChoiceChallenge
