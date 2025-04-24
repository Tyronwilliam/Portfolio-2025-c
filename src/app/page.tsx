'use client'
import Image from 'next/image'
import { Navigation } from './_components/Navigation/Navigation'
import { BubbleBackground } from './_components/Theme/BubbleBackground'
import { Glass } from './_components/Background/Glass'
import { Name } from './_components/Accueil/Name'
import { BackgroundImg } from './_components/Background/BackgrounImg'
import { Accueil } from './_components/Accueil/Accueil'

export default function Home() {
  return (
    <section className="relative w-full md:h-screen md:overflow-hidden  flex flex-col md:items-center grow md:justify-center p-5 md:p-10">
      <Glass>
        {/* <Name /> */}
        <section className="w-full flex flex-col gap-3 max-w-[1178px] mx-auto  z-50 md:px-3 md:overflow-hidden md:h-full  ">
          <Navigation />
          <Accueil />
        </section>
      </Glass>
      <BackgroundImg />
      <BubbleBackground />
    </section>
  )
}
{
  /* Header Fixed */
}
{
  /* Section 1 - Big Intro - Animation ?? -2 button view work and let work together  */
}
{
  /* Section 3 - Carousel of my project - explantion card of the project */
}
{
  /* Section 2 - Techno i love - Floating image like dvd */
}
{
  /* Section 4  - What i offeer*/
}
{
  /* Section 5 - Package  CDI or Freelance  */
}
{
  /* Section 6 - Review from people */
}
{
  ;(' ')
}
