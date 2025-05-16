import { NavigationLabel } from '@/app/hooks/useNavigation'
import { Accueil } from '../Accueil/Accueil'
import { Apropos } from '../Apropos/Apropos'
import { Projets } from '../Projets/Projets'
import React from 'react'
import { cn } from '../../../../lib/utils/classnames'
import { Curriculum } from '../Curriculum/Curriculum'
import Hobbies from '../Hobbies/Hobbies'
import { FunFactGrid } from '../FunFact/FunFact'

type Props = {
  selectedTab: NavigationLabel
  direction: string
}
export const TabViews = ({ selectedTab, direction }: Props) => {
  return (
    <section
      className={cn(
        'w-full h-[calc(100%-40px)] shrink-0 p-3 ',
        selectedTab !== NavigationLabel.Accueil && 'flex items-center justify-center'
      )}
    >
      <div
        className={`${selectedTab !== NavigationLabel.Accueil ? 'exit-right-animation' : 'enter-animation'}`}
      >
        <Accueil />
      </div>
      <div
        className={cn(
          selectedTab === NavigationLabel.APropos
            ? 'enter-animation'
            : direction === 'right'
              ? 'exit-right-animation'
              : 'exit-left-animation'
        )}
      >
        <Apropos />
      </div>
      <div
        className={`${selectedTab !== NavigationLabel.Projets ? 'exit-bottom-animation' : 'enter-top-animation'}`}
      >
        <Projets />
      </div>
      <div
        className={`${selectedTab !== NavigationLabel.Curriculum ? 'exit-bottom-animation' : 'enter-top-animation'}`}
      >
        <Curriculum />
      </div>
      <div
        className={cn(
          selectedTab === NavigationLabel.Hobbies
            ? 'enter-animation'
            : direction === 'right'
              ? 'exit-right-animation'
              : 'exit-left-animation'
        )}
      >
        <Hobbies />
      </div>
      <div
        className={`${selectedTab !== NavigationLabel.FunFact ? 'exit-bottom-animation' : 'enter-top-animation'}`}
      >
        <FunFactGrid />
      </div>
    </section>
  )
}
