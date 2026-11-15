import { motion, useScroll, useSpring } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Marquee from './components/Marquee'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Journey from './sections/Journey'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })

  return (
    <div className="paper relative min-h-screen overflow-x-clip bg-cream">
      {/* Scroll progress — striped tape */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[6px] w-full origin-left border-b-2 border-ink"
        style={{
          scaleX,
          background:
            'repeating-linear-gradient(90deg, #E84C3D 0 24px, #F5B82E 24px 48px, #2458C5 48px 72px, #3E9B4F 72px 96px)',
        }}
      />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Marquee
          items={['Build', 'Train', 'Ship', 'Repeat', 'Debug', 'Caffeinate']}
          className="bg-tomato text-cream-paper"
          starClass="text-mustard"
          rotate={1.5}
        />
        <Experience />
        <Projects />
        <Skills />
        <Journey />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
