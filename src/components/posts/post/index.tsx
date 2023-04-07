import { notFound } from 'next/navigation'
import MoreStories from 'src/components/global/MoreStories'
import SectionSeparator from 'src/components/global/SectionSeparator'
import Container from 'src/components/posts/allPosts/resources/BlogContainer'
import BlogHeader from 'src/components/posts/allPosts/resources/BlogHeader'
import PostBody from 'src/components/posts/post/resources/PostBody'
import PostHeader from 'src/components/posts/post/resources/PostHeader'
import PostTitle from 'src/components/posts/post/resources/PostTitle'
import type { Post, Settings } from 'src/lib/sanity.queries'

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props

  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <main>
      <Container>
        {preview && !post ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <PostHeader
                title={post.title}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </main>
  )
}
