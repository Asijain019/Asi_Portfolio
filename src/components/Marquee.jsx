/** Rotated ticker strip with ✦ separators. */
export default function Marquee({
  items,
  className = 'bg-ink text-cream',
  starClass = 'text-mustard',
  rotate = -1.5,
  reverse = false,
  size = 'text-lg md:text-2xl',
}) {
  const loop = [...items, ...items]
  return (
    <div
      className={`relative z-10 -mx-4 overflow-hidden border-y-2 border-ink py-3 md:py-4 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <div className={`flex w-max ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className={`flex items-center whitespace-nowrap font-display font-semibold uppercase ${size}`}>
            <span className="px-5 md:px-7">{item}</span>
            <span className={starClass}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
