import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollTop from '@/components/ScrollTop'

export const metadata: Metadata = {
  title: 'GROUPE OG – Facility Management & Maintenance Multitechnique',
  description: 'GROUPE OG, partenaire stratégique en Facility Management pour grandes entreprises et institutionnels. ISO 41001, Smart Building, maintenance prédictive, ESG. Solutions FM globales à Nice et PACA.',
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
