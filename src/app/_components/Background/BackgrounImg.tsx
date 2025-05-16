import { NavigationLabel } from '@/app/hooks/useNavigation'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

export const BackgroundImg = ({
  isVideo,
  selectedTab
}: {
  isVideo: boolean
  selectedTab: NavigationLabel
}) => {
  const [isLoading, setIsLoading] = React.useState(true) // Ajout d'un état pour gérer le chargement

  const videoRef = useRef<HTMLVideoElement>(null)
  const videoSrc =
    selectedTab === NavigationLabel.Accueil
      ? '/videos/animated.mp4'
      : selectedTab === NavigationLabel.APropos || selectedTab === NavigationLabel.Hobbies
        ? '/videos/animated2.mp4'
        : selectedTab === NavigationLabel.Projets
          ? '/videos/animated3.mp4'
          : '/videos/animated.mp4' // You can return null or a default video if none of the conditions match

  const posterImage =
    selectedTab === NavigationLabel.Accueil
      ? '/images/animated.png'
      : selectedTab === NavigationLabel.APropos
        ? '/images/animated2.png'
        : selectedTab === NavigationLabel.Projets
          ? '/images/animated3.png'
          : '/images/animated.png'
  const handleVideoLoad = () => {
    setIsLoading(false) // Une fois la vidéo chargée, on cache l'image
  }

  useEffect(() => {
    if (videoRef.current) {
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
        onCanPlayThrough={handleVideoLoad} // Quand la vidéo peut être lue, on cache l'image
        poster={posterImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 left-0 w-full h-full md:h-screen object-cover z-0"
        ref={videoRef}
      >
        <source src={videoSrc} type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </motion.video>
    </AnimatePresence>
  ) : (
    <div></div>

    // <Image
    //   src={Forest}
    //   alt="bg"
    //   fill
    //   quality={100}
    //   className="object-cover object-center absolute w-full h-full z-0"
    // />
  )
}
