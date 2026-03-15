import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

export default function Post({ source, frontMatter }: any) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{frontMatter.title}</h1>
      <div className="text-sm text-muted mb-6">{frontMatter.date}</div>
      <article className="prose dark:prose-invert">
        <MDXRemote {...source} />
      </article>
    </div>
  )
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'content', 'posts')
  const filenames = fs.readdirSync(postsDir)
  const paths = filenames.map(name => ({ params: { slug: name.replace(/\.mdx?$/, '') } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const postsDir = path.join(process.cwd(), 'content', 'posts')
  const filePath = path.join(postsDir, `${params.slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)
  const mdxSource = await serialize(content)
  return { props: { source: mdxSource, frontMatter: data } }
}
