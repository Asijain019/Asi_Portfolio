import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { profile } from '../data/content'
import { Heart } from './Doodles'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-ink bg-ink px-4 pb-10 pt-16 text-cream md:px-10">
      <p
        aria-hidden="true"
        className="text-outline-cream pointer-events-none select-none whitespace-nowrap text-center font-display text-[21vw] font-bold uppercase leading-[0.8] opacity-25 md:text-[17vw]"
      >
        Asi Jain
      </p>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="flex flex-wrap items-center justify-center gap-1.5 text-center text-sm text-cream/75">
          © {new Date().getFullYear()} Asi Jain · made with
          <Heart className="inline h-4 w-4" />
          <span className="font-bold text-mustard">React + Framer Motion</span>
        </p>
        <div className="flex gap-3 text-xl">
          {[
            { href: profile.github, icon: <FiGithub />, label: 'GitHub', bg: 'bg-mustard', ext: true },
            { href: profile.linkedin, icon: <FiLinkedin />, label: 'LinkedIn', bg: 'bg-cobalt text-cream-paper', ext: true },
            { href: `mailto:${profile.email}`, icon: <FiMail />, label: 'Email', bg: 'bg-tomato text-cream-paper' },
            { href: '#home', icon: <FiArrowUp />, label: 'Back to top', bg: 'bg-blush' },
          ].map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              {...(s.ext ? { target: '_blank', rel: 'noreferrer' } : {})}
              aria-label={s.label}
              whileHover={{ y: -5, rotate: i % 2 ? 10 : -10 }}
              whileTap={{ scale: 0.9 }}
              className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-cream text-ink shadow-[3px_3px_0_#FAF3E3] ${s.bg}`}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
