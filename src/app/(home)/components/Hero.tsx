'use client'
import { useEffect, useState } from 'react'

import AsciiObject from './AsciiObject'
import HeroHeading from './HeroText'

export default function Hero() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div
      className="relative"
      style={{
        height: `calc(100vh - ${width > 748 ? '72px' : '48px'})`,
      }}
    >
      <HeroHeading />
      <AsciiObject />
    </div>
  )
}
