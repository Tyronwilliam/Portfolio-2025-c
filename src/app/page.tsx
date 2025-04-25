"use client";
import { useContext } from "react";
import { Accueil } from "./_components/Accueil/Accueil";
import { BackgroundImg } from "./_components/Background/BackgrounImg";
import { Glass } from "./_components/Background/Glass";
import { Navigation } from "./_components/Navigation/Navigation";
import RealisticRain from "./_components/Theme/Rain";
import { NavigationContext, NavigationLabel } from "./hooks/useNavigation";
import { Apropos } from "./_components/Apropos/Apropos";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const { handleSelectedTab, selectedTab } = useContext(NavigationContext);
  return (
    <section className="relative w-full md:h-screen md:overflow-hidden  flex flex-col md:items-center grow md:justify-center p-5 md:p-10">
      <Glass>
        <section className="w-full  relative flex flex-col gap-3  mx-auto  z-50 md:px-3 md:overflow-hidden md:h-full xl:gap-10  ">
          <Navigation
            selectedTab={selectedTab}
            handleSelectedTab={handleSelectedTab}
          />
          {/* {selectedTab === NavigationLabel.Accueil && ( */}
          <div
            className={`${selectedTab !== NavigationLabel.Accueil ? "exit-animation" : "enter-animation"}`}
          >
            <Accueil />
          </div>
          {/* )} */}

          {/* {selectedTab === NavigationLabel.APropos && ( */}
          <div
            className={`${selectedTab !== NavigationLabel.APropos ? "exit-animation" : "enter-animation"}`}
          >
            <Apropos />
          </div>
          {/* )} */}
        </section>{" "}
      </Glass>
      <BackgroundImg isVideo={true} selectedTab={selectedTab} />
      <RealisticRain />
    </section>
  );
}
