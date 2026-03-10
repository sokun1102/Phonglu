import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import headerImg from '../assets/header.jpg'
import valorantImg from '../assets/VALORANT.webp'
import pubgImg from '../assets/6b46efc4de46443aa067a74d63f4a4c9.jpeg'
import './Log.css'

const FEED_ITEMS = [
  { type: 'INTEL', text: 'Valorant meta 2025: agents and maps dominating', meta: '5 min read', icon: '◆', to: '/blog/valorant-meta-2025' },
  { type: 'INTEL', text: 'AK-47 vs M4A4 in CS2: which rifle per map?', meta: '4 min read', icon: '▶', to: '/blog/phantom-vandal' },
  { type: 'INTEL', text: 'PUBG: Battlegrounds — why it still hits different', meta: '6 min read', icon: '◈', to: '/blog/pubg-battlegrounds' },
  { type: 'VCT', text: 'Valorant Champions Tour — watch live', meta: 'Twitch · valorant', icon: '●', href: 'https://www.twitch.tv/valorant' },
  { type: 'PATCH', text: 'Valorant patch notes & updates', meta: 'Official · Riot', icon: '◇', href: 'https://playvalorant.com/en-us/news/game-updates/' },
]

const STATS = [
  { label: 'WIN RATE', value: '74%', sub: 'Competitive' },
  { label: 'MAIN', value: 'Counter-Strike 2', sub: 'Premier' },
  { label: 'HOURS', value: '2000+', sub: 'CS2' },
]

const FAV_MAPS_1 = ['Mirage', 'Dust II', 'Nuke', 'Inferno', 'Overpass']
const FAV_MAPS_2 = ['Ancient', 'Anubis', 'Vertigo']

const CURRENT_RANK = { tier: 'The Global Elite', rr: '27,879 elo', goal: '27,879 elo' }
const LOADOUT_MAIN = 'Counter-Strike 2'

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-')
  return `${d}.${m}.20${y.slice(2)}`
}

function getPostImage(post) {
  if (!post.image) return null
  if (post.image === 'header.jpg') return headerImg
  if (post.image === 'VALORANT.webp') return valorantImg
  if (post.image === 'pubg.jpeg') return pubgImg
  return null
}

