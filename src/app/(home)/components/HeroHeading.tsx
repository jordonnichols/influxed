'use client'

import JordonNichols from 'src/app/(GLOBALS)/components/JordonNichols'

const HeroHeading = () => {
  return (
    <>
      <div className="z-10 duration-100 select-none h-full w-full relative">
        <div className="text-center lg:text-lef w-full">
          <h1 className=" 3xl:text-14xl font-bold lg:leading-zero 2xl:text-13xl xl:text-12xl lg:text-11xl inline-block sm:text-center text-7xl leading-none">
            influxed
          </h1>
        </div>
        <h2 className="lg:text-lef lg:text-3xl font-bold leading-zero text-center text-base 2xl:ml-5 2xl:text-5xl lg:ml-3">
          <span className="font-light">developments, powered by </span>{' '}
          <JordonNichols />
        </h2>
        <div className="w-full absolute lg:bottom-12 bottom-4">
          <div className="md:w-[500px] w-full flex flex-col gap-2 m-auto px-4">
            <p className="md:text-6xl text-2xl font-bold">
              in·flux·ed{' '}
              <span className="font-light md:text-2xl text-base">
                [ in-fluhks-ed ]
              </span>
            </p>
            <p className="italic font-light md:text-2xl">adjective</p>
            <p className="font-light md:text-2xl">
              : characterized by a rapid integration of new ideas, resources, or
              perspectives, leading to transformative changes or innovations.
            </p>
            <p className="md:text-2xl pl-6">
              <span className="font-bold">·</span>{' '}
              <span className="italic">influxed </span>
              developments
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroHeading
