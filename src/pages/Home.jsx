import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import headerImg from '../assets/header.jpg'
import valorantImg from '../assets/VALORANT.webp'
import './Home.css'

const FEED_ITEMS = [
  { type: 'ACHIEVEMENT', text: 'Rank up Gold 3 → Platinum 1', meta: '2 hours ago • 24 RR', icon: '◆' },
  { type: 'MATCH', text: 'Clutch 1v3 với Jett trên Ascent', meta: 'Hôm qua • 28 kills', icon: '▶' },
  { type: 'SQUAD', text: 'Tìm teammate cùng rank để stack', meta: 'Discord • #valorant-vn', icon: '◈' },
]

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-')
  return `${d}.${m}.20${y.slice(2)}`
}

function getPostImage(post) {
  if (!post.image) return null
  if (post.image === 'header.jpg') return headerImg
  if (post.image === 'VALORANT.webp') return valorantImg
  return null
}

export default function Home() {
  const featuredPosts = posts.slice(0, 3)

  return (
    <div className="container-wide home">
      <section className="hero-val">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          SYSTEM ONLINE: V2025
        </div>
        <div className="hero-content">
          <h1 className="hero-title-val">
            LEVEL UP YOUR <span className="hero-title-accent">REALITY</span>
          </h1>
          <p className="hero-desc">
            Blog game của 𝓟𝓸𝓷𝓰𝓟𝓲𝓷𝓴𝔂 — meta Valorant, tip rank, clutch và mọi thứ về tactical FPS.
          </p>
          <div className="hero-cta">
            <Link to="/blog" className="btn btn-primary">BROWSE INTEL</Link>
            <Link to="/about" className="btn btn-outline">JOIN SQUAD</Link>
          </div>
        </div>
        <div className="hero-visual">
          <img src={headerImg} alt="Gaming" className="hero-visual-img" />
        </div>
      </section>

      <section className="section-intel">
        <div className="section-head">
          <h2 className="section-title">
            <span className="section-title-bar">|</span> FEATURED INTEL
          </h2>
          <Link to="/blog" className="section-link">ALL DATA BLOCKS →</Link>
        </div>
        <div className="intel-cards">
          {featuredPosts.map((post) => {
            const img = getPostImage(post)
            return (
              <Link key={post.id} to={`/blog/${post.slug}`} className="intel-card">
                <div className={`intel-card-thumb intel-card-thumb--${post.tagColor || 'red'}`}>
                  {img && <img src={img} alt="" />}
                </div>
                <div className="intel-card-body">
                  <span className={`intel-card-tag intel-card-tag--${post.tagColor || 'red'}`}>
                    {post.tag}
                  </span>
                  <time className="intel-card-date">{formatDate(post.date)}</time>
                  <h3 className="intel-card-title">{post.title}</h3>
                  <p className="intel-card-excerpt">{post.excerpt}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="section-dashboard">
        <div className="dashboard-col live-feed">
          <h2 className="dashboard-title">
            <span className="dashboard-pulse" /> (()) LIVE FEED
          </h2>
          <ul className="feed-list">
            {FEED_ITEMS.map((item, i) => (
              <li key={i} className="feed-item">
                <span className="feed-icon">{item.icon}</span>
                <div className="feed-content">
                  <span className="feed-type">{item.type}: {item.text}</span>
                  <span className="feed-meta">{item.meta}</span>
                </div>
                <span className="feed-chevron">›</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard-col loadout">
          <h2 className="dashboard-title">
            <span className="dashboard-pulse" /> (()) CURRENT LOADOUT
          </h2>
          <div className="loadout-specs">
            <p><span className="loadout-label">MAIN</span> <span className="loadout-value">Valorant • Jett / Raze</span></p>
            <p><span className="loadout-label">RANK</span> <span className="loadout-value">Grind to Immortal</span></p>
          </div>
          <div className="loadout-status">
            <span className="loadout-status-text">"Headshot is the only shot that matters."</span>
          </div>
        </div>
      </section>
    </div>
  )
}
