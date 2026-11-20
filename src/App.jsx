import { useEffect, useState } from 'react'
import Footer from './components/layout/Footer/Footer.jsx'
import Navbar from './components/layout/Navbar/Navbar.jsx'
import { SERVICES } from './data/services.js'
import Home from './pages/Home/Home.jsx'
import ServiceDetail from './pages/ServiceDetail/ServiceDetail.jsx'

function parseRoute() {
  const hash = window.location.hash || ''
  const serviceMatch = hash.match(/^#(?:services?\/|service-)([\w-]+)/i)

  if (serviceMatch) {
    const serviceId = serviceMatch[1]
    const exists = SERVICES.some((s) => s.id === serviceId)
    if (exists) {
      return { page: 'service', serviceId }
    }
  }

  // Also check pathname (e.g. /service/:id)
  const pathname = window.location.pathname
  const pathMatch = pathname.match(/^\/services?\/([\w-]+)/i)
  if (pathMatch) {
    const serviceId = pathMatch[1]
    const exists = SERVICES.some((s) => s.id === serviceId)
    if (exists) {
      return { page: 'service', serviceId }
    }
  }

  return { page: 'home', hash: hash || '#home' }
}

export default function App() {
  const [route, setRoute] = useState(parseRoute)

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = parseRoute()
      setRoute(newRoute)

      if (newRoute.page === 'service') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('popstate', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('popstate', handleHashChange)
    }
  }, [])

  useEffect(() => {
    if (route.page === 'home' && route.hash && route.hash !== '#home') {
      setTimeout(() => {
        const targetEl = document.getElementById(route.hash.replace('#', ''))
        if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }, [route.page, route.hash])

  const handleNavigate = (page, target) => {
    if (page === 'service') {
      window.location.hash = `#service/${target}`
    } else {
      const destination = target || '#home'
      if (window.location.hash === destination && route.page === 'home') {
        const targetId = destination.replace('#', '')
        const targetEl = document.getElementById(targetId)
        if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' })
        return
      }

      window.location.hash = destination
    }
  }

  return (
    <>
      <Navbar currentRoute={route} onNavigate={handleNavigate} />
      <main id="main-content">
        {route.page === 'service' ? (
          <ServiceDetail
            serviceId={route.serviceId}
            onNavigate={handleNavigate}
          />
        ) : (
          <Home
            onSelectService={(id) => handleNavigate('service', id)}
          />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
    </>
  )
}
