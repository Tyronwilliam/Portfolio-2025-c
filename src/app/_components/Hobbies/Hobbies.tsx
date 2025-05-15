import React, { RefObject, useRef, useState } from 'react'
import Piano from '../../../../public/images/tyron-piano.png'
import Sport from '../../../../public/images/tyron-sport.png'
import Coding from '../../../../public/images/tyron-coding.png'
import Image from 'next/image'
import { FaPlay, FaPause, FaStop } from 'react-icons/fa'
import { HoverVideoCard } from './HoverVideoCard'
import { AudioCard } from './AudioCard'

//@ts-ignore
export default function Hobbies() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasEnded, setHasEnded] = useState(false)
  const videoSport = useRef<HTMLVideoElement | null>(null)
  const videoCode = useRef<HTMLVideoElement | null>(null)

  const handleTogglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
      setHasEnded(false)
    }
  }

  const handleStop = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    audio.currentTime = 0
    setIsPlaying(false)
    setHasEnded(false)
  }
  return (
    <section className="w-full h-full flex flex-1 flex-col md:flex-row items-center justify-between gap-10 md:gap-0 lg:p-4 lg:pt-0 grow">
      <div className="w-full h-full flex flex-wrap md:flex-nowrap gap-2 items-center justify-center">
        <AudioCard title="Piano" imageSrc={Piano} audioSrc="/sound/piano-sound.mp3" />

        <HoverVideoCard
          videoRef={videoSport as RefObject<HTMLVideoElement>}
          title="Calisthenics"
          imageSrc={Sport}
          videoSrc="/videos/sport2.mp4"
          customClassSpan="absolute top-[5%] left-1/2  z-10 lg:text-lg text-sm"
        />
        <HoverVideoCard
          videoRef={videoCode as RefObject<HTMLVideoElement>}
          title="Coder"
          imageSrc={Coding}
          videoSrc="/videos/setup.mp4"
          customClassSpan="absolute top-[5%] left-[70%] text-gray-300  z-10 lg:text-lg text-sm"
        />
      </div>
    </section>
  )
}
