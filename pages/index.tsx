import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

type Post = { slug: string; title: string; date: string }

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Jamie Blog</h1>
        <p className="mb-6">Next + MDX + Tailwind starter. Posts:</p>
        <ul className="space-y-4">
          {posts.map(p => (
            <li key={p.slug} className="border-b pb-2">
              <Link href={`/posts/${p.slug}`} className="text-xl font-semibold">
                {p.title}
              </Link>
              <div className="text-sm text-muted">{p.date}</div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'content', 'posts')
  const filenames = fs.readdirSync(postsDir)
  const posts = filenames.map(name => {
    const file = fs.readFileSync(path.join(postsDir, name), 'utf8')
    const { data } = matter(file)
    return { slug: name.replace(/\.mdx?$/, ''), title: data.title || 'Untitled', date: data.date || '' }
  })
  return { props: { posts } }
}
