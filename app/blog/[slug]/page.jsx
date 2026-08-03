import { BlogPost } from '../../../src/routes/BlogPost'
import { BLOG_POSTS } from '../../../src/lib/config'
import { BLOG_CONTENT } from '../../../src/lib/blog'

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  const content = BLOG_CONTENT[slug]
  return {
    title: post ? `${post.title}-Abhishek Sharma` : 'Blog-Abhishek Sharma',
    description: content?.intro || post?.excerpt || '',
  }
}

export default function Page() {
  return <BlogPost />
}
