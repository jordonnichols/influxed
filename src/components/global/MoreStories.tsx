'use client'
import { useState } from 'react'
import type { Post } from 'src/lib/sanity.queries'

import ReportPreview from './ReportPreview'
import DraggableCarousel from 'src/app/(GLOBALS)/components/DraggableCarousel'

export default function MoreStories({ posts }: { posts: Post[] }) {
  const [selectedPreview, setSelectedPreview] = useState()

  return (
    <section>
      <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter lg:text-7xl">
        More Reports
      </h2>
      <DraggableCarousel className="!p-0">
        {posts.map((post, i) => (
          <ReportPreview
            key={i}
            number={i}
            selectedPreview={selectedPreview}
            setSelectedPreview={setSelectedPreview}
            date={post.date}
            image={post.coverImage}
            excerpt={post.excerpt}
            category={post.category?.title}
            title={post.title}
            slug={post.slug}
          />
        ))}
      </DraggableCarousel>
    </section>
  )
}
