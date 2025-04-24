'use client'

import clsx from 'clsx'

type NavigationItem = { label: string }

const navigationItem: NavigationItem[] = [
  {
    label: 'Accueil'
  },
  {
    label: 'Qualité 1'
  },
  {
    label: 'Qualité 2'
  },
  {
    label: 'Qualité 3'
  },
  {
    label: 'Qualité 4'
  },
  {
    label: 'Qualité 5'
  },
  {
    label: 'Qualité 6'
  }
]

export const Navigation = () => {
  return (
    <header className="w-full hidden md:flex relative pb-2.5 lg:pb-5">
      <div className="absolute w-full h-1 rounded-md bottom-0 glassomorph_effect"></div>
      <nav className="w-full">
        <ul className="w-full flex justify-between  lg:gap-7 lg:px-12">
          {navigationItem?.map((item) => (
            <li
              className={clsx(
                'relative text-black text-sm ',
                item.label === 'Accueil' ? 'font-bold' : 'font-medium'
              )}
              key={item.label}
            >
              {item.label === 'Accueil' && (
                <div className="absolute w-8 bg-blue-500 h-1.5 rounded-t-sm	 shadow-xl top-[120%] lg:top-[170%] left-1/2 -translate-x-1/2"></div>
              )}
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
