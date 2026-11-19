import { useState } from 'react'
import textbookBookMockup from '../../assets/images/textbook-anaimalai-book.png'
import textbookHeroImg from '../../assets/images/textbook-hero-finance-city.png'
import educationEventImage from '../../assets/images/education-event-conference.png'
import upskillingHeroBooks from '../../assets/images/upskilling-hero-books-hd.png'
import upskillingMeetingImg from '../../assets/images/upskilling-educators-meeting-hd.png'
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  EventManagement,
  GraduationCap,
  Mail,
  Medal,
  NetworkNodes,
  OpenBook,
  Phone,
  Pin,
  PriceTag,
  Users,
} from '../../components/common/Icons.jsx'
import { CONTACT } from '../../data/contact.js'
import { SERVICES } from '../../data/services.js'
import TrademarkServiceContent from './TrademarkServiceContent.jsx'
import ScopusServiceContent from './ScopusServiceContent.jsx'
import IEEEServiceContent from './IEEEServiceContent.jsx'
import PatentServiceContent from './PatentServiceContent.jsx'
import './ServiceDetail.css'

const OVERVIEW_PILLS = [
  'Peer-Review Ready',
  'University Library Cataloging',
  'LaTeX & InDesign Math Typesetting',
  'Official ISBN & Barcode',
]

const TIMELINE_STAGES = [
  {
    step: 1,
    tag: 'STAGE 01 • SHARE',
    title: 'Share',
    desc: 'Share your manuscript and tell us about your students.',
  },
  {
    step: 2,
    tag: 'STAGE 02 • PLAN',
    title: 'Plan & Review',
    desc: 'We review it and suggest a clear plan with a quote.',
  },
  {
    step: 3,
    tag: 'STAGE 03 • PREPARE',
    title: 'Prepare & Design',
    desc: 'Our editors and designers prepare your book.',
  },
  {
    step: 4,
    tag: 'STAGE 04 • APPROVE',
    title: 'Approve',
    desc: 'You approve the cover, layout and proofs.',
  },
  {
    step: 5,
    tag: 'STAGE 05 • PUBLISH',
    title: 'Publish & Deliver',
    desc: 'We print or publish your textbook and help it reach readers.',
  },
]

const AUDIENCE_PILLS = [
  'Professors',
  'School and college teachers',
  'Training institutes',
  'Subject experts',
  'Departments preparing course books',
]

const EVENT_LIFECYCLE = [
  {
    step: 'A',
    title: 'Before the event',
    items: [
      'Theme development, keynote outreach, and call-for-papers (CFP) drafting',
      'Submission portal setup, review workflow, and author communications',
      'Sponsor materials, delegate registration, and payment-provider coordination',
      'Venue layout, audiovisual and stage planning, and vendor coordination',
    ],
  },
  {
    step: 'B',
    title: 'During the event',
    items: [
      'On-site registration, attendee check-in, and speaker support',
      'Multi-track session timing, audiovisual coordination, and live Q&A support',
      'Hybrid streaming setup, remote presenter coordination, and session recording',
      'Event photography, session notes, and approved event communications',
    ],
  },
  {
    step: 'C',
    title: 'After the event',
    items: [
      'Proceedings compilation and coordination of ISBN or DOI requests where applicable',
      'Digital or printed certificates for delegates and speakers',
      'Budget closeout, utilization records, and vendor reconciliation support',
      'Outcome report, feedback summary, and event recording handoff',
    ],
  },
]

const EVENT_PROCESS_STEPS = [
  {
    step: '01',
    stage: 'STAGE 01',
    title: 'Concept & Scope',
    description: 'Objective, budget, and event date finalization.',
  },
  {
    step: '02',
    stage: 'STAGE 02',
    title: 'Committee & CFPs',
    description: 'Advisory board coordination and CFP rollout.',
  },
  {
    step: '03',
    stage: 'STAGE 03',
    title: 'Peer Review',
    description: 'Double-blind review coordination and committee acceptance decisions.',
  },
  {
    step: '04',
    stage: 'STAGE 04',
    title: 'Delegate Reg.',
    description: 'Ticketing, logistics, and delegate kit coordination.',
  },
  {
    step: '05',
    stage: 'STAGE 05',
    title: 'Dry Run & AV',
    description: 'Stage rehearsal, technical checks, and portal dry runs.',
  },
  {
    step: '06',
    stage: 'STAGE 06',
    title: 'Event Execution',
    description: 'On-ground coordination and agreed hybrid support.',
  },
  {
    step: '07',
    stage: 'STAGE 07',
    title: 'Proceedings',
    description: 'Proceedings compilation, ISBN release coordination, and NAAC dossier support where applicable.',
  },
]

const EVENT_FORMATS = {
  'in-person': {
    label: 'In-person',
    description:
      'Immersive on-campus academic events designed for networking, engaging plenary sessions, and in-person participation.',
    features: [
      {
        icon: EventManagement,
        title: 'Campus Venue Optimization',
        description: 'Auditorium layout, poster-gallery setup, and hospitality coordination.',
      },
      {
        icon: CheckCircle,
        title: 'Physical Delegate Experience',
        description: 'Conference kits, custom lanyards, printed materials, and book-stall coordination.',
      },
      {
        icon: NetworkNodes,
        title: 'Direct Academic Camaraderie',
        description: 'Networking lunches, roundtable discussions, and academic meetups.',
      },
    ],
  },
  online: {
    label: 'Online',
    description:
      'Accessible virtual academic events designed for remote participation, clear sessions, and audience engagement.',
    features: [
      {
        icon: NetworkNodes,
        title: 'Virtual Session Production',
        description: 'Speaker scheduling, technical checks, moderated Q&A, and session hosting.',
      },
      {
        icon: Mail,
        title: 'Digital Delegate Experience',
        description: 'Online registration support, digital handbooks, and attendance coordination.',
      },
      {
        icon: Users,
        title: 'Remote Networking',
        description: 'Breakout sessions, virtual poster presentations, and facilitated discussions.',
      },
    ],
  },
  hybrid: {
    label: 'Hybrid',
    description:
      'A coordinated campus and online experience with shared sessions and support for every delegate.',
    features: [
      {
        icon: EventManagement,
        title: 'Unified Session Production',
        description: 'Coordinate room AV, streaming, speakers, and Q&A across formats.',
      },
      {
        icon: Users,
        title: 'Connected Delegate Experience',
        description: 'On-site check-in, remote access guidance, and shared digital materials.',
      },
      {
        icon: NetworkNodes,
        title: 'Hybrid Networking',
        description: 'Plan moderated discussions and networking moments for both audiences.',
      },
    ],
  },
}

