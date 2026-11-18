import { CONTACT, SOCIAL_LINKS } from '../../../data/contact.js'
import { NAV_LINKS } from '../../../data/navigation.js'
import { SERVICES } from '../../../data/services.js'
import { ArrowUp, Facebook, LinkedIn, Mail, Phone, Pin, XLogo, YouTube } from '../../common/Icons.jsx'
import './Footer.css'

const YEAR = new Date().getFullYear()
const SOCIAL_ICONS = { LinkedIn, Facebook, YouTube, X: XLogo }

export default function Footer({ onNavigate }) {
  const handleNavClick = (href) => (e) => {
    e.preventDefault()
    if (onNavigate) {
      if (href.startsWith('#service/')) {
        onNavigate('service', href.replace('#service/', ''))
      } else {
        onNavigate('home', href)
      }
    } else {
      window.location.hash = href
    }
  }

  return (
    <footer id="contact" className="site-footer">
      <svg className="footer-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40 C 360 -10 720 20 1000 70 S 1350 110 1440 85 V120 H0z" fill="var(--tan)" />
        <path
          d="M0 40 C 360 -10 720 20 1000 70 S 1350 110 1440 85"
          fill="none"
          stroke="var(--rust)"
          strokeWidth="3"
        />
      </svg>

      <div className="container footer-body">
        <p className="footer-tagline">
          <strong>Zedd 3+ Books</strong> – Publish with confidence
        </p>

        <div className="footer-grid">
          <div className="footer-box">
            <h4>Zedd 3+ Books | Book Publishing, Printing and eBook Services</h4>
            <p>
              Publish your work with Zedd 3+ Books. We offer textbook publishing, patent support,
              copyrights, IEEE publications, Scopus book chapters, educational events, and upskilling.
            </p>
            <div className="socials">
              {SOCIAL_LINKS.map(({ label, href }) => {
                const Icon = SOCIAL_ICONS[label]
                return (
                  <a key={label} href={href} aria-label={label}>
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {NAV_LINKS.map((n) => (
                <li key={n.label}>
                  <a href={n.href} onClick={handleNavClick(n.href)}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.id || s.title}>
                  <a href={`#service/${s.id}`} onClick={handleNavClick(`#service/${s.id}`)}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-contact">
          <span className="pill">
            <Pin width="15" height="15" /> {CONTACT.address}
          </span>
          <a className="pill" href={CONTACT.phoneHref}>
            <Phone width="15" height="15" /> {CONTACT.phone}
          </a>
          <a className="pill" href={`mailto:${CONTACT.email}`}>
            <Mail width="15" height="15" /> {CONTACT.email}
          </a>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {YEAR} Zedd 3+ Books. All rights reserved.</p>
          <a href="#home" className="back-top" onClick={handleNavClick('#home')}>
            Back to top <ArrowUp />
          </a>
        </div>
      </div>

      <div className="footer-swoosh" aria-hidden="true" />
    </footer>
  )
}
