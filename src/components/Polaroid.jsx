import { motion } from 'framer-motion'

/** Taped polaroid frame with a handwritten caption. */
export default function Polaroid({
  src,
  alt,
  caption,
  rotate = -3,
  className = '',
  imgClassName = 'aspect-[4/5]',
  tape = 'top',
  tapeColor,
  hover = true,
}) {
  return (
    <motion.figure
      className={`polaroid ${className}`}
      style={{ rotate }}
      whileHover={hover ? { rotate: rotate * -0.6, scale: 1.04, zIndex: 30 } : undefined}
      transition={{ type: 'spring', stiffness: 260, damping: 16 }}
    >
      {tape === 'top' && (
        <span className="tape -top-4 left-1/2 -translate-x-1/2 -rotate-3" style={tapeColor ? { background: tapeColor } : undefined} />
      )}
      {tape === 'corners' && (
        <>
          <span className="tape -left-6 -top-2 w-20 -rotate-[38deg]" style={tapeColor ? { background: tapeColor } : undefined} />
          <span className="tape -right-6 -top-2 w-20 rotate-[38deg]" style={tapeColor ? { background: tapeColor } : undefined} />
        </>
      )}
      <div className={`overflow-hidden border-2 border-ink bg-cream-deep ${imgClassName}`}>
        <img src={src} alt={alt} loading="lazy" draggable={false} className="h-full w-full object-cover" />
      </div>
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-2 text-center font-hand text-xl font-bold text-ink md:text-2xl">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  )
}
