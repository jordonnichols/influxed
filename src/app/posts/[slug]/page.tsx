import NotFound from 'src/components/global/NotFound'
import PostPage from 'src/components/posts/post'
import {
  getAllPostsSlugs,
  getPostAndMoreStories,
  getSettings,
} from 'src/lib/sanity.client'

async function getProps(params) {
  const [settings, { post, morePosts }] = await Promise.all([
    getSettings(),
    getPostAndMoreStories(params.slug),
  ])

  return {
    post,
    morePosts,
    settings,
  }
}

export default async function PostsSlugPage({ params }) {
  const { settings, post, morePosts } = await getProps(params)

  if (!post) return <NotFound />

  return <PostPage post={post} morePosts={morePosts} settings={settings} />
}

export async function getStaticPaths() {
  const slugs = await getAllPostsSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: 'blocking',
  }
}
