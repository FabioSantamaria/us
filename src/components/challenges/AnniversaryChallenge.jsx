import React, { useState } from 'react'

const AnniversaryChallenge = ({ onComplete, partnerName }) => {
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleAnniversaryClick = () => {
    setShowSuccess(true)
    setTimeout(() => {
      onComplete()
    }, 2000)
  }

  return (
    <div className="anniversary-challenge">
      <div className="challenge-header">
        <h3>🎉 Ninth Anniversary Protocol</h3>
        <p>¡9 años de amor incondicional!</p>
      </div>

      <div className="anniversary-container">
        <div className="anniversary-message">
          <h4>💕 Sistema de Amor Recuperado</h4>
          <p className="anniversary-text">
            {partnerName}, has completado todos los desafíos del sistema Recovery.
          </p>
          <p className="anniversary-text">
            Pero hay un último protocolo especial...
          </p>
          <p className="anniversary-highlight">
            <strong>¡NUESTRO NOVENO ANIVERSARIO! 🎂</strong>
          </p>
          <p className="anniversary-text">
            Durante 9 años, nuestro amor ha superado cada obstáculo,
            cada desafío, cada prueba... y aquí estamos, más fuertes que nunca.
          </p>
        </div>

        <div className="anniversary-stats">
          <div className="stat-item">
            <span className="stat-number">9</span>
            <span className="stat-label">Años Juntos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Momentos Especiales</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">❤️</span>
            <span className="stat-label">Amor Eterno</span>
          </div>
        </div>

        <div className="anniversary-code">
          <h5>🔑 Código del Aniversario</h5>
          <p>Para celebrar nuestros 9 años, el código final es:</p>
          <div className="code-display">
            <span className="code-digit">0</span>
            <span className="code-digit">0</span>
            <span className="code-digit">0</span>
            <span className="code-digit">9</span>
          </div>
          <p className="code-meaning">Nueve años de amor incondicional ❤️</p>
        </div>

        <button 
          onClick={handleAnniversaryClick}
          className="anniversary-btn"
        >
          🎉 Celebrar Nuestro Amor
        </button>

        {showSuccess && (
          <div className="anniversary-success">
            <p>🎂 ¡FELIZ NOVENO ANIVERSARIO, ANDREA! 🎂</p>
            <p>¡El amor más grande del universo! 💕</p>
          </div>
        )}

        {showError && (
          <div className="error-message">
            ¡Imposible! Nuestro amor es perfecto... 💕
          </div>
        )}
      </div>
    </div>
  )
}

export default AnniversaryChallenge
