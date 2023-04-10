import AsciiObject from './components/AsciiObject'
import HeroHeading from './components/HeroHeading'
import Reports from './components/Reports'
import ScrollDown from './components/ScrollDown'

export default function HomePage() {
  return (
    <>
      <div className="h-screen">
        <div className="absolute top-1/2 z-50 right-1/2 translate-x-1/2">
          UNDER CONSTRUCTION
        </div>
        <HeroHeading />
        <AsciiObject />
        <ScrollDown />
      </div>
      <Reports />
    </>
  )
}
