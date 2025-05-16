import { useEffect, useState } from 'react'

import 'swiper/css'
import 'swiper/css/effect-cards'
import { cn } from '../../../../lib/utils/classnames'
import Image from 'next/image'
import TyronStanding from '../../../../public/images/tyron-standing-nobg.png'

const arraySquare = [['Tyron'], [''], ['William']]
const profession = 'Développeur Frontend'

export const Accueil = () => {
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    setShow(true)
  }, [])
  return (
    <section className="w-full h-full relative flex-1 flex flex-col gap-10 md:gap-0 lg:p-4 lg:pt-0 grow ">
      <Image
        src={TyronStanding}
        alt="Tyron Standing 3D Model"
        className="w-1/2 max-w-[512px] object-contain h-auto   max-h-[80vh] md:-bottom-[5%] -bottom-[8%]  left-0 absolute"
      />
      <h1 className="name_title flex flex-col items-center gap-2">
        {arraySquare.map((group, groupIndex) => (
          <div key={`group-${groupIndex}`} className="flex justify-center w-full mt-3">
            {[...group[0]].map((letter, letterIndex) => (
              <span
                key={`letter-${groupIndex}-${letterIndex}`}
                className={cn(show ? 'show' : 'hide')}
                style={{ animationDelay: `${(groupIndex * 5 + letterIndex) * 0.1}s` }}
              >
                <div className="glassomorph_effect p-2 flex justify-center items-center">
                  {letter !== ' ' && letter}
                </div>
              </span>
            ))}
          </div>
        ))}
      </h1>

      <div className="container_profession">
        <h1 className="name_profession ">
          {[...profession].map((letter, i) => (
            <span
              key={`outline-${i}`}
              className={cn(show ? 'show' : 'hide')}
              style={{ animationDelay: `${2.3 + i * 0.1}s` }}
            >
              {' '}
              <div className="glassomorph_effect p-2 flex justify-center items-center">
                {letter !== '' && letter}
              </div>
            </span>
          ))}
        </h1>
      </div>
    </section>
  )
}
