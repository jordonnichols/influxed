'use client'
import React, { useEffect, useRef, useState } from 'react'

const HeroWrapper = ({ children }) => {
  const divRef = useRef(null)
  const titleRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)

  function isInViewport(element1, element2) {
    const rect1 = element1.getBoundingClientRect()
    const rect2 = element2.getBoundingClientRect()
    return rect1.top + rect1.height > rect2.height + 8
  }

  useEffect(() => {
    const handleScroll = () => {
      if ((divRef.current, titleRef.current)) {
        setIsVisible(isInViewport(divRef.current, titleRef.current))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative h-[100dvh]" ref={divRef}>
      <div
        className={`${
          isVisible ? 'fixed' : 'absolute bottom-2'
        } z-10 duration-200 w-full cursor-default select-none`}
        ref={titleRef}
      >
        <div className="text-center lg:text-left w-full">
          <h1 className=" 3xl:text-14xl font-bold lg:leading-zero 2xl:text-13xl xl:text-12xl lg:text-11xl inline-block sm:text-8xl sm:text-center text-8xl leading-none">
            influxed
          </h1>
        </div>
        <h2 className="lg:text-left lg:text-3xl font-bold leading-zero text-center text-base sm:text-xl 2xl:ml-5 2xl:text-5xl lg:ml-3">
          <span className="font-light">developments powered by </span>{' '}
          <span className="text-red-500 ">jordon nichols</span>
        </h2>
      </div>
      {children}
    </div>
  )
}

export default HeroWrapper
