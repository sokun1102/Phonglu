import { useState, useRef, useEffect } from 'react'
import './MusicPlayer.css'

// Playlist — từ các link YouTube bạn gửi
const TRACKS = [
  { id: '8l2iAbJKogc', title: 'Track 1' },
  { id: '-XjUWe7SrB8', title: 'Track 2' },
  { id: 'kZnpzY7A1u4', title: 'Track 3' },
  { id: '8sVtL0o-v7U', title: 'Track 4' },
  { id: 'hYU4b-UnCQA', title: 'Track 5' },
  { id: 'tcV47TTTU_U', title: 'Track 6' },
]

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  const playerRef = useRef(null)
  const containerRef = useRef(null)
  const pollRef = useRef(null)
  const lastLoadedIdRef = useRef(null)

  const currentTrack = TRACKS[currentIndex]

  const handleStart = () => {
    setPlaying(true)
  }

  const handleSelectTrack = (index) => {
    setCurrentIndex(index)
    setPlaying(true)
  }

  const handleNext = () => {
    setCurrentIndex((idx) => (idx + 1) % TRACKS.length)
    setPlaying(true)
  }

  const handleStop = () => {
    const p = playerRef.current
    if (p?.stopVideo) {
      try {
        p.stopVideo()
        p.seekTo?.(0, true)
      } catch (_) {}
    } else if (p?.pauseVideo) {
      try {
        p.pauseVideo()
      } catch (_) {}
    }
    setCurrentTime(0)
  }

  // Chỉ tạo player khi bật nhạc; không destroy khi đổi bài
  useEffect(() => {
    if (!playing || !containerRef.current) return

    const initPlayer = () => {
      if (!window.YT?.Player) return
      if (playerRef.current) return

      const videoId = currentTrack.id
      const player = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          loop: 0,
          playsinline: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event) => {
            playerRef.current = event.target
            lastLoadedIdRef.current = videoId
          },
          onStateChange: (event) => {
            if (event.data === window.YT?.PlayerState?.ENDED) {
              setCurrentTime(0)
              setCurrentIndex((idx) => (idx + 1) % TRACKS.length)
            }
          },
        },
      })
    }

    if (window.YT?.Player) {
      initPlayer()
    } else {
      window.onYouTubeIframeAPIReady = () => initPlayer()
    }

    return () => {
      if (pollRef.current) clearInterval(pollRef.current)
    }
  }, [playing])

  // Đổi bài: chỉ load video mới, không tạo lại player
  useEffect(() => {
    if (!playing || !playerRef.current?.loadVideoById) return
    if (lastLoadedIdRef.current === currentTrack.id) return
    lastLoadedIdRef.current = currentTrack.id
    playerRef.current.loadVideoById(currentTrack.id)
    setCurrentTime(0)
    setDuration(0)
  }, [playing, currentTrack.id])

  // Poll current time and duration when player is ready
  useEffect(() => {
    if (!playing) return

    const poll = () => {
      const p = playerRef.current
      if (!p?.getCurrentTime) return
      const t = p.getCurrentTime()
      const d = p.getDuration?.() ?? 0
      if (Number.isFinite(t)) setCurrentTime(t)
      if (Number.isFinite(d) && d > 0) setDuration(d)
    }

    const id = setInterval(poll, 500)
    pollRef.current = id
    return () => clearInterval(id)
  }, [playing])

  const handleSeek = (e) => {
    const value = parseFloat(e.target.value, 10)
    setCurrentTime(value)
    if (playerRef.current?.seekTo) {
      playerRef.current.seekTo(value, true)
    }
  }

  const maxDuration = duration > 0 ? duration : 100
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

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
        <>
          <div className="music-player-hidden" ref={containerRef} />
          <div className="music-player-bar">
            <span className="music-player-bar-time">{formatTime(currentTime)}</span>
            <input
              type="range"
              className="music-player-slider"
              min={0}
              max={maxDuration}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              style={{ '--progress': `${progress}%` }}
              aria-label="Music progress"
            />
            <span className="music-player-bar-time">{formatTime(duration)}</span>
            <button
              type="button"
              className="music-player-next"
              onClick={handleNext}
              aria-label="Next track"
            >
              NEXT
            </button>
            <button
              type="button"
              className="music-player-stop"
              onClick={handleStop}
              aria-label="Restart track"
            >
              RESTART
            </button>
          </div>
          <div className="music-player-playlist">
            {TRACKS.map((track, index) => (
              <button
                key={track.id}
                type="button"
                className={
                  index === currentIndex
                    ? 'music-player-track-btn music-player-track-btn--active'
                    : 'music-player-track-btn'
                }
                onClick={() => handleSelectTrack(index)}
              >
                {track.title}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  )
}