const EVENT_PUBLISHING_CARDS = [
  {
    title: 'Publishing support',
    subtitle: 'Turn presented research into permanent scholarly assets.',
    icon: OpenBook,
    bullets: [
      'Edited book volumes with official Indian & International ISBN allocation.',
      'Scopus, WoS, and UGC-CARE indexing strategy and journal collaboration tie-ups.',
      'Professional typesetting, interior typography, and academic cover design by Zedd 3+ editorial press.',
      'Print-on-demand author copies delivered to key delegates, libraries, and institutional archives.',
    ],
  },
  {
    title: 'Documentation & Accreditation',
    subtitle: 'Audit-ready evidence dossiers tailored for NAAC, NIRF, and NBA.',
    icon: CheckCircle,
    bullets: [
      'Complete conference proceedings booklet formatted with abstracts and author bios.',
      'Cryptographically verifiable digital certificates with unique QR verification codes.',
      'Comprehensive event outcome metrics, participant demographics, and feedback sentiment analytics.',
      'Archival high-resolution photo/video repository cataloged by track and session.',
    ],
  },
]

const EVENT_FAQS = [
  {
    q: 'What kinds of academic events can you support?',
    a: 'We support conferences, symposia, Faculty Development Programs, workshops, and hackathons for universities and higher education institutions.',
  },
  {
    q: 'Can you coordinate in-person, online, and hybrid events?',
    a: 'Yes. We plan event delivery for in-person, online, or hybrid formats based on your objectives, audience, and agreed scope.',
  },
  {
    q: 'Do you manage paper submissions and peer review?',
    a: 'We can coordinate submission portals, reviewer workflows, and author communications. Final review and acceptance decisions remain with the event committee.',
  },
  {
    q: 'Can you help with proceedings, ISBNs, and certificates?',
    a: 'We support proceedings preparation, certificate coordination, and ISBN requests where applicable. Issuance depends on the relevant publisher and registration process.',
  },
  {
    q: 'Do you guarantee indexing or accreditation outcomes?',
    a: 'No. Indexing and accreditation decisions are made by independent organizations. We can help coordinate documentation and prepare materials for review.',
  },
]

const AUDIENCE_CARDS = [
  {
    title: 'University Professors',
    desc: 'Transform your specialized lecture series and syllabus notes into authoritative course books adopted across multiple colleges and universities.',
  },
  {
    title: 'Medical & Engineering Faculties',
    desc: 'Publish comprehensive technical manuals, lab companions, and clinical handbooks with uncompromising diagram clarity and color fidelity.',
  },
  {
    title: 'Coaching Institutes & Academies',
    desc: 'Standardize competitive exam prep modules, question banks, and solution manuals with institutional branding and bulk dispatch capabilities.',
  },
  {
    title: 'School Education Boards',
    desc: 'Produce grade-appropriate pedagogical texts, workbooks, and teacher resource guides strictly aligned with regional and national frameworks.',
  },
  {
    title: 'Scholars & Researchers',
    desc: 'Preserve your field discoveries, regional studies, and domain inquiries in durable archival hardcovers indexed for academic discovery.',
  },
  {
    title: 'Monograph & Thesis Authors',
    desc: 'Convert your doctoral dissertation into an accessible, commercially viable scholarly monograph with full academic provenance.',
  },
]

const TRUST_CARDS = [
  {
    icon: Users,
    title: 'One Team',
    desc: 'One team for every step, from draft to delivery',
  },
  {
    icon: PriceTag,
    title: 'Transparent',
    desc: 'Clear pricing with no hidden charges',
  },
  {
    icon: CheckCircle,
    title: 'Full Approval',
    desc: 'You approve each stage before it moves forward',
  },
  {
    icon: OpenBook,
    title: 'Study-Built',
    desc: 'Layouts built for study: readable fonts, clear headings, neat tables',
  },
]

const TEXTBOOK_FAQS = [
  {
    q: 'Can I publish a textbook if I have only lecture notes?',
    a: 'Yes. We review your notes and help you organise them into chapters before editing begins.',
  },
  {
    q: 'Do I keep the rights to my textbook?',
    a: 'Yes. You retain full copyright and intellectual property rights to your textbook. We work purely as your publishing production and distribution partner.',
  },
  {
    q: 'Can I order a small number of printed copies?',
    a: 'Yes. We support print-on-demand and flexible short runs starting from 25 copies up to thousands for institutional batches.',
  },
  {
    q: 'How long does it take to publish a textbook?',
    a: 'Typically 4 to 8 weeks depending on the length of the manuscript, complexity of equations or diagrams, and review turnaround times.',
  },
]

const UPSKILLING_AUDIENCES = {
  educators: {
    card: {
      tag: 'Institutional Excellence',
      title: 'Empowering Modern Teaching Practices',
      desc: 'Bridging textbook publishing rigor with 21st-century active learning environments.',
    },
    right: {
      title: 'Empowering Faculty & Academic Leaders',
      desc: 'Specialized classroom pedagogy, curriculum publishing, AI literacy in teaching, and institutional impact tailored to modern educational reality. We help faculty transition from passive teaching to active scholarly creation and digital instructional leadership.',
      bullets: [
        'Curriculum Modernization & Digital Pedagogy',
        'Publishing Academic Research & Textbooks',
        'Student Engagement in Hybrid Environments',
        'Institutional Leadership & Accreditation Readiness',
      ],
      bestFor: 'K-12 Educators, College Professors, Academic Coordinators & Educational Institutions',
    },
  },
  professionals: {
    card: {
      tag: 'Corporate & Industry Leadership',
      title: 'Executive Upskilling & Strategic Mastery',
      desc: 'Translating deep domain expertise into industry-recognized patents, publications, and thought leadership.',
    },
    right: {
      title: 'Accelerating Industry & Technical Careers',
      desc: 'Advanced professional mastery in emerging technologies, intellectual property generation, AI integration, and technical writing for practicing engineers, managers, and R&D leaders.',
      bullets: [
        'Emerging Tech & Applied Generative AI Mastery',
        'Converting Industry Solutions into Granted Patents',
        'High-Impact Whitepapers & Technical Documentation',
        'Executive Communication & Cross-Functional Innovation',
      ],
      bestFor: 'Corporate Engineers, R&D Managers, Technical Leads & Industry Practitioners',
    },
  },
}

const UPSKILLING_PROGRAMS = [
  {
    num: '01',
    title: 'Academic Authoring & Research Publishing',
    tags: ['Educators', 'Researchers'],
    desc: 'Master scholarly writing, peer review navigation, citation standards, and commercial academic distribution.',
  },
  {
    num: '02',
    title: 'AI-Augmented Pedagogy & Classroom Technology',
    tags: ['Educators', 'Curriculum Heads'],
    desc: 'Integrate generative AI, digital assessment tools, and interactive modules into everyday curriculum.',
  },
  {
    num: '03',
    title: 'Executive Writing & Professional Thought Leadership',
    tags: ['Professionals', 'Leaders'],
    desc: 'Transform your industry expertise into published whitepapers, trade monographs, and speaking authority.',
  },
  {
    num: '04',
    title: 'Publishing Workflow & Self-Publishing Mastery',
    tags: ['Educators', 'Independent Authors'],
    desc: 'Comprehensive end-to-end training on ISBN, copyrighting, cover aesthetics, print production, and metadata.',
  },
  {
    num: '05',
    title: 'Digital Learning Content & Instructional Design',
    tags: ['Instructional Designers', 'Teachers'],
    desc: 'Create high-retention instructional materials, microlearning modules, and multimedia educational workbooks.',
  },
  {
    num: '06',
    title: 'Leadership Communication & Institutional Branding',
    tags: ['Academic Leaders', 'Senior Executives'],
    desc: 'Strategic narrative crafting, media presence, and stakeholder communication for senior administrators.',
  },
]

