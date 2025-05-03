import { StaticImageData } from "next/image";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { BsBookmarkDashFill } from "react-icons/bs";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiOvh, SiStrapi, SiTypescript } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Agence from "../../../../public/images/agence.png";
import CSB from "../../../../public/images/CSB.png";
import Coop from "../../../../public/images/lacoop.png";
import { LeftSide } from "./LeftSide";

import "swiper/css";
import "swiper/css/effect-cards";
import { cn } from "../../../../lib/utils/classnames";

type Props = {};

export interface ProjectItem {
  name: string;
  description: string;
  rating: string;
  icon: ReactElement;
  img: StaticImageData;
}
const projects: ProjectItem[] = [
  {
    name: "Agence Graziani",
    description: "App pour une agence de casting",
    rating: "4.9",
    icon: (
      <BsBookmarkDashFill className=" text-blue-900 w-[16px] h-[19px] ml-auto" />
    ),
    img: Agence,
  },
  {
    name: "CSB Klinik",
    description: "Site d'actualité & e-commerce",
    rating: "5",
    icon: (
      <BsBookmarkDashFill className=" text-blue-900 w-[16px] h-[19px] ml-auto" />
    ),
    img: CSB,
  },
  {
    name: "LA COOP",
    description: "Site vitrine pour un bar",
    rating: "5",
    icon: (
      <BsBookmarkDashFill className=" text-blue-900 w-[16px] h-[19px] ml-auto" />
    ),
    img: Coop,
  },
];
export const arsenal = [
  <RiTailwindCssFill
    className="w-full h-full text-[#38BDF8]"
    aria-label="Tailwind CSS"
    title="Tailwind CSS"
  />,
  <FaHtml5
    className="w-full h-full text-[#E34F26]"
    aria-label="HTML5"
    title="HTML5"
  />,
  <FaCss3Alt
    className="w-full h-full text-[#1572B6]"
    aria-label="CSS3"
    title="CSS3"
  />,
  <IoLogoJavascript
    className="w-full h-full text-[#F7DF1E]"
    aria-label="JavaScript"
    title="JavaScript"
  />,
  <SiTypescript
    className="w-full h-full text-[#3178C6]"
    aria-label="TypeScript"
    title="TypeScript"
  />,
  <FaSass
    className="w-full h-full text-[#CC6699]"
    aria-label="Sass"
    title="Sass"
  />,
  <RiNextjsFill
    className="w-full h-full"
    aria-label="Next.js"
    title="Next.js"
  />,
  <FaReact
    className="w-full h-full text-[#61DAFB]"
    aria-label="React"
    title="React"
  />,
  <FaVuejs
    className="w-full h-full text-[#42B883]"
    aria-label="Vue.js"
    title="Vue.js"
  />,
  <FaGitAlt
    className="w-full h-full text-[#F05032]"
    aria-label="Git"
    title="Git"
  />,
  <FaNodeJs
    className="w-full h-full text-[#339933]"
    aria-label="Node.js"
    title="Node.js"
  />,
  <TbSql
    className="w-full h-full text-[#003B57]"
    aria-label="SQL"
    title="SQL"
  />,
  <SiStrapi
    className="w-full h-full text-[#003B57]"
    aria-label="Strapi"
    title="Strapi"
  />,
  <SiOvh
    className="w-full h-full text-[#003B57]"
    aria-label="OVH"
    title="OVH"
  />,
];
const name = "Tyron William";
const job = "Développeur Front-end";

export const Accueil = ({}: Props) => {
  const [show, setShow] = useState<Boolean>(false);

  return (
    <section className="w-full h-full relative flex-1 flex flex-col gap-10 md:gap-0 lg:p-4 lg:pt-0 grow ">
      {/* <LeftSide /> */}
      <div className="container_name">
        <h1 className="name_title">
          {[...name].map((letter, i) => (
            <span
              key={`outline-${i}`}
              className={cn(show ? "show" : "hide")}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {" "}
              <div className="glassomorph_effect p-2 flex justify-center items-center">
                {letter !== " " && letter}
              </div>
            </span>
          ))}
        </h1>
      </div>
      <div className="container_name">
        <h1 className="name_title">
          {[...job].map((letter, i) => (
            <span
              key={`outline-${i}`}
              className={cn(show ? "show" : "hide")}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {" "}
              <div className="glassomorph_effect p-2 flex justify-center items-center">
                {letter !== " " && letter}
              </div>
            </span>
          ))}
        </h1>
      </div>

      <div
        onClick={() => {
          setShow(!show);
        }}
        className="w-12 h-12 rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center glassomorph_effect cursor-pointer z-50 "
      >
        <span className="absolute inline-flex h-1/2 w-1/2 animate-ping rounded-full bg-red-900 opacity-75"></span>
        <span className="relative inline-flex  w-1/2 h-1/2  rounded-full bg-red-900"></span>
      </div>
    </section>
  );
};

const BottomSection = () => {
  return (
    <>
      <LeftBottom />
      <div className="w-full h-full glassomorph_effect_bis p-4">
        Veeppee current workplace
      </div>
    </>
  );
};
const LeftBottom = () => {
  return (
    <div className="glassomorph_effect_bis w-[70%]  xl:w-[65%] p-4 lg:h-full ">
      {/* TItle */}
      <h3 className="tracking-wider text-2xl font-bold  mb-2 xl:mb-8">
        Techno
      </h3>
      {/* Carousel */}
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        grabCursor={false}
        modules={[Autoplay]}
        allowTouchMove={false} // désactive le drag manuel
        className="mySwiper px-5 md:px-12 w-full h-[260px] md:h-[200px]"
      >
        {arsenal.map((tech, index) => (
          <SwiperSlide
            key={index}
            className={cn(
              "w-48 max-w-[95%] flex items-center justify-center",
              `slide-index-${index + 1}`
            )}
          >
            <span className="w-18 h-18">{tech}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
