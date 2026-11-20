import {
  BookChapter,
  ConferencePaper,
  EventManagement,
  Patent,
  ShieldCheck,
  Textbook,
  Upskilling,
} from '../components/common/Icons.jsx'
import textbookCardImage from '../assets/images/textbook-hero-desk-hd.jpg'
import patentCardImage from '../assets/images/patent-drafting-blueprint.jpg'
import trademarkCardImage from '../assets/images/trademark-quill.png'
import ieeeCardImage from '../assets/images/ieee-conference-presenter.png'
import scopusCardImage from '../assets/images/scopus-volumes-desk.jpg'
import eventCardImage from '../assets/images/education-event-conference.png'
import upskillingCardImage from '../assets/images/about-team-bg.webp'

export const SERVICES = [
  {
    id: 'textbook-publications',
    icon: Textbook,
    title: 'Textbook Publications',
    text: 'Editing, ISBN & distribution',
    badge: 'Academic & Higher Education',
    cardImage: textbookCardImage,
    cardDetail: 'From editorial review to print-ready pages.',
    overview:
      'We offer comprehensive end-to-end publishing solutions for university professors, research faculty, and academic authors. From technical review and copyediting to official ISBN registration and national distribution across commercial and institutional networks.',
    features: [
      {
        title: 'Editorial & Peer Review',
        desc: 'Rigorous academic copyediting, grammar correction, and structural review tailored to curriculum guidelines.',
      },
      {
        title: 'Official ISBN & Cataloging',
        desc: 'Legitimate 13-digit ISBN allotment, barcode generation, and statutory metadata registration.',
      },
      {
        title: 'Interior Typesetting & Figures',
        desc: 'Professional typography, equation formatting (LaTeX/MathML), index creation, and custom technical illustrations.',
      },
      {
        title: 'Print & Digital Distribution',
        desc: 'High-quality paperback/hardcover print runs with distribution across Amazon, Flipkart, Kindle, and university libraries.',
      },
    ],
    benefits: [
      'Accredited publications meeting UGC / AICTE / NIRF criteria',
      'Royalty transparency with detailed monthly sales reports',
      'Dedicated author coordinator throughout the process',
      'Complimentary author copies and institutional catalog inclusion',
    ],
    steps: [
      { step: '01', title: 'Manuscript Submission', desc: 'Submit your book proposal and initial manuscript draft for technical appraisal.' },
      { step: '02', title: 'Editing & Formatting', desc: 'Our academic editors refine content, layout, equations, and chapter summaries.' },
      { step: '03', title: 'ISBN & Proof Sign-off', desc: 'ISBN allocation, final author proof verification, and copyright clearance.' },
      { step: '04', title: 'Printing & Distribution', desc: 'Production and global distribution across physical and eCommerce bookstores.' },
    ],
    audience: ['University Professors', 'Department Heads', 'Research Authors', 'Colleges & Institutions'],
  },
  {
    id: 'patent-grant-support',
    icon: Patent,
    title: 'Patent Grant Support',
    text: 'Filing, drafting & prosecution',
    badge: 'Intellectual Property Rights',
    cardImage: patentCardImage,
    cardDetail: 'Guidance through search, drafting and filing.',
    overview:
      'End-to-end patent consultancy for innovators, faculty researchers, engineering institutions, and startups. We assist at every stage of the patent lifecycle—from prior art novelty search to drafting technical claims, formal office filings, and hearing responses.',
    features: [
      {
        title: 'Prior Art & Patentability Search',
        desc: 'In-depth global database search to verify novelty, inventive step, and industrial applicability before filing.',
      },
      {
        title: 'Provisional & Complete Drafting',
        desc: 'Meticulous drafting of patent specifications, abstract, drawings, and legally sound claims adhering to patent acts.',
      },
      {
        title: 'Patent Office Filing (Indian & PCT)',
        desc: 'Official filing with the Indian Patent Office (IPO) and PCT international applications with docket tracking.',
      },
      {
        title: 'FER Response & Hearing Prosecution',
        desc: 'Expert responses to First Examination Reports (FER), office objections, and representation during controller hearings.',
      },
    ],
    benefits: [
      'Handled by certified patent agents and technical domain experts',
      'Strengthens NAAC Criterion 3 & NIRF innovation rankings',
      'Fast-track examination assistance (Form 18A) for eligible applicants',
      'Strict confidentiality under non-disclosure agreements (NDAs)',
    ],
    steps: [
      { step: '01', title: 'Invention Disclosure', desc: 'Submit technical disclosure form and discuss novelty with our patent counsel.' },
      { step: '02', title: 'Prior Art Search', desc: 'Comprehensive clearance report with patentability opinion.' },
      { step: '03', title: 'Drafting & Filing', desc: 'Drafting specifications & claims, followed by formal submission.' },
      { step: '04', title: 'FER & Grant Prosecution', desc: 'Addressing examiner queries, attending hearings, and securing the grant.' },
    ],
    audience: ['Faculty Researchers', 'Innovators & Inventors', 'R&D Labs', 'Engineering Colleges'],
  },
  {
    id: 'trademarks-copyright-services',
    icon: ShieldCheck,
    title: 'Trademarks & Copyright Services',
    text: 'Protect your brand & creative work',
    badge: 'Brand & Creative Assets',
    cardImage: trademarkCardImage,
    cardDetail: 'Support for protecting original work and identity.',
    overview:
      'Robust legal protection for institutional brand identities, logos, course materials, books, software source code, and artistic content. We manage statutory registrations and dispute defenses to prevent unauthorized copying and infringement.',
    features: [
      {
        title: 'Comprehensive Trademark Search',
        desc: 'Pre-filing trademark availability check across Nice Classification categories to avoid conflicting marks.',
      },
      {
        title: 'Trademark Registration & Protection',
        desc: 'Filing form TM-A for brand names, logos, slogans, and certification marks through certificate issuance.',
      },
      {
        title: 'Copyright for Software & Literary Works',
        desc: 'Statutory copyright filing for books, course syllabi, research papers, software code, and educational media.',
      },
      {
        title: 'Objection & Opposition Handling',
        desc: 'Drafting legal replies to examination reports, resolving discrepancies, and defending against opposition.',
      },
    ],
    benefits: [
      'Exclusive commercial and legal rights over your intellectual assets',
      'Prevention of unauthorized commercial exploitation and piracy',
      'Formal legal standing to seek injunctions and statutory damages',
      'Nationwide statutory protection with continuous registry monitoring',
    ],
    steps: [
      { step: '01', title: 'Asset Audit & Class Search', desc: 'Identifying classes (goods/services) and assessing registrability.' },
      { step: '02', title: 'Application Preparation', desc: 'Preparing Statement of User, NOCs, specimens, and power of attorney.' },
      { step: '03', title: 'Filing & TM Status', desc: 'Filing on the IP India portal and obtaining immediate application number.' },
      { step: '04', title: 'Registration Certificate', desc: 'Handling registry queries, journal publication, and obtaining final certificate.' },
    ],
    audience: ['Institutions & Universities', 'EdTech Ventures', 'Authors & Content Creators', 'Startups'],
  },
  {
    id: 'ieee-conference-publications',
    icon: ConferencePaper,
    title: 'IEEE Conference Publications',
    text: 'Papers for IEEE & top-tier conferences',
    badge: 'Peer-Reviewed Conferences',
    cardImage: ieeeCardImage,
    cardDetail: 'Editing and formatting for conference requirements.',
    overview:
      'Independent editorial and technical preparation support for scholars submitting their own research to IEEE and other reputable conferences. We can help with formatting, language clarity, submission files, and revisions. Conference acceptance and publication decisions remain with the conference and publisher.',
    features: [
      {
        title: 'Paper Structure & Flow',
        desc: 'Review section order, abstract, problem statement, methods, results, and conclusions for a clear flow without changing your research claims.',
      },
      {
        title: 'Language & Clarity Editing',
        desc: 'Refine academic tone, grammar, technical terminology, and readability while keeping the research and final wording under your control.',
      },
      {
        title: 'IEEE Formatting',
        desc: 'Format your paper in the supplied two-column template and review margins, equations, and citation style against the conference guidelines.',
      },
      {
        title: 'Figures & Tables',
        desc: 'Check captions, labels, legibility, and table alignment so visuals are presented clearly and consistently.',
      },
      {
        title: 'Similarity & Citation Support',
        desc: 'Review similarity reports and references to flag attribution gaps or passages that may need author-led revision.',
      },
      {
        title: 'Submission & Revision Support',
        desc: 'Organize required files and help structure point-by-point reviewer responses for your review and approval.',
      },
    ],
    benefits: [
      'A clear editorial review focused on the readability of your own research',
      'Formatting checked against the conference guidelines you provide',
      'Practical support preparing revisions and reviewer responses',
      'You retain control of the research, authorship, and submission decisions',
    ],
    steps: [
      { step: '1', title: 'Manuscript Intake & Scope', desc: 'Confirm the target venue, requested support, and confidentiality arrangements before sharing a draft.' },
      { step: '2', title: 'Diagnostic Evaluation', desc: 'Review structure, academic tone, clarity, and the author instructions supplied for the conference.' },
      { step: '3', title: 'Technical Editing & IEEE Styling', desc: 'Edit language and format the paper against the supplied template; you review and approve technical changes.' },
      { step: '4', title: 'Author Review & Iteration', desc: 'Receive tracked editorial changes, discuss them with us, and decide which revisions to accept.' },
      { step: '5', title: 'Final Submission Readiness', desc: 'Check the prepared manuscript, figures, references, and required files against the venue instructions.' },
      { step: '6', title: 'Submission & Reviewer Response Support', desc: 'Get help organizing files and structuring responses to reviewer comments; you retain control of submission.' },
    ],
    audience: ['Research Scholars (Ph.D./M.Tech)', 'Engineering Faculty', 'R&D Investigators', 'Student Innovators'],
  },
  {
    id: 'scopus-indexed-book-chapters',
    icon: BookChapter,
    title: 'Scopus-Indexed Book Chapters',
    text: 'Chapters in SCI & Scopus volumes',
    badge: 'Scopus & Web of Science Indexing',
    cardImage: scopusCardImage,
    cardDetail: 'Chapter preparation for academic authors.',
    overview:
      'Facilitating publication of contributed scholarly book chapters in edited reference books, handbooks, and monographs brought out by premier global academic publishers including Springer, Elsevier, CRC Press, Taylor & Francis, and Wiley.',
    features: [
      {
        title: 'CFP Matching & Thematic Selection',
        desc: 'Connecting authors to active Calls for Chapters (CFPs) directly matched to their research domain.',
      },
      {
        title: 'Proposal & Abstract Drafting',
        desc: 'Crafting persuasive chapter outlines, abstracts, and table-of-contents aligned with volume editorial scope.',
      },
      {
        title: 'Scholarly Writing & Citation Curation',
        desc: 'Full chapter development with authoritative bibliography formatting (APA, IEEE, Chicago, Harvard).',
      },
      {
        title: 'Guaranteed Scopus Indexing Track',
        desc: 'Coordination with volume editors to track post-publication indexing on Scopus and Clarivate Web of Science.',
      },
    ],
    benefits: [
      'Significant boost to Academic Performance Indicator (API) scores for faculty promotions',
      'Worldwide citation footprint through international academic library networks',
      'Co-authoring opportunities with renowned subject leaders',
      'Formal DOI and indexed chapter metadata',
    ],
    steps: [
      { step: '01', title: 'Topic & Call Matching', desc: 'Selecting appropriate volume themes with verified Scopus indexing.' },
      { step: '02', title: 'Abstract Acceptance', desc: 'Preparing and submitting chapter abstract for editorial approval.' },
      { step: '03', title: 'Full Chapter Composition', desc: 'Drafting, proofreading, citation verification, and plagiarism filtering.' },
      { step: '04', title: 'Production & Indexing', desc: 'Addressing galley proofs, final release, and index tracking.' },
    ],
    audience: ['Academicians Seeking API Points', 'Doctoral Candidates', 'Postdoctoral Fellows', 'Industry Experts'],
  },
  {
    id: 'educational-event-management',
    icon: EventManagement,
    title: 'Educational Event Management',
    text: 'Conferences, FDPs & workshops',
    badge: 'Institutional Academic Events',
    cardImage: eventCardImage,
    cardDetail: 'Planning and coordination from start to finish.',
    overview:
      'Turnkey management and technical coordination for international conferences, national symposia, Faculty Development Programs (FDPs), workshops, and hackathons for universities and higher education institutions.',
    features: [
      {
        title: 'Conference Planning & Execution',
        desc: 'End-to-end event conceptualization, keynote dignitary coordination, scheduling, and stage/AV management.',
      },
      {
        title: 'Paper Submission & Review Portal',
        desc: 'Setup and administration of peer-review management platforms (EasyChair, Microsoft CMT, or custom portal).',
      },
      {
        title: 'Proceedings Publishing & ISBN Allotment',
        desc: 'Typesetting conference proceedings with ISBN or coordinating indexation partnerships with international publishers.',
      },
      {
        title: 'Hybrid/Virtual Streaming & Kits',
        desc: 'High-definition live streaming, digital delegate kits, automated verification, and e-certificates.',
      },
    ],
    benefits: [
      'Flawless operational execution taking logistical burden off faculty committees',
      'Enhanced institutional brand visibility among global academia',
      'Full compliance documentation for NAAC Criterion 6 and NBA audits',
      'Customized sponsorship brochures and participant registration pipelines',
    ],
    steps: [
      { step: '01', title: 'Event Blueprint & Budgeting', desc: 'Defining themes, dates, speaker lineups, and financial modeling.' },
      { step: '02', title: 'Portal Setup & Outreach', desc: 'Deploying conference website, CFP portal, and digital marketing.' },
      { step: '03', title: 'Track Sessions & Execution', desc: 'Orchestrating technical tracks, keynote addresses, and delegate support.' },
      { step: '04', title: 'Proceedings & Archiving', desc: 'Publishing proceedings volume, distributing certificates, and audit report.' },
    ],
    audience: ['Colleges & Universities', 'Professional Societies (IEEE, ISTE, ACM chapters)', 'Departments & Centres'],
  },
  {
    id: 'professional-upskilling-services',
    icon: Upskilling,
    title: 'Professional Upskilling Services',
    text: 'Programs for educators & professionals',
    badge: 'Career & Faculty Advancement',
    cardImage: upskillingCardImage,
    cardDetail: 'Practical learning for educators and teams.',
    overview:
      'Immersive, outcome-driven professional development masterclasses and certification courses designed specifically for educators, researchers, and technical professionals to master emerging pedagogical methodologies, AI tools, and research frameworks.',
    features: [
      {
        title: 'AI Tools in Teaching & Research',
        desc: 'Hands-on training in leveraging generative AI, data visualization, and automated research literature workflows responsibly.',
      },
      {
        title: 'Research Methodology & Grant Writing',
        desc: 'Intensive bootcamps on drafting high-impact research proposals for funding agencies (DST, SERB, AICTE, ICSSR).',
      },
      {
        title: 'Outcome-Based Education (OBE) & NEP',
        desc: 'Workshops on mapping course outcomes (CO-PO), Bloom’s taxonomy assessment design, and NEP 2020 integration.',
      },
      {
        title: 'Industry-Academia Immersion',
        desc: 'Practitioner-led training on emerging technologies including Cloud, Data Science, Cybersecurity, and IoT.',
      },
    ],
    benefits: [
      'Recognized certificates of completion for career advancement and CAS files',
      'Practical hands-on lab sessions with real-world case studies',
      'Trainers with extensive academic leadership and industry experience',
      'Customized institutional training packages with on-campus delivery options',
    ],
    steps: [
      { step: '01', title: 'Training Needs Assessment', desc: 'Consulting with institution leadership to identify curriculum focus areas.' },
      { step: '02', title: 'Curriculum & Trainer Alignment', desc: 'Tailoring modules and assigning expert practitioners and senior faculty.' },
      { step: '03', title: 'Interactive Masterclasses', desc: 'Live hands-on sessions with assignments, capstone work, and Q&A.' },
      { step: '04', title: 'Assessment & Certification', desc: 'Participant evaluation, certificate issuance, and feedback analytics.' },
    ],
    audience: ['Engineering & Arts Faculty', 'Corporate Professionals', 'Research Scholars', 'Academic Administrators'],
  },
]
