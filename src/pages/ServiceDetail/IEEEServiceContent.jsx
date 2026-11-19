import { useState } from 'react'
import conferenceImage from '../../assets/images/ieee-conference-presenter.png'
import paperDeskImage from '../../assets/images/ieee-support-illustration.png'
import processImage from '../../assets/images/ieee-process-review-transparent.png'
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChatSquare,
  Close,
  DocumentCheck,
  FileEdit,
  Manuscript,
  QuestionCircle,
  Search,
  ShieldCheck,
} from '../../components/common/Icons.jsx'
import { CONTACT } from '../../data/contact.js'
import './IEEEServiceContent.css'

const FAQS = [
  {
    question: 'Can you guarantee that my paper will be accepted by IEEE?',
    answer:
      'No. Acceptance decisions are made by the conference program committee and reviewers. We can help prepare your manuscript, but cannot influence or guarantee acceptance, indexing, or publication.',
  },
  {
    question: 'Do you write or ghostwrite research papers?',
    answer:
      'No. The research, findings, and conclusions must be yours. We provide editing, formatting, and feedback while you retain authorship and control of the final work.',
  },
  {
    question: 'How fast can you format and edit an urgent conference paper before the deadline?',
    answer:
      'Turnaround depends on the paper length, its current condition, the requested work, and our availability. Share the deadline and a sample first; we will confirm a realistic timeline before starting.',
  },
  {
    question: 'Do you support LaTeX submissions and IEEE conference templates directly?',
    answer:
      'Yes. We can work with LaTeX or Word files and the conference template or author instructions you provide. Authors should review the final files against the venue requirements before submitting.',
  },
  {
    question: 'How do you protect the confidentiality of my unpublished research?',
    answer:
      'Before you share a draft, we can discuss and put agreed confidentiality and manuscript-handling terms in writing. Please wait until those terms are confirmed before sending sensitive unpublished material.',
  },
  {
    question: 'What happens if conference reviewers request major or minor revisions?',
    answer:
      'We can help organize reviewer comments and edit the revised manuscript or response letter. You decide which research changes to make and remain responsible for approving and submitting the response.',
  },
  {
    question: 'Can you help identify whether a conference is genuine and indexed in IEEE Xplore?',
    answer:
      'We can review public details such as the official call for papers, organizers, and past proceedings or index records. We cannot certify a conference or guarantee future IEEE Xplore indexing; confirm current information with the conference and publisher.',
  },
]

const INTEGRITY_COMMITMENTS = {
  weDo: [
    'Comprehensive grammar, syntax, and scholarly language editing',
    'IEEE two-column formatting for LaTeX and Word templates',
    'Diagram, chart, and vector-figure cleanup using approved source material',
    'Reference checks, DOI verification, and bibliography styling',
    'Independent structural critique and clarity feedback',
  ],
  weDont: [
    'We do not write, fabricate, or ghostwrite research content',
    'We do not generate simulated or unverified experimental data',
    'We do not guarantee acceptance; conference reviewers make that decision',
    'We do not alter your technical conclusions or research claims',
    'We do not publish or share your draft without consent; confidentiality terms can be agreed before work begins',
  ],
}

const READINESS_CHECKLIST = [
  'Use the conference template and follow its current margin, font, and header requirements.',
  'Keep the abstract within the venue word limit and clearly state the problem, method, and key findings.',
  'Check figure and table readability, labels, captions, and resolution against the venue instructions.',
  'Verify references for completeness and consistent citation; confirm DOI details where available.',
  'Cite sources, quotations, and paraphrased material accurately; keep similarity reports unaltered.',
  'Place author details, funding or ethics disclosures, and supplementary files as required.',
]

