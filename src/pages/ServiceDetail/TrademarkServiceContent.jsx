import {
  ArrowRight,
  Bell,
  Check,
  Copyright,
  DocumentCheck,
  FileEdit,
  Search,
  ShieldCheck,
  StatusCheck,
} from '../../components/common/Icons.jsx'
import { CONTACT } from '../../data/contact.js'
import trademarkAudienceCreative from '../../assets/images/trademark-audience-creative.png'
import trademarkAudiencePublishing from '../../assets/images/trademark-audience-publishing.png'
import trademarkHeroCard from '../../assets/images/trademark-copyright-hero.png'
import trademarkQuill from '../../assets/images/trademark-quill.png'
import './TrademarkServiceContent.css'

const instruments = [
  {
    id: 'trademark',
    category: 'Commerce & Identity',
    symbol: 'TM / ®',
    title: 'Trademark',
    tagline: 'Protects names, logos and slogans that identify your brand.',
    description:
      'Secures distinctive commercial identifiers in the marketplace and helps consumers distinguish your goods and academic imprints from imitators.',
    steps: [
      'Search national and global databases for conflicting active marks.',
      'Identify the correct Nice classes and prepare the application.',
      'File with the Trademark Registry and respond to examination queries.',
    ],
    tags: ['Trademark Search', 'Trademark Filing', 'Objection Replies'],
    action: 'Start Trademark Filing',
  },
  {
    id: 'copyright',
    category: 'Creative & Literary Expression',
    symbol: '©',
    title: 'Copyright',
    tagline: 'Protects original works such as books, articles, music, code and artwork.',
    description:
      'Protects original literary and artistic expression from unauthorized reproduction, distribution, public performance and adaptation.',
    steps: [
      'Prepare authorship details and verify the original work.',
      'Submit the required deposit copy through statutory e-filing.',
      'Track the application through review and registration.',
    ],
    tags: ['Copyright Registration', 'Status Tracking', 'Renewal Reminders'],
    action: 'Protect Creative Work',
  },
]

const offers = [
  { title: 'Trademark search', description: 'We check whether your name or logo is already in use.', icon: Search },
  { title: 'Trademark filing', description: 'We prepare and file your trademark application.', icon: FileEdit },
  { title: 'Copyright registration', description: 'Support for books, articles, software, music and artwork.', icon: Copyright },
  { title: 'Objection replies', description: 'Help in responding to objections and notices.', icon: DocumentCheck },
  { title: 'Status tracking', description: 'Regular updates on where your application stands.', icon: StatusCheck },
  { title: 'Renewal reminders', description: 'We remind you before your protection needs renewal.', icon: Bell },
]

const processSteps = [
  { step: '01', title: 'Initial Brief', description: 'Tell us about your brand name, logo or creative work through our intake desk.', icon: FileEdit },
  { step: '02', title: 'Clearance Search', description: 'We run a search and explain what is possible before filing fees are spent.', icon: Search },
  { step: '03', title: 'Draft & Approval', description: 'We prepare your statutory documents and classifications for your review and sign-off.', icon: DocumentCheck },
  { step: '04', title: 'Registry Filing', description: 'We file the application with the registry and provide your official filing receipt.', icon: StatusCheck },
  { step: '05', title: 'Grant & Shield', description: 'We track the application, handle formal replies and deliver your final certificate.', icon: ShieldCheck },
]

const audience = ['Authors', 'Small businesses', 'Start-ups', 'Designers', 'Content creators', 'Publishers']
const valueProps = [
  { number: '01', title: 'Plain language', description: 'Simple language, with no confusing legal terms.' },
  { number: '02', title: 'Clear communication', description: 'Clear steps and regular status updates.' },
  { number: '03', title: 'All in one place', description: 'Support for both trademark and copyright in one place.' },
]

