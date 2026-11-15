/* Hand-drawn style inline SVG doodles. All accept className + color props. */

const stroke = {
  fill: 'none',
  strokeWidth: 3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  vectorEffect: 'non-scaling-stroke',
}

export function Star({ className = '', color = '#F5B82E', outline = '#1A1A1A' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M32 4 L39.5 23.5 L60 25 L44 38.5 L49.5 59 L32 47.5 L14.5 59 L20 38.5 L4 25 L24.5 23.5 Z"
        fill={color}
        stroke={outline}
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Sparkle({ className = '', color = '#1A1A1A' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M24 2 C26 18 30 22 46 24 C30 26 26 30 24 46 C22 30 18 26 2 24 C18 22 22 18 24 2 Z" fill={color} />
    </svg>
  )
}

export function Squiggle({ className = '', color = '#1A1A1A' }) {
  return (
    <svg viewBox="0 0 160 30" className={className} aria-hidden="true">
      <path d="M4 18 C18 2 28 30 44 15 S70 2 84 16 S112 30 126 14 S150 4 156 14" stroke={color} {...stroke} />
    </svg>
  )
}

export function Arrow({ className = '', color = '#1A1A1A' }) {
  return (
    <svg viewBox="0 0 120 90" className={className} aria-hidden="true">
      <path d="M8 12 C30 6 70 10 88 40 C96 54 98 64 98 76" stroke={color} {...stroke} />
      <path d="M84 64 L98 80 L110 62" stroke={color} {...stroke} />
    </svg>
  )
}

export function LoopArrow({ className = '', color = '#1A1A1A' }) {
  return (
    <svg viewBox="0 0 140 110" className={className} aria-hidden="true">
      <path
        d="M10 20 C40 10 70 18 66 44 C63 64 34 62 40 44 C48 22 92 30 104 62 C110 78 112 88 112 96"
        stroke={color}
        {...stroke}
      />
      <path d="M100 84 L112 100 L126 86" stroke={color} {...stroke} />
    </svg>
  )
}

export function Scribble({ className = '', color = '#E84C3D' }) {
  return (
    <svg viewBox="0 0 200 80" className={className} preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M20 44 C20 14 180 8 186 36 C192 66 30 76 14 50 C2 30 80 12 150 18"
        stroke={color}
        {...stroke}
      />
    </svg>
  )
}

export function Heart({ className = '', color = '#E84C3D' }) {
  return (
    <svg viewBox="0 0 48 44" className={className} aria-hidden="true">
      <path
        d="M24 40 C10 30 3 22 4 13 C5 6 11 3 16 4 C20 5 23 8 24 12 C25 8 28 5 32 4 C37 3 43 6 44 13 C45 22 38 30 24 40 Z"
        fill={color}
        stroke="#1A1A1A"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Crown({ className = '', color = '#1A1A1A' }) {
  return (
    <svg viewBox="0 0 64 44" className={className} aria-hidden="true">
      <path d="M6 38 L4 10 L20 24 L32 4 L44 24 L60 10 L58 38 Z" stroke={color} {...stroke} />
    </svg>
  )
}

export function Burst({ className = '', color = '#1A1A1A' }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line
          key={a}
          x1="30"
          y1="12"
          x2="30"
          y2="2"
          transform={`rotate(${a} 30 30)`}
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}

export function Flower({ className = '', color = '#F7B7C8', center = '#F5B82E' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse
          key={a}
          cx="32"
          cy="16"
          rx="9"
          ry="13"
          transform={`rotate(${a} 32 32)`}
          fill={color}
          stroke="#1A1A1A"
          strokeWidth="2.5"
        />
      ))}
      <circle cx="32" cy="32" r="9" fill={center} stroke="#1A1A1A" strokeWidth="2.5" />
    </svg>
  )
}
