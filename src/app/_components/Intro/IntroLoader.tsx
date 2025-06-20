'use client'

import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function IntroLoader({
  isComplete,
  setIsComplete
}: {
  isComplete: boolean
  setIsComplete: Dispatch<SetStateAction<boolean>>
}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 3000
    const interval = 16
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment
        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsComplete(true), 500)
          return 100
        }
        return newProgress
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-[#171932] via-[#030617] to-black"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: '2s' }}
            />
          </div>

          {/* Main loading container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative z-[100] flex flex-col items-center space-y-8 p-12"
          >
            {/* Glassmorphism container */}
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/25 via-cyan-500/25 to-blue-500/25 blur-sm" />
              <div className="absolute inset-[1px] rounded-3xl bg-[#171932]/30 backdrop-blur-xl" />

              {/* Content */}
              <div className="relative z-[100] flex flex-col items-center space-y-8">
                {/* Percentage display */}
                <div className="text-center">
                  <motion.div
                    className="text-8xl md:text-9xl font-mono font-bold bg-gradient-to-r from-cyan-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.3))',
                      fontVariantNumeric: 'tabular-nums'
                    }}
                  >
                    {Math.floor(progress).toString().padStart(3, '0')}
                    <span className="text-cyan-400">%</span>
                  </motion.div>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-white/60 text-lg font-light tracking-wider mt-4"
                  >
                    INITIALIZING SYSTEM
                  </motion.p>
                </div>

                {/* Loading bar container */}
                <div className="w-80 md:w-96">
                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-sm" />

                    {/* Progress bar */}
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 via-cyan-400 to-blue-500 rounded-full"
                      style={{
                        width: `${progress}%`,
                        boxShadow:
                          '0 0 20px rgba(34, 211, 238, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                      }}
                      transition={{ duration: 0.1, ease: 'easeOut' }}
                    />

                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      style={{ width: `${progress}%` }}
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: 'easeInOut'
                      }}
                    />
                  </div>

                  {/* Progress indicators */}
                  <div className="flex justify-between mt-3 text-xs text-white/40 font-mono">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Loading dots */}
                <div className="flex space-x-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-cyan-300 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Reflection effect */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-b from-white/5 to-transparent rounded-3xl blur-xl opacity-30" />
          </motion.div>

          {/* Completion message */}
          <AnimatePresence>
            {progress >= 100 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  className="text-2xl font-light text-white/80 tracking-widest"
                  animate={{
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    times: [0, 0.5, 1]
                  }}
                >
                  WELCOME
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
