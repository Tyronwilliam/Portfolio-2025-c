import { NavigationLabel } from "@/app/hooks/useNavigation";
import { cn } from "../../../../lib/utils/classnames";

type Props = {
  children: React.ReactNode;
  selectedTab: NavigationLabel;
};
export const Glass = ({ children, selectedTab }: Props) => {
  return (
    <div
      className={cn(
        "relative w-full h-full md:max-h-[898px] overflow-hidden  max-w-[1300px] mx-auto z-50 flex flex-col items-center justify-center p-6 md:p-4  lg:p-5 ",
        selectedTab === NavigationLabel.Accueil
          ? "glass_accueil rounded-xl"
          : "glass"
      )}
    >
      {children}
    </div>
  );
};
