"use client";
import Image from "next/image";
import { Navigation } from "./_components/Navigation/Navigation";
import { BubbleBackground } from "./_components/Theme/BubbleBackground";
import { Glass } from "./_components/Background/Glass";
import { Name } from "./_components/Accueil/Name";
import { BackgroundImg } from "./_components/Background/BackgrounImg";
import { Accueil } from "./_components/Accueil/Accueil";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-screen p-10 overflow-hidden">
      <Glass>
        <Name />
        <section className="w-full h-full flex flex-col gap-3 px-3 max-w-[1178px] mx-auto">
          <Navigation />
          <Accueil />
        </section>
      </Glass>
      <BubbleBackground />
      <BackgroundImg />
    </section>
  );
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
  (" ");
}
