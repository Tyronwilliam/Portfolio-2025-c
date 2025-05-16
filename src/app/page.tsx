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
      <TabViews selectedTab={selectedTab} />
      <RealisticRain />
    </section>
  )
}
