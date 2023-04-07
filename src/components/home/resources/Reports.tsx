'use client'
import { useEffect, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import ReportPreview from 'src/components/global/ReportPreview'
import { getAllPosts } from 'src/lib/sanity.client'
import { Post } from 'src/lib/sanity.queries'
import DraggableCarousel from './DraggableCarousel'

export default function Reports() {
  const divRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedPreview, setSelectedPreview] = useState()
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
      className="lg:py-48 py-24 max-w-[1232px] m-auto px-4 overflow-hidden w-screen"
      ref={containerRef}
    >
      <div className="flex lg:gap-16 lg:mb-16 flex-col lg:flex-row ">
        <div className="flex lg:gap-16 gap-6 lg:justify-start justify-center">
          <div
            className="rounded lg:flex flex-col hidden gap-1 relative w-2"
            ref={divRef}
          >
            <div
              className={`bg-red-500 h-4 rounded absolute w-full`}
              style={{
                top: `calc(${scrollerPercent}% - ${scrollerPercent * 0.16}px)`,
              }}
            ></div>
            <div className="bg-white/5 h-full rounded"></div>
          </div>

          <h2 className="text-xl lg:text-4xl xl:text-5xl font-light flex flex-col gap-1 py-4 whitespace-nowrap lg:text-left text-center">
            <span>Showcasing the art</span>
            <span>and science of building and</span>
            <span>breaking down secure systems.</span>
          </h2>
        </div>
        <p className="mt-auto py-4 text-white/50 lg:text-base text-sm hidden lg:block">
          <span>
            Explore a comprehensive collection of articles and resources that
          </span>
          <span>
            delve into the intricate world of cybersecurity. Uncover the latest
          </span>
          <span>
            trends, innovative strategies, and expert advice on designing,
          </span>
          <span>implementing, and maintaining secure systems.</span>
        </p>
        <div className="lg:hidden block mb-6 text-white/50 text-sm text-center">
          Explore a comprehensive collection of articles and resources that
          delve into the intricate world of cybersecurity. Uncover the latest
          trends, innovative strategies, and expert advice on designing,
          implementing, and maintaining secure systems.
        </div>
      </div>
      <DraggableCarousel
        screenWidth={
          containerRef.current
            ? containerRef.current.getBoundingClientRect().width
            : 0
        }
      >
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
