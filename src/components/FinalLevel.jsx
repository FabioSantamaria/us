import React from 'react'

const FinalLevel = ({ partnerName, onReset }) => {
  const [finalCode, setFinalCode] = useState('')
  const [showError, setShowError] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  
  const correctCode = '2024' // Código final del último regalo
  
  const playlistVideos = [
    { id: "dQw4w9WgXcQ", title: "Nuestro Primer Vídeo Juntos" },
    { id: "jNQXAC9IVRw", title: "El Día que Conocimos" },
    { id: "9bZkp7q19f0", title: "Aventuras Inolvidables" },
    { id: "hT_nvWreIhg", title: "Momentos Especiales" },
    { id: "kJQP7kiw5Fk", title: "Nuestra Canción" }
  ]

  const handleFinalCode = (e) => {
    e.preventDefault()
    if (finalCode === correctCode) {
      setUnlocked(true)
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 2000)
    }
  }

  return (
    <div className="final-level">
      {!unlocked ? (
        <div className="final-lock">
          <div className="lock-header">
            <h2>🔐 El Desafío Final</h2>
            <p>{partnerName}, introduce el código final del último regalo...</p>
          </div>

          <form onSubmit={handleFinalCode} className="final-code-form">
            <input
              type="text"
              value={finalCode}
              onChange={(e) => setFinalCode(e.target.value)}
              placeholder="Código final de 4 cifras..."
              className="final-code-input"
              autoFocus
            />
            <button type="submit" className="unlock-btn">
              🎉 Desbloquear Sorpresa Final
            </button>
          </form>

          {showError && (
            <div className="error-message">
              Código incorrecto. ¿Revisaste bien el último regalo? 🎁
            </div>
          )}

          <div className="final-hint">
            <p>💡 Este código estaba junto a tu último regalo...</p>
          </div>
        </div>
      ) : (
        <div className="final-content">
          <div className="success-message">
            <h1 className="congratulations">🎉 ¡Gymkhana Completa! 🎉</h1>
            
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
      )}
    </div>
  )
}

export default FinalLevel
