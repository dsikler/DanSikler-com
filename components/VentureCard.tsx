'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { LucideIcon, ArrowRight } from 'lucide-react'

interface VentureCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
  color: string
  comingSoon?: boolean
  ventureType?: 'personal' | 'finance' | 'asset' | 'yak'
}

export default function VentureCard({
  title,
  description,
  href,
  icon: Icon,
  color,
  comingSoon = false,
}: VentureCardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      className={`bg-white rounded-xl shadow-lg p-6 h-full border border-brand-tan-dark transition-all hover:border-orange/40 ${
        comingSoon ? 'opacity-75' : 'hover:shadow-xl'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="bg-blue p-3 rounded-lg">
          <Icon className="text-white" size={24} />
        </div>
        {comingSoon && (
          <span className="bg-gold text-white px-3 py-1 rounded-full text-xs font-heading font-semibold">
            Coming Soon
          </span>
        )}
      </div>
      <h3 className="font-heading text-xl font-semibold text-blue mb-3">{title}</h3>
      <p className="text-blue-light text-sm leading-relaxed mb-4">{description}</p>
      {!comingSoon && (
        <div className="flex items-center text-orange font-semibold text-sm">
          <span>Learn more</span>
          <ArrowRight size={16} className="ml-2" />
        </div>
      )}
    </motion.div>
  )

  if (comingSoon) {
    return content
  }

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  )
}
