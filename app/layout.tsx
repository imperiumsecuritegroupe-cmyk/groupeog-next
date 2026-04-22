import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollTop from '@/components/ScrollTop'

export const metadata: Metadata = {
  title: 'GROUPE OG — BTP · Propreté · Immobilier | Rayonnement National',
  description: 'Groupe OG, expert national en BTP, Propreté et Immobilier. Construction, rénovation, nettoyage industriel, gestion locative. Siège social à Nice (06300), intervention sur toute la France.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  )
}
