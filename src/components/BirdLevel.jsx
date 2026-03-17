import React from 'react'
import InputChallenge from './InputChallenge'

const BirdLevel = ({ onComplete, partnerName }) => {
  const description = `Two birds built a home together, safe from the storm.
Where love takes flight and hearts stay warm.

What is this sanctuary called?`

  return (
    <div className="bird-level">
      <InputChallenge
        title="The Nest Protocol"
        description={description}
        hint="Where birds raise their young... (Spanish)"
        correctAnswer="NIDO"
        onComplete={onComplete}
        partnerName={partnerName}
        placeholder="Enter the sanctuary code..."
      />
    </div>
  )
}

export default BirdLevel
