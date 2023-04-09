import PostTitle from 'src/app/posts/[slug]/components/PostTitle'
import type { Post } from 'src/lib/sanity.queries'

export default function PostHeader(
  props: Pick<Post, 'title' | 'date' | 'author'>
) {
  const { title, date, author } = props
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="mx-auto max-w-2xl mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="block">
            <p className="lg:text-xl text-base font-light">{author?.name}</p>
          </div>
          <div className="lg:text-xl text-base font-light">
            {new Date(date!).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
        <div className="border-b rounded-full"></div>
      </div>
    </>
  )
}
