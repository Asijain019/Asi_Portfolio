import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Marquee from '../components/Marquee'
import Polaroid from '../components/Polaroid'
import { Star, Flower } from '../components/Doodles'
import { skills, courses } from '../data/content'
import { asset } from '../utils/asset'

const tabTones = ['bg-mustard', 'bg-blush', 'bg-cobalt text-cream-paper', 'bg-tomato text-cream-paper']
const chipTones = [
  'bg-cream-paper',
  'bg-mustard',
  'bg-blush',
  'bg-cobalt text-cream-paper',
  'bg-cream-paper',
  'bg-tomato text-cream-paper',
  'bg-leaf-light',
]
const chipRot = [-3, 2, -1.5, 3, -2, 1, 2.5, -2.5]

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-y-2 border-ink bg-leaf">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(250,243,227,0.55) 1.3px, transparent 1.3px)',
          backgroundSize: '24px 24px',
        }}
      />
      <Flower className="pointer-events-none absolute -left-6 top-24 h-24 w-24 animate-spin-slow md:h-32 md:w-32" />
      <Star className="pointer-events-none absolute bottom-40 right-6 h-14 w-14 animate-wiggle" color="#F7B7C8" />

      <div className="section-pad relative !pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              dark
              kicker="04 / Skills"
              kickerClass="bg-mustard"
              squiggle="#F5B82E"
              title={
                <>
                  My <span className="text-outline-cream inline-block -rotate-3">toolbox</span>
                </>
              }
              subtitle="A sticker wall of everything I reach for — hover to give them a poke."
            />
            <div className="relative mb-16 hidden w-[25rem] shrink-0 items-start lg:flex xl:w-[28rem]">
              <div className="relative z-10 w-[52%]">
                <Polaroid
                  src={asset('/photos/art-design-tools.jpg')}
                  alt="Illustration of creative app icons pouring out of a laptop"
                  caption="tabs: always open"
                  rotate={-6}
                  tape="corners"
                  imgClassName="aspect-[4/5]"
                />
              </div>
              <div className="relative -ml-4 mt-10 w-[50%]">
                <Polaroid
                  src={asset('/avatars/avatar-fun.jpg')}
                  alt="Cartoon of Asi Jain in glasses and a track jacket by a graffiti wall"
                  caption="off to build"
                  rotate={7}
                  tape="top"
                  tapeColor="rgba(247,183,200,0.85)"
                  imgClassName="aspect-[3/4]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {skills.map((group, gi) => (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 50, rotate: gi % 2 ? 3 : -3 }}
                whileInView={{ opacity: 1, y: 0, rotate: gi % 2 ? 0.8 : -0.8 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 120, damping: 14, delay: gi * 0.08 }}
                className="relative mt-5"
              >
                {/* Folder tab */}
                <span
                  className={`absolute -top-5 left-6 z-10 rounded-t-2xl border-2 border-b-0 border-ink px-5 pb-2 pt-1.5 font-display text-lg font-bold ${
                    tabTones[gi % tabTones.length]
                  }`}
                >
                  {group.group}
                </span>
                <div className="relative rounded-3xl border-2 border-ink bg-cream-paper p-6 pt-8 shadow-hard-md md:p-7 md:pt-9">
                  <span className="absolute right-5 top-4 font-mono text-xs font-bold text-ink-mute">
                    {String(group.items.length).padStart(2, '0')} items
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item, i) => {
                      const k = gi * 3 + i
                      return (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, scale: 0.4, rotate: 0 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: chipRot[k % chipRot.length] }}
                          viewport={{ once: true }}
                          transition={{ type: 'spring', stiffness: 320, damping: 14, delay: gi * 0.06 + i * 0.035 }}
                          whileHover={{
                            rotate: [chipRot[k % chipRot.length], -9, 8, -5, 3, 0],
                            scale: 1.14,
                            y: -5,
                            transition: { duration: 0.55 },
                          }}
                          whileTap={{ scale: 0.92 }}
                          className={`cursor-target select-none rounded-xl border-2 border-ink px-4 py-2 text-sm font-bold shadow-hard-sm md:text-[15px] ${
                            chipTones[k % chipTones.length]
                          }`}
                        >
                          {item}
                        </motion.span>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <span className="kicker -rotate-2 bg-cream-paper">✦ Coursework I've covered ✦</span>
          </div>
        </div>
      </div>

      <div className="pb-16">
        <Marquee items={courses} className="bg-ink text-cream" starClass="text-mustard" rotate={1.2} size="text-base md:text-xl" />
        <div className="h-3" />
        <Marquee items={courses} className="bg-mustard text-ink" starClass="text-tomato" rotate={-1} reverse size="text-base md:text-xl" />
      </div>
    </section>
  )
}
