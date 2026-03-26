import React, { useState } from 'react'

const ErrorDetectionChallenge = ({ onComplete, partnerName }) => {
  const [correction, setCorrection] = useState('')
  const [showError, setShowError] = useState(false)

  const systemError = "ERROR: 'Andrea odia los gatos'"
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
        <h3>🚨 System Correction</h3>
        <p>Detectando anomalía en los datos del sistema...</p>
      </div>

      <div className="error-container">
        <div className="error-display">
          <div className="error-label">⚠️ ANOMALÍA DETECTADA</div>
          <div className="error-message">{systemError}</div>
        </div>

        <div className="correction-task">
          <h4>Misión: Corregir Datos del Sistema</h4>
          <p>El sistema ha registrado un error. Corrige la palabra incorrecta:</p>
          <p className="hint">Piensa en lo que el sistema realmente debería registrar...</p>
        </div>

        <form onSubmit={handleSubmit} className="answer-form">
          <div className="input-group">
            <input
              type="text"
              value={correction}
              onChange={(e) => setCorrection(e.target.value)}
              placeholder="Corrección del sistema..."
              className="correction-input"
              autoFocus
            />
          </div>

          <button type="submit" className="submit-challenge-btn">
            Aplicar Corrección
          </button>
        </form>

        {showError && (
          <div className="error-message">
            Corrección fallida. Revisa los parámetros emocionales...
          </div>
        )}
      </div>
    </div>
  )
}

export default ErrorDetectionChallenge
