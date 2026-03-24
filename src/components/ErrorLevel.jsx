import React, { useState } from 'react'

const ErrorLevel = ({ onComplete, partnerName }) => {
  const [showHint, setShowHint] = useState(false)
  const [showError, setShowError] = useState(false)
  const [correction, setCorrection] = useState('')

  const systemError = "ERROR EN EL SISTEMA: 'Andrea odia los gatos'"
  const correctAnswer = "AMA" // La corrección: odia -> ama
  
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
    <div className="error-level">
      <div className="level-header">
        <h2>🔍 Encuentra el Error</h2>
        <p>El sistema ha detectado un error crítico. ¡Corrígelo!</p>
      </div>

      <div className="error-display">
        <div className="error-message">
          <span className="error-label">⚠️ SYSTEM ERROR:</span>
          <p className="error-text">"{systemError}"</p>
        </div>
      </div>

      <div className="correction-container">
        <h3>¿Cuál es la palabra correcta para reemplazar el error?</h3>
        <p>Escribe solo la palabra que debería estar en lugar de "odia"</p>
        
        <form onSubmit={handleSubmit} className="correction-form">
          <input
            type="text"
            value={correction}
            onChange={(e) => setCorrection(e.target.value)}
            placeholder="Palabra correcta..."
            className="correction-input"
            autoFocus
          />
          <button type="submit" className="submit-btn">
            Corregir Sistema
          </button>
        </form>

        {showError && (
          <div className="error-message">
            esa no es la palabra correcta... piensa en el corazón ❤️
          </div>
        )}

        <button 
          onClick={() => setShowHint(!showHint)} 
          className="hint-btn"
        >
          {showHint ? 'Ocultar' : 'Mostrar'} Ayuda
        </button>

        {showHint && (
          <div className="hint-box">
            <p>💡 Piensa en lo que {partnerName} realmente siente por los gatos...</p>
          </div>
        )}
      </div>

      <div className="physical-hint">
        <h3>🎁 Al corregir...</h3>
        <p>Ve a donde {partnerName} deja su libro favorito. Allí encontrarás:</p>
        <ul>
          <li>Una sorpresa especial</li>
          <li>El siguiente código: <strong>CALMA</strong></li>
        </ul>
      </div>
    </div>
  )
}

export default ErrorLevel
