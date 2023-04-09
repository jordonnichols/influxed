import AsciiObject from './components/AsciiObject'
import HeroHeading from './components/HeroHeading'
import Reports from './components/Reports'
import ScrollDown from './components/ScrollDown'

export default function HomePage() {
  return (
    <>
      <div className="h-screen">
        <HeroHeading />
        <AsciiObject />
        <ScrollDown />
      </div>
      <Reports />
    </>
  )
}
