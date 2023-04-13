import React from 'react'

export default function AboutMe() {
  return (
    <div className="h-screen w-full flex flex-col justify-center bg-neutral-900 z-20 relative">
      <div className="lg:py-48 py-24 max-w-[1232px] m-auto lg:overflow-visible overflow-hidden px-4">
        <div className="md:w-[500px] w-full flex flex-col gap-2">
          <p className="md:text-6xl text-2xl font-bold">
            in·flux·ed{' '}
            <span className="font-thin md:text-2xl">[ in-fluhks-ed ]</span>
          </p>
          <p className="italic font-thin md:text-2xl">adjective</p>
          <p className="font-thin md:text-2xl">
            <span>
              : characterized by a rapid integration of new ideas, resources, or
              perspectives, leading to transformative changes or innovations.
            </span>
          </p>
          <p className="font-thin md:text-2xl pl-6">
            <span className="font-bold">·</span>{' '}
            <span className="italic">influxed </span>
            developments
          </p>
        </div>
      </div>
    </div>
  )
}
