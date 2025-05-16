'use client'
import { motion } from 'framer-motion'
import { FaHandPointer } from 'react-icons/fa'

export const SwipeHint = () => {
  return (
    <div className="md:hidden absolute bottom-5 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1 text-white text-sm">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, -20, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="text-xl"
      >
        <FaHandPointer />
      </motion.div>
      <span className="opacity-80">Swipe gauche / droite</span>
    </div>
  )
}
