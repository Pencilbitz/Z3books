import { useState } from 'react'
import scopusVolumesImg from '../../assets/images/scopus-volumes-desk.jpg'
import scopusCitationImg from '../../assets/images/scopus-citation-lamp.jpg'
import {
  ArrowRight,
  BadgeCheck,
  Bulb,
  ChatSquare,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Copyright,
  DocumentCheck,
  FeatherSolid,
  FileEdit,
  Gear,
  Lock,
  Medal,
  OpenBook,
  QuestionCircle,
  Search,
  ShieldCheck,
  Target,
  Users,
} from '../../components/common/Icons.jsx'
import './ScopusServiceContent.css'

const WHAT_WE_OFFER_ITEMS = [
  {
    num: '1',
    icon: OpenBook,
    title: 'Volume selection',
    subtitle: 'Help in choosing a book and a call for chapters that fits your topic.',
    details:
      'We identify upcoming edited volumes aligned with your specific research area, verify active indexing status with publisher editorial boards, and match your topic with active Calls for Chapters (CFPs).',
  },
  {
    num: '2',
    icon: Bulb,
    title: 'Topic and outline',
    subtitle: 'Support in shaping your idea into a clear chapter outline.',
    details:
      'We help structure your research findings into a cohesive chapter proposal, ensuring clear problem formulation, theoretical framing, and thematic coherence that appeals to volume editors.',
  },
  {
    num: '3',
    icon: DocumentCheck,
    title: 'Formatting and references',
    subtitle: 'Publisher templates, citation style and reference checks.',
    details:
      'Complete compliance with publisher-specific style guides (Springer, Elsevier, CRC Press, Taylor & Francis), automated citation validation in APA, IEEE, or Chicago, and standardizing high-resolution figures.',
  },
  {
    num: '4',
    icon: FileEdit,
    title: 'Language check',
    subtitle: 'Clear, correct academic English.',
    details:
      'Professional academic language polishing, tone standardization, and rigorous proofreading to eliminate grammatical ambiguities while preserving the technical authenticity of your research voice.',
  },
  {
    num: '5',
    icon: ShieldCheck,
    title: 'Plagiarism check',
    subtitle: 'A similarity report before you submit.',
    details:
      'Comprehensive pre-submission Turnitin/iThenticate screening, detailed similarity breakdown, and targeted technical rewriting recommendations to ensure unimpeachable academic integrity.',
  },
  {
    num: '6',
    icon: ChatSquare,
    title: 'Review support',
    subtitle: 'Help in answering reviewer comments and revisions.',
    details:
      'Editorial peer review frequently involves constructive critique and amendment mandates. We assist in formulating an author response matrix, addressing reviewer queries rigorously, and implementing revisions seamlessly.',
  },
]

const HOW_IT_WORKS_STEPS = [
  {
    stepNum: '01',
    title: 'Initial Intake',
    desc: 'Tell us your research area and the work you want to publish.',
    pill: 'STEP 01 • CONSULTATION',
    icon: QuestionCircle,
  },
  {
    stepNum: '02',
    title: 'Volume Scoping',
    desc: 'We suggest suitable edited volumes and explain the terms.',
    pill: 'STEP 02 • CURATION',
    icon: DocumentCheck,
  },
  {
    stepNum: '03',
    title: 'Draft Refinement',
    desc: 'You prepare the chapter with our guidance on structure and format.',
    pill: 'STEP 03 • DRAFTING',
    icon: FileEdit,
  },
  {
    stepNum: '04',
    title: 'Pre-Check & File',
    desc: 'We check language, references and similarity, then you submit.',
    pill: 'STEP 04 • COMPLIANCE',
    icon: BadgeCheck,
  },
  {
    stepNum: '05',
    title: 'Review & Closure',
    desc: 'We support you through review and revisions.',
    pill: 'STEP 05 • PUBLICATION',
    icon: CheckCircle,
  },
]

const TARGET_COHORTS_PILLS = [
  'Research scholars',
  'PhD candidates',
  'Faculty members',
  'Postdoctoral researchers',
  'Industry researchers',
]

