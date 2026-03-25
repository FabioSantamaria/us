import React, { useState, useEffect } from 'react'
import CodeInput from './CodeInput'
import ClueScreen from './ClueScreen'

const LevelWrapper = ({ 
  levelNumber, 
  totalLevels, 
  title, 
  intro, 
  children, 
  clue, 
  expectedCode, 
  onLevelComplete, 
  partnerName 
}) => {
  const [showClue, setShowClue] = useState(false)

  // Resetear estado cuando cambia el nivel
  useEffect(() => {
    console.log('LevelWrapper useEffect - resetting state for level:', title)
    setShowClue(false)
  }, [title])

  const handleChallengeComplete = () => {
    console.log('Challenge completed, showing clue...')
    setShowClue(true)
  }

  const handleCodeSubmit = (code) => {
    if (code === expectedCode) {
      onLevelComplete()
    }
    return code === expectedCode
  }

  console.log('LevelWrapper render - showClue:', showClue, 'title:', title)

  // Renderizar el desafío directamente
  const challengeComponent = children({ onComplete: handleChallengeComplete, partnerName })

  return (
    <div className="level-wrapper">
      {/* Header del nivel */}
      <div className="level-header">
        <h1 className="game-title">System Recovery</h1>
        <div className="level-progress">
          Nivel {levelNumber} de {totalLevels}
        </div>
        <h2 className="level-title">{title}</h2>
      </div>

      {/* Contenido principal */}
      <div className="level-content">
        {!showClue ? (
          <div className="challenge-section">
            {/* Introducción */}
            <div className="intro-section">
              <p className="intro-text">{intro}</p>
            </div>

            {/* Desafío dinámico */}
            <div className="challenge-container">
              {challengeComponent}
            </div>
          </div>
        ) : (
          <ClueScreen 
            clue={clue}
            expectedCode={expectedCode}
            onCodeSubmit={handleCodeSubmit}
            partnerName={partnerName}
          />
        )}
      </div>
    </div>
  )
}

export default LevelWrapper
