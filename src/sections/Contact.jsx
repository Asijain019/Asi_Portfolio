import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiDownload, FiMapPin, FiFileText, FiArrowUpRight } from 'react-icons/fi'
import TiltCard from '../components/TiltCard'
import Polaroid from '../components/Polaroid'
import { Burst, Heart, Sparkle, Squiggle, Arrow } from '../components/Doodles'
import { profile } from '../data/content'
import { asset } from '../utils/asset'

const rows = [
  { icon: <FiMail />, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, tone: 'bg-mustard', rot: -1.5 },
  { icon: <FiPhone />, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/-/g, '')}`, tone: 'bg-blush', rot: 1 },
  { icon: <FiMapPin />, label: 'Based in', value: profile.location, tone: 'bg-leaf-light', rot: -0.5 },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad dots relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full border-2 border-ink bg-mustard" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rotate-12 rounded-[3rem] border-2 border-ink bg-blush" />
      <Sparkle className="pointer-events-none absolute left-[8%] top-24 h-10 w-10 animate-spin-slow" color="#2458C5" />

      <div className="relative mx-auto max-w-6xl">
        <div>
        <motion.span
          initial={{ opacity: 0, y: 20, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, rotate: -3 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 14 }}
          className="kicker bg-cobalt text-cream-paper"
        >
          07 / Contact
        </motion.span>
        </div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 140, damping: 11 }}
          className="relative mt-6 inline-block font-display text-[22vw] font-bold uppercase leading-[0.8] tracking-tight sm:text-[9rem] md:text-[11rem]"
        >
          Say <span className="text-tomato">hi!</span>
          <motion.span
            aria-hidden="true"
            className="absolute -right-10 -top-6 inline-block text-5xl md:-right-16 md:text-7xl"
            animate={{ rotate: [0, 18, -8, 18, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.2 }}
          >
            👋
          </motion.span>
          <Burst className="absolute -left-8 -top-8 h-12 w-12" color="#E84C3D" />
        </motion.h2>

        <p className="mt-6 font-display text-2xl font-semibold md:text-4xl">
          Let's build something <span className="text-outline">together</span>
        </p>
        <Squiggle className="mt-2 h-6 w-48" color="#2458C5" />
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Open to internships, collaborations and interesting problems. My inbox is always open — whether you have a
          question or just want to say hi.
        </p>

        <div className="mt-14 grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_auto]">
          <div className="space-y-5">
            {rows.map((r, i) => {
              const Tag = r.href ? motion.a : motion.div
              return (
                <Tag
                  key={r.label}
                  {...(r.href ? { href: r.href } : {})}
                  initial={{ opacity: 0, x: -40, rotate: 0 }}
                  whileInView={{ opacity: 1, x: 0, rotate: r.rot }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 160, damping: 14, delay: i * 0.08 }}
                  whileHover={r.href ? { x: 10, rotate: 0, scale: 1.02 } : undefined}
                  className={`group flex items-center gap-4 rounded-2xl border-2 border-ink p-4 shadow-hard md:p-5 ${r.tone}`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-cream-paper text-xl">
                    {r.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink-soft">{r.label}</p>
                    <p className="font-display text-base font-semibold [overflow-wrap:anywhere] sm:text-lg md:text-xl">{r.value}</p>
                  </div>
                  {r.href && (
                    <FiArrowUpRight className="ml-auto shrink-0 text-2xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-12" />
                  )}
                </Tag>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 140, damping: 14, delay: 0.25 }}
              className="flex flex-wrap gap-3 pt-4 md:gap-4"
            >
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ink">
                <FiGithub /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-cobalt">
                <FiLinkedin /> LinkedIn
              </a>
              <a href={asset(profile.resumePdf)} download className="btn-tomato">
                <FiDownload /> Resume (PDF)
              </a>
              <a href={asset(profile.resumeDocx)} download className="btn-mustard">
                <FiFileText /> Resume (.docx)
              </a>
            </motion.div>
          </div>

          {/* Photo collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-[340px] sm:max-w-[380px] lg:w-[380px]"
          >
            <div className="absolute left-0 top-4 w-[58%]">
              <Polaroid src={asset('/photos/photo-selfie.jpg')} alt="Asi Jain selfie" caption="hey there" rotate={-9} tape="none" imgClassName="aspect-[3/4]" />
            </div>
            <div className="absolute bottom-0 right-0 z-10 w-[62%]">
              <TiltCard intensity={9}>
                <div className="relative rotate-[4deg]">
                  <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-2 border-ink bg-cobalt" />
                  <img
                    src={asset('/avatars/avatar-contact.jpg')}
                    alt="Asi Jain says hi"
                    className="relative aspect-[4/5] w-full rounded-3xl border-[3px] border-ink object-cover"
                    draggable={false}
                  />
                  <span className="tape -top-4 left-1/2 -translate-x-1/2 rotate-3" />
                </div>
              </TiltCard>
              <motion.span
                className="sticker absolute -left-8 bottom-10 z-20 bg-mustard px-4 py-2 font-display text-sm font-semibold"
                animate={{ rotate: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                say hi 👋
              </motion.span>
            </div>
            <Heart className="pointer-events-none absolute right-2 top-2 z-20 h-10 w-10 animate-wiggle" />
            <div className="pointer-events-none absolute -top-14 left-0 hidden flex-col items-start md:flex">
              <span className="-rotate-6 font-hand text-2xl font-bold text-tomato">ping me!</span>
              <Arrow className="ml-8 h-10 w-12" color="#E84C3D" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
