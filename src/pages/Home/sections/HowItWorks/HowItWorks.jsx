import { REASONS, STEPS } from '../../../../data/process.js'
import './HowItWorks.css'

function InfoCard({ title, items }) {
  return (
    <article className="info-card">
      <h3>{title}</h3>
      <ul className="dot-list">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </article>
  )
}

export default function HowItWorks() {
  return (
    <section id="packages" className="howwhy">
      <div className="howwhy-band" aria-hidden="true" />
      <div className="container howwhy-grid">
        <InfoCard title="How it works" items={STEPS} />
        <InfoCard title="Why choose Zedd 3+ Books" items={REASONS} />
      </div>
    </section>
  )
}
