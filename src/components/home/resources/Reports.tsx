'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import ReportPreview from 'src/components/global/ReportPreview'
import { getAllPosts } from 'src/lib/sanity.client'
import { urlForImage } from 'src/lib/sanity.image'
import { Post } from 'src/lib/sanity.queries'

export default function Reports() {
  const divRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [scrollerPercent, setScrollerPercent] = useState(0)

  useEffect(() => {
    ;(async () => {
      const posts = await Promise.resolve(getAllPosts())

      setPosts(posts)
    })()

    // scroll events
    const handleScroll = () => {
      console.log(window.innerHeight)
      if (divRef.current) {
        const rect1 = divRef.current.getBoundingClientRect()
        if (rect1.y < window.innerHeight && rect1.y > 0) {
          setScrollerPercent(
            Math.abs(rect1.y / ((window.innerHeight * 0.8) / 100) - 100)
          )
        }
        if (rect1.y > window.innerHeight * 0.8) setScrollerPercent(0)
        if (rect1.y < 0) setScrollerPercent(100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className="py-48 max-w-[1280px] m-auto px-4 overflow-hidden"
      ref={containerRef}
    >
      <div className="flex lg:gap-16 lg:mb-16 flex-col lg:flex-row">
        <div className="flex lg:gap-16 gap-6">
          <div
            className="lg:w-4 rounded flex flex-col gap-1 relative w-2"
            ref={divRef}
          >
            <div
              className={`bg-red-500 h-4 rounded absolute w-full`}
              style={{ top: `${scrollerPercent}%` }}
            ></div>
            <div className="bg-white/5 h-full rounded"></div>
          </div>

          <h2 className="text-xl lg:text-5xl font-light flex flex-col gap-1 py-4 whitespace-nowrap">
            <span>Showcasing the art</span>
            <span>and science of building and</span>
            <span>breaking down secure systems.</span>
          </h2>
        </div>
        <p className="mt-auto py-4 text-white/50 lg:text-base text-sm hidden lg:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolorem quo sapiente sint? Debitis, eligendi dignissimos soluta, porro
          voluptas explicabo vel, praesentium neque illo suscipit dolor aliquam
          hic molestias minima.
        </p>
        <div className="lg:hidden block mb-6"></div>
      </div>
      <Draggable
        axis="x"
        bounds={{
          left:
            carouselRef.current && containerRef.current
              ? -carouselRef.current.getBoundingClientRect().width +
                containerRef.current.getBoundingClientRect().width
              : 0,
          right: 0,
        }}
        defaultPosition={{ x: 0, y: 0 }}
      >
        <div
          className="grid grid-flow-col lg:gap-12 gap-6 absolute duration-200"
          ref={carouselRef}
        >
          {posts.map((post, i) => (
            <ReportPreview
              key={i}
              date={post.date}
              image={post.coverImage}
              excerpt={post.excerpt}
              category={post.category?.title}
              title={post.title}
              slug={post.slug}
            />
          ))}
        </div>
      </Draggable>
      <div className="w-full flex justify-center mt-[500px]">
        {/* <Link
          href="/posts"
          className="bg-red-600 hover:bg-red-500 duration-200 border-2 border-white/25 px-4 py-2 rounded-full text-xl"
        >
          All Reports
        </Link> */}
      </div>
      <div className="min-h-[100vh]"></div>
    </div>
  )
}
