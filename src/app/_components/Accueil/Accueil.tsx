import { StaticImageData } from 'next/image'
import { ReactElement, useCallback, useEffect, useState } from 'react'
import { BsBookmarkDashFill } from 'react-icons/bs'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact, FaSass, FaVuejs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import { TbSql } from 'react-icons/tb'
import { EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Agence from '../../../../public/images/agence.png'
import Coop from '../../../../public/images/lacoop.png'
import CSB from '../../../../public/images/CSB.png'
import { AnimatedCards } from './AnimatedCards'
import { LeftSide } from './LeftSide'

import 'swiper/css'
import 'swiper/css/effect-cards'

type Props = {}

export interface ProjectItem {
  name: string
  description: string
  rating: string
  icon: ReactElement
  img: StaticImageData
}
const projects: ProjectItem[] = [
  {
    name: 'Agence Graziani',
    description: 'App pour une agence de casting',
    rating: '4.9',
    icon: <BsBookmarkDashFill className=" text-blue-500 w-[16px] h-[19px] ml-auto" />,
    img: Agence
  },
  {
    name: 'CSB Klinik',
    description: "Site d'actualité & e-commerce",
    rating: '5',
    icon: <BsBookmarkDashFill className=" text-blue-500 w-[16px] h-[19px] ml-auto" />,
    img: CSB
  },
  {
    name: 'LA COOP',
    description: 'Site vitrine pour un bar',
    rating: '5',
    icon: <BsBookmarkDashFill className=" text-blue-500 w-[16px] h-[19px] ml-auto" />,
    img: Coop
  }
]
const arsenal = [
  <RiTailwindCssFill className="block w-18 h-18 text-[#38BDF8]" />, // TailwindCSS
  <FaHtml5 className="w-12 h-12 text-[#E34F26]" />, // HTML
  <FaCss3Alt className="w-12 h-12 text-[#1572B6]" />, // CSS
  <IoLogoJavascript className="w-12 h-12 text-[#F7DF1E]" />, // JavaScript
  <SiTypescript className="w-12 h-12 text-[#3178C6]" />, // TypeScript
  <FaSass className="w-12 h-12 text-[#CC6699]" />, // Sass
  <RiNextjsFill className="w-12 h-12 text-black" />, // NextJS
  <FaReact className="w-12 h-12 text-[#61DAFB]" />, // React
  <FaVuejs className="w-12 h-12 text-[#42B883]" />, // VueJS
  <FaGitAlt className="w-12 h-12 text-[#F05032]" />, // Git
  <FaNodeJs className="w-12 h-12 text-[#339933]" />, // NodeJS
  <TbSql className="w-12 h-12 text-[#003B57]" /> // SQL
]
export const Accueil = ({}: Props) => {
  const [index, setIndex] = useState(0)

  const slide = useCallback(() => {
    setIndex((prev) => (prev + 1) % projects.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(slide, 5000) // Change de carte toutes les 5s
    return () => clearInterval(interval) // Nettoyage à chaque démontage ou re-render
  }, [slide])

  const current = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <section className="w-full h-fit flex flex-col gap-12 md:gap-6 z-50 md:h-full">
      <div className="flex flex-col min-h-[365px] gap-12 md:flex-row ">
        <LeftSide />
        <AnimatedCards current={current} next={next} />
      </div>
      <BottomSection />
    </section>
  )
}

const BottomSection = () => {
  return (
    <section className="w-full lg:h-[40%] border-2 ">
      {/* Carousel Container */}
      <div className="glassomorph_effect_bis max-w-[250px] p-4 border-2 border-amber-400 lg:h-full">
        {/* TItle */}
        <h3 className="tracking-wider text-2xl font-bold light-black mb-2">Arsenal </h3>{' '}
        {/* Carousel */}
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper px-5 md:px-12 h-[260px] md:h-[200px]"
        >
          {arsenal.map((tech, index) => (
            <SwiperSlide key={index} className="w-48 max-w-[95%]  ">
              {tech}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
