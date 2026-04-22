'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dd1, setDd1] = useState(false)
  const [dd2, setDd2] = useState(false)
  const [dd3, setDd3] = useState(false)

  function isActive(href: string) {
    return pathname === href ? 'active' : ''
  }
  function closeAll() {
    setMenuOpen(false); setDd1(false); setDd2(false); setDd3(false)
  }

  return (
    <nav id="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <Image src="/logo.png" alt="Groupe OG" width={130} height={52} className="nav-logo-img" priority />
        </Link>

        <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
          <li className="nav-item">
            <Link href="/" className={`nav-link ${isActive('/')}`} onClick={closeAll}>Accueil</Link>
          </li>

          {/* BTP */}
          <li className="nav-item nav-item-mega">
            <a href="#" className="nav-link"
              onClick={e => { e.preventDefault(); setDd1(!dd1); setDd2(false); setDd3(false) }}>
              BTP <span className="arrow">▾</span>
            </a>
            <div className={`dropdown btp-dd${menuOpen && dd1 ? ' open-mobile' : ''}`}>
              <Link href="/gros-oeuvres" onClick={closeAll}><span className="dd-icon">🏛️</span> Gros Œuvres &amp; Maçonnerie</Link>
              <Link href="/seconds-oeuvres" onClick={closeAll}><span className="dd-icon">🔨</span> Seconds Œuvres &amp; Finitions</Link>
              <Link href="/plomberie-chauffage" onClick={closeAll}><span className="dd-icon">🔧</span> Plomberie &amp; CVC</Link>
              <Link href="/electricite" onClick={closeAll}><span className="dd-icon">⚡</span> Électricité &amp; GTB</Link>
              <Link href="/photovoltaique" onClick={closeAll}><span className="dd-icon">☀️</span> Énergie Solaire</Link>
            </div>
          </li>

          {/* PROPRETÉ */}
          <li className="nav-item nav-item-mega">
            <a href="#" className="nav-link"
              onClick={e => { e.preventDefault(); setDd2(!dd2); setDd1(false); setDd3(false) }}>
              Propreté <span className="arrow">▾</span>
            </a>
            <div className={`dropdown prop-dd${menuOpen && dd2 ? ' open-mobile' : ''}`}>
              <Link href="/nettoyage" onClick={closeAll}><span className="dd-icon">🧹</span> Nettoyage &amp; Hygiène</Link>
              <Link href="/espaces-verts" onClick={closeAll}><span className="dd-icon">🌿</span> Espaces Verts</Link>
            </div>
          </li>

          {/* IMMOBILIER */}
          <li className="nav-item nav-item-mega">
            <a href="#" className="nav-link"
              onClick={e => { e.preventDefault(); setDd3(!dd3); setDd1(false); setDd2(false) }}>
              Immobilier <span className="arrow">▾</span>
            </a>
            <div className={`dropdown immo-dd${menuOpen && dd3 ? ' open-mobile' : ''}`}>
              <Link href="/immobilier" onClick={closeAll}><span className="dd-icon">🏢</span> Gestion Immobilière</Link>
              <Link href="/services-generaux" onClick={closeAll}><span className="dd-icon">🗂️</span> Services Généraux</Link>
              <Link href="/securite-surete" onClick={closeAll}><span className="dd-icon">🛡️</span> Sécurité &amp; Sûreté</Link>
            </div>
          </li>

          <li className="nav-item">
            <Link href="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeAll}>Contact</Link>
          </li>
        </ul>

        <Link href="/contact" className="btn btn-orange nav-cta">Devis gratuit</Link>

        <div className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  )
}
