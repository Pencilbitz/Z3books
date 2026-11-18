import { useState } from 'react'
import { ArrowRight, Check, Mail, Phone, Pin } from '../../components/common/Icons.jsx'
import { CONTACT } from '../../data/contact.js'
import { SERVICES } from '../../data/services.js'
import './ServiceDetail.css'

export default function ServiceDetail({ serviceId, onNavigate }) {
  const service = SERVICES.find((s) => s.id === serviceId) || SERVICES[0]
  const otherServices = SERVICES.filter((s) => s.id !== service.id)

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

  const Icon = service.icon

  return (
    <article className="service-detail-page">
      {/* Top Banner / Breadcrumb */}
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

      {/* Main Content Layout */}
      <div className="container service-main-container">
        <div className="service-content-grid">
          {/* Left Column: Overview, Features, Workflow */}
          <div className="service-primary-content">
            {/* Overview Section */}
            <section className="service-card-section">
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

            {/* Key Features & Deliverables */}
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

            {/* 4-Step Process Roadmap */}
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

            {/* Key Benefits */}
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

          {/* Right Column: Sticky Enquiry Card & Contact */}
          <aside className="service-sidebar">
            <div className="service-enquiry-card">
              <h3>Enquire About {service.title}</h3>
              <p>Get in touch with our publication & academic consulting experts today.</p>

              {formSubmitted ? (
                <div className="enquiry-success">
                  <span className="success-icon">✓</span>
                  <h4>Thank You!</h4>
                  <p>We received your inquiry regarding <strong>{service.title}</strong>. Our team will reach out within 24 hours.</p>
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
                <a href={`mailto:${CONTACT.email}?subject=Inquiry: ${encodeURIComponent(service.title)}`} className="sidebar-contact-pill">
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

        {/* Other Services Navigation Grid */}
        <section className="other-services-section">
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
      </div>
    </article>
  )
}
