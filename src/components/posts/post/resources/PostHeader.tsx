import Avatar from 'src/components/global/AuthorAvatar'
import CoverImage from 'src/components/global/CoverImage'
import Date from 'src/components/posts/post/resources/PostDate'
import PostTitle from 'src/components/posts/post/resources/PostTitle'
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
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div>
          <div className="text-xl font-bold">
            <Date dateString={date} />
          </div>
        </div>
        <div className="border-b rounded-full"></div>
      </div>
    </>
  )
}
