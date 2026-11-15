import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

/**
 * Window-level pointer position normalised to [-1, 1] on both axes,
 * smoothed with a spring. Use with useTransform for per-layer depth.
 */
export default function usePointerParallax(spring = { stiffness: 70, damping: 16, mass: 0.6 }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const px = useSpring(mx, spring)
  const py = useSpring(my, spring)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined
    const move = (e) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1)
      my.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mx, my])

  return { px, py }
}
