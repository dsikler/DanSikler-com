import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // San Diego Padres Inspired Palette
        sand: {
          DEFAULT: '#FFF5E6',
          light: '#FAF8F5',
        },
        brown: {
          light: '#D4C4B0',
          DEFAULT: '#8B7355',
          medium: '#A0917B',
          dark: '#4A3C2C',
          deep: '#2F241F',
        },
        beige: {
          light: '#F0EBE3',
          DEFAULT: '#F0EBE3',
        },
        gold: {
          muted: '#E8B84D',
          DEFAULT: '#FFC425',
        },
        navy: {
          pinstripe: '#002D62',
        },
        // Legacy support (will be replaced)
        slate: {
          50: '#FAF8F5',
          100: '#F0EBE3',
          200: '#D4C4B0',
          300: '#A0917B',
          400: '#8B7355',
          500: '#8B7355',
          600: '#4A3C2C',
          700: '#4A3C2C',
          800: '#2F241F',
          900: '#2F241F',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
      },
    },
  },
  plugins: [],
}
export default config
