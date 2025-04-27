import { NavigationLabel } from "@/app/hooks/useNavigation";
import { Accueil } from "../Accueil/Accueil";
import { Apropos } from "../Apropos/Apropos";
import { Projets } from "../Projets/Projets";

type Props = {
  selectedTab: NavigationLabel;
};
export const TabViews = ({ selectedTab }: Props) => {
  return (
    <>
      <div
        className={`${selectedTab !== NavigationLabel.Accueil ? "exit-animation" : "enter-animation"}`}
      >
        <Accueil />
      </div>

      <div
        className={`${selectedTab !== NavigationLabel.APropos ? "exit-animation" : "enter-animation"}`}
      >
        <Apropos />
      </div>
      <div
        className={`${selectedTab !== NavigationLabel.Projets ? "exit-animation" : "enter-animation"}`}
      >
        <Projets />
      </div>
    </>
  );
};
