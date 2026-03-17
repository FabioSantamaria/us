import React from 'react'

const FinalLevel = ({ partnerName, onReset }) => {
  const videos = [
    { id: "dQw4w9WgXcQ", title: "Our First Memory" },
    { id: "jNQXAC9IVRw", title: "The Day We Met" },
    { id: "9bZkp7q19f0", title: "Our Adventure Together" }
  ]

  return (
    <div className="final-level">
      <div className="final-content">
        <div className="success-message">
          <h1 className="congratulations">🎉 System Recovery Complete! 🎉</h1>
          
          <div className="love-message">
            <h2>For My Dearest {partnerName},</h2>
            <p className="main-message">
              You've successfully navigated through all the challenges, 
              just like you navigate through life with grace and strength.
            </p>
            <p className="detail-message">
              Each level represented a part of our journey:
              The questions that tested our understanding,
              The riddles that made us think deeper,
              The codes that only we could decipher together,
              The memories we cherish forever,
              The home we've built,
              And the peace we've found in each other.
            </p>
            <p className="closing-message">
              This escape room is more than just a game—it's a celebration 
              of us, of our love, and of all the adventures yet to come.
            </p>
            <p className="signature">
              With all my love, always and forever ❤️
            </p>
          </div>
        </div>

        <div className="video-gallery">
          <h3>Our Memories Together</h3>
          <div className="video-grid">
            {videos.map((video, index) => (
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
            Start New Journey
          </button>
          <p className="final-note">
            Thank you for being my greatest adventure, {partnerName}. 
            This is just the beginning of our story.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FinalLevel
