/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#FAF3E3', deep: '#F3E7CC', paper: '#FFFBF2' },
        ink: { DEFAULT: '#1A1A1A', soft: '#3A3632', mute: '#6B6358' },
        mustard: { DEFAULT: '#F5B82E', light: '#FBD97A', deep: '#D99A12' },
        tomato: { DEFAULT: '#E84C3D', light: '#F59A8F', deep: '#C2382B' },
        cobalt: { DEFAULT: '#2458C5', light: '#8FAEF0', deep: '#1A4296' },
        leaf: { DEFAULT: '#3E9B4F', light: '#9CD3A6', deep: '#2E7A3C' },
        blush: { DEFAULT: '#F7B7C8', light: '#FCDCE5', deep: '#E88AA5' },
      },
      fontFamily: {
        display: ['"Clash Display"', '"Unbounded"', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
        pixel: ['"Silkscreen"', 'monospace'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        hard: '4px 4px 0 #1A1A1A',
        'hard-sm': '2px 2px 0 #1A1A1A',
        'hard-md': '6px 6px 0 #1A1A1A',
        'hard-lg': '10px 10px 0 #1A1A1A',
        soft: '0 18px 40px -18px rgba(26, 26, 26, 0.35)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out 1.5s infinite',
        marquee: 'marquee 30s linear infinite',
        'marquee-rev': 'marquee 30s linear infinite reverse',
        blink: 'blink 1.1s step-end infinite',
        wiggle: 'wiggle 2.4s ease-in-out infinite',
        loading: 'loading 3.2s steps(12) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        loading: {
          '0%': { width: '8%' },
          '85%, 100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
