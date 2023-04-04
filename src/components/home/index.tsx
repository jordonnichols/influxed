import Footer from '../layout/Footer'
import AsciiObject from './resources/AsciiObject'
import HeroWrapper from './resources/HeroWrapper'

export default function HomePage() {
  return (
    <main className="max-w-[100dvw]">
      <HeroWrapper>
        <AsciiObject />
        <h1 className="text-4xl font-bold absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 select-none text-center">
          UNDER CONSTRUCTION
        </h1>
      </HeroWrapper>
      <Footer />
    </main>
  )
}
