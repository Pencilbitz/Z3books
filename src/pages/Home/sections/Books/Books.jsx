import { BookCover } from '../../../../components/common/BookCover/BookCover.jsx'
import SectionTitle from '../../../../components/common/SectionTitle/SectionTitle.jsx'
import { BOOKS } from '../../../../data/books.js'
import './Books.css'

export default function Books() {
  return (
    <section id="books" className="books">
      <div className="container">
        <SectionTitle centered>Our Books</SectionTitle>
        <p className="section-sub">
          A selection of titles published with Zedd 3+ Books, each shaped with care from first draft
          to finished book by first-time and experienced authors.
        </p>

        <div className="book-grid">
          {BOOKS.map((b) => (
            <article key={b.title} className="book-card">
              <div className="book-frame">
                {b.cover ? (
                  <img
                    className="book-image"
                    src={b.cover}
                    alt={`${b.title} by ${b.author}, book cover`}
                    width="600"
                    height="623"
                    loading="lazy"
                  />
                ) : (
                  <BookCover scene={b.scene} title={b.title} />
                )}
              </div>
              <h3 title={b.title}>{b.title}</h3>
              <p className="book-author">{b.author}</p>
              <a href="#books" className="btn btn-primary btn-block">
                View Details
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
