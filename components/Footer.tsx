import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Dan Sikler</h3>
            <p className="text-white text-base leading-relaxed">
              Building Value Across Industries
            </p>
          </div>

          {/* Social Links */}
          <div className="md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:sikler.dan@gmail.com"
                className="text-slate-400 hover:text-teal-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/danielsikler/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/dsikler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 md:mt-12 pt-8 text-center text-slate-400 caption-text">
          <p>&copy; {new Date().getFullYear()} Dan Sikler. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

