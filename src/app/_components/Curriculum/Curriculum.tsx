import Image from 'next/image'
import CV from '../../../../public/images/curriculum.png'

export const Curriculum = () => {
  return (
    <section className="w-full h-full flex flex-1 flex-col md:flex-row items-center justify-between gap-10 md:gap-0 lg:p-4 lg:pt-0 grow">
      <div className="relative w-full h-[560px] md:h-full md:w-1/2   ">
        <Image
          src={CV}
          alt="Curriculum 2025"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      </div>
      <a
        href="/curriculum-2025.pdf" // Remplace par le bon chemin vers ton fichier PDF
        download
        aria-label="Télécharger le curriculum"
        className="block mx-auto bg-red-900 text-white p-3 rounded-md font-bold border-[1px] border-red-900 hover:bg-transparent hover:border-black transition-all "
      >
        Télécharger
      </a>
    </section>
  )
}
