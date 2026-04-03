import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Électricité – Installations & Mises aux Normes – GROUPE OG',
  description: 'Électricien certifié : tableau électrique, câblage, prises, éclairage LED, domotique, mise aux normes NF C 15-100, IRVE.',
}

export default function Electricite() {
  return (
    <>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#5f4a1a,#c4962a)' }}>
        <div className="page-hero-grid"></div>
        <div className="page-hero-content">
          <div className="breadcrumb"><Link href="/">Accueil</Link><span>/</span>Électricité</div>
          <div className="page-hero-icon">⚡</div>
          <h1>Électricité</h1>
          <p>Installations électriques neuves, rénovations, mises aux normes, domotique et bornes de recharge. Sécurité et performance garanties.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <Link href="/" className="back-link">← Retour aux services</Link>
              <div className="eyebrow">Électricité</div>
              <h2>Votre installation électrique entre de bonnes mains</h2>
              <p>GROUPE OG dispose d&apos;électriciens qualifiés RGE (Reconnu Garant de l&apos;Environnement) pour tous vos travaux électriques. De la réalisation d&apos;une installation complète en neuf jusqu&apos;à la rénovation et mise aux normes d&apos;une installation ancienne.</p>
              <p>Nous intervenons pour les particuliers, les professionnels et les entreprises avec rigueur et professionnalisme.</p>
              <div className="check-list">
                <div className="check-item"><span>Électriciens certifiés Qualifelec</span></div>
                <div className="check-item"><span>Conformité NF C 15-100</span></div>
                <div className="check-item"><span>Attestation de conformité CONSUEL</span></div>
                <div className="check-item"><span>Interventions en 24h</span></div>
                <div className="check-item"><span>Garantie décennale</span></div>
              </div>
            </div>
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,#5f4a1a,#c4962a)' }}>⚡</div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Prestations</div>
            <h2>Nos interventions électriques</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            {[
              { icon: '🗂️', title: 'Tableau Électrique', text: 'Installation, remplacement et mise aux normes de tableaux électriques. Disjoncteurs différentiels, protections modernes.' },
              { icon: '🔌', title: 'Câblage & Prises', text: 'Création de circuits électriques, installation de prises de courant, doubles prises, prises spécialisées, USB intégrés.' },
              { icon: '💡', title: 'Éclairage', text: 'Conception et installation d\'éclairages intérieurs et extérieurs. LED haute efficacité, spots encastrés, rails LED.' },
              { icon: '🏠', title: 'Domotique', text: 'Maison connectée : volets roulants, éclairage automatique, chauffage intelligent, alarme, interphone vidéo.' },
              { icon: '🚗', title: 'Borne de Recharge IRVE', text: 'Installation de bornes de recharge pour véhicules électriques. Particuliers et professionnels. Démarches ENEDIS incluses.' },
              { icon: '📡', title: 'Courants Faibles', text: 'Réseaux informatiques RJ45, téléphone, TNT, fibre optique, vidéosurveillance, contrôle d\'accès.' },
              { icon: '🏭', title: 'Installations Industrielles', text: 'Électricité industrielle : armoires de commande, câblage machines, alimentation triphasée, maintenance industrielle.' },
              { icon: '🛡️', title: 'Mise aux Normes', text: 'Diagnostic électrique, mise en conformité NF C 15-100, remplacement des installations vétustes et dangereuses.' },
              { icon: '🔦', title: 'Éclairage Extérieur', text: 'Éclairage de jardin, terrasse, entrée, détecteurs de mouvement, éclairage architectural et mise en valeur.' },
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
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>Conformité</div>
            <h2 style={{ color: 'white' }}>La sécurité avant tout</h2>
            <p style={{ color: 'rgba(255,255,255,.65)' }}>Une installation électrique conforme est essentielle pour votre sécurité et celle de votre famille.</p>
          </div>
          <div className="cards-grid cards-grid-3">
            <div className="info-card"><div className="info-icon">📋</div><h3>Norme NF C 15-100</h3><p>Toutes nos installations respectent la norme française en vigueur pour les installations électriques basse tension.</p></div>
            <div className="info-card"><div className="info-icon">✅</div><h3>Attestation CONSUEL</h3><p>Nous vous remettons l&apos;attestation de conformité électrique obligatoire pour le raccordement à ENEDIS.</p></div>
            <div className="info-card"><div className="info-icon">🏆</div><h3>Qualifelec</h3><p>Nos électriciens sont certifiés Qualifelec, gage de qualité et de compétence reconnu par les professionnels du secteur.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col" style={{ direction: 'rtl' }}>
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,#1e3a5f,#2a5298)', direction: 'ltr' }}>📱</div>
            <div style={{ direction: 'ltr' }}>
              <div className="eyebrow">Domotique &amp; Smart Home</div>
              <h2>La maison intelligente à votre portée</h2>
              <p>Transformez votre domicile en maison connectée. La domotique vous permet de contrôler l&apos;ensemble de votre habitation depuis votre smartphone : éclairage, volets, chauffage, sécurité...</p>
              <div className="check-list">
                <div className="check-item"><span>Contrôle de l&apos;éclairage par zones et scénarios</span></div>
                <div className="check-item"><span>Gestion des volets roulants et stores</span></div>
                <div className="check-item"><span>Régulation intelligente du chauffage</span></div>
                <div className="check-item"><span>Alarme intrusion connectée</span></div>
                <div className="check-item"><span>Interphone vidéo et contrôle d&apos;accès</span></div>
                <div className="check-item"><span>Compatible Google Home, Alexa, Apple HomeKit</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Mobilité électrique</div>
            <h2>Bornes de recharge pour véhicules électriques</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            <div className="feature-card" style={{ borderTop: '4px solid var(--gold)' }}>
              <div className="feature-icon">🔌</div>
              <h3>Particuliers</h3>
              <p>Installation de wallbox à domicile. Recharge normale (7kW) ou accélérée (22kW). Aide ADVENIR disponible.</p>
            </div>
            <div className="feature-card" style={{ borderTop: '4px solid var(--navy)' }}>
              <div className="feature-icon">🏢</div>
              <h3>Entreprises &amp; Copropriétés</h3>
              <p>Solutions multi-bornes pour parkings d&apos;entreprise, résidences, hôtels. Gestion de charge intelligente.</p>
            </div>
            <div className="feature-card" style={{ borderTop: '4px solid #27ae60' }}>
              <div className="feature-icon">⚡</div>
              <h3>Recharge Rapide</h3>
              <p>Bornes de recharge rapide DC pour stations publiques et flottes de véhicules professionnels.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Un projet électrique ? Nous sommes là.</h2>
            <p>Diagnostic gratuit, devis rapide sous 24h. Electriciens qualifiés et certifiés à votre service.</p>
            <Link href="/contact" className="btn btn-gold">Demander un devis gratuit →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