const CONFERENCE_CATEGORIES = [
  {
    name: 'Computing & AI',
    conferences: ['IEEE ICASSP', 'IEEE CVPR', 'IEEE ICCV', 'IEEE IJCNN', 'IEEE BigData', 'IEEE Access'],
  },
  {
    name: 'Communications & Networks',
    conferences: ['IEEE GLOBECOM', 'IEEE ICC', 'IEEE INFOCOM', 'IEEE WCNC'],
  },
  {
    name: 'Electrical & Power',
    conferences: ['IEEE PES General Meeting', 'IEEE PowerCon', 'IEEE ECCE'],
  },
  {
    name: 'Electronics & VLSI',
    conferences: ['IEEE ISCAS', 'IEEE VLSI', 'IEEE Micro', 'IEEE Sensors'],
  },
  {
    name: 'Flagship Indian Tracks',
    conferences: ['IEEE INDICON', 'IEEE CONECCT', 'IEEE DISCOVER', 'IEEE PuneCon'],
  },
]

const TRUST_CARDS = [
  {
    title: 'Our integrity promise',
    description:
      'Our editorial work is guided by scholarly ethics. You retain authorship and control of the final submission, with scope and handling agreed before work begins.',
    icon: ShieldCheck,
    points: [
      'Agree confidentiality and manuscript-handling terms before sharing drafts',
      'No ghostwriting, fabricated data, or invented citations',
      'Tracked changes and transparent scope on each requested edit',
      'Follow applicable IEEE publication ethics and author requirements',
    ],
  },
  {
    title: 'How we review a conference',
    description:
      'Conference information can change. We help authors review public venue details before deciding where to submit.',
    icon: Search,
    points: [
      'Check the official call for papers and publisher information',
      'Review public proceedings and index records; past listings do not ensure future indexing',
      'Verify organizers, technical committee, sponsors, dates, fees, and contact details',
      'Flag potential warning signs; authors make the final submission decision',
    ],
  },
]

const DELIVERABLES = [
  {
    title: 'Clean Formatted Document',
    description: 'A manuscript formatted to your supplied conference template, with a PDF copy for author review.',
    icon: Manuscript,
  },
  {
    title: 'Tracked Changes File',
    description: 'Editorial changes shown in a tracked file so you can review and decide what to accept.',
    icon: FileEdit,
  },
  {
    title: 'Figures & Tables',
    description: 'Visuals prepared to the venue guidelines where the supplied source files allow.',
    icon: DocumentCheck,
  },
  {
    title: 'Similarity Review Notes',
    description: 'Guidance on reviewing matched text and citations in a similarity report you provide.',
    icon: Search,
  },
  {
    title: 'Technical Feedback Memo',
    description: 'Editorial observations on abstract focus, organization, clarity, and reviewer responses.',
    icon: ChatSquare,
  },
]

