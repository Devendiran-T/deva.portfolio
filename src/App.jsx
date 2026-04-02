import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AmbientBackground from './components/AmbientBackground'

const App = () => {
  return (
    <BrowserRouter>
      {/* Single fixed canvas behind everything — never covered */}
      <AmbientBackground />

      {/* Single content wrapper — transparent so canvas shows through */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <footer className="text-center text-secondary text-sm py-6">
          © {new Date().getFullYear()} Devendiran T. All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
