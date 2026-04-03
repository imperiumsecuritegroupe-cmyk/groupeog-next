import type { Metadata } from 'next'
import Link from 'next/link'
import Counter from '@/components/Counter'

export const metadata: Metadata = {
  title: 'GROUPE OG – Facility Management & Maintenance Multitechnique',
  description: 'GROUPE OG, partenaire stratégique en Facility Management pour grandes entreprises et institutionnels. ISO 41001, Smart Building, maintenance prédictive, ESG.',
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-pattern"></div>
        <div className="hero-bg-lines"></div>
        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-tag">Partenaire stratégique FM — Grands Comptes &amp; Institutionnels</div>
            <h1 className="hero-title">L&apos;excellence opérationnelle de vos <em>bâtiments</em>, notre engagement</h1>
            <p className="hero-desc">GROUPE OG délivre des solutions de Facility Management intégrées aux standards ISO 41001. Un partenaire unique pour la gestion technique, immobilière et des services généraux de votre patrimoine.</p>
            <div className="hero-btns">
              <Link href="/contact" className="btn btn-gold">Demander un audit stratégique →</Link>
              <a href="#services" className="btn btn-outline-white">Nos expertises</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <Counter count={350} suffix="+" className="stat-num" />
                <span className="stat-label">Sites sous gestion</span>
              </div>
              <div className="stat">
                <Counter count={15} suffix=" ans" className="stat-num" />
                <span className="stat-label">D&apos;expertise FM</span>
              </div>
              <div className="stat">
                <Counter count={98} suffix="%" className="stat-num" />
                <span className="stat-label">Taux de satisfaction SLA</span>
              </div>
              <div className="stat">
                <Counter count={40} suffix="%" className="stat-num" />
                <span className="stat-label">Réduction TCO moyen</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-icon">🏢</div>
              <h4>Facility Management Intégré</h4>
              <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '.85rem', margin: '.5rem 0 0' }}>Hard FM · Soft FM · Property Management</p>
            </div>
            <div className="hero-card">
              <div className="card-icon">📡</div>
              <h4>Smart Building</h4>
              <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '.85rem', margin: '.5rem 0 0' }}>GTB · GMAO · IoT · Digital Twin</p>
            </div>
            <div className="hero-card">
              <div className="card-icon">🌿</div>
              <h4>ESG &amp; RSE</h4>
              <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '.85rem', margin: '.5rem 0 0' }}>Bilan carbone · BREEAM · Zéro déchet</p>
            </div>
            <div className="hero-card">
              <div className="card-icon">📊</div>
              <h4>Reporting Exécutif</h4>
              <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '.85rem', margin: '.5rem 0 0' }}>KPIs · SLA · Dashboard temps réel</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPOSITION DE VALEUR */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="eyebrow">Notre proposition de valeur</div>
              <h2>Un partenaire FM stratégique, pas un simple prestataire</h2>
              <p>Le Facility Management représente en moyenne 15 à 20 % des charges d&apos;exploitation d&apos;une organisation. GROUPE OG vous aide à transformer ce centre de coûts en levier de performance, de durabilité et d&apos;attractivité pour vos collaborateurs.</p>
              <p>Conformément au référentiel ISO 41001, nous alignons nos prestations FM sur vos objectifs stratégiques : maîtrise du TCO, conformité réglementaire, objectifs ESG et expérience workplace de vos équipes.</p>
              <div className="check-list">
                <div className="check-item"><span>Contrat-cadre unique — interlocuteur FM dédié niveau directorial</span></div>
                <div className="check-item"><span>GMAO et reporting exécutif en temps réel — visibilité totale</span></div>
                <div className="check-item"><span>Maintenance prédictive par capteurs IoT — zéro panne non anticipée</span></div>
                <div className="check-item"><span>SLA contractuels garantis avec pénalités — engagement de résultat</span></div>
                <div className="check-item"><span>Plan de réduction du TCO sur 3 ans — ROI mesurable</span></div>
              </div>
              <Link href="/contact" className="btn btn-navy" style={{ marginTop: '2rem', display: 'inline-block' }}>Planifier un rendez-vous stratégique →</Link>
            </div>
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,var(--navy),var(--navy-mid))', color: 'var(--gold)', fontSize: '5rem' }}>🏢</div>
          </div>
        </div>
      </section>

      {/* STATS IMPACT */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>Impact mesurable</div>
            <h2 style={{ color: 'white' }}>Les résultats que nous livrons</h2>
            <p style={{ color: 'rgba(255,255,255,.65)' }}>Des indicateurs concrets issus de nos contrats grands comptes en cours.</p>
          </div>
          <div className="cards-grid cards-grid-4">
            <div className="stat-card">
              <Counter count={40} suffix="%" className="stat-num" />
              <span className="stat-label">Réduction moyenne des coûts d&apos;exploitation (TCO) sur 3 ans</span>
            </div>
            <div className="stat-card">
              <Counter count={99} suffix="%" className="stat-num" />
              <span className="stat-label">Disponibilité des équipements critiques garantie contractuellement</span>
            </div>
            <div className="stat-card">
              <Counter count={2} suffix="h" className="stat-num" />
              <span className="stat-label">Délai d&apos;intervention maximal sur incidents priorité 1 (P1)</span>
            </div>
            <div className="stat-card">
              <Counter count={30} suffix="%" className="stat-num" />
              <span className="stat-label">Diminution de l&apos;empreinte carbone des bâtiments gérés</span>
            </div>
          </div>
        </div>
      </section>

      {/* FM EXTERNALISÉ */}
      <section className="section section-light" id="services">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Soft FM &amp; Gestion de patrimoine</div>
            <h2>FM Externalisé — Pilotage global de votre actif</h2>
            <p>De la gestion d&apos;actifs immobiliers à la sécurité des personnes, externalisez l&apos;intégralité de votre chaîne de valeur FM avec un partenaire unique responsable.</p>
          </div>
          <div className="cards-grid cards-grid-4">
            <Link href="/immobilier" className="feature-card-dark" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <div className="feature-icon" style={{ color: 'var(--gold)' }}>🏙️</div>
              <h3>Gestion Immobilière</h3>
              <p>Property &amp; Asset Management, baux commerciaux, due diligence technique, PPPT, transaction et conseil en immobilier d&apos;entreprise.</p>
              <span style={{ color: 'var(--navy)', fontWeight: 700, fontSize: '.88rem', display: 'block', marginTop: '1.25rem' }}>Découvrir l&apos;offre →</span>
            </Link>
            <Link href="/services-generaux" className="feature-card-dark" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <div className="feature-icon" style={{ color: 'var(--gold)' }}>🗂️</div>
              <h3>Services Généraux</h3>
              <p>Accueil corporate, reprographie, restauration d&apos;entreprise, conciergerie, helpdesk FM, achats indirects et workplace management.</p>
              <span style={{ color: 'var(--navy)', fontWeight: 700, fontSize: '.88rem', display: 'block', marginTop: '1.25rem' }}>Découvrir l&apos;offre →</span>
            </Link>
            <Link href="/securite-surete" className="feature-card-dark" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <div className="feature-icon" style={{ color: 'var(--gold)' }}>🛡️</div>
              <h3>Sécurité &amp; Sûreté</h3>
              <p>Gardiennage, contrôle d&apos;accès biométrique, vidéoprotection IP, SSIAP — délivré par <strong style={{ color: 'var(--gold)' }}>Imperium Security Services</strong>, filiale du groupe.</p>
              <span style={{ color: 'var(--navy)', fontWeight: 700, fontSize: '.88rem', display: 'block', marginTop: '1.25rem' }}>Découvrir l&apos;offre →</span>
            </Link>
            <Link href="/espaces-verts" className="feature-card-dark" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <div className="feature-icon" style={{ color: 'var(--gold)' }}>🌿</div>
              <h3>Espaces Verts &amp; RSE</h3>
              <p>Entretien paysager, toitures végétalisées, programme biodiversité, label EcoJardin, bilan carbone et reporting RSE mensuel.</p>
              <span style={{ color: 'var(--navy)', fontWeight: 700, fontSize: '.88rem', display: 'block', marginTop: '1.25rem' }}>Découvrir l&apos;offre →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MAINTENANCE TECHNIQUE */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Hard FM — Maintenance multitechnique</div>
            <h2>Expertise technique intégrée, 24h/24</h2>
            <p>Nos ingénieurs et techniciens qualifiés assurent la disponibilité et la conformité de toutes les installations techniques de votre patrimoine.</p>
          </div>
          <div className="cards-grid cards-grid-3">
            <div className="service-card">
              <div className="service-card-img" style={{ background: 'linear-gradient(135deg,#0d1e3a,#1a3a6e)' }}>🏛️</div>
              <div className="service-card-body">
                <h3>Gros Œuvres &amp; Maçonnerie</h3>
                <p>Travaux structurels, réhabilitation lourde, extensions et fondations. Maintien en conformité du bâti et travaux neufs sur sites occupés.</p>
                <Link href="/gros-oeuvres" className="service-card-link">En savoir plus →</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-img" style={{ background: 'linear-gradient(135deg,#0d2a1a,#1a4a2e)' }}>🔨</div>
              <div className="service-card-body">
                <h3>Seconds Œuvres &amp; Finitions</h3>
                <p>Réaménagement d&apos;espaces, cloisons modulaires, revêtements, menuiseries et peinture. Requalification et rénovation des environnements de travail.</p>
                <Link href="/seconds-oeuvres" className="service-card-link">En savoir plus →</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-img" style={{ background: 'linear-gradient(135deg,#0d2a3a,#1a4a6e)' }}>🔧</div>
              <div className="service-card-body">
                <h3>Plomberie &amp; CVC</h3>
                <p>Maintenance préventive et curative des réseaux sanitaires, systèmes de chauffage, ventilation et climatisation. Conformité R410A et F-Gaz.</p>
                <Link href="/plomberie-chauffage" className="service-card-link">En savoir plus →</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-img" style={{ background: 'linear-gradient(135deg,#2a1e0a,#7a5a1a)' }}>⚡</div>
              <div className="service-card-body">
                <h3>Électricité &amp; GTB</h3>
                <p>Maintenance HTA/BT, gestion technique du bâtiment (GTB/BMS), courants faibles, mise aux normes NF C 15-100 et cybersécurité des automates.</p>
                <Link href="/electricite" className="service-card-link">En savoir plus →</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-img" style={{ background: 'linear-gradient(135deg,#2a1a0a,#8a4a1a)' }}>☀️</div>
              <div className="service-card-body">
                <h3>Énergie Solaire &amp; Performance</h3>
                <p>Audit énergétique, installation photovoltaïque, monitoring de production, Power Purchase Agreement (PPA) et décarbonation de vos actifs.</p>
                <Link href="/photovoltaique" className="service-card-link">En savoir plus →</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-img" style={{ background: 'linear-gradient(135deg,#0d1a3a,#1a2a6a)' }}>🧹</div>
              <div className="service-card-body">
                <h3>Propreté &amp; Hygiène</h3>
                <p>Entretien quotidien, propreté renforcée, nettoyage technique, vitrerie en hauteur. Protocoles RABC et certifications qualité.</p>
                <Link href="/nettoyage" className="service-card-link">En savoir plus →</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-img" style={{ background: 'linear-gradient(135deg,#1a0a3a,#3a1a6a)' }}>🛗</div>
              <div className="service-card-body">
                <h3>Ascenseurs &amp; Équipements Verticaux</h3>
                <p>Maintenance préventive et curative des ascenseurs, escaliers mécaniques, portes automatiques, quais de chargement et systèmes de levage.</p>
                <Link href="/contact" className="service-card-link">Nous contacter →</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-img" style={{ background: 'linear-gradient(135deg,#0d1a2a,#1a3a4a)' }}>📡</div>
              <div className="service-card-body">
                <h3>GMAO &amp; Smart Building</h3>
                <p>Pilotage GMAO, ticketing multicanal, capteurs IoT, Digital Twin, tableau de bord de performance FM et reporting exécutif mensuel.</p>
                <Link href="/contact" className="service-card-link">Nous contacter →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILIERS FM */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>Notre différenciation</div>
            <h2 style={{ color: 'white' }}>Les 4 piliers de notre approche FM</h2>
            <p style={{ color: 'rgba(255,255,255,.65)' }}>Une méthodologie propriétaire alignée sur ISO 41001 et les meilleures pratiques IFMA.</p>
          </div>
          <div className="cards-grid cards-grid-4">
            {[
              { num: '01', title: 'Audit Stratégique', text: 'Diagnostic complet de votre patrimoine : état technique, conformités réglementaires, performance énergétique et maturité FM. Livrable : Asset Register complet.' },
              { num: '02', title: 'Plan FM Sur Mesure', text: 'Élaboration d\'un Master Plan FM sur 3 ans : plan de maintenance, budget prévisionnel TCO, plan de décarbonation et feuille de route Smart Building.' },
              { num: '03', title: 'Déploiement & Pilotage', text: 'Mise en place des équipes dédiées, interfaçage GMAO, installation des capteurs IoT et démarrage contractuel avec SLA validés par vos équipes.' },
              { num: '04', title: 'Amélioration Continue', text: 'Comités de pilotage trimestriels, revues de contrat annuelles, benchmark sectoriel, actualisation des SLA et plan d\'optimisation du TCO.' },
            ].map((p) => (
              <div key={p.num} className="pillar" style={{ background: 'rgba(255,255,255,.05)', borderColor: 'rgba(196,165,90,.2)' }}>
                <div style={{ minWidth: 48, height: 48, background: 'linear-gradient(135deg,var(--gold),var(--gold-dark))', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 900, color: 'var(--navy)', flexShrink: 0 }}>{p.num}</div>
                <div>
                  <h3 style={{ color: 'var(--white)' }}>{p.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,.6)' }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRATS */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Offres contractuelles</div>
            <h2>Des contrats FM calibrés à votre portefeuille d&apos;actifs</h2>
            <p>Du site unique au portefeuille multi-sites régional, GROUPE OG propose des structures contractuelles transparentes avec SLA garantis.</p>
          </div>
          <div className="cards-grid cards-grid-3">
            <div className="feature-card" style={{ borderTop: '3px solid var(--stone)' }}>
              <div className="feature-icon">🔑</div>
              <h3>Maintenance Préventive</h3>
              <p>Visites planifiées, rondes techniques, contrôles réglementaires, carnet de santé numérique. Budget maîtrisé, zéro surprise opérationnelle.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0', fontSize: '.88rem', color: 'var(--muted)' }}>
                <li style={{ padding: '.3rem 0', borderBottom: '1px solid var(--border)' }}>✓ Planning annuel visites</li>
                <li style={{ padding: '.3rem 0', borderBottom: '1px solid var(--border)' }}>✓ Contrôles réglementaires inclus</li>
                <li style={{ padding: '.3rem 0' }}>✓ Rapport technique mensuel</li>
              </ul>
            </div>
            <div className="feature-card" style={{ borderTop: '3px solid var(--gold)' }}>
              <div className="feature-icon">⚡</div>
              <h3>Toutes Maintenances</h3>
              <p>Préventive + corrective illimitée + astreinte 24h/7j. Forfait mensuel fixe avec SLA contractuels et pénalités de retard. Idéal multi-sites.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0', fontSize: '.88rem', color: 'var(--muted)' }}>
                <li style={{ padding: '.3rem 0', borderBottom: '1px solid var(--border)' }}>✓ Correctif illimité inclus</li>
                <li style={{ padding: '.3rem 0', borderBottom: '1px solid var(--border)' }}>✓ Astreinte 24h/24 — 7j/7</li>
                <li style={{ padding: '.3rem 0' }}>✓ SLA P1 : intervention &lt; 2h</li>
              </ul>
            </div>
            <div className="feature-card" style={{ borderTop: '3px solid var(--navy)' }}>
              <div className="feature-icon">🏢</div>
              <h3>FM Intégral Grands Comptes</h3>
              <p>Externalisation totale Hard FM + Soft FM. Directeur de site dédié, GMAO propriétaire, reporting COMEX, plan ESG et objectifs de décarbonation.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0', fontSize: '.88rem', color: 'var(--muted)' }}>
                <li style={{ padding: '.3rem 0', borderBottom: '1px solid var(--border)' }}>✓ Directeur FM client dédié</li>
                <li style={{ padding: '.3rem 0', borderBottom: '1px solid var(--border)' }}>✓ Dashboard COMEX temps réel</li>
                <li style={{ padding: '.3rem 0' }}>✓ Objectifs ESG contractualisés</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Secteurs d&apos;activité</div>
            <h2>Expertise sectorielle reconnue</h2>
            <p>Chaque secteur impose ses contraintes réglementaires, ses horaires et ses exigences de continuité d&apos;activité. Nous les maîtrisons.</p>
          </div>
          <div className="cards-grid cards-grid-4">
            {[
              { icon: '🏢', title: 'Tertiaire & Sièges Sociaux', text: 'Immeubles de bureaux grade A, sièges sociaux, campus d\'entreprise. Workplace experience et conformité NF EN 15221.' },
              { icon: '🏭', title: 'Industrie & Logistique', text: 'Sites classés ICPE, entrepôts logistiques, plateformes cross-dock. Maintenance robuste sans impact sur la production.' },
              { icon: '🏥', title: 'Santé & Médico-social', text: 'Établissements de santé, cliniques, EHPAD. Protocoles infection control, continuité de service critique 24h/24.' },
              { icon: '🎓', title: 'Éducation & Recherche', text: 'Universités, grandes écoles, centres R&D. Gestion des contraintes calendaires et des espaces scientifiques spécialisés.' },
              { icon: '🛍️', title: 'Commerce & Retail', text: 'Centres commerciaux, enseignes, flagship stores. Maintenance discrète hors heures d\'ouverture, réactivité maximale.' },
              { icon: '🏨', title: 'Hospitality & Tourisme', text: 'Hôtels, résidences de services, complexes de loisirs. Exigences esthétiques et de continuité propres à l\'accueil du public.' },
              { icon: '🏛️', title: 'Secteur Public & Collectivités', text: 'Mairies, collectivités, établissements publics. Maîtrise des marchés publics, traçabilité et reporting de service public.' },
              { icon: '📦', title: 'Foncières & Investisseurs', text: 'SCPI, foncières cotées, family offices. Asset management technique, valorisation du patrimoine et due diligence pré-acquisition.' },
            ].map((s) => (
              <div className="feature-card" key={s.title}>
                <div className="feature-icon">{s.icon}</div>
                <h3>{s.title}</h3>
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
            <div className="eyebrow">Témoignages clients</div>
            <h2>Ils nous confient leur patrimoine</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">&ldquo;GROUPE OG pilote l&apos;intégralité de notre parc de 18 bâtiments sur la région PACA. La qualité du reporting exécutif mensuel et la transparence sur les KPIs sont au niveau des grandes ESN FM internationales.&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar">PL</div>
                <div className="author-info"><h4>Pierre Lambert</h4><span>Directeur Immobilier &amp; Facilities — Groupe Industriel coté</span></div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">&ldquo;L&apos;externalisation FM à GROUPE OG nous a permis de réduire de 35% nos charges d&apos;exploitation en 24 mois. Leur approche TCO sur 3 ans est particulièrement convaincante pour notre COMEX.&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar">SC</div>
                <div className="author-info"><h4>Sophie Chabert</h4><span>DAF &amp; Directrice du Patrimoine — Clinique privée multi-sites</span></div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">&ldquo;Le déploiement du plan de décarbonation et des panneaux photovoltaïques coordonné par GROUPE OG a réduit notre empreinte carbone de 42%. Un partenaire incontournable pour notre stratégie ESG.&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar">XM</div>
                <div className="author-info"><h4>Xavier Moreau</h4><span>Directeur RSE — Foncière régionale</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section section-dark">
        <div className="container">
          <div className="cta-banner" style={{ background: 'transparent', border: '1px solid rgba(196,165,90,.3)', padding: '4rem' }}>
            <div className="eyebrow" style={{ color: 'var(--gold)', justifyContent: 'center' }}>Passez à l&apos;étape suivante</div>
            <h2 style={{ color: 'white', fontSize: '2.4rem' }}>Transformez la gestion de votre patrimoine en avantage compétitif</h2>
            <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: 600, margin: '0 auto 2.5rem' }}>Nos experts FM vous proposent un audit stratégique gratuit de votre patrimoine. Analyse technique, benchmark sectoriel et proposition de valeur personnalisée sous 48h.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-gold">Demander l&apos;audit stratégique gratuit →</Link>
              <a href="tel:+33769252296" className="btn btn-outline-white">📞 07 69 25 22 96</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
