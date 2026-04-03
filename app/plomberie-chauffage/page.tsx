import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Plomberie & Chauffage – GROUPE OG',
  description: 'Spécialistes en plomberie et chauffage : installation, dépannage, maintenance chaudières, pompes à chaleur, radiateurs, sanitaires.',
}

export default function PlomberieChauffage() {
  return (
    <>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#1a4a6e,#1a6ea0)' }}>
        <div className="page-hero-grid"></div>
        <div className="page-hero-content">
          <div className="breadcrumb"><Link href="/">Accueil</Link><span>/</span>Plomberie &amp; Chauffage</div>
          <div className="page-hero-icon">🔧</div>
          <h1>Plomberie &amp; Chauffage</h1>
          <p>Installation, dépannage et maintenance de tous vos réseaux sanitaires et systèmes de chauffage. Confort thermique garanti.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <Link href="/" className="back-link">← Retour aux services</Link>
              <div className="eyebrow">Plomberie &amp; Chauffage</div>
              <h2>Expertise sanitaire &amp; thermique</h2>
              <p>GROUPE OG dispose d&apos;une équipe de plombiers-chauffagistes expérimentés pour répondre à tous vos besoins : installation complète pour les constructions neuves, rénovation des installations existantes, dépannage rapide et contrats de maintenance.</p>
              <p>Nous travaillons avec les meilleures marques du marché et vous conseillons sur les solutions les plus adaptées à votre budget et à vos besoins.</p>
              <div className="check-list">
                <div className="check-item"><span>Intervention en urgence 24h/24 – 7j/7</span></div>
                <div className="check-item"><span>Matériel certifié et garanti</span></div>
                <div className="check-item"><span>Devis gratuit et transparent</span></div>
                <div className="check-item"><span>Techniciens certifiés RGE</span></div>
                <div className="check-item"><span>Contrats de maintenance annuelle</span></div>
              </div>
            </div>
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,#1a4a6e,#1a6ea0)' }}>🚰</div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Plomberie</div>
            <h2>Tous travaux de plomberie</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            {[
              { icon: '🚰', title: 'Installations Sanitaires', text: 'Installation complète de salles de bain, WC, cuisines. Baignoires, douches, lavabos, robinetterie haut de gamme.' },
              { icon: '💧', title: 'Réseaux d\'Eau', text: 'Création et rénovation des réseaux d\'eau froide et chaude sanitaire. Cuivre, PER, multicouche.' },
              { icon: '🔩', title: 'Évacuations & Vidanges', text: 'Création et remplacement des réseaux d\'évacuation, débouchage, détartrage, hydrocurage.' },
              { icon: '🛁', title: 'Salle de Bain Complète', text: 'Conception et réalisation de salles de bain sur mesure : carrelage, faïence, équipements sanitaires, douche à l\'italienne.' },
              { icon: '🚨', title: 'Dépannage Urgence', text: 'Intervention rapide pour fuites, dégâts des eaux, canalisation bouchée, robinetterie défectueuse.' },
              { icon: '🌊', title: 'Récupération Eau de Pluie', text: 'Installation de cuves de récupération d\'eau de pluie pour arrosage et usage non alimentaire.' },
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
          <div className="two-col">
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,#6e1a1a,#a03030)' }}>🔥</div>
            <div>
              <div className="eyebrow">Chauffage</div>
              <h2>Solutions de chauffage performantes</h2>
              <p>Du chauffage central traditionnel aux systèmes les plus innovants, GROUPE OG vous propose et installe la solution de chauffage la mieux adaptée à votre logement et à votre budget.</p>
              <div className="check-list">
                <div className="check-item"><span>Chaudières gaz condensation haute efficacité</span></div>
                <div className="check-item"><span>Pompes à chaleur air/eau et eau/eau</span></div>
                <div className="check-item"><span>Plancher chauffant hydraulique et électrique</span></div>
                <div className="check-item"><span>Radiateurs et convecteurs</span></div>
                <div className="check-item"><span>Poêles et inserts à bois et granulés</span></div>
                <div className="check-item"><span>Thermostats connectés et domotique</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>Solutions</div>
            <h2 style={{ color: 'white' }}>Choisissez votre système de chauffage</h2>
            <p style={{ color: 'rgba(255,255,255,.65)' }}>Chaque solution a ses avantages. Nos conseillers vous guident vers le meilleur choix.</p>
          </div>
          <div className="cards-grid cards-grid-3">
            {[
              { icon: '🔥', title: 'Chaudière Gaz', text: 'Solution fiable et économique. Les modèles à condensation offrent un rendement supérieur à 100% et des économies importantes.' },
              { icon: '♨️', title: 'Pompe à Chaleur', text: 'Énergie renouvelable, jusqu\'à 75% d\'économies sur la facture de chauffage. Éligible à MaPrimeRénov\'.' },
              { icon: '🌡️', title: 'Plancher Chauffant', text: 'Confort optimal, chaleur diffuse et homogène. Compatible avec toutes sources d\'énergie et compatible basse température.' },
              { icon: '🌲', title: 'Poêle à Granulés', text: 'Énergie verte et renouvelable, flamme esthétique. Pilotage à distance via application smartphone.' },
              { icon: '☀️', title: 'Solaire Thermique', text: 'Panneaux solaires thermiques pour eau chaude sanitaire et appoint chauffage. Économique et écologique.' },
              { icon: '📱', title: 'Thermostat Connecté', text: 'Optimisez votre consommation avec un thermostat intelligent programmable et contrôlable à distance.' },
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
            <div className="eyebrow">Maintenance</div>
            <h2>Contrats d&apos;entretien</h2>
            <p>L&apos;entretien régulier prolonge la durée de vie de vos équipements et garantit leur performance.</p>
          </div>
          <div className="cards-grid cards-grid-3">
            <div className="feature-card" style={{ borderTop: '4px solid var(--gold)' }}>
              <div className="feature-icon">🔧</div>
              <h3>Entretien Annuel</h3>
              <p>Révision complète de votre chaudière ou PAC, nettoyage, contrôles de sécurité et réglages. Obligatoire pour les chaudières à gaz.</p>
              <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--off-white)', borderRadius: 8 }}>
                <p style={{ fontSize: '.88rem', color: 'var(--muted)', margin: 0 }}>À partir de <strong style={{ color: 'var(--gold-dark)' }}>89 €/an</strong></p>
              </div>
            </div>
            <div className="feature-card" style={{ borderTop: '4px solid var(--navy)' }}>
              <div className="feature-icon">🛡️</div>
              <h3>Contrat Sérénité</h3>
              <p>Entretien annuel + dépannage illimité + pièces détachées incluses. Tranquillité d&apos;esprit toute l&apos;année.</p>
              <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--off-white)', borderRadius: 8 }}>
                <p style={{ fontSize: '.88rem', color: 'var(--muted)', margin: 0 }}>À partir de <strong style={{ color: 'var(--gold-dark)' }}>19 €/mois</strong></p>
              </div>
            </div>
            <div className="feature-card" style={{ borderTop: '4px solid #27ae60' }}>
              <div className="feature-icon">⚡</div>
              <h3>Dépannage Express</h3>
              <p>Intervention en urgence dans les 4h. Techniciens disponibles 24h/24 – 7j/7, y compris jours fériés.</p>
              <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--off-white)', borderRadius: 8 }}>
                <p style={{ fontSize: '.88rem', color: 'var(--muted)', margin: 0 }}>Disponibilité <strong style={{ color: 'var(--gold-dark)' }}>24h/24 – 7j/7</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Besoin d&apos;un plombier ou d&apos;un chauffagiste ?</h2>
            <p>Devis gratuit sous 24h. Interventions rapides pour particuliers et professionnels.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-gold">Demander un devis →</Link>
              <a href="tel:+33769252296" className="btn btn-outline-white">📞 Urgence 24h/24</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