const WHY_CHOOSE_BOXES = [
  {
    icon: CheckCircle,
    title: 'Honest Publisher Intelligence',
    desc: 'Honest information about publishers, indexing and realistic timelines before starting.',
  },
  {
    icon: Search,
    title: 'Meticulous Editorial Checks',
    desc: 'Careful checks on language, references, and originality with authenticated similarity metrics.',
  },
  {
    icon: Users,
    title: 'End-to-End Handholding',
    desc: 'Support from initial topic conception right through to the final editorial submission.',
  },
  {
    icon: FeatherSolid,
    title: '100% Authorial Sovereignty',
    desc: 'Respect for your research, intellectual ownership, and the content forever stays yours.',
  },
]

const FAQ_TABS = [
  { id: 'all', label: 'All Topics' },
  { id: 'indexing', label: 'Indexing & Scopus' },
  { id: 'rights', label: 'Author Rights & IP' },
  { id: 'timelines', label: 'Timelines & Fees' },
  { id: 'review', label: 'Editorial Review' },
]

const FAQ_CARDS = [
  {
    id: 'indexing-assurance',
    category: 'indexing',
    tag: 'INDEXING ASSURANCE',
    topIcon: BadgeCheck,
    question: 'Do you guarantee Scopus or SCI indexing?',
    answer:
      'We only recommend volumes confirmed in active, verified Scopus/SCI series catalogs. While final indexing depends on post-publication publisher ingestion, we provide strict pre-vetting and verification reports.',
    footerIcon: CheckCircle,
    footerText: 'Verified ISBN/ISSN Catalogs',
  },
  {
    id: 'legal-copyright',
    category: 'rights',
    tag: 'LEGAL & COPYRIGHT',
    topIcon: FeatherSolid,
    question: 'Who retains copyright over the authored chapter?',
    answer:
      '100% Authorial Sovereignty. You retain complete intellectual ownership of your original ideas and draft. Standard commercial book contracts grant only publishing dissemination rights to the press.',
    footerIcon: Copyright,
    footerText: 'Full IP Retainment & Preprint Rights',
  },
  {
    id: 'production-cycle',
    category: 'timelines',
    tag: 'PRODUCTION CYCLE',
    topIcon: Clock,
    question: 'What is the typical timeline from submission to publication?',
    answer:
      'Edited volume cycles typically range from 4 to 8 months, including peer review, chapter proofing, ISBN cataloging, and official digital issuance by the publisher.',
    footerIcon: Target,
    footerText: 'Structured 3-Stage Milestone Tracking',
  },
  {
    id: 'peer-review',
    category: 'review',
    tag: 'PEER REVIEW SUPPORT',
    topIcon: ChatSquare,
    question: 'How does Zedd 3+ Books assist during peer review revisions?',
    answer:
      "Our editorial fellows assist with technical formatting, reference standardisation, clarity of academic English, and responding constructively to volume editors' peer review comments.",
    footerIcon: ChatSquare,
    footerText: 'Point-by-Point Rebuttal Formulation',
  },
]

