import React from 'react'

export default function Contact() {
  return (
    <div className="h-[500px] relative mb-16 max-w-full">
      <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
        <p className="lg:text-8xl text-4xl font-light">
          Let&apos;s get in touch!
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 4000 500"
        width="4000"
        height="500"
        opacity="0.5"
      >
        <defs>
          <radialGradient id="ffflux-gradient">
            <stop offset="0%" stopColor="hsl(0, 0%, 0%)"></stop>
            <stop offset="100%" stopColor="hsl(0, 0%, 0%)"></stop>
          </radialGradient>
          <filter
            id="ffflux-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.005 0.003"
              numOctaves="2"
              seed="2"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feGaussianBlur
              stdDeviation="100 100"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              edgeMode="duplicate"
              result="blur"
            ></feGaussianBlur>
            <feBlend
              mode="soft-light"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              in2="blur"
              result="blend"
            ></feBlend>
            <feColorMatrix
              type="saturate"
              values="3"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="blend"
              result="colormatrix"
            ></feColorMatrix>
          </filter>
        </defs>
        <rect
          width="4000"
          height="500"
          fill="url(#ffflux-gradient)"
          filter="url(#ffflux-filter)"
        ></rect>
      </svg>
    </div>
  )
}
