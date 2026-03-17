import React from 'react'
import InputChallenge from './InputChallenge'

const CipherLevel = ({ onComplete, partnerName }) => {
  const cipherText = "3-15-4-9-7-15"
  const description = `Decode the A=1 cipher to reveal the hidden word.

A=1, B=2, C=3, ..., Z=26

Encrypted message: ${cipherText}`

  return (
    <div className="cipher-level">
      <InputChallenge
        title="Cipher Decryption"
        description={description}
        hint="Each number represents a letter in the alphabet"
        correctAnswer="CODIGO"
        onComplete={onComplete}
        partnerName={partnerName}
        placeholder="Enter the decoded word..."
      />
    </div>
  )
}

export default CipherLevel
