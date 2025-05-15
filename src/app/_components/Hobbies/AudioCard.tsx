'use client'

import Image, { StaticImageData } from 'next/image'
import { useRef, useState } from 'react'
import { FaPlay, FaPause, FaStop } from 'react-icons/fa'

interface AudioCardProps {
  title: string
  imageSrc: StaticImageData
  audioSrc: string
}

export const AudioCard = ({ title, imageSrc, audioSrc }: AudioCardProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasEnded, setHasEnded] = useState(false)

  const handleTogglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
      setHasEnded(false)
    }
  }

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
      setHasEnded(true)
    }
  }

  return (
    <div className="relative w-full md:w-1/3 group overflow-hidden cursor-pointer ">
      <Image
        src={imageSrc}
        alt={title}
        className="w-full h-auto object-contain max-h-[545px] "
        priority
      />

      <span className="absolute top-[5%] left-[10%] text-sm lg:text-lg z-10">{title}</span>

      {/* Toggle Button (Play / Pause / Ended) */}
      <button
        onClick={handleTogglePlay}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 bg-black/60 text-white p-4 rounded-full z-20 transition-opacity"
      >
        {hasEnded ? <FaStop /> : isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      {/* Stop Button */}
      {isPlaying && (
        <button
          onClick={handleStop}
          className="absolute bottom-4 right-4 bg-white/20 text-white p-2 rounded-full z-20 hover:bg-white/30"
        >
          <FaStop />
        </button>
      )}

      {/* Audio element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="auto"
        onEnded={() => {
          setIsPlaying(false)
          setHasEnded(true)
        }}
      />
    </div>
  )
}
