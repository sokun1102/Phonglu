export const posts = [
  {
    id: 'valorant-meta-2025',
    slug: 'valorant-meta-2025',
    title: 'Valorant meta 2025: agents and maps dominating',
    excerpt: 'Latest meta update: which agents are picked most, which maps to ban, and rank tips from Gold to Immortal.',
    date: '2025-03-10',
    readTime: '5 min',
    tag: 'META',
    tagColor: 'red',
    image: 'VALORANT.webp',
  },
  {
    id: 'phantom-vandal',
    slug: 'phantom-vandal',
    title: 'Phantom vs Vandal: which rifle per map?',
    excerpt: 'Comparing the two main rifles — when to Phantom, when to Vandal, and how to optimize spray for each.',
    date: '2025-03-09',
    readTime: '4 min',
    tag: 'TACTICAL',
    tagColor: 'purple',
    image: 'header.jpg',
  },
  {
    id: 'pubg-battlegrounds',
    slug: 'pubg-battlegrounds',
    title: 'PUBG: Battlegrounds — why it still hits different',
    excerpt: 'From Erangel to Deston: drop spots, loot routes, and why PUBG remains one of the best battle royales for tension and gunplay.',
    date: '2025-03-08',
    readTime: '6 min',
    tag: 'BATTLE ROYALE',
    tagColor: 'green',
    image: 'pubg.jpeg',
  },
]

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) ?? null
}
