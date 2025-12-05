'use client'

import { Download, FileText, Briefcase, GraduationCap, Award, Code, Database, TrendingUp, Users, BarChart3, Cpu } from 'lucide-react'

export default function Resume() {
  return (
    <div className="bg-[#F5F1E8] min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-[#4A3C2C]">Resume & Skills</h1>
            <a
              href="/Dan_Sikler_Resume.pdf"
              download="Dan_Sikler_Resume.pdf"
              className="flex items-center gap-2 bg-[#FFC425] hover:bg-[#D4A849] text-[#2F241F] px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download PDF
            </a>
          </div>
        
          {/* Resume PDF Viewer */}
          <div className="bg-white border border-[#E8DFD3] rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#FFC425]" size={28} />
              <h2 className="text-2xl font-semibold text-[#4A3C2C]">Resume</h2>
            </div>
            
            {/* PDF Embed */}
            <div className="border border-[#E8DFD3] rounded-lg overflow-hidden">
              <iframe
                src="/Dan_Sikler_Resume.pdf"
                className="w-full h-[800px]"
                title="Resume PDF"
              />
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white border border-[#E8DFD3] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#4A3C2C] mb-4 flex items-center gap-3">
              <Award className="text-[#FFC425]" size={24} />
              Summary
            </h2>
            <p className="text-lg text-[#4A3C2C] leading-relaxed">
              Trust & Safety leader with 10+ years driving operational excellence through AI integration, BPO management, and cross-functional program delivery. Expert in AI model training, prompt engineering, and LLM optimization for content moderation at scale. Skilled in designing golden datasets, auditing AI outputs through SQL-based analysis, and building scalable frameworks that balance automation with human oversight. Proven success managing global vendor teams, leading complex technical migrations, and implementing data-driven solutions that improve accuracy, efficiency, and platform integrity.
            </p>
          </div>

          {/* Experience Section */}
          <div className="bg-white border border-[#E8DFD3] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#4A3C2C] mb-6 flex items-center gap-3">
              <Briefcase className="text-[#FFC425]" size={24} />
              Experience
            </h2>
            
            <div className="space-y-8">
              {/* Indeed - Glassdoor */}
              <div className="border-l-4 border-[#FFC425] pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#4A3C2C]">Indeed - Glassdoor</h3>
                    <p className="text-lg font-semibold text-[#FFC425]">Functional Lead</p>
                  </div>
                  <div className="text-[#6B5D52] font-medium">
                    <p>April 2025 - PRESENT</p>
                    <p className="text-sm">Remote</p>
                  </div>
                </div>
                <p className="text-[#4A3C2C] mb-4">
                  Leading Trust & Safety operations for world's largest job platform (post-merger), focusing on AI-enhanced content moderation, escalation management, and cross-functional program delivery across Heritage and Community platforms.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#4A3C2C] mb-2">AI Model Training & Optimization:</h4>
                    <ul className="space-y-2 text-[#4A3C2C] ml-4">
                      <li className="flex items-start">
                        <span className="text-[#FFC425] mr-2">•</span>
                        <span>Train and refine GPT models through iterative prompt engineering, SQL-based output auditing, and golden dataset curation to optimize moderation accuracy and reduce false positives.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFC425] mr-2">•</span>
                        <span>Design comprehensive testing frameworks for AI moderation tools, including edge case identification, bias detection protocols, and quality threshold calibration.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFC425] mr-2">•</span>
                        <span>Conduct systematic AI output analysis using SQL data pipelines to identify model drift, calibration needs, and guideline misalignment, informing prompt refinement strategies.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFC425] mr-2">•</span>
                        <span>Create and maintain golden datasets as a single source of truth for prompt fine-tuning, ensuring high-quality training data for LLM optimization.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#4A3C2C] mb-2">Content Moderation Leadership & QA Strategy:</h4>
                    <ul className="space-y-2 text-[#4A3C2C] ml-4">
                      <li className="flex items-start">
                        <span className="text-[#FFC425] mr-2">•</span>
                        <span>Serve as subject matter expert on content moderation policy and operations, leading top-level escalation resolution across all content verticals, making final moderation calls in coordination with Legal, Communications, and C-suite leadership, reducing escalation backlog by 40%.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFC425] mr-2">•</span>
                        <span>Design and launch Level 2 Moderation Team to handle complex escalations, re-moderation projects, and sensitive policy enforcement.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFC425] mr-2">•</span>
                        <span>Own QA design and review strategy for AI-powered moderation tooling, implementing feedback loops and performance metrics that improve team calibration scores by 18%.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#4A3C2C] mb-2">Technical Project Leadership:</h4>
                    <ul className="space-y-2 text-[#4A3C2C] ml-4">
                      <li className="flex items-start">
                        <span className="text-[#FFC425] mr-2">•</span>
                        <span>Drive Retool migration and UAT across 10+ mission-critical applications, ensuring functional parity through comprehensive testing, backlog grooming, and Engineering collaboration.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFC425] mr-2">•</span>
                        <span>Build SQL-based reporting dashboards to identify root causes of content flagging patterns, powering automation recommendations that reduce manual review volume by 35%.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Glassdoor */}
              <div className="border-l-4 border-[#D4A849] pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#4A3C2C]">Glassdoor</h3>
                    <p className="text-lg font-semibold text-[#D4A849]">Offshore Program Lead</p>
                  </div>
                  <div className="text-[#6B5D52] font-medium">
                    <p>March 2019 - April 2025</p>
                    <p className="text-sm">Remote</p>
                  </div>
                </div>
                <p className="text-[#4A3C2C] mb-4">
                  Managed global BPO operations across multiple vendors, designing scalable QA programs, training frameworks, and compliance workflows to ensure accuracy and consistency.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#4A3C2C] mb-2">BPO & Vendor Management:</h4>
                    <ul className="space-y-2 text-[#4A3C2C] ml-4">
                      <li className="flex items-start">
                        <span className="text-[#D4A849] mr-2">•</span>
                        <span>Oversaw offshore moderation teams across 3 vendors spanning 5 countries, managing 60+ reviewers and ensuring adherence to platform guidelines and quality standards.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#D4A849] mr-2">•</span>
                        <span>Designed comprehensive QA audit programs achieving 92% average accuracy across vendor teams through data-driven feedback and calibration sessions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#D4A849] mr-2">•</span>
                        <span>Built Lessonly and Guru documentation libraries to standardize workflows across geographies, supporting seamless AI integration readiness.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#4A3C2C] mb-2">Cross-Functional Collaboration:</h4>
                    <ul className="space-y-2 text-[#4A3C2C] ml-4">
                      <li className="flex items-start">
                        <span className="text-[#D4A849] mr-2">•</span>
                        <span>Partnered with Product, Engineering, and Customer Care teams to define admin platform bugs, prioritize feature requests, and serve as operational voice in tooling enhancements.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#D4A849] mr-2">•</span>
                        <span>Launched cross-functional QA and calibration workflows between Trust & Safety and Customer Care, aligning enforcement standards and improving consistency by 25%.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#D4A849] mr-2">•</span>
                        <span>Created decision-making trees and calibration tools to align Heritage and Community QA enforcement across internal and external teams.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#4A3C2C] mb-2">Process Optimization:</h4>
                    <ul className="space-y-2 text-[#4A3C2C] ml-4">
                      <li className="flex items-start">
                        <span className="text-[#D4A849] mr-2">•</span>
                        <span>Developed SQL queries and Metabase dashboards to monitor fraud flag triggers, guideline attunement metrics, and operational performance KPIs.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#D4A849] mr-2">•</span>
                        <span>Automated routine reporting workflows, reducing manual data processing time by 50% and enabling real-time performance tracking.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white border border-[#E8DFD3] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#4A3C2C] mb-6 flex items-center gap-3">
              <GraduationCap className="text-[#FFC425]" size={24} />
              Education
            </h2>
            <div className="border-l-4 border-[#FFC425] pl-6">
              <h3 className="text-xl font-bold text-[#4A3C2C]">Kent State University</h3>
              <p className="text-lg text-[#4A3C2C] mb-2">Bachelor of Business Administration</p>
              <p className="text-[#6B5D52]">Finance Major, Business Management Minor</p>
              <p className="text-[#6B5D52] mt-1">August 2009 - May 2013</p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white border border-[#E8DFD3] rounded-xl p-8">
            <h2 className="text-2xl font-bold text-[#4A3C2C] mb-6 flex items-center gap-3">
              <Code className="text-[#FFC425]" size={24} />
              Skills & Expertise
            </h2>
            
            <div className="space-y-8">
              {/* AI & LLM Operations */}
              <div>
                <h3 className="text-lg font-semibold text-[#4A3C2C] mb-3 flex items-center gap-2">
                  <Cpu className="text-[#FFC425]" size={20} />
                  AI & LLM Operations
                </h3>
                <p className="text-[#4A3C2C] leading-relaxed">
                  Prompt Engineering for LLMs, Golden Dataset Curation, Model Training & Calibration, AI Output Auditing, Oracle OCI AI Foundations (2025).
                </p>
              </div>

              {/* Data Analytics & Visualization */}
              <div>
                <h3 className="text-lg font-semibold text-[#4A3C2C] mb-3 flex items-center gap-2">
                  <Database className="text-[#FFC425]" size={20} />
                  Data Analytics & Visualization
                </h3>
                <p className="text-[#4A3C2C] leading-relaxed">
                  SQL (Advanced Querying), Metabase, Superset, Tableau, RazorSQL, Excel (Financial Modeling & Analysis).
                </p>
              </div>

              {/* Development & Automation */}
              <div>
                <h3 className="text-lg font-semibold text-[#4A3C2C] mb-3 flex items-center gap-2">
                  <Code className="text-[#FFC425]" size={20} />
                  Development & Automation
                </h3>
                <p className="text-[#4A3C2C] leading-relaxed">
                  Cursor (AI-Assisted Coding), Retool (Internal Tooling & Workflows), JavaScript (Scripting & Automation).
                </p>
              </div>

              {/* Enterprise Platforms */}
              <div>
                <h3 className="text-lg font-semibold text-[#4A3C2C] mb-3 flex items-center gap-2">
                  <TrendingUp className="text-[#FFC425]" size={20} />
                  Enterprise Platforms
                </h3>
                <p className="text-[#4A3C2C] leading-relaxed">
                  Salesforce (CRM), Jira (Project Tracking), Lessonly & Guru (Knowledge Management), Google Workspace, Slack/Zoom.
                </p>
              </div>

              {/* Operational Methodologies */}
              <div>
                <h3 className="text-lg font-semibold text-[#4A3C2C] mb-3 flex items-center gap-2">
                  <BarChart3 className="text-[#FFC425]" size={20} />
                  Operational Methodologies
                </h3>
                <p className="text-[#4A3C2C] leading-relaxed">
                  Global Vendor Management, Agile/Scrum, User Acceptance Testing (UAT), QA Framework Design, Root Cause Analysis, A/B Testing, Escalation Resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
