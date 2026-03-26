import React, { useState, useEffect } from 'react'

const InteractiveChallenge = ({ onComplete, partnerName }) => {
  const [clicks, setClicks] = useState([])
  const [showError, setShowError] = useState(false)
  const [timeLeft, setTimeLeft] = useState(45)
  const [gameActive, setGameActive] = useState(false)
  const [level, setLevel] = useState(1)

  const sequences = {
    1: [3, 1, 4, 2, 5], // Nivel 1: 5 botones
    2: [2, 4, 6, 1, 5, 3], // Nivel 2: 6 botones
    3: [1, 5, 3, 7, 2, 6, 4] // Nivel 3: 7 botones
  }

  const currentSequence = sequences[level]
  const gridSize = level === 1 ? 5 : level === 2 ? 6 : 7

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
    if (newClicks[currentIndex] !== currentSequence[currentIndex]) {
      // Secuencia incorrecta
      setGameActive(false)
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
        resetGame()
      }, 2000)
    } else if (newClicks.length === currentSequence.length) {
      // Secuencia completada correctamente
      if (level < 3) {
        // Pasar al siguiente nivel
        setLevel(level + 1)
        setGameActive(false)
        setTimeout(() => {
          setTimeLeft(45 - (level * 5)) // Menos tiempo por nivel
          setClicks([])
          setGameActive(true)
        }, 1500)
      } else {
        // Todos los niveles completados
        setGameActive(false)
        setTimeout(() => onComplete(), 1000)
      }
    }
  }

  const startGame = () => {
    setGameActive(true)
    setTimeLeft(45)
    setClicks([])
    setLevel(1)
  }

  const resetGame = () => {
    setGameActive(false)
    setTimeLeft(45)
    setClicks([])
    setLevel(1)
  }

  const getSequenceDisplay = () => {
    return currentSequence.map(num => num).join(' → ')
  }

  return (
    <div className="interactive-challenge">
      <div className="challenge-header">
        <h3>⏱️ External Environment</h3>
        <p>Accediendo a entorno externo... Condiciones variables detectadas...</p>
      </div>

      <div className="interactive-container">
        <div className="game-instructions">
          <h4>Protocolo de Sincronización Ambiental:</h4>
          <p><strong>Nivel {level} de 3:</strong> Reproduce la secuencia ambiental</p>
          <div className="sequence-display">
            <strong>Secuencia: {getSequenceDisplay()}</strong>
          </div>
          <p>Tienes {timeLeft} segundos para completar este nivel</p>
          <p className="level-progress">
            Progreso general: Nivel {level} de 3
          </p>
        </div>

        <div className="game-status">
          <div className={`timer ${timeLeft <= 10 ? 'warning' : ''}`}>
            ⏰ Tiempo: {timeLeft}s
          </div>
          <div className="progress">
            Nivel {level}: {clicks.length} / {currentSequence.length}
          </div>
          <div className="overall-progress">
            Progreso total: {level - 1}/3 niveles completados
          </div>
        </div>

        <div className={`button-grid grid-${gridSize}`}>
          {Array.from({ length: gridSize }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => handleButtonClick(number)}
              className={`grid-button ${clicks.includes(number) ? 'clicked' : ''} ${!gameActive && clicks.includes(number) && currentSequence[clicks.indexOf(number)] === number ? 'correct' : ''}`}
              disabled={!gameActive}
            >
              {number}
            </button>
          ))}
        </div>

        {!gameActive && clicks.length === 0 && (
          <button onClick={startGame} className="start-game-btn">
            🚀 Iniciar Sincronización
          </button>
        )}

        {showError && (
          <div className="error-message">
            ¡Sincronización fallida! El entorno externo es inestable...
          </div>
        )}

        {clicks.length > 0 && clicks.length < currentSequence.length && gameActive && (
          <div className="sequence-feedback">
            Última señal ambiental: {clicks[clicks.length - 1]}
          </div>
        )}

        {level > 1 && !gameActive && clicks.length === 0 && (
          <div className="level-complete">
            <p>✅ Nivel {level - 1} completado</p>
            <p>Preparando siguiente nivel...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default InteractiveChallenge
