import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pôle Immobilier — Groupe OG | Gestion & Transaction France',
  description: 'Groupe OG, expert en gestion immobilière. Siège à Nice (06300), rayonnement national.',
}

export default function Immobilier() {
  const services = [
    { icon: '🏠', bg: 'linear-gradient(135deg,#001F10,#004020)', title: 'Gestion Locative', text: "Recherche de locataires, rédaction de baux, encaissement des loyers, gestion des impayés, états des lieux.", href: '/contact' },
    { icon: '🏢', bg: 'linear-gradient(135deg,#0A1A0A,#1A3A1A)', title: 'Property Management', text: "Gestion complète d'actifs tertiaires, commerciaux et mixtes : relations locataires, maintenance, quittancements, reporting.", href: '/contact' },
    { icon: '💼', bg: 'linear-gradient(135deg,#1A1A00,#3A3A00)', title: 'Transaction Immobilière', text: "Achat, vente et location de biens résidentiels et professionnels. Estimation, mise en valeur, négociation et accompagnement acte.", href: '/contact' },
    { icon: '📊', bg: 'linear-gradient(135deg,#00101A,#00283D)', title: 'Conseil & Audit Patrimonial', text: "Audit de votre portefeuille immobilier, stratégie de valorisation, due diligence technique et accompagnement à l'investissement.", href: '/contact' },
    { icon: '🗂️', bg: 'linear-gradient(135deg,#0A001A,#20003D)', title: 'Services Généraux', text: "Accueil, courrier, reprographie, conciergerie, helpdesk. Externalisez vos services généraux.", href: '/services-generaux' },
    { icon: '🛡️', bg: 'linear-gradient(135deg,#1A0A00,#3D2000)', title: 'Sécurité & Sûreté', text: "Gardiennage, contrôle d'accès, vidéosurveillance. Délivré par Imperium Security Services, filiale certifiée CNAPS.", href: '/securite-surete' },
  ]
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-accent" style={{ background: 'rgba(26,122,74,.2)' }}>🏢</div>
          <div className="eyebrow">Pôle Immobilier</div>
          <h1>Immobilier &amp; Patrimoine</h1>
          <p>Gestion locative, transaction immobilière, property management et conseil patrimonial : Groupe OG valorise votre patrimoine sur toute la France.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem', position: 'relative', zIndex: 1 }}>
            <Link href="/contact" className="btn btn-orange">Demander un audit gratuit →</Link>
            <a href="tel:+33769252296" className="btn btn-outline-white">📞 07 69 25 22 96</a>
          </div>
          <div className="breadcrumb">
            <Link href="/">Accueil</Link><span className="sep">/</span><span>Immobilier</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="eyebrow">Notre expertise immobilière</div>
              <h2>Votre patrimoine, notre priorité</h2>
              <p>Groupe OG accompagne particuliers, entreprises et investisseurs dans la gestion, la valorisation et la transaction de leurs biens immobiliers, sur toute la France.</p>
              <div className="check-list">
                <div className="check-item"><span>Gestionnaires expérimentés et disponibles</span></div>
                <div className="check-item"><span>Reporting régulier et transparent</span></div>
                <div className="check-item"><span>Réseau national de partenaires et acquéreurs</span></div>
                <div className="check-item"><span>Conformité réglementaire garantie (loi Hoguet, ALUR)</span></div>
              </div>
            </div>
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,#001F10,#003D20)' }}>🏢</div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Nos prestations</div>
            <h2>Une offre 360° pour votre patrimoine</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            {services.map(s => (
              <div className="service-card" key={s.title}>
                <div className="service-card-img" style={{ background: s.bg }}>{s.icon}</div>
                <div className="service-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <Link href={s.href} className="service-card-link">
                    {s.href !== '/contact' ? 'En savoir plus →' : 'Nous contacter →'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="cta-banner">
            <div className="eyebrow" style={{ color: 'rgba(26,122,74,.9)', justifyContent: 'center' }}>Votre patrimoine immobilier</div>
            <h2>Un audit patrimonial gratuit pour démarrer</h2>
            <p>Confiez-nous votre patrimoine et bénéficiez d&apos;un audit gratuit et sans engagement sous 48h.</p>
            <div className="cta-banner-btns">
              <Link href="/contact" className="btn btn-orange">Demander un audit gratuit →</Link>
              <a href="tel:+33769252296" className="btn btn-outline-white">📞 07 69 25 22 96</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
