import React from 'react'

const FinalLevel = ({ partnerName, onReset }) => {
  const playlistVideos = [
    { id: "UKIkztscIxQ", title: "Pata coja" },
    { id: "f8FOKcwaJ40", title: "Sergio y sus cosas" },
    { id: "IWpsSenQUvk", title: "Saludos de un Arquitecto" },
    { id: "5LFdw4do1h8", title: "Aventuras en el mejor pueblo del mundo!!"},
    { id: "KX1qD7sqC6E", title: "Felicidades a distancia"},
    // add videos from 
    { id: "j41S1w1_POY", title: "Pajaritos" },
  ]

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
