import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Counter from '@/components/Counter'

export const metadata: Metadata = {
  title: 'GROUPE OG — BTP · Propreté · Immobilier | Rayonnement National',
  description: 'Groupe OG, expert national en BTP, Propreté et Immobilier. Construction, rénovation, nettoyage industriel, gestion locative. Siège social à Nice (06300), intervention sur toute la France.',
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-tag">Siège social Nice · Intervention nationale</div>
            <h1 className="hero-title">
              Bâtissons.<br />
              <em>Entretenons.</em><br />
              <span className="line2">Valorisons.</span>
            </h1>
            <p className="hero-desc">GROUPE OG est votre partenaire de confiance en BTP, Propreté et Immobilier. De la construction à la gestion de patrimoine, nous intervenons sur toute la France depuis notre siège à Nice.</p>
            <div className="hero-btns">
              <Link href="/contact" className="btn btn-orange">Demander un devis gratuit →</Link>
              <a href="#poles" className="btn btn-outline-white">Nos expertises</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <Counter count={20} suffix=" ans" className="stat-num" />
                <span className="stat-label">D&apos;expertise</span>
              </div>
              <div className="stat">
                <Counter count={500} suffix="+" className="stat-num" />
                <span className="stat-label">Projets réalisés</span>
              </div>
              <div className="stat">
                <Counter count={50} suffix="+" className="stat-num" />
                <span className="stat-label">Villes couvertes</span>
              </div>
              <div className="stat">
                <Counter count={98} suffix="%" className="stat-num" />
                <span className="stat-label">Satisfaction client</span>
              </div>
            </div>
          </div>

          <div className="hero-poles">
            <Link href="/gros-oeuvres" className="hero-pole-card btp">
              <div className="pole-icon-sm">🏗️</div>
              <div>
                <h4>BTP</h4>
                <p>Construction · Rénovation · Électricité · CVC</p>
              </div>
              <span className="pole-arrow">→</span>
            </Link>
            <Link href="/nettoyage" className="hero-pole-card prop">
              <div className="pole-icon-sm">✨</div>
              <div>
                <h4>Propreté</h4>
                <p>Nettoyage industriel · Entretien · Espaces verts</p>
              </div>
              <span className="pole-arrow">→</span>
            </Link>
            <Link href="/immobilier" className="hero-pole-card immo">
              <div className="pole-icon-sm">🏢</div>
              <div>
                <h4>Immobilier</h4>
                <p>Gestion locative · Transaction · Conseil</p>
              </div>
              <span className="pole-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stats-bar-grid">
          <div className="stat-item">
            <Counter count={20} suffix=" ans" className="stat-num stat-accent" />
            <span className="stat-label">d&apos;expertise sur le terrain</span>
          </div>
          <div className="stat-item">
            <Counter count={500} suffix="+" className="stat-num stat-accent" />
            <span className="stat-label">projets livrés en France</span>
          </div>
          <div className="stat-item">
            <Counter count={50} suffix="+" className="stat-num stat-accent" />
            <span className="stat-label">villes d&apos;intervention</span>
          </div>
          <div className="stat-item">
            <Counter count={98} suffix="%" className="stat-num stat-accent" />
            <span className="stat-label">taux de satisfaction client</span>
          </div>
        </div>
      </div>

      {/* 3 PÔLES */}
      <section className="section" id="poles">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Nos 3 pôles d&apos;expertise</div>
            <h2>Un groupe, trois expertises complémentaires</h2>
            <p>Groupe OG intervient sur l&apos;ensemble du cycle de vie de vos bâtiments et actifs, de la construction à la valorisation en passant par l&apos;entretien quotidien.</p>
          </div>
          <div className="poles-grid">

            <div className="pole-card btp-card">
              <div className="pole-card-header">
                <div className="pole-card-icon">🏗️</div>
                <h3>BTP</h3>
                <p>Construction, rénovation et maintenance technique de vos bâtiments</p>
                <span className="pole-badge">Bâtiment &amp; Travaux Publics</span>
              </div>
              <div className="pole-card-body">
                <ul className="pole-services">
                  <li>Gros œuvres &amp; maçonnerie</li>
                  <li>Seconds œuvres &amp; finitions</li>
                  <li>Plomberie &amp; CVC</li>
                  <li>Électricité &amp; domotique</li>
                  <li>Énergie solaire &amp; performance</li>
                </ul>
                <Link href="/gros-oeuvres" className="pole-cta">
                  <span>Découvrir le pôle BTP</span><span>→</span>
                </Link>
              </div>
            </div>

            <div className="pole-card prop-card">
              <div className="pole-card-header">
                <div className="pole-card-icon">✨</div>
                <h3>Propreté</h3>
                <p>Nettoyage professionnel, hygiène et entretien de vos espaces</p>
                <span className="pole-badge">Nettoyage &amp; Environnement</span>
              </div>
              <div className="pole-card-body">
                <ul className="pole-services">
                  <li>Nettoyage industriel &amp; tertiaire</li>
                  <li>Entretien quotidien &amp; périodique</li>
                  <li>Désinfection &amp; protocoles RABC</li>
                  <li>Vitrerie &amp; nettoyage en hauteur</li>
                  <li>Espaces verts &amp; aménagement paysager</li>
                </ul>
                <Link href="/nettoyage" className="pole-cta">
                  <span>Découvrir le pôle Propreté</span><span>→</span>
                </Link>
              </div>
            </div>

            <div className="pole-card immo-card">
              <div className="pole-card-header">
                <div className="pole-card-icon">🏢</div>
                <h3>Immobilier</h3>
                <p>Gestion, transaction et valorisation de votre patrimoine immobilier</p>
                <span className="pole-badge">Gestion &amp; Patrimoine</span>
              </div>
              <div className="pole-card-body">
                <ul className="pole-services">
                  <li>Gestion locative &amp; property management</li>
                  <li>Transaction &amp; conseil immobilier</li>
                  <li>Services généraux &amp; facility</li>
                  <li>Sécurité &amp; sûreté des biens</li>
                  <li>Audit patrimonial &amp; optimisation</li>
                </ul>
                <Link href="/immobilier" className="pole-cta">
                  <span>Découvrir le pôle Immobilier</span><span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRÉSENCE NATIONALE */}
      <section className="national-section">
        <div className="national-grid">
          <div>
            <div className="eyebrow">Rayonnement national</div>
            <h2>Ancrage méditerranéen, portée nationale</h2>
            <p>Depuis notre siège social à Nice, les équipes Groupe OG interviennent sur l&apos;ensemble du territoire français. Réactivité et proximité d&apos;un acteur local, capacité d&apos;un groupe national.</p>
            <div className="check-list">
              <div className="check-item"><span>Siège social : 50 bd Stalingrad, 06300 Nice</span></div>
              <div className="check-item"><span>Intervention sur toute la France métropolitaine</span></div>
              <div className="check-item"><span>Délai d&apos;intervention : 24 à 48h selon la priorité</span></div>
              <div className="check-item"><span>Astreinte disponible 24h/24, 7j/7</span></div>
            </div>
            <Link href="/contact" className="btn btn-navy" style={{ marginTop: '2rem', display: 'inline-flex' }}>Nous contacter →</Link>
          </div>
          <div className="national-map">
            <div className="map-item"><div className="map-icon">📍</div><div><h4>Siège social</h4><p>50 boulevard Stalingrad, 06300 Nice</p></div></div>
            <div className="map-item"><div className="map-icon">🗺️</div><div><h4>Zone d&apos;intervention</h4><p>France métropolitaine entière</p></div></div>
            <div className="map-item"><div className="map-icon">⚡</div><div><h4>Réactivité</h4><p>24–48h · Urgences 24h/24</p></div></div>
            <div className="map-item"><div className="map-icon">📞</div><div><h4>Téléphone</h4><p>07 69 25 22 96</p></div></div>
          </div>
        </div>
      </section>

      {/* PROPOSITION DE VALEUR */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="eyebrow">Pourquoi Groupe OG</div>
              <h2>Un partenaire unique pour tous vos besoins</h2>
              <p>En choisissant Groupe OG, vous bénéficiez d&apos;un interlocuteur unique qui maîtrise l&apos;ensemble du cycle de vie de vos bâtiments. Plus de coordination entre prestataires : une seule équipe, une seule responsabilité.</p>
              <div className="check-list">
                <div className="check-item"><span>Expertise pluridisciplinaire BTP + Propreté + Immobilier</span></div>
                <div className="check-item"><span>Équipes qualifiées, certifiées et expérimentées</span></div>
                <div className="check-item"><span>Devis gratuit et transparent sous 48h</span></div>
                <div className="check-item"><span>Suivi de chantier et reporting régulier</span></div>
                <div className="check-item"><span>Garantie décennale et assurances professionnelles</span></div>
              </div>
              <Link href="/contact" className="btn btn-orange" style={{ marginTop: '2rem', display: 'inline-flex' }}>Obtenir un devis gratuit →</Link>
            </div>
            <div className="content-visual">
              <Image src="/logo.png" alt="Groupe OG" width={320} height={200} style={{ objectFit: 'contain', position: 'relative', zIndex: 1, mixBlendMode: 'screen' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Secteurs d&apos;activité</div>
            <h2>Nous intervenons dans tous les secteurs</h2>
            <p>Du résidentiel aux grandes entreprises, du secteur public à l&apos;industrie, Groupe OG adapte ses solutions à chaque contexte.</p>
          </div>
          <div className="cards-grid cards-grid-4">
            {[
              { icon: '🏢', title: 'Tertiaire & Bureaux', text: 'Immeubles de bureaux, sièges sociaux, campus d\'entreprise' },
              { icon: '🏭', title: 'Industrie & Logistique', text: 'Entrepôts, sites de production, plateformes logistiques' },
              { icon: '🏥', title: 'Santé & Médico-social', text: 'Cliniques, EHPAD, centres médicaux, établissements de soins' },
              { icon: '🏫', title: 'Éducation & Culture', text: 'Écoles, universités, musées, bibliothèques' },
              { icon: '🛍️', title: 'Commerce & Retail', text: 'Centres commerciaux, boutiques, galeries, restaurants' },
              { icon: '🏨', title: 'Hôtellerie & Tourisme', text: 'Hôtels, résidences, complexes de loisirs' },
              { icon: '🏛️', title: 'Secteur Public', text: 'Mairies, collectivités, établissements publics' },
              { icon: '🏠', title: 'Résidentiel', text: 'Particuliers, copropriétés, résidences, promoteurs' },
            ].map(s => (
              <div className="sector-card" key={s.title}>
                <span className="sector-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'rgba(232,98,10,.9)' }}>Notre méthode</div>
            <h2 style={{ color: 'var(--white)' }}>Un accompagnement simple et efficace</h2>
            <p style={{ color: 'rgba(255,255,255,.55)' }}>De la première prise de contact jusqu&apos;à la livraison, nous vous accompagnons à chaque étape.</p>
          </div>
          <div className="steps-grid">
            {[
              { num: '01', title: 'Prise de contact', text: 'Échangez avec nos experts pour définir vos besoins et votre projet.' },
              { num: '02', title: 'Devis gratuit', text: 'Nous établissons un devis détaillé et transparent sous 48h, sans engagement.' },
              { num: '03', title: 'Réalisation', text: 'Nos équipes qualifiées interviennent avec rigueur et dans les délais convenus.' },
              { num: '04', title: 'Suivi & garantie', text: 'Réception des travaux, garanties contractuelles et support après-mission.' },
            ].map(s => (
              <div className="step" key={s.num}>
                <div className="step-num">{s.num}</div>
                <h4 style={{ color: 'var(--white)' }}>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Ils nous font confiance</div>
            <h2>Témoignages clients</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">&ldquo;Groupe OG a géré de A à Z la rénovation complète de nos locaux. Travaux dans les délais, budget respecté, équipes sérieuses. Je recommande sans hésiter.&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar">ML</div>
                <div className="author-info"><h4>Marc Lecomte</h4><span>Directeur Général — PME industrielle, Lyon</span></div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">&ldquo;Nous faisons appel à Groupe OG pour l&apos;entretien de nos 12 agences. Réactivité exemplaire, propreté irréprochable et tarifs compétitifs.&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar">SB</div>
                <div className="author-info"><h4>Sophie Bernard</h4><span>Responsable Facilities — Réseau bancaire national</span></div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">&ldquo;La gestion locative par Groupe OG nous a permis d&apos;optimiser nos revenus et de réduire les vacances locatives. Un vrai professionnel de l&apos;immobilier.&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar">PD</div>
                <div className="author-info"><h4>Pierre Dubois</h4><span>Investisseur immobilier — Paris &amp; Côte d&apos;Azur</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section section-dark">
        <div className="container">
          <div className="cta-banner">
            <div className="eyebrow" style={{ color: 'rgba(232,98,10,.9)', justifyContent: 'center' }}>Passez à l&apos;action</div>
            <h2>Votre projet mérite les meilleurs experts</h2>
            <p>Contactez-nous dès aujourd&apos;hui pour un devis gratuit. Nos équipes vous répondent sous 24h.</p>
            <div className="cta-banner-btns">
              <Link href="/contact" className="btn btn-orange">Demander un devis gratuit →</Link>
              <a href="tel:+33769252296" className="btn btn-outline-white">📞 07 69 25 22 96</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
