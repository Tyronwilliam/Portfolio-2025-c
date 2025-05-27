import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { cn } from '../../../../lib/utils/classnames'
import { AnimatePresence, motion } from 'framer-motion'

type Status = {
  text: string
  code: string
  show: boolean | null
}
export default function Contact() {
  const form = useRef<null | HTMLFormElement>(null)
  const [statusText, setStatusText] = useState<Status>({ text: '', code: '', show: null })
  const [isLoad, setIsLoad] = useState(false)
  const [lastSent, setLastSent] = useState<number | null>(null)
  const [sendCount, setSendCount] = useState(0)

  useEffect(() => {
    if (statusText.show !== null) {
      setTimeout(() => {
        setStatusText({ ...statusText, show: null })
      }, 3000)
    }
  }, [statusText])
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // LImit Email 1 by 1
    const now = Date.now()
    if (lastSent && now - lastSent < 60000) {
      // 1 minute
      setStatusText({ text: 'Veuillez attendre avant de renvoyer.', code: 'Error', show: true })
      return
    }
    if (sendCount >= 3) {
      setStatusText({ text: 'Limite atteinte', code: 'Error', show: true })
      return
    }
    //
    if (!form.current) return
    setIsLoad(true)
    setLastSent(now)
    setSendCount((prev) => prev + 1)

    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        }
      )
      .then(
        () => {
          setIsLoad(false)
          setStatusText({ text: 'Email envoyé', code: 'Success', show: true })
        },
        (error) => {
          setIsLoad(false)
          setStatusText({ text: "Erreur lors de l'envoie", code: 'Error', show: true })
          console.error(error)
        }
      )
  }
  return (
    <section className="w-full h-full flex flex-1 flex-col items-center justify-between gap-10 md:py-12  z-50">
      <AnimatePresence>
        {statusText.show && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className={cn(
              'fixed top-10 right-10 w-64 p-4 rounded-xl text-white glassomorph_effect_bis shadow-lg z-[9999]',
              statusText.code === 'Success' ? 'bg-green-500' : 'bg-red-500'
            )}
          >
            {statusText.text}
          </motion.div>
        )}
      </AnimatePresence>
      <h1 className="w-fit mx-auto p-2 text-3xl font-bold text-white z-50">Contact</h1>

      <form
        className="w-fit flex flex-col items-center p-2 text-white gap-10"
        ref={form}
        onSubmit={sendEmail}
      >
        {isLoad && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[60%] h-[95%] glassomorph_effect_bis z-50">
            <div className="h-5 w-5 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        <div className="w-fit flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex flex-col md:min-w-80 gap-2">
            <label htmlFor="email" className="font-semibold ">
              Email :
            </label>
            <input
              type="email"
              name="email"
              className="glassomorph_effect_bis p-4"
              placeholder="johndoe@example.com"
            />
          </div>
          <div className="flex flex-col md:min-w-80 gap-2">
            <label htmlFor="name" className="font-semibold">
              Nom :
            </label>
            <input
              type="text"
              name="name"
              className="glassomorph_effect_bis p-4"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="message" className="font-semibold">
            Votre Message :
          </label>
          <div className="flex-1 w-full min-h-80">
            <textarea
              className="glassomorph_effect_bis min-h-80 w-full resize-none p-4"
              id="message"
              name="message"
              placeholder="Taper votre message ici..."
              required
            ></textarea>
          </div>
        </div>

        <button
          className={cn(
            'glassomorph_effect_button p-4 cursor-pointer font-semibold',
            isLoad && 'pointer-events-none opacity-60'
          )}
        >
          Envoyer
        </button>
      </form>
    </section>
  )
}
