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
  { href: '/resume', label: 'Resume' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-tan/95 backdrop-blur-md border-b border-brand-tan-dark">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => {
              const isExternal = item.href.startsWith('http')
              const isActive = pathname === item.href

              const className = `font-heading text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${
                isActive
                  ? 'text-orange border-b-2 border-orange pb-0.5'
                  : 'text-blue hover:text-orange'
              }`

              if (isExternal) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-heading text-sm font-semibold tracking-wide uppercase transition-colors duration-200 text-blue hover:text-orange`}
                  >
                    {item.label}
                  </a>
                )
              }

              return (
                <Link key={item.href} href={item.href} className={className}>
                  {item.label}
                </Link>
              )
            })}
          </div>

          <button
            className="md:hidden text-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-brand-tan-dark">
            {navItems.map((item) => {
              const isExternal = item.href.startsWith('http')
              const isActive = pathname === item.href

              const className = `block py-3 font-heading text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${
                isActive ? 'text-orange' : 'text-blue hover:text-orange'
              }`

              if (isExternal) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 font-heading text-sm font-semibold tracking-wide uppercase transition-colors duration-200 text-blue hover:text-orange"
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
                  className={className}
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
