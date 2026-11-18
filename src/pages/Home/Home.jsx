import About from './sections/About/About.jsx'
import Books from './sections/Books/Books.jsx'
import CallToAction from './sections/CallToAction/CallToAction.jsx'
import Hero from './sections/Hero/Hero.jsx'
import HowItWorks from './sections/HowItWorks/HowItWorks.jsx'
import Services from './sections/Services/Services.jsx'

export default function Home({ onSelectService }) {
  return (
    <>
      <Hero />
      <About />
      <Services onSelectService={onSelectService} />
      <HowItWorks />
      <Books />
      <CallToAction />
    </>
  )
}
