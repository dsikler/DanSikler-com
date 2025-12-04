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
        // Modern Slate Scale - Primary neutrals
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
        // Primary Brand - Deep Steel Blue (masculine, professional)
        primary: {
          DEFAULT: '#1e40af', // Deep steel blue
          dark: '#1e3a8a',
          light: '#3b82f6',
        },
        // Accent - Rich Emerald Green (masculine, modern)
        accent: {
          DEFAULT: '#059669', // Rich emerald
          dark: '#047857',
          light: '#10b981',
        },
        // Steel Blue for hero sections
        steel: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Emerald Green for accents
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
        },
        // Venture-Specific Accent Colors
        venture: {
          personal: '#1e40af', // Steel blue for Personal/Resume
          finance: '#059669', // Emerald for Elevate Finance
          asset: '#d97706', // Rich amber for Elevate Asset Management
          yak: '#059669', // Emerald for Yak Bones
        },
        // Functional Colors
        success: '#059669',
        warning: '#d97706',
        error: '#dc2626',
        info: '#2563eb',
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
