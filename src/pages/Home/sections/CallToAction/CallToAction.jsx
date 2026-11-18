import { ArrowRight } from '../../../../components/common/Icons.jsx'
import './CallToAction.css'

export default function CallToAction() {
  return (
    <section className="cta-wrap">
      <div className="container">
        <div className="cta">
          <p className="cta-eyebrow">Have a book in mind?</p>
          <h2>Talk to us for a free consultation and get a clear plan and quote for your book.</h2>
          <div className="btn-row">
            <a href="#contact" className="btn btn-light btn-sm">
              Publish With Us <ArrowRight />
            </a>
            <a href="#contact" className="btn btn-light btn-sm">
              Contact Us <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
