import { ArrowRight } from '../../components/common/Icons.jsx'
import { REASONS, STEP_DETAILS, STEPS } from '../../data/process.js'
import { SERVICES } from '../../data/services.js'
import aboutTeam from '../../assets/images/about-team-bg.webp'
import processBookIcon from '../../assets/images/process-book-icon.png'
import bookStackIllustration from '../../assets/images/process-books.png'
import heroDesk from '../../assets/images/textbook-hero-desk-hd.jpg'
import BookListing from '../Books/BookListing.jsx'
import './Home.css'

export default function Home({ onSelectService }) {
  const handleServiceClick = (serviceId) => (event) => {
    event.preventDefault()
    if (onSelectService) {
      onSelectService(serviceId)
    } else {
      window.location.hash = `#service/${serviceId}`
    }
  }

  return (
    <div className="home-redesign">
      <section id="home" className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-eyebrow"><span /> Publishing, made personal</p>
            <h1>
              From first idea
              <br />
              to <em>bookshelf.</em>
            </h1>
            <p className="home-hero-intro">
              Your work deserves more than a publisher. Get a thoughtful partner for every step,
              from the first edit to the finished book in a reader&apos;s hands.
            </p>
            <div className="home-hero-actions">
              <a className="btn btn-primary" href="#contact">
                Start your publishing journey <ArrowRight />
              </a>
              <a className="home-text-link" href="#services">
                Explore our services <span aria-hidden="true">↘</span>
              </a>
            </div>
            <div className="home-hero-note">
              <span className="home-note-mark" aria-hidden="true">Z</span>
              <p><strong>Your book. Your name.</strong><br />Our expertise, beside you.</p>
            </div>
          </div>

          <div className="home-hero-art">
            <img
              src={heroDesk}
              alt="A warm, book-filled study with a manuscript workspace"
              width="1360"
              height="906"
              fetchPriority="high"
            />
            <div className="home-image-caption">
              <span>01 / THE BEGINNING</span>
              <p>Every great book starts with an idea.</p>
            </div>
            <span className="home-art-stamp" aria-hidden="true">IDEAS<br />IN PRINT</span>
          </div>
        </div>
        <div className="container home-proof-row" aria-label="What we help you do">
          <p><strong>01</strong><span>One partner, every step</span></p>
          <p><strong>07</strong><span>Connected services</span></p>
          <p><strong>∞</strong><span>Room for your next idea</span></p>
        </div>
      </section>

      <section id="about" className="home-about">
        <div className="container home-about-grid">
          <div className="home-about-photo">
            <img
              src={aboutTeam}
              alt="The Zedd 3+ Books team collaborating on a book project"
              width="2023"
              height="777"
              loading="lazy"
            />
            <span className="home-photo-label">GOOD WORK, MADE TOGETHER</span>
          </div>
          <div className="home-about-copy">
            <p className="home-eyebrow"><span /> A little about us</p>
            <h2>More than a service.<br /><em>A team in your corner.</em></h2>
            <p>
              Zedd 3+ Books brings publishing, academic, and creative support together under one
              roof. We keep the process clear, listen closely, and help you make confident decisions
              at every stage.
            </p>
            <a className="home-text-link" href="#packages">
              See how we work <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="home-services">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <p className="home-eyebrow"><span /> What we bring to the table</p>
              <h2>Big ideas need<br /><em>the right support.</em></h2>
            </div>
          </div>
          <div className="home-service-grid">
            {SERVICES.map(({ id, title, text, badge, cardImage, cardDetail }, index) => (
              <a
                key={id}
                className="home-service-card"
                href={`#service/${id}`}
                onClick={handleServiceClick(id)}
              >
                <img className="home-service-image" src={cardImage} alt="" aria-hidden="true" loading="lazy" />
                <span className="home-service-shade" aria-hidden="true" />
                <span className="home-service-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="home-service-category">{badge}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <p className="home-service-detail">{cardDetail}</p>
                <span className="home-service-link">Explore service <ArrowRight /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="home-process">
        <img className="home-process-books" src={bookStackIllustration} alt="" aria-hidden="true" />
        <div className="container">
          <div className="home-process-heading">
            <p className="home-eyebrow"><span /> Clear from day one</p>
            <h2>A good process makes<br /><em>great work possible.</em></h2>
            <p className="home-process-intro">
              No guesswork, no surprises. Just a clear path with your approval at every turn.
            </p>
          </div>
          <div className="home-steps">
            {STEPS.map((step, index) => (
              <article className="home-step" key={step}>
                <span className="home-step-number">0{index + 1}</span>
                <img className="home-step-icon" src={processBookIcon} alt="" aria-hidden="true" />
                <span className="home-step-rule" aria-hidden="true" />
                <p>{step}</p>
                <p className="home-step-detail">{STEP_DETAILS[index]}</p>
              </article>
            ))}
          </div>
          <div className="home-promise">
            <div>
              <span className="home-promise-star" aria-hidden="true">✳</span>
              <p>
                Thoughtful work.<br />
                <strong>Nothing hidden.</strong>
                <span className="home-promise-note">
                  Clear plans, fair pricing, and your approval at every stage.
                </span>
              </p>
            </div>
            <ul>
              {REASONS.map((reason) => <li key={reason}>{reason}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <BookListing />

      <section className="home-contact-cta">
        <div className="container home-contact-inner">
          <div>
            <p className="home-eyebrow"><span /> Your next chapter starts here</p>
            <h2>Have an idea<br />you can&apos;t stop thinking about?</h2>
          </div>
          <div className="home-contact-action">
            <p>Let&apos;s turn it into a clear, practical plan. The first conversation is on us.</p>
            <a className="btn btn-light" href="#contact">
              Let&apos;s talk about your project <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
