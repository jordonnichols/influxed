import AsciiObject from './AsciiObject'
import HeroHeading from './HeroHeading'
import Reports from './Reports'

export default function HomePage() {
  return (
    <>
      <div className="h-screen">
        <HeroHeading />
        <AsciiObject />
      </div>
      <Reports />
    </>
  )
}
