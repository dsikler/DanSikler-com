'use client'

import { ArrowRight } from 'lucide-react'

export default function YakBones() {
  const handleVisitWebsite = () => {
    // Open the Yak Brothers website
    // The Yak Brothers is a separate Next.js project in the "Yak Brothers" folder
    // If deployed, update this URL to the deployed site
    // If running locally, it typically runs on http://localhost:3001
    const yakBrothersUrl = 'http://localhost:3001' // Update this to the deployed URL if available
    window.open(yakBrothersUrl, '_blank')
  }

  return (
    <div className="container mx-auto px-4 py-16 bg-tan min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-primary/20">
          <h1 className="text-4xl font-bold text-primary mb-4">Yak Brothers</h1>
          <p className="text-lg text-gray-700 mb-6">
            E-commerce platform for unique products and experiences.
          </p>
          <button
            onClick={handleVisitWebsite}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Visit Yak Brothers Website
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

