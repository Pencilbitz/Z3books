import { useState } from 'react'
import './App.css'
import {
  ArrowRight,
  Check,
  Close,
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  Manuscript,
  Megaphone,
  Menu,
  OpenBook,
  PenTool,
  Phone,
  Pin,
  Printer,
  Truck,
  YouTube,
} from './components/Icons.jsx'
import { BookCover, BookStack, GoldBook, HeroArt } from './components/Illustrations.jsx'

// Replace with your own team photo (e.g. import from ./assets).
const YEAR = new Date().getFullYear()

const TEAM_PHOTO =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80'

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Our Books', href: '#books' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES = [
  { icon: Manuscript, title: 'Manuscript Support', text: 'Refine and prepare your work for publishing' },
  { icon: OpenBook, title: 'Editing & Proofreading', text: 'Ensure clarity, accuracy and quality' },
  { icon: PenTool, title: 'Book Design & Layout', text: 'Create a professional and reader-friendly format' },
  { icon: Printer, title: 'Printing', text: 'High-quality printing with multiple options' },
  { icon: Truck, title: 'Distribution', text: 'Reach readers through reliable channels' },
  { icon: Megaphone, title: 'Marketing Support', text: 'Improve visibility and reader engagement' },
]

const REASONS = [
  'End-to-end publishing support',
  'Experienced and dedicated team',
  'High-quality and cost-effective solutions',
  'Author-friendly process',
  'Wide reach and global distribution',
]

const BOOKS = [
  { title: 'The Land of Green', scene: 'green' },
  { title: 'Back to the Roots', scene: 'roots' },
  { title: 'Mountains & Mind', scene: 'mountains' },
  { title: 'Echoes of Nature', scene: 'sunset' },
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand">
          Zedd 3+ Books
        </a>
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {NAV.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={i === 0 ? 'active' : undefined}
              aria-current={i === 0 ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta-mobile" onClick={() => setOpen(false)}>
            Publish With Us <ArrowRight />
          </a>
        </nav>
        <a href="#contact" className="btn btn-primary btn-sm nav-cta">
          Publish With Us <ArrowRight />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>
            Your <span className="accent">Book.</span>
            <br />
            Your <span className="accent">Name.</span>
          </h1>
          <span className="rule" />
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
          <HeroArt />
        </div>
      </div>
      <svg className="hero-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40C300 -10 560 -10 820 50s420 80 620 -10V120H0z" fill="#f6e6d4" opacity="0.7" />
        <path d="M380 120C760 118 1120 80 1440 6V120z" fill="#8b1530" />
      </svg>
    </section>
  )
}

function About() {
  const [imgFailed, setImgFailed] = useState(false)
  return (
    <section id="about" className="about">
      <div className="about-media">
        {imgFailed ? (
          <div className="about-photo about-photo--fallback" role="img" aria-label="Our team" />
        ) : (
          <img
            className="about-photo"
            src={TEAM_PHOTO}
            alt="The Zedd 3+ Books team discussing a manuscript"
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        )}
      </div>
      <div className="about-copy">
        <h2>
          About <span className="accent">Us</span>
        </h2>
        <p>
          Zedd 3+ Books is a professional publishing partner that helps authors, researchers, and
          institutions transform ideas into high-quality books. We combine editorial expertise,
          creative design, precise printing and reliable distribution to bring your work to readers
          worldwide.
        </p>
      </div>
    </section>
  )
}

function SectionTitle({ lead, accent }) {
  return (
    <div className="section-title">
      <span className="line" />
      <h2>
        {lead} <span className="accent">{accent}</span>
      </h2>
      <span className="line" />
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <SectionTitle lead="Our" accent="Services" />
        <div className="service-grid">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <article key={title} className="service-card">
              <span className="service-icon">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="center">
          <a href="#packages" className="btn btn-primary">
            Explore All Services <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

function WhyChoose() {
  return (
    <section id="packages" className="why">
      <div className="why-band">
        <div className="why-books">
          <BookStack />
        </div>
        <div className="why-content">
          <h2>
            Why Choose
            <br />
            <strong>Zedd 3+ Books?</strong>
          </h2>
          <ul className="why-list">
            {REASONS.map((r) => (
              <li key={r}>
                <span className="tick">
                  <Check />
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Books() {
  return (
    <section id="books" className="books">
      <div className="container">
        <SectionTitle lead="Our" accent="Books" />
        <p className="section-sub">
          Explore a wide range of published titles across diverse subjects, authored by researchers,
          academicians and experts.
        </p>
        <div className="book-grid">
          {BOOKS.map((b) => (
            <article key={b.title} className="book-item">
              <div className="book-stand">
                <BookCover scene={b.scene} title={b.title} />
              </div>
              <h3>{b.title}</h3>
              <a href="#books" className="btn btn-primary btn-xs">
                View Book <ArrowRight width="13" height="13" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="cta-wrap">
      <div className="container">
        <div className="cta">
          <GoldBook />
          <div className="cta-copy">
            <span className="eyebrow">Ready to publish?</span>
            <h2>Take your ideas from a manuscript to a published book with us.</h2>
            <div className="btn-row">
              <a href="#contact" className="btn btn-light">
                Get Started <ArrowRight />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand brand-lg">
              Zedd <span className="accent">3+</span> Books
            </a>
            <p>
              A trusted publishing partner for authors, researchers and institutions, delivering
              quality books from manuscript to reader.
            </p>
            <div className="socials">
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="LinkedIn"><LinkedIn /></a>
              <a href="#" aria-label="YouTube"><YouTube /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {NAV.map((n) => (
                <li key={n.label}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.title}><a href="#services">{s.title}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-contact">
          <a href="mailto:info@zedd3books.com"><Mail /> info@zedd3books.com</a>
          <a href="tel:+919876543210"><Phone /> +91 98765 43210</a>
          <span><Pin /> Chennai, Tamil Nadu, India</span>
        </div>
        <p className="copyright">© {YEAR} Zedd 3+ Books. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Books />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
