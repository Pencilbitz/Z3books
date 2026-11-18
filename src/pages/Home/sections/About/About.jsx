import aboutTeamBg from '../../../../assets/images/about-team-bg.webp'
import {
  BookSolid,
  BooksSolid,
  BulbSolid,
  FeatherSolid,
  PenNibSolid,
} from '../../../../components/common/Icons.jsx'
import SectionTitle from '../../../../components/common/SectionTitle/SectionTitle.jsx'
import './About.css'

// Icon positions as [x%, y%] of the background photo, so the arc always
// sits above the team's heads at any screen width.
const ARC_ICONS = [
  { Icon: BookSolid, at: [9.2, 29.4] },
  { Icon: FeatherSolid, at: [17.5, 14.3] },
  { Icon: BulbSolid, at: [27, 7.6] },
  { Icon: PenNibSolid, at: [36.1, 15.6] },
  { Icon: BooksSolid, at: [43.2, 29.8] },
]

const ARC_PATH = 'M9.2 29.4 C 10.5 20, 14 16.4, 17.5 14.3 C 20.5 9.8, 24 7.6, 27 7.6 C 30 7.6, 33.5 10, 36.1 15.6 C 39.5 17.5, 42 22, 43.2 29.8'

function IconArc() {
  return (
    <div className="about-art" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d={ARC_PATH} />
      </svg>
      {ARC_ICONS.map(({ Icon, at: [x, y] }) => (
        <span key={`${x}-${y}`} className="arc-icon" style={{ left: `${x}%`, top: `${y}%` }}>
          <Icon />
        </span>
      ))}
    </div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="about"
      style={{ '--about-bg': `url(${aboutTeamBg})` }}
      aria-labelledby="about-title"
    >
      {/* The team photo is the section background; this describes it for screen readers. */}
      <span
        className="visually-hidden"
        role="img"
        aria-label="The Zedd 3+ Books team discussing a book project around a table"
      />

      <IconArc />

      <div className="about-copy">
        <SectionTitle id="about-title">About Us</SectionTitle>
        <p>
          Zedd 3+ Books is a publishing service for first-time and experienced authors. We guide you
          at every step, keep the process clear and honest, and make sure your book looks and reads
          as well as any traditionally published title. You keep control of your work, and we handle
          the details.
        </p>
      </div>
    </section>
  )
}
