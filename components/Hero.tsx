'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calculator, Building2, Bone, Briefcase } from 'lucide-react'
import VentureCard from './VentureCard'
import InteractiveBackground from './InteractiveBackground'

const ventures = [
  {
    title: 'The Elevate Ledger',
    description: 'Personal finance management tool to track expenses and manage budgets effectively.',
    href: '/budget-app',
    icon: Calculator,
    color: 'bg-teal-600',
    ventureType: 'finance' as const,
  },
  {
    title: 'Elevate Asset Management',
    description: 'Real estate investment and asset management company.',
    href: '/elevate',
    icon: Building2,
    color: 'bg-amber-600',
    ventureType: 'asset' as const,
  },
  {
    title: 'Yak Brothers',
    description: 'E-commerce platform for premium dog chews and pet products.',
    href: '/yak-bones',
    icon: Bone,
    color: 'bg-green-600',
    comingSoon: false,
    ventureType: 'yak' as const,
  },
  {
    title: 'Resume and Skills',
    description: 'View my professional background, skills, and accomplishments.',
    href: '/resume',
    icon: Briefcase,
    color: 'bg-blue-900',
    ventureType: 'personal' as const,
  },
]

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-slate-900">
      {/* Interactive Background */}
      <InteractiveBackground />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-900/40 to-slate-900/70 z-0" />
      
      {/* Additional subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-transparent to-amber-600/10 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 lg:pt-20">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 drop-shadow-2xl tracking-wider"
          >
            DAN SIKLER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-8 drop-shadow-2xl"
            style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            Building Value Across Industries
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
            >
              Learn More About Me
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Venture Cards Grid - 4 columns as per guidelines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-24">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <VentureCard {...venture} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

