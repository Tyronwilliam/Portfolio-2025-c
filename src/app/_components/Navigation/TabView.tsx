import { NavigationLabel } from '@/app/hooks/useNavigation'
import { cn } from '../../../../lib/utils/classnames'
import { Accueil } from '../Accueil/Accueil'
import { Apropos } from '../Apropos/Apropos'
import { BackgroundImg } from '../Background/BackgrounImg'
import { Glass } from '../Background/Glass'
import { Curriculum } from '../Curriculum/Curriculum'
import Hobbies from '../Hobbies/Hobbies'
import { Projets } from '../Projets/Projets'

type Props = {
  selectedTab: NavigationLabel
}
export const TabViews = ({ selectedTab }: Props) => {
  return (
    <section className={cn('w-full h-full flex flex-col ')}>
      <div className="relative w-full h-screen p-5 flex items-center justify-center">
        <BackgroundImg isVideo={true} selectedTab={NavigationLabel.Accueil} />
        <Glass selectedTab={selectedTab}>
          <Accueil />
        </Glass>
      </div>
      <div className="relative w-full lg:min-h-screen px-5 flex items-center justify-center mb-5">
        <BackgroundImg
          isVideo={false}
          selectedTab={selectedTab}
          bgColor="bg-gradient-to-b from-[#171932] via-[#030617] to-black"
        />
        <div className="relative w-full min-h-fit   max-w-[1300px] mx-auto z-50 flex flex-col items-center justify-center p-4  md:p-5 ">
          <Apropos />
        </div>
      </div>
      <div className="relative w-full h-full md:min-h-screen xl:h-screen px-5 flex items-center justify-center gap-5 mb-5 overflow-hidden">
        <BackgroundImg isVideo={true} selectedTab={NavigationLabel.Projets} />
        <Glass selectedTab={NavigationLabel.Projets}>
          <Projets />
        </Glass>
      </div>
      <div className="relative w-full md:h-screen px-5 flex items-center justify-center pb-5 md:pb-0">
        <BackgroundImg
          isVideo={false}
          selectedTab={NavigationLabel.Accueil}
          bgColor="bg-gradient-to-b from-black to-[#B5A3D1]"
        />
        <Glass selectedTab={NavigationLabel.APropos}>
          <Curriculum />
        </Glass>
      </div>{' '}
      <div className="relative w-full md:min-h-screen px-5 flex items-center justify-center">
        <BackgroundImg isVideo={true} selectedTab={NavigationLabel.Hobbies} />
        <Glass selectedTab={NavigationLabel.Accueil}>
          <Hobbies />
        </Glass>
      </div>
    </section>
  )
}
