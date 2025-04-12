import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { BsBookmarkDashFill } from "react-icons/bs";
import Agence from "../../../../public/images/agence.png";
import Csb from "../../../../public/images/csb.png";
import Coop from "../../../../public/images/lacoop.png";
import { LeftSide } from "./LeftSide";
import { AnimatedCards } from "./AnimatedCards";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
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
import { SiTypescript } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

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
      <BsBookmarkDashFill className=" text-blue-500 w-[16px] h-[19px] ml-auto" />
    ),
    img: Agence,
  },
  {
    name: "LA COOP",
    description: "Site vitrine pour un bar",
    rating: "5",
    icon: (
      <BsBookmarkDashFill className=" text-blue-500 w-[16px] h-[19px] ml-auto" />
    ),
    img: Coop,
  },
  {
    name: "CSB Klinik",
    description: "Site d'actualité & e-commerce dans la medecine",
    rating: "5",
    icon: (
      <BsBookmarkDashFill className=" text-blue-500 w-[16px] h-[19px] ml-auto" />
    ),
    img: Csb,
  },
];
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
  <TbSql className="w-12 h-12 text-[#003B57]" />, // SQL
];
export const Accueil = ({}: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = projects[index % projects.length];
  const next = projects[(index + 1) % projects.length];
  return (
    <section className="w-full h-full grid grid-rows-6 auto-rows-[62px] gap-3">
      <div className="row-span-4 flex gap-12 h-[362px]">
        <LeftSide />
        {/* <div className="glassomorph_effect w-[33%] h-full flex overflow-hidden gap-1"></div> */}
        {/* TEST */}
        <AnimatedCards current={current} next={next} />
        {/* END TEST  */}
      </div>
      <div className="row-span-4 grid grid-cols-6">
        {/* Deuxième div - un peu plus petite */}
        <section className="col-span-2 p-4 glassomorph_effect">
          <h3 className="tracking-wider text-2xl font-bold light-black mb-2">
            Arsenal{" "}
          </h3>{" "}
          <div className="px-12 w-full h-full">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper "
            >
              {arsenal.map((tech, index) => (
                <SwiperSlide key={index}>{tech}</SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </section>
  );
};
