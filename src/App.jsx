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
    title: 'Desafío Emocional',
    intro: 'Este primer desafío pondrá a prueba tu conexión especial. Responde desde el corazón.',
    clue: '🎁 Busca donde guardamos nuestros primeros recuerdos juntos. Allí encontrarás un regalo especial con un código de 4 dígitos.',
    expectedCode: '1234',
    challenge: EmotionalChallenge
  },
  {
    id: 'level2',
    title: 'Adivinanza Misteriosa',
    intro: 'Demuestra tu ingenio con esta adivinanza clásica. Piensa lateralmente.',
    clue: '🎁 Dirígete a donde guardamos el café. En la estantería encontrarás una caja con sorpresas y tu siguiente código.',
    expectedCode: '5678',
    challenge: RiddleChallenge
  },
  {
    id: 'level3',
    title: 'Puzzle Cifrado',
    intro: 'El sistema ha cifrado un mensaje importante. Descifra para continuar.',
    clue: '🎁 Ve a la cocina y busca junto a los utensilios de cocina. Allí te espera un regalo con el código siguiente.',
    expectedCode: '9012',
    challenge: CipherChallenge
  },
  {
    id: 'level4',
    title: 'Detección de Error',
    intro: 'El sistema ha detectado un error crítico. Encuentra y corrige el problema.',
    clue: '🎁 En el salón, detrás del sofá, encontrarás un regalo especial con tu código.',
    expectedCode: '3456',
    challenge: ErrorDetectionChallenge
  },
  {
    id: 'level5',
    title: 'El Momento de la Verdad',
    intro: 'Llega el momento de elegir. ¿Seguirás la lógica o el corazón?',
    clue: '🎁 En el dormitorio, sobre la mesita de noche, te espera un regalo con el código.',
    expectedCode: '2468',
    challenge: ChoiceChallenge
  },
  {
    id: 'level6',
    title: 'Mensaje Oculto',
    intro: 'No todo es lo que parece. Hay un mensaje oculto en este texto.',
    clue: '🎁 En el baño, dentro del armario, encontrarás un regalo con el código siguiente.',
    expectedCode: '1357',
    challenge: HiddenMessageChallenge
  },
  {
    id: 'level7',
    title: 'Reto Interactivo',
    intro: 'Prueba tu memoria y reflejos en este desafío contrarreloj.',
    clue: '🎁 En la entrada de casa, junto a las llaves, te espera un regalo especial.',
    expectedCode: '8642',
    challenge: InteractiveChallenge
  },
  {
    id: 'level8',
    title: 'Reconocimiento Visual',
    intro: 'Observa con atención esta imagen. Los detalles son importantes.',
    clue: '🎁 En la terraza o balcón, encontrarás un regalo con el código final.',
    expectedCode: '9753',
    challenge: ImageChallenge
  },
  {
    id: 'final',
    title: 'Gran Final'
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
