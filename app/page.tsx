import {
  Sparkles,
  ArrowRight,
  User,
  FileText,
  MapPin,
  ChevronDown,
  Briefcase,
  TrendingUp,
  Building2,
  Heart,
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
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-steel-700/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-steel-800/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left">
              {/* Badge/Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600/20 backdrop-blur-sm border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Building ventures across industries</span>
              </div>
              
              {/* Name - Large and bold */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                Dan Sikler
              </h1>
              
              {/* Description */}
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Trust & Safety leader, AI specialist, real estate investor, and entrepreneur. 
                Building ventures that create value across technology, property, and e-commerce.
              </p>
              
              {/* CTAs - Make About Me PROMINENT */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="/about" 
                  className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
                >
                  <User className="w-5 h-5" />
                  Learn More About Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/resume" 
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  View Resume
                </a>
              </div>
              
              {/* Quick stats */}
              <div className="flex items-center gap-6 mt-10 text-sm justify-center lg:justify-start flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-400">Available for opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-400">Wadsworth, OH</span>
                </div>
              </div>
            </div>
            
            {/* Right: Profile image with modern frame */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-steel-700 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                
                {/* Image container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-steel-800 rounded-3xl"></div>
                  <img 
                    src="/dan-sikler-photo.jpg" 
                    alt="Dan Sikler" 
                    className="relative w-full h-full object-cover rounded-3xl border-4 border-white/20 shadow-2xl"
                  />
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-white rounded-2xl shadow-xl flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-bold text-gray-900">Open to Connect</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Featured Section - Social Proof */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 font-semibold">Indeed • Glassdoor</span>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 font-semibold">Kent State University</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 font-semibold">Wadsworth, Ohio</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 font-semibold">10+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What I'm Building
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exploring ventures across multiple industries, each designed to solve real problems and create lasting value
            </p>
          </div>
          
          {/* Venture cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Resume & Skills - PRIMARY FOCUS */}
            <a href="/resume" className="group relative h-full flex">
              <div className="relative bg-white rounded-2xl border-2 border-gray-200 hover:border-steel-600 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col w-full">
                {/* Gradient accent bar */}
                <div className="h-2 bg-gradient-to-r from-steel-700 to-steel-600"></div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  {/* Icon with animation */}
                  <div className="w-16 h-16 bg-gradient-to-br from-steel-600 to-steel-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-steel-700 transition-colors">
                    Resume & Skills
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    Trust & Safety leader with expertise in AI training, prompt engineering, and operations at scale
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-steel-50 text-steel-700 rounded-full text-xs font-semibold">
                      AI/ML
                    </span>
                    <span className="px-3 py-1 bg-steel-50 text-steel-700 rounded-full text-xs font-semibold">
                      Operations
                    </span>
                    <span className="px-3 py-1 bg-steel-50 text-steel-700 rounded-full text-xs font-semibold">
                      Leadership
                    </span>
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-steel-700 font-semibold group-hover:gap-3 transition-all mt-auto">
                    <span>View Experience</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-steel-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </a>
            
            {/* Card 2: Elevate Finance (Ledger) */}
            <a href="/budget-app" className="group relative h-full flex">
              <div className="relative bg-white rounded-2xl border-2 border-gray-200 hover:border-emerald-600 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col w-full">
                <div className="h-2 bg-gradient-to-r from-emerald-700 to-emerald-600"></div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    Elevate Finance
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    Smart budgeting tool that makes tracking finances simple—helping you save more without feeling restricted
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">
                      React
                    </span>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">
                      FinTech
                    </span>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">
                      SaaS
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-emerald-700 font-semibold group-hover:gap-3 transition-all mt-auto">
                    <span>Try the App</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </a>
            
            {/* Card 3: Elevate Asset Management */}
            <a href="/elevate" className="group relative h-full flex">
              <div className="relative bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-500 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col w-full">
                <div className="h-2 bg-gradient-to-r from-amber-600 to-amber-400"></div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    Elevate Asset Management
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    Strategic real estate investment—property flips and rental portfolio building wealth through property
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold">
                      Real Estate
                    </span>
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold">
                      Investment
                    </span>
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold">
                      Rentals
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all mt-auto">
                    <span>View Portfolio</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </a>
            
            {/* Card 4: Yak Bones */}
            <a href="/yak-bones" className="group relative h-full flex">
              <div className="relative bg-white rounded-2xl border-2 border-gray-200 hover:border-green-500 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col w-full">
                <div className="h-2 bg-gradient-to-r from-green-600 to-green-400"></div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Coming Soon badge */}
                  <div className="absolute top-6 right-6 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold shadow-lg">
                    Coming Soon
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    Yak Bones
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    Premium, all-natural yak chews for dogs—healthier treats that last longer and make tails wag
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                      E-commerce
                    </span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                      Pet Products
                    </span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                      Natural
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all mt-auto">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Snapshot Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Competencies
            </h2>
            <p className="text-lg text-gray-600">
              Cross-functional expertise across technology, operations, and business
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Cpu className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">AI & ML</h3>
              <p className="text-sm text-gray-600">Prompt Engineering, LLMs</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-steel-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Code className="w-6 h-6 text-steel-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Development</h3>
              <p className="text-sm text-gray-600">React, SQL, JavaScript</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Operations</h3>
              <p className="text-sm text-gray-600">Team Leadership, QA</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Business</h3>
              <p className="text-sm text-gray-600">Finance, Investment, Strategy</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Open to opportunities in AI/ML, operations leadership, and venture collaboration. 
            Whether you're hiring, investing, or just want to connect—I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:sikler.dan@gmail.com" className="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a href="/Dan_Sikler_Resume.pdf" download="Dan_Sikler_Resume.pdf" className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-6 mt-12 pt-8 border-t border-white/20">
            <a href="https://linkedin.com/in/danielsikler" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/dansikler" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:sikler.dan@gmail.com" className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