export default function ScopusServiceContent({ onNavigate }) {
  // Accordion 6 ("Review support") is open by default as shown in Figma screenshot
  const [openAccordion, setOpenAccordion] = useState(5)
  const [activeFaqTab, setActiveFaqTab] = useState('all')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    field: '',
    manuscriptStatus: 'Idea / Topic Proposed',
    preferredIndex: 'Scopus Indexed',
    hasDraft: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const scrollToEnquiry = (e) => {
    e.preventDefault()
    document.getElementById('scopus-enquiry')?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleAccordion = (idx) => {
    setOpenAccordion((prev) => (prev === idx ? null : idx))
  }

  return (
    <div className="scopus-page-wrapper">
      <div className="container scopus-container">
        {/* Breadcrumb Navigation */}
        <nav className="scopus-breadcrumb" aria-label="Breadcrumb">
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
          <span className="scopus-bc-sep">&gt;</span>
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
          <span className="scopus-bc-sep">&gt;</span>
          <span className="scopus-bc-current">Scopus-Indexed Book Chapters</span>
        </nav>

        {/* Main Two-Column Layout */}
        <div className="scopus-main-grid">
          {/* ====================================================================
              LEFT COLUMN: HERO, OVERVIEW & WHAT WE OFFER ACCORDION
              ==================================================================== */}
          <div className="scopus-left-col">
            {/* Super Tag */}
            <span className="scopus-category-tag">SCOPUS-INDEXED BOOK CHAPTERS</span>

            {/* Main Title */}
            <h1 className="scopus-hero-title">
              Publish your research in<br />
              respected <span className="scopus-accent-crimson">Edited Volumes</span>
            </h1>

            {/* Subtitle */}
            <p className="scopus-hero-subtitle">
              Guidance for chapters in SCI and Scopus-listed books, from choosing a volume to final submission.
            </p>

            {/* Action Buttons */}
            <div className="scopus-hero-actions">
              <a
                href="#scopus-enquiry"
                className="btn-scopus-primary"
                onClick={scrollToEnquiry}
              >
                <span>Get Started</span>
                <span className="scopus-arrow-circle">
                  <ArrowRight width="13" height="13" strokeWidth={2.4} />
                </span>
              </a>

              <a
                href="#scopus-enquiry"
                className="btn-scopus-outline"
                onClick={scrollToEnquiry}
              >
                Talk to Our Team
              </a>
            </div>

            {/* Overview Panel */}
            <div className="scopus-overview-card">
              <div className="scopus-overview-header">
                <span className="scopus-overview-icon">
                  <OpenBook width="16" height="16" />
                </span>
                <h3 className="scopus-overview-heading">Overview</h3>
              </div>
              <p className="scopus-overview-text">
                A chapter in a well-regarded edited book adds weight to your research profile. We help researchers prepare and submit chapters for volumes listed in recognised indexes such as SCI and Scopus. We guide you from choosing a suitable book to preparing a chapter that meets the publisher&apos;s standards, and we tell you clearly about the publisher, the indexing and the timeline before you commit.
              </p>
            </div>

            {/* What We Offer Section */}
            <div className="scopus-offer-section">
              <div className="scopus-offer-header">
                <h2 className="scopus-offer-title">What we offer</h2>
                <p className="scopus-offer-subtitle">
                  Tailored editorial assistance from title inception through indexing verification.
                </p>
              </div>

              <div className="scopus-accordion-list">
                {WHAT_WE_OFFER_ITEMS.map((item, idx) => {
                  const isOpen = openAccordion === idx
                  const ItemIcon = item.icon
                  return (
                    <div
                      key={item.num}
                      className={`scopus-accordion-item ${isOpen ? 'is-open' : ''}`}
                    >
                      <button
                        type="button"
                        className="scopus-accordion-header"
                        aria-expanded={isOpen}
                        onClick={() => toggleAccordion(idx)}
                      >
                        <div className="scopus-accordion-header-left">
                          <span className="scopus-num-badge">{item.num}</span>
                          <span className="scopus-item-icon">
                            <ItemIcon width="16" height="16" />
                          </span>
                          <div className="scopus-item-meta">
                            <h4 className="scopus-item-title">{item.title}</h4>
                            <p className="scopus-item-sub">{item.subtitle}</p>
                          </div>
                        </div>

                        <span className="scopus-chevron-toggle">
                          {isOpen ? <ChevronUp width="14" height="14" /> : <ChevronDown width="14" height="14" />}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="scopus-accordion-body">
                          <p>{item.details}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* ====================================================================
              RIGHT COLUMN: STICKY SIDEBAR (QUICK ENQUIRY + 2 VISUAL CARDS)
              ==================================================================== */}
          <aside className="scopus-right-col">
            {/* Card 1: Quick Enquiry Form */}
            <div className="scopus-enquiry-card" id="scopus-enquiry">
              <div className="scopus-enquiry-top-pills">
                <span className="scopus-desk-pill">
                  <span className="scopus-live-dot" />
                  <span>DIRECT ADVISORY DESK</span>
                </span>
                <span className="scopus-free-pill">Free Assessment</span>
              </div>

              <h3 className="scopus-enquiry-title">Quick Enquiry</h3>
              <p className="scopus-enquiry-sub">
                Get confidential scoping feedback on your chapter within 24 hours from senior advisors.
              </p>

              {formSubmitted ? (
                <div className="scopus-enquiry-success">
                  <span className="scopus-success-badge">✓</span>
                  <h4>Enquiry Received!</h4>
                  <p>
                    Thank you, <strong>{formData.name || 'Scholar'}</strong>. Our editorial desk has logged your manuscript request and will respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    className="btn-scopus-outline btn-sm"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form className="scopus-enquiry-form" onSubmit={handleSubmit}>
                  <div className="scopus-form-group">
                    <label htmlFor="scopus-name">Full Name *</label>
                    <input
                      id="scopus-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Dr. / Prof. / Scholar Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="scopus-form-group">
                    <label htmlFor="scopus-email">Academic Email *</label>
                    <input
                      id="scopus-email"
                      name="email"
                      type="email"
                      required
                      placeholder="researcher@institution.edu"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="scopus-form-group">
                    <label htmlFor="scopus-field">Target Research Area / Field *</label>
                    <input
                      id="scopus-field"
                      name="field"
                      type="text"
                      required
                      placeholder="e.g. AI, Biomaterials, Smart Grid..."
                      value={formData.field}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="scopus-form-row">
                    <div className="scopus-form-group">
                      <label htmlFor="scopus-status">Manuscript Status</label>
                      <select
                        id="scopus-status"
                        name="manuscriptStatus"
                        value={formData.manuscriptStatus}
                        onChange={handleChange}
                      >
                        <option value="Idea / Topic Proposed">Idea / Topic Proposed</option>
                        <option value="Abstract Prepared">Abstract Prepared</option>
                        <option value="Draft in Progress">Draft in Progress</option>
                        <option value="Complete Manuscript">Complete Manuscript</option>
                      </select>
                    </div>

                    <div className="scopus-form-group">
                      <label htmlFor="scopus-index">Preferred Index / Pub</label>
                      <select
                        id="scopus-index"
                        name="preferredIndex"
                        value={formData.preferredIndex}
                        onChange={handleChange}
                      >
                        <option value="Scopus Indexed">Scopus Indexed</option>
                        <option value="Clarivate SCI / WoS">Clarivate SCI / WoS</option>
                        <option value="Springer Nature">Springer Nature</option>
                        <option value="Elsevier">Elsevier</option>
                        <option value="Taylor & Francis / CRC">Taylor & Francis / CRC</option>
                      </select>
                    </div>
                  </div>

                  <label className="scopus-checkbox-label">
                    <input
                      type="checkbox"
                      name="hasDraft"
                      checked={formData.hasDraft}
                      onChange={handleChange}
                    />
                    <span>I have an active chapter draft ready for peer review</span>
                  </label>

                  <button type="submit" className="btn-scopus-submit">
                    <span>Send Enquiry</span>
                    <ArrowRight width="13" height="13" strokeWidth={2.4} />
                  </button>

                  <div className="scopus-confidential-note">
                    <span className="scopus-note-icon">
                      <Check width="12" height="12" />
                    </span>
                    <span>
                      <strong>100% Confidential · Free Assessment.</strong> Directly routed to Chancery Editorial Desk (advisers@zedd3books.com). Non-disclosure protected.
                    </span>
                  </div>
                </form>
              )}
            </div>

            {/* Card 2: Indexed Scholarly Volumes Visual Card */}
            <div className="scopus-visual-card">
              <div className="scopus-card-image-wrap">
                <img
                  src={scopusVolumesImg}
                  alt="Scholarly volumes, books and research papers on desk"
                  className="scopus-card-img"
                />
                <span className="scopus-image-pill">
                  <Gear width="13" height="13" />
                  <span>Clarivate SCI &amp; Scopus</span>
                </span>
              </div>
              <div className="scopus-card-content">
                <h4 className="scopus-card-title">
                  Indexed Scholarly Volumes · Springer Nature, Elsevier &amp; Taylor &amp; Francis Standards
                </h4>
                <p className="scopus-card-desc">
                  Curated peer-reviewed editorial pathways with authenticated indexing verification.
                </p>
              </div>
            </div>

            {/* Card 3: Manuscript Scoping & Citation Rigor Visual Card */}
            <div className="scopus-visual-card">
              <div className="scopus-card-image-wrap">
                <img
                  src={scopusCitationImg}
                  alt="Study desk with green lamp, books and citation research"
                  className="scopus-card-img"
                />
                <span className="scopus-image-pill">
                  <OpenBook width="13" height="13" />
                  <span>COPE &amp; Scopus Compliance</span>
                </span>
              </div>
              <div className="scopus-card-content">
                <h4 className="scopus-card-title">
                  Manuscript Scoping &amp; Citation Rigor
                </h4>
                <p className="scopus-card-desc">
                  Comprehensive pre-submission checks, citation analysis, and editorial compliance aligning directly with indexed series criteria.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ====================================================================
          SECTION 2: HOW IT WORKS (5-STEP PROCESS TIMELINE)
          ==================================================================== */}
      <section className="scopus-how-section">
        <div className="container scopus-container">
          <div className="scopus-how-header">
            <h2 className="scopus-how-title">How It Works</h2>
            <p className="scopus-how-sub">
              A transparent, structured route to book chapter publication.
            </p>
          </div>

          <div className="scopus-steps-grid">
            {HOW_IT_WORKS_STEPS.map((st, idx) => {
              const StepIcon = st.icon
              return (
                <div
                  key={st.stepNum}
                  className={`scopus-step-col ${idx !== HOW_IT_WORKS_STEPS.length - 1 ? 'has-divider' : ''}`}
                >
                  <div className="scopus-step-badge-row">
                    <span className="scopus-step-num-badge">{st.stepNum}</span>
                    <span className="scopus-step-top-icon">
                      <StepIcon width="14" height="14" />
                    </span>
                  </div>
                  <h3 className="scopus-step-title">{st.title}</h3>
                  <p className="scopus-step-desc">{st.desc}</p>
                  <span className="scopus-step-pill">{st.pill}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 3: TARGET COHORTS & ACADEMIC INTEGRITY (WARM TAN PANEL)
          ==================================================================== */}
      <section className="scopus-cohorts-section">
        <div className="container scopus-container">
          <div className="scopus-cohorts-grid">
            {/* Card 1: Who it is for */}
            <div className="scopus-cohorts-card">
              <span className="scopus-card-super-tag">TARGET COHORTS</span>
              <h3 className="scopus-cohorts-card-title">Who it is for</h3>
              <p className="scopus-cohorts-card-desc">
                Designed for academics and research professionals seeking indexed citations, doctoral defense milestones, and peer-recognized scholarly dissemination.
              </p>

              <div className="scopus-cohort-pills">
                {TARGET_COHORTS_PILLS.map((pill) => (
                  <span key={pill} className="scopus-cohort-pill">
                    {pill}
                  </span>
                ))}
              </div>

              <div className="scopus-compliance-box">
                <span className="scopus-compliance-badge">
                  <Medal width="18" height="18" />
                </span>
                <div className="scopus-compliance-meta">
                  <h4 className="scopus-compliance-title">Institutional Compliance</h4>
                  <p className="scopus-compliance-sub">
                    Meets UGC-CARE, Scopus, &amp; SCI tenure requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Why choose Zedd 3+ Books */}
            <div className="scopus-why-card">
              <span className="scopus-card-super-tag">ACADEMIC INTEGRITY</span>
              <h3 className="scopus-why-card-title">Why choose Zedd 3+ Books</h3>

              <div className="scopus-why-boxes-grid">
                {WHY_CHOOSE_BOXES.map(({ icon: BoxIcon, title, desc }) => (
                  <div key={title} className="scopus-why-box">
                    <div className="scopus-why-box-top">
                      <span className="scopus-why-box-icon">
                        <BoxIcon width="15" height="15" />
                      </span>
                      <h4 className="scopus-why-box-title">{title}</h4>
                    </div>
                    <p className="scopus-why-box-desc">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="scopus-why-footer-bar">
                <span className="scopus-why-footer-item">
                  <Lock width="13" height="13" />
                  <span>COPE Code of Conduct Adherence</span>
                </span>
                <span className="scopus-why-footer-item">
                  <Copyright width="13" height="13" />
                  <span>Full IP Retainment</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4: FREQUENTLY ASKED QUESTIONS
          ==================================================================== */}
      <section className="scopus-faq-section">
        <div className="container scopus-container">
          <div className="scopus-faq-header">
            <h2 className="scopus-faq-title">Frequently Asked Questions</h2>
            <p className="scopus-faq-subtitle">
              Clear answers on indexing guarantees, authorship rights, editorial timelines, and publication integrity.
            </p>

            <div className="scopus-faq-tabs">
              {FAQ_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`scopus-faq-tab ${activeFaqTab === tab.id ? 'is-active' : ''}`}
                  onClick={() => setActiveFaqTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="scopus-faq-grid">
            {FAQ_CARDS.filter((card) => {
              if (activeFaqTab === 'all') return true
              return card.category === activeFaqTab
            }).map((faq) => {
              const TopIcon = faq.topIcon
              const FooterIcon = faq.footerIcon
              return (
                <div key={faq.id} className="scopus-faq-card">
                  <div className="scopus-faq-top">
                    <span className="scopus-faq-tag">{faq.tag}</span>
                    <span className="scopus-faq-icon">
                      <TopIcon width="16" height="16" />
                    </span>
                  </div>
                  <h3 className="scopus-faq-question">{faq.question}</h3>
                  <p className="scopus-faq-answer">{faq.answer}</p>
                  <div className="scopus-faq-footer">
                    <FooterIcon width="14" height="14" />
                    <span>{faq.footerText}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {(activeFaqTab === 'all' || activeFaqTab === 'indexing' || activeFaqTab === 'review') && (
            <div className="scopus-ethics-card">
              <div className="scopus-ethics-left">
                <div className="scopus-ethics-tag-row">
                  <span className="scopus-faq-tag">RESEARCH ETHICS</span>
                  <span className="scopus-ethics-badge-icon">
                    <BadgeCheck width="16" height="16" />
                  </span>
                </div>
                <h3 className="scopus-faq-question">
                  What are the ethical checks conducted before submission?
                </h3>
                <p className="scopus-faq-answer">
                  Every chapter undergoes authenticated plagiarism screening (iThenticate/Turnitin standards), AI-disclosure verification, and strict COPE (Committee on Publication Ethics) compliance checks.
                </p>
              </div>

              <div className="scopus-ethics-right">
                <div className="scopus-ethics-pill">
                  <Lock width="14" height="14" />
                  <span>Zero Ghostwriting Policy</span>
                </div>
                <div className="scopus-ethics-pill">
                  <CheckCircle width="14" height="14" />
                  <span>Similarity Audit &lt;10%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ====================================================================
          SECTION 5: READY TO PUBLISH CALL TO ACTION BANNER
          ==================================================================== */}
      <section className="scopus-cta-section">
        <div className="container scopus-container">
          <div className="scopus-cta-banner">
            <h2 className="scopus-cta-title">Ready to publish your chapter?</h2>
            <p className="scopus-cta-subtitle">
              Tell us your research area and we will suggest suitable volumes.
            </p>
            <a
              href="#scopus-enquiry"
              className="btn-scopus-cta-white"
              onClick={scrollToEnquiry}
            >
              <span>Get Started</span>
              <span className="scopus-cta-arrow-circle">
                <ArrowRight width="13" height="13" strokeWidth={2.4} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
