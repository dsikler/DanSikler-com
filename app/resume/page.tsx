'use client'

import { Download, FileText } from 'lucide-react'

export default function Resume() {
  return (
    <div className="bg-blue-dark min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl font-bold text-white mb-8">Resume & Skills</h1>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <FileText className="text-orange" size={24} />
                <h2 className="font-heading text-2xl font-semibold text-blue">Resume</h2>
              </div>
              <a
                href="/Dan_Sikler_Resume_2026.pdf"
                download
                className="flex items-center gap-2 bg-orange text-white px-4 py-2 rounded-lg hover:bg-[#e04420] transition-colors font-heading font-semibold text-sm"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>

            <div className="border border-brand-tan-dark rounded-lg overflow-hidden">
              <iframe
                src="/Dan_Sikler_Resume_2026.pdf"
                className="w-full h-[800px]"
                title="Resume PDF"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="font-heading text-2xl font-semibold text-blue mb-6">Skills & Expertise</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-lg font-semibold text-orange mb-3 flex items-center">
                  <span className="w-1 h-6 bg-orange mr-3 rounded-full"></span>
                  Technical Skills
                </h3>
                <ul className="space-y-2 text-blue-light">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>SQL & Database Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>JavaScript</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Data Analysis & Visualization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Tableau Analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Software Testing & Troubleshooting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>AI Tools (Cursor AI)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-orange mb-3 flex items-center">
                  <span className="w-1 h-6 bg-orange mr-3 rounded-full"></span>
                  Software & Tools
                </h3>
                <ul className="space-y-2 text-blue-light">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Microsoft Office Suite (Excel, Word, PowerPoint, Project)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Google Workspace (Meet, Suite)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Project Management (Jira, Microsoft Project)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Communication Platforms (Slack, Teams, Zoom)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>CRM & ERP Systems (Salesforce and NetSuite)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-orange mb-3 flex items-center">
                  <span className="w-1 h-6 bg-orange mr-3 rounded-full"></span>
                  Project & Program Management
                </h3>
                <ul className="space-y-2 text-blue-light">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Agile & Waterfall Methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Project Planning & Execution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Scope, Cost & Quality Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Resource Allocation & Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Stakeholder Management & Engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Performance Metrics & Dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Risk Management & Mitigation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-orange mb-3 flex items-center">
                  <span className="w-1 h-6 bg-orange mr-3 rounded-full"></span>
                  Business Operations
                </h3>
                <ul className="space-y-2 text-blue-light">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Operational Management & Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Process Improvement & Efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Vendor & Supplier Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Supply Chain & Inventory Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Budgeting & Cost Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Compliance & Quality Assurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Property Management</span>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h3 className="font-heading text-lg font-semibold text-orange mb-3 flex items-center">
                  <span className="w-1 h-6 bg-orange mr-3 rounded-full"></span>
                  Professional Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
                  <ul className="space-y-2 text-blue-light">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Leadership & Team Management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Communication & Presentation</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-blue-light">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Time Management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Conflict Resolution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Training & Development</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-blue-light">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Customer Support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Workforce Management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Product Management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
