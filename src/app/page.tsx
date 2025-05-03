"use client";
import { useContext } from "react";
import { cn } from "../../lib/utils/classnames";
import { BackgroundImg } from "./_components/Background/BackgrounImg";
import { Glass } from "./_components/Background/Glass";
import { Navigation } from "./_components/Navigation/Navigation";
import { TabViews } from "./_components/Navigation/TabView";
import RealisticRain from "./_components/Theme/Rain";
import {
  NavigationContext,
  NavigationLabel,
  tabOrder,
} from "./hooks/useNavigation";

export default function Home() {
  const { handleSelectedTab, selectedTab, previousTab } =
    useContext(NavigationContext);
  const direction =
    previousTab && tabOrder.indexOf(selectedTab) > tabOrder.indexOf(previousTab)
      ? "right"
      : "left";
  return (
    <section className="relative w-full h-full overflow-hidden   flex flex-col grow p-5 md:items-center  md:justify-center  md:p-10">
      <Glass selectedTab={selectedTab}>
        <section
          className={cn(
            "relative w-full h-full flex flex-col gap-3 mx-auto z-50",
            selectedTab === NavigationLabel.APropos ? "xl:gap-5" : "xl:gap-5"
          )}
        >
          <Navigation
            selectedTab={selectedTab}
            handleSelectedTab={handleSelectedTab}
          />
          <TabViews selectedTab={selectedTab} direction={direction} />
        </section>
      </Glass>
      <BackgroundImg isVideo={true} selectedTab={selectedTab} />
      <RealisticRain />
    </section>
  );
}
