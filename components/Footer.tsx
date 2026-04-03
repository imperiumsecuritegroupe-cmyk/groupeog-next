import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', color: 'white', fontWeight: 800, fontSize: '1.4rem', marginBottom: '.75rem' }}>
            <div style={{ width: 42, height: 42, background: 'var(--gold)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>🏢</div>
            GROUPE<span style={{ color: 'var(--gold)' }}>OG</span>
          </div>
          <p>Partenaire stratégique en Facility Management pour les grands comptes et institutionnels. Maintenance multitechnique, gestion immobilière, services généraux et sécurité. Basé à Nice, PACA.</p>
        </div>
        <div className="footer-col">
          <h4>FM Externalisé</h4>
          <ul>
            <li><Link href="/immobilier">Gestion Immobilière</Link></li>
            <li><Link href="/services-generaux">Services Généraux</Link></li>
            <li><Link href="/securite-surete">Sécurité &amp; Sûreté</Link></li>
            <li><Link href="/espaces-verts">Espaces Verts &amp; RSE</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Maintenance Technique</h4>
          <ul>
            <li><Link href="/gros-oeuvres">Gros Œuvres &amp; Maçonnerie</Link></li>
            <li><Link href="/seconds-oeuvres">Seconds Œuvres &amp; Finitions</Link></li>
            <li><Link href="/plomberie-chauffage">Plomberie &amp; CVC</Link></li>
            <li><Link href="/electricite">Électricité &amp; GTB</Link></li>
            <li><Link href="/photovoltaique">Énergie Solaire</Link></li>
            <li><Link href="/nettoyage">Propreté &amp; Hygiène</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+33769252296">📞 07 69 25 22 96</a></li>
            <li><a href="mailto:contact@groupe-og.com">✉️ contact@groupe-og.com</a></li>
            <li><Link href="/contact">💬 Audit stratégique gratuit</Link></li>
            <li style={{ color: 'rgba(255,255,255,.4)', fontSize: '.85rem', marginTop: '.5rem' }}>50 bd Stalingrad<br />06000 Nice</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 <span>GROUPE OG</span>. Tous droits réservés. — Expert Facility Management Nice &amp; PACA</p>
      </div>
    </footer>
  )
}
