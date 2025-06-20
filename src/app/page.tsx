'use client'
import { useContext, useState } from 'react'
import { cn } from '../../lib/utils/classnames'
import { TabViews } from './_components/Navigation/TabView'
import RealisticRain from './_components/Theme/Rain'
import { NavigationContext } from './hooks/useNavigation'
import IntroLoader from './_components/Intro/IntroLoader'

export default function Home() {
  const { selectedTab } = useContext(NavigationContext)
  const [isComplete, setIsComplete] = useState(false)

  return (
    <section className={cn('relative w-full h-full')}>
      <IntroLoader isComplete={isComplete} setIsComplete={setIsComplete} />
      <TabViews selectedTab={selectedTab} isComplete={isComplete} />
      <footer className="text-white w-full p-3 glass_accueil text-sm text-center border-0!">
        <p>© 2025 Tyron-William Chanu. Tous droits réservés.</p>
      </footer>
      <RealisticRain />
    </section>
  )
}
