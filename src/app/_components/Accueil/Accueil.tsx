import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
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

  const slide = useCallback(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = projects[index % projects.length];
  const next = projects[(index + 1) % projects.length];
  return (
    <section className="w-full h-fit flex flex-col md:grid md:grid-rows-6 md:auto-rows-[62px] gap-3 z-50">
      <div className="md:row-span-4 flex flex-col md:flex-row gap-12 md:h-[362px]">
        <LeftSide />
        <AnimatedCards current={current} next={next} />
      </div>{" "}
      <div className="md:row-span-4 md:grid md:grid-cols-6 w-full h-full">
        {/* Deuxième div - un peu plus petite */}
        <section className="col-span-2 p-4 glassomorph_effect h-full w-full">
          <h3 className="tracking-wider text-2xl font-bold light-black mb-2">
            Arsenal{" "}
          </h3>{" "}
          {/* <div className=" w-full h-full "> */}
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper px-5 md:px-12 min-h-[240px] w-[250px] h-[260px]"
            style={{ height: "calc(100% - 10%)" }}
          >
            {arsenal.map((tech, index) => (
              <SwiperSlide key={index} className="w-full min-h-full">
                {tech}
              </SwiperSlide>
            ))}
          </Swiper>
          {/* </div> */}
        </section>
      </div>
    </section>
  );
};
