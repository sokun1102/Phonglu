import { Link } from 'react-router-dom'
import './Footer.css'

const PAGES = [
  { to: '/log', label: 'LOG' },
  { to: '/blog', label: 'INTEL' },
  { to: '/about', label: 'LOADOUT' },
]

const SOCIAL = [
  { label: 'Facebook', href: 'https://www.facebook.com/phong.luu.71528', icon: 'f' },
  { label: 'Instagram', href: 'https://www.instagram.com/phongluu555/', icon: 'ig' },
  { label: 'Spotify', href: 'https://open.spotify.com/user/31casqjeclrpz63r5bpdvg3tzjtu', icon: '♫' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container-wide">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">𝓟𝓸𝓷𝓰𝓟𝓲𝓷𝓴𝔂</span>
            <p className="footer-tagline">EST. IN THE DIGITAL VOID</p>
            <p className="footer-desc">
              Gaming blog — Valorant, PUBG, meta & rank. Hoa Sen University K22, Faculty of IT.
            </p>
          </div>
          <nav className="footer-nav">
            <h3 className="footer-nav-title">Pages</h3>
            <ul className="footer-nav-list">
              {PAGES.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-connect">
            <h3 className="footer-connect-title">Connect</h3>
            <div className="footer-social">
              {SOCIAL.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={label}
                >
                  <span className="footer-social-icon">{icon}</span>
                  <span className="footer-social-label">{label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="footer-map">
            <h3 className="footer-map-title">Location</h3>
            <p className="footer-map-desc">Hoa Sen University · HCMC</p>
            <div className="footer-map-embed">
              <iframe
                src="https://www.google.com/maps?q=10.7724,106.6793&z=16&output=embed"
                title="Hoa Sen University — Map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© {new Date().getFullYear()} 𝓟𝓸𝓷𝓰𝓟𝓲𝓷𝓴𝔂</span>
          <span className="footer-sep">·</span>
          <Link to="/about" className="footer-about">About</Link>
          <span className="footer-sep">·</span>
          <span className="footer-note">Gaming blog · No study or code</span>
        </div>
      </div>
    </footer>
  )
}
