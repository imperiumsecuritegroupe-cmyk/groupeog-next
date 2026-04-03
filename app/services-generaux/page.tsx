import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services Généraux Externalisés – GROUPE OG',
  description: 'Externalisation des services généraux : accueil, courrier, reprographie, restauration d\'entreprise, gestion des fournitures, conciergerie, déménagement interne.',
}

export default function ServicesGeneraux() {
  return (
    <>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#2a4a3a,#3a6a50)' }}>
        <div className="page-hero-grid"></div>
        <div className="page-hero-content">
          <div className="breadcrumb"><Link href="/">Accueil</Link><span>/</span>FM Externalisé<span>/</span>Services Généraux</div>
          <div className="page-hero-icon">🗂️</div>
          <h1>Services Généraux Externalisés</h1>
          <p>Externalisez vos services généraux et concentrez-vous sur votre cœur de métier. Accueil, courrier, restauration, conciergerie : GROUPE OG gère tout pour vous.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <Link href="/" className="back-link">← Retour aux services</Link>
              <div className="eyebrow">Services Généraux</div>
              <h2>L&apos;ensemble de vos services support en une seule main</h2>
              <p>Les services généraux regroupent tous les services qui contribuent au bon fonctionnement du quotidien de vos équipes et de vos locaux. GROUPE OG les prend en charge intégralement, vous libérant des tâches administratives et logistiques à faible valeur ajoutée.</p>
              <p>Un interlocuteur unique, un contrat global, des collaborateurs qui peuvent enfin se concentrer sur ce qui compte vraiment.</p>
              <div className="check-list">
                <div className="check-item"><span>Prise en charge intégrale dès J+30</span></div>
                <div className="check-item"><span>Référent services généraux dédié sur site</span></div>
                <div className="check-item"><span>Outils de ticketing et de suivi en temps réel</span></div>
                <div className="check-item"><span>Reporting mensuel de la qualité de service</span></div>
                <div className="check-item"><span>Réduction moyenne des coûts de 15 à 30%</span></div>
              </div>
            </div>
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,#2a4a3a,#3a6a50)' }}>🗂️</div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Nos prestations</div>
            <h2>Tous vos services généraux pris en charge</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            {[
              { icon: '🤝', title: 'Accueil & Réception', text: 'Gestion de l\'accueil physique et téléphonique, standard, gestion des visiteurs, remise de badges, représentation de votre marque.' },
              { icon: '📬', title: 'Gestion du Courrier', text: 'Réception, tri, distribution et affranchissement du courrier entrant et sortant. Gestion des colis et messageries, archivage physique.' },
              { icon: '🖨️', title: 'Reprographie & Impression', text: 'Gestion du parc d\'impression, consommables, maintenance, impression à la demande, numérisation et archivage électronique.' },
              { icon: '🍽️', title: 'Restauration d\'Entreprise', text: 'Gestion de la restauration collective : cafétéria, self, room-service, vending, livraison de plateaux-repas pour séminaires et réunions.' },
              { icon: '🛒', title: 'Achats & Fournitures', text: 'Gestion centralisée des achats indirects : fournitures de bureau, consommables, petits équipements. Optimisation des coûts d\'approvisionnement.' },
              { icon: '🏨', title: 'Conciergerie d\'Entreprise', text: 'Services à la personne pour vos collaborateurs : pressing, coiffeur, petits travaux, réservations, livraisons personnelles.' },
              { icon: '📦', title: 'Déménagements Internes', text: 'Gestion des déménagements de postes de travail, réagencement d\'espaces, restructurations de plateaux, déménagements de sites.' },
              { icon: '🚗', title: 'Gestion de Flotte & Mobilité', text: 'Administration de la flotte de véhicules, cartes carburant, assurances, entretiens, réservation de véhicules de pool, mobilités douces.' },
              { icon: '🌿', title: 'Décoration & Plantes', text: 'Location et entretien de plantes et végétaux d\'intérieur, décoration florale pour événements et espaces communs.' },
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
          <div className="two-col" style={{ direction: 'rtl' }}>
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,#3a6a50,#2a4a3a)', direction: 'ltr' }}>📞</div>
            <div style={{ direction: 'ltr' }}>
              <div className="eyebrow">Help Desk FM</div>
              <h2>Un point de contact unique pour toutes vos demandes</h2>
              <p>GROUPE OG met à votre disposition un Help Desk FM centralisé. Vos collaborateurs n&apos;ont plus qu&apos;un seul numéro à appeler ou une seule adresse mail à contacter pour toutes leurs demandes de services.</p>
              <div className="check-list">
                <div className="check-item"><span>Portail web de demandes accessible 24h/24</span></div>
                <div className="check-item"><span>Application mobile pour les collaborateurs</span></div>
                <div className="check-item"><span>SLA garantis et suivi des tickets en temps réel</span></div>
                <div className="check-item"><span>Escalade automatique des demandes urgentes</span></div>
                <div className="check-item"><span>Enquête de satisfaction après chaque intervention</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>Workplace Management</div>
            <h2 style={{ color: 'white' }}>Optimisez vos espaces de travail</h2>
            <p style={{ color: 'rgba(255,255,255,.65)' }}>Au-delà des services généraux, GROUPE OG vous accompagne dans la transformation de vos espaces de travail.</p>
          </div>
          <div className="cards-grid cards-grid-3">
            <div className="info-card"><div className="info-icon">🗺️</div><h3>Gestion des Espaces</h3><p>Analyse d&apos;occupation des bureaux, plans d&apos;optimisation du flex-office, gestion des réservations de salles et de postes.</p></div>
            <div className="info-card"><div className="info-icon">♻️</div><h3>RSE &amp; Développement Durable</h3><p>Mise en place de la politique de tri des déchets, bilan carbone des services généraux, reporting RSE pour vos parties prenantes.</p></div>
            <div className="info-card"><div className="info-icon">🎉</div><h3>Événementiel d&apos;Entreprise</h3><p>Organisation de séminaires, inaugurations, afterworks, fêtes de fin d&apos;année. Logistique complète de A à Z sur vos sites.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Formules</div>
            <h2>Des offres adaptées à votre taille</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            <div className="feature-card" style={{ borderTop: '4px solid var(--gold)', textAlign: 'center' }}>
              <div className="feature-icon" style={{ margin: '0 auto 1.25rem' }}>🏢</div>
              <h3>PME &amp; Start-up</h3>
              <p>Pack services essentiels : accueil, courrier, fournitures, helpdesk. Idéal pour les structures de 20 à 100 personnes.</p>
              <Link href="/contact" className="btn btn-navy" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>Nous contacter</Link>
            </div>
            <div className="feature-card" style={{ borderTop: '4px solid var(--navy)', textAlign: 'center', boxShadow: '0 8px 40px rgba(11,23,36,.2)' }}>
              <div className="feature-icon" style={{ margin: '0 auto 1.25rem' }}>🏬</div>
              <h3>ETI &amp; Grands Sites</h3>
              <p>Services généraux complets avec référent dédié sur site, helpdesk intégré et reporting mensuel. 100 à 1 000 personnes.</p>
              <Link href="/contact" className="btn btn-gold" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>Demander un devis</Link>
            </div>
            <div className="feature-card" style={{ borderTop: '4px solid #27ae60', textAlign: 'center' }}>
              <div className="feature-icon" style={{ margin: '0 auto 1.25rem' }}>🌐</div>
              <h3>Grands Comptes Multi-sites</h3>
              <p>Externalisation totale des services généraux sur l&apos;ensemble du parc immobilier, gouvernance centralisée, SLA nationaux.</p>
              <Link href="/contact" className="btn btn-navy" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>Étude sur mesure</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Libérez vos équipes des tâches support</h2>
            <p>Audit de vos services généraux gratuit. Nous identifions les gisements d&apos;économies et les axes d&apos;amélioration sous 48h.</p>
            <Link href="/contact" className="btn btn-gold">Demander un audit gratuit →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
