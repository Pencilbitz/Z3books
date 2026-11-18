import { ArrowRight } from '../../../../components/common/Icons.jsx'
import SectionTitle from '../../../../components/common/SectionTitle/SectionTitle.jsx'
import { SERVICES } from '../../../../data/services.js'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-panel">
          <SectionTitle centered>Our Services</SectionTitle>

          <div className="service-grid">
            {SERVICES.map(({ icon: Icon, title, text }) => (
              <article key={title} className="service-card">
                <span className="service-icon">
                  <Icon width="18" height="18" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="center">
            <a href="#packages" className="btn btn-primary btn-sm">
              Explore All Services <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
