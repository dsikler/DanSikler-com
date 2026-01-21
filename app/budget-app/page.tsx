'use client'

import { motion } from 'framer-motion'
import { Calculator, Eye, LogIn, ArrowRight, BarChart3, Target, TrendingUp } from 'lucide-react'

const BUDGET_APP_URL = 'https://elevate-ledger.netlify.app/'

export default function BudgetApp() {
  const handlePreviewMode = () => {
    // Open the app in a new tab with preview mode parameter
    window.open(`${BUDGET_APP_URL}?preview=true`, '_blank')
  }

  const handleOpenApp = () => {
    // Open the app in a new tab
    window.open(BUDGET_APP_URL, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-tan to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
              <Calculator className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Welcome to The Elevate Ledger
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Your personal finance management tool to track expenses, manage budgets, and achieve your financial goals.
            </p>
          </motion.div>

          {/* Main CTA Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Create Account Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary p-3 rounded-lg">
                  <LogIn className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary">Create an Account</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Create an account to actively use the budget app. Track your transactions, set budgets, and monitor your financial progress with full access to all features.
              </p>
              <button
                onClick={handleOpenApp}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
              >
                Sign Up & Get Started
                <ArrowRight size={20} />
              </button>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Already have an account?{' '}
                <a
                  href={BUDGET_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Sign In
                </a>
              </p>
            </motion.div>

            {/* Preview Mode Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-500 p-3 rounded-lg">
                  <Eye className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary">Preview Mode</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Explore the app with placeholder data. See how it works, view the interface, and understand the features before creating an account. View-only mode - no editing required.
              </p>
              <button
                onClick={handlePreviewMode}
                className="w-full bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
              >
                Try Preview Mode
                <Eye size={20} />
              </button>
              <p className="text-sm text-gray-500 mt-4 text-center">
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
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <BarChart3 className="text-primary mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-800 mb-2">Track Transactions</h3>
                <p className="text-sm text-gray-600">
                  Monitor income, expenses, and investments in real-time
                </p>
              </div>
              <div className="text-center">
                <Target className="text-primary mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-800 mb-2">50/30/20 Budget</h3>
                <p className="text-sm text-gray-600">
                  Follow the proven budgeting method for financial success
                </p>
              </div>
              <div className="text-center">
                <TrendingUp className="text-primary mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-800 mb-2">Monitor Progress</h3>
                <p className="text-sm text-gray-600">
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
            className="bg-gradient-to-br from-accent to-primary-dark rounded-xl shadow-lg p-8 text-white"
          >
            <h2 className="text-3xl font-bold mb-6">Quick Start Guide</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-full p-2 mt-1">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Create an Account and Login</h3>
                  <p className="text-white/90 text-sm">Sign up to get started with your personalized budget</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-full p-2 mt-1">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Determine Your Income and Expenses</h3>
                  <p className="text-white/90 text-sm">Review your last 3 months of transactions to get accurate estimates</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-full p-2 mt-1">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Fill Out Your Budget</h3>
                  <p className="text-white/90 text-sm">Input your numbers and adjust as needed to align with your goals</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-full p-2 mt-1">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Maintain Monthly</h3>
                  <p className="text-white/90 text-sm">Update transactions regularly to stay on track</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-white/90">
                <strong>Note:</strong> Your session will remain active until you actively log out, making it easy to access your budget anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

