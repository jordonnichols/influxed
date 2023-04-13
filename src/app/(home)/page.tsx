import AboutMe from './components/AboutMe'
import AsciiObject from './components/AsciiObject'
import Contact from './components/Contact'
import HeroHeading from './components/HeroHeading'
import Reports from './components/Reports'
import ScrollDown from './components/ScrollDown'

export default function HomePage() {
  return (
    <>
      <HeroHeading />
      <div className="h-screen top-0 bg-zinc-800">
        <AsciiObject />
        <ScrollDown />
      </div>
      <AboutMe />
      <Reports />
      <Contact />
    </>
  )
}
