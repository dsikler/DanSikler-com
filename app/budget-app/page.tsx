'use client'

import { motion } from 'framer-motion'
import { Calculator, Eye, LogIn, ArrowRight, BarChart3, Target, TrendingUp } from 'lucide-react'

const BUDGET_APP_URL = 'https://elevate-ledger.netlify.app/'

export default function BudgetApp() {
  const handlePreviewMode = () => {
    window.open(`${BUDGET_APP_URL}?preview=true`, '_blank')
  }

  const handleOpenApp = () => {
    window.open(BUDGET_APP_URL, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-tan to-tan-light">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange rounded-full mb-6">
              <Calculator className="text-white" size={40} />
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-blue mb-6">
              Welcome to The Elevate Ledger
            </h1>
            <p className="text-xl text-blue-light max-w-2xl mx-auto mb-8">
              Your personal finance management tool to track expenses, manage budgets, and achieve your financial goals.
            </p>
          </motion.div>

          {/* Main CTA Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-brand-tan-dark hover:shadow-xl hover:border-orange/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange p-3 rounded-lg">
                  <LogIn className="text-white" size={24} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-blue">Create an Account</h2>
              </div>
              <p className="text-blue-light mb-6">
                Create an account to actively use the budget app. Track your transactions, set budgets, and monitor your financial progress with full access to all features.
              </p>
              <button
                onClick={handleOpenApp}
                className="w-full bg-orange text-white px-6 py-3 rounded-lg font-heading font-semibold hover:bg-[#e04420] transition-colors flex items-center justify-center gap-2"
              >
                Sign Up & Get Started
                <ArrowRight size={20} />
              </button>
              <p className="text-sm text-blue-light/70 mt-4 text-center">
                Already have an account?{' '}
                <a
                  href={BUDGET_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange hover:underline font-semibold"
                >
                  Sign In
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-brand-tan-dark hover:shadow-xl hover:border-gold/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gold p-3 rounded-lg">
                  <Eye className="text-white" size={24} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-blue">Preview Mode</h2>
              </div>
              <p className="text-blue-light mb-6">
                Explore the app with placeholder data. See how it works, view the interface, and understand the features before creating an account. View-only mode - no editing required.
              </p>
              <button
                onClick={handlePreviewMode}
                className="w-full bg-gold text-white px-6 py-3 rounded-lg font-heading font-semibold hover:bg-[#e89e20] transition-colors flex items-center justify-center gap-2"
              >
                Try Preview Mode
                <Eye size={20} />
              </button>
              <p className="text-sm text-blue-light/70 mt-4 text-center">
                No account needed - just explore!
              </p>
            </motion.div>
          </div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-blue mb-6 text-center">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <BarChart3 className="text-orange mx-auto mb-3" size={32} />
                <h3 className="font-heading font-semibold text-blue mb-2">Track Transactions</h3>
                <p className="text-sm text-blue-light">
                  Monitor income, expenses, and investments in real-time
                </p>
              </div>
              <div className="text-center">
                <Target className="text-orange mx-auto mb-3" size={32} />
                <h3 className="font-heading font-semibold text-blue mb-2">50/30/20 Budget</h3>
                <p className="text-sm text-blue-light">
                  Follow the proven budgeting method for financial success
                </p>
              </div>
              <div className="text-center">
                <TrendingUp className="text-orange mx-auto mb-3" size={32} />
                <h3 className="font-heading font-semibold text-blue mb-2">Monitor Progress</h3>
                <p className="text-sm text-blue-light">
                  Track your financial goals and see your progress over time
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Start Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-blue to-blue-dark rounded-xl shadow-lg p-8 text-white"
          >
            <h2 className="font-heading text-3xl font-bold mb-6">Quick Start Guide</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-orange/20 text-orange rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Create an Account and Login</h3>
                  <p className="text-tan/80 text-sm">Sign up to get started with your personalized budget</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange/20 text-orange rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Determine Your Income and Expenses</h3>
                  <p className="text-tan/80 text-sm">Review your last 3 months of transactions to get accurate estimates</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange/20 text-orange rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Fill Out Your Budget</h3>
                  <p className="text-tan/80 text-sm">Input your numbers and adjust as needed to align with your goals</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange/20 text-orange rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Maintain Monthly</h3>
                  <p className="text-tan/80 text-sm">Update transactions regularly to stay on track</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-tan/80">
                <strong className="text-gold">Note:</strong> Your session will remain active until you actively log out, making it easy to access your budget anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
