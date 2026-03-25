import React, { useState } from 'react'
import CodeInput from './CodeInput'

const ClueScreen = ({ clue, expectedCode, onCodeSubmit, partnerName }) => {
  const [showCodeInput, setShowCodeInput] = useState(false)

  const handleCodeSubmit = (code) => {
    const isCorrect = onCodeSubmit(code)
    return isCorrect
  }

  return (
    <div className="clue-screen">
      <div className="clue-container">
        <div className="clue-header">
          <h2>🎁 ¡Desafío Completado!</h2>
          <p>¡Excel trabajo, {partnerName}! Has superado el reto digital.</p>
        </div>

        <div className="clue-content">
          <div className="clue-box">
            <h3>📍 Pista para tu Búsqueda Física</h3>
            <div className="clue-text">
              {clue}
            </div>
          </div>

          <div className="instructions">
            <h4>🔍 Instrucciones:</h4>
            <ol>
              <li>Busca en el lugar indicado</li>
              <li>Encuentra el regalo especial</li>
              <li>Dentro del regalo hay un código de 4 dígitos</li>
              <li>Vuelve aquí y introduce el código</li>
            </ol>
          </div>

          {!showCodeInput ? (
            <div className="code-prompt">
              <button 
                onClick={() => setShowCodeInput(true)}
                className="have-code-btn"
              >
                🎯 Ya tengo el código
              </button>
            </div>
          ) : (
            <div className="code-section">
              <h3>🔓 Introduce el Código del Regalo</h3>
              <CodeInput 
                expectedCode={expectedCode}
                onSubmit={handleCodeSubmit}
                placeholder="Código de 4 dígitos del regalo"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ClueScreen
