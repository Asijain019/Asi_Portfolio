import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { profile } from '../data/content'
import { asset } from '../utils/asset'

const links = [
  { label: 'Home', href: '#home', hover: 'hover:bg-mustard' },
  { label: 'About', href: '#about', hover: 'hover:bg-blush' },
  { label: 'Work', href: '#experience', hover: 'hover:bg-tomato hover:text-cream-paper' },
  { label: 'Projects', href: '#projects', hover: 'hover:bg-cobalt hover:text-cream-paper' },
  { label: 'Skills', href: '#skills', hover: 'hover:bg-leaf hover:text-cream-paper' },
  { label: 'Journey', href: '#journey', hover: 'hover:bg-mustard' },
  { label: 'Certs', href: '#certifications', hover: 'hover:bg-tomato hover:text-cream-paper' },
  { label: 'Contact', href: '#contact', hover: 'hover:bg-blush' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 16, delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-300 md:px-6 ${scrolled ? 'pt-3' : 'pt-5'}`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border-2 border-ink bg-cream-paper px-3 py-2 transition-shadow duration-300 md:px-4 ${
          scrolled ? 'shadow-hard-md' : 'shadow-hard'
        }`}
      >
        <a href="#home" className="group flex items-center gap-2 pl-1" aria-label="Asi Jain — home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-mustard font-display text-sm font-bold transition-transform duration-300 group-hover:rotate-[20deg]">
            AJ
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            asi<span className="text-tomato">.dev</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`block rounded-full border-2 border-transparent px-3.5 py-1.5 text-sm font-bold transition-all duration-150 hover:-rotate-3 hover:border-ink ${l.hover}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={asset(profile.resumePdf)} download className="btn-tomato hidden !px-4 !py-2 !text-sm sm:inline-flex">
            <FiDownload /> Resume
          </a>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-mustard text-xl shadow-hard-sm lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16, rotate: -2, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, rotate: 2, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="sticker mx-auto mt-3 max-w-6xl overflow-hidden !rounded-3xl lg:hidden"
          >
            <ul className="grid grid-cols-2 gap-2 p-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl border-2 border-ink px-4 py-3 font-display font-semibold transition-colors ${l.hover}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="col-span-2 pt-1">
                <a href={asset(profile.resumePdf)} download className="btn-tomato w-full">
                  <FiDownload /> Resume (PDF)
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
