'use client'

import { NavigationLabel } from '@/app/hooks/useNavigation'
import clsx from 'clsx'

export const Navigation = ({
  selectedTab,
  handleSelectedTab
}: {
  selectedTab: NavigationLabel
  handleSelectedTab: (arg: NavigationLabel) => void
}) => {
  return (
    <header className="w-full hidden md:flex relative pb-2.5 lg:pb-5 z-50 shrink-0">
      <div className="absolute w-full h-1 rounded-md bottom-0 glassomorph_effect"></div>
      <nav className="w-full">
        <ul className="w-full flex justify-between  lg:gap-7 lg:px-12">
          {Object.values(NavigationLabel)?.map((item) => (
            <li
              className={clsx(
                'relative text-sm cursor-pointer',
                item === selectedTab ? 'font-bold' : 'font-medium',
                selectedTab === NavigationLabel.APropos || selectedTab === NavigationLabel.Hobbies
                  ? 'text-black'
                  : ' text-stone-300 '
              )}
              key={item}
              onClick={() => handleSelectedTab(item)}
            >
              {item === selectedTab && (
                <div className="absolute w-8 bg-red-900 h-1.5 rounded-t-sm	 shadow-xl top-[120%] lg:top-[170%] left-1/2 -translate-x-1/2"></div>
              )}
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
