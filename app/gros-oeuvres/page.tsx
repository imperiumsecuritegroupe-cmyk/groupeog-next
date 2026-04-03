import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gros Œuvres & Maçonnerie Générale – GROUPE OG',
  description: 'Spécialistes en gros œuvres et maçonnerie générale : fondations, structures béton, murs porteurs, dalles. Constructions neuves et rénovations.',
}

export default function GrosOeuvres() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="page-hero-content">
          <div className="breadcrumb"><Link href="/">Accueil</Link><span>/</span>Gros Œuvres &amp; Maçonnerie</div>
          <div className="page-hero-icon">🏛️</div>
          <h1>Gros Œuvres &amp; Maçonnerie Générale</h1>
          <p>Des fondations solides pour bâtir l&apos;avenir. Expertise en construction, rénovation et travaux de maçonnerie sur mesure.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <Link href="/" className="back-link">← Retour aux services</Link>
              <div className="eyebrow">Gros Œuvres</div>
              <h2>La solidité au cœur de chaque patrimoine</h2>
              <p>Dans le cadre du facility management, GROUPE OG prend en charge l&apos;intégralité des travaux de gros œuvres : réhabilitation structurelle, remise en état du bâti, extensions et constructions neuves sur tout type de patrimoine professionnel.</p>
              <p>Nous adaptons nos méthodes aux contraintes d&apos;exploitation de votre site pour minimiser les perturbations de votre activité tout en garantissant la pérennité de vos ouvrages.</p>
              <div className="check-list">
                <div className="check-item"><span>Maîtrise des normes parasismiques et environnementales</span></div>
                <div className="check-item"><span>Matériaux certifiés de haute qualité</span></div>
                <div className="check-item"><span>Respect strict des délais et du budget</span></div>
                <div className="check-item"><span>Suivi de chantier personnalisé</span></div>
                <div className="check-item"><span>Garantie décennale</span></div>
              </div>
            </div>
            <div className="content-visual">🏗️</div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Nos prestations</div>
            <h2>Travaux de gros œuvres</h2>
            <p>Une offre complète pour tous types de constructions et de chantiers.</p>
          </div>
          <div className="cards-grid cards-grid-3">
            {[
              { icon: '🔩', title: 'Fondations & Terrassement', text: 'Études de sol, fondations superficielles et profondes, semelles filantes, radiers. Terrassement et préparation du terrain.' },
              { icon: '🧱', title: 'Structure Béton Armé', text: 'Poteaux, poutres, planchers, dalles en béton armé. Coffrages traditionnels et industriels pour tous types de projets.' },
              { icon: '🏠', title: 'Murs Porteurs & Façades', text: 'Construction de murs porteurs en béton, parpaing, brique. Façades traditionnelles et contemporaines avec finitions soignées.' },
              { icon: '🔧', title: 'Charpente & Toiture', text: 'Charpente bois et métallique, pose de couvertures, tuiles, ardoises, zinc, étanchéité toiture-terrasse.' },
              { icon: '🌊', title: 'Réseaux & Assainissement', text: 'Création et raccordement des réseaux enterrés : assainissement, drainage, évacuations eaux pluviales.' },
              { icon: '🔨', title: 'Maçonnerie Générale', text: 'Travaux de maçonnerie courante : enduits, hourdis, agglos, briques, jointement, habillages et réparations.' },
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

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Types de projets</div>
            <h2>Pour qui travaillons-nous ?</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            <div className="feature-card" style={{ borderTop: '4px solid var(--gold)' }}>
              <div className="feature-icon">🏡</div>
              <h3>Particuliers</h3>
              <p>Maisons individuelles, extensions, garages, abris de jardin, piscines, murs de clôture, escaliers extérieurs.</p>
              <div style={{ marginTop: '1rem' }}>
                <span className="tag">Construction neuve</span>
                <span className="tag">Extension</span>
                <span className="tag">Rénovation</span>
              </div>
            </div>
            <div className="feature-card" style={{ borderTop: '4px solid var(--navy)' }}>
              <div className="feature-icon">🏢</div>
              <h3>Professionnels</h3>
              <p>Bâtiments commerciaux, entrepôts, bureaux, ateliers industriels, locaux techniques, parkings.</p>
              <div style={{ marginTop: '1rem' }}>
                <span className="tag">Neuf</span>
                <span className="tag">Réhabilitation</span>
                <span className="tag">Extension</span>
              </div>
            </div>
            <div className="feature-card" style={{ borderTop: '4px solid #27ae60' }}>
              <div className="feature-icon">🏛️</div>
              <h3>Collectivités</h3>
              <p>Équipements publics, bâtiments scolaires, sportifs, culturels et administratifs. Marchés publics et privés.</p>
              <div style={{ marginTop: '1rem' }}>
                <span className="tag">Marchés publics</span>
                <span className="tag">Neuf</span>
                <span className="tag">Rénovation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="two-col" style={{ direction: 'rtl' }}>
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,#3a5f2a,#4a8a38)', direction: 'ltr' }}>🧱</div>
            <div style={{ direction: 'ltr' }}>
              <div className="eyebrow">Maçonnerie Générale</div>
              <h2>Savoir-faire artisanal &amp; techniques modernes</h2>
              <p>Notre équipe de maçons expérimentés intervient sur tous types de travaux : des petites réparations aux grands chantiers de construction. Nous combinons les techniques traditionnelles et les matériaux modernes pour un résultat durable et esthétique.</p>
              <div className="check-list">
                <div className="check-item"><span>Montage de murs en parpaings, briques, pierres naturelles</span></div>
                <div className="check-item"><span>Enduits ciment, chaux, projeté</span></div>
                <div className="check-item"><span>Dallages intérieurs et extérieurs</span></div>
                <div className="check-item"><span>Création d&apos;ouvertures (portes, fenêtres)</span></div>
                <div className="check-item"><span>Restauration et rénovation du bâti ancien</span></div>
                <div className="check-item"><span>Murs de soutènement et murets</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Notre méthode</div>
            <h2>Comment travaillons-nous ?</h2>
          </div>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <div className="process-list">
              {[
                { n: 1, title: 'Visite & Étude', text: 'Visite du site, analyse des contraintes techniques, étude de faisabilité et proposition de solutions adaptées.' },
                { n: 2, title: 'Devis Détaillé', text: 'Remise d\'un devis transparent et détaillé avec descriptif des travaux, matériaux et planning prévisionnel.' },
                { n: 3, title: 'Préparation du Chantier', text: 'Organisation logistique, approvisionnement en matériaux, sécurisation du chantier et coordination des équipes.' },
                { n: 4, title: 'Réalisation des Travaux', text: 'Exécution des travaux par nos équipes qualifiées avec contrôles qualité réguliers à chaque étape.' },
                { n: 5, title: 'Réception & Garantie', text: 'Réception des travaux avec procès-verbal, remise des documents et garantie décennale sur l\'ensemble des ouvrages.' },
              ].map((s) => (
                <div className="process-step" key={s.n}>
                  <div className="step-num">{s.n}</div>
                  <div className="step-content"><h4>{s.title}</h4><p>{s.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="cta-banner">
            <h2>Un projet de construction ou de maçonnerie ?</h2>
            <p>Contactez-nous pour une étude gratuite et un devis personnalisé. Nos experts sont à votre écoute.</p>
            <Link href="/contact" className="btn btn-gold">Demander un devis gratuit →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
