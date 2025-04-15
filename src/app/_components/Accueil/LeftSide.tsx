import Image from "next/image";
import Tyron from "../../../../public/images/monster-hunter.png";
import TyronArcane from "../../../../public/images/arcane-2.png";

export const LeftSide = () => {
  return (
    <div className="glassomorph_effect w-full h-fit md:h-full md:w-1/2  flex flex-col md:flex-row md:overflow-hidden gap-1 grow">
      <MockUpTyron />
      <IntroText />
    </div>
  );
};
const MockUpTyron = () => {
  return (
    <div className="relative hidden md:block h-full md:basis-1/2 w-[35%]">
      <Image
        src={TyronArcane}
        alt="myself in a combat suit style monster hunter"
        fill
        className="object-contain"
      />
    </div>
  );
};
const IntroText = () => {
  return (
    <div className="md:grow rounded-xl p-4 flex flex-col gap-4 justify-center">
      <h2 className="tracking-wider text-2xl font-bold light-black">
        Let's work Together
      </h2>
      <div className=" mb-3 ">
        <p className="text-xl tracking-wide light-black">
          Enjoy working with high quality developer.
        </p>
        <span className="text-xs font-light light-black tracking-wide	">
          Developpeur frontend - Paris
        </span>
      </div>
      <button className="bg-blue-500 w-full max-w-[186px] p-4 rounded-xl text-xl text-white custom_shadow-button cursor-pointer">
        Contact
      </button>
    </div>
  );
};
