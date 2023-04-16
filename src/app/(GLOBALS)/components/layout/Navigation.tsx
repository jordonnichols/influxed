'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolling, setScrolling] = useState(false)
  const [lastScrollPos, setLastScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const isScrollingUp = currentScrollPos < lastScrollPos

      if (currentScrollPos < 50) {
        setScrolling(false)
      } else {
        setScrolling(!isScrollingUp)
      }
      setLastScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollPos])

  return (
    <div
      className={`w-full border-b border-white/10 text-white sticky backdrop-blur top-0 z-50 transition-transform duration-500 ${
        scrolling ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-[1232px] flex m-auto gap-4 justify-between px-4 py-2 md:py-4">
        <Link
          href="/"
          className="max-h-full flex items-center md:gap-2 gap-1 link-underline link-underline-black"
        >
          <Image
            src="/favicon/icon.png"
            width={32}
            height={32}
            alt="icon"
            className="md:max-h-[32px] max-h-[24px] object-contain"
          />
          <p className="md:text-4xl text-2xl font-bold">influxed</p>
        </Link>
        <div className="flex md:gap-8 gap-4 items-center md:text-xl text-lg font-light">
          <Link href="/posts" className="link-underline link-underline-black">
            Posts
          </Link>
          <Link href="/contact" className="link-underline link-underline-black">
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
