import { useEffect, useRef, useState } from 'react'
import { NAV_LINKS } from '../../../data/navigation.js'
import { SERVICES } from '../../../data/services.js'
import { ArrowRight, ChevronDown, Close, Menu } from '../../common/Icons.jsx'
import './Navbar.css'

export default function Navbar({ currentRoute, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const closeAll = () => {
    setMobileMenuOpen(false)
    setServicesDropdownOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [])

  const handleNavClick = (href) => (e) => {
    e.preventDefault()
    closeAll()
    if (onNavigate) {
      if (href.startsWith('#service/')) {
        const id = href.replace('#service/', '')
        onNavigate('service', id)
      } else {
        onNavigate('home', href)
      }
    } else {
      window.location.hash = href
    }
  }

  const handleServiceSelect = (serviceId) => (e) => {
    e.preventDefault()
    closeAll()
    if (onNavigate) {
      onNavigate('service', serviceId)
    } else {
      window.location.hash = `#service/${serviceId}`
    }
  }

  const isHomeActive = currentRoute?.page === 'home' && (!currentRoute?.hash || currentRoute.hash === '#home')
  const isServicesActive = currentRoute?.page === 'service' || currentRoute?.hash === '#services'

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#home"
          className="brand"
          onClick={handleNavClick('#home')}
        >
          Zedd 3+ Books
        </a>

        <nav className={`main-nav ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Main">
          {NAV_LINKS.map((item) => {
            if (item.label === 'Services') {
              return (
                <div
                  key="services-dropdown"
                  ref={dropdownRef}
                  className={`nav-dropdown ${servicesDropdownOpen ? 'is-expanded' : ''}`}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className={`nav-link-btn ${isServicesActive ? 'active' : ''}`}
                    aria-haspopup="true"
                    aria-expanded={servicesDropdownOpen}
                    onClick={(e) => {
                      e.stopPropagation()
                      setServicesDropdownOpen((prev) => !prev)
                    }}
                  >
                    <span>Services</span>
                    <ChevronDown className={`dropdown-chevron ${servicesDropdownOpen ? 'rotated' : ''}`} />
                  </button>

                  <div className={`dropdown-menu ${servicesDropdownOpen ? 'show' : ''}`}>
                    <div className="dropdown-menu-header">
                      <span>Our 7 Core Publishing & Academic Services</span>
                    </div>

                    <div className="dropdown-list">
                      {SERVICES.map((s, idx) => {
                        const Icon = s.icon
                        const isCurrentService = currentRoute?.page === 'service' && currentRoute?.serviceId === s.id
                        return (
                          <a
                            key={s.id}
                            href={`#service/${s.id}`}
                            className={`dropdown-item ${isCurrentService ? 'is-selected' : ''}`}
                            onClick={handleServiceSelect(s.id)}
                          >
                            <span className="dropdown-item-num">{idx + 1}</span>
                            <span className="dropdown-item-icon">
                              <Icon width="16" height="16" />
                            </span>
                            <div className="dropdown-item-content">
                              <span className="dropdown-item-title">{s.title}</span>
                              <span className="dropdown-item-desc">{s.text}</span>
                            </div>
                          </a>
                        )
                      })}
                    </div>

                    <div className="dropdown-menu-footer">
                      <a
                        href="#services"
                        className="dropdown-all-link"
                        onClick={handleNavClick('#services')}
                      >
                        Explore All Services Overview <ArrowRight width="13" height="13" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            }

            const isActive = item.href === '#home' ? isHomeActive : currentRoute?.hash === item.href

            return (
              <a
                key={item.label}
                href={item.href}
                className={isActive ? 'active' : undefined}
                aria-current={isActive ? 'page' : undefined}
                onClick={handleNavClick(item.href)}
              >
                {item.label}
              </a>
            )
          })}

          <a
            href="#contact"
            className="btn btn-primary nav-cta-mobile"
            onClick={handleNavClick('#contact')}
          >
            Publish With Us <ArrowRight />
          </a>
        </nav>

        <a
          href="#contact"
          className="btn btn-primary btn-sm nav-cta"
          onClick={handleNavClick('#contact')}
        >
          Publish With Us <ArrowRight />
        </a>

        <button
          className="menu-toggle"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          {mobileMenuOpen ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
