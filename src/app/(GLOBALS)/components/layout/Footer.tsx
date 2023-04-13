import Link from 'next/link'

import JordonNichols from '../JordonNichols'

export default function Footer() {
  return (
    <div className="w-full border-t border-white/10">
      <div className="lg:flex justify-around md:py-48 py-24 lg:max-w-[1228px] m-auto w-fit px-8">
        <div className="lg:w-1/4 w-full mb-4">
          <h5 className="sm:text-2xl text-xl font-light mb-2 relative text-center w-fit">
            INFLUXED Developments
            <span className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-white/25 rounded-full"></span>
          </h5>
          <p className="sm:text-lg">
            Explore the forefront of innovation, empowering your digital journey
            and enhancing daily experiences. Embrace the future, today.
          </p>
        </div>
        <div className="lg:w-fit w-full mb-4">
          <h5 className="sm:text-2xl text-xl font-light mb-2 relative text-center w-fit">
            Socials{' '}
            <span className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-white/25 rounded-full"></span>
          </h5>
          <a
            rel="noopener norefferer"
            target="_blank"
            className="block sm:text-lg link-underline link-underline-black"
            href="https://github.com/influxion"
          >
            Github
          </a>
          <a
            rel="noopener norefferer"
            target="_blank"
            className="block sm:text-lg link-underline link-underline-black"
            href="https://www.linkedin.com/in/jordon-nichols/"
          >
            LinkedIn
          </a>
        </div>
        <div className="lg:w-fit w-full mb-4">
          <h5 className="sm:text-2xl text-xl font-light mb-2 relative text-center w-fit">
            Links
            <span className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-white/25 rounded-full"></span>
          </h5>
          <Link
            href="/"
            className="block sm:text-lg link-underline link-underline-black"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="block sm:text-lg link-underline link-underline-black"
          >
            Posts
          </Link>
          <Link
            href="/contact"
            className="block sm:text-lg link-underline link-underline-black"
          >
            Contact
          </Link>
        </div>
        <div className="lg:w-fit w-full mb-4">
          <h5 className="sm:text-2xl text-xl font-light mb-2 relative text-center w-fit">
            Contact
            <span className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-white/25 rounded-full"></span>
          </h5>
          <a
            href="mailto:jordon@influxed.io"
            className="sm:text-lg block link-underline link-underline-black"
          >
            jordon@influxed
          </a>
        </div>
      </div>
      <div className="md:p-8 flex md:justify-between text-white/50 border-t border-white/10 md:flex-row flex-col gap-2 items-center text-xs sm:text-sm md:text-base py-4 px-2">
        <p className="text-center">
          Copyright © {new Date().getFullYear()}. INFLUXED Developments. All
          rights reserved.
        </p>
        <p>
          Built with care by <JordonNichols />
        </p>
      </div>
    </div>
  )
}
