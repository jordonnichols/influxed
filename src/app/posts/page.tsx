import IndexPage from 'src/components/posts/allPosts'
import { getAllPosts, getSettings } from 'src/lib/sanity.client'

async function getProps() {
  const [settings, posts = []] = await Promise.all([
    getSettings(),
    getAllPosts(),
  ])

  return {
    posts,
    settings,
  }
}

export default async function PostsPage() {
  const { posts, settings } = await getProps()

  return <IndexPage posts={posts} settings={settings} />
}
