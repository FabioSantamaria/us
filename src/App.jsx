import { useState, useEffect } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'
import LevelWrapper from './components/LevelWrapper'
import FinalLevel from './components/FinalLevel'

// Importar desafíos
import EmotionalChallenge from './components/challenges/EmotionalChallenge'
import RiddleChallenge from './components/challenges/RiddleChallenge'
import CipherChallenge from './components/challenges/CipherChallenge'
import ErrorDetectionChallenge from './components/challenges/ErrorDetectionChallenge'
import ChoiceChallenge from './components/challenges/ChoiceChallenge'
import HiddenMessageChallenge from './components/challenges/HiddenMessageChallenge'
import InteractiveChallenge from './components/challenges/InteractiveChallenge'
import ImageChallenge from './components/challenges/ImageChallenge'

const LEVELS = [
  {
    id: 'level1',
    title: 'Memory Initialization',
    intro: 'Iniciando recuperación del sistema...\nDetectando recuerdos esenciales...\n\nAndrea, para restaurar el sistema, necesitamos acceder a un momento clave.',
    clue: '🎁 Busca en el sitio donde guardamos cosas que casi nunca usamos, pero nunca tiraríamos.',
    expectedCode: '1234',
    challenge: EmotionalChallenge
  },
  {
    id: 'level2',
    title: 'Archive Access',
    intro: 'Accediendo a archivos secundarios...\nAlgunas respuestas no están en la memoria, sino en lo que aún no ha sido escrito.',
    clue: '🎁 Hoy no vamos a cocinar… pero aun así tendrás que abrirlo.',
    expectedCode: '5678',
    challenge: RiddleChallenge
  },
  {
    id: 'level3',
    title: 'Logic Decryption',
    intro: 'Activando módulo lógico...\nProcesando secuencias cifradas...',
    clue: '🎁 A veces lo más interesante no está en la pantalla, sino justo detrás.',
    expectedCode: '9012',
    challenge: CipherChallenge
  },
  {
    id: 'level4',
    title: 'System Correction',
    intro: 'Detectando anomalía en el sistema...\nCorrigiendo datos incorrectos...',
    clue: '🎁 Antes de salir de casa, siempre pasamos por aquí.',
    expectedCode: '3456',
    challenge: ErrorDetectionChallenge
  },
  {
    id: 'level5',
    title: 'Emotional Override',
    intro: 'Sistema en conflicto...\nLógica vs emoción...\nSelecciona el camino correcto.',
    clue: '🎁 Aquí es donde todo termina… y también donde todo empieza al día siguiente.',
    expectedCode: '2468',
    challenge: ChoiceChallenge
  },
  {
    id: 'level6',
    title: 'Thermal Anomaly',
    intro: 'Detectando variación térmica...\nAlgunos elementos clave se conservan fuera de condiciones normales.',
    clue: '🎁 No todo lo importante está caliente… de hecho, esto está bastante frío.',
    expectedCode: '1357',
    challenge: HiddenMessageChallenge
  },
  {
    id: 'level7',
    title: 'External Environment',
    intro: 'Accediendo a entorno externo...\nCondiciones variables detectadas...',
    clue: '🎁 Donde pedalear sin avanzar también cuenta.',
    expectedCode: '8642',
    challenge: InteractiveChallenge
  },
  {
    id: 'level8',
    title: 'System Recovery Complete',
    intro: 'Recuperando último fragmento del sistema...\nValidando código final...',
    clue: '🎁 En el lugar más alto de casa, donde el sol se pone primero.',
    expectedCode: '9753',
    challenge: ImageChallenge
  },
  {
    id: 'final',
    title: 'System Recovery Complete'
  }
]

const PARTNER_NAME = 'Andrea'

function App() {
  const [currentLevel, setCurrentLevel] = useState(0)
  const [gameProgress, setGameProgress] = useState({})
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Persistencia con localStorage
  useEffect(() => {
    const saved = localStorage.getItem('escapeRoomProgress')
    if (saved) {
      const progress = JSON.parse(saved)
      setGameProgress(progress)
      const completedLevels = Object.keys(progress).filter(key => progress[key])
      setCurrentLevel(completedLevels.length)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('escapeRoomProgress', JSON.stringify(gameProgress))
  }, [gameProgress])

  const completeLevel = (levelId) => {
    setGameProgress(prev => ({ ...prev, [levelId]: true }))
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentLevel(prev => prev + 1)
      setIsTransitioning(false)
    }, 500)
  }

  const resetGame = () => {
    setCurrentLevel(0)
    setGameProgress({})
    localStorage.removeItem('escapeRoomProgress')
  }

  const getCurrentLevelComponent = () => {
    const level = LEVELS[currentLevel]
    
    if (level.id === 'final') {
      return <FinalLevel partnerName={PARTNER_NAME} onReset={resetGame} />
    }
    
    const ChallengeComponent = level.challenge
    
    return (
      <LevelWrapper
        key={level.id} // Añadir key para forzar re-render
        levelNumber={currentLevel + 1}
        totalLevels={LEVELS.length}
        title={level.title}
        intro={level.intro}
        clue={level.clue}
        expectedCode={level.expectedCode}
        onLevelComplete={() => completeLevel(level.id)}
        partnerName={PARTNER_NAME}
      >
        {({ onComplete, partnerName }) => (
          <ChallengeComponent 
            onComplete={onComplete} 
            partnerName={partnerName} 
          />
        )}
      </LevelWrapper>
    )
  }

  return (
    <div className="app">
      <div className="game-container">
        <header className="game-header">
          <ProgressBar current={currentLevel} total={LEVELS.length} />
          <button className="reset-btn" onClick={resetGame}>Reiniciar Aventura</button>
        </header>
        
        <main className={`level-content ${isTransitioning ? 'transitioning' : ''}`}>
          {getCurrentLevelComponent()}
        </main>
      </div>
    </div>
  )
}

export default App
