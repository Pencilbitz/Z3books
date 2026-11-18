import Footer from './components/layout/Footer/Footer.jsx'
import Navbar from './components/layout/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}
