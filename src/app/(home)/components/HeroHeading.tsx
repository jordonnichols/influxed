'use client'

import JordonNichols from 'src/app/(GLOBALS)/components/JordonNichols'

const HeroHeading = () => {
  return (
    <>
      <div className={`sticky top-0 z-10  duration-100 select-none h-0`}>
        <div className="text-center lg:text-left w-full">
          <h1 className=" 3xl:text-14xl font-bold lg:leading-zero 2xl:text-13xl xl:text-12xl lg:text-11xl inline-block sm:text-center text-7xl leading-none">
            influxed
          </h1>
        </div>
        <h2 className="lg:text-left lg:text-3xl font-bold leading-zero text-center text-base 2xl:ml-5 2xl:text-5xl lg:ml-3">
          <span className="font-light">developments, powered by </span>{' '}
          <JordonNichols />
        </h2>
      </div>
    </>
  )
}

export default HeroHeading
