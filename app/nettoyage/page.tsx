import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nettoyage Général du Bâtiment – GROUPE OG',
  description: 'Nettoyage professionnel de bâtiments : remise en état après travaux, entretien régulier, nettoyage industriel, vitres, façades.',
}

export default function Nettoyage() {
  return (
    <>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#2a3a5f,#3a4a8a)' }}>
        <div className="page-hero-grid"></div>
        <div className="page-hero-content">
          <div className="breadcrumb"><Link href="/">Accueil</Link><span>/</span>Nettoyage Bâtiment</div>
          <div className="page-hero-icon">🧹</div>
          <h1>Nettoyage Général du Bâtiment</h1>
          <p>Propreté impeccable et remise en état professionnelle pour tous types de bâtiments. Particuliers, professionnels et collectivités.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <Link href="/" className="back-link">← Retour aux services</Link>
              <div className="eyebrow">Nettoyage Professionnel</div>
              <h2>Une propreté irréprochable, un environnement sain</h2>
              <p>GROUPE OG propose des services de nettoyage complets pour tous types de bâtiments et de surfaces. Nos équipes professionnelles, équipées de matériels performants et de produits adaptés, interviennent pour garantir un résultat impeccable.</p>
              <p>Que ce soit pour une remise en état après travaux, un entretien régulier ou un grand nettoyage ponctuel, nous nous adaptons à vos besoins et à vos contraintes.</p>
              <div className="check-list">
                <div className="check-item"><span>Personnel qualifié et formé</span></div>
                <div className="check-item"><span>Produits certifiés et respectueux de l&apos;environnement</span></div>
                <div className="check-item"><span>Matériels professionnels haute performance</span></div>
                <div className="check-item"><span>Interventions flexibles (jour, nuit, week-end)</span></div>
                <div className="check-item"><span>Devis gratuit et contrats sur mesure</span></div>
              </div>
            </div>
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,#2a3a5f,#3a4a8a)' }}>✨</div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Nos prestations</div>
            <h2>Tous types de nettoyage</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            {[
              { icon: '🏗️', title: 'Remise en État après Travaux', text: 'Nettoyage complet après chantier : élimination des poussières, résidus de peinture, déblaiement et désencombrement. Bâtiment prêt à l\'emploi.' },
              { icon: '🏢', title: 'Nettoyage de Bureaux', text: 'Entretien régulier de vos locaux professionnels : sols, surfaces, sanitaires, espaces de travail. Prestations journalières ou hebdomadaires.' },
              { icon: '🏭', title: 'Nettoyage Industriel', text: 'Nettoyage d\'ateliers, entrepôts, usines. Dégraissage sol, nettoyage haute pression, aspiration industrielle.' },
              { icon: '🪟', title: 'Lavage de Vitres', text: 'Nettoyage de vitres, vitrines, façades vitrées en hauteur. Perche télescopique, nacelle élévatrice pour les grandes hauteurs.' },
              { icon: '🏠', title: 'Nettoyage Résidentiel', text: 'Grand ménage, remise en état de logements, nettoyage fin de bail, départ locataire. Appartements et maisons.' },
              { icon: '🧽', title: 'Façades & Parkings', text: 'Nettoyage et démoussage de façades, ravalement léger, nettoyage haute pression de parkings et dallages.' },
              { icon: '🌿', title: 'Espaces Verts & Copropriétés', text: 'Entretien des parties communes, halls d\'immeuble, caves, parkings, espaces verts de copropriété.' },
              { icon: '🏥', title: 'Secteurs Sensibles', text: 'Nettoyage et désinfection pour établissements de santé, crèches, restaurants. Protocoles stricts d\'hygiène.' },
              { icon: '🚒', title: 'Sinistres & Urgences', text: 'Intervention après dégâts des eaux, incendie ou inondation. Nettoyage et remise en état d\'urgence.' },
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
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>Nos engagements</div>
            <h2 style={{ color: 'white' }}>La propreté, notre priorité</h2>
          </div>
          <div className="cards-grid cards-grid-4">
            {[
              { icon: '🌱', title: 'Éco-responsable', text: 'Produits biodégradables et écolabellisés. Gestion responsable des déchets et économies d\'eau.' },
              { icon: '⏱️', title: 'Ponctualité', text: 'Respect des horaires convenus et des délais d\'intervention. Discrétion et efficacité garanties.' },
              { icon: '🎓', title: 'Personnel Formé', text: 'Équipes formées aux dernières techniques, aux règles d\'hygiène et de sécurité en vigueur.' },
              { icon: '🛡️', title: 'Assurance RC', text: 'Tous nos agents sont couverts par une assurance responsabilité civile professionnelle.' },
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

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Formules</div>
            <h2>Choisissez votre formule</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            <div className="feature-card" style={{ borderTop: '4px solid var(--gold)', textAlign: 'center' }}>
              <div className="feature-icon" style={{ margin: '0 auto 1.25rem' }}>🧹</div>
              <h3>Ponctuel</h3>
              <p>Intervention unique pour un grand nettoyage, remise en état ou nettoyage après travaux. Sur devis selon surface.</p>
              <Link href="/contact" className="btn btn-navy" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>Demander un devis</Link>
            </div>
            <div className="feature-card" style={{ borderTop: '4px solid var(--navy)', textAlign: 'center', boxShadow: '0 8px 40px rgba(11,23,36,.2)' }}>
              <div className="feature-icon" style={{ margin: '0 auto 1.25rem' }}>📅</div>
              <h3>Régulier</h3>
              <p>Passage hebdomadaire, bi-mensuel ou mensuel selon vos besoins. Tarifs préférentiels sur contrat annuel.</p>
              <Link href="/contact" className="btn btn-gold" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>S&apos;abonner</Link>
            </div>
            <div className="feature-card" style={{ borderTop: '4px solid #27ae60', textAlign: 'center' }}>
              <div className="feature-icon" style={{ margin: '0 auto 1.25rem' }}>🏢</div>
              <h3>Sur-Mesure Entreprise</h3>
              <p>Contrat personnalisé pour professionnels : fréquence, horaires, prestations adaptés à votre activité.</p>
              <Link href="/contact" className="btn btn-navy" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Un bâtiment propre, une image soignée</h2>
            <p>Devis gratuit sous 24h pour tous vos besoins en nettoyage. Résultat garanti ou remboursé.</p>
            <Link href="/contact" className="btn btn-gold">Demander un devis gratuit →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
