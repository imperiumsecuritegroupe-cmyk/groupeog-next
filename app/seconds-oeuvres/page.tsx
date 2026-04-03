import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Seconds Œuvres – Finitions & Aménagement – GROUPE OG',
  description: 'Seconds œuvres : isolation, cloisons, revêtements de sol et mur, menuiseries, plafonds. Finitions soignées pour intérieur et extérieur.',
}

export default function SecondsOeuvres() {
  return (
    <>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#3a5f2a,#2a4a1e)' }}>
        <div className="page-hero-grid"></div>
        <div className="page-hero-content">
          <div className="breadcrumb"><Link href="/">Accueil</Link><span>/</span>Seconds Œuvres</div>
          <div className="page-hero-icon">🔨</div>
          <h1>Seconds Œuvres</h1>
          <p>L&apos;art des finitions : isolation, cloisonnement, revêtements et aménagements intérieurs pour un cadre de vie confortable et esthétique.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <Link href="/" className="back-link">← Retour aux services</Link>
              <div className="eyebrow">Seconds Œuvres</div>
              <h2>Transformer l&apos;espace en lieu de vie</h2>
              <p>Une fois la structure bâtie, les seconds œuvres apportent confort, esthétique et fonctionnalité. GROUPE OG prend en charge toutes les phases de finition pour que votre projet devienne exactement le lieu dont vous rêviez.</p>
              <p>De l&apos;isolation thermique aux revêtements finaux, nos artisans qualifiés travaillent avec minutie pour un résultat à la hauteur de vos attentes.</p>
              <div className="check-list">
                <div className="check-item"><span>Isolation thermique et phonique haute performance</span></div>
                <div className="check-item"><span>Cloisonnement et aménagement d&apos;espaces</span></div>
                <div className="check-item"><span>Revêtements de sol et muraux</span></div>
                <div className="check-item"><span>Menuiseries intérieures et extérieures</span></div>
                <div className="check-item"><span>Plafonds suspendus et faux plafonds</span></div>
              </div>
            </div>
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,#3a5f2a,#4a8a38)' }}>🏠</div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Prestations</div>
            <h2>Nos travaux de seconds œuvres</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            {[
              { icon: '🌡️', title: 'Isolation Thermique & Phonique', text: 'Isolation des combles, murs, planchers par l\'intérieur et l\'extérieur. Laine de verre, laine de roche, ouate de cellulose, polystyrène.' },
              { icon: '🧱', title: 'Cloisons & Plâtrerie', text: 'Cloisons en plaques de plâtre, carreaux de plâtre, briques de verre. Enduits et finitions parfaites pour murs et plafonds.' },
              { icon: '🪵', title: 'Revêtements de Sol', text: 'Parquet massif et contrecollé, carrelage, faïence, vinyle, moquette, béton ciré. Pose et finitions soignées.' },
              { icon: '🖌️', title: 'Peinture & Revêtements Muraux', text: 'Peinture intérieure et extérieure, papier peint, carrelage mural, bardage, enduits décoratifs et texturés.' },
              { icon: '🚪', title: 'Menuiseries Intérieures', text: 'Portes intérieures, placards, dressings, escaliers, garde-corps, habillages bois sur mesure.' },
              { icon: '🪟', title: 'Menuiseries Extérieures', text: 'Fenêtres, portes d\'entrée, volets, portails, vérandas, pergolas. Aluminium, PVC, bois. Pose et remplacement.' },
              { icon: '🔲', title: 'Faux Plafonds', text: 'Plafonds suspendus en plaques de plâtre, dalles minérales, bois, métal. Intégration de l\'éclairage et des réseaux.' },
              { icon: '🚿', title: 'Carrelage & Faïence', text: 'Pose de carrelage sol et mur, faïence, mosaïque. Salles de bain, cuisines, terrasses, piscines.' },
              { icon: '🏗️', title: 'Aménagements Extérieurs', text: 'Terrasses, allées, clôtures, portails, bardages de façade. Ravalement et rénovation de façades.' },
            ].map((c) => (
              <div className="feature-card" key={c.title}>
                <div className="feature-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>Point fort</div>
            <h2 style={{ color: 'white' }}>L&apos;isolation : un investissement rentable</h2>
            <p style={{ color: 'rgba(255,255,255,.65)' }}>Une bonne isolation réduit votre consommation énergétique jusqu&apos;à 30% et améliore le confort de votre habitat.</p>
          </div>
          <div className="cards-grid cards-grid-4">
            {[
              { icon: '🌡️', title: 'Isolation par l\'intérieur', text: 'Solution économique, idéale pour les rénovations sans toucher aux façades extérieures.' },
              { icon: '🏠', title: 'Isolation par l\'extérieur', text: 'ITE (Isolation Thermique par l\'Extérieur) : solution complète sans perte de surface habitable.' },
              { icon: '🏔️', title: 'Isolation des combles', text: 'Jusqu\'à 30% des pertes de chaleur passent par le toit. Isolation soufflée ou en rouleaux.' },
              { icon: '🔇', title: 'Isolation phonique', text: 'Réduction des nuisances sonores avec des matériaux spécifiques pour murs, sols et plafonds.' },
            ].map((c) => (
              <div className="info-card" key={c.title}>
                <div className="info-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Aides financières</div>
            <h2>Bénéficiez des aides à la rénovation</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            <div className="feature-card" style={{ borderLeft: '4px solid var(--gold)' }}>
              <div className="feature-icon">💰</div>
              <h3>MaPrimeRénov&apos;</h3>
              <p>Aide de l&apos;État pour les travaux d&apos;isolation et de rénovation énergétique. Accessible à tous les propriétaires.</p>
            </div>
            <div className="feature-card" style={{ borderLeft: '4px solid var(--navy)' }}>
              <div className="feature-icon">⚡</div>
              <h3>CEE (Certificats d&apos;Économies d&apos;Énergie)</h3>
              <p>Prime énergie versée par les fournisseurs d&apos;énergie pour vos travaux d&apos;économies d&apos;énergie.</p>
            </div>
            <div className="feature-card" style={{ borderLeft: '4px solid #27ae60' }}>
              <div className="feature-icon">🏦</div>
              <h3>TVA Réduite</h3>
              <p>TVA à 5,5% sur les travaux d&apos;amélioration énergétique dans les logements de plus de 2 ans.</p>
            </div>
          </div>
          <div className="notice" style={{ marginTop: '2rem' }}>
            <div className="notice-icon">ℹ️</div>
            <div className="notice-text">
              <h4>Accompagnement administratif</h4>
              <p>GROUPE OG vous aide à constituer vos dossiers d&apos;aides financières et vous accompagne dans toutes les démarches administratives liées à vos travaux.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="cta-banner">
            <h2>Améliorez votre intérieur avec GROUPE OG</h2>
            <p>Devis gratuit pour tous vos projets de seconds œuvres et de finitions. Réalisations soignées et durables.</p>
            <Link href="/contact" className="btn btn-gold">Demander un devis gratuit →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
