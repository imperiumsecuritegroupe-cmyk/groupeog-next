import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <Image src="/logo.png" alt="Groupe OG" width={200} height={80} className="footer-logo-img" />
          </div>
          <p>Expert national en BTP, Propreté et Immobilier. Depuis Nice, nous intervenons sur toute la France pour construire, entretenir et valoriser vos bâtiments et actifs.</p>
        </div>

        <div className="footer-col">
          <h4>BTP</h4>
          <ul>
            <li><Link href="/gros-oeuvres">Gros Œuvres</Link></li>
            <li><Link href="/seconds-oeuvres">Seconds Œuvres</Link></li>
            <li><Link href="/plomberie-chauffage">Plomberie &amp; CVC</Link></li>
            <li><Link href="/electricite">Électricité</Link></li>
            <li><Link href="/photovoltaique">Énergie Solaire</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Propreté</h4>
          <ul>
            <li><Link href="/nettoyage">Nettoyage &amp; Hygiène</Link></li>
            <li><Link href="/espaces-verts">Espaces Verts</Link></li>
          </ul>
          <h4 style={{ marginTop: '1.5rem' }}>Immobilier</h4>
          <ul>
            <li><Link href="/immobilier">Gestion Immobilière</Link></li>
            <li><Link href="/services-generaux">Services Généraux</Link></li>
            <li><Link href="/securite-surete">Sécurité &amp; Sûreté</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Entreprise</h4>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/contact">Devis gratuit</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+33769252296">📞 07 69 25 22 96</a></li>
            <li><a href="mailto:contact@groupe-og.com">✉️ contact@groupe-og.com</a></li>
            <li style={{ color: 'rgba(255,255,255,.35)', lineHeight: 1.6 }}>📍 50 bd Stalingrad<br />06300 Nice</li>
            <li style={{ color: 'rgba(255,255,255,.35)' }}>🕐 Urgences 24h/24</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 <span>GROUPE OG</span>. Tous droits réservés. — BTP · Propreté · Immobilier</p>
        <div className="footer-poles">
          <Link href="/gros-oeuvres" className="fp-btp">BTP</Link>
          <Link href="/nettoyage" className="fp-prop">Propreté</Link>
          <Link href="/immobilier" className="fp-immo">Immobilier</Link>
        </div>
      </div>
    </footer>
  )
}
