"use client";
import { useContext } from "react";
import { cn } from "../../lib/utils/classnames";
import { BackgroundImg } from "./_components/Background/BackgrounImg";
import { Glass } from "./_components/Background/Glass";
import { Navigation } from "./_components/Navigation/Navigation";
import { TabViews } from "./_components/Navigation/TabView";
import RealisticRain from "./_components/Theme/Rain";
import { NavigationContext, NavigationLabel } from "./hooks/useNavigation";

export default function Home() {
  const { handleSelectedTab, selectedTab } = useContext(NavigationContext);
  return (
    <section className="relative w-full md:h-screen md:overflow-hidden  flex flex-col md:items-center grow md:justify-center p-5 md:p-10">
      <Glass>
        <section
          className={cn(
            "w-full relative flex flex-col gap-3 mx-auto z-50  md:overflow-hidden md:h-full",
            selectedTab === NavigationLabel.APropos ? "xl:gap-5" : "xl:gap-10"
          )}
        >
          <Navigation
            selectedTab={selectedTab}
            handleSelectedTab={handleSelectedTab}
          />
          <TabViews selectedTab={selectedTab} />
        </section>
      </Glass>
      <BackgroundImg isVideo={true} selectedTab={selectedTab} />
      <RealisticRain />
    </section>
  );
}
