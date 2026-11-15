import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import TiltCard from '../components/TiltCard'
import Polaroid from '../components/Polaroid'
import { Star, Sparkle, LoopArrow } from '../components/Doodles'
import { featuredProjects, moreProjects } from '../data/content'
import { asset } from '../utils/asset'

/* Visual palette rotation — independent of the data's legacy accent values */
const palette = [
  { band: 'bg-cobalt', text: 'text-cream-paper', outline: 'text-outline-cream', star: '#2458C5', chip: 'bg-cobalt-light' },
  { band: 'bg-tomato', text: 'text-cream-paper', outline: 'text-outline-cream', star: '#E84C3D', chip: 'bg-tomato-light' },
  { band: 'bg-mustard', text: 'text-ink', outline: 'text-outline', star: '#F5B82E', chip: 'bg-mustard-light' },
  { band: 'bg-leaf', text: 'text-cream-paper', outline: 'text-outline-cream', star: '#3E9B4F', chip: 'bg-leaf-light' },
  { band: 'bg-blush', text: 'text-ink', outline: 'text-outline', star: '#E88AA5', chip: 'bg-blush-light' },
]

const tilt = [-2, 1.5, -1, 2, -1.5, 1]

function IconSticker({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-cream-paper text-lg text-ink shadow-hard-sm transition-transform duration-150 hover:-translate-y-1 hover:rotate-12 active:translate-y-0.5"
    >
      {children}
    </a>
  )
}

function ProjectCard({ project, index }) {
  const p = palette[index % palette.length]
  return (
    <motion.div
      initial={{ opacity: 0, y: 70, rotate: tilt[index % tilt.length] * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 110, damping: 15, delay: (index % 2) * 0.1 }}
    >
      <TiltCard intensity={5} className="h-full">
        <motion.article
          whileHover={{ y: -8, rotate: index % 2 ? 1 : -1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-cream-paper shadow-hard-md transition-shadow duration-200 hover:shadow-hard-lg"
        >
          {/* Colour header band */}
          <header className={`relative overflow-hidden border-b-2 border-ink px-5 pb-5 pt-4 md:px-6 ${p.band} ${p.text}`}>
            <span
              aria-hidden="true"
              className={`${p.outline} pointer-events-none absolute -bottom-5 -right-2 select-none font-display text-[6rem] font-bold leading-none opacity-40 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="relative flex items-start justify-between gap-4">
              <span className="chip -rotate-2">
                {project.category} · {project.year}
              </span>
              <div className="flex shrink-0 gap-2">
                <IconSticker href={project.github} label={`${project.title} on GitHub`}>
                  <FiGithub />
                </IconSticker>
                {project.live && (
                  <IconSticker href={project.live} label={`${project.title} live demo`}>
                    <FiExternalLink />
                  </IconSticker>
                )}
              </div>
            </div>
            <h3 className="relative mt-4 font-display text-2xl font-bold leading-none tracking-tight md:text-3xl">
              {project.title}
            </h3>
            <p className="relative mt-1.5 max-w-[85%] text-sm font-bold opacity-90">{project.subtitle}</p>
          </header>

          {/* Body */}
          <div className="flex flex-1 flex-col p-5 md:p-6">
            <p className="text-sm leading-relaxed text-ink-soft">{project.description}</p>

            <ul className="mt-4 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-[13px] leading-relaxed text-ink">
                  <Star className="mt-0.5 h-3.5 w-3.5 shrink-0" color={p.star} />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {project.stack.map((t, ti) => (
                <span
                  key={t}
                  className={`chip transition-transform duration-150 hover:-translate-y-0.5 hover:rotate-0 ${
                    ti % 2 ? 'rotate-[1.5deg]' : '-rotate-[1.5deg]'
                  } ${ti % 3 === 0 ? p.chip : ''}`}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ink !px-4 !py-2 !text-sm"
                aria-label={`Check out ${project.title} on GitHub`}
              >
                <FiGithub /> Check out project
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className={`btn !px-4 !py-2 !text-sm ${p.band} ${p.text}`}>
                  Visit live site <FiArrowUpRight />
                </a>
              )}
            </div>
          </div>
        </motion.article>
      </TiltCard>
    </motion.div>
  )
}

const moreTones = ['bg-tomato', 'bg-cobalt', 'bg-leaf']

export default function Projects() {
  return (
    <section id="projects" className="section-pad dots relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full border-2 border-ink bg-cobalt-light" />
      <Sparkle className="pointer-events-none absolute right-[8%] top-24 h-10 w-10 animate-spin-slow" color="#2458C5" />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="03 / Projects"
            kickerClass="bg-cobalt text-cream-paper"
            squiggle="#F5B82E"
            title={
              <>
                Things I've
                <br />
                <span className="text-outline inline-block rotate-2">built</span>{' '}
                <span className="inline-block -rotate-6 text-cobalt">✦</span>
              </>
            }
            subtitle="From Transformers trained from scratch to full-stack platforms running in production — every project below is live code you can read, clone and run."
          />
          <div className="relative mb-16 hidden w-52 shrink-0 lg:block xl:w-60">
            <Polaroid src={asset('/photos/art-film-head.jpg')} alt="Collage of film reels and code around a head silhouette" caption="code × stories" rotate={6} tape="top" imgClassName="aspect-square" />
            <LoopArrow className="absolute -left-28 bottom-6 h-20 w-24 -scale-x-100" color="#E84C3D" />
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 md:gap-8 lg:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mb-8 mt-24 flex flex-wrap items-end gap-x-4 gap-y-1">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 140, damping: 14 }}
            className="font-display text-3xl font-bold uppercase md:text-5xl"
          >
            More <span className="text-outline">experiments</span>
          </motion.h3>
          <span className="-rotate-3 font-hand text-2xl font-bold text-tomato md:text-3xl">(the fun side quests)</span>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: tilt[i] }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', stiffness: 160, damping: 13, delay: i * 0.08 }}
              whileHover={{ y: -10, rotate: 0, scale: 1.03 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-ink bg-cream-paper p-6 shadow-hard transition-shadow duration-200 hover:shadow-hard-lg"
            >
              {/* Folded corner */}
              <span
                aria-hidden="true"
                className={`absolute -right-px -top-px h-14 w-14 border-b-2 border-l-2 border-ink ${moreTones[i % moreTones.length]}`}
                style={{ borderBottomLeftRadius: '1.25rem' }}
              />
              <div className="mb-3 flex items-center gap-3 pr-14">
                <h4 className="font-display text-xl font-bold leading-tight">{p.title}</h4>
              </div>
              <FiArrowUpRight className="absolute right-3.5 top-3.5 text-2xl text-cream-paper transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-12" />
              <p className="text-sm leading-relaxed text-ink-soft">{p.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {p.stack.map((t) => (
                  <span key={t} className="chip !text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
