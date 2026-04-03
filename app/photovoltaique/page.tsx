import type { Metadata } from 'next'
import Link from 'next/link'
import Counter from '@/components/Counter'

export const metadata: Metadata = {
  title: 'Panneaux Solaires Photovoltaïques – GROUPE OG',
  description: 'Vente et installation de panneaux solaires photovoltaïques. Autoconsommation, revente surplus, financement et aides disponibles.',
}

export default function Photovoltaique() {
  return (
    <>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#5f3a1a,#c4621a)' }}>
        <div className="page-hero-grid"></div>
        <div className="page-hero-content">
          <div className="breadcrumb"><Link href="/">Accueil</Link><span>/</span>Panneaux Solaires</div>
          <div className="page-hero-icon">☀️</div>
          <h1>Panneaux Solaires Photovoltaïques</h1>
          <p>Produisez votre propre électricité, réduisez vos factures et contribuez à la transition énergétique. Vente, pose et maintenance de systèmes solaires.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <Link href="/" className="back-link">← Retour aux services</Link>
              <div className="eyebrow">Énergie Solaire</div>
              <h2>L&apos;énergie du soleil à votre service</h2>
              <p>GROUPE OG est votre expert en installations solaires photovoltaïques. Nous prenons en charge l&apos;intégralité de votre projet : de l&apos;étude de faisabilité à la mise en service, en passant par les démarches administratives et le raccordement réseau.</p>
              <p>Avec des panneaux solaires de haute qualité et une installation soignée, rentabilisez votre investissement en quelques années seulement.</p>
              <div className="check-list">
                <div className="check-item"><span>Panneaux de marques européennes certifiées</span></div>
                <div className="check-item"><span>Installateurs RGE certifiés QualiPV</span></div>
                <div className="check-item"><span>Garantie 25 ans sur les panneaux</span></div>
                <div className="check-item"><span>Démarches administratives gérées</span></div>
                <div className="check-item"><span>Suivi de production via application</span></div>
              </div>
            </div>
            <div className="content-visual" style={{ background: 'linear-gradient(135deg,#5f3a1a,#f0821e)' }}>☀️</div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>Pourquoi le solaire ?</div>
            <h2 style={{ color: 'white' }}>Des chiffres qui parlent d&apos;eux-mêmes</h2>
          </div>
          <div className="cards-grid cards-grid-4">
            <div className="info-card">
              <div className="info-icon"><Counter count={70} suffix="%" className="" /></div>
              <h3>Économies</h3>
              <p>Jusqu&apos;à 70% de réduction sur votre facture d&apos;électricité avec un système bien dimensionné.</p>
            </div>
            <div className="info-card">
              <div className="info-icon"><Counter count={25} suffix=" ans" className="" /></div>
              <h3>Durée de vie</h3>
              <p>Les panneaux solaires modernes ont une durée de vie garantie de 25 à 30 ans.</p>
            </div>
            <div className="info-card">
              <div className="info-icon"><Counter count={8} suffix=" ans" className="" /></div>
              <h3>Retour investissement</h3>
              <p>Rentabilisez votre installation en 6 à 10 ans selon votre consommation et l&apos;ensoleillement.</p>
            </div>
            <div className="info-card">
              <div className="info-icon" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--gold)' }}>0 CO₂</div>
              <h3>Énergie propre</h3>
              <p>Production d&apos;électricité 100% propre et renouvelable. Zéro émission de CO₂ en fonctionnement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Nos solutions</div>
            <h2>Quel système solaire pour vous ?</h2>
          </div>
          <div className="cards-grid cards-grid-3">
            <div className="feature-card" style={{ borderTop: '4px solid var(--gold)' }}>
              <div className="feature-icon">🏡</div>
              <h3>Autoconsommation</h3>
              <p>Consommez directement l&apos;électricité produite par vos panneaux. Idéal pour les maisons individuelles et réduire la dépendance au réseau.</p>
              <div className="check-list" style={{ marginTop: '1rem' }}>
                <div className="check-item"><span>Installation 3 à 9 kWc</span></div>
                <div className="check-item"><span>Avec ou sans batterie de stockage</span></div>
                <div className="check-item"><span>Revente du surplus à EDF OA</span></div>
              </div>
            </div>
            <div className="feature-card" style={{ borderTop: '4px solid var(--navy)' }}>
              <div className="feature-icon">🏢</div>
              <h3>Toiture Commerciale</h3>
              <p>Grandes installations pour entrepôts, bâtiments commerciaux et industriels. Maximisez la production et réduisez vos coûts énergétiques.</p>
              <div className="check-list" style={{ marginTop: '1rem' }}>
                <div className="check-item"><span>Installations de 10 à 500 kWc</span></div>
                <div className="check-item"><span>Financement adapté</span></div>
                <div className="check-item"><span>Monitoring professionnel</span></div>
              </div>
            </div>
            <div className="feature-card" style={{ borderTop: '4px solid #27ae60' }}>
              <div className="feature-icon">🔋</div>
              <h3>Kit Solaire avec Batterie</h3>
              <p>Stockez l&apos;énergie produite dans la journée pour l&apos;utiliser le soir. Atteignez jusqu&apos;à 90% d&apos;autonomie.</p>
              <div className="check-list" style={{ marginTop: '1rem' }}>
                <div className="check-item"><span>Batterie lithium haute capacité</span></div>
                <div className="check-item"><span>Compatible voiture électrique</span></div>
                <div className="check-item"><span>Application de suivi incluse</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Installation</div>
            <h2>De l&apos;étude à la mise en service</h2>
          </div>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <div className="process-list">
              {[
                { n: 1, title: 'Étude & Simulation', text: 'Analyse de votre toiture, ensoleillement, consommation électrique. Simulation de production et calcul de rentabilité.' },
                { n: 2, title: 'Devis & Financement', text: 'Proposition détaillée avec différentes options. Présentation des aides (TVA réduite, primes) et solutions de financement.' },
                { n: 3, title: 'Démarches Administratives', text: 'Déclaration préalable de travaux, demande de raccordement ENEDIS, contrat de rachat EDF OA. Tout est géré pour vous.' },
                { n: 4, title: 'Installation', text: 'Pose des panneaux, onduleurs, câblage électrique et boîtier de communication. Intervention rapide en 1 à 2 jours.' },
                { n: 5, title: 'Mise en Service & Suivi', text: 'Raccordement ENEDIS, mise en service, paramétrage de l\'application de monitoring. Suivi de la production en temps réel.' },
              ].map((s) => (
                <div className="process-step" key={s.n}>
                  <div className="step-num">{s.n}</div>
                  <div className="step-content"><h4>{s.title}</h4><p>{s.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Aides financières</div>
            <h2>Financez votre installation solaire</h2>
          </div>
          <div className="responsive-table">
            <table>
              <thead>
                <tr>
                  <th>Aide</th>
                  <th>Montant</th>
                  <th>Conditions</th>
                  <th>Démarches</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>TVA à 10%</strong></td>
                  <td>Réduction TVA de 20% → 10%</td>
                  <td>Installation &lt; 3 kWc</td>
                  <td>Automatique à la facturation</td>
                </tr>
                <tr>
                  <td><strong>Prime à l&apos;autoconsommation</strong></td>
                  <td>280 à 380 €/kWc</td>
                  <td>Toutes installations avec autoconso</td>
                  <td>Gérée par GROUPE OG</td>
                </tr>
                <tr>
                  <td><strong>Revente surplus EDF OA</strong></td>
                  <td>Tarif garanti 20 ans</td>
                  <td>Contrat avec EDF</td>
                  <td>Gérée par GROUPE OG</td>
                </tr>
                <tr>
                  <td><strong>Éco-PTZ</strong></td>
                  <td>Jusqu&apos;à 30 000 €</td>
                  <td>Propriétaires occupants</td>
                  <td>Via banque partenaire</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Passez au solaire dès aujourd&apos;hui !</h2>
            <p>Étude gratuite et devis personnalisé sous 48h. Commencez à économiser sur votre facture d&apos;électricité.</p>
            <Link href="/contact" className="btn btn-gold">Étude gratuite →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
