'use client'
import type { Post } from 'src/lib/sanity.queries'
import ReportPreview from './ReportPreview'
import { useState } from 'react'

export default function MoreStories({ posts }: { posts: Post[] }) {
  const [selectedPreview, setSelectedPreview] = useState()

  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Reports
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post, i) => (
          <ReportPreview
            number={i}
            setSelectedPreview={setSelectedPreview}
            selectedPreview={selectedPreview}
            title={post.title}
            key={i}
            category={post.category?.title}
            image={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
