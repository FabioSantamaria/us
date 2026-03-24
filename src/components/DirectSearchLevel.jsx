import React, { useState } from 'react'

const DirectSearchLevel = ({ onComplete, partnerName }) => {
  const [code, setCode] = useState('')
  const [showError, setShowError] = useState(false)

  const correctCode = 'NIDO' // Código que estará junto al regalo físico
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (code.toUpperCase() === correctCode) {
      onComplete()
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 2000)
    }
  }

  return (
    <div className="direct-search-level">
      <div className="level-header">
        <h2>🔍 Búsqueda del Tesoro</h2>
        <p>{partnerName}, es hora de una búsqueda directa...</p>
      </div>

      <div className="search-instructions">
        <div className="clue-box">
          <h3>📍 PISTA DE BÚSQUEDA</h3>
          <p className="main-clue">
            "Donde guardamos los sueños y las risas,
            donde cada objeto cuenta nuestra historia.
            Busca en el rincón de los recuerdos."
          </p>
          <p className="location-hint">
            💡 Piensa en donde guardamos cosas especiales...
          </p>
        </div>

        <div className="gift-info">
          <h3>🎁 Qué encontrarás:</h3>
          <ul>
            <li>Una caja con recuerdos especiales</li>
            <li>Una sorpresa dentro</li>
            <li>Un código escrito en un papel: <strong>????</strong></li>
          </ul>
        </div>
      </div>

      <div className="code-input-section">
        <h3>🔓 Introduce el código que encontraste</h3>
        
        <form onSubmit={handleSubmit} className="code-form">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Código del regalo..."
            className="code-input"
            autoFocus
          />
          <button type="submit" className="submit-btn">
            Validar Código
          </button>
        </form>

        {showError && (
          <div className="error-message">
            Código incorrecto. ¿Revisaste bien el regalo? 🎁
          </div>
        )}
      </div>

      <div className="next-hint">
        <h3>🚀 Al completar...</h3>
        <p>El siguiente código te esperará junto al regalo que encuentres</p>
      </div>
    </div>
  )
}

export default DirectSearchLevel
