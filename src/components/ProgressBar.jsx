import React from 'react'

const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100

  return (
    <div className="progress-bar">
      <div className="progress-info">
        <span className="progress-text">Level {current} of {total}</span>
        <span className="progress-percentage">{Math.round(percentage)}%</span>
      </div>
      <div className="progress-track">
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
