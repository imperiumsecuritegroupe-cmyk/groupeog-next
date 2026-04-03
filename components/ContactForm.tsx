'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 4000)
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="prenom">Prénom *</label>
          <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" required />
        </div>
        <div className="form-group">
          <label htmlFor="nom">Nom *</label>
          <input type="text" id="nom" name="nom" placeholder="Votre nom" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" placeholder="votre@email.fr" required />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Téléphone *</label>
          <input type="tel" id="telephone" name="telephone" placeholder="06 00 00 00 00" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="societe">Société (si professionnel)</label>
        <input type="text" id="societe" name="societe" placeholder="Nom de votre entreprise" />
      </div>
      <div className="form-group">
        <label htmlFor="service">Service concerné *</label>
        <select id="service" name="service" required>
          <option value="">-- Choisissez un service --</option>
          <optgroup label="🏢 FM Externalisé">
            <option value="fm-global">Facility Management Global (multi-sites)</option>
            <option value="fm-audit">Audit Technique de Patrimoine</option>
            <option value="immobilier">Gestion Immobilière &amp; Asset Management</option>
            <option value="services-generaux">Services Généraux (accueil, courrier, helpdesk...)</option>
            <option value="securite-surete">Sécurité &amp; Sûreté (gardiennage, contrôle accès...)</option>
            <option value="espaces-verts">Espaces Verts &amp; Développement Durable</option>
          </optgroup>
          <optgroup label="🔧 Maintenance Technique">
            <option value="fm-maintenance">Contrat Maintenance Multitechnique</option>
            <option value="gros-oeuvres">Gros Œuvres &amp; Maçonnerie</option>
            <option value="seconds-oeuvres">Seconds Œuvres &amp; Finitions</option>
            <option value="plomberie-cvc">Plomberie &amp; CVC</option>
            <option value="electricite-gtb">Électricité &amp; GTB</option>
            <option value="photovoltaique">Énergie Solaire Photovoltaïque</option>
            <option value="nettoyage">Propreté &amp; Nettoyage</option>
          </optgroup>
          <option value="autre">Autre / Plusieurs services</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="budget">Budget estimé</label>
        <select id="budget" name="budget">
          <option value="">-- Budget prévisionnel --</option>
          <option value="moins-5k">Moins de 5 000 €</option>
          <option value="5k-15k">5 000 € – 15 000 €</option>
          <option value="15k-50k">15 000 € – 50 000 €</option>
          <option value="50k-100k">50 000 € – 100 000 €</option>
          <option value="plus-100k">Plus de 100 000 €</option>
          <option value="non-defini">Non défini</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Description du projet *</label>
        <textarea id="message" name="message" placeholder="Décrivez votre projet, vos besoins, la localisation des travaux, les délais souhaités..." required />
      </div>
      <div className="form-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', marginBottom: '1.5rem' }}>
        <input type="checkbox" id="rgpd" name="rgpd" required style={{ marginTop: 3, width: 'auto', accentColor: 'var(--gold)' }} />
        <label htmlFor="rgpd" style={{ fontSize: '.88rem', color: 'var(--muted)', fontWeight: 400, cursor: 'pointer' }}>
          J&apos;accepte que mes données soient utilisées pour traiter ma demande conformément à la <a href="#" style={{ color: 'var(--gold)' }}>politique de confidentialité</a>.
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-gold"
        disabled={submitted}
        style={{
          width: '100%',
          justifyContent: 'center',
          padding: '1rem',
          background: submitted ? '#27ae60' : undefined,
          borderColor: submitted ? '#27ae60' : undefined,
        }}
      >
        {submitted ? 'Message envoyé !' : 'Envoyer ma demande de devis →'}
      </button>
    </form>
  )
}
