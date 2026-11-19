import patentHeroImg from '../../assets/images/patent-hero-blueprint.png'
import patentDraftingImg from '../../assets/images/patent-drafting-blueprint.jpg'
import patentFilingImg from '../../assets/images/patent-filing-stamp.jpg'
import patentProsecutionImg from '../../assets/images/patent-prosecution-handshake.jpg'
import patentMeetingImg from '../../assets/images/patent-attorneys-meeting.jpg'
import {
  ArrowRight,
  BadgeCheck,
  Bulb,
  Check,
  CheckCircle,
  Cpu,
  DocumentCheck,
  DraftingCompass,
  FeatherSolid,
  Flag,
  GraduationCap,
  Microscope,
  Rocket,
  ShieldCheck,
  Users,
} from '../../components/common/Icons.jsx'
import './PatentServiceContent.css'

const THREE_STAGES = [
  {
    num: '01',
    tag: 'PRIORITY FILING',
    title: 'Filing',
    desc: 'Establishing priority date, jurisdiction mapping, and formal application submission.',
    icon: Flag,
    footerText: 'Initial Protection Date Locked',
  },
  {
    num: '02',
    tag: 'CORE ARCHITECTURE',
    title: 'Drafting',
    desc: 'Precision technical specifications, claim architecture, and detailed patent illustrations.',
    icon: DraftingCompass,
    footerText: 'Robust Scope & Defensible Claims',
  },
  {
    num: '03',
    tag: 'GRANT FULFILLMENT',
    title: 'Prosecution',
    desc: 'Office action response, examination hearings, and patent grant fulfillment.',
    icon: CheckCircle,
    footerText: 'Statutory Approval Issued',
  },
]

const DRAFTING_BULLETS = [
  'Comprehensive independent & dependent claim drafting',
  'Detailed technical drawings, schematics & flow diagrams',
  'Prior art novelty benchmarking and patentability landscape',
  'Non-obviousness articulation and industrial applicability',
  'Complete provisional and complete specification authoring',
]

const FILING_BULLETS = [
  'Indian Patent Office (IPO) e-filing & official documentation',
  'International PCT & Paris Convention global pathway filings',
  'Assignment deeds, inventor declarations & power of attorney',
  'Fee calculation, MSME & start-up fee discount optimization',
  'Official docketing and priority date timestamp assurance',
]

const PROSECUTION_BULLETS = [
  'First Examination Report (FER) comprehensive rebuttal preparation',
  'Technical claim amendments without sacrificing scope breadth',
  'Representation during controller hearing sessions',
  'Prior art citation rebuttal and inventive step demonstrations',
  'Grant order verification and patent register publication',
]

const WHO_ITS_FOR_ITEMS = [
  {
    icon: GraduationCap,
    label: 'Academic & University Researchers',
  },
  {
    icon: Rocket,
    label: 'DeepTech & Engineering Startups',
  },
  {
    icon: Bulb,
    label: 'Independent Inventors & Innovators',
  },
  {
    icon: Microscope,
    label: 'R&D Departments & Corporate Labs',
  },
  {
    icon: Cpu,
    label: 'Hardware, IoT & Device Makers',
  },
]

const WHAT_TO_SHARE_BULLETS = [
  'High-level description of the technical problem solved',
  'Block diagrams, workflow charts, or prototype sketches',
  'Existing alternatives and why your solution is distinct',
  'Key novel features and experimental test data',
  'Co-inventor list and institutional affiliation details',
]

const WHAT_TO_EXPECT_BULLETS = [
  'Strict mutual Non-Disclosure Agreement (NDA) before sharing',
  'Dedicated registered patent agent as your single point of contact',
  'Transparent milestone-based drafting drafts and feedback loops',
  'Clear government fee breakdown with zero hidden administrative costs',
  'Lifelong guidance from priority filing to formal patent grant',
]

const WHY_CHOOSE_ITEMS = [
  {
    num: '1',
    title: 'Dual Domain Expertise',
    desc: 'Seasoned registered patent attorneys paired with specialized subject matter engineers across mechanical, chemical, electrical, software, and life sciences.',
  },
  {
    num: '2',
    title: 'Strict Confidentiality & Security',
    desc: 'End-to-end encrypted file exchange and binding NDAs at step zero to protect all unpublished manuscripts and proprietary formulations.',
  },
  {
    num: '3',
    title: 'Author & Inventor First',
    desc: 'Transparent pricing, milestone reviews, and clear layman explanations of legal nuances—no complex legalese without clear actionable context.',
  },
  {
    num: '4',
    title: 'Comprehensive Publishing & IP Synergy',
    desc: 'Seamless transition from proprietary patent filing to peer-reviewed academic publications and technical books without jeopardizing novelty or priority windows.',
  },
]

