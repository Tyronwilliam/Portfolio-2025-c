import React, { useState } from 'react'
import { FaSmile } from 'react-icons/fa'
import { cn } from '../../../../lib/utils/classnames'
import { TbClick } from 'react-icons/tb'

const funFacts = [
  'Le tout premier bug informatique était un insecte réel coincé dans un relais d’un ordinateur en 1947.',
  'Chaque jour, plus de 300 milliards d\'e-mails sont envoyés.',
  'Boire du café peut améliorer ta mémoire à court terme ☕🧠',
  'Il y a plus de smartphones que d’êtres humains sur Terre.',
  // 'Les bananes sont des baies, pas les fraises 🍌',
  'Un chiot naît sourd, aveugle et sans dents.',
  'Sur Vénus, un jour est plus long qu’une année.',
  "97% de l'argent n'existe que numériquement 💻💰",
  'Ton cerveau consomme 20% de ton énergie totale 🔋🧠'
]

const FlipCard = ({ fact }: { fact: string }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="w-full sm:w-[80%] md:w-[200px] aspect-[3/4] perspective cursor-pointer  rounded-xl"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={cn(
          'relative w-full h-full transition-transform duration-700 transform-style-preserve-3d',
          flipped ? 'rotate-y-180' : ''
        )}
      >
        {/* Front */}
        <div className="absolute w-full h-full glass   rounded-xl shadow-lg backface-hidden flex flex-col items-center justify-center text-xl font-bold text-red-900">
          Fun Fact 😄
          <TbClick className="w-8 h-8 text-red-900" />
        </div>

        {/* Back */}
        <div className="absolute w-full h-full glass  rounded-xl shadow-lg backface-hidden rotate-y-180 flex flex-col items-center justify-center text-center p-4">
          <FaSmile className="text-yellow-400 text-4xl mb-4" />
          <p className="text-md font-semibold">{fact}</p>
        </div>
      </div>
    </div>
  )
}

export const FunFactGrid = () => {
  return (
    <div className="h-full w-full p-4 md:overflow-auto">
      <div className="h-full w-full flex flex-col items-center  gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:place-items-center">
        {funFacts.map((fact, index) => (
          <FlipCard key={index} fact={fact} />
        ))}
      </div>
    </div>
  )
}
