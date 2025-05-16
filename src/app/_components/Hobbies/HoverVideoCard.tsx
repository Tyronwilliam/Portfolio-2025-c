import Image, { StaticImageData } from 'next/image'
import { RefObject, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
type HoverVideoCardProps = {
  title: string
  imageSrc: StaticImageData
  videoSrc: string
  customClassSpan: string
  videoRef: RefObject<HTMLVideoElement>
}
export default function HoverVideoCard({
  title,
  imageSrc,
  videoSrc,
  customClassSpan,
  videoRef
}: HoverVideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      if (title === 'Piano') {
        videoRef.current.muted = false
      } else {
        videoRef.current.currentTime = 0
        videoRef.current.muted = true
        videoRef.current.play().catch(() => {})
      }
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current && title !== 'Piano') {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.warn)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div
      className="relative w-full md:w-1/3 flex flex-col items-start group overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Titre */}
      <span className={customClassSpan}>{title}</span>

      {/* Image statique */}
      <Image
        src={imageSrc}
        alt={title}
        className="w-full h-auto object-contain max-h-[545px] z-0"
        priority
      />

      {/* Vidéo en hover */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full md:object-cover max-h-[545px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Play/Pause button pour Piano */}
      {title === 'Piano' && (
        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 z-20 bg-white/80 rounded-full p-3 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform"
        >
          {isPlaying ? <FaPause className="text-black" /> : <FaPlay className="text-black" />}
        </button>
      )}
    </div>
  )
}