const LEARNING_WORKS = {
  teach: {
    title: 'How we teach',
    bullets: [
      'Live interactive cohort workshops led by practicing professionals',
      'Hands-on capstone projects tailored to your manuscript or institution',
      'Direct 1-on-1 editorial review and feedback sessions',
      'Post-program implementation toolkit and community access',
    ],
    footerLeft: 'Practical Mentorship',
    footerRight: 'Zero Passive Lecturing',
  },
  formats: {
    title: 'Formats',
    bullets: [
      'Weekend masterclasses (2-day intensive bootcamps)',
      '6-week cohort-based evening certification tracks',
      'Custom on-campus faculty development programs for institutions',
      'Self-paced hybrid modules with weekly live mentor clinics',
    ],
    footerLeft: 'Hybrid & In-Person',
    footerRight: 'Flexible Pacing',
  },
}

const WHAT_YOU_GAIN = [
  {
    icon: OpenBook,
    title: 'Tangible Publications & Output',
    desc: 'Leave with a completed, peer-reviewed syllabus, published monograph outline, or launch-ready manuscript supported by our editorial team.',
  },
  {
    icon: Medal,
    title: 'Recognized Certification',
    desc: 'Industry-accredited credentials endorsed by Zedd 3+ Books Press with verifiable digital badges for LinkedIn and institutional records.',
  },
  {
    icon: NetworkNodes,
    title: 'Lifetime Peer & Mentor Network',
    desc: 'Direct ongoing connection to publishing editors, senior educators, academic keynote speakers, and collaborative alumni circles across South Asia.',
  },
]

const VOICES_OF_LEARNERS = [
  {
    quote:
      '“The practical authoring framework helped our department publish two peer-reviewed monographs within six months. Truly transformative.”',
    initials: 'MR',
    name: 'Dr. Meenakshi Raghavan',
    dept: 'Department of Humanities, Coimbatore Institute',
  },
  {
    quote:
      '“The AI pedagogy and curriculum modernization masterclass completely reshaped how our faculty designs student assessments and blended coursework.”',
    initials: 'SK',
    name: 'Prof. Suresh Kumar',
    dept: 'School of Computing, SRM Institute',
  },
  {
    quote:
      '“Transforming our specialized lecture notes into an indexed academic coursebook was seamless with Zedd 3+ Books. Highly recommended.”',
    initials: 'AN',
    name: 'Dr. Ananya Natarajan',
    dept: 'Department of Electrical Engineering, Anna University',
  },
]

const UPSKILLING_FAQS = [
  {
    q: 'Who are these upskilling programs primarily designed for?',
    a: 'Our tracks are specifically curated for school educators, college & university faculty, academic coordinators, independent researchers, and corporate learning leaders looking to build publication-ready capstones, master AI-driven classroom pedagogy, or publish peer-reviewed academic works.',
  },
  {
    q: 'Can our university or institution book a private cohort for faculty development?',
    a: 'Yes. We deliver fully tailored on-campus and hybrid faculty development programs (FDPs) customized to your institution’s NIRF, NAAC, or NBA accreditation and API criteria.',
  },
  {
    q: 'What is the time commitment required for the 6-week cohort track?',
    a: 'Participants typically commit 3 to 4 hours per week, consisting of one 90-minute live interactive weekend masterclass and weekly hands-on assignment work with mentor feedback.',
  },
  {
    q: 'Do you provide financial assistance or group registration discounts?',
    a: 'Yes. Institutional group registrations of 5 or more faculty members receive tiered academic fee concessions, and research scholar discounts are available upon request.',
  },
  {
    q: 'Will I receive direct support to publish my academic research or book?',
    a: 'Every participant receives direct 1-on-1 editorial consultations with Zedd 3+ Books acquisitions editors to review and fast-track manuscripts for textbook or chapter release.',
  },
]

