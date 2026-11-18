import { useState } from 'react'
import { NAV_LINKS } from '../../../data/navigation.js'
import { ArrowRight, Close, Menu } from '../../common/Icons.jsx'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand">
          Zedd 3+ Books
        </a>

        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {NAV_LINKS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={i === 0 ? 'active' : undefined}
              aria-current={i === 0 ? 'page' : undefined}
              onClick={close}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta-mobile" onClick={close}>
            Publish With Us <ArrowRight />
          </a>
        </nav>

        <a href="#contact" className="btn btn-primary btn-sm nav-cta">
          Publish With Us <ArrowRight />
        </a>

        <button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
