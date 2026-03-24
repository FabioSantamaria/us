import React, { useState } from 'react'

const ChoiceLevel = ({ onComplete, partnerName }) => {
  const [selectedChoice, setSelectedChoice] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const choices = [
    {
      id: 'logic',
      title: 'A) Seguir la Lógica',
      description: 'Analizar los patrones y encontrar la solución racional',
      isCorrect: false,
      message: '🤔 La lógica es buena, pero a veces el corazón sabe más...'
    },
    {
      id: 'heart',
      title: 'B) Seguir el Corazón',
      description: 'Confiar en el instinto y lo que sentimos',
      isCorrect: true,
      message: '❤️ ¡Correcto! El corazón nunca miente...'
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
    <div className="choice-level">
      <div className="level-header">
        <h2>🎭 El Momento de la Verdad</h2>
        <p>{partnerName}, llega el momento de elegir tu camino...</p>
      </div>

      <div className="choice-container">
        <h3>¿Cómo resolverás este enigma?</h3>
        
        <div className="choices-grid">
          {choices.map((choice) => (
            <button
              key={choice.id}
              onClick={() => handleChoice(choice)}
              className={`choice-btn ${selectedChoice?.id === choice.id ? 'selected' : ''}`}
              disabled={showResult}
            >
              <h4>{choice.title}</h4>
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

      <div className="physical-hint">
        <h3>🎁 Si eliges bien...</h3>
        <p>Dirígete al lugar más dulce de la casa. Allí encontrarás:</p>
        <ul>
          <li>Un postre especial</li>
          <li>El código final: <strong>2024</strong></li>
        </ul>
      </div>
    </div>
  )
}

export default ChoiceLevel
