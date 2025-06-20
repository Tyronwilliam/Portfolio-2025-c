'use client'
import React, { createContext } from 'react'
export enum NavigationLabel {
  Accueil = 'Accueil',
  APropos = 'A propos',
  Projets = 'Projets',
  Curriculum = 'Curriculum',
  Hobbies = 'Hobbies',
  FunFact = 'Fun fact'
}

export const NavigationContext = createContext<{
  handleSelectedTab: (arg: NavigationLabel) => void
  selectedTab: NavigationLabel
  previousTab: NavigationLabel | null
}>({
  handleSelectedTab: () => {},
  selectedTab: NavigationLabel.Accueil,
  previousTab: null
})
export const tabOrder: NavigationLabel[] = [
  NavigationLabel.Accueil,
  NavigationLabel.APropos,
  NavigationLabel.Projets,
  NavigationLabel.Curriculum,
  NavigationLabel.Hobbies,
  NavigationLabel.FunFact
]

export default function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [selectedTab, setSelectedTab] = React.useState<NavigationLabel>(NavigationLabel.Accueil)
  const [previousTab, setPreviousTab] = React.useState<NavigationLabel | null>(null)

  const handleSelectedTab = (newTab: NavigationLabel) => {
    if (newTab !== selectedTab) {
      setPreviousTab(selectedTab)
      setSelectedTab(newTab)
    }
  }

  return (
    <NavigationContext.Provider value={{ handleSelectedTab, selectedTab, previousTab }}>
      {children}
    </NavigationContext.Provider>
  )
}
