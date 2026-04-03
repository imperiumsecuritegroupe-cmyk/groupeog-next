import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Espaces Verts & Développement Durable – GROUPE OG',
  description: 'Gestion externalisée des espaces verts : entretien, création, élagage, gestion des déchets verts, biodiversité, développement durable.',
}

export default function EspacesVerts() {
  return (
    <>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#1a4a2a,#2a6a3a)' }}>
        <div className="page-hero-grid"></div>
        <div className="page-hero-content">
          <div className="breadcrumb"><Link href="/">Accueil</Link><span>/</span>FM Externalisé<span>/</span>Espaces Verts</div>
          <div className="page-hero-icon">🌿</div>
          <h1>Espaces Verts &amp; Développement Durable</h1>
          <p>Création, entretien et valorisation de vos espaces extérieurs. Gestion durable et biodiversité intégrées à votre stratégie RSE.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <Link href="/" className="back-link">← Retour aux services</Link>
              <div className="eyebrow">Espaces Verts</div>
              <h2>Des espaces extérieurs à votre image</h2>
              <p>Les espaces verts participent à l&apos;image de marque de votre entreprise, au bien-être de vos collaborateurs et à la biodiversité urbaine. GROUPE OG prend en charge leur création et leur entretien dans une démarche résolument durable.</p>
              <p>De la tonte de gazon à la conception de jardins d&apos;entreprise, nos équipes d&apos;espaces verts certifiées interviennent régulièrement pour maintenir vos extérieurs dans un état irréprochable toute l&apos;année.</p>
              <div className="check-list">
                <div className="check-item"><span>Techniciens espaces verts certifiés</span></div>
                <div className="check-item"><span>Gestion phytosanitaire raisonnée (zéro phyto)</span></div>
                <div className="check-item"><span>Matériels électriques silencieux et propres</span></div>
                <div className="check-item"><span>Valorisation des déchets verts en compost</span></div>
                <div className="check-item"><span>Reporting photographique après chaque passage</span></div>
              </div>
            </div>
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,#1a4a2a,#2a6a3a)' }}>🌿</div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Nos prestations</div>
            <h2>Entretien et création d&apos;espaces verts</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            {[
              { icon: '🌾', title: 'Entretien des Pelouses', text: 'Tonte régulière, scalpage, scarification, aération, sursemis, fertilisation raisonnée. Pelouses toujours impeccables.' },
              { icon: '🌳', title: 'Taille des Arbres & Arbustes', text: 'Taille de formation, d\'entretien et de mise en sécurité. Élagage, abattage, dessouchage. Grimpeurs certifiés CS.' },
              { icon: '🌸', title: 'Massifs Floraux', text: 'Conception et entretien de massifs selon les saisons. Plantes à floraison successive pour des espaces colorés toute l\'année.' },
              { icon: '🎨', title: 'Création & Aménagement', text: 'Conception de jardins d\'entreprise, terrasses végétalisées, cours intérieures, parkings verts. Maîtrise d\'œuvre paysagère.' },
              { icon: '💧', title: 'Arrosage & Irrigation', text: 'Installation et programmation de systèmes d\'arrosage automatique. Récupération d\'eaux pluviales, gestion économe de l\'eau.' },
              { icon: '🍂', title: 'Entretien Saisonnier', text: 'Ramassage des feuilles, dégagement des allées, protection hivernale des végétaux, traitements préventifs.' },
              { icon: '🌱', title: 'Toitures & Murs Végétalisés', text: 'Installation et entretien de toitures végétales extensives et intensives, murs végétaux intérieurs et extérieurs.' },
              { icon: '♻️', title: 'Gestion des Déchets Verts', text: 'Collecte, broyage et valorisation des déchets verts. Compostage sur site ou enlèvement vers filières agréées.' },
              { icon: '🦋', title: 'Biodiversité & Nature en Ville', text: 'Création de zones de biodiversité : prairies fleuries, hôtels à insectes, ruches d\'entreprise, mares pédagogiques.' },
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
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>RSE &amp; Développement Durable</div>
            <h2 style={{ color: 'white' }}>Des espaces verts au service de votre RSE</h2>
            <p style={{ color: 'rgba(255,255,255,.65)' }}>Intégrez vos espaces verts dans votre stratégie RSE et valorisez votre engagement environnemental.</p>
          </div>
          <div className="cards-grid cards-grid-3">
            <div className="info-card"><div className="info-icon">🌿</div><h3>Zéro Phytosanitaire</h3><p>Nous n&apos;utilisons aucun pesticide ni herbicide chimique. Désherbage thermique, mécanique et technique alternative.</p></div>
            <div className="info-card"><div className="info-icon">🐝</div><h3>Programme Biodiversité</h3><p>Développement de corridors écologiques, zones refuges pour la faune auxiliaire, label EcoJardin disponible.</p></div>
            <div className="info-card"><div className="info-icon">📊</div><h3>Bilan Carbone Espaces Verts</h3><p>Calcul de l&apos;empreinte carbone de nos interventions, compensation par plantation d&apos;arbres, reporting RSE fourni.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Contrats</div>
            <h2>Des contrats annuels adaptés à vos surfaces</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            <div className="feature-card" style={{ borderTop: '4px solid var(--gold)' }}>
              <div className="feature-icon">🌱</div>
              <h3>Contrat Entretien Standard</h3>
              <p>Visites mensuelles ou bimensuelles incluant tonte, taille, désherbage, entretien courant. Rapport photographique à chaque passage.</p>
            </div>
            <div className="feature-card" style={{ borderTop: '4px solid var(--navy)' }}>
              <div className="feature-icon">🌲</div>
              <h3>Contrat Entretien Complet</h3>
              <p>Entretien standard + interventions ponctuelles illimitées + saisonniers + arrosage. Engagement de résultat paysager.</p>
            </div>
            <div className="feature-card" style={{ borderTop: '4px solid #27ae60' }}>
              <div className="feature-icon">🏆</div>
              <h3>Contrat Premium Multi-sites</h3>
              <p>Paysagiste référent dédié, interventions illimitées, programme biodiversité inclus, reporting RSE mensuel.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Des espaces verts à votre image, toute l&apos;année</h2>
            <p>Visite diagnostic gratuite de vos espaces extérieurs. Devis personnalisé sous 48h.</p>
            <Link href="/contact" className="btn btn-gold">Demander un diagnostic gratuit →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
