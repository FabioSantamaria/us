import React, { useState } from 'react'
import readingImage from '../../assets/images/PXL_20260327_095806458.jpg'

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
        <img 
          src={readingImage} 
          alt="Rincón de lectura junto a la ventana"
          className="challenge-image"
        />

        <div className="question-container">
          <h4>¿Por dónde entra la luz que ilumina este rincón?</h4>
          <p className="hint">Sin esa luz, la ponse no sería lo mismo...</p>
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
          <p>💡 Pista: Cada mañana, lo primero que ilumina la habitación pasa por ahí...</p>
        </div>
      </div>
    </div>
  )
}

export default ImageChallenge
