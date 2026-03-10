import './About.css'
import headerImg from '../assets/header.jpg'

export default function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <span className="about-hero-badge">LOADOUT</span>
          <h1 className="about-hero-title">About</h1>
          <p className="about-hero-desc">
            Who’s behind this blog and what you’ll find here.
          </p>
        </div>
      </div>

      <div className="container about-body">
        <section className="about-intro about-fx">
          <p className="about-lead">
            Hey, I'm <strong>Phong</strong> — <strong>𝓟𝓸𝓷𝓰𝓟𝓲𝓷𝓴𝔂</strong> online. I’m into games, especially <strong>Counter-Strike 2</strong> and tactical FPS. This blog is where I share meta takes, rank tips, and everything from the daily grind to esports.
          </p>
          <p>
            I’ve been playing shooters and battle royales for years. What keeps me hooked is the mix of skill, strategy, and that one clutch moment that flips the round. Here you’ll get honest takes on CS2, patches, maps, and how to actually climb without burning out.
          </p>
        </section>

        <div className="about-grid">
          <section className="about-block about-fx about-fx-1">
            <h2>What I play</h2>
            <ul>
              <li className="about-play-main">
                <strong>Counter-Strike 2</strong> — Main game. Premier, The Global Elite · 27,879 elo. 2000+ hours.
              </li>
              <li><strong>Valorant</strong> — Duelist / Initiator (Jett, Raze, Skye)</li>
              <li><strong>PUBG: Battlegrounds</strong> — Squads, ranked when I have time</li>
              <li>Other titles for fun; I follow <strong>VCT</strong> and major esports</li>
            </ul>
            <p className="about-block-extra">
              I care about gunplay, map control, and team play — so most posts will lean into that.
            </p>
          </section>
          <section className="about-block about-fx about-fx-2">
            <h2>Blog goal</h2>
            <p>
              Share everything about gaming: meta, guides, rank talk, clips, and sometimes hardware/setup. No study or code — <strong>games only</strong>.
            </p>
            <p>
              If you’re here for CS2, Valorant tips, PUBG drops, or just to see how someone else thinks about the game, you’re in the right place.
            </p>
          </section>
        </div>

        <section className="about-loadout-block about-fx about-fx-2">
          <h2>Current loadout</h2>
          <div className="about-loadout-inner">
            <div className="about-loadout-visual">
              <img src={headerImg} alt="Counter-Strike 2" />
              <div className="about-visual-glow" />
            </div>
            <div className="about-loadout-specs">
              <p><span className="about-loadout-label">MAIN</span> <span className="about-loadout-value">Counter-Strike 2</span></p>
              <p><span className="about-loadout-label">RANK</span> <span className="about-loadout-value">The Global Elite · 27,879 elo</span></p>
              <p><span className="about-loadout-label">GOAL</span> <span className="about-loadout-value">27,879 elo</span></p>
            </div>
          </div>
        </section>

        <section className="about-connect about-fx about-fx-3">
          <h2>Connect</h2>
          <p>
            Facebook, Instagram, and Spotify are in the footer. Add me or message if you want to play together or chat about games — always up for a stack or a discussion.
          </p>
        </section>
      </div>
    </div>
  )
}
