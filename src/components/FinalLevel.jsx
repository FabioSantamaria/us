import React, { useState } from 'react'
import CodeInput from './CodeInput'

const FinalLevel = ({ partnerName, onReset }) => {
  const [unlocked, setUnlocked] = useState(false)
  
  const correctCode = '9753' // Código del último regalo
  
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
            <h2>🔧 System Recovery Complete</h2>
            <p>Recuperando último fragmento del sistema...</p>
            <p>Validando código final...</p>
          </div>

          <div className="final-instructions">
            <p>El sistema está casi completamente restaurado.</p>
            <p>Introduce el código final del último fragmento para completar la recuperación.</p>
            <p>🎁 Este código estaba junto a tu último regalo...</p>
            <p>¡Estás a punto de completar la recuperación del sistema!</p>
          </div>

          <div className="code-section">
            <h3>🔓 Código Final del Sistema</h3>
            <CodeInput 
              expectedCode={correctCode}
              onSubmit={handleCodeSubmit}
              placeholder="Código final de 4 dígitos"
            />
          </div>

          <div className="final-hint">
            <p>💡 Busca en el lugar más alto de casa...</p>
            <p>Donde el sol se pone primero.</p>
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
          <h1 className="congratulations">✅ Sistema Completamente Restaurado</h1>
          <p className="system-status">Todos los módulos están en su lugar.</p>
          <p className="system-status">Todos los recuerdos, también.</p>
        </div>
        
        <div className="love-message">
          <h2>🔧 Pero lo más importante...</h2>
          <p className="main-message">
            es que todo esto sigue siendo nuestro.
          </p>
          <p className="detail-message">
            Esta recuperación ha sido un viaje a través de:
            Los archivos que nos hicieron conocer,
            Los errores que nos hicieron reír,
            Los códigos que solo nosotros entendemos,
            Los lugares que son nuestro sistema operativo,
            Y las decisiones que nos trajeron aquí.
          </p>
          <p className="closing-message">
            Esto es más que una recuperación del sistema — es la celebración 
            de nosotros, de nuestro amor, y de todo lo que viene.
          </p>
          <p className="signature">
            Gracias por recorrer esto conmigo.
            <br />
            Feliz cumpleaños ❤️
          </p>
        </div>

        <div className="video-gallery">
          <h3>🎬 Último Recurso del Sistema</h3>
          <p className="playlist-intro">Estos archivos son los tesoros más valiosos de nuestro sistema...</p>
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
            🔄 Reiniciar Sistema
          </button>
          <p className="final-note">
            Una nueva aventura también te está esperando...
          </p>
        </div>
      </div>
    </div>
  )
}

export default FinalLevel
