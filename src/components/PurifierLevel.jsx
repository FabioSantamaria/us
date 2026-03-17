import React from 'react'
import InputChallenge from './InputChallenge'

const PurifierLevel = ({ onComplete, partnerName }) => {
  const description = `The system needs purification to reach its final state.
Remove all noise, all chaos, all fear.

What remains when the storm passes?`

  return (
    <div className="purifier-level">
      <InputChallenge
        title="System Purification"
        description={description}
        hint="Peace after the storm... (Spanish)"
        correctAnswer="CALMA"
        onComplete={onComplete}
        partnerName={partnerName}
        placeholder="Enter the purification code..."
      />
    </div>
  )
}

export default PurifierLevel
