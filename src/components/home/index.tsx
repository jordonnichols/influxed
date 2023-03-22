import Footer from '../layout/Footer'
import AsciiObject from './resources/AsciiObject'
import HeroWrapper from './resources/HeroWrapper'

export default function HomePage() {
  return (
    <main className="max-w-[100dvw]">
      <HeroWrapper>
        <AsciiObject />
      </HeroWrapper>
      <Footer />
    </main>
  )
}
