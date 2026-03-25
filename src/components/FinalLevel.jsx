import React, { useState } from 'react'
import CodeInput from './CodeInput'

const FinalLevel = ({ partnerName, onReset }) => {
  const [unlocked, setUnlocked] = useState(false)
  
  const correctCode = '7890' // Código del último regalo
  
  const playlistVideos = [
    { id: "dQw4w9WgXcQ", title: "Nuestro Primer Vídeo Juntos" },
    { id: "jNQXAC9IVRw", title: "El Día que Conocimos" },
    { id: "9bZkp7q19f0", title: "Aventuras Inolvidables" },
    { id: "hT_nvWreIhg", title: "Momentos Especiales" },
    { id: "kJQP7kiw5Fk", title: "Nuestra Canción" }
  ]

  const handleCodeSubmit = (code) => {
    if (code === correctCode) {
      setUnlocked(true)
    }
    return code === correctCode
  }

  if (!unlocked) {
    return (
      <div className="final-level">
        <div className="final-lock">
          <div className="lock-header">
            <h1 className="game-title">System Recovery</h1>
            <h2>🎉 El Desafío Final</h2>
            <p>{partnerName}, introduce el código final del último regalo...</p>
          </div>

          <div className="final-instructions">
            <p>Has llegado al final de la gymkhana.</p>
            <p>El código final está en el último regalo que encontrarás.</p>
            <p>¡Introdúcelo para desbloquear la sorpresa final!</p>
          </div>

          <div className="code-section">
            <h3>🔓 Código Final</h3>
            <CodeInput 
              expectedCode={correctCode}
              onSubmit={handleCodeSubmit}
              placeholder="Código final de 4 dígitos"
            />
          </div>

          <div className="final-hint">
            <p>💡 Este código estaba junto a tu último regalo...</p>
            <p>¡Estás a punto de completar la aventura!</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="final-level unlocked">
      <div className="final-content">
        <div className="success-header">
          <h1 className="game-title">System Recovery</h1>
          <h1 className="congratulations">🎉 ¡Gymkhana Completa! 🎉</h1>
        </div>
        
        <div className="love-message">
          <h2>Para mi querida {partnerName},</h2>
          <p className="main-message">
            ¡Has completado todos los desafíos! 
            Cada prueba fue un pedacito de nuestra historia.
          </p>
          <p className="detail-message">
            Esta gymkhana ha sido un viaje a través de:
            Las preguntas que nos hicieron conocer,
            Los errores que nos hicieron reír,
            Los códigos que solo nosotros entendemos,
            Los lugares que son nuestro hogar,
            Y las decisiones que nos trajeron aquí.
          </p>
          <p className="closing-message">
            Esto es más que un juego — es la celebración 
            de nosotros, de nuestro amor, y de todo lo que viene.
          </p>
          <p className="signature">
            Con todo mi amor, siempre y para siempre ❤️
          </p>
        </div>

        <div className="video-gallery">
          <h3>🎬 Nuestra Playlist Privada</h3>
          <p className="playlist-intro">Estos vídeos son pequeños tesoros de nuestra historia...</p>
          <div className="video-grid">
            {playlistVideos.map((video, index) => (
              <div key={index} className="video-item">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-frame"
                />
                <p className="video-title">{video.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="final-actions">
          <button onClick={onReset} className="restart-btn">
            🔄 Vivir la Aventura Otra Vez
          </button>
          <p className="final-note">
            Gracias por ser mi mayor aventura, {partnerName}. 
            Esto es solo el comienzo de nuestra historia.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FinalLevel
