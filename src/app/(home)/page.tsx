import AboutMe from './components/AboutMe'
import AsciiObject from './components/AsciiObject'
import Contact from './components/Contact'
import HeroHeading from './components/HeroHeading'
import Reports from './components/Reports'

export default function HomePage() {
  return (
    <>
      <div className="h-screen">
        <HeroHeading />
        <AsciiObject />
      </div>
      <AboutMe />
      <Reports />
      <Contact />
    </>
  )
}
