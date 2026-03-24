import { useState, useEffect } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'
import EmotionalLevel from './components/EmotionalLevel'
import DirectSearchLevel from './components/DirectSearchLevel'
import CipherLevel from './components/CipherLevel'
import ErrorLevel from './components/ErrorLevel'
import EnvironmentLevel from './components/EnvironmentLevel'
import ChoiceLevel from './components/ChoiceLevel'
import FinalLevel from './components/FinalLevel'

const LEVELS = [
  { id: 'emotional', type: 'digital_to_physical', name: 'Pregunta Emocional' },
  { id: 'direct', type: 'direct_search', name: 'Búsqueda Directa' },
  { id: 'cipher', type: 'digital_to_physical', name: 'Puzzle Cifrado' },
  { id: 'error', type: 'digital_to_physical', name: 'Encuentra el Error' },
  { id: 'environment', type: 'environment_search', name: 'Código en el Entorno' },
  { id: 'choice', type: 'digital_to_physical', name: 'Elección Falsa' },
  { id: 'final', type: 'final', name: 'Gran Final' }
]
const PARTNER_NAME = 'Andrea'

function App() {
  const [currentLevel, setCurrentLevel] = useState(0)
  const [gameProgress, setGameProgress] = useState({})
  const [isTransitioning, setIsTransitioning] = useState(false)

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

  const completeLevel = (levelName) => {
    setGameProgress(prev => ({ ...prev, [levelName]: true }))
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
    switch (LEVELS[currentLevel].id) {
      case 'emotional':
        return <EmotionalLevel onComplete={() => completeLevel('emotional')} partnerName={PARTNER_NAME} />
      case 'direct':
        return <DirectSearchLevel onComplete={() => completeLevel('direct')} partnerName={PARTNER_NAME} />
      case 'cipher':
        return <CipherLevel onComplete={() => completeLevel('cipher')} partnerName={PARTNER_NAME} />
      case 'error':
        return <ErrorLevel onComplete={() => completeLevel('error')} partnerName={PARTNER_NAME} />
      case 'environment':
        return <EnvironmentLevel onComplete={() => completeLevel('environment')} partnerName={PARTNER_NAME} />
      case 'choice':
        return <ChoiceLevel onComplete={() => completeLevel('choice')} partnerName={PARTNER_NAME} />
      case 'final':
        return <FinalLevel partnerName={PARTNER_NAME} onReset={resetGame} />
      default:
        return <div>Level not found</div>
    }
  }

  return (
    <div className="app">
      <div className="game-container">
        <header className="game-header">
          <h1 className="game-title">Gymkhana Romántica 🔐</h1>
          <ProgressBar current={currentLevel} total={LEVELS.length} />
          <div className="level-info">
            <span className="level-name">{LEVELS[currentLevel]?.name || ''}</span>
            <span className="level-type">{LEVELS[currentLevel]?.type || ''}</span>
          </div>
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
