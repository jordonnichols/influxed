import MoreStories from 'src/components/global/MoreStories'
import Container from 'src/components/posts/allPosts/resources/BlogContainer'
import BlogHeader from 'src/components/posts/allPosts/resources/BlogHeader'
import HeroPost from 'src/components/posts/allPosts/resources/HeroPost'
import * as demo from 'src/lib/demo.data'
import type { Post, Settings } from 'src/lib/sanity.queries'

export interface IndexPageProps {
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <main>
      <Container>
        <BlogHeader title={title} description={description} level={1} />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  )
}
