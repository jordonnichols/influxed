import AsciiObject from './resources/AsciiObject'
import HeroWrapper from './resources/HeroWrapper'
import Reports from './resources/Reports'

export default function HomePage() {
  return (
    <>
      <HeroWrapper>
        <AsciiObject />
      </HeroWrapper>
      <Reports />
    </>
  )
}
