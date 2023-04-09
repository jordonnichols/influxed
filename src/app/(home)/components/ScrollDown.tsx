'use client'
import React, { useEffect, useState } from 'react'
import useMobileDetect from 'src/hooks/useMobileDetect'

export default function ScrollDown() {
  const isMobile = useMobileDetect()
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY === 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isMobile) {
    return null
  }

  return (
    <div
      className={`fixed bottom-5 right-1/2 translate-x-1/2 cursor-pointer transition-opacity duration-300 ease-in-out bg-red-500/75 rounded-full p-2 ${
        !isVisible ? '!opacity-0' : ''
      }`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="text-white"
        viewBox="0 0 16 16"
      >
        <path d="M8 9.5l-5.5-5.5L1 5.5l6.5 6.5L8 12l.5-.5 6.5-6.5L13.5 4 8 9.5z" />
      </svg>
    </div>
  )
}
