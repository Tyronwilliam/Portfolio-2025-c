import { NavigationLabel } from '@/app/hooks/useNavigation'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

export const BackgroundImg = ({
  isVideo,
  selectedTab,
  bgColor
}: {
  isVideo: boolean
  selectedTab: NavigationLabel
  bgColor?: string
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const VIDEO_MAP: Record<string, string> = {
    [NavigationLabel.Accueil]: '/videos/animated.mp4',
    [NavigationLabel.APropos]: '/videos/animated.mp4',
    [NavigationLabel.Projets]: '/videos/animated3.mp4',
    [NavigationLabel.Hobbies]: '/videos/animated2.mp4' // réutilisé
  }

  const IMAGE_MAP: Record<string, string> = {
    [NavigationLabel.Accueil]: '/images/animated.png',
    [NavigationLabel.APropos]: '/images/animated.png',
    [NavigationLabel.Projets]: '/images/animated3.png',
    [NavigationLabel.Hobbies]: '/images/animated2.png'
  }

  const videoSrc = VIDEO_MAP[selectedTab] ?? '/videos/animated.mp4'
  const posterImage = IMAGE_MAP[selectedTab] ?? '/images/animated.png'
  useEffect(() => {
    if (videoRef.current && videoRef.current.currentSrc !== videoSrc) {
      videoRef.current.load()
    }
  }, [videoSrc])

  return isVideo ? (
    <AnimatePresence mode="wait">
      <motion.video
        key={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        id="background-video"
        poster={posterImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 left-0 w-full h-full  object-cover z-0"
        ref={videoRef}
      >
        <source src={videoSrc} type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </motion.video>
    </AnimatePresence>
  ) : (
    <div className={`${bgColor} w-full h-full absolute top-0 left-0`}></div>

    // <Image
    //   src={Forest}
    //   alt="bg"
    //   fill
    //   quality={100}
    //   className="object-cover object-center absolute w-full h-full z-0"
    // />
  )
}
