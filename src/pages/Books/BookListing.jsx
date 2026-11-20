import { useState } from 'react'
import { BookCover } from '../../components/common/BookCover/BookCover.jsx'
import { ArrowRight } from '../../components/common/Icons.jsx'
import { BOOKS } from '../../data/books.js'
import './BookListing.css'

function BookImage({ book, className = '' }) {
  if (book.cover) {
    return (
      <img
        className={className}
        src={book.cover}
        alt={`Cover of ${book.title} by ${book.author}`}
        style={book.coverClip ? { clipPath: book.coverClip } : undefined}
        width="600"
        height="623"
      />
    )
  }

  return (
    <div className={`book-listing-placeholder ${className}`}>
      <BookCover scene={book.scene} title={book.title} />
    </div>
  )
}

function BookPage({ side, page, number }) {
  return (
    <div className={`book-listing-page-${side}`}>
      <div className="book-listing-page-copy">
        <span className="book-listing-page-kicker">{page.kicker}</span>
        <h3>{page.heading}</h3>
        {page.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <span className="book-listing-page-number">{number}</span>
      </div>
    </div>
  )
}

export default function BookListing() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [openingKey, setOpeningKey] = useState(0)
  const selectedBook = BOOKS[selectedIndex]
  const replayOpening = () => setOpeningKey((key) => key + 1)

  return (
    <section id="books" className="book-listing-section">
      <div className="container">
        <div className="book-section-heading">
          <div>
            <p className="home-eyebrow"><span /> Our books</p>
            <h2>Stories with<br /><em>a life of their own.</em></h2>
          </div>
        </div>
      </div>
      <div className="container book-listing-layout">
        <section className="book-listing-detail" aria-live="polite">
          <div className="book-listing-art">
            <div className={`book-listing-book ${openingKey ? 'is-opening' : ''}`} key={openingKey}>
              <div className="book-listing-pages">
                <BookPage side="left" page={selectedBook.insidePages.left} number="01" />
                <BookPage side="right" page={selectedBook.insidePages.right} number="02" />
                <span className="book-listing-page-turn" aria-hidden="true">
                  <span />
                  <span />
                </span>
              </div>
              <button
                className="book-listing-cover"
                type="button"
                aria-label={`Open ${selectedBook.title}`}
                onClick={replayOpening}
              >
                <div className="book-listing-cover-front">
                  <BookImage book={selectedBook} className="book-listing-cover-art" />
                </div>
                <div className="book-listing-cover-inside" />
              </button>
            </div>
            <span className="book-listing-preview-label">SELECTED TITLE</span>
          </div>

          <div className="book-listing-copy">
            <p className="book-listing-eyebrow">
              Book {String(selectedIndex + 1).padStart(2, '0')} <span /> Zedd 3+ Books collection
            </p>
            <h1>{selectedBook.title}</h1>
            <p className="book-listing-author">by {selectedBook.author}</p>
            <p className="book-listing-description">
              Explore this title from our collection. Contact our team for details about editions,
              formats, and availability.
            </p>

            <dl className="book-listing-facts">
              <div>
                <dt>Author</dt>
                <dd>{selectedBook.author}</dd>
              </div>
              <div>
                <dt>Collection</dt>
                <dd>Zedd 3+ Books</dd>
              </div>
              <div>
                <dt>Book details</dt>
                <dd>Ask our team</dd>
              </div>
            </dl>

            <a className="book-listing-cta" href="#contact">
              Ask about this book <ArrowRight />
            </a>
          </div>
        </section>

        <aside className="book-listing-rail" aria-label="Select a book">
          <p className="book-rail-title">Our books <span>{BOOKS.length} titles</span></p>
          <div className="book-rail-list">
            {BOOKS.map((book, index) => (
              <button
                className={`book-rail-item ${index === selectedIndex ? 'is-selected' : ''}`}
                type="button"
                key={book.title}
                aria-pressed={index === selectedIndex}
                onClick={() => {
                  setSelectedIndex(index)
                  replayOpening()
                }}
              >
                <span className="book-rail-cover">
                  <BookImage book={book} />
                </span>
                <span className="book-rail-copy">
                  <span className="book-rail-number">0{index + 1}</span>
                  <span className="book-rail-name">{book.title}</span>
                  <span className="book-rail-author">{book.author}</span>
                </span>
              </button>
            ))}
          </div>
          <p className="book-rail-note">Choose a cover to view its details.</p>
        </aside>
      </div>
    </section>
  )
}
