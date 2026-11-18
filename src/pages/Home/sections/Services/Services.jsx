import { ArrowRight } from '../../../../components/common/Icons.jsx'
import SectionTitle from '../../../../components/common/SectionTitle/SectionTitle.jsx'
import { SERVICES } from '../../../../data/services.js'
import './Services.css'

export default function Services({ onSelectService }) {
  const handleClick = (serviceId) => (e) => {
    e.preventDefault()
    if (onSelectService) {
      onSelectService(serviceId)
    } else {
      window.location.hash = `#service/${serviceId}`
    }
  }

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-panel">
          <SectionTitle centered>Our Academic & Publishing Services</SectionTitle>
          <p className="services-lead-text">
            Comprehensive publishing, intellectual property, and academic solutions for authors, faculty, and institutions.
          </p>

          <div className="service-grid">
            {SERVICES.map(({ id, icon: Icon, title, text }) => (
              <article key={id} className="service-card">
                <span className="service-icon">
                  <Icon width="20" height="20" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a
                  href={`#service/${id}`}
                  className="service-card-action"
                  onClick={handleClick(id)}
                >
                  Explore Details <ArrowRight width="13" height="13" />
                </a>
              </article>
            ))}
          </div>

          <div className="center">
            <a href="#contact" className="btn btn-primary btn-sm">
              Discuss Your Project With Us <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
