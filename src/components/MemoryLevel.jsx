import React from 'react'
import InputChallenge from './InputChallenge'

const MemoryLevel = ({ onComplete, partnerName }) => {
  const description = `Access the memory vault to unlock the next phase.

The key lies in what we hold dear, what we cherish, what remains in our hearts forever.`

  return (
    <div className="memory-level">
      <InputChallenge
        title="Memory Access"
        description={description}
        hint="What do we call the moments we never forget? (Spanish)"
        correctAnswer="RECUERDO"
        onComplete={onComplete}
        partnerName={partnerName}
        placeholder="Enter the memory key..."
      />
    </div>
  )
}

export default MemoryLevel
