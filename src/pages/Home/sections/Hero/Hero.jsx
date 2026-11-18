import heroCollage from '../../../../assets/images/hero-collage.png'
import { ArrowRight } from '../../../../components/common/Icons.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>
            Your <span className="accent">Book</span>. Your <span className="accent">Name.</span>
          </h1>
          <p>
            Zedd 3+ Books takes your manuscript from first draft to finished book, with editing,
            design, printing and distribution under one roof.
          </p>
          <div className="btn-row">
            <a href="#contact" className="btn btn-primary">
              Publish With Us <ArrowRight />
            </a>
            <a href="#services" className="btn btn-outline">
              View Our Services
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            className="hero-art"
            src={heroCollage}
            alt="An open book with a glowing light bulb rising from it, surrounded by a collage of ideas"
            width="620"
            height="413"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
