import React, { useState } from 'react'

const EnvironmentLevel = ({ onComplete, partnerName }) => {
  const [code, setCode] = useState('')
  const [showError, setShowError] = useState(false)

  const correctCode = '2743' // Ejemplo: 2 llaves, 7 ganchos, 4 plantas, 3 fotos
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (code === correctCode) {
      onComplete()
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 2000)
    }
  }

  return (
    <div className="environment-level">
      <div className="level-header">
        <h2>🏠 Código en el Entorno</h2>
        <p>{partnerName}, el código está escondido en nuestro espacio...</p>
      </div>

      <div className="environment-clue">
        <div className="clue-message">
          <h3>📍 El código está donde siempre dejamos las llaves</h3>
          <p>Al llegar allí, encontrarás un papel con:</p>
          <div className="partial-code">
            <span className="code-digit">2</span>
            <span className="code-blank">_</span>
            <span className="code-digit">7</span>
            <span className="code-blank">_</span>
          </div>
        </div>

        <div className="completion-task">
          <h3>🔍 Para completar el código, cuenta:</h3>
          <div className="task-list">
            <div className="task-item">
              <span className="position">2ª posición:</span>
              <span className="description">¿Cuántas plantas tenemos en casa?</span>
            </div>
            <div className="task-item">
              <span className="position">4ª posición:</span>
              <span className="description">¿Cuántas fotos tenemos en la mesita?</span>
            </div>
          </div>
          
          <div className="example">
            <p>📝 Ejemplo: Si tienes 4 plantas y 3 fotos → <strong>2743</strong></p>
          </div>
        </div>
      </div>

      <div className="code-input-section">
        <h3>🔓 Introduce el código completo</h3>
        
        <form onSubmit={handleSubmit} className="code-form">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Código de 4 cifras..."
            className="code-input"
            maxLength="4"
            autoFocus
          />
          <button type="submit" className="submit-btn">
            Validar Código
          </button>
        </form>

        {showError && (
          <div className="error-message">
            Código incorrecto. ¡Mira bien a tu alrededor! 🔍
          </div>
        )}
      </div>

      <div className="physical-hint">
        <h3>🎁 Al acertar...</h3>
        <p>Ve a nuestro sofá. Allí encontrarás:</p>
        <ul>
          <li>Una manta especial</li>
          <li>El siguiente código: <strong>RECUERDO</strong></li>
        </ul>
      </div>
    </div>
  )
}

export default EnvironmentLevel
