'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdown1Open, setDropdown1Open] = useState(false)
  const [dropdown2Open, setDropdown2Open] = useState(false)

  function isActive(href: string) {
    return pathname === href ? 'active' : ''
  }

  return (
    <nav id="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <div className="logo-icon">🏢</div>
          GROUPE<span>OG</span>
        </Link>

        <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
          <li className="nav-item">
            <Link href="/" className={`nav-link ${isActive('/')}`} onClick={() => setMenuOpen(false)}>
              Accueil
            </Link>
          </li>

          <li className="nav-item nav-item-mega">
            <a
              href="#"
              className="nav-link"
              onClick={(e) => { e.preventDefault(); setDropdown1Open(!dropdown1Open); setDropdown2Open(false) }}
            >
              FM Externalisé <span className="arrow">▾</span>
            </a>
            <div className="dropdown" style={menuOpen ? { opacity: dropdown1Open ? '1' : undefined, visibility: dropdown1Open ? 'visible' : 'hidden' } : {}}>
              <Link href="/immobilier" onClick={() => setMenuOpen(false)}><span className="dd-icon">🏙️</span> Gestion Immobilière</Link>
              <Link href="/services-generaux" onClick={() => setMenuOpen(false)}><span className="dd-icon">🗂️</span> Services Généraux</Link>
              <Link href="/securite-surete" onClick={() => setMenuOpen(false)}><span className="dd-icon">🛡️</span> Sécurité &amp; Sûreté</Link>
              <Link href="/espaces-verts" onClick={() => setMenuOpen(false)}><span className="dd-icon">🌿</span> Espaces Verts</Link>
            </div>
          </li>

          <li className="nav-item nav-item-mega">
            <a
              href="#"
              className="nav-link"
              onClick={(e) => { e.preventDefault(); setDropdown2Open(!dropdown2Open); setDropdown1Open(false) }}
            >
              Maintenance Technique <span className="arrow">▾</span>
            </a>
            <div className="dropdown" style={menuOpen ? { opacity: dropdown2Open ? '1' : undefined, visibility: dropdown2Open ? 'visible' : 'hidden' } : {}}>
              <Link href="/gros-oeuvres" onClick={() => setMenuOpen(false)}><span className="dd-icon">🏛️</span> Gros Œuvres &amp; Maçonnerie</Link>
              <Link href="/seconds-oeuvres" onClick={() => setMenuOpen(false)}><span className="dd-icon">🔨</span> Seconds Œuvres &amp; Finitions</Link>
              <Link href="/plomberie-chauffage" onClick={() => setMenuOpen(false)}><span className="dd-icon">🔧</span> Plomberie &amp; CVC</Link>
              <Link href="/electricite" onClick={() => setMenuOpen(false)}><span className="dd-icon">⚡</span> Électricité &amp; GTB</Link>
              <Link href="/photovoltaique" onClick={() => setMenuOpen(false)}><span className="dd-icon">☀️</span> Énergie Solaire</Link>
              <Link href="/nettoyage" onClick={() => setMenuOpen(false)}><span className="dd-icon">🧹</span> Propreté &amp; Nettoyage</Link>
            </div>
          </li>

          <li className="nav-item">
            <Link href="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        <Link href="/contact" className="btn btn-gold nav-cta">Audit gratuit</Link>

        <div
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  )
}
