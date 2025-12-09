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
          DEFAULT: '#87A3DD', // Primary Blue - soft, approachable blue
          dark: '#5C66C0', // Secondary Blue - deeper, richer blue
          light: '#A8C0F0',
        },
        accent: {
          DEFAULT: '#5C66C0', // Secondary Blue
          dark: '#4A5399',
          light: '#87A3DD', // Primary Blue
        },
        tan: {
          DEFAULT: '#F0E6D9', // Tan/Pale Primary - warm neutral for backgrounds
          dark: '#E5D4C0',
          light: '#F5EEE5',
        },
        charcoal: '#1e293b', // Charcoal for dark sections
        // Venture-Specific Accent Colors
        venture: {
          personal: '#87A3DD', // Primary Blue for Personal/Resume
          finance: '#5C66C0', // Secondary Blue for Elevate Finance
          asset: '#87A3DD', // Primary Blue for Elevate Asset Management
          yak: '#5C66C0', // Secondary Blue for Yak Bones
        },
        // Functional Colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#87A3DD',
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

