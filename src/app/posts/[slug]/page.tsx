import NotFound from 'src/components/global/NotFound'
import PostPage from 'src/app/posts/[slug]/components'
import {
  getAllPostsSlugs,
  getPostAndMoreStories,
  getSettings,
} from 'src/lib/sanity.client'

async function getProps(params) {
  const { post, morePosts } = await Promise.resolve(
    getPostAndMoreStories(params.slug)
  )

  return {
    post,
    morePosts,
  }
}

export default async function PostsSlugPage({ params }) {
  const { post, morePosts } = await getProps(params)

  if (!post) return <NotFound />

  return <PostPage post={post} morePosts={morePosts} />
}

export async function getStaticPaths() {
  const slugs = await getAllPostsSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: 'blocking',
  }
}
