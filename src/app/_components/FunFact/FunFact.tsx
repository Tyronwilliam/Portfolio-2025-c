import React, { useState } from 'react'
import { FaSmile } from 'react-icons/fa'
import { cn } from '../../../../lib/utils/classnames'

const funFacts = [
  "Les chiens rêvent comme les humains 🐾",
  "Il y a plus d’arbres sur Terre que d’étoiles dans la Voie Lactée 🌲✨",
  "Boire du café peut améliorer ta mémoire à court terme ☕🧠",
  "Les Dalmatiens naissent tous blancs 🐶",
  "Les bananes sont des baies, pas les fraises 🍌",
  "En Islande, les prénoms doivent être approuvés par une commission 👶",
  "La dette mondiale dépasse 300 000 milliards de dollars 💸",
  "97% de l'argent n'existe que numériquement 💻💰",
  "Ton cerveau consomme 20% de ton énergie totale 🔋🧠",
]

const FlipCard = ({ fact }: { fact: string }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="w-full sm:w-[80%] md:w-[200px] aspect-[3/4] perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={cn(
          'relative w-full h-full transition-transform duration-700 transform-style-preserve-3d',
          flipped ? 'rotate-y-180' : ''
        )}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-blue-100 rounded-xl shadow-lg backface-hidden flex items-center justify-center text-xl font-bold text-blue-900">
          Clique-moi 😄
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-yellow-100 rounded-xl shadow-lg backface-hidden rotate-y-180 flex flex-col items-center justify-center text-center p-4">
          <FaSmile className="text-yellow-500 text-4xl mb-4" />
          <p className="text-md font-semibold">{fact}</p>
        </div>
      </div>
    </div>
  )
}

export const FunFactGrid = () => {
  return (
    <div className="h-full w-full p-4 md:overflow-auto">
      <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:place-items-center">
        {funFacts.map((fact, index) => (
          <FlipCard key={index} fact={fact} />
        ))}
      </div>
    </div>
  )
}