export default function TrademarkServiceContent({ service, onNavigate }) {
  const consultationHref = `mailto:${CONTACT.email}?subject=Trademark%20and%20Copyright%20Consultation`

  const navigate = (event, route, hash) => {
    event.preventDefault()
    if (onNavigate) onNavigate(route, hash)
    else window.location.hash = hash
  }

  return (
    <>
      <section className="trademark-hero">
        <div className="container trademark-hero-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="#home" onClick={(event) => navigate(event, 'home', '#home')}>Home</a>
            <span className="bc-sep">/</span>
            <a href="#services" onClick={(event) => navigate(event, 'home', '#services')}>Services</a>
            <span className="bc-sep">/</span>
            <span className="bc-current">{service.title}</span>
          </nav>

          <div className="trademark-hero-grid">
            <div className="trademark-hero-copy">
              <span className="trademark-kicker">Trademark &amp; Copyright Services</span>
              <h1>Protect your <strong>brand</strong> and your <strong>creative work</strong></h1>
              <p>Trademark and copyright support, explained in plain language.</p>
              <div className="trademark-hero-actions">
                <a href={consultationHref} className="btn trademark-btn-primary">
                  Get Started <ArrowRight width="16" height="16" />
                </a>
                <a href={consultationHref} className="btn trademark-btn-secondary">Talk to Our Team</a>
              </div>
            </div>
            <div className="trademark-hero-card">
              <img src={trademarkHeroCard} alt="Trademark and copyright registration support" />
            </div>
          </div>
        </div>
      </section>

      <section className="trademark-overview-band">
        <img className="trademark-overview-illustration" src={trademarkQuill} alt="" />
        <div className="trademark-overview-copy">
          <h2>Overview</h2>
          <p>
            Your name, logo and original work are valuable, and they need protection. We guide you
            through trademark and copyright registration so your brand and creative work are
            recorded in your name. We explain every step simply and keep you informed about the
            status of your application.
          </p>
        </div>
      </section>

      <section className="trademark-instruments-section">
        <div className="container trademark-instruments-container">
          <h2>Choosing the Proper Instrument of Protection</h2>
          <div className="trademark-instrument-grid">
            {instruments.map((instrument) => (
              <article key={instrument.id} className="trademark-instrument-card">
                <div className="trademark-instrument-topline">
                  <span className="trademark-instrument-category">{instrument.category}</span>
                  <span className="trademark-instrument-symbol" aria-hidden="true">{instrument.symbol}</span>
                </div>
                <h3>{instrument.title}</h3>
                <p className="trademark-instrument-tagline">{instrument.tagline}</p>
                <p className="trademark-instrument-description">{instrument.description}</p>
                <div className="trademark-instrument-scope">
                  <h4><Check width="13" height="13" /> Scope of legal undertaking</h4>
                  <ol>
                    {instrument.steps.map((step, index) => (
                      <li key={step}>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <p>{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="trademark-instrument-tags">
                  {instrument.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a
                  className="trademark-instrument-action"
                  href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(instrument.action)}`}
                >
                  {instrument.action} <ArrowRight width="15" height="15" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trademark-offers-section">
        <div className="container trademark-offers-container">
          <h2>What we offer</h2>
          <div className="trademark-offers-grid">
            {offers.map(({ title, description, icon: OfferIcon }) => (
              <article key={title} className="trademark-offer-card">
                <OfferIcon width="24" height="24" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trademark-process-section">
        <div className="container trademark-process-container">
          <h2>How It Works: Clear Steps, Zero Confusion</h2>
          <p className="trademark-process-intro">
            A transparent roadmap from initial consultation to the recorded government certificate.
          </p>
          <div className="trademark-process-track">
            {processSteps.map(({ step, title, description, icon: StepIcon }, index) => (
              <article key={step} className={`trademark-process-step${index === processSteps.length - 1 ? ' is-final' : ''}`}>
                <span className="trademark-process-icon"><StepIcon width="17" height="17" /></span>
                <span className="trademark-process-step-number">Step {step}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trademark-audience-section">
        <div className="container trademark-audience-container">
          <img className="trademark-audience-art trademark-audience-art-left" src={trademarkAudienceCreative} alt="" />
          <div className="trademark-audience-content">
            <h2>Who it is for</h2>
            <div className="trademark-audience-tags">
              {audience.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <img className="trademark-audience-art trademark-audience-art-right" src={trademarkAudiencePublishing} alt="" />
        </div>
      </section>

      <section className="trademark-values-section">
        <div className="container trademark-values-container">
          <h2>Why choose Zedd 3+ Books</h2>
          <div className="trademark-values-grid">
            {valueProps.map((value) => (
              <article key={value.number} className="trademark-value-card">
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trademark-cta-section">
        <div className="trademark-cta-card">
          <h2>Protect your brand today</h2>
          <p>Tell us your brand name or work, and we will explain your options.</p>
          <a href={consultationHref}>Talk to Our Team <ArrowRight width="14" height="14" /></a>
        </div>
      </section>
    </>
  )
}
