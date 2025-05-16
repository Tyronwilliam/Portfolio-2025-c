import { NavigationLabel } from '@/app/hooks/useNavigation'
import { cn } from '../../../../lib/utils/classnames'

type Props = {
  children: React.ReactNode
  selectedTab: NavigationLabel
}
export const Glass = ({ children, selectedTab }: Props) => {
  return (
    <div
      className={cn(
        'relative w-full h-full md:h-[90%]  max-w-[1300px] max-h-[800px] mx-auto z-50 flex flex-col items-center justify-center p-4  lg:p-5 ',
        selectedTab === NavigationLabel.Accueil || selectedTab === NavigationLabel.Projets
          ? 'glass_accueil rounded-xl'
          : 'glassomorph_effect_bis '
      )}
    >
      {children}
    </div>
  )
}
