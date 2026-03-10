import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import './Blog.css'

export default function Blog() {
  return (
    <div className="container blog-page">
      <header className="page-header">
        <h1>INTEL — ALL DATA BLOCKS</h1>
        <p className="page-desc">
          All posts about games: Valorant meta, rank tips, clutch plays and tactical FPS.
        </p>
      </header>

      <ul className="blog-list blog-list-val">
        {posts.map((post) => (
          <li key={post.id} className="blog-card-val">
            <Link to={`/blog/${post.slug}`} className="blog-card-link">
              <span className={`blog-tag blog-tag--${post.tagColor || 'red'}`}>{post.tag}</span>
              <time className="blog-date" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })}
              </time>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <span className="blog-meta">{post.readTime} read</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
