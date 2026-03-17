import React from 'react'
import InputChallenge from './InputChallenge'

const RiddleLevel = ({ onComplete, partnerName }) => {
  const riddle = `I have cities, but no houses live there.
I have mountains, but no trees grow there.
I have water, but no fish swim there.
What am I?`

  return (
    <div className="riddle-level">
      <InputChallenge
        title="Riddle Decryption"
        description={riddle}
        hint="Think about maps and geography..."
        correctAnswer="JUEGO"
        onComplete={onComplete}
        partnerName={partnerName}
        placeholder="Enter the answer in Spanish..."
      />
    </div>
  )
}

export default RiddleLevel
