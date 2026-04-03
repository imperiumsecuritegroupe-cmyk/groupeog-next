import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gestion Immobilière & Asset Management – GROUPE OG',
  description: 'Gestion immobilière externalisée : property management, asset management, gestion locative, baux commerciaux, transaction, conseil en immobilier d\'entreprise.',
}

export default function Immobilier() {
  return (
    <>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#1a2b4a,#2c4a7c)' }}>
        <div className="page-hero-grid"></div>
        <div className="page-hero-content">
          <div className="breadcrumb"><Link href="/">Accueil</Link><span>/</span>FM Externalisé<span>/</span>Gestion Immobilière</div>
          <div className="page-hero-icon">🏙️</div>
          <h1>Gestion Immobilière &amp; Asset Management</h1>
          <p>Externalisez la gestion de votre patrimoine immobilier. Property management, gestion locative, valorisation d&apos;actifs et conseil en immobilier d&apos;entreprise.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <Link href="/" className="back-link">← Retour aux services</Link>
              <div className="eyebrow">Immobilier Externalisé</div>
              <h2>Valorisez et gérez votre patrimoine immobilier</h2>
              <p>GROUPE OG prend en charge la gestion complète de vos actifs immobiliers. De la gestion quotidienne des baux à la stratégie de valorisation à long terme, nos experts vous offrent une vision 360° de votre patrimoine.</p>
              <p>Propriétaires, investisseurs, foncières ou entreprises multi-sites : nous adaptons nos services à la nature et à l&apos;ambition de votre portefeuille immobilier.</p>
              <div className="check-list">
                <div className="check-item"><span>Gestionnaires certifiés RICS et ICH</span></div>
                <div className="check-item"><span>Reporting financier mensuel détaillé</span></div>
                <div className="check-item"><span>Gestion multi-sites et multi-actifs</span></div>
                <div className="check-item"><span>Optimisation des charges et des revenus locatifs</span></div>
                <div className="check-item"><span>Interface propriétaire et locataire dédiée</span></div>
              </div>
            </div>
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,#1a2b4a,#2c4a7c)' }}>🏙️</div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Nos prestations</div>
            <h2>Une gestion immobilière complète</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            {[
              { icon: '🔑', title: 'Property Management', text: 'Gestion opérationnelle quotidienne de vos actifs : relation locataires, suivi des baux, quittancement, recouvrement, gestion des sinistres et des travaux.' },
              { icon: '📈', title: 'Asset Management', text: 'Pilotage stratégique de votre portefeuille : valorisation des actifs, arbitrages, optimisation du rendement, business plan immobilier sur 5 et 10 ans.' },
              { icon: '📋', title: 'Gestion des Baux', text: 'Rédaction, négociation et suivi des baux commerciaux et professionnels (3-6-9, bail dérogatoire, bail civil). Indexations, révisions, renouvellements.' },
              { icon: '🏢', title: 'Gestion Locative', text: 'Mise en location, sélection des locataires, état des lieux, gestion des loyers et charges, régularisation annuelle des charges.' },
              { icon: '🔍', title: 'Transaction Immobilière', text: 'Achat, vente et cession d\'actifs immobiliers professionnels. Évaluation, commercialisation, négociation et accompagnement à l\'acte.' },
              { icon: '💼', title: 'Conseil & Stratégie', text: 'Audit patrimonial, conseil en acquisition, structuration juridique et fiscale, due diligence technique, accompagnement des investisseurs.' },
              { icon: '📊', title: 'Reporting & Tableaux de Bord', text: 'Reporting financier mensuel, tableaux de bord des actifs, indicateurs de performance (taux d\'occupation, rendement, valeur vénale).' },
              { icon: '⚖️', title: 'Gestion Juridique & Contentieux', text: 'Suivi des contentieux locatifs, relances, procédures. Coordination avec les huissiers et avocats spécialisés en droit immobilier.' },
              { icon: '🌱', title: 'Patrimoine & Transition Énergétique', text: 'Audit DPE, plans pluriannuels de travaux (PPPT), stratégie de décarbonation du patrimoine, accompagnement vers les labels RE2020 et BREEAM.' },
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
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>Types d&apos;actifs</div>
            <h2 style={{ color: 'white' }}>Tous types de patrimoine immobilier</h2>
          </div>
          <div className="cards-grid cards-grid-4">
            {[
              { icon: '🏢', title: 'Bureaux & Tertiaire', text: 'Immeubles de bureaux, flex-offices, parcs tertiaires, sièges sociaux. Gestion des baux 3-6-9 et contrats de services.' },
              { icon: '🏭', title: 'Locaux Industriels', text: 'Entrepôts, usines, plateformes logistiques, locaux d\'activités. Baux commerciaux et suivi technique spécialisé.' },
              { icon: '🛍️', title: 'Commerces & Retail', text: 'Murs commerciaux, galeries marchandes, locaux en pied d\'immeuble. Optimisation des linéaires et du taux d\'occupation.' },
              { icon: '🏗️', title: 'Patrimoine Mixte', text: 'Portefeuilles multi-actifs, immeubles mixtes bureau/commerce/logement. Gestion consolidée et reporting unifié.' },
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
            <div className="eyebrow">Notre processus</div>
            <h2>Prise en charge de votre patrimoine</h2>
          </div>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <div className="process-list">
              {[
                { n: 1, title: 'Audit & Diagnostic Patrimonial', text: 'Analyse complète de vos actifs : état technique, situation locative, baux en cours, niveau de charges, potentiel de valorisation.' },
                { n: 2, title: 'Plan de Gestion Personnalisé', text: 'Définition des objectifs (rendement, valorisation, cession), du périmètre et du niveau de services. Rédaction du mandat de gestion.' },
                { n: 3, title: 'Prise en Charge Opérationnelle', text: 'Transfert des dossiers, rencontre des locataires, mise en place des outils de suivi et ouverture de l\'accès au portail propriétaire.' },
                { n: 4, title: 'Gestion Courante & Reporting', text: 'Quittancement, encaissements, suivi des travaux, gestion des sinistres. Reporting mensuel et comité de gestion trimestriel.' },
                { n: 5, title: 'Optimisation Continue', text: 'Recommandations d\'arbitrage, repositionnement des actifs, plans de travaux de valorisation, optimisation fiscale.' },
              ].map((s) => (
                <div className="process-step" key={s.n}>
                  <div className="step-num">{s.n}</div>
                  <div className="step-content">
                    <h4>{s.title}</h4>
                    <p>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,#2c4a7c,#1a2b4a)' }}>📊</div>
            <div>
              <div className="eyebrow">Pourquoi externaliser ?</div>
              <h2>Les bénéfices de l&apos;externalisation immobilière</h2>
              <p>Confier la gestion de votre patrimoine à GROUPE OG vous permet de vous recentrer sur votre cœur de métier tout en bénéficiant d&apos;une expertise spécialisée et de synergies avec nos services FM techniques.</p>
              <div className="check-list">
                <div className="check-item"><span>Réduction des coûts de gestion jusqu&apos;à 25%</span></div>
                <div className="check-item"><span>Accès à une expertise pluridisciplinaire (juridique, technique, financière)</span></div>
                <div className="check-item"><span>Synergies avec nos services de maintenance technique</span></div>
                <div className="check-item"><span>Vision consolidée multi-sites en temps réel</span></div>
                <div className="check-item"><span>Réactivité et disponibilité étendues</span></div>
                <div className="check-item"><span>Conformité réglementaire assurée (DPE, PPPT, RT2020)</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="cta-banner">
            <h2>Confiez-nous votre patrimoine immobilier</h2>
            <p>Audit patrimonial gratuit sous 48h. Nos experts vous présentent un plan de gestion sur mesure.</p>
            <Link href="/contact" className="btn btn-gold">Demander un audit patrimonial →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
