import React, { useState } from 'react'

const ImageChallenge = ({ onComplete, partnerName }) => {
  const [answer, setAnswer] = useState('')
  const [showError, setShowError] = useState(false)

  // Simulación de imagen de un lugar real
  const imageDescription = "Foto del rincón de lectura junto a la ventana"
  const correctAnswer = "VENTANA"

  const handleSubmit = (e) => {
    e.preventDefault()
    if (answer.toUpperCase() === correctAnswer) {
      onComplete()
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 2000)
    }
  }

  return (
    <div className="image-challenge">
      <div className="challenge-header">
        <h3>📸 Reconocimiento de Lugar</h3>
        <p>{partnerName}, observa esta imagen con atención...</p>
      </div>

      <div className="image-container">
        <div className="image-placeholder">
          {/* En producción, aquí iría una imagen real */}
          <div className="image-box">
            <div className="image-icon">🖼️</div>
            <div className="image-description">
              <p><strong>Lugar:</strong> {imageDescription}</p>
              <p><strong>Detalles:</strong></p>
              <ul>
                <li>Luz natural entrando por la ventana</li>
                <li>Libros apilados en una mesita</li>
                <li>Planta pequeña en la esquina</li>
                <li>Taza de café recién hecho</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="question-container">
          <h4>¿Qué elemento de esta imagen es la clave para encontrar el regalo?</h4>
          <p className="hint">Piensa en el elemento principal del lugar...</p>
        </div>

        <form onSubmit={handleSubmit} className="answer-form">
          <div className="input-group">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Elemento clave..."
              className="image-input"
              autoFocus
            />
          </div>

          <button type="submit" className="submit-challenge-btn">
            Identificar Lugar
          </button>
        </form>

        {showError && (
          <div className="error-message">
            Respuesta incorrecta. Observa mejor la imagen...
          </div>
        )}

        <div className="hint-box">
          <p>💡 Pista: Es por donde entra la luz del día...</p>
        </div>
      </div>
    </div>
  )
}

export default ImageChallenge
