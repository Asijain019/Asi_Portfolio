import { useId } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiCheck } from 'react-icons/fi'
import { SiCoursera, SiGoogle, SiRedhat } from 'react-icons/si'
import SectionHeading from '../components/SectionHeading'
import { Star, Burst } from '../components/Doodles'
import { certifications } from '../data/content'

const stubTones = ['bg-mustard', 'bg-tomato text-cream-paper', 'bg-blush', 'bg-leaf text-cream-paper']
const rot = [-1.5, 1, -0.5, 1.5, -1, 0.5, -1.5]

/* Real issuers of the certificates below, arranged as a triangle of stickers */
const issuers = [
  { name: 'Coursera', Icon: SiCoursera, color: '#0056D2', pos: 'left-[31%] top-[7%]', rot: -6 },
  { name: 'Google', Icon: SiGoogle, color: '#4285F4', pos: 'bottom-[9%] left-[8%]', rot: 8 },
  { name: 'Red Hat', Icon: SiRedhat, color: '#EE0000', pos: 'bottom-[9%] right-[8%]', rot: -4 },
]

/* 48-point zig-zag rosette edge, in a 200×200 viewBox */
const rosette = Array.from({ length: 48 }, (_, i) => {
  const r = i % 2 ? 88 : 98
  const a = (i * Math.PI) / 24
  return `${(100 + r * Math.cos(a)).toFixed(2)},${(100 + r * Math.sin(a)).toFixed(2)}`
}).join(' ')

/** Award-seal badge: rosette + rotating text ring + ribbon tails around the glasses art. */
function SealBadge({ count }) {
  const ringId = useId().replace(/:/g, '')
  const label = `✦ VERIFIED ✦ CERTIFIED ✦ ${count} BADGES EARNED `
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 150, damping: 11 }}
      whileHover={{ rotate: -6, scale: 1.07 }}
      className="cursor-target relative mx-auto mb-6 h-48 w-48 shrink-0 sm:h-56 sm:w-56 lg:mx-0 lg:mb-20 lg:mr-6"
      role="img"
      aria-label={`Seal: ${count} verified certifications from Coursera, Google and Red Hat`}
    >
      {/* Ribbon tails */}
      <svg viewBox="0 0 120 110" className="absolute -bottom-[22%] left-1/2 w-[62%] -translate-x-1/2" aria-hidden="true">
        <path d="M30 0 L56 8 L42 104 L30 88 L14 98 Z" fill="#E84C3D" stroke="#1A1A1A" strokeWidth="3" strokeLinejoin="round" />
        <path d="M90 0 L64 8 L78 104 L90 88 L106 98 Z" fill="#F7B7C8" stroke="#1A1A1A" strokeWidth="3" strokeLinejoin="round" />
      </svg>

      {/* Rosette + spinning text ring */}
      <div className="absolute inset-0 drop-shadow-[5px_5px_0_#1A1A1A]">
      <motion.svg
        viewBox="0 0 200 200"
        className="h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      >
        <defs>
          <path id={ringId} d="M100,100 m-71,0 a71,71 0 1,1 142,0 a71,71 0 1,1 -142,0" />
        </defs>
        <polygon points={rosette} fill="#F5B82E" stroke="#1A1A1A" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="100" cy="100" r="82" fill="#FFFBF2" stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="4 4" />
        <text fontFamily="'Space Mono', monospace" fontSize="12.5" fontWeight="700" fill="#1A1A1A">
          <textPath href={`#${ringId}`} textLength="440" lengthAdjust="spacing">
            {label}
          </textPath>
        </text>
      </motion.svg>
      </div>

      {/* Centre: issuer logo stickers (static, so logos stay upright while the ring spins) */}
      <div className="absolute inset-[26%] rounded-full border-[3px] border-ink bg-mustard-light">
        {issuers.map((it, i) => (
          <motion.span
            key={it.name}
            title={it.name}
            initial={{ scale: 0, rotate: -40 }}
            whileInView={{ scale: 1, rotate: it.rot }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 380, damping: 12, delay: 0.35 + i * 0.12 }}
            className={`absolute flex h-[38%] w-[38%] items-center justify-center rounded-full border-2 border-ink bg-cream-paper shadow-hard-sm ${it.pos}`}
          >
            <it.Icon className="h-[58%] w-[58%]" style={{ color: it.color }} aria-hidden="true" />
          </motion.span>
        ))}
      </div>

      {/* Check stamp */}
      <span className="absolute -right-1 top-3 flex h-11 w-11 rotate-12 items-center justify-center rounded-full border-2 border-ink bg-leaf text-xl text-cream-paper shadow-hard-sm sm:h-12 sm:w-12">
        <FiCheck />
      </span>
    </motion.div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden border-y-2 border-ink bg-cobalt">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(rgba(250,243,227,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(250,243,227,0.35) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <Star className="pointer-events-none absolute right-[6%] top-16 h-16 w-16 animate-wiggle md:h-20 md:w-20" />
      <Burst className="pointer-events-none absolute bottom-16 left-[5%] h-12 w-12" color="#FAF3E3" />

      <div className="section-pad relative">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              dark
              kicker="06 / Certifications"
              kickerClass="bg-mustard"
              squiggle="#F7B7C8"
              title={
                <>
                  Verified <br />
                  <span className="text-outline-cream inline-block -rotate-2">credentials</span>
                </>
              }
              subtitle="Every ticket below links to its verifiable certificate — tear one off!"
            />
            <SealBadge count={certifications.length} />
          </div>

          <div className="grid grid-cols-1 gap-x-7 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <motion.a
                key={c.name}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: rot[i % rot.length] }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 150, damping: 13, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -8, rotate: i % 2 ? -2.5 : 2.5, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex min-h-[108px] drop-shadow-[5px_5px_0_#1A1A1A]"
              >
                {/* Main ticket */}
                <div className="flex min-w-0 flex-1 items-center gap-4 rounded-l-2xl border-2 border-r-0 border-ink bg-cream-paper p-4 pr-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-cobalt-light text-xl transition-transform duration-300 group-hover:rotate-[360deg]">
                    <FiCheck />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-mute">admit one · certified</p>
                    <h3 className="font-display text-lg font-bold leading-tight">{c.name}</h3>
                    <p className="mt-0.5 text-xs font-bold text-cobalt">{c.issuer}</p>
                  </div>
                </div>

                {/* Stub */}
                <div
                  className={`relative flex w-[5.5rem] shrink-0 flex-col items-center justify-center gap-1 rounded-r-2xl border-2 border-ink ${
                    stubTones[i % stubTones.length]
                  }`}
                  style={{ borderLeftStyle: 'dashed' }}
                >
                  {/* Perforation notches */}
                  <span className="absolute -left-[13px] -top-[2px] h-[14px] w-6 rounded-b-full border-2 border-t-0 border-ink bg-cobalt" />
                  <span className="absolute -bottom-[2px] -left-[13px] h-[14px] w-6 rounded-t-full border-2 border-b-0 border-ink bg-cobalt" />
                  <span className="font-display text-2xl font-bold leading-none">{c.year}</span>
                  <span className="flex items-center gap-0.5 font-mono text-[10px] font-bold uppercase tracking-wider">
                    verify <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
