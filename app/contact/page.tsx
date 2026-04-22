import type { Metadata } from 'next'
import Link from 'next/link'
import Accordion from '@/components/Accordion'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Devis Gratuit — Groupe OG | BTP · Propreté · Immobilier',
  description: 'Contactez Groupe OG pour un devis gratuit en BTP, Propreté ou Immobilier. Réponse sous 24h. Siège à Nice (06300), intervention nationale.',
}

const faqs = [
  { q: 'Les devis sont-ils vraiment gratuits et sans engagement ?', a: 'Oui, tous nos devis sont entièrement gratuits et sans aucun engagement de votre part. Nous vous proposons une solution chiffrée et détaillée sous 48h.' },
  { q: 'Dans quelles zones intervenez-vous ?', a: 'Groupe OG intervient sur toute la France métropolitaine. Notre siège est à Nice (06300), avec des partenaires dans les principales régions françaises.' },
  { q: 'Quels types de projets BTP prenez-vous en charge ?', a: 'Tous les projets BTP : particuliers, professionnels, collectivités, industriels. Construction neuve, rénovation, mise aux normes, maintenance préventive et curative.' },
  { q: "Proposez-vous des contrats d'entretien propreté réguliers ?", a: "Oui, nous proposons des contrats d'entretien réguliers sur mesure selon votre superficie, vos horaires et vos exigences. Suivi qualité et interlocuteur dédié inclus." },
  { q: 'Comment fonctionne la gestion locative avec Groupe OG ?', a: "Nous prenons en charge l'intégralité : recherche de locataires, bail, loyers, impayés, réparations, états des lieux. Vous recevez un compte-rendu mensuel." },
  { q: 'Intervenez-vous en urgence ?', a: "Oui, notre astreinte urgence est disponible 24h/24, 7j/7. Contactez le 07 69 25 22 96 à tout moment pour les interventions critiques." },
]

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-accent" style={{ background: 'rgba(232,98,10,.2)' }}>💬</div>
          <div className="eyebrow">Contact</div>
          <h1>Parlons de votre projet</h1>
          <p>Devis gratuit sous 48h. Que vous ayez un projet BTP, un besoin en propreté ou un bien immobilier à gérer, nos experts sont à votre écoute.</p>
          <div className="breadcrumb">
            <Link href="/">Accueil</Link><span className="sep">/</span><span>Contact</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col" style={{ gap: '3rem', alignItems: 'flex-start' }}>

            <div>
              <div className="eyebrow">Nos coordonnées</div>
              <h2 style={{ marginBottom: '1.5rem' }}>Nous sommes disponibles</h2>
              <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>De Nice à toute la France, nos équipes sont mobilisables rapidement pour répondre à vos besoins en BTP, Propreté et Immobilier.</p>

              <div className="contact-info-card">
                <div className="contact-info-item">
                  <div className="contact-info-icon">📞</div>
                  <div>
                    <h4>Téléphone</h4>
                    <a href="tel:+33769252296">07 69 25 22 96</a>
                    <p style={{ color: 'rgba(255,255,255,.4)', fontSize: '.82rem', fontWeight: 400, marginTop: '.2rem' }}>Lun–Ven : 8h–18h | Sam : 9h–12h</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:contact@groupe-og.com">contact@groupe-og.com</a>
                    <p style={{ color: 'rgba(255,255,255,.4)', fontSize: '.82rem', fontWeight: 400, marginTop: '.2rem' }}>Réponse sous 24h ouvrées</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">📍</div>
                  <div>
                    <h4>Siège social</h4>
                    <p>50 boulevard Stalingrad<br />06300 Nice, France</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">🚨</div>
                  <div>
                    <h4>Urgences</h4>
                    <p>Disponible 24h/24, 7j/7</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">🗺️</div>
                  <div>
                    <h4>Zone d&apos;intervention</h4>
                    <p>France métropolitaine entière</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="eyebrow">Devis gratuit</div>
              <h2 style={{ marginBottom: '.5rem' }}>Envoyez-nous votre demande</h2>
              <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Remplissez ce formulaire et un expert vous contacte sous 24h.</p>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="section-header">
            <div className="eyebrow">Questions fréquentes</div>
            <h2>Tout ce que vous devez savoir</h2>
          </div>
          <Accordion items={faqs.map(f => ({ question: f.q, answer: f.a }))} />
        </div>
      </section>
    </>
  )
}
