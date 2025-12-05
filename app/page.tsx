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
    <div className="min-h-screen bg-[#2F241F]">
      {/* Hero Section - Darker & Bolder */}
      <section className="relative bg-gradient-to-br from-[#2F241F] via-[#3D3229] to-[#1A1D2E] text-white overflow-hidden">
        
        {/* Subtle accent elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFC425] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4A849] rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="space-y-8">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A3C2C] border border-[#6B5D52]/30 rounded-full text-[#FFC425] text-sm font-medium">
                <span className="w-2 h-2 bg-[#FFC425] rounded-full animate-pulse"></span>
                <span>Building ventures across industries</span>
              </div>
              
              {/* Name */}
              <div>
                <h1 className="text-6xl md:text-7xl font-bold text-[#FFC425] tracking-tight leading-none">
                  Dan Sikler
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-lg text-[#E8DFD3] leading-relaxed max-w-xl">
                Trust & Safety leader, AI specialist, real estate investor, and entrepreneur. 
                Building ventures that create value across technology, property, and e-commerce.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="/about" 
                  className="group px-8 py-4 bg-[#FFC425] hover:bg-[#D4A849] text-[#2F241F] rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <User className="w-5 h-5" />
                  Learn More About Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/resume" 
                  className="px-8 py-4 bg-transparent border-2 border-[#6B5D52] hover:border-[#FFC425] text-[#F5F1E8] rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  View Resume
                </a>
              </div>
              
              {/* Info */}
              <div className="flex items-center gap-6 text-sm text-[#E8DFD3] pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FFC425] rounded-full animate-pulse"></div>
                  <span>Available for opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Wadsworth, OH</span>
                </div>
              </div>
              
            </div>
            
            {/* Right: Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Gold glow */}
                <div className="absolute -inset-8 bg-[#FFC425]/20 rounded-3xl blur-2xl"></div>
                
                {/* Image */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <img 
                    src="/dan-sikler-photo.jpg" 
                    alt="Dan Sikler" 
                    className="w-full h-full object-cover rounded-2xl border-4 border-[#4A3C2C] shadow-2xl"
                  />
                  {/* Badge */}
                  <div className="absolute -bottom-4 -right-4 px-5 py-3 bg-[#FFC425] rounded-xl shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#2F241F] rounded-full"></div>
                      <span className="font-bold text-[#2F241F]">Open to Connect</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-[#6B5D52] animate-bounce" />
        </div>
        
      </section>

      {/* Company Bar - Darker */}
      <section className="py-8 bg-[#3D3229] border-y border-[#4A3C2C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 text-[#E8DFD3]">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#FFC425]" />
              <span className="font-medium">Indeed • Glassdoor</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#FFC425]" />
              <span className="font-medium">Kent State University</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FFC425]" />
              <span className="font-medium">10+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section - Rich Cards on Dark */}
      <section className="py-24 bg-gradient-to-b from-[#3D3229] to-[#2F241F]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold text-[#F5F1E8]">
              What I'm Building
            </h2>
            <p className="text-xl text-[#E8DFD3] max-w-3xl mx-auto leading-relaxed">
              Exploring ventures across multiple industries—each designed to solve real problems and create lasting value
            </p>
          </div>
          
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1: Resume */}
            <a href="/resume" className="group h-full flex">
              <div className="bg-[#4A3C2C] border border-[#6B5D52]/30 hover:border-[#FFC425] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFC425]/10 flex flex-col w-full">
                
                {/* Gold accent */}
                <div className="h-1 bg-gradient-to-r from-[#FFC425] to-[#D4A849]"></div>
                
                <div className="p-8 space-y-6 flex flex-col flex-1">
                  
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#FFC425]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FFC425]/20 transition-colors">
                    <Briefcase className="w-7 h-7 text-[#FFC425]" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold text-[#F5F1E8] group-hover:text-[#FFC425] transition-colors">
                      Resume & Skills
                    </h3>
                    <p className="text-[#E8DFD3] leading-relaxed">
                      Unlock peak performance: AI-powered trust & safety mastery in prompt engineering, vendor orchestration, and global-scale ops.
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#2F241F] border border-[#6B5D52]/20 text-[#FFC425] rounded-full text-xs font-medium">
                      AI/ML
                    </span>
                    <span className="px-3 py-1 bg-[#2F241F] border border-[#6B5D52]/20 text-[#FFC425] rounded-full text-xs font-medium">
                      Operations
                    </span>
                    <span className="px-3 py-1 bg-[#2F241F] border border-[#6B5D52]/20 text-[#FFC425] rounded-full text-xs font-medium">
                      Leadership
                    </span>
                  </div>
                  
                  {/* Link */}
                  <div className="flex items-center gap-2 text-[#FFC425] font-semibold pt-2 group-hover:gap-3 transition-all mt-auto">
                    <span>View Experience</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                </div>
              </div>
            </a>
            
            {/* Card 2: Elevate Finance */}
            <a href="/budget-app" className="group h-full flex">
              <div className="bg-[#4A3C2C] border border-[#6B5D52]/30 hover:border-[#FFC425] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFC425]/10 flex flex-col w-full">
                <div className="h-1 bg-gradient-to-r from-[#FFC425] to-[#D4A849]"></div>
                <div className="p-8 space-y-6 flex flex-col flex-1">
                  <div className="w-14 h-14 bg-[#FFC425]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FFC425]/20 transition-colors">
                    <TrendingUp className="w-7 h-7 text-[#FFC425]" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold text-[#F5F1E8] group-hover:text-[#FFC425] transition-colors">
                      Elevate Finance
                    </h3>
                    <p className="text-[#E8DFD3] leading-relaxed">
                      Master your money: Intuitive budgeting app that expands horizons, slashes restrictions, and accelerates wealth-building wins.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#2F241F] border border-[#6B5D52]/20 text-[#FFC425] rounded-full text-xs font-medium">
                      React
                    </span>
                    <span className="px-3 py-1 bg-[#2F241F] border border-[#6B5D52]/20 text-[#FFC425] rounded-full text-xs font-medium">
                      FinTech
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#FFC425] font-semibold pt-2 group-hover:gap-3 transition-all mt-auto">
                    <span>Try the App</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
            
            {/* Card 3: Elevate Asset Management */}
            <a href="/elevate" className="group relative h-full flex">
              <div className="bg-[#4A3C2C] border border-[#6B5D52]/30 hover:border-[#FFC425] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFC425]/10 flex flex-col w-full">
                <div className="h-1 bg-gradient-to-r from-[#FFC425] to-[#D4A849]"></div>
                <div className="p-8 space-y-6 flex flex-col flex-1">
                  {/* Coming Soon badge */}
                  <div className="absolute top-6 right-6 px-3 py-1 bg-[#FFC425] text-[#2F241F] rounded-full text-xs font-bold shadow-md">
                    Coming Soon
                  </div>
                  <div className="w-14 h-14 bg-[#FFC425]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FFC425]/20 transition-colors">
                    <Building2 className="w-7 h-7 text-[#FFC425]" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold text-[#F5F1E8] group-hover:text-[#FFC425] transition-colors">
                      Elevate Asset Management
                    </h3>
                    <p className="text-[#E8DFD3] leading-relaxed">
                      Dominate real estate: LLC powerhouse flipping, upgrading, renting, and scaling properties for unstoppable portfolio growth.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#2F241F] border border-[#6B5D52]/20 text-[#FFC425] rounded-full text-xs font-medium">
                      Real Estate
                    </span>
                    <span className="px-3 py-1 bg-[#2F241F] border border-[#6B5D52]/20 text-[#FFC425] rounded-full text-xs font-medium">
                      Investment
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#FFC425] font-semibold pt-2 group-hover:gap-3 transition-all mt-auto">
                    <span>View Portfolio</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
            
            {/* Card 4: Yak Brothers */}
            <a href="/yak-bones" className="group relative h-full flex">
              <div className="bg-[#4A3C2C] border border-[#6B5D52]/30 hover:border-[#FFC425] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFC425]/10 flex flex-col w-full">
                <div className="h-1 bg-gradient-to-r from-[#FFC425] to-[#D4A849]"></div>
                <div className="p-8 space-y-6 flex flex-col flex-1">
                  {/* Website in Progress badge */}
                  <div className="absolute top-6 right-6 px-3 py-1 bg-[#FFC425] text-[#2F241F] rounded-full text-xs font-bold shadow-md">
                    Website in Progress
                  </div>
                  <div className="w-14 h-14 bg-[#FFC425]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FFC425]/20 transition-colors">
                    <Heart className="w-7 h-7 text-[#FFC425]" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold text-[#F5F1E8] group-hover:text-[#FFC425] transition-colors">
                      Yak Brothers
                    </h3>
                    <p className="text-[#E8DFD3] leading-relaxed">
                      Delight dogs daily: Ultra-premium, natural yak chews delivering epic endurance, nutrition, and non-stop tail-thrashing fun.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#2F241F] border border-[#6B5D52]/20 text-[#FFC425] rounded-full text-xs font-medium">
                      E-commerce
                    </span>
                    <span className="px-3 py-1 bg-[#2F241F] border border-[#6B5D52]/20 text-[#FFC425] rounded-full text-xs font-medium">
                      Pet Products
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#FFC425] font-semibold pt-2 group-hover:gap-3 transition-all mt-auto">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
            
          </div>
        </div>
      </section>

      {/* Skills Section - Lighter Contrast */}
      <section className="py-24 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-[#2F241F]">
              Core Competencies
            </h2>
            <p className="text-lg text-[#4A3C2C]">
              Cross-functional expertise across technology, operations, and business
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="bg-white border border-[#E8DFD3] rounded-xl p-6 text-center hover:border-[#FFC425] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#FFC425]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-6 h-6 text-[#FFC425]" />
              </div>
              <h3 className="font-bold text-[#2F241F] mb-2">AI & ML</h3>
              <p className="text-sm text-[#6B5D52]">Prompt Engineering, LLMs</p>
            </div>
            
            <div className="bg-white border border-[#E8DFD3] rounded-xl p-6 text-center hover:border-[#FFC425] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#FFC425]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-[#FFC425]" />
              </div>
              <h3 className="font-bold text-[#2F241F] mb-2">Development</h3>
              <p className="text-sm text-[#6B5D52]">React, SQL, JavaScript</p>
            </div>
            
            <div className="bg-white border border-[#E8DFD3] rounded-xl p-6 text-center hover:border-[#FFC425] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#FFC425]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[#FFC425]" />
              </div>
              <h3 className="font-bold text-[#2F241F] mb-2">Operations</h3>
              <p className="text-sm text-[#6B5D52]">Team Leadership, QA</p>
            </div>
            
            <div className="bg-white border border-[#E8DFD3] rounded-xl p-6 text-center hover:border-[#FFC425] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#FFC425]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-[#FFC425]" />
              </div>
              <h3 className="font-bold text-[#2F241F] mb-2">Business</h3>
              <p className="text-sm text-[#6B5D52]">Finance, Investment, Strategy</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Keep Similar But Refined Font */}
      <section className="py-24 bg-gradient-to-br from-[#2F241F] via-[#3D3229] to-[#1A1D2E] text-white relative overflow-hidden">
        
        {/* Subtle glow */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC425] rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-10">
          
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-[#F5F1E8]">
              Let's Build Something Together
            </h2>
            <p className="text-xl text-[#E8DFD3] leading-relaxed">
              Open to opportunities in AI/ML, operations leadership, and venture collaboration. 
              Whether you're hiring, investing, or just want to connect—I'd love to hear from you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:sikler.dan@gmail.com" className="px-10 py-4 bg-[#FFC425] hover:bg-[#D4A849] text-[#2F241F] rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-xl">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a href="/Dan_Sikler_Resume.pdf" download="Dan_Sikler_Resume.pdf" className="px-10 py-4 bg-transparent border-2 border-[#6B5D52] hover:border-[#FFC425] text-[#F5F1E8] rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
          
          {/* Social */}
          <div className="flex items-center justify-center gap-4 pt-8 border-t border-[#6B5D52]/30">
            <a href="https://linkedin.com/in/danielsikler" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#4A3C2C] hover:bg-[#FFC425] border border-[#6B5D52]/30 hover:border-[#FFC425] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <Linkedin className="w-5 h-5 text-[#FFC425] group-hover:text-[#2F241F]" />
            </a>
            <a href="https://github.com/dansikler" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#4A3C2C] hover:bg-[#FFC425] border border-[#6B5D52]/30 hover:border-[#FFC425] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <Github className="w-5 h-5 text-[#FFC425] group-hover:text-[#2F241F]" />
            </a>
            <a href="mailto:sikler.dan@gmail.com" className="w-12 h-12 bg-[#4A3C2C] hover:bg-[#FFC425] border border-[#6B5D52]/30 hover:border-[#FFC425] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <Mail className="w-5 h-5 text-[#FFC425] group-hover:text-[#2F241F]" />
            </a>
          </div>
          
        </div>
      </section>
    </div>
  );
}