export default function Log() {
  const featuredPosts = posts.slice(0, 3)

  return (
    <div className="log-page">
      <div className="log-scanline" aria-hidden />
      <div className="log-grid-bg" aria-hidden />

      <div className="container-wide log-inner">
        <section className="log-hero">
          <div className="log-hero-badge">
            <span className="log-hero-dot" />
            SYSTEM ONLINE — LOG ACTIVE
          </div>
          <div className="log-rank-banner">
            <span className="log-rank-label">CURRENT RANK</span>
            <span className="log-rank-tier">{CURRENT_RANK.tier}</span>
            <span className="log-rank-rr">{CURRENT_RANK.rr}</span>
            <span className="log-rank-goal">→ {CURRENT_RANK.goal}</span>
          </div>
          <h1 className="log-hero-title">
            <span className="log-hero-line">LEVEL UP YOUR</span>
            <span className="log-hero-accent">REALITY</span>
          </h1>
          <p className="log-hero-desc">
            𝓟𝓸𝓷𝓰𝓟𝓲𝓷𝓴𝔂's gaming blog — CS2, Valorant meta, rank tips, clutch plays and tactical FPS.
          </p>
          <div className="log-hero-cta">
            <Link to="/blog" className="btn-log btn-log-primary">BROWSE INTEL</Link>
            <Link to="/about" className="btn-log btn-log-outline">LOADOUT</Link>
          </div>
          <div className="log-hero-visual">
            <img src={headerImg} alt="Gaming" />
            <div className="log-hero-visual-glow" />
          </div>
        </section>

        <section className="log-stats">
          <h2 className="log-section-title"><span className="log-bar">|</span> COMBAT STATS</h2>
          <div className="log-stats-grid">
            {STATS.map((s, i) => (
              <div key={s.label} className="log-stat-card" style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
                <span className="log-stat-label">{s.label}</span>
                <span className="log-stat-value">{s.value}</span>
                <span className="log-stat-sub">{s.sub}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="log-agents-maps">
          <div className="log-agents">
            <h2 className="log-section-title"><span className="log-bar">|</span> FAV MAPS</h2>
            <div className="log-tags">
              {FAV_MAPS_1.map((m, i) => (
                <span key={m} className="log-tag" style={{ animationDelay: `${i * 0.05}s` }}>{m}</span>
              ))}
            </div>
          </div>
          <div className="log-maps">
            <h2 className="log-section-title"><span className="log-bar">|</span> ALSO PLAY</h2>
            <div className="log-tags">
              {FAV_MAPS_2.map((m, i) => (
                <span key={m} className="log-tag log-tag--map" style={{ animationDelay: `${0.2 + i * 0.05}s` }}>{m}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="log-intel">
          <div className="log-section-head">
            <h2 className="log-section-title"><span className="log-bar">|</span> FEATURED INTEL</h2>
            <Link to="/blog" className="log-section-link">ALL DATA BLOCKS →</Link>
          </div>
          <div className="log-cards">
            {featuredPosts.map((post, i) => {
              const img = getPostImage(post)
              return (
                <Link key={post.id} to={`/blog/${post.slug}`} className="log-card" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className={`log-card-thumb log-card-thumb--${post.tagColor || 'red'}`}>
                    {img && <img src={img} alt="" />}
                    <div className="log-card-thumb-overlay" />
                  </div>
                  <div className="log-card-body">
                    <span className={`log-card-tag log-card-tag--${post.tagColor || 'red'}`}>{post.tag}</span>
                    <time className="log-card-date">{formatDate(post.date)}</time>
                    <h3 className="log-card-title">{post.title}</h3>
                    <p className="log-card-excerpt">{post.excerpt}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        <section className="log-dashboard">
          <div className="log-dash-col log-feed">
            <h2 className="log-dash-title"><span className="log-pulse" /> (()) LIVE FEED</h2>
            <ul className="log-feed-list">
              {FEED_ITEMS.map((item, i) => (
                <li key={i} className="log-feed-item" style={{ animationDelay: `${i * 0.06}s` }}>
                  {item.to ? (
                    <Link to={item.to} className="log-feed-link">
                      <span className="log-feed-icon">{item.icon}</span>
                      <div className="log-feed-content">
                        <span className="log-feed-type">{item.type}: {item.text}</span>
                        <span className="log-feed-meta">{item.meta}</span>
                      </div>
                      <span className="log-feed-chevron">›</span>
                    </Link>
                  ) : (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="log-feed-link">
                      <span className="log-feed-icon">{item.icon}</span>
                      <div className="log-feed-content">
                        <span className="log-feed-type">{item.type}: {item.text}</span>
                        <span className="log-feed-meta">{item.meta}</span>
                      </div>
                      <span className="log-feed-chevron">›</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="log-dash-col log-loadout">
            <h2 className="log-dash-title"><span className="log-pulse" /> (()) CURRENT LOADOUT</h2>
            <div className="log-loadout-visual">
              <img src={headerImg} alt="Counter-Strike 2" />
            </div>
            <div className="log-loadout-rank">
              <span className="log-loadout-rank-label">RANK</span>
              <div className="log-loadout-rank-main">
                <span className="log-loadout-rank-tier">{CURRENT_RANK.tier}</span>
                <span className="log-loadout-rank-rr">{CURRENT_RANK.rr}</span>
              </div>
              <span className="log-loadout-rank-goal">→ {CURRENT_RANK.goal}</span>
            </div>
            <div className="log-loadout-specs">
              <div className="log-loadout-spec">
                <span className="log-loadout-spec-label">MAIN</span>
                <span className="log-loadout-spec-value">{LOADOUT_MAIN}</span>
              </div>
              <div className="log-loadout-spec">
                <span className="log-loadout-spec-label">GOAL</span>
                <span className="log-loadout-spec-value">{CURRENT_RANK.goal}</span>
              </div>
            </div>
            <blockquote className="log-loadout-quote">
              "Headshot is the only shot that matters."
            </blockquote>
            <footer className="log-loadout-footer">
              Hoa Sen University K22 — Faculty of Information Technology. Blog focused on games only.
            </footer>
          </div>
        </section>
      </div>
    </div>
  )
}