export default function ServiceDetail({ serviceId, onNavigate }) {
  const service = SERVICES.find((s) => s.id === serviceId) || SERVICES[0]
  const otherServices = SERVICES.filter((s) => s.id !== service.id)

  const [openFaq, setOpenFaq] = useState(0) // First FAQ open by default as in screenshot
  const [upskillingTab, setUpskillingTab] = useState('educators')
  const [activeLearnerIdx, setActiveLearnerIdx] = useState(0)
  const [openUpskillingFaq, setOpenUpskillingFaq] = useState(0)
  const [activeEventFormat, setActiveEventFormat] = useState('in-person')
  const [openEventFaq, setOpenEventFaq] = useState(0)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToEventTypes = (e) => {
    e.preventDefault()
    document.getElementById('education-event-types')?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleFaq = (idx) => {
    setOpenFaq((prev) => (prev === idx ? null : idx))
  }

  const isTextbook = service.id === 'textbook-publications'
  const isUpskilling = service.id === 'professional-upskilling-services'
  const isTrademarkService = service.id === 'trademarks-copyright-services'
  const isScopusService = service.id === 'scopus-indexed-book-chapters'
  const isIEEEService = service.id === 'ieee-conference-publications'
  const isEducationalEvent = service.id === 'educational-event-management'
  const isPatentService = service.id === 'patent-grant-support'
  const Icon = service.icon
  const selectedEventFormat = EVENT_FORMATS[activeEventFormat]

  if (isTrademarkService) {
    return (
      <article className="service-detail-page trademark-service-detail-page">
        <TrademarkServiceContent service={service} onNavigate={onNavigate} />
      </article>
    )
  }

  if (isScopusService) {
    return (
      <article className="service-detail-page scopus-service-detail-page">
        <ScopusServiceContent service={service} onNavigate={onNavigate} />
      </article>
    )
  }

  if (isIEEEService) {
    return (
      <article className="service-detail-page ieee-service-detail-page">
        <IEEEServiceContent service={service} onNavigate={onNavigate} />
      </article>
    )
  }

  if (isPatentService) {
    return (
      <article className="service-detail-page patent-service-detail-page">
        <PatentServiceContent service={service} onNavigate={onNavigate} />
      </article>
    )
  }

  return (
    <article
      className={`service-detail-page ${isTextbook ? 'is-textbook-page' : ''} ${isUpskilling ? 'is-upskilling-page' : ''} ${isEducationalEvent ? 'is-educational-event-page' : ''}`}
    >
      {isTextbook ? (
        /* ====================================================================
           TEXTBOOK PUBLICATIONS: 100% COMPLETE FIGMA SPECIFICATION (IN ORDER)
           ==================================================================== */
        <>
          {/* 1. Hero Section (Figma Screenshot 1) */}
          <section className="figma-textbook-hero">
            <div className="container figma-hero-inner">
              <nav className="figma-breadcrumb" aria-label="Breadcrumb">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault()
                    if (onNavigate) onNavigate('home', '#home')
                    else window.location.hash = '#home'
                  }}
                >
                  Home
                </a>
                <span className="figma-bc-sep">&gt;</span>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    if (onNavigate) onNavigate('home', '#services')
                    else window.location.hash = '#services'
                  }}
                >
                  Services
                </a>
                <span className="figma-bc-sep">&gt;</span>
                <span className="figma-bc-current">Textbook Publications</span>
              </nav>

              <div className="figma-hero-grid">
                <div className="figma-hero-left">
                  <div className="figma-division-pill">
                    <span className="figma-pill-icon">
                      <OpenBook width="14" height="14" />
                    </span>
                    <span className="figma-pill-text">SCHOLARLY PRESS DIVISION</span>
                  </div>

                  <h1 className="figma-hero-title">
                    Turn your course material<br />
                    into a <span className="figma-accent-crimson">Published Textbook</span>
                  </h1>

                  <p className="figma-hero-subtitle">
                    Editing, ISBN, design, printing and distribution, handled by one team.
                  </p>

                  <div className="figma-hero-actions">
                    <a
                      href="#contact"
                      className="btn-figma-primary"
                      onClick={scrollToContact}
                    >
                      <span>Publish With Us</span>
                      <span className="figma-arrow-circle">
                        <ArrowRight width="13" height="13" strokeWidth={2.4} />
                      </span>
                    </a>

                    <a
                      href="#contact"
                      className="btn-figma-outline"
                      onClick={scrollToContact}
                    >
                      Talk to Our Team
                    </a>
                  </div>
                </div>

                <div className="figma-hero-right">
                  <div className="figma-visual-card">
                    <div className="figma-card-image-wrap">
                      <img
                        src={textbookHeroImg}
                        alt="Textbooks, laptop and financial charts on a desk overlooking a city at sunset"
                        className="figma-card-image"
                      />
                    </div>
                    <div className="figma-card-badge-box">
                      <span className="figma-volume-title">VOLUME EDITION</span>
                      <span className="figma-volume-sub">Standard Academic Archival Format</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Overview Banner (Figma Screenshot 2) */}
          <section className="figma-overview-section">
            <div className="container">
              <div className="figma-overview-panel">
                <span className="figma-overview-label">OVERVIEW</span>
                <p className="figma-overview-p">
                  A good textbook explains a subject clearly and stays useful for years.
                  We help teachers, professors and subject experts turn their notes and
                  course material into a complete, professionally produced textbook.
                  Our team looks after every stage of production, so you can focus on the
                  content while we handle the details.
                </p>

                <div className="figma-overview-pills">
                  {OVERVIEW_PILLS.map((pill) => (
                    <span key={pill} className="figma-ov-pill">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 3. Publication Architecture - The Book's Journey Timeline (Figma Screenshot 2) */}
          <section className="figma-timeline-section">
            <div className="container">
              <div className="figma-timeline-header">
                <span className="figma-sub-tag">PUBLICATION ARCHITECTURE</span>
                <h2 className="figma-timeline-title">The Book&apos;s Journey Timeline</h2>
                <p className="figma-timeline-desc">
                  Step-by-step evolution from manuscript draft to worldwide institutional adoption.
                </p>
              </div>

              <div className="figma-timeline-grid">
                {/* Left: 3D Book Presentation Card */}
                <div className="figma-book-card">
                  <div className="figma-book-mockup-wrapper">
                    <img
                      src={textbookBookMockup}
                      alt="Whispers on Mount Anaimalai by Arun Prakash"
                      className="figma-book-mockup-img"
                    />
                  </div>
                  <div className="figma-book-card-caption">
                    <span className="figma-caption-tag">
                      FROM RAW DRAFT TO UNIVERSITY LIBRARY SHELF
                    </span>
                    <span className="figma-caption-sub">
                      Archival paper stock, archival binding, index-registered edition.
                    </span>
                  </div>
                </div>

                {/* Right: Vertical 5-Stage Timeline */}
                <div className="figma-vertical-timeline">
                  <div className="figma-timeline-line" aria-hidden="true" />
                  <div className="figma-timeline-stages">
                    {TIMELINE_STAGES.map((st) => (
                      <div key={st.step} className="figma-stage-row">
                        <span className="figma-stage-node">{st.step}</span>
                        <div className="figma-stage-card">
                          <span className="figma-stage-tag">{st.tag}</span>
                          <h3 className="figma-stage-title">{st.title}</h3>
                          <p className="figma-stage-desc">{st.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Who This Pathway Serves (Figma Screenshot 2) */}
          <section className="figma-serves-section">
            <div className="container">
              <div className="figma-serves-header">
                <h2 className="figma-serves-title">Who This Pathway Serves</h2>
                <div className="figma-serves-pills">
                  {AUDIENCE_PILLS.map((p) => (
                    <span key={p} className="figma-serve-pill">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="figma-serves-grid">
                {AUDIENCE_CARDS.map((card) => (
                  <article key={card.title} className="figma-serve-card">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Why Authors & Institutions Trust Us (Figma Screenshot 3) */}
          <section className="figma-trust-section">
            <div className="container">
              <h2 className="figma-trust-title">Why Authors &amp; Institutions Trust Us</h2>
              <div className="figma-trust-grid">
                {TRUST_CARDS.map(({ icon: CardIcon, title, desc }) => (
                  <article key={title} className="figma-trust-card">
                    <span className="figma-trust-icon">
                      <CardIcon width="20" height="20" />
                    </span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 6. Frequently Asked Questions (Figma Screenshot 3) */}
          <section className="figma-faq-section">
            <div className="container">
              <h2 className="figma-faq-title">Frequently Asked Questions</h2>
              <div className="figma-faq-list">
                {TEXTBOOK_FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx
                  return (
                    <div
                      key={faq.q}
                      className={`figma-faq-item ${isOpen ? 'is-open' : ''}`}
                    >
                      <button
                        type="button"
                        className="figma-faq-question"
                        aria-expanded={isOpen}
                        onClick={() => toggleFaq(idx)}
                      >
                        <span>{faq.q}</span>
                        <span className="figma-faq-toggle">
                          {isOpen ? <ChevronUp width="16" height="16" /> : <ChevronDown width="16" height="16" />}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="figma-faq-answer-container">
                          <div className="figma-faq-answer-box">
                            <p>{faq.a}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* 7. Ready to publish your textbook? Callout Card (Figma Screenshot 3) */}
          <section className="container figma-cta-section">
            <div className="figma-cta-banner">
              <h2>Ready to publish your textbook?</h2>
              <p>Share your manuscript and we will suggest a clear plan and quote.</p>
              <a
                href="#contact"
                className="btn-figma-cta-white"
                onClick={scrollToContact}
              >
                <span>Talk to Our Team</span>
                <span className="figma-cta-arrow-circle">
                  <ArrowRight width="13" height="13" strokeWidth={2.6} />
                </span>
              </a>
            </div>
          </section>
        </>
      ) : isUpskilling ? (
        /* ====================================================================
           PROFESSIONAL UPSKILLING SERVICES: 100% COMPLETE FIGMA SPECIFICATION
           ==================================================================== */
        <>
          {/* ================================================================
             PROFESSIONAL UPSKILLING SERVICES: FIGMA HERO SPECIFICATION
             ================================================================ */}
              <section className="figma-textbook-hero figma-upskilling-hero">
              <div className="container figma-hero-inner">
                <nav className="figma-breadcrumb" aria-label="Breadcrumb">
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault()
                      if (onNavigate) onNavigate('home', '#home')
                      else window.location.hash = '#home'
                    }}
                  >
                    Home
                  </a>
                  <span className="figma-bc-sep">&gt;</span>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault()
                      if (onNavigate) onNavigate('home', '#services')
                      else window.location.hash = '#services'
                    }}
                  >
                    Services
                  </a>
                  <span className="figma-bc-sep">&gt;</span>
                  <span className="figma-bc-current">Professional Upskilling Services</span>
                </nav>

                <div className="figma-hero-grid figma-upskilling-grid">
                  <div className="figma-hero-left">
                    <span className="figma-upskilling-category">Professional Upskilling Services</span>

                    <h1 className="figma-hero-title figma-upskilling-title">
                      Transform Your <span className="figma-accent-crimson">Skills.</span> Unlock<br />
                      New Opportunities
                    </h1>

                    <p className="figma-hero-subtitle figma-upskilling-subtitle">
                      Practical learning programs designed for educators and professionals who want to continuously learn, develop, grow with confidence and prepare for future opportunities.
                    </p>

                    <div className="figma-hero-actions">
                      <a
                        href="#enquiry-section"
                        className="btn-figma-primary"
                        onClick={(e) => {
                          e.preventDefault()
                          document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                      >
                        <span>Explore Now</span>
                        <span className="figma-arrow-circle">
                          <ArrowRight width="13" height="13" strokeWidth={2.4} />
                        </span>
                      </a>

                      <a
                        href="#upskilling-programs"
                        className="btn-figma-outline"
                        onClick={(e) => {
                          e.preventDefault()
                          document.getElementById('upskilling-programs')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                      >
                        View Programs
                      </a>
                    </div>

                    <div className="figma-trust-features">
                      <div className="figma-trust-item">
                        <span className="figma-trust-item-icon">
                          <CheckCircle width="18" height="18" />
                        </span>
                        <span className="figma-trust-item-text">UGC-Aligned Frameworks</span>
                      </div>
                      <div className="figma-trust-item">
                        <span className="figma-trust-item-icon">
                          <OpenBook width="18" height="18" />
                        </span>
                        <span className="figma-trust-item-text">Publication-Ready Capstones</span>
                      </div>
                    </div>
                  </div>

                  <div className="figma-hero-right">
                    <div className="figma-upskilling-visual-card">
                      <div className="figma-upskilling-image-wrap">
                        <img
                          src={upskillingHeroBooks}
                          alt="Professional Upskilling Services - Books and resources on desk"
                          className="figma-upskilling-card-image"
                        />
                      </div>
                      <div className="figma-upskilling-card-bottom">
                        <div className="figma-upskilling-meta">
                          <h4 className="figma-upskilling-meta-title">Next Cohort Starts Soon</h4>
                          <span className="figma-upskilling-meta-sub">Faculty &amp; Professional Fast-Tracks</span>
                        </div>
                        <span className="figma-limited-seats-pill">Limited Seats</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ================================================================
               PROFESSIONAL UPSKILLING: WHO IT'S FOR SECTION (FIGMA SPEC)
               ================================================================ */}
            <section className="figma-upskilling-who-section">
              <div className="container">
                <h2 className="figma-who-main-title">Who it&apos;s for</h2>

                <div className="figma-who-tabs" role="tablist" aria-label="Who it is for tabs">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={upskillingTab === 'educators'}
                    className={`figma-who-tab-btn ${upskillingTab === 'educators' ? 'is-active' : ''}`}
                    onClick={() => setUpskillingTab('educators')}
                  >
                    For Educators
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={upskillingTab === 'professionals'}
                    className={`figma-who-tab-btn ${upskillingTab === 'professionals' ? 'is-active' : ''}`}
                    onClick={() => setUpskillingTab('professionals')}
                  >
                    For Professionals
                  </button>
                </div>

                <div className="figma-who-grid">
                  {/* Left Column: White Card with Photo */}
                  <div className="figma-who-card">
                    <div className="figma-who-card-img-wrap">
                      <img
                        src={upskillingMeetingImg}
                        alt={UPSKILLING_AUDIENCES[upskillingTab].card.title}
                        className="figma-who-card-img"
                      />
                    </div>
                    <div className="figma-who-card-body">
                      <span className="figma-who-card-tag">
                        {UPSKILLING_AUDIENCES[upskillingTab].card.tag}
                      </span>
                      <h3 className="figma-who-card-title">
                        {UPSKILLING_AUDIENCES[upskillingTab].card.title}
                      </h3>
                      <p className="figma-who-card-desc">
                        {UPSKILLING_AUDIENCES[upskillingTab].card.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Heading, Paragraph, Bullets, Best for Bar */}
                  <div className="figma-who-right-content">
                    <h3 className="figma-who-right-title">
                      {UPSKILLING_AUDIENCES[upskillingTab].right.title}
                    </h3>

                    <p className="figma-who-right-p">
                      {UPSKILLING_AUDIENCES[upskillingTab].right.desc}
                    </p>

                    <ul className="figma-who-bullets">
                      {UPSKILLING_AUDIENCES[upskillingTab].right.bullets.map((item) => (
                        <li key={item}>
                          <span className="figma-bullet-dot">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="figma-who-bestfor-pill">
                      <span className="figma-bestfor-icon">
                        <GraduationCap width="18" height="18" />
                      </span>
                      <span className="figma-bestfor-text">
                        <strong>Best for:</strong> {UPSKILLING_AUDIENCES[upskillingTab].right.bestFor}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ================================================================
               PROFESSIONAL UPSKILLING: OUR PROGRAMS SECTION (FIGMA SPEC)
               ================================================================ */}
            <section className="figma-upskilling-programs-section" id="upskilling-programs">
              <div className="container">
                <div className="figma-programs-header">
                  <h2 className="figma-programs-title">Our programs</h2>
                  <p className="figma-programs-subtitle">
                    Curated learning tracks designed for immediate, practical application in academic and professional careers.
                  </p>
                </div>

                <div className="figma-programs-list">
                  {UPSKILLING_PROGRAMS.map((prog) => (
                    <div key={prog.num} className="figma-program-row">
                      <span className="figma-prog-num-badge">{prog.num}</span>
                      <div className="figma-program-card">
                        <div className="figma-prog-card-top">
                          <h3 className="figma-prog-title">{prog.title}</h3>
                          <div className="figma-prog-tags">
                            {prog.tags.map((t) => (
                              <span key={t} className="figma-prog-tag">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="figma-prog-desc">{prog.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ================================================================
               PROFESSIONAL UPSKILLING: HOW THE LEARNING WORKS SECTION (FIGMA SPEC)
               ================================================================ */}
            <section className="container figma-learning-works-section">
              <div className="figma-learning-works-panel">
                <h2 className="figma-learning-works-title">How the learning works</h2>

                <div className="figma-learning-grid">
                  {/* Card 1: How we teach */}
                  <div className="figma-learning-card">
                    <div className="figma-learning-card-header">
                      <span className="figma-learning-icon-badge">
                        <Pin width="17" height="17" />
                      </span>
                      <h3 className="figma-learning-card-title">{LEARNING_WORKS.teach.title}</h3>
                    </div>
                    <ul className="figma-learning-bullets">
                      {LEARNING_WORKS.teach.bullets.map((b) => (
                        <li key={b}>
                          <span className="figma-learning-bullet-dot">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="figma-learning-card-footer">
                      <span>{LEARNING_WORKS.teach.footerLeft}</span>
                      <span>{LEARNING_WORKS.teach.footerRight}</span>
                    </div>
                  </div>

                  {/* Card 2: Formats */}
                  <div className="figma-learning-card">
                    <div className="figma-learning-card-header">
                      <span className="figma-learning-icon-badge">
                        <EventManagement width="18" height="18" />
                      </span>
                      <h3 className="figma-learning-card-title">{LEARNING_WORKS.formats.title}</h3>
                    </div>
                    <ul className="figma-learning-bullets">
                      {LEARNING_WORKS.formats.bullets.map((b) => (
                        <li key={b}>
                          <span className="figma-learning-bullet-dot">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="figma-learning-card-footer">
                      <span>{LEARNING_WORKS.formats.footerLeft}</span>
                      <span>{LEARNING_WORKS.formats.footerRight}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ================================================================
               5. WHAT YOU'LL GAIN SECTION (FIGMA SPEC)
               ================================================================ */}
            <section className="figma-gain-section">
              <div className="container">
                <h2 className="figma-gain-title">What you&apos;ll gain</h2>
                <div className="figma-gain-grid">
                  {WHAT_YOU_GAIN.map(({ icon: GainIcon, title, desc }, idx) => (
                    <div
                      key={title}
                      className={`figma-gain-col ${idx !== WHAT_YOU_GAIN.length - 1 ? 'has-divider' : ''}`}
                    >
                      <span className="figma-gain-icon-badge">
                        <GainIcon width="20" height="20" />
                      </span>
                      <h3 className="figma-gain-col-title">{title}</h3>
                      <p className="figma-gain-col-desc">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ================================================================
               6. VOICES OF LEARNERS SECTION (FIGMA SPEC)
               ================================================================ */}
            <section className="container figma-voices-section">
              <div className="figma-voices-panel">
                <h2 className="figma-voices-title">Voices of learners</h2>

                <div className="figma-voice-card">
                  <span className="figma-voice-quote-icon" aria-hidden="true">&ldquo;</span>
                  <p className="figma-voice-quote">
                    {VOICES_OF_LEARNERS[activeLearnerIdx].quote}
                  </p>

                  <div className="figma-voice-author-row">
                    <span className="figma-voice-avatar">
                      {VOICES_OF_LEARNERS[activeLearnerIdx].initials}
                    </span>
                    <div className="figma-voice-author-meta">
                      <h4 className="figma-voice-name">{VOICES_OF_LEARNERS[activeLearnerIdx].name}</h4>
                      <span className="figma-voice-dept">{VOICES_OF_LEARNERS[activeLearnerIdx].dept}</span>
                    </div>
                  </div>
                </div>

                {/* Pagination Dots */}
                <div className="figma-voice-dots">
                  {VOICES_OF_LEARNERS.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      aria-label={`Show testimonial ${dotIdx + 1}`}
                      className={`figma-voice-dot ${dotIdx === activeLearnerIdx ? 'is-active' : ''}`}
                      onClick={() => setActiveLearnerIdx(dotIdx)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* ================================================================
               7. FREQUENTLY ASKED QUESTIONS (FIGMA SPEC)
               ================================================================ */}
            <section className="container figma-upskilling-faq-section">
              <div className="figma-faq-two-col-grid">
                {/* Left Column */}
                <div className="figma-faq-left-info">
                  <h2 className="figma-faq-heading">Frequently Asked<br />Questions</h2>
                  <p className="figma-faq-lead">
                    Everything you need to know about our faculty bootcamps, executive tracks, certification validity, and publishing pipelines.
                  </p>

                  <div className="figma-faq-callout-card">
                    <div className="figma-faq-callout-header">
                      <OpenBook width="16" height="16" />
                      <span>Need a private syllabus?</span>
                    </div>
                    <p className="figma-faq-callout-text">
                      Our academic leads provide custom course mappings for accredited institutions and colleges.
                    </p>
                    <a
                      href="#contact"
                      className="figma-faq-callout-link"
                      onClick={scrollToContact}
                    >
                      <span>Speak to an Adviser</span>
                      <ArrowRight width="11" height="11" strokeWidth={2.4} />
                    </a>
                  </div>
                </div>

                {/* Right Column: Accordion */}
                <div className="figma-faq-right-accordion">
                  {UPSKILLING_FAQS.map((faq, idx) => {
                    const isOpen = openUpskillingFaq === idx
                    return (
                      <div key={faq.q} className={`figma-faq-row ${isOpen ? 'is-open' : ''}`}>
                        <button
                          type="button"
                          className="figma-faq-row-btn"
                          aria-expanded={isOpen}
                          onClick={() => setOpenUpskillingFaq((prev) => (prev === idx ? null : idx))}
                        >
                          <span className="figma-faq-q-text">{faq.q}</span>
                          <span className={`figma-faq-toggle-icon ${isOpen ? 'is-open' : ''}`}>
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="figma-faq-row-answer">
                            <p>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>

            {/* ================================================================
               8. CTA BANNER (FIGMA SPEC)
               ================================================================ */}
            <section className="container figma-cta-section">
              <div className="figma-cta-banner">
                <h2>Ready to protect your brand and creative work?</h2>
                <p>Talk to our team about trademark and copyright registration support.</p>
                <a
                  href="#contact"
                  className="btn-figma-cta-white"
                  onClick={scrollToContact}
                >
                  <span>Get Started</span>
                  <span className="figma-cta-arrow-circle">
                    <ArrowRight width="13" height="13" strokeWidth={2.6} />
                  </span>
                </a>
              </div>
            </section>
        </>
      ) : (
        /* ====================================================================
           STANDARD LAYOUT FOR OTHER 5 SERVICES
           ==================================================================== */
        <>
          {isEducationalEvent ? (
            <section className="education-event-hero">
              <div className="container">
                <nav className="education-event-breadcrumb" aria-label="Breadcrumb">
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault()
                      if (onNavigate) onNavigate('home', '#home')
                      else window.location.hash = '#home'
                    }}
                  >
                    Home
                  </a>
                  <span aria-hidden="true">&rsaquo;</span>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault()
                      if (onNavigate) onNavigate('home', '#services')
                      else window.location.hash = '#services'
                    }}
                  >
                    Services
                  </a>
                  <span aria-hidden="true">&rsaquo;</span>
                  <span aria-current="page">{service.title}</span>
                </nav>

                <div className="education-event-hero-grid">
                  <div className="education-event-hero-copy">
                    <span className="education-event-eyebrow">EDUCATION EVENT MANAGEMENT</span>
                    <h1>
                      Your <span>Event.</span> Your <span>Impact.</span>
                    </h1>
                    <p>
                      We plan and coordinate conferences, faculty development
                      programs, and workshops, so your team can focus on learning
                      while event details stay organized.
                    </p>
                    <div className="education-event-actions">
                      <a
                        href="#contact"
                        className="education-event-button is-primary"
                        onClick={scrollToContact}
                      >
                        Plan Your Events
                        <span><ArrowRight width="14" height="14" /></span>
                      </a>
                      <a
                        href="#education-event-types"
                        className="education-event-button is-outline"
                        onClick={scrollToEventTypes}
                      >
                        View Event Types
                      </a>
                    </div>
                    <ul className="education-event-highlights">
                      <li><CheckCircle width="14" height="14" />End-to-end coordination</li>
                      <li><CheckCircle width="14" height="14" />Proceedings &amp; certificates</li>
                      <li><CheckCircle width="14" height="14" />On-campus &amp; online execution</li>
                    </ul>
                  </div>

                  <div className="education-event-visual">
                    <img
                      src={educationEventImage}
                      alt="Academic symposium with an event presenter and attendees"
                    />
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <section className="service-hero">
              <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault()
                      if (onNavigate) onNavigate('home', '#home')
                      else window.location.hash = '#home'
                    }}
                  >
                    Home
                  </a>
                  <span className="bc-sep">/</span>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault()
                      if (onNavigate) onNavigate('home', '#services')
                      else window.location.hash = '#services'
                    }}
                  >
                    Services
                  </a>
                  <span className="bc-sep">/</span>
                  <span className="bc-current">{service.title}</span>
                </nav>

                <div className="service-hero-content">
                  <div className="service-hero-heading">
                    <span className="service-hero-icon">
                      <Icon width="34" height="34" />
                    </span>
                    <div>
                      <h1>{service.title}</h1>
                      <p className="service-hero-tagline">{service.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {isEducationalEvent && (
            <section className="education-event-lifecycle" aria-labelledby="education-event-lifecycle-title">
              <div className="container">
                <div className="education-event-lifecycle-content">
                  <div className="education-event-lifecycle-heading">
                    <h2 id="education-event-lifecycle-title">
                      One team, from first idea to final report
                    </h2>
                    <p>
                      Comprehensive pre-event, live-event, and post-event
                      coordination.
                    </p>
                  </div>
                  <div className="education-event-phases">
                    {EVENT_LIFECYCLE.map((phase) => (
                      <div className="education-event-phase" key={phase.step}>
                        <div className="education-event-phase-heading">
                          <span>{phase.step}</span>
                          <h3>{phase.title}</h3>
                        </div>
                        <ul>
                          {phase.items.map((item) => (
                            <li key={item}>
                              <CheckCircle width="13" height="13" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {isEducationalEvent && (
            <section className="education-event-process" aria-labelledby="education-event-process-title">
              <div className="container">
                <div className="education-event-process-content">
                  <div className="education-event-process-heading">
                    <h2 id="education-event-process-title">Event planning process</h2>
                    <p>
                      A structured seven-milestone roadmap from conceptual
                      blueprint through post-symposium publishing.
                    </p>
                  </div>
                  <ol className="education-event-timeline">
                    {EVENT_PROCESS_STEPS.map((item) => (
                      <li key={item.step}>
                        <span className="education-event-step-number">{item.step}</span>
                        <div className="education-event-step-copy">
                          <span className="education-event-step-stage">{item.stage}</span>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </section>
          )}

          {isEducationalEvent && (
            <section
              className="education-event-formats"
              id="education-event-types"
              aria-labelledby="education-event-formats-title"
            >
              <div className="container">
                <div className="education-event-formats-content">
                  <h2 id="education-event-formats-title">Event formats</h2>
                  <div className="education-event-format-controls" role="group" aria-label="Choose an event format">
                    {Object.entries(EVENT_FORMATS).map(([formatId, format]) => (
                      <button
                        key={formatId}
                        type="button"
                        aria-pressed={activeEventFormat === formatId}
                        className={activeEventFormat === formatId ? 'is-active' : ''}
                        onClick={() => setActiveEventFormat(formatId)}
                      >
                        {format.label}
                      </button>
                    ))}
                  </div>
                  <div className="education-event-format-card" aria-live="polite">
                    <p className="education-event-format-description">
                      {selectedEventFormat.description}
                    </p>
                    <div className="education-event-format-features">
                      {selectedEventFormat.features.map(({ icon: FeatureIcon, title, description }) => (
                        <article key={title}>
                          <span className="education-event-format-icon">
                            <FeatureIcon width="12" height="12" />
                          </span>
                          <div>
                            <h3>{title}</h3>
                            <p>{description}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {isEducationalEvent && (
            <section
              className="education-event-publishing"
              aria-labelledby="education-event-publishing-title"
            >
              <div className="container">
                <div className="education-event-publishing-content">
                  <header className="education-event-publishing-heading">
                    <h2 id="education-event-publishing-title">
                      Publishing Support &amp; Documentation
                    </h2>
                    <p>
                      Bridging physical event logistics with permanent archival
                      academic literature.
                    </p>
                  </header>
                  <div className="education-event-publishing-grid">
                    {EVENT_PUBLISHING_CARDS.map(
                      ({ title, subtitle, icon: CardIcon, bullets }) => (
                        <article className="education-event-publishing-card" key={title}>
                          <header className="education-event-publishing-card-heading">
                            <span aria-hidden="true">
                              <CardIcon width="16" height="16" />
                            </span>
                            <div>
                              <h3>{title}</h3>
                              <p>{subtitle}</p>
                            </div>
                          </header>
                          <ul>
                            {bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        </article>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          {!isEducationalEvent && (
            <div className="container service-main-container">
            <div className="service-content-grid">
              <div className="service-primary-content">
                <section className="service-card-section" id="upskilling-overview">
                  <h2 className="section-subtitle">Service Overview</h2>
                  <p className="service-overview-text">{service.overview}</p>

                  {service.audience && (
                    <div className="target-audience-box">
                      <h3>Ideal For:</h3>
                      <div className="audience-pills">
                        {service.audience.map((aud) => (
                          <span key={aud} className="audience-pill">
                            {aud}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </section>

                <section className="service-card-section">
                  <h2 className="section-subtitle">What We Offer & Key Deliverables</h2>
                  <div className="features-grid">
                    {service.features.map((feat) => (
                      <div key={feat.title} className="feature-item">
                        <span className="feature-bullet">
                          <Check width="14" height="14" />
                        </span>
                        <div>
                          <h4>{feat.title}</h4>
                          <p>{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {!isEducationalEvent && (
                  <section className="service-card-section">
                    <h2 className="section-subtitle">Our Proven Step-by-Step Workflow</h2>
                    <div className="workflow-steps">
                      {service.steps.map((st) => (
                        <div key={st.step} className="workflow-step-card">
                          <div className="step-num">{st.step}</div>
                          <div className="step-content">
                            <h4>{st.title}</h4>
                            <p>{st.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                <section className="service-card-section">
                  <h2 className="section-subtitle">Why Partner with Zedd 3+ Books?</h2>
                  <ul className="benefits-checklist">
                    {service.benefits.map((b) => (
                      <li key={b}>
                        <span className="benefit-icon">
                          <Check width="13" height="13" />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <aside className="service-sidebar">
                <div className="service-enquiry-card" id="enquiry-section">
                  <h3>Enquire About {service.title}</h3>
                  <p>Get in touch with our publication & academic consulting experts today.</p>

                  {formSubmitted ? (
                    <div className="enquiry-success">
                      <span className="success-icon">✓</span>
                      <h4>Thank You!</h4>
                      <p>
                        We received your inquiry regarding <strong>{service.title}</strong>. Our team will reach out within 24 hours.
                      </p>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => setFormSubmitted(false)}
                      >
                        Submit Another Query
                      </button>
                    </div>
                  ) : (
                    <form className="service-form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Dr. / Prof. / Your Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="name@university.edu / mail.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Phone / WhatsApp *</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="institution">University / Organization</label>
                        <input
                          id="institution"
                          name="institution"
                          type="text"
                          placeholder="College / Institute name"
                          value={formData.institution}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Your Requirements / Project Details</label>
                        <textarea
                          id="message"
                          name="message"
                          rows="3"
                          placeholder={`Tell us about your ${service.title} requirements...`}
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <button type="submit" className="btn btn-primary btn-block">
                        Request Consultation <ArrowRight />
                      </button>
                    </form>
                  )}

                  <div className="sidebar-direct-contact">
                    <p className="or-divider"><span>OR REACH DIRECTLY</span></p>
                    <a href={CONTACT.phoneHref} className="sidebar-contact-pill">
                      <Phone width="14" height="14" /> {CONTACT.phone}
                    </a>
                    <a
                      href={`mailto:${CONTACT.email}?subject=Inquiry: ${encodeURIComponent(service.title)}`}
                      className="sidebar-contact-pill"
                    >
                      <Mail width="14" height="14" /> {CONTACT.email}
                    </a>
                    <div className="sidebar-address">
                      <Pin width="14" height="14" />
                      <span>{CONTACT.address}</span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            </div>
          )}

          {/* Other Services Navigation Grid (Only on other 6 services) */}
          {!isEducationalEvent && (
            <section className="container other-services-section">
            <div className="other-services-header">
              <div>
                <span className="accent-label">Explore More</span>
                <h2>Other Academic & Publishing Services</h2>
              </div>
              <a
                href="#services"
                className="btn btn-secondary btn-sm"
                onClick={(e) => {
                  e.preventDefault()
                  if (onNavigate) onNavigate('home', '#services')
                  else window.location.hash = '#services'
                }}
              >
                All Services Overview <ArrowRight />
              </a>
            </div>

            <div className="other-services-grid">
              {otherServices.map((item) => {
                const ItemIcon = item.icon
                return (
                  <a
                    key={item.id}
                    href={`#service/${item.id}`}
                    className="other-service-card"
                    onClick={(e) => {
                      e.preventDefault()
                      if (onNavigate) onNavigate('service', item.id)
                      else window.location.hash = `#service/${item.id}`
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <span className="other-service-icon">
                      <ItemIcon width="20" height="20" />
                    </span>
                    <div className="other-service-text">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                    <span className="other-service-arrow">
                      <ArrowRight width="14" height="14" />
                    </span>
                  </a>
                )
              })}
            </div>
            </section>
          )}

          {isEducationalEvent && (
            <>
              <section className="container education-event-faq-section">
                <div className="figma-faq-two-col-grid">
                  <div className="figma-faq-left-info">
                    <h2 className="figma-faq-heading">
                      Frequently Asked<br />Questions
                    </h2>
                    <p className="figma-faq-lead">
                      Everything you need to know about planning academic
                      conferences, faculty programs, workshops, and event
                      documentation.
                    </p>
                    <div className="figma-faq-callout-card">
                      <div className="figma-faq-callout-header">
                        <EventManagement width="16" height="16" />
                        <span>Planning a tailored event?</span>
                      </div>
                      <p className="figma-faq-callout-text">
                        Our team can help shape your event format, timeline,
                        and coordination requirements.
                      </p>
                      <a
                        href="#contact"
                        className="figma-faq-callout-link"
                        onClick={scrollToContact}
                      >
                        <span>Speak to an Event Advisor</span>
                        <ArrowRight width="11" height="11" strokeWidth={2.4} />
                      </a>
                    </div>
                  </div>
                  <div className="figma-faq-right-accordion">
                    {EVENT_FAQS.map((faq, idx) => {
                      const isOpen = openEventFaq === idx
                      return (
                        <div
                          key={faq.q}
                          className={`figma-faq-row ${isOpen ? 'is-open' : ''}`}
                        >
                          <button
                            type="button"
                            className="figma-faq-row-btn"
                            aria-expanded={isOpen}
                            onClick={() =>
                              setOpenEventFaq((previous) =>
                                previous === idx ? null : idx,
                              )
                            }
                          >
                            <span className="figma-faq-q-text">{faq.q}</span>
                            <span
                              className={`figma-faq-toggle-icon ${isOpen ? 'is-open' : ''}`}
                              aria-hidden="true"
                            >
                              {isOpen ? '−' : '+'}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="figma-faq-row-answer">
                              <p>{faq.a}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>
              <section className="container figma-cta-section education-event-cta-section">
                <div className="figma-cta-banner">
                  <h2>Plan Your Events</h2>
                  <p>Talk to our team about event organizing support.</p>
                  <a
                    href="#contact"
                    className="btn-figma-cta-white"
                    onClick={scrollToContact}
                  >
                    <span>Get Started</span>
                    <span className="figma-cta-arrow-circle">
                      <ArrowRight width="13" height="13" strokeWidth={2.6} />
                    </span>
                  </a>
                </div>
              </section>
            </>
          )}
        </>
      )}
    </article>
  )
}
