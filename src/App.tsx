import { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import DustParticles from './components/DustParticles'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Marginalia from './components/Marginalia'
import QuillCursor from './components/QuillCursor'
import SVGFilters from './components/common/SVGFilters'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Preloader />

  return (
    <div className="folio-app">
      <SVGFilters />
      <DustParticles />
      <Marginalia />
      <QuillCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
