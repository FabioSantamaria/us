import React, { useState, useEffect } from 'react'

const InteractiveChallenge = ({ onComplete, partnerName }) => {
  const [clicks, setClicks] = useState([])
  const [showError, setShowError] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [gameActive, setGameActive] = useState(false)

  const sequence = [2, 4, 1, 3] // Secuencia correcta de botones
  const gridSize = 4

  useEffect(() => {
    let timer
    if (gameActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    } else if (timeLeft === 0 && gameActive) {
      setGameActive(false)
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
        resetGame()
      }, 2000)
    }
    return () => clearTimeout(timer)
  }, [timeLeft, gameActive])

  const handleButtonClick = (buttonNumber) => {
    if (!gameActive) return

    const newClicks = [...clicks, buttonNumber]
    setClicks(newClicks)

    // Verificar si la secuencia es correcta hasta ahora
    const currentIndex = newClicks.length - 1
    if (newClicks[currentIndex] !== sequence[currentIndex]) {
      // Secuencia incorrecta
      setGameActive(false)
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
        resetGame()
      }, 2000)
    } else if (newClicks.length === sequence.length) {
      // Secuencia completada correctamente
      setGameActive(false)
      setTimeout(() => onComplete(), 1000)
    }
  }

  const startGame = () => {
    setGameActive(true)
    setTimeLeft(30)
    setClicks([])
  }

  const resetGame = () => {
    setGameActive(false)
    setTimeLeft(30)
    setClicks([])
  }

  return (
    <div className="interactive-challenge">
      <div className="challenge-header">
        <h3>⏱️ Mini Reto Interactivo</h3>
        <p>{partnerName}, prueba tu memoria y reflejos...</p>
      </div>

      <div className="interactive-container">
        <div className="game-instructions">
          <h4>Misión:</h4>
          <p>Reproduce la secuencia: 2 → 4 → 1 → 3</p>
          <p>Tienes 30 segundos para completarla</p>
        </div>

        <div className="game-status">
          <div className={`timer ${timeLeft <= 10 ? 'warning' : ''}`}>
            ⏰ Tiempo: {timeLeft}s
          </div>
          <div className="progress">
            Progreso: {clicks.length} / {sequence.length}
          </div>
        </div>

        <div className="button-grid">
          {Array.from({ length: gridSize }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => handleButtonClick(number)}
              className={`grid-button ${clicks.includes(number) ? 'clicked' : ''} ${!gameActive && clicks.includes(number) && sequence[clicks.indexOf(number)] === number ? 'correct' : ''}`}
              disabled={!gameActive}
            >
              {number}
            </button>
          ))}
        </div>

        {!gameActive && clicks.length === 0 && (
          <button onClick={startGame} className="start-game-btn">
            🚀 Empezar Reto
          </button>
        )}

        {showError && (
          <div className="error-message">
            ¡Secuencia incorrecta! Inténtalo de nuevo...
          </div>
        )}

        {clicks.length > 0 && clicks.length < sequence.length && gameActive && (
          <div className="sequence-feedback">
            Último botón: {clicks[clicks.length - 1]}
          </div>
        )}
      </div>
    </div>
  )
}

export default InteractiveChallenge
