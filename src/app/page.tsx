'use client'
import { useContext } from 'react'
import { cn } from '../../lib/utils/classnames'
import { TabViews } from './_components/Navigation/TabView'
import RealisticRain from './_components/Theme/Rain'
import { NavigationContext } from './hooks/useNavigation'

export default function Home() {
  const { selectedTab } = useContext(NavigationContext)

  return (
    <section className={cn('relative w-full h-full')}>
      {/* <Glass selectedTab={selectedTab}> */}{' '}
      {/* <Navigation selectedTab={selectedTab} handleSelectedTab={handleSelectedTab} /> */}
      {/* </Glass> */}
      {/* <section
        className={cn(
          'relative w-full h-full flex flex-col gap-3 mx-auto z-50',
          selectedTab === NavigationLabel.APropos ? 'xl:gap-5' : 'xl:gap-5'
        )}
      > */}
      <TabViews selectedTab={selectedTab} />
      {/* </section> */}
      <RealisticRain />
    </section>
  )
}
