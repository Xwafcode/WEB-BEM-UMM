import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import Berita from './pages/Berita'
import BeritaDetail from './pages/BeritaDetail'
import Struktur from './pages/Struktur'
import Kontak from './pages/Kontak'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:slug" element={<BeritaDetail />} />
          <Route path="/struktur" element={<Struktur />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