export default function PatentServiceContent({ onNavigate }) {
  const scrollToProcess = (e) => {
    e.preventDefault()
    document.getElementById('patent-process')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToEnquiry = (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate('home', '#contact')
    } else {
      window.location.hash = '#contact'
    }
  }

  return (
    <div className="patent-page-wrapper">
      <div className="container patent-container">
        {/* Breadcrumb Navigation */}
        <nav className="patent-breadcrumb" aria-label="Breadcrumb">
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
          <span className="patent-bc-sep">&gt;</span>
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
          <span className="patent-bc-sep">&gt;</span>
          <span className="patent-bc-current">Patent Grant Support</span>
        </nav>

        {/* Hero Section */}
        <section className="patent-hero-section">
          <div className="patent-hero-grid">
            {/* Left Column: Hero Copy & Actions */}
            <div className="patent-hero-left">
              <span className="patent-category-tag">PATENT GRANT SUPPORT</span>

              <h1 className="patent-hero-title">
                Your <span className="patent-accent-crimson">Idea.</span> Your <span className="patent-accent-crimson">Patent.</span>
              </h1>

              <p className="patent-hero-subtitle">
                End-to-end support for patent filing, drafting and prosecution, so your invention is protected and your application is prepared with care.
              </p>

              <div className="patent-hero-actions">
                <a
                  href="#contact"
                  className="btn-patent-primary"
                  onClick={scrollToEnquiry}
                >
                  <span>Book A Free Consultation</span>
                  <span className="patent-arrow-circle">
                    <ArrowRight width="13" height="13" strokeWidth={2.4} />
                  </span>
                </a>

                <a
                  href="#patent-process"
                  className="btn-patent-outline"
                  onClick={scrollToProcess}
                >
                  View the Process
                </a>
              </div>

              <div className="patent-hero-divider" />

              <div className="patent-trust-badges">
                <div className="patent-trust-badge">
                  <span className="patent-trust-icon">
                    <Check width="13" height="13" strokeWidth={3} />
                  </span>
                  <span className="patent-trust-text">Confidentiality Guaranteed &amp; NDAs</span>
                </div>

                <div className="patent-trust-badge">
                  <span className="patent-trust-icon">
                    <Check width="13" height="13" strokeWidth={3} />
                  </span>
                  <span className="patent-trust-text">Certified Patent Agents &amp; Technical Specialists</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="patent-hero-right">
              <div className="patent-hero-card">
                <img
                  src={patentHeroImg}
                  alt="Patent drafting, technical blueprint documentation and vintage desk"
                  className="patent-hero-img"
                />

                <div className="patent-docketing-pill">
                  <span className="patent-docketing-text">CERTIFIED DOCKETING WORKFLOW</span>
                  <span className="patent-docketing-icon">
                    <BadgeCheck width="16" height="16" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ====================================================================
          SECTION 2: THREE STAGES (WARM TAN PANEL)
          ==================================================================== */}
      <section className="patent-stages-section" id="patent-process">
        <div className="container patent-container">
          <div className="patent-stages-header">
            <h2 className="patent-stages-title">From idea to grant, in three stages</h2>
            <p className="patent-stages-sub">
              A disciplined, linear methodology designed to safeguard your inventions across global regulatory jurisdictions.
            </p>
          </div>

          <div className="patent-stages-grid">
            {THREE_STAGES.map((st, idx) => {
              const StageIcon = st.icon
              return (
                <div
                  key={st.num}
                  className={`patent-stage-col ${idx !== THREE_STAGES.length - 1 ? 'has-divider' : ''}`}
                >
                  <div className="patent-stage-top-row">
                    <span className="patent-stage-num">{st.num}</span>
                    <span className="patent-stage-tag">{st.tag}</span>
                  </div>

                  <h3 className="patent-stage-title">{st.title}</h3>
                  <p className="patent-stage-desc">{st.desc}</p>

                  <div className="patent-stage-footer">
                    <StageIcon width="14" height="14" />
                    <span>{st.footerText}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 3: PHASE 01 - PATENT DRAFTING (TWO-COLUMN DETAIL)
          ==================================================================== */}
      <section className="patent-drafting-section">
        <div className="container patent-container">
          <div className="patent-drafting-grid">
            {/* Left Column: Visual Card */}
            <div className="patent-drafting-visual-col">
              <div className="patent-drafting-card">
                <span className="patent-spec-pill">Specification Architecture</span>
                <img
                  src={patentDraftingImg}
                  alt="Drafting patent technical specifications and blueprints"
                  className="patent-drafting-img"
                />
              </div>
            </div>

            {/* Right Column: Copy & Bullets */}
            <div className="patent-drafting-info-col">
              <span className="patent-phase-pill">Phase 01</span>

              <h2 className="patent-drafting-title">Patent Drafting</h2>

              <h4 className="patent-drafting-accent-sub">
                Architecting robust claims that defend your proprietary novelties.
              </h4>

              <p className="patent-drafting-p">
                Our patent attorneys engineer specifications that withstand rigorous global scrutiny. We capture every novel embodiment to construct broad, defensible claims that protect your competitive moat.
              </p>

              <ul className="patent-drafting-bullets">
                {DRAFTING_BULLETS.map((bullet) => (
                  <li key={bullet} className="patent-drafting-bullet-item">
                    <span className="patent-bullet-dot" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="patent-best-for-pill">
                <Users width="15" height="15" />
                <span>
                  <strong>Best for:</strong> Hardware inventors, software creators, and university research labs
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4: PHASE 02 - PATENT FILING (WARM TAN PANEL)
          ==================================================================== */}
      <section className="patent-filing-section">
        <div className="container patent-container">
          <div className="patent-filing-grid">
            {/* Left Column: Copy & Bullets */}
            <div className="patent-filing-info-col">
              <span className="patent-phase-pill patent-phase-pill-light">Phase 02</span>

              <h2 className="patent-drafting-title">Patent Filing</h2>

              <h4 className="patent-drafting-accent-sub">
                Securing priority dates with flawless regulatory compliance.
              </h4>

              <p className="patent-drafting-p">
                We handle complete statutory formalities, statutory form drafting, fee structures, and timely submission across India and global treaty jurisdictions.
              </p>

              <ul className="patent-drafting-bullets">
                {FILING_BULLETS.map((bullet) => (
                  <li key={bullet} className="patent-drafting-bullet-item">
                    <span className="patent-bullet-dot" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="patent-best-for-pill patent-best-for-light">
                <DocumentCheck width="15" height="15" />
                <span>
                  <strong>Best for:</strong> Early-stage startups, independent researchers, and technology enterprises
                </span>
              </div>
            </div>

            {/* Right Column: Visual Card */}
            <div className="patent-filing-visual-col">
              <div className="patent-drafting-card patent-filing-card">
                <span className="patent-jurisdiction-pill">Jurisdiction Filing</span>
                <img
                  src={patentFilingImg}
                  alt="Official stamping and filing patent jurisdiction documents"
                  className="patent-drafting-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5: PHASE 03 - PROSECUTION SUPPORT (TWO-COLUMN DETAIL)
          ==================================================================== */}
      <section className="patent-prosecution-section">
        <div className="container patent-container">
          <div className="patent-drafting-grid">
            {/* Left Column: Visual Card */}
            <div className="patent-drafting-visual-col">
              <div className="patent-drafting-card">
                <span className="patent-fer-pill">FER &amp; Hearing Defense</span>
                <img
                  src={patentProsecutionImg}
                  alt="Patent prosecution defense, hearings, and agreement handshake"
                  className="patent-drafting-img"
                />
              </div>
            </div>

            {/* Right Column: Copy & Bullets */}
            <div className="patent-drafting-info-col">
              <span className="patent-phase-pill">Phase 03</span>

              <h2 className="patent-drafting-title">Prosecution Support</h2>

              <h4 className="patent-drafting-accent-sub">
                Navigating examiner scrutiny through strategic, evidence-backed advocacy.
              </h4>

              <p className="patent-drafting-p">
                The path to grant requires addressing examiner reports and prior art citations. We prepare rigorous technical responses and represent your interests through final grant issuance.
              </p>

              <ul className="patent-drafting-bullets">
                {PROSECUTION_BULLETS.map((bullet) => (
                  <li key={bullet} className="patent-drafting-bullet-item">
                    <span className="patent-bullet-dot" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="patent-best-for-pill">
                <FeatherSolid width="14" height="14" />
                <span>
                  <strong>Best for:</strong> Filed applicants facing examination objections or hearing notices
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 6: WHO IT'S FOR (5-ITEM AUDIENCE ROW)
          ==================================================================== */}
      <section className="patent-who-section">
        <div className="container patent-container">
          <div className="patent-who-header">
            <h2 className="patent-who-title">Who it&apos;s for</h2>
            <p className="patent-who-sub">
              Bespoke patent strategies customized for diverse technical domains and inventive maturity levels.
            </p>
          </div>

          <div className="patent-who-grid">
            {WHO_ITS_FOR_ITEMS.map((item) => {
              const ItemIcon = item.icon
              return (
                <div key={item.label} className="patent-who-item">
                  <div className="patent-who-badge">
                    <ItemIcon width="20" height="20" />
                  </div>
                  <h4 className="patent-who-label">{item.label}</h4>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 7: TRANSPARENT COLLABORATION PROTOCOL (WARM TAN PANEL)
          ==================================================================== */}
      <section className="patent-protocol-section">
        <div className="container patent-container">
          <div className="patent-protocol-card-wrapper">
            <h2 className="patent-protocol-title">Transparent Collaboration Protocol</h2>

            <div className="patent-protocol-grid">
              {/* Card 1: What to share */}
              <div className="patent-protocol-card">
                <div className="patent-protocol-card-header">
                  <span className="patent-protocol-icon-badge">
                    <DocumentCheck width="16" height="16" />
                  </span>
                  <h3 className="patent-protocol-card-title">What to share</h3>
                </div>

                <p className="patent-protocol-card-sub">
                  Initial technical materials our agents evaluate during step one:
                </p>

                <ul className="patent-protocol-bullets">
                  {WHAT_TO_SHARE_BULLETS.map((bullet) => (
                    <li key={bullet} className="patent-protocol-bullet-item">
                      <span className="patent-bullet-dot" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <p className="patent-protocol-footer-note">
                  *All transmissions protected under executed Mutual NDA.
                </p>
              </div>

              {/* Card 2: What you can expect */}
              <div className="patent-protocol-card">
                <div className="patent-protocol-card-header">
                  <span className="patent-protocol-icon-badge">
                    <ShieldCheck width="16" height="16" />
                  </span>
                  <h3 className="patent-protocol-card-title">What you can expect</h3>
                </div>

                <p className="patent-protocol-card-sub">
                  Standard client assurances upheld across every patent engagement:
                </p>

                <ul className="patent-protocol-bullets">
                  {WHAT_TO_EXPECT_BULLETS.map((bullet) => (
                    <li key={bullet} className="patent-protocol-bullet-item">
                      <span className="patent-bullet-dot" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <p className="patent-protocol-footer-note">
                  *Fixed transparent billing schedule throughout drafting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 8: WHY CHOOSE ZEDD 3+ BOOKS FOR PATENT SUPPORT
          ==================================================================== */}
      <section className="patent-why-section">
        <div className="container patent-container">
          <div className="patent-why-grid">
            {/* Left Column: Visual Card */}
            <div className="patent-why-visual-col">
              <div className="patent-why-card">
                <img
                  src={patentMeetingImg}
                  alt="Patent attorneys and engineers reviewing technical disclosure"
                  className="patent-why-img"
                />
              </div>
            </div>

            {/* Right Column: Numbered Value Props */}
            <div className="patent-why-info-col">
              <h2 className="patent-why-title">
                Why Choose Zedd 3+ Books for Patent Support
              </h2>

              <div className="patent-why-list">
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <div key={item.num} className="patent-why-item">
                    <span className="patent-why-num-badge">{item.num}</span>
                    <div className="patent-why-item-content">
                      <h4 className="patent-why-item-title">{item.title}</h4>
                      <p className="patent-why-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 9: READY TO PATENT YOUR WORK (BOTTOM CTA BANNER)
          ==================================================================== */}
      <section className="patent-cta-section">
        <div className="container patent-container">
          <div className="patent-cta-banner">
            <h2 className="patent-cta-title">Ready to Patent your work?</h2>
            <p className="patent-cta-sub">
              Talk to our team about patent registration support.
            </p>
            <a
              href="#contact"
              className="btn-patent-cta-white"
              onClick={scrollToEnquiry}
            >
              <span>Get Started</span>
              <span className="patent-cta-arrow-circle">
                <ArrowRight width="13" height="13" strokeWidth={2.4} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
