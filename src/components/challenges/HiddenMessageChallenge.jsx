import React, { useState } from 'react'

const HiddenMessageChallenge = ({ onComplete, partnerName }) => {
  const [selectedOption, setSelectedOption] = useState('')
  const [showError, setShowError] = useState(false)

  const options = [
    "DUCHA CALIENTE",
    "MANTA", 
    "RADIADOR",
    "CONGELADOR"
  ]

  const correctAnswer = "CONGELADOR"

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedOption === correctAnswer) {
      onComplete()
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 2000)
    }
  }

  return (
    <div className="hidden-message-challenge">
      <div className="challenge-header">
        <h3>🔍 Thermal Anomaly</h3>
        <p>Detectando variación térmica en los datos del sistema...</p>
      </div>

      <div className="hidden-message-container">
        <div className="message-instruction">
          <h4>Protocolo de Análisis Térmico:</h4>
          <p>El sistema ha detectado una anomalía en los elementos térmicos.</p>
          <p>Cuatro elementos están registrados, pero uno no corresponde a esta categoría.</p>
          <p><strong>¿Qué elemento no encaja?</strong></p>
        </div>

        <div className="options-container">
          {options.map((option, index) => (
            <label key={index} className="thermal-option">
              <input
                type="radio"
                name="thermal-element"
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="thermal-radio"
              />
              <span className="option-text">{option}</span>
            </label>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="answer-form">
          <button 
            type="submit" 
            className="submit-challenge-btn"
            disabled={!selectedOption}
          >
            Analizar Anomalía
          </button>
        </form>

        {showError && (
          <div className="error-message">
            Análisis incorrecto. Piensa en las temperaturas...
          </div>
        )}

        <div className="hint-box">
          <p>💡 Pista: ¿Cuál de estos elementos mantiene las cosas <strong>frías</strong> en lugar de calientes?</p>
        </div>
      </div>
    </div>
  )
}

export default HiddenMessageChallenge
