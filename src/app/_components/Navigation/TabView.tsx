import { NavigationLabel } from "@/app/hooks/useNavigation";
import { Accueil } from "../Accueil/Accueil";
import { Apropos } from "../Apropos/Apropos";
import { Projets } from "../Projets/Projets";
import React from "react";
import { cn } from "../../../../lib/utils/classnames";

type Props = {
  selectedTab: NavigationLabel;
  direction: string;
};
export const TabViews = ({ selectedTab, direction }: Props) => {
  return (
    <section className="w-full h-[calc(100%-40px)] shrink-0 p-3">
      <div
        className={`${selectedTab !== NavigationLabel.Accueil ? "exit-right-animation" : "enter-animation"}`}
      >
        <Accueil />
      </div>

      <div
        className={cn(
          selectedTab === NavigationLabel.APropos
            ? "enter-animation"
            : direction === "right"
              ? "exit-right-animation"
              : "exit-left-animation"
        )}
      >
        <Apropos />
      </div>
      <div
        className={`${selectedTab !== NavigationLabel.Projets ? "exit-bottom-animation" : "enter-top-animation"}`}
      >
        <Projets />
      </div>
    </section>
  );
};
