import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sécurité & Sûreté des Bâtiments – GROUPE OG × Imperium Security Services',
  description: 'Sécurité et sûreté des bâtiments assurées par Imperium Security Services, filiale du groupe. Gardiennage, SSIAP, vidéosurveillance, contrôle d\'accès, télésurveillance 24h/24.',
}

export default function SecuriteSurete() {
  return (
    <>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#2a1a4a,#4a2a7a)' }}>
        <div className="page-hero-grid"></div>
        <div className="page-hero-content">
          <div className="breadcrumb"><Link href="/">Accueil</Link><span>/</span>FM Externalisé<span>/</span>Sécurité &amp; Sûreté</div>
          <div className="page-hero-icon">🛡️</div>
          <h1>Sécurité &amp; Sûreté des Bâtiments</h1>
          <p>Pour vos prestations de sécurité, GROUPE OG fait appel à <strong>Imperium Security Services</strong>, notre partenaire et filiale du groupe, spécialiste de la sûreté humaine et électronique.</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.75rem', background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', borderRadius: 50, padding: '.6rem 1.4rem', marginTop: '1.25rem', fontSize: '.95rem', fontWeight: 600 }}>
            <span style={{ fontSize: '1.2rem' }}>🏆</span> En partenariat avec <span style={{ color: 'var(--gold)', fontWeight: 800 }}>IMPERIUM SECURITY SERVICES</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <Link href="/" className="back-link">← Retour aux services</Link>
              <div className="eyebrow">Sécurité via Imperium Security Services</div>
              <h2>La sécurité de vos biens et de vos collaborateurs</h2>
              <p>Dans le cadre de notre offre FM globale, GROUPE OG confie l&apos;intégralité des prestations de sécurité et de sûreté à <strong>Imperium Security Services</strong>, notre partenaire et filiale du groupe, spécialiste reconnu de la protection des biens et des personnes.</p>
              <p>Cette synergie vous garantit une sécurité de haut niveau pleinement intégrée à votre contrat FM : un seul interlocuteur, une coordination fluide entre maintenance technique et sécurité, un reporting unifié.</p>
              <div className="check-list">
                <div className="check-item"><span>Agents Imperium certifiés CNAPS</span></div>
                <div className="check-item"><span>Agents SSIAP 1, 2 et 3 disponibles</span></div>
                <div className="check-item"><span>Télésurveillance 24h/24 – 365j/an</span></div>
                <div className="check-item"><span>Intervention sous 20 minutes</span></div>
                <div className="check-item"><span>Systèmes certifiés NF et A2P</span></div>
                <div className="check-item"><span>Coordination directe avec les équipes GROUPE OG</span></div>
              </div>
            </div>
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,#2a1a4a,#4a2a7a)' }}>🛡️</div>
          </div>
        </div>
      </section>

      <section className="section section-light" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg,#1a0a2e,#2a1a4a)', borderRadius: 20, padding: '2.5rem 3rem', display: 'flex', flexWrap: 'wrap' as const, alignItems: 'center', gap: '2rem', marginBottom: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1, minWidth: 260 }}>
              <div style={{ minWidth: 72, height: 72, background: 'linear-gradient(135deg,var(--gold),var(--gold-dark))', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', boxShadow: '0 8px 24px rgba(196,165,90,.35)' }}>🛡️</div>
              <div>
                <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.8rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, margin: '0 0 .25rem' }}>Partenaire &amp; Filiale du Groupe</p>
                <h3 style={{ color: 'white', fontSize: '1.6rem', fontWeight: 900, margin: 0, letterSpacing: '-.02em' }}>IMPERIUM <span style={{ color: 'var(--gold)' }}>SECURITY</span> SERVICES</h3>
                <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '.88rem', margin: '.35rem 0 0' }}>Spécialiste de la sûreté humaine et électronique</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '1rem', flexShrink: 0 }}>
              {[['CNAPS', 'Agréé'], ['24h/24', 'Intervention'], ['SSIAP', 'Niveaux 1, 2 & 3']].map(([val, label]) => (
                <div key={val} style={{ textAlign: 'center', padding: '.75rem 1.25rem', background: 'rgba(255,255,255,.08)', borderRadius: 10, border: '1px solid rgba(255,255,255,.12)' }}>
                  <div style={{ color: 'var(--gold)', fontSize: '1.4rem', fontWeight: 800 }}>{val}</div>
                  <div style={{ color: 'rgba(255,255,255,.6)', fontSize: '.78rem' }}>{label}</div>
                </div>
              ))}
            </div>
            <p style={{ width: '100%', color: 'rgba(255,255,255,.6)', fontSize: '.9rem', margin: 0, borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: '1.25rem' }}>
              Dans le cadre de votre contrat FM avec GROUPE OG, Imperium Security Services assure l&apos;ensemble des prestations de sécurité humaine et électronique. Une intégration totale, un reporting unifié, une coordination fluide entre les équipes de maintenance et de sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Sécurité Humaine – Imperium Security Services</div>
            <h2>Des professionnels certifiés sur vos sites</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            {[
              { icon: '👮', title: 'Gardiennage & Surveillance', text: 'Agents de sécurité en poste fixe ou mobile. Surveillance de nuit, weekends et jours fériés. Contrôle des accès et des flux.' },
              { icon: '🔥', title: 'Sécurité Incendie (SSIAP)', text: 'Agents SSIAP 1, 2 et 3 pour établissements recevant du public (ERP) et immeubles de grande hauteur (IGH). Rondes de sécurité incendie.' },
              { icon: '🚶', title: 'Rondes de Surveillance', text: 'Rondes intérieures et extérieures programmées avec rapport de ronde digital. Vérification des fermetures, détection d\'intrusions.' },
              { icon: '🚨', title: 'Intervention sur Alarme', text: 'Intervention physique sous 20 minutes en cas de déclenchement d\'alarme. Levée de doute sur site, rapport d\'intervention immédiat.' },
              { icon: '🎫', title: 'Contrôle d\'Accès Humain', text: 'Filtrage des entrées, vérification des accréditations, gestion des visiteurs, accueil sécurisé. Conformité RGPD des données.' },
              { icon: '🏟️', title: 'Sécurité Événementielle', text: 'Protection lors de vos événements d\'entreprise : séminaires, inaugurations, assemblées générales. Agents formés à la gestion de foule.' },
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
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,#4a2a7a,#2a1a4a)' }}>📹</div>
            <div>
              <div className="eyebrow">Sécurité Électronique – Imperium Security Services</div>
              <h2>Systèmes de protection intelligents</h2>
              <p>Imperium Security Services installe et maintient l&apos;ensemble des systèmes de sécurité électronique de vos bâtiments, pleinement intégrés dans la plateforme de gestion technique unifiée GROUPE OG.</p>
              <div className="check-list">
                <div className="check-item"><span>Vidéosurveillance IP HD et IA analytique</span></div>
                <div className="check-item"><span>Contrôle d&apos;accès par badge, biométrie ou smartphone</span></div>
                <div className="check-item"><span>Détection intrusion multizone</span></div>
                <div className="check-item"><span>Alarme incendie SSI et désenfumage</span></div>
                <div className="check-item"><span>Télésurveillance 24h/24 par opérateur agréé</span></div>
                <div className="check-item"><span>Maintenance préventive et curative des systèmes</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>Solutions</div>
            <h2 style={{ color: 'white' }}>Sécurité adaptée à chaque type de site</h2>
          </div>
          <div className="cards-grid cards-grid-4">
            {[
              { icon: '🏢', title: 'Bureaux & Tertiaire', text: 'Contrôle d\'accès, vidéosurveillance, gardiennage de nuit, accueil sécurisé. Protocoles adaptés aux horaires d\'occupation.' },
              { icon: '🏭', title: 'Sites Industriels', text: 'Surveillance périmétrique, contrôle des flux marchandises, zones ATEX, gardiennage renforcé. Protection des actifs industriels.' },
              { icon: '🏥', title: 'Santé & ERP', text: 'SSIAP obligatoire, gestion des accès sensibles, sécurité des patients et des données, conformité aux réglementations ERP.' },
              { icon: '🏪', title: 'Commerce & Retail', text: 'Antivol, vidéosurveillance IA, agents de surface, protection des marchandises, gestion des flux clients.' },
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
            <div className="eyebrow">Conformité réglementaire</div>
            <h2>Nous assurons votre conformité légale</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            <div className="feature-card" style={{ borderLeft: '4px solid var(--gold)' }}>
              <div className="feature-icon">📜</div>
              <h3>Agrément CNAPS</h3>
              <p>Tous les agents Imperium Security Services sont titulaires de la carte professionnelle délivrée par le CNAPS. Conformité totale à la loi du 12 juillet 1983.</p>
            </div>
            <div className="feature-card" style={{ borderLeft: '4px solid var(--navy)' }}>
              <div className="feature-icon">🔥</div>
              <h3>Réglementation Incendie</h3>
              <p>Conformité aux règles ERP (types et catégories), IGH, ICPE. Dossiers de sécurité, registres de sécurité, commissions de sécurité.</p>
            </div>
            <div className="feature-card" style={{ borderLeft: '4px solid #27ae60' }}>
              <div className="feature-icon">🔒</div>
              <h3>RGPD &amp; Vidéosurveillance</h3>
              <p>Déclarations CNIL, signalétiques réglementaires, durée de conservation des enregistrements. Conformité totale au RGPD.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Sécurisez vos sites avec GROUPE OG &amp; Imperium Security Services</h2>
            <p>Audit de sécurité gratuit réalisé par les experts Imperium Security Services. Évaluation des risques, plan de protection sur mesure, intégré à votre contrat FM.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-gold">Demander un audit sécurité →</Link>
              <Link href="/contact" className="btn btn-outline-white">🛡️ Contacter Imperium Security Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
