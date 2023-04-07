'use client'
import React, { useEffect, useRef, useState } from 'react'

const HeroWrapper = ({ children }) => {
  return (
    <div className="h-[100dvh]">
      <div className={`sticky top-0 z-10 duration-100 cursor-none select-none`}>
        <div className="text-center lg:text-left w-full">
          <h1 className=" 3xl:text-14xl font-bold lg:leading-zero 2xl:text-13xl xl:text-12xl lg:text-11xl inline-block sm:text-center text-7xl leading-none">
            influxed
          </h1>
        </div>
        <h2 className="lg:text-left lg:text-3xl font-bold leading-zero text-center text-base 2xl:ml-5 2xl:text-5xl lg:ml-3">
          <span className="font-light">developments powered by </span>{' '}
          <span
            className="text-red-500 drop"
            style={{ filter: 'drop-shadow(0.1px 0px 0px 10px #FF6E6E)' }}
          >
            jordon nichols
          </span>
        </h2>
      </div>
      {children}
    </div>
  )
}

export default HeroWrapper
