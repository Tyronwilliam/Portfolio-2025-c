'use client'

import Image, { StaticImageData } from 'next/image'
import { RefObject } from 'react'

interface HoverVideoCardProps {
  title: string
  imageSrc: StaticImageData
  videoSrc: string
  videoRef: RefObject<HTMLVideoElement>
  customClassSpan: string
}

export const HoverVideoCard = ({
  title,
  imageSrc,
  videoSrc,
  videoRef,
  customClassSpan
}: HoverVideoCardProps) => {
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      
    }
  }

  return (
    <div
      className="relative w-full md:w-1/3 flex flex-col items-start group overflow-hidden cursor-pointer "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Titre */}
      <span className={customClassSpan}>{title}</span>

      {/* Image statique */}
      <Image
        src={imageSrc}
        alt={title}
        className="w-full h-auto object-contain max-h-[545px] z-0 "
        priority
      />

      {/* Vidéo en hover */}
      <video
        ref={videoRef}
        muted={title === 'Piano' ? false : true}
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full md:object-cover max-h-[545px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  )
}
