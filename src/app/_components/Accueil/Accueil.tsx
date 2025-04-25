import { StaticImageData } from "next/image";
import {
  ReactElement,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from "react";
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
import { SiTypescript } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Agence from "../../../../public/images/agence.png";
import CSB from "../../../../public/images/CSB.png";
import Coop from "../../../../public/images/lacoop.png";
import { AnimatedCards } from "./AnimatedCards";
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
const arsenal = [
  <RiTailwindCssFill className="block w-18 h-18 text-[#38BDF8]" />, // TailwindCSS
  <FaHtml5 className="w-18 h-18 text-[#E34F26]" />, // HTML
  <FaCss3Alt className="w-18 h-18 text-[#1572B6]" />, // CSS
  <IoLogoJavascript className="w-18 h-18 text-[#F7DF1E]" />, // JavaScript
  <SiTypescript className="w-18 h-18 text-[#3178C6]" />, // TypeScript
  <FaSass className="w-18 h-18 text-[#CC6699]" />, // Sass
  <RiNextjsFill className="w-18 h-18 text-black" />, // NextJS
  <FaReact className="w-18 h-18 text-[#61DAFB]" />, // React
  <FaVuejs className="w-18 h-18 text-[#42B883]" />, // VueJS
  <FaGitAlt className="w-18 h-18 text-[#F05032]" />, // Git
  <FaNodeJs className="w-18 h-18 text-[#339933]" />, // NodeJS
  <TbSql className="w-18 h-18 text-[#003B57]" />, // SQL
];
export const Accueil = ({}: Props) => {
  const [index, setIndex] = useState(0);

  const slide = useCallback(() => {
    setIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    const interval = setInterval(slide, 5000);
    return () => clearInterval(interval);
  }, [slide]);

  const current = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <section className="w-full h-full flex flex-col gap-12 md:gap-6 z-50 md:h-full xl:gap-22">
      <section className="flex flex-col min-h-[365px] grow gap-12 md:flex-row h-full">
        <LeftSide />
        <AnimatedCards current={current} next={next} />
      </section>
      <section className="w-full lg:h-[40%] flex flex-row gap-12 md:gap-3 lg:gap-12">
        <BottomSection />
      </section>
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
            {tech}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
