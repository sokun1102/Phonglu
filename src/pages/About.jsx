import './About.css'
import valorantImg from '../assets/VALORANT.webp'

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
            Hey, I'm <strong>Phong</strong> — <strong>𝓟𝓸𝓷𝓰𝓟𝓲𝓷𝓴𝔂</strong> online. I’m into games, especially Valorant and tactical FPS. This blog is where I share meta takes, rank tips, and everything from the daily grind to esports.
          </p>
          <p>
            I’ve been playing shooters and battle royales for years. What keeps me hooked is the mix of skill, strategy, and that one clutch moment that flips the round. Here you’ll get honest takes on patches, agents, maps, and how to actually climb without burning out.
          </p>
        </section>

        <div className="about-grid">
          <section className="about-block about-fx about-fx-1">
            <h2>What I play</h2>
            <ul>
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
              If you’re here for Valorant tips, PUBG drops, or just to see how someone else thinks about the game, you’re in the right place.
            </p>
          </section>
        </div>

        <section className="about-connect about-fx about-fx-3">
          <h2>Connect</h2>
          <p>
            Facebook, Instagram, and Spotify are in the footer. Add me or message if you want to play together or chat about games — always up for a stack or a discussion.
          </p>
        </section>

        <section className="about-visual about-fx about-fx-4">
          <div className="about-visual-img">
            <img src={valorantImg} alt="Valorant" />
            <div className="about-visual-glow" />
          </div>
          <p className="about-visual-caption">
            Valorant and tactical FPS — the core of what I write about.
          </p>
        </section>
      </div>
    </div>
  )
}
