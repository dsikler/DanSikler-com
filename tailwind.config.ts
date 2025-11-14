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
        // Master Brand Colors
        primary: {
          DEFAULT: '#1e3a8a', // Navy Blue
          dark: '#1e40af',
          light: '#3b82f6',
        },
        accent: {
          DEFAULT: '#0d9488', // Teal
          dark: '#0f766e',
          light: '#14b8a6',
        },
        charcoal: '#1e293b', // Charcoal for dark sections
        // Venture-Specific Accent Colors
        venture: {
          personal: '#1e3a8a', // Blue for Personal/Resume
          finance: '#0d9488', // Teal for Elevate Finance
          asset: '#f59e0b', // Gold/Amber for Elevate Asset Management
          yak: '#10b981', // Green for Yak Bones
        },
        // Functional Colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config

