'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: 'https://elevate-ledger.netlify.app/', label: 'The Elevate Ledger' },
  { href: 'https://elevate-asset-management.netlify.app/', label: 'Elevate Asset Management' },
  { href: 'https://yak-brothers.netlify.app/', label: 'Yak Brothers' },
  { href: '/resume', label: 'Resume' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-tan shadow-sm border-b border-primary/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isExternal = item.href.startsWith('http')
              
              if (isExternal) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-colors hover:text-accent text-gray-700"
                  >
                    {item.label}
                  </a>
                )
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    pathname === item.href
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => {
              const isExternal = item.href.startsWith('http')
              
              if (isExternal) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-sm font-medium transition-colors text-gray-700 hover:text-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-accent'
                      : 'text-gray-700 hover:text-accent'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        )}
      </nav>
    </header>
  )
}

