import { useState } from 'react'
import './MusicPlayer.css'

const YOUTUBE_VIDEO_ID = '8l2iAbJKogc'
const YOUTUBE_PARAMS = 'autoplay=1&loop=1&playlist=' + YOUTUBE_VIDEO_ID + '&playsinline=1'
const YOUTUBE_SRC = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?${YOUTUBE_PARAMS}`

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
        <div className="music-player">
          <div className="music-player-embed">
            <iframe
              src={YOUTUBE_SRC}
              title="Background music"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              playsInline
            />
          </div>
        </div>
      )}
    </>
  )
}
