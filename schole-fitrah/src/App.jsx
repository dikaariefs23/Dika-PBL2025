import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// import semua halaman
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Audience from './pages/Audience'
import TalentMapping from './pages/TalentMapping'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/audience" element={<Audience />} />
          <Route path="/talent-mapping" element={<TalentMapping />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