export default function IEEEServiceContent({ service, onNavigate }) {
  const [openFaq, setOpenFaq] = useState(0)
  const emailHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent('IEEE conference manuscript review')}`

  const navigateHome = (event, target) => {
    event.preventDefault()
    if (onNavigate) onNavigate('home', target)
    else window.location.hash = target
  }

  const scrollToSupport = (event) => {
    event.preventDefault()
    document.getElementById('ieee-support')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="ieee-page">
      <section className="ieee-hero">
        <div className="container">
          <nav className="ieee-breadcrumb" aria-label="Breadcrumb">
            <a href="#home" onClick={(event) => navigateHome(event, '#home')}>Home</a>
            <span aria-hidden="true">&rsaquo;</span>
            <a href="#services" onClick={(event) => navigateHome(event, '#services')}>Services</a>
            <span aria-hidden="true">&rsaquo;</span>
            <span aria-current="page">IEEE Conference Publication</span>
          </nav>

          <div className="ieee-hero-grid">
            <div className="ieee-hero-copy">
              <span className="ieee-eyebrow">IEEE CONFERENCE PUBLICATION</span>
              <h1>
                Your <span>Research.</span> Ready to <span>Present.</span>
              </h1>
              <p className="ieee-hero-lead">
                Expert support for preparing your paper for IEEE and other reputable
                conferences, from formatting and language to submission and revisions.
              </p>
              <div className="ieee-hero-actions">
                <a className="ieee-button ieee-button-primary" href={emailHref}>
                  Get a Manuscript Review
                  <span className="ieee-button-arrow"><ArrowRight width="15" height="15" /></span>
                </a>
                <a className="ieee-button ieee-button-outline" href="#ieee-support" onClick={scrollToSupport}>
                  How We Support
                </a>
              </div>
              <p className="ieee-independence-note">
                <BadgeCheck width="14" height="14" />
                <span>Independent service, not affiliated with IEEE.</span>
              </p>
            </div>

            <div className="ieee-hero-visual">
              <img
                src={conferenceImage}
                alt="A researcher presenting at a conference"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ieee-support-section" id="ieee-support">
        <div className="container">
          <div className="ieee-support-layout">
            <div className="ieee-support-intro">
              <h2>Support at every stage of your paper</h2>
              <p>
                Conference submissions have detailed requirements. We help you
                prepare your own research with focused editorial, typesetting,
                and submission support.
              </p>
              <div className="ieee-quality-card">
                <h3>Pre-submission quality check</h3>
                <p>
                  Review structure, formatting, figures, references, and required
                  files early to catch avoidable gaps before you submit.
                </p>
              </div>
              <img
                className="ieee-support-image"
                src={paperDeskImage}
                alt="IEEE and LaTeX books, conference proceedings, a laptop, and a plant"
              />
            </div>

            <ol className="ieee-support-list">
              {service.features.map((feature, index) => (
                <li className="ieee-support-item" key={feature.title}>
                  <span className="ieee-support-number">0{index + 1}</span>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="ieee-integrity-section">
        <div className="container">
          <div className="ieee-integrity-heading">
            <h2>Clear boundaries, so your work stays yours</h2>
            <p>
              We work within academic integrity standards. We polish your
              scholarship; we never fabricate it.
            </p>
          </div>
          <div className="ieee-integrity-card">
            <div className="ieee-integrity-column">
              <h3>
                <span className="ieee-integrity-heading-icon is-positive"><Check /></span>
                We do
              </h3>
              <ul>
                {INTEGRITY_COMMITMENTS.weDo.map((commitment) => (
                  <li key={commitment}>
                    <Check width="15" height="15" />
                    <span>{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ieee-integrity-column">
              <h3>
                <span className="ieee-integrity-heading-icon is-negative"><Close /></span>
                We don&apos;t
              </h3>
              <ul>
                {INTEGRITY_COMMITMENTS.weDont.map((commitment) => (
                  <li key={commitment}>
                    <Close width="15" height="15" />
                    <span>{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ieee-readiness-section">
        <div className="container ieee-readiness-layout">
          <div className="ieee-readiness-card">
            <div className="ieee-readiness-header">
              <h2>IEEE Conference Submission Readiness Checklist</h2>
              <span>6 Essential Criteria</span>
            </div>
            <ul>
              {READINESS_CHECKLIST.map((item) => (
                <li key={item}>
                  <span className="ieee-readiness-check"><Check width="12" height="12" /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="ieee-readiness-copy">
            <span className="ieee-readiness-icon"><DocumentCheck width="18" height="18" /></span>
            <h2>Is your paper ready to submit?</h2>
            <p>
              A readiness review can help catch formatting, citation, or file
              preparation gaps. Always check the latest author instructions for
              your target conference.
            </p>
            <a className="ieee-button ieee-button-primary" href={emailHref}>
              Get a Manuscript Review
              <span className="ieee-button-arrow"><ArrowRight width="15" height="15" /></span>
            </a>
          </div>
        </div>
      </section>

      <section className="ieee-process-section" id="ieee-process">
        <div className="container">
          <div className="ieee-process-heading">
            <h2>Our process</h2>
            <p>
              A step-by-step editorial pathway to prepare your conference
              submission while protecting your authorship.
            </p>
          </div>
          <div className="ieee-process-layout">
            <ol className="ieee-process-timeline">
              {service.steps.map((step) => (
                <li className="ieee-process-step" key={step.step}>
                  <span className="ieee-process-number">{step.step}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="ieee-process-visual">
              <img
                src={processImage}
                alt="Research papers, charts, and peer-review approval illustration"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ieee-conferences-section">
        <div className="container">
          <div className="ieee-conferences-heading">
            <h2>Conferences &amp; venues we help you target</h2>
            <p>
              Broad expertise across electrical, computing, telecommunications,
              and applied industrial engineering proceedings.
            </p>
          </div>
          <div className="ieee-conference-categories">
            {CONFERENCE_CATEGORIES.map((category) => (
              <div className="ieee-conference-row" key={category.name}>
                <h3>{category.name}</h3>
                <ul aria-label={`${category.name} conferences and venues`}>
                  {category.conferences.map((conference) => (
                    <li key={conference}>{conference}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="ieee-conferences-note">
            Targeting an ACM, Springer, or Elsevier conference? Our technical
            editors support all major international proceedings templates.
          </p>
        </div>
      </section>

      <section className="ieee-trust-section" aria-label="Integrity and conference review">
        <div className="container">
          <div className="ieee-trust-grid">
            {TRUST_CARDS.map(({ title, description, icon: Icon, points }) => (
              <article className="ieee-trust-card" key={title}>
                <div className="ieee-trust-card-heading">
                  <span className="ieee-trust-icon">
                    <Icon width="14" height="14" />
                  </span>
                  <h2>{title}</h2>
                </div>
                <p>{description}</p>
                <ul>
                  {points.map((point) => (
                    <li key={point}>
                      <span className="ieee-trust-bullet" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ieee-deliverables-section">
        <div className="container">
          <div className="ieee-deliverables-heading">
            <h2>What you receive</h2>
            <p>
              Your handoff includes the files and editorial notes agreed for
              your project.
            </p>
          </div>
          <ul className="ieee-deliverables-list">
            {DELIVERABLES.map(({ title, description, icon: Icon }) => (
              <li className="ieee-deliverable" key={title}>
                <span className="ieee-deliverable-icon">
                  <Icon width="17" height="17" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ieee-audience-section">
        <div className="container ieee-audience-layout">
          <div className="ieee-section-heading">
            <span className="ieee-eyebrow">WHO WE SUPPORT</span>
            <h2>For researchers at every career stage.</h2>
            <p>Get practical help while keeping ownership of your research and submission.</p>
          </div>
          <div className="ieee-audience-list">
            {service.audience.map((audience) => (
              <span className="ieee-audience-pill" key={audience}>
                <Check width="14" height="14" />
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="ieee-faq-section">
        <div className="container ieee-faq-layout">
          <div className="ieee-faq-intro">
            <h2>Frequently Asked Questions</h2>
            <p>
              Everything researchers need to know about our scope, turnaround
              time, academic integrity, and post-review support.
            </p>
            <div className="ieee-faq-help-card">
              <h3>
                <QuestionCircle width="15" height="15" />
                Need a quick paper check?
              </h3>
              <p>
                Unsure about your target conference or formatting requirements?
                Send us a sample section for a preliminary review.
              </p>
              <a href={emailHref}>
                Speak to a Research Advisor <ArrowRight width="14" height="14" />
              </a>
            </div>
          </div>
          <div className="ieee-faq-list">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <article className={`ieee-faq-item ${isOpen ? 'is-open' : ''}`} key={faq.question}>
                  <button
                    type="button"
                    className="ieee-faq-question"
                    aria-expanded={isOpen}
                    aria-controls={`ieee-faq-answer-${index}`}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="ieee-faq-toggle" aria-hidden="true" />
                  </button>
                  <p
                    className="ieee-faq-answer"
                    id={`ieee-faq-answer-${index}`}
                    hidden={!isOpen}
                  >
                    {faq.answer}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="ieee-cta-section">
        <div className="container ieee-cta-panel">
          <div>
            <h2>Ready to prepare your manuscript?</h2>
            <p>
              Talk to our team about manuscript preparation and
              submission-support options.
            </p>
          </div>
          <a className="ieee-button ieee-button-primary" href={emailHref}>
            Get Started
            <span className="ieee-button-arrow"><ArrowRight width="15" height="15" /></span>
          </a>
        </div>
      </section>
    </div>
  )
}
