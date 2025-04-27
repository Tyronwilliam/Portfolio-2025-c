type Props = {};
import { CiBeerMugFull } from "react-icons/ci";
import { BsCameraReelsFill } from "react-icons/bs";
import { BiHealth } from "react-icons/bi";

export const Projets = ({}: Props) => {
  return (
    <section className="w-full md:h-[759px] flex flex-col items-center justify-center gap-10 md:gap-0 lg:p-4 lg:pt-0 grow ">
      {/* Cards */}
      <div className="flex gap-4 w-full items-center justify-center">
        <div className="glassomorph_effect_card_2 group cursor-pointer flex flex-col items-center justify-center gap-4 w-[25%] h-[350px]">
          <span className="text-2xl font-bold group-hover:text-[#e9b535] font-montserrat">
            LA COOP
          </span>
          <CiBeerMugFull className="w-20 h-20 text-black group-hover:text-[#e9b535]" />
        </div>
        <div className="glassomorph_effect_card_1  group cursor-pointer flex flex-col items-center justify-center gap-4 w-[25%] h-[350px] bg-transparent">
          <span className="text-2xl font-bold group-hover:text-white font-roboto">
            CSB Klinik
          </span>
          <BiHealth className="w-20 h-20 text-black group-hover:text-white" />
        </div>

        <div className="glassomorph_effect_card_3 font-robotoCondensed group cursor-pointer flex flex-col items-center justify-center gap-4 w-[25%] h-[350px] bg-transparent">
          <span className="text-2xl font-bold group-hover:text-white">
            Agence Graziani
          </span>
          <BsCameraReelsFill className="w-20 h-20 text-black group-hover:text-white" />
        </div>
      </div>
    </section>
  );
};
