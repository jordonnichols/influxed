import { notFound } from 'next/navigation'
import MoreStories from 'src/components/global/MoreStories'
import SectionSeparator from 'src/components/global/SectionSeparator'
import Container from 'src/components/posts/allPosts/resources/BlogContainer'
import BlogHeader from 'src/components/posts/allPosts/resources/BlogHeader'
import PostBody from 'src/app/posts/[slug]/components/PostBody'
import PostHeader from 'src/app/posts/[slug]/components/PostHeader'
import PostTitle from 'src/app/posts/[slug]/components/PostTitle'
import type { Post } from 'src/lib/sanity.queries'

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const { preview, morePosts = NO_POSTS, post } = props

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
