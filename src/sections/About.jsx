import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiLayers, FiZap } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import TiltCard from '../components/TiltCard'
import Polaroid from '../components/Polaroid'
import { Arrow, Heart, Sparkle, Star } from '../components/Doodles'
import { profile } from '../data/content'
import { asset } from '../utils/asset'

const stats = [
  { icon: <FiLayers />, value: '9+', label: 'Projects shipped', tone: 'bg-mustard text-ink', rot: -3 },
  { icon: <FiCpu />, value: '4', label: 'LLMs trained from scratch', tone: 'bg-blush text-ink', rot: 2 },
  { icon: <FiCode />, value: '8.3', label: 'CPI @ JKLU', tone: 'bg-cobalt text-cream-paper', rot: -2 },
  { icon: <FiZap />, value: 'IIT-K', label: 'Visiting Scholar', tone: 'bg-leaf text-cream-paper', rot: 3 },
]

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 top-10 hidden h-[30rem] w-[30rem] rounded-full lg:block border-2 border-ink bg-blush-light" />
      <Star className="pointer-events-none absolute left-[46%] top-16 hidden h-10 w-10 animate-wiggle lg:block" color="#F7B7C8" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Collage */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 90, damping: 16 }}
            className="relative order-2 mx-auto h-[520px] w-full max-w-[27rem] sm:h-[640px] sm:max-w-lg lg:order-1"
          >
            <div className="absolute right-0 top-2 z-0 w-[47%] hover:z-30">
              <Polaroid src={asset('/photos/photo-formal.jpg')} alt="Asi Jain in a black suit" caption="suit up!" rotate={9} tape="none" imgClassName="aspect-[3/4]" />
            </div>
            <div className="absolute bottom-0 left-0 z-0 w-[48%] hover:z-30">
              <Polaroid src={asset('/photos/photo-thinking.jpg')} alt="Asi Jain thinking" caption="overthinking…" rotate={-10} tape="none" imgClassName="aspect-[3/4]" tapeColor="#F7B7C8" />
            </div>

            <div className="absolute left-1/2 top-12 z-10 w-[58%] -translate-x-1/2 sm:top-16">
              <TiltCard intensity={8}>
                <Polaroid
                  src={asset('/avatars/avatar-about.jpg')}
                  alt="Asi Jain illustration"
                  caption="me, probably debugging"
                  rotate={-4}
                  tape="corners"
                  imgClassName="aspect-[4/5]"
                  hover={false}
                />
              </TiltCard>
            </div>

            {/* Annotations */}
            <div className="pointer-events-none absolute -left-1 top-0 z-20 flex flex-col items-start sm:-left-6">
              <span className="-rotate-6 font-hand text-2xl font-bold text-tomato md:text-3xl">that's me!</span>
              <Arrow className="ml-6 h-12 w-14 rotate-[-10deg]" color="#E84C3D" />
            </div>
            <Heart className="pointer-events-none absolute bottom-16 right-6 z-20 h-9 w-9 animate-wiggle" />
            <Sparkle className="pointer-events-none absolute right-[30%] top-0 z-20 h-7 w-7" color="#2458C5" />

            <motion.div
              className="sticker absolute -right-1 bottom-24 z-20 bg-mustard px-4 py-2.5 sm:-right-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ rotate: 6 }}
            >
              <p className="font-mono text-[11px] font-bold uppercase tracking-wider">currently @</p>
              <p className="font-display font-semibold">JKLU, Jaipur</p>
            </motion.div>
          </motion.div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              kicker="01 / About"
              kickerClass="bg-blush"
              squiggle="#2458C5"
              title={
                <>
                  Behind the
                  <br />
                  <span className="text-outline inline-block -rotate-2">keyboard</span>
                </>
              }
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="text-lg leading-relaxed text-ink"
            >
              {profile.intro}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 text-lg leading-relaxed text-ink-soft"
            >
              My happy place is the overlap between <span className="marker-pink font-bold text-ink">systems that scale</span> and{' '}
              <span className="marker-blue font-bold text-ink">models that learn</span> — whether that's cutting an LLM's KV cache 4×
              with grouped-query attention, or shaving API bills with a semantic cache that knows{' '}
              <em className="font-hand text-2xl not-italic text-tomato">"capital of France"</em> and{' '}
              <em className="font-hand text-2xl not-italic text-tomato">"which city is France's capital"</em> are the same question.
            </motion.p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 40, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: s.rot }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ type: 'spring', stiffness: 200, damping: 12, delay: i * 0.08 }}
                  whileHover={{ y: -8, rotate: 0, scale: 1.06 }}
                  className={`cursor-target rounded-2xl border-2 border-ink p-4 text-center shadow-hard ${s.tone}`}
                >
                  <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-cream-paper text-lg text-ink">
                    {s.icon}
                  </div>
                  <p className="font-display text-3xl font-bold">{s.value}</p>
                  <p className="mt-1 text-xs font-bold leading-tight opacity-90">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
