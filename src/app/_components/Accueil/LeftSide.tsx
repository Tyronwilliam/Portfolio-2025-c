import Image from "next/image";
import Tyron from "../../../../public/images/3dnobg.png";
import TyronArcane from "../../../../public/images/arcane-2.png";

export const LeftSide = () => {
  return (
    <div className=" w-full h-full xl:flex flex-row gap-1 xl:h-full xl:grow">
      <MockUpTyron />
      <IntroText />
    </div>
  );
};
const MockUpTyron = () => {
  return (
    <div className="xl:relative hidden xl:block xl:h-full xl:w-[35%]">
      <Image
        src={Tyron}
        alt="myself in a combat suit style monster hunter"
        fill
        className="object-contain hidden lg:block w-full h-full absolute top-0 left-0"
      />
    </div>
  );
};
const IntroText = () => {
  return (
    <div className="h-fit rounded-xl p-4 flex flex-col gap-4 justify-center">
      <h2 className="tracking-wider text-2xl font-bold glassomorph_effect_no_radius">
        Let's work Together
      </h2>

      <div className=" mb-3 glassomorph_effect_no_radius ">
        {/* <p className="text-xl tracking-wide">
          Enjoy working with high quality developer.
        </p> */}
        <span className="text-xs font-light tracking-wide	">
          Developpeur frontend - Paris
        </span>
      </div>
      <button className=" w-full max-w-[186px] p-4 rounded-xl text-xl text-white custom_shadow-button cursor-pointer">
        Contact
      </button>
    </div>
  );
};
