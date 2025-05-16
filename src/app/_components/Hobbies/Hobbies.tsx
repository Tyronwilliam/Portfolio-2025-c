import { RefObject, useRef } from 'react'
import Coding from '../../../../public/images/tyron-coding.png'
import Piano from '../../../../public/images/tyron-piano.png'
import Sport from '../../../../public/images/tyron-sport.png'
import { HoverVideoCard } from './HoverVideoCard'

export default function Hobbies() {
  const videoSport = useRef<HTMLVideoElement | null>(null)
  const videoCode = useRef<HTMLVideoElement | null>(null)
  const videoPiano = useRef<HTMLVideoElement | null>(null)

  return (
    <section className="w-full h-full flex flex-1 flex-col items-center justify-between gap-10 md:gap-0 lg:p-4 lg:pt-0 grow">
      <h1 className="w-fit mx-auto p-2 text-3xl font-bold glassomorph_effect_no_radius">
        Hover Me !
      </h1>
      <div className="w-full h-full flex flex-wrap md:flex-nowrap gap-2 items-center justify-center">
        <HoverVideoCard
          videoRef={videoPiano as RefObject<HTMLVideoElement>}
          title="Piano"
          imageSrc={Piano}
          videoSrc="/videos/piano.mp4"
          customClassSpan="absolute top-[5%] left-[10%]  z-10 lg:text-lg text-sm"
        />
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
