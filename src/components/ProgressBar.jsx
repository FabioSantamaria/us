import React from 'react'

const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100

  return (
    <div className="progress-bar">
      <div className="progress-info">
        <span className="progress-text">Progreso: {current} de {total}</span>
        <span className="progress-percentage">{Math.round(percentage)}%</span>
      </div>
      
      <div className="progress-track">
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="progress-levels">
        {Array.from({ length: total }, (_, i) => (
          <div 
            key={i}
            className={`progress-level ${i < current ? 'completed' : ''} ${i === current ? 'current' : ''}`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressBar
