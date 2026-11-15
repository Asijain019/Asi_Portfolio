import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [pressed, setPressed] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.6 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target
      setIsPointer(!!target.closest?.('a, button, [role="button"], input, textarea, .cursor-target'))
    }
    const leave = () => setHidden(true)
    const enter = () => setHidden(false)
    const down = () => setPressed(true)
    const up = () => setPressed(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    document.documentElement.addEventListener('mouseleave', leave)
    document.documentElement.addEventListener('mouseenter', enter)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      document.documentElement.removeEventListener('mouseleave', leave)
      document.documentElement.removeEventListener('mouseenter', enter)
    }
  }, [x, y])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Ink dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 rounded-full border-2 border-cream bg-ink"
        style={{ x, y, translateX: '-50%', translateY: '-50%', opacity: hidden ? 0 : 1 }}
      />
      {/* Trailing sticker ring — becomes a mustard blob on interactive elements */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] flex items-center justify-center rounded-full border-2 border-ink"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%', opacity: hidden ? 0 : 1 }}
        animate={{
          width: isPointer ? 58 : 34,
          height: isPointer ? 58 : 34,
          backgroundColor: isPointer ? 'rgba(245,184,46,0.55)' : 'rgba(245,184,46,0)',
          rotate: isPointer ? 20 : 0,
          scale: pressed ? 0.8 : 1,
          borderRadius: isPointer ? '42% 58% 55% 45% / 50% 40% 60% 50%' : '50%',
        }}
        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      >
        {isPointer && <span className="font-display text-[10px] font-bold text-ink">✦</span>}
      </motion.div>
    </>
  )
}
