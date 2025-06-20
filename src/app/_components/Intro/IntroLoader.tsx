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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-[#171932] via-[#030617] to-black"
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
            {/* Glassmorphism container with frosted effect */}
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#6366F1]/20 via-[#6366F1]/10 to-[#6366F1]/20 blur-xl" />

              {/* Main frosted glass container */}
              <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/8 via-white/4 to-white/2 border-2 border-white/15 rounded-3xl p-12 shadow-2xl overflow-hidden">
                {/* Inner frost pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/3 rounded-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)] rounded-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)] rounded-3xl" />

                {/* Frosted border highlight */}
                <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />

                {/* Inner shadow with indigo */}
                <div
                  className="absolute inset-2 rounded-3xl shadow-inner"
                  style={{
                    boxShadow: `inset 0 2px 4px rgba(99, 102, 241, 0.1), inset 0 -2px 4px rgba(99, 102, 241, 0.05)`
                  }}
                />

                {/* Content */}
                <div className="relative z-[90] flex flex-col items-center space-y-8">
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
                  </div>

                  {/* Loading bar container */}
                  <div className="w-80 md:w-96">
                    <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
                      {/* Background glow with indigo */}
                      <div
                        className="absolute inset-0 rounded-full blur-sm"
                        style={{
                          background: `linear-gradient(to right, rgba(99, 102, 241, 0.15), rgba(34, 211, 238, 0.15))`
                        }}
                      />

                      {/* Progress bar */}
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 via-cyan-400 to-blue-500 rounded-full"
                        style={{
                          width: `${progress}%`,
                          boxShadow: `0 0 20px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 2px rgba(99, 102, 241, 0.2)`
                        }}
                        transition={{ duration: 0.1, ease: 'easeOut' }}
                      />

                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
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
                    <div
                      className="flex justify-between mt-3 text-xs font-mono"
                      style={{ color: '#94A3B8' }}
                    >
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
