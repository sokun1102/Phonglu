import { Link, useLocation } from 'react-router-dom'
import hsuLogo from '../assets/HSU-W-ENG.png'
import './Header.css'

const navItems = [
  { to: '/log', label: 'LOG' },
  { to: '/blog', label: 'INTEL' },
  { to: '/about', label: 'LOADOUT' },
]

export default function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-inner container-wide">
        <div className="header-brand">
          <img src={hsuLogo} alt="Hoa Sen University — Respect Diversity" className="header-hsu-logo" />
          <Link to="/log" className="logo">
            <span className="logo-icon" aria-hidden>◆</span>
            <span className="logo-text">𝓟𝓸𝓷𝓰𝓟𝓲𝓷𝓴𝔂</span>
          </Link>
        </div>
        <nav className="nav">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="header-led-strip" aria-hidden>
        <span className="header-led header-led--1" />
        <span className="header-led header-led--2" />
        <span className="header-led header-led--3" />
      </div>
    </header>
  )
}
