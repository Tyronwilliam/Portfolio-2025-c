"use client";
import React, { createContext } from "react";
export enum NavigationLabel {
  Accueil = "Accueil",
  APropos = "A propos",
  Projets = "Projets",
  Parcours = "Parcours",
  Curriculum = "Curriculum",
  Hobbies = "Hobbies",
  FunFact = "Fun fact",
}

export const NavigationContext = createContext<{
  handleSelectedTab: (arg: NavigationLabel) => void;
  selectedTab: NavigationLabel;
}>({
  handleSelectedTab: () => {},
  selectedTab: NavigationLabel.Accueil,
});

export default function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedTab, setSelectedTab] = React.useState<NavigationLabel>(
    NavigationLabel.Accueil
  );

  const handleSelectedTab = (arg: NavigationLabel) => {
    setSelectedTab(arg);
  };

  return (
    <NavigationContext.Provider value={{ handleSelectedTab, selectedTab }}>
      {children}
    </NavigationContext.Provider>
  );
}
