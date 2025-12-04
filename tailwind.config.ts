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
        // Modern Slate Scale
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Primary Brand Color - Vibrant Indigo
        primary: {
          DEFAULT: '#4f46e5', // indigo-600
          dark: '#4338ca', // indigo-700
          light: '#6366f1', // indigo-500
        },
        // Accent Colors
        accent: {
          DEFAULT: '#0d9488', // Teal (keeping for compatibility)
          dark: '#0f766e',
          light: '#14b8a6',
        },
        indigo: {
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        violet: {
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        // Venture-Specific Accent Colors
        venture: {
          personal: '#4f46e5', // Indigo for Personal/Resume
          finance: '#0d9488', // Teal for Elevate Finance
          asset: '#f59e0b', // Gold/Amber for Elevate Asset Management
          yak: '#10b981', // Green for Yak Bones
        },
        // Functional Colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#6366f1',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
        serif: ['Playfair Display', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
        normal: '-0.01em',
        wide: '0',
      },
    },
  },
  plugins: [],
}
export default config
