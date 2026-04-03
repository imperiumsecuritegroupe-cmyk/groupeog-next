import type { Metadata } from 'next'
import Accordion from '@/components/Accordion'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact – Devis Gratuit – GROUPE OG',
  description: 'Contactez GROUPE OG pour un audit gratuit. Facility management, maintenance multitechnique, CVC, électricité, énergie solaire, propreté.',
}

const faqItems = [
  {
    question: 'Les devis sont-ils gratuits et sans engagement ?',
    answer: 'Oui, tous nos devis sont entièrement gratuits et sans engagement. Nous effectuons une visite sur site pour évaluer vos besoins et vous remettons une proposition détaillée sous 48 à 72h.',
  },
  {
    question: 'Dans quelles zones intervenez-vous ?',
    answer: 'GROUPE OG intervient sur l\'ensemble du territoire national. Pour les urgences, nous couvrons principalement la région Île-de-France et les grandes agglomérations. Contactez-nous pour vérifier la disponibilité dans votre secteur.',
  },
  {
    question: 'Proposez-vous des financements pour les travaux ?',
    answer: 'Oui, nous travaillons avec des partenaires financiers pour vous proposer des solutions de financement adaptées à votre budget. Nous vous accompagnons également dans les démarches pour obtenir les aides de l\'État (MaPrimeRénov\', CEE, etc.).',
  },
  {
    question: 'Quelles garanties offrez-vous sur vos travaux ?',
    answer: 'Tous nos travaux bénéficient de la garantie légale : garantie de parfait achèvement (1 an), garantie biennale (2 ans) et garantie décennale (10 ans) pour les travaux de gros œuvres et de structure. Nous sommes assurés en responsabilité civile professionnelle et décennale.',
  },
  {
    question: 'Comment se déroule une commande de matériels de sécurité ?',
    answer: 'Pour les commandes B2B, contactez notre service commercial par téléphone ou email. Nous vous adressons un catalogue et un devis sous 24h. Les commandes sont expédiées sous 24 à 72h selon disponibilité, avec livraison sur site ou en entrepôt.',
  },
  {
    question: 'Êtes-vous disponibles pour les urgences ?',
    answer: 'Oui, notre service dépannage plomberie et chauffage est disponible 24h/24 et 7j/7, y compris les jours fériés. Appelez directement notre numéro d\'urgence pour une intervention rapide.',
  },
]

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="page-hero-content">
          <div className="page-hero-icon">💬</div>
          <h1>Contactez-nous</h1>
          <p>Audit technique gratuit de votre patrimoine. Un expert FM vous répond sous 24h avec un plan d&apos;action personnalisé.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="eyebrow">Nous contacter</div>
              <h2 style={{ marginBottom: '1.5rem' }}>Parlons de votre projet</h2>
              <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Que vous ayez un projet de construction, de rénovation, d&apos;installation solaire ou une demande d&apos;équipements professionnels, nous sommes à votre écoute.</p>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-item-text">
                  <h4>Téléphone</h4>
                  <p>07 69 25 22 96<br /><small style={{ color: 'var(--muted)' }}>Lun – Ven : 8h – 18h | Sam : 9h – 12h</small></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-item-text">
                  <h4>Email</h4>
                  <p>contact@groupe-og.com<br /><small style={{ color: 'var(--muted)' }}>Réponse sous 24h ouvrées</small></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-item-text">
                  <h4>Adresse</h4>
                  <p>50 boulevard Stalingrad<br />06000 – Nice, France</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">⏰</div>
                <div className="contact-item-text">
                  <h4>Horaires d&apos;ouverture</h4>
                  <p>Lundi – Vendredi : 8h00 – 18h00<br />Samedi : 9h00 – 12h00<br /><small style={{ color: 'var(--gold)', fontWeight: 600 }}>Urgences 24h/24 – 7j/7</small></p>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <h3 style={{ marginBottom: '1.25rem', color: 'var(--navy)' }}>Nos services</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                  <span className="tag tag-gold">🏢 FM Global</span>
                  <span className="tag tag-gold">📋 Audit Technique</span>
                  <span className="tag">🏛️ Gros Œuvres</span>
                  <span className="tag">🔨 Seconds Œuvres</span>
                  <span className="tag">🔧 Plomberie &amp; CVC</span>
                  <span className="tag">⚡ Électricité &amp; GTB</span>
                  <span className="tag">☀️ Énergie Solaire</span>
                  <span className="tag">🧹 Propreté</span>
                </div>
              </div>
            </div>

            <div className="form-card">
              <h3 style={{ color: 'var(--navy)', marginBottom: '.5rem' }}>Demande d&apos;audit ou de devis</h3>
              <p style={{ color: 'var(--muted)', fontSize: '.92rem', marginBottom: '1.75rem' }}>Remplissez le formulaire, un expert Facility Management vous rappelle sous 24h.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg,var(--navy),var(--navy-mid))', borderRadius: 16, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
              <h3>Notre adresse</h3>
              <p style={{ color: 'rgba(255,255,255,.8)' }}>50 boulevard Stalingrad, 06000 Nice</p>
              <a href="https://maps.google.com/?q=50+boulevard+Stalingrad+06000+Nice" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', fontWeight: 600, marginTop: '.5rem', display: 'block' }}>Voir sur Google Maps →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">FAQ</div>
            <h2>Questions fréquentes</h2>
          </div>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  )
}
