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
        // Darker San Diego Padres Inspired Palette
        chocolate: {
          dark: '#2F241F',
          DEFAULT: '#2F241F',
        },
        brown: {
          rich: '#4A3C2C',
          DEFAULT: '#4A3C2C',
          charcoal: '#3D3229',
        },
        gray: {
          warm: '#6B5D52',
          DEFAULT: '#6B5D52',
        },
        gold: {
          padres: '#FFC425',
          muted: '#D4A849',
          DEFAULT: '#FFC425',
        },
        cream: {
          DEFAULT: '#F5F1E8',
        },
        navy: {
          deep: '#1A1D2E',
          DEFAULT: '#1A1D2E',
        },
        beige: {
          warm: '#E8DFD3',
          DEFAULT: '#E8DFD3',
        },
        white: {
          soft: '#FEFDFB',
          DEFAULT: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
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
