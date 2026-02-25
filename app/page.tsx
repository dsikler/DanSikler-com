import {
  ArrowRight,
  User,
  FileText,
  MapPin,
  Briefcase,
  TrendingUp,
  Building2,
  Code,
  Cpu,
  Users,
  BarChart3,
  Mail,
  Download,
  Linkedin,
  Github,
  Award,
  GraduationCap
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-tan overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-[0.07]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange rounded-full blur-[140px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue rounded-full blur-[140px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-brand-tan-dark rounded-full text-blue text-sm font-medium shadow-sm">
                <span className="w-2 h-2 bg-orange rounded-full animate-pulse"></span>
                <span>Building ventures across industries</span>
              </div>

              <div>
                <h1 className="font-heading text-6xl md:text-7xl font-bold text-blue tracking-tight leading-none">
                  Dan Sikler
                </h1>
              </div>

              <p className="text-lg text-blue-light leading-relaxed max-w-xl">
                Trust & Safety leader at Indeed-Glassdoor with a habit of seeing patterns others miss. I spend my days training AI models and managing cross-functional projects, then come home to build side projects like Elevate Ledger, a budgeting app I created after getting frustrated with existing personal finance tools. I also hunt for undervalued real estate and explore new business ideas. I'm drawn to problems where technology, data, and human behavior intersect, and I like building things that actually work.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-xl">
                <a
                  href="/about"
                  className="group px-6 py-4 bg-orange hover:bg-[#e04420] text-white rounded-lg font-heading font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-orange/20 whitespace-nowrap"
                >
                  <User className="w-5 h-5 shrink-0" />
                  Learn More About Me
                  <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/resume"
                  className="px-6 py-4 bg-transparent border-2 border-blue hover:border-orange text-blue hover:text-orange rounded-lg font-heading font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <FileText className="w-5 h-5 shrink-0" />
                  View Resume
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-blue-light pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange rounded-full animate-pulse"></div>
                  <span>Available for opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Wadsworth, OH</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-8 bg-orange/10 rounded-3xl blur-2xl"></div>
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <img
                    src="/dan-sikler-home.JPG"
                    alt="Dan Sikler"
                    className="w-full h-full object-cover rounded-2xl border-4 border-white shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 px-5 py-3 bg-blue rounded-xl shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange rounded-full"></div>
                      <span className="font-heading font-bold text-white text-sm">Open to Connect</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Company Bar */}
      <section className="py-8 bg-blue border-y border-blue-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 text-tan-light">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-gold" />
              <span className="font-medium">Indeed &bull; Glassdoor</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-gold" />
              <span className="font-medium">Program and Operations Management</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-gold" />
              <span className="font-medium">Kent State University</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-gold" />
              <span className="font-medium">10+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section className="py-24 bg-blue-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-5xl font-bold text-tan">
              What I'm Building
            </h2>
            <p className="text-xl text-brand-tan-dark max-w-3xl mx-auto leading-relaxed">
              Exploring ventures across multiple industries, each designed to solve real problems and create lasting value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {/* Card 1: Resume */}
            <a href="/resume" className="group h-full flex w-full">
              <div className="bg-blue border border-white/10 hover:border-orange/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange/10 flex flex-col w-full">
                <div className="h-1 bg-gradient-to-r from-orange to-gold"></div>
                <div className="p-8 space-y-6 flex flex-col flex-1">
                  <div className="w-14 h-14 bg-orange/10 rounded-lg flex items-center justify-center group-hover:bg-orange/20 transition-colors">
                    <Briefcase className="w-7 h-7 text-orange" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-heading text-2xl font-bold text-tan group-hover:text-orange transition-colors">
                      Resume & Skills
                    </h3>
                    <p className="text-brand-tan-dark leading-relaxed">
                      Scaling Trust & Safety operations through expert AI training, prompt engineering, and vendor strategy.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-orange font-semibold pt-2 group-hover:gap-3 transition-all mt-auto">
                    <span>View Experience</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            {/* Card 2: Elevate Finance */}
            <a href="https://elevate-ledger.netlify.app/" target="_blank" rel="noopener noreferrer" className="group h-full flex w-full">
              <div className="bg-blue border border-white/10 hover:border-orange/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange/10 flex flex-col w-full">
                <div className="h-1 bg-gradient-to-r from-orange to-gold"></div>
                <div className="p-8 space-y-6 flex flex-col flex-1">
                  <div className="w-14 h-14 bg-orange/10 rounded-lg flex items-center justify-center group-hover:bg-orange/20 transition-colors">
                    <TrendingUp className="w-7 h-7 text-orange" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-heading text-2xl font-bold text-tan group-hover:text-orange transition-colors">
                      Elevate Finance
                    </h3>
                    <p className="text-brand-tan-dark leading-relaxed">
                      A smart budgeting tool designed to simplify tracking and build wealth without restricting your lifestyle.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-orange font-semibold pt-2 group-hover:gap-3 transition-all mt-auto">
                    <span>Try the App</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            {/* Card 3: Elevate Asset Management */}
            <a href="https://elevate-asset-management.netlify.app/" target="_blank" rel="noopener noreferrer" className="group h-full flex w-full">
              <div className="bg-blue border border-white/10 hover:border-orange/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange/10 flex flex-col w-full">
                <div className="h-1 bg-gradient-to-r from-orange to-gold"></div>
                <div className="p-8 space-y-6 flex flex-col flex-1">
                  <div className="w-14 h-14 bg-orange/10 rounded-lg flex items-center justify-center group-hover:bg-orange/20 transition-colors">
                    <Building2 className="w-7 h-7 text-orange" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-heading text-2xl font-bold text-tan group-hover:text-orange transition-colors">
                      Elevate Asset Management
                    </h3>
                    <p className="text-brand-tan-dark leading-relaxed">
                      Strategic real estate investment focused on flipping, modernizing, and managing properties for long-term growth.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-orange font-semibold pt-2 group-hover:gap-3 transition-all mt-auto">
                    <span>View Portfolio</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-tan">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-4xl font-bold text-blue">
              Core Competencies
            </h2>
            <p className="text-lg text-blue-light">
              Cross-functional expertise across technology, operations, and business
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white border border-brand-tan-dark rounded-xl p-6 text-center hover:border-orange/40 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange/10 transition-colors">
                <Cpu className="w-6 h-6 text-blue group-hover:text-orange transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-blue mb-2">AI Strategy & Model Training</h3>
              <p className="text-sm text-blue-light">Optimizing LLMs through advanced prompt engineering, golden dataset curation, and rigorous SQL-based performance auditing.</p>
            </div>

            <div className="bg-white border border-brand-tan-dark rounded-xl p-6 text-center hover:border-orange/40 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange/10 transition-colors">
                <Users className="w-6 h-6 text-blue group-hover:text-orange transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-blue mb-2">Trust & Safety Operations</h3>
              <p className="text-sm text-blue-light">Safeguarding platforms via global content moderation, high-stakes escalation management, and strategic policy enforcement.</p>
            </div>

            <div className="bg-white border border-brand-tan-dark rounded-xl p-6 text-center hover:border-orange/40 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange/10 transition-colors">
                <BarChart3 className="w-6 h-6 text-blue group-hover:text-orange transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-blue mb-2">Global Program Management</h3>
              <p className="text-sm text-blue-light">Scaling operational efficiency through vendor leadership, cross-functional migrations, and standardized QA frameworks.</p>
            </div>

            <div className="bg-white border border-brand-tan-dark rounded-xl p-6 text-center hover:border-orange/40 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange/10 transition-colors">
                <TrendingUp className="w-6 h-6 text-blue group-hover:text-orange transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-blue mb-2">Data Analytics & Strategic Investment</h3>
              <p className="text-sm text-blue-light">Leveraging SQL-driven insights and financial expertise to automate workflows, reduce manual overhead, and maximize asset performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange rounded-full blur-[140px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold rounded-full blur-[140px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-10">
          <div className="space-y-6">
            <h2 className="font-heading text-5xl font-bold text-tan">
              Let's Build Something Together
            </h2>
            <p className="text-xl text-brand-tan-dark leading-relaxed">
              Open to opportunities in AI, ML, program management, operations leadership, and venture collaboration.
              Whether you are hiring, investing, or just want to connect, I would love to hear from you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:sikler.dan@gmail.com" className="min-w-[260px] px-10 py-4 bg-orange hover:bg-[#e04420] text-white rounded-lg font-heading font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-xl hover:shadow-orange/30">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a href="/Dan_Sikler_Resume_2026.pdf" download="Dan_Sikler_Resume_2026.pdf" className="min-w-[260px] px-10 py-4 bg-transparent border-2 border-white/30 hover:border-orange text-tan rounded-lg font-heading font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8 border-t border-white/10">
            <a href="https://linkedin.com/in/danielsikler" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-dark hover:bg-orange border border-white/10 hover:border-orange rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <Linkedin className="w-5 h-5 text-gold group-hover:text-white" />
            </a>
            <a href="https://github.com/dansikler" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-dark hover:bg-orange border border-white/10 hover:border-orange rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <Github className="w-5 h-5 text-gold group-hover:text-white" />
            </a>
            <a href="mailto:sikler.dan@gmail.com" className="w-12 h-12 bg-blue-dark hover:bg-orange border border-white/10 hover:border-orange rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <Mail className="w-5 h-5 text-gold group-hover:text-white" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
