import AboutMe from './components/AboutMe'
import AsciiObject from './components/AsciiObject'
import Contact from './components/Contact'
import Hero from './components/Hero'
import HeroHeading from './components/HeroText'
import Reports from './components/Reports'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Reports />
      <Contact />
    </>
  )
}
