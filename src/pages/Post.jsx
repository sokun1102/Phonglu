import { useParams, Link } from 'react-router-dom'
import { getPostBySlug } from '../data/posts'
import headerImg from '../assets/header.jpg'
import valorantImg from '../assets/VALORANT.webp'
import pubgImg from '../assets/6b46efc4de46443aa067a74d63f4a4c9.jpeg'
import './Post.css'

function getPostImage(post) {
  if (!post?.image) return null
  if (post.image === 'header.jpg') return headerImg
  if (post.image === 'VALORANT.webp') return valorantImg
  if (post.image === 'pubg.jpeg') return pubgImg
  return null
}

export default function Post() {
  const { slug } = useParams()
  const post = slug ? getPostBySlug(slug) : null
  const postImage = post ? getPostImage(post) : null

  if (!post) {
    return (
      <div className="container">
        <div className="post-not-found post-not-found-val">
          <h1>INTEL NOT FOUND</h1>
          <Link to="/blog" className="btn btn-outline">← BACK TO INTEL</Link>
        </div>
      </div>
    )
  }

  return (
    <article className="container post post-val">
      <header className="post-header">
        <Link to="/blog" className="post-back post-back-val">← INTEL</Link>
        <span className={`post-tag post-tag--${post.tagColor || 'red'}`}>{post.tag}</span>
        <time className="post-date" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-meta">{post.readTime} read</p>
      </header>
      {postImage && (
        <div className="post-featured-img">
          <img src={postImage} alt="" />
        </div>
      )}
      <div className="post-content post-content-val">
        <p>{post.excerpt}</p>
        {post.slug === 'pubg-battlegrounds' ? (
          <>
            <p>
              <strong>PUBG: Battlegrounds</strong> is still one of the most intense battle royales out there. Big map, realistic gunplay, and that tension when the circle closes — no other BR does the “one life, 100 players” feel quite like it. From the classic Erangel and Miramar to newer maps like Deston and Rondo, every drop teaches you something about positioning and rotation.
            </p>
            <p>
              What keeps me coming back: the gunplay. Recoil control, bullet drop, and sound cues matter a lot. You can’t just spray and pray; you learn to tap-fire, lead your shots, and use cover. Vehicles add another layer — risk vs reward when crossing open fields or when the blue zone is on your back.
            </p>
            <p>
              I’ll share more in future posts: hot drop vs safe drop, best loot routes, and how to play the last circles. If you’re still dropping into PUBG in 2025, you’re not alone — the game keeps getting updates and the community is still there. See you on the battleground.
            </p>
          </>
        ) : (
          <>
            <p>
              Full post content about the game will go here — meta breakdown, tips, personal take and rank experience. You can add more paragraphs, clips or screenshots.
            </p>
            <p>
              Everything on this blog is about games: Valorant, tactical FPS and the gaming community. No study or code — games only.
            </p>
          </>
        )}
      </div>
    </article>
  )
}
