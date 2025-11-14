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
  ventureType,
}: VentureCardProps) {
  // Get hover color based on venture type
  const getHoverColor = () => {
    switch (ventureType) {
      case 'personal':
        return 'hover:border-blue-900'
      case 'finance':
        return 'hover:border-teal-600'
      case 'asset':
        return 'hover:border-amber-600'
      case 'yak':
        return 'hover:border-green-600'
      default:
        return 'hover:border-teal-600'
    }
  }

  const getLinkColor = () => {
    switch (ventureType) {
      case 'personal':
        return 'text-blue-900'
      case 'finance':
        return 'text-teal-600'
      case 'asset':
        return 'text-amber-600'
      case 'yak':
        return 'text-green-600'
      default:
        return 'text-teal-600'
    }
  }

  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      className={`bg-white rounded-xl shadow-lg p-6 h-full border border-slate-200 transition-all ${getHoverColor()} ${
        comingSoon ? 'opacity-75' : 'hover:shadow-xl'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`${color} p-3 rounded-lg`}>
          <Icon className="text-white" size={24} />
        </div>
        {comingSoon && (
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Coming Soon
          </span>
        )}
      </div>
      <h3 className="card-title mb-3">{title}</h3>
      <p className="body-text mb-4">{description}</p>
      {!comingSoon && (
        <div className={`flex items-center ${getLinkColor()} font-semibold`}>
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

