import MoreStories from 'src/app/(GLOBALS)/components/MoreStories'
import Container from 'src/app/posts/components/BlogContainer'
import BlogHeader from 'src/app/posts/components/BlogHeader'
import HeroPost from 'src/app/posts/components/HeroPost'
import type { Post, Settings } from 'src/lib/sanity.queries'

export interface IndexPageProps {
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = 'TestingDemo', description = 'TestingDemoDesc' } =
    settings || {}

  return (
    <main>
      <Container>
        {/* <BlogHeader title={title} description={description} level={1} /> */}
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
