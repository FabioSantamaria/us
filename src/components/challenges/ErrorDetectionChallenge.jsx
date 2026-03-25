import React, { useState } from 'react'

const ErrorDetectionChallenge = ({ onComplete, partnerName }) => {
  const [correction, setCorrection] = useState('')
  const [showError, setShowError] = useState(false)

  const systemError = "ERROR EN EL SISTEMA: 'Andrea odia los gatos'"
  const correctAnswer = "AMA"

  const handleSubmit = (e) => {
    e.preventDefault()
    if (correction.toUpperCase() === correctAnswer) {
      onComplete()
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 2000)
    }
  }

  return (
    <div className="error-detection-challenge">
      <div className="challenge-header">
        <h3>🚨 Detección de Error</h3>
        <p>{partnerName}, el sistema ha detectado un error crítico...</p>
      </div>

      <div className="error-container">
        <div className="error-display">
          <div className="error-label">⚠️ SYSTEM ERROR</div>
          <div className="error-message">{systemError}</div>
        </div>

        <div className="correction-task">
          <h4>Misión: Corregir el Error</h4>
          <p>¿Qué palabra debería reemplazar a "odia"?</p>
          <p className="hint">Piensa en lo que {partnerName} realmente siente...</p>
        </div>

        <form onSubmit={handleSubmit} className="answer-form">
          <div className="input-group">
            <input
              type="text"
              value={correction}
              onChange={(e) => setCorrection(e.target.value)}
              placeholder="Palabra correcta..."
              className="correction-input"
              autoFocus
            />
          </div>

          <button type="submit" className="submit-challenge-btn">
            Corregir Sistema
          </button>
        </form>

        {showError && (
          <div className="error-message">
            Corrección incorrecta. Piensa en el corazón ❤️
          </div>
        )}
      </div>
    </div>
  )
}

export default ErrorDetectionChallenge
