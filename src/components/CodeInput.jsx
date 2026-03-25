import React, { useState } from 'react'

const CodeInput = ({ expectedCode, onSubmit, placeholder = "Código de 4 dígitos" }) => {
  const [code, setCode] = useState('')
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const isCorrect = onSubmit(code)
    
    if (isCorrect) {
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 2000)
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 2000)
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    // Solo permitir números y máximo 4 dígitos
    if (/^\d{0,4}$/.test(value)) {
      setCode(value)
      setShowError(false)
    }
  }

  return (
    <div className="code-input-container">
      <form onSubmit={handleSubmit} className="code-form">
        <div className="input-group">
          <input
            type="text"
            value={code}
            onChange={handleInputChange}
            placeholder={placeholder}
            className={`code-input ${showError ? 'error' : ''} ${showSuccess ? 'success' : ''}`}
            maxLength={4}
            autoFocus
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Validar Código
        </button>
      </form>

      {/* Feedback visual */}
      {showError && (
        <div className="feedback error-feedback">
          <span className="icon">❌</span>
          <span className="message">Código incorrecto. Verifica el regalo físico.</span>
        </div>
      )}

      {showSuccess && (
        <div className="feedback success-feedback">
          <span className="icon">✔</span>
          <span className="message">¡Código correcto! Desbloqueando siguiente nivel...</span>
        </div>
      )}
    </div>
  )
}

export default CodeInput
