import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import Polaroid from '../components/Polaroid'
import TiltCard from '../components/TiltCard'
import { Arrow, Sparkle, Star } from '../components/Doodles'
import { asset } from '../utils/asset'
import { experience } from '../data/content'

/* Each highlight prints out as a "sheet" with its own tape colour */
const sheetTape = ['#F5B82E', '#F7B7C8', '#9CD3A6', '#8FAEF0']
const sheetRot = [-2, 1.5, 1, -1.5]
const metricColor = ['text-tomato', 'text-cobalt', 'text-leaf-deep', 'text-tomato']

function Sheet({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -60, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: sheetRot[index % sheetRot.length] }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 130, damping: 14, delay: 0.15 + index * 0.12 }}
      whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
      className="relative flex flex-col border-2 border-ink bg-cream-paper p-5 pt-6 shadow-hard"
      style={{ borderRadius: '6px 6px 18px 6px' }}
    >
      <span
        className="tape -top-3.5 left-1/2 w-16 -translate-x-1/2 -rotate-2"
        style={{ background: sheetTape[index % sheetTape.length] }}
      />
      <p className={`font-display text-4xl font-bold leading-none tracking-tight md:text-[2.6rem] ${metricColor[index % metricColor.length]}`}>
        {item.metric}
      </p>
      <p className="mt-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-ink-mute">{item.label}</p>
      <div className="my-3 border-t-2 border-dashed border-ink/25" />
      <p className="text-sm leading-relaxed text-ink">{item.text}</p>
    </motion.div>
  )
}

function Job({ job }) {
  const [first, ...rest] = job.company.split(' ')
  return (
    <motion.article
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 90, damping: 16 }}
      className="relative grid grid-cols-1 overflow-hidden rounded-[2rem] border-2 border-ink shadow-hard-lg lg:grid-cols-[0.8fr_1.2fr]"
    >
      {/* Left: colour-blocked poster panel */}
      <div className="relative overflow-hidden border-b-2 border-ink bg-tomato p-6 text-cream-paper sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-10">
        {/* Mustard diagonal beam (printer-poster style) */}
        <div
          className="pointer-events-none absolute -bottom-10 left-1/2 h-[140%] w-28 -translate-x-1/2 rotate-[24deg] border-x-2 border-ink bg-mustard opacity-90"
          aria-hidden="true"
        />
        <div className="relative">
          <span className="chip -rotate-2 !bg-mustard">
            <FiBriefcase /> Internship
          </span>
          <h3 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.85] tracking-tight sm:text-6xl">
            {first}
            {rest.length > 0 && (
              <>
                <br />
                <span className="text-outline-cream inline-block -rotate-2">{rest.join(' ')}</span>
              </>
            )}
          </h3>
          <p className="mt-5 inline-block -rotate-1 rounded-xl border-2 border-ink bg-cream-paper px-4 py-2 font-display text-lg font-semibold text-ink shadow-hard-sm">
            {job.role}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <span className="chip !bg-cobalt !text-cream-paper">
              <FiCalendar /> {job.period}
            </span>
            <span className="chip !bg-leaf !text-cream-paper">
              <FiMapPin /> {job.location}
            </span>
          </div>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-cream-paper/95">{job.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {job.stack.map((t, i) => (
              <motion.span
                key={t}
                whileHover={{ rotate: [0, -8, 6, 0], scale: 1.1 }}
                transition={{ duration: 0.45 }}
                className={`chip cursor-target ${i % 2 ? 'rotate-[1.5deg]' : '-rotate-[1.5deg]'}`}
              >
                {t}
              </motion.span>
            ))}
          </div>

          <div className="mt-10 hidden w-44 lg:block xl:w-48">
            <Polaroid
              src={asset('/photos/art-desk.jpg')}
              alt="Illustration of a person working at a desk surrounded by design tool windows"
              caption="dashboard mode"
              rotate={-5}
              tape="top"
              imgClassName="aspect-[4/5]"
            />
          </div>
        </div>
      </div>

      {/* Right: printouts on blue grid paper */}
      <div
        className="relative bg-cobalt p-6 pt-10 sm:p-8 sm:pt-12 lg:p-10 lg:pt-14"
        style={{
          backgroundImage:
            'linear-gradient(rgba(250,243,227,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(250,243,227,0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      >
        {/* Printer slot */}
        <div className="absolute inset-x-6 top-4 h-3 rounded-full border-2 border-ink bg-ink sm:inset-x-10" aria-hidden="true" />
        <p className="relative mb-6 mt-2 font-hand text-2xl font-bold text-cream-paper md:text-3xl">
          fresh off the printer — the impact <span className="text-mustard">↓</span>
        </p>
        <div className="relative grid grid-cols-1 gap-7 sm:grid-cols-2">
          {job.highlights.map((h, i) => (
            <Sheet key={h.label} item={h} index={i} />
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad dots relative overflow-hidden">
      <div className="pointer-events-none absolute -right-36 top-20 hidden h-80 w-80 rounded-full md:block border-2 border-ink bg-mustard" />
      <Sparkle className="pointer-events-none absolute left-[46%] top-24 hidden h-9 w-9 animate-spin-slow md:block" color="#E84C3D" />
      <Star className="pointer-events-none absolute bottom-16 left-[4%] h-12 w-12 animate-wiggle" color="#8FAEF0" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="02 / Experience"
            kickerClass="bg-tomato text-cream-paper"
            squiggle="#2458C5"
            title={
              <>
                Where I've
                <br />
                <span className="text-outline inline-block -rotate-2">worked</span>{' '}
                <span className="inline-block rotate-6 text-tomato">✦</span>
              </>
            }
            subtitle="Real users, real money, real data — the internship where I learned that every number on a dashboard needs a receipt."
          />
          <div className="relative mx-auto mb-4 w-52 shrink-0 sm:w-56 lg:mx-0 lg:mb-16 xl:w-64">
            <TiltCard intensity={8}>
              <Polaroid
                src={asset('/photos/art-printer.jpg')}
                alt="Colour-blocked collage of photos and charts coming out of a printer"
                caption="printing fixes"
                rotate={5}
                tape="corners"
                imgClassName="aspect-[5/6]"
                hover={false}
              />
            </TiltCard>
            <Arrow className="absolute -left-24 bottom-10 hidden h-14 w-16 -scale-x-100 lg:block" color="#E84C3D" />
          </div>
        </div>

        <div className="space-y-12">
          {experience.map((job) => (
            <Job key={`${job.company}-${job.period}`} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}
