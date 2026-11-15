import { motion } from 'framer-motion'
import { FiAward, FiMapPin } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import Polaroid from '../components/Polaroid'
import { Arrow, Sparkle } from '../components/Doodles'
import { education, achievements } from '../data/content'
import { asset } from '../utils/asset'

const stopTones = ['bg-tomato text-cream-paper', 'bg-mustard', 'bg-cobalt text-cream-paper', 'bg-leaf text-cream-paper']
const noteTones = ['bg-mustard-light', 'bg-blush', 'bg-cobalt-light']
const noteRot = [-2.5, 2, -1.5]
const doodleNotes = ['level up!', 'plot twist →', 'the origin story']

export default function Journey() {
  return (
    <section id="journey" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full border-2 border-ink bg-mustard" />
      <Sparkle className="pointer-events-none absolute right-[12%] top-20 h-9 w-9 animate-wiggle" color="#E84C3D" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          kicker="05 / Journey"
          kickerClass="bg-tomato text-cream-paper"
          squiggle="#F5B82E"
          title={
            <>
              Education &
              <br />
              <span className="text-outline inline-block rotate-1">milestones</span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Scrapbook route */}
          <div className="relative pl-16 pt-10 md:pl-20">
            <div className="absolute bottom-10 left-[22px] top-10 border-l-[3px] border-dashed border-ink md:left-[26px]" />
            <span className="absolute left-0 top-0 flex items-center gap-1 font-hand text-xl font-bold text-tomato md:left-1">
              <FiMapPin /> start here
            </span>

            {education.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, x: -50, rotate: -4 }}
                whileInView={{ opacity: 1, x: 0, rotate: i % 2 ? 1 : -1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 120, damping: 14, delay: i * 0.06 }}
                className="relative mb-14 pt-6 last:mb-0"
              >
                {/* Stop marker */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 400, damping: 12, delay: 0.15 + i * 0.06 }}
                  className={`absolute -left-16 top-8 flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink font-display text-base font-bold shadow-hard-sm md:-left-20 md:h-14 md:w-14 md:text-lg ${
                    stopTones[i % stopTones.length]
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.span>

                <motion.div
                  whileHover={{ x: 8, rotate: 0, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 16 }}
                  className="relative rounded-2xl border-2 border-ink bg-cream-paper p-6 pt-7 shadow-hard-md"
                >
                  {/* Taped period label */}
                  <span className="absolute -top-4 left-5 -rotate-2 border-2 border-ink bg-mustard px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider shadow-hard-sm">
                    {e.period}
                  </span>
                  <h3 className="font-display text-xl font-bold leading-tight md:text-2xl">{e.title}</h3>
                  <p className="mt-1.5 font-bold text-cobalt">{e.place}</p>
                  {e.detail && <p className="mt-2 text-sm leading-relaxed text-ink-soft">{e.detail}</p>}
                </motion.div>

                {i < education.length - 1 && (
                  <div className="pointer-events-none absolute -bottom-12 right-2 hidden items-center gap-1 sm:flex">
                    <span className="font-hand text-lg font-bold text-ink-mute">{doodleNotes[i % doodleNotes.length]}</span>
                    <Arrow className="h-8 w-10 rotate-[30deg]" color="#E84C3D" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Achievements as sticky notes */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center gap-3 font-display text-3xl font-bold uppercase"
            >
              <span className="flex h-11 w-11 -rotate-6 items-center justify-center rounded-xl border-2 border-ink bg-mustard text-xl shadow-hard-sm">
                <FiAward />
              </span>
              Achievements
            </motion.h3>
            <div className="space-y-7">
              {achievements.map((a, i) => (
                <motion.div
                  key={a}
                  initial={{ opacity: 0, y: 40, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: noteRot[i % noteRot.length] }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ type: 'spring', stiffness: 160, damping: 12, delay: i * 0.1 }}
                  whileHover={{ rotate: 0, scale: 1.04, y: -4 }}
                  className={`relative flex gap-4 border-2 border-ink p-5 pt-6 shadow-hard ${noteTones[i % noteTones.length]}`}
                  style={{ borderRadius: '4px 4px 22px 4px' }}
                >
                  {/* Push pin */}
                  <span className="absolute -top-3 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-ink bg-tomato shadow-hard-sm" />
                  <span className="font-display text-3xl font-bold leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-sm font-medium leading-relaxed text-ink">{a}</p>
                </motion.div>
              ))}
            </div>

            {/* Scrapbook pair */}
            <div className="relative mx-auto mt-14 flex max-w-md items-start justify-center">
              <div className="relative z-10 w-[54%]">
                <Polaroid
                  src={asset('/photos/photo-bookstack.jpg')}
                  alt="Stack of novels and headphones, photo-dump style"
                  caption="bookworm era"
                  rotate={-6}
                  tape="top"
                  tapeColor="rgba(247,183,200,0.85)"
                  imgClassName="aspect-[4/5]"
                />
              </div>
              <div className="relative -ml-6 mt-14 w-[50%]">
                <Polaroid
                  src={asset('/photos/art-director.jpg')}
                  alt="Illustration of a person in a director's chair watching a film reel"
                  caption="director's cut"
                  rotate={5}
                  tape="top"
                  imgClassName="aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
