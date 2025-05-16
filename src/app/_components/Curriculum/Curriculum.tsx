import Image from 'next/image'
import CV from '../../../../public/images/curriculum.png'

export const Curriculum = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-between md:gap-10">
      <h1 className="w-fit mx-auto p-2 text-3xl font-bold text-white text-center">Curriculum & Réseaux</h1>
      <section  className="w-full h-full flex flex-1 flex-col md:flex-row items-center justify-between">
        <div className="relative w-full h-[560px]  md:w-1/2 shrink-0   ">
          <Image
            src={CV}
            alt="Curriculum 2025"
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        </div>
        <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
          <a
            href="/curriculum-2025.pdf" // Remplace par le bon chemin vers ton fichier PDF
            download
            aria-label="Télécharger le curriculum"
            className="block mx-auto bg-red-900 text-white p-3 rounded-md font-bold border-[1px] border-red-900 hover:bg-transparent    transition-all "
          >
            Télécharger CV
          </a>
          <a
            href="https://www.linkedin.com/in/tyron-william-chanu-483956171/" // Remplace par le bon chemin vers ton fichier PDF
            target="_blank"
            aria-label="Go to Linkedin Profil"
            className="block mx-auto bg-blue-900 text-white p-3 rounded-md font-bold border-[1px] border-blue-900 hover:bg-transparent   transition-all "
          >
            Linkedin
          </a>
          <a
            href="https://github.com/Tyronwilliam?tab=overview&from=2023-12-01&to=2023-12-31" // Remplace par le bon chemin vers ton fichier PDF
            target="_blank"
            aria-label="Go to Github Profil"
            className="block mx-auto bg-black text-white p-3 rounded-md font-bold border-[1px] border-black hover:bg-transparent  transition-all "
          >
            Github
          </a>
        </div>
      </section>
    </section>
  )
}
