import { useState } from 'react'
import './MusicPlayer.css'

const YOUTUBE_VIDEO_ID = '6ZjG2WYwsaE'
const YOUTUBE_AUTOPLAY_LOOP = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}`

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)

  const handleStart = () => {
    setPlaying(true)
  }

  return (
    <>
      {!playing && (
        <button
          type="button"
          className="music-player-btn"
          onClick={handleStart}
          aria-label="Play background music"
        >
          ♫ Play music
        </button>
      )}
      {playing && (
        <div className="music-player" aria-hidden>
          <iframe
            src={YOUTUBE_AUTOPLAY_LOOP}
            title="Background music"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </>
  )
}
