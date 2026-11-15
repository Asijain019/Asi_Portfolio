import { useEffect, useState } from 'react'
import { motion, useTransform } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiArrowDown, FiFileText } from 'react-icons/fi'
import { profile, roles } from '../data/content'
import usePointerParallax from '../hooks/usePointerParallax'
import Marquee from '../components/Marquee'
import { Star, Sparkle, Squiggle, Arrow, Burst, Flower, Crown } from '../components/Doodles'
import { asset } from '../utils/asset'

function Typewriter() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index % roles.length]
    const speed = deleting ? 40 : 90
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setTimeout(() => setDeleting(true), 1400)
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setIndex((i) => i + 1)
        }
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [text, deleting, index])

  return (
    <span className="font-display text-lg font-semibold text-cobalt md:text-2xl">
      {text}
      <span className="animate-blink text-tomato">|</span>
    </span>
  )
}

/** A layer that drifts with the cursor; depth in px (negative = opposite direction). */
function Drift({ px, py, depth = 20, className = '', children, ...rest }) {
  const x = useTransform(px, [-1, 1], [-depth, depth])
  const y = useTransform(py, [-1, 1], [-depth * 0.7, depth * 0.7])
  return (
    <motion.div style={{ x, y }} className={className} {...rest}>
      {children}
    </motion.div>
  )
}

function Badge({ children, className = '', rotate = 0, delay = 0, bob = 10 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: rotate - 25 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ type: 'spring', stiffness: 260, damping: 12, delay }}
      whileHover={{ scale: 1.12, rotate: rotate + 8 }}
      className="cursor-target"
    >
      <motion.div
        animate={{ y: [0, -bob, 0] }}
        transition={{ duration: 3.5 + delay, repeat: Infinity, ease: 'easeInOut' }}
        className={`whitespace-nowrap rounded-full border-2 border-ink px-3 py-1.5 font-display text-xs font-semibold shadow-hard sm:px-4 sm:py-2 sm:text-sm md:text-base ${className}`}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function LoadingSticker() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, rotate: -8 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.2 }}
      className="sticker inline-flex items-center gap-2.5 !rounded-xl bg-mustard-light px-3 py-2 sm:gap-3 sm:px-4"
    >
      <span className="font-pixel text-[10px] sm:text-xs">loading</span>
      <span className="block h-4 w-24 overflow-hidden rounded-[4px] border-2 border-ink bg-cream-paper p-[2px] sm:w-32">
        <span
          className="block h-full animate-loading"
          style={{ background: 'repeating-linear-gradient(90deg,#1A1A1A 0 6px,transparent 6px 9px)' }}
        />
      </span>
      <span className="font-pixel text-[10px] sm:text-xs">ideas</span>
    </motion.div>
  )
}

const letter = {
  hidden: { y: 120, opacity: 0, rotate: 12 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 160, damping: 13, delay: 0.25 + i * 0.07 },
  }),
}

