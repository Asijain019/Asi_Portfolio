import { motion } from 'framer-motion'
import { Squiggle } from './Doodles'

/**
 * Big expressive section heading.
 * `title` is rendered inside a display-font h2; pass spans with
 * `text-outline` / rotations for the mixed filled/outlined look.
 */
export default function SectionHeading({
  kicker,
  title,
  subtitle,
  kickerClass = 'bg-mustard',
  squiggle = '#E84C3D',
  align = 'left',
  dark = false,
}) {
  const center = align === 'center'
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      <motion.span
        initial={{ opacity: 0, y: 20, rotate: -8 }}
        whileInView={{ opacity: 1, y: 0, rotate: -3 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 260, damping: 14 }}
        className={`kicker ${kickerClass} ${dark ? 'text-ink' : ''}`}
      >
        {kicker}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 120, damping: 16, delay: 0.08 }}
        className={`mt-5 font-display text-[2.6rem] font-bold uppercase leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl ${
          dark ? 'text-cream' : 'text-ink'
        }`}
      >
        {title}
      </motion.h2>
      {squiggle && (
        <Squiggle className={`mt-3 h-6 w-40 md:w-56 ${center ? 'mx-auto' : ''}`} color={squiggle} />
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${center ? 'mx-auto' : ''} ${
            dark ? 'text-cream/85' : 'text-ink-soft'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
