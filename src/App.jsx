import { useState, useEffect } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'
import QuizLevel from './components/QuizLevel'
import RiddleLevel from './components/RiddleLevel'
import CipherLevel from './components/CipherLevel'
import MemoryLevel from './components/MemoryLevel'
import BirdLevel from './components/BirdLevel'
import PurifierLevel from './components/PurifierLevel'
import FinalLevel from './components/FinalLevel'

const LEVELS = ['quiz', 'riddle', 'cipher', 'memory', 'bird', 'purifier', 'final']
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
    switch (LEVELS[currentLevel]) {
      case 'quiz':
        return <QuizLevel onComplete={() => completeLevel('quiz')} partnerName={PARTNER_NAME} />
      case 'riddle':
        return <RiddleLevel onComplete={() => completeLevel('riddle')} partnerName={PARTNER_NAME} />
      case 'cipher':
        return <CipherLevel onComplete={() => completeLevel('cipher')} partnerName={PARTNER_NAME} />
      case 'memory':
        return <MemoryLevel onComplete={() => completeLevel('memory')} partnerName={PARTNER_NAME} />
      case 'bird':
        return <BirdLevel onComplete={() => completeLevel('bird')} partnerName={PARTNER_NAME} />
      case 'purifier':
        return <PurifierLevel onComplete={() => completeLevel('purifier')} partnerName={PARTNER_NAME} />
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
          <h1 className="game-title">System Recovery</h1>
          <ProgressBar current={currentLevel} total={LEVELS.length} />
          <button className="reset-btn" onClick={resetGame}>Reset Game</button>
        </header>
        
        <main className={`level-content ${isTransitioning ? 'transitioning' : ''}`}>
          {getCurrentLevelComponent()}
        </main>
      </div>
    </div>
  )
}

export default App
