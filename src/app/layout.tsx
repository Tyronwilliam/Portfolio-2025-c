import type { Metadata } from 'next'
import {
  Montserrat,
  Poppins,
  PT_Sans_Narrow,
  Quattrocento,
  Raleway,
  Roboto,
  Roboto_Condensed
} from 'next/font/google'
import './globals.css'
import NavigationProvider from './hooks/useNavigation'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // ← choisis les poids que tu veux charger
  variable: '--font-poppins', // ← pour utiliser une variable CSS
  display: 'swap' // ← bonne pratique pour éviter les flashs
})
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // ← choisis les poids que tu veux charger
  variable: '--font-montserrat', // ← pour utiliser une variable CSS
  display: 'swap' // ← bonne pratique pour éviter les flashs
})
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // ← choisis les poids que tu veux charger
  variable: '--font-robotoCondensed', // ← pour utiliser une variable CSS
  display: 'swap' // ← bonne pratique pour éviter les flashs
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // ← choisis les poids que tu veux charger
  variable: '--font-roboto', // ← pour utiliser une variable CSS
  display: 'swap' // ← bonne pratique pour éviter les flashs
})
const ptSansNarrow = PT_Sans_Narrow({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ptSansNarrow',
  weight: ['400', '700'] // ← choisis les poids que tu veux charger
})
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['400', '700'] // ← choisis les poids que tu veux charger
})
const quattrocento = Quattrocento({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quattrocento',
  weight: ['400', '700'] // ← choisis les poids que tu veux charger
})

export const metadata: Metadata = {
  title: 'Chanu Tyron William',
  description: 'Portfolio'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body
        className={` ${poppins.variable} ${raleway.variable} ${quattrocento.variable}  ${ptSansNarrow.variable}  ${robotoCondensed.variable} ${roboto.variable} ${montserrat.variable} antialiased`}
      >
        <NavigationProvider>{children}</NavigationProvider>
      </body>
    </html>
  )
}