function GiantWord({ word, offset = 0, className = '' }) {
  return (
    <span className={`inline-flex ${className}`}>
      {word.split('').map((ch, i) => (
        <motion.span key={i} custom={i + offset} variants={letter} initial="hidden" animate="show" className="inline-block">
          {ch}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const { px, py } = usePointerParallax()
  const photoRotate = useTransform(px, [-1, 1], [-4, 4])

  const giant =
    'font-display font-bold uppercase leading-[0.78] tracking-tight text-[31vw] sm:text-[27vw] lg:text-[17.5rem] xl:text-[19rem]'

  return (
    <section id="home" className="dots relative overflow-hidden pt-24 md:pt-28">
      {/* Poster colour blocks */}
      <div className="pointer-events-none absolute -left-28 top-[30%] h-72 w-72 rounded-full border-2 border-ink bg-blush md:h-96 md:w-96" />
      <div className="pointer-events-none absolute -right-20 top-24 h-56 w-56 rotate-12 rounded-[3rem] border-2 border-ink bg-cobalt md:h-80 md:w-80" />
      <div className="pointer-events-none absolute bottom-24 right-[12%] hidden h-40 w-40 rounded-full border-2 border-ink bg-leaf lg:block" />

      {/* Doodles */}
      <Drift px={px} py={py} depth={-14} className="pointer-events-none absolute left-[6%] top-28 hidden md:block">
        <Star className="h-14 w-14 animate-wiggle" />
      </Drift>
      <Drift px={px} py={py} depth={22} className="pointer-events-none absolute right-[8%] top-[42%] z-30">
        <Sparkle className="h-8 w-8 animate-spin-slow md:h-12 md:w-12" color="#E84C3D" />
      </Drift>
      <Drift px={px} py={py} depth={-26} className="pointer-events-none absolute bottom-[30%] left-[4%] z-30 hidden sm:block">
        <Flower className="h-14 w-14 animate-spin-slow md:h-20 md:w-20" />
      </Drift>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-between">
          <LoadingSticker />
          <motion.p
            initial={{ opacity: 0, rotate: 8 }}
            animate={{ opacity: 1, rotate: 3 }}
            transition={{ delay: 0.5 }}
            className="relative z-10 rounded-full border-2 border-ink bg-cream-paper px-4 font-hand text-2xl font-bold text-ink shadow-hard-sm md:text-3xl"
          >
            portfolio <span className="text-tomato">✦</span> 2026 edition
          </motion.p>
        </div>

        {/* Stage: giant name layered around the photo */}
        <div className="relative mx-auto mt-4 flex h-[min(118vw,600px)] max-w-6xl items-center justify-center sm:h-[min(100vw,640px)] lg:h-[620px]">
          <h1 className="sr-only">
            {profile.name} — {profile.role}
          </h1>

          {/* ASI — filled, behind photo */}
          <Drift px={px} py={py} depth={-10} className="absolute left-0 top-[2%] z-0 select-none sm:left-[2%] lg:left-[3%]" aria-hidden="true">
            <span className={`${giant} block -rotate-[5deg] text-ink`}>
              <GiantWord word="ASI" />
            </span>
          </Drift>

          {/* JAIN — tomato fill behind photo */}
          <Drift px={px} py={py} depth={-6} className="absolute bottom-[3%] right-0 z-0 select-none sm:right-[1%] lg:right-[2%]" aria-hidden="true">
            <span className={`${giant} block translate-x-2 translate-y-2 rotate-[3deg] text-tomato md:translate-x-3 md:translate-y-3`}>
              <GiantWord word="JAIN" offset={3} />
            </span>
          </Drift>

          {/* Photo */}
          <Drift px={px} py={py} depth={14} className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -14, y: 60 }}
              animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 12, delay: 0.45 }}
              className="w-[50vw] max-w-[320px] sm:w-[40vw] lg:w-[300px] xl:w-[330px]"
            >
            <motion.div style={{ rotate: photoRotate }} className="relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2.2rem] border-2 border-ink bg-mustard md:translate-x-5 md:translate-y-5" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] border-[3px] border-ink bg-cream-paper">
                <img
                  src={asset('/avatars/avatar-hero.jpg')}
                  alt="Illustrated portrait of Asi Jain"
                  className="h-full w-full scale-[1.06] object-cover"
                  draggable={false}
                />
              </div>
              <span className="tape -top-4 left-1/2 -translate-x-1/2 rotate-[-4deg]" />
              <Crown className="absolute -right-3 -top-9 h-10 w-14 rotate-12 md:-right-5 md:-top-12 md:h-12 md:w-16" />
            </motion.div>
            </motion.div>
          </Drift>

          {/* JAIN — outline, in front of photo */}
          <Drift px={px} py={py} depth={-6} className="pointer-events-none absolute bottom-[3%] right-0 z-20 select-none sm:right-[1%] lg:right-[2%]" aria-hidden="true">
            <span className={`${giant} text-outline block rotate-[3deg]`}>
              <GiantWord word="JAIN" offset={3} />
            </span>
          </Drift>

          {/* Real-photo polaroids at the edges (desktop) */}
          <Drift px={px} py={py} depth={-30} className="absolute bottom-[8%] left-0 z-20 hidden lg:block">
            <motion.figure
              initial={{ opacity: 0, y: 80, rotate: -20 }}
              animate={{ opacity: 1, y: 0, rotate: -9 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 1 }}
              whileHover={{ rotate: 0, scale: 1.08 }}
              className="polaroid w-44 !p-2.5 !pb-10 xl:w-52"
            >
              <img src={asset('/photos/photo-red-tee.jpg')} alt="Asi Jain selfie" className="aspect-[4/5] w-full border-2 border-ink object-cover" draggable={false} />
              <figcaption className="absolute inset-x-0 bottom-1 text-center font-hand text-lg font-bold">the real me ♡</figcaption>
            </motion.figure>
          </Drift>
          <Drift px={px} py={py} depth={30} className="absolute right-0 top-[2%] z-20 hidden lg:block">
            <motion.figure
              initial={{ opacity: 0, y: -60, rotate: 20 }}
              animate={{ opacity: 1, y: 0, rotate: 8 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 1.15 }}
              whileHover={{ rotate: 0, scale: 1.08 }}
              className="polaroid w-40 !p-2.5 !pb-10 xl:w-48"
            >
              <img src={asset('/photos/photo-pushkar.jpg')} alt="Asi Jain by a lake in Pushkar" className="aspect-[4/5] w-full border-2 border-ink object-cover" draggable={false} />
              <figcaption className="absolute inset-x-0 bottom-1 text-center font-hand text-lg font-bold">off-duty ☀</figcaption>
            </motion.figure>
          </Drift>

          {/* Floating sticker badges */}
          <Drift px={px} py={py} depth={34} className="absolute left-0 top-[58%] z-30 sm:left-[10%] sm:top-[40%] lg:left-[22%] lg:top-[30%]">
            <Badge className="bg-cobalt text-cream-paper" rotate={-8} delay={0.9}>
              Full-Stack Dev
            </Badge>
          </Drift>
          <Drift px={px} py={py} depth={-36} className="absolute right-[3%] top-[22%] z-30 sm:right-[12%] lg:right-[24%] lg:top-[24%]">
            <Badge className="bg-tomato text-cream-paper" rotate={7} delay={1.05} bob={12}>
              AI/ML ⚡
            </Badge>
          </Drift>
          <Drift px={px} py={py} depth={26} className="absolute bottom-[27%] right-0 z-30 sm:bottom-[30%] sm:left-[16%] sm:right-auto lg:bottom-[22%] lg:left-[27%]">
            <Badge className="bg-leaf text-cream-paper" rotate={-4} delay={1.2} bob={8}>
              IIT-K Scholar ✦
            </Badge>
          </Drift>
          <Drift px={px} py={py} depth={-20} className="absolute right-[8%] top-[52%] z-30 hidden sm:block lg:right-[25%] lg:top-[56%]">
            <Badge className="bg-mustard" rotate={10} delay={1.35} bob={9}>
              hi! 👋
            </Badge>
          </Drift>
        </div>

        {/* Intro copy */}
        <div className="relative z-30 mx-auto -mt-2 flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.9 }}
            className="sticker relative flex h-12 items-center gap-2 px-5 md:h-14"
          >
            <span className="font-hand text-xl font-bold text-ink-mute md:text-2xl">I'm a</span>
            <Typewriter />
            <Burst className="absolute -right-6 -top-6 h-9 w-9" color="#E84C3D" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg"
          >
            {profile.tagline} Currently building full-stack platforms and experimenting with Transformer
            architectures — from <span className="marker font-bold text-ink">semantic LLM gateways</span> to{' '}
            <span className="marker-pink font-bold text-ink">GPTs trained from scratch</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 140, damping: 14, delay: 1.15 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4"
          >
            <a href="#projects" className="btn-mustard">
              View My Work <FiArrowDown />
            </a>
            <a href={asset(profile.resumePdf)} download className="btn-tomato">
              <FiDownload /> Resume (PDF)
            </a>
            <a href={asset(profile.resumeDocx)} download className="btn-cream">
              <FiFileText /> .docx
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.35 }}
            className="relative mt-8 flex items-center gap-3"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-cream-paper text-xl shadow-hard-sm transition-transform hover:-translate-y-1 hover:-rotate-12"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-cobalt text-xl text-cream-paper shadow-hard-sm transition-transform hover:-translate-y-1 hover:rotate-12"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <Squiggle className="h-5 w-16 md:w-24" />
            <span className="font-hand text-xl font-bold md:text-2xl">scroll for more</span>
            <Arrow className="absolute -right-12 top-4 h-10 w-12 rotate-12 md:-right-14" color="#E84C3D" />
          </motion.div>
        </div>
      </div>

      <div className="mt-16 md:mt-20">
        <Marquee items={roles} className="bg-mustard text-ink" starClass="text-tomato" rotate={-1.5} />
      </div>
    </section>
  )
}
