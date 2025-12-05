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
    <div className="min-h-screen bg-[#FFF5E6]">
      {/* Hero Section - Warm & Organic */}
      <section className="relative bg-gradient-to-br from-[#FFF5E6] via-[#FAF8F5] to-[#F0EBE3] overflow-hidden">
        {/* Subtle organic background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC425]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E8B84D]/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="space-y-8">
              
              {/* Subtle tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-[#D4C4B0] rounded-full text-[#8B7355] text-sm font-medium">
                <span className="w-2 h-2 bg-[#FFC425] rounded-full"></span>
                <span>Building ventures across industries</span>
              </div>
              
              {/* Name - warm and inviting */}
              <div>
                <h1 className="text-6xl md:text-7xl font-bold text-[#4A3C2C] mb-4 tracking-tight">
                  Dan Sikler
                </h1>
                <p className="text-2xl text-[#8B7355] font-normal">
                  From Code → Capital → Commerce
                </p>
              </div>
              
              {/* Description - comfortable reading */}
              <p className="text-lg text-[#8B7355] leading-relaxed max-w-xl">
                Trust & Safety leader, AI specialist, real estate investor, and entrepreneur. 
                Building ventures that create value across technology, property, and e-commerce.
              </p>
              
              {/* CTAs - muted and elegant */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/about" 
                  className="group px-8 py-4 bg-[#FFC425] hover:bg-[#E8B84D] text-[#2F241F] rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                  <User className="w-5 h-5" />
                  Learn More About Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/resume" 
                  className="px-8 py-4 bg-white hover:bg-[#FAF8F5] border-2 border-[#D4C4B0] text-[#4A3C2C] rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  View Resume
                </a>
              </div>
              
              {/* Subtle info */}
              <div className="flex items-center gap-6 text-sm text-[#A0917B] pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FFC425] rounded-full"></div>
                  <span>Open to opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Wadsworth, OH</span>
                </div>
              </div>
              
            </div>
            
            {/* Right: Photo - organic framing */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Soft glow instead of harsh gradient */}
                <div className="absolute -inset-8 bg-gradient-to-br from-[#FFC425]/20 to-[#E8B84D]/20 rounded-[2rem] blur-2xl"></div>
                
                {/* Image with soft border */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <img 
                    src="/dan-sikler-photo.jpg" 
                    alt="Dan Sikler" 
                    className="w-full h-full object-cover rounded-2xl border-4 border-white/80 shadow-lg"
                  />
                  {/* Subtle badge */}
                  <div className="absolute -bottom-4 -right-4 px-5 py-3 bg-white/90 backdrop-blur-sm border border-[#D4C4B0] rounded-xl shadow-md">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#FFC425] rounded-full"></div>
                      <span className="font-semibold text-[#4A3C2C]">Open to Connect</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Soft scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-[#A0917B] animate-bounce" />
        </div>
        
      </section>

      {/* Company Bar - Softer */}
      <section className="py-8 bg-white border-y border-[#F0EBE3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 text-[#A0917B]">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span className="font-medium">Indeed • Glassdoor</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span className="font-medium">Kent State University</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span className="font-medium">10+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section - Warm Cards */}
      <section className="py-24 bg-gradient-to-b from-[#FAF8F5] to-[#FFF5E6]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4A3C2C]">
              What I'm Building
            </h2>
            <p className="text-xl text-[#8B7355] max-w-3xl mx-auto leading-relaxed">
              Exploring ventures across multiple industries—each designed to solve real problems and create lasting value
            </p>
          </div>
          
          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1: Resume - Warm design */}
            <a href="/resume" className="group">
              <div className="bg-white border-2 border-[#F0EBE3] hover:border-[#FFC425] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                
                {/* Accent bar - gold */}
                <div className="h-1.5 bg-gradient-to-r from-[#FFC425] to-[#E8B84D]"></div>
                
                <div className="p-8 space-y-6">
                  
                  {/* Icon - warm colors */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FFC425]/20 to-[#E8B84D]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-7 h-7 text-[#FFC425]" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-[#4A3C2C] group-hover:text-[#FFC425] transition-colors">
                      Resume & Skills
                    </h3>
                    <p className="text-[#8B7355] leading-relaxed">
                      Unlock peak performance: AI-powered trust & safety mastery in prompt engineering, vendor orchestration, and global-scale ops.
                    </p>
                  </div>
                  
                  {/* Link */}
                  <div className="flex items-center gap-2 text-[#FFC425] font-semibold pt-2 group-hover:gap-3 transition-all">
                    <span>View Experience</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                </div>
              </div>
            </a>
            
            {/* Card 2: Elevate Finance */}
            <a href="/budget-app" className="group">
              <div className="bg-white border-2 border-[#F0EBE3] hover:border-[#FFC425] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="h-1.5 bg-gradient-to-r from-[#FFC425] to-[#E8B84D]"></div>
                <div className="p-8 space-y-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FFC425]/20 to-[#E8B84D]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-7 h-7 text-[#FFC425]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-[#4A3C2C] group-hover:text-[#FFC425] transition-colors">
                      Elevate Finance
                    </h3>
                    <p className="text-[#8B7355] leading-relaxed">
                      Master your money: Intuitive budgeting app that expands horizons, slashes restrictions, and accelerates wealth-building wins.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[#FFC425] font-semibold pt-2 group-hover:gap-3 transition-all">
                    <span>Try the App</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
            
            {/* Card 3: Elevate Asset Management */}
            <a href="/elevate" className="group relative">
              <div className="bg-white border-2 border-[#F0EBE3] hover:border-[#FFC425] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="h-1.5 bg-gradient-to-r from-[#FFC425] to-[#E8B84D]"></div>
                <div className="p-8 space-y-6">
                  {/* Coming Soon badge */}
                  <div className="absolute top-6 right-6 px-3 py-1 bg-[#FFC425] text-[#2F241F] rounded-full text-xs font-bold shadow-md">
                    Coming Soon
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FFC425]/20 to-[#E8B84D]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-7 h-7 text-[#FFC425]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-[#4A3C2C] group-hover:text-[#FFC425] transition-colors">
                      Elevate Asset Management
                    </h3>
                    <p className="text-[#8B7355] leading-relaxed">
                      Dominate real estate: LLC powerhouse flipping, upgrading, renting, and scaling properties for unstoppable portfolio growth.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[#FFC425] font-semibold pt-2 group-hover:gap-3 transition-all">
                    <span>View Portfolio</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
            
            {/* Card 4: Yak Brothers */}
            <a href="/yak-bones" className="group relative">
              <div className="bg-white border-2 border-[#F0EBE3] hover:border-[#FFC425] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="h-1.5 bg-gradient-to-r from-[#FFC425] to-[#E8B84D]"></div>
                <div className="p-8 space-y-6">
                  {/* Website in Progress badge */}
                  <div className="absolute top-6 right-6 px-3 py-1 bg-[#FFC425] text-[#2F241F] rounded-full text-xs font-bold shadow-md">
                    Website in Progress
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FFC425]/20 to-[#E8B84D]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-7 h-7 text-[#FFC425]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-[#4A3C2C] group-hover:text-[#FFC425] transition-colors">
                      Yak Brothers
                    </h3>
                    <p className="text-[#8B7355] leading-relaxed">
                      Delight dogs daily: Ultra-premium, natural yak chews delivering epic endurance, nutrition, and non-stop tail-thrashing fun.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[#FFC425] font-semibold pt-2 group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
            
          </div>
        </div>
      </section>

      {/* Skills Section - Muted */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-[#4A3C2C]">
              Core Competencies
            </h2>
            <p className="text-lg text-[#8B7355]">
              Cross-functional expertise across technology, operations, and business
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white border border-[#F0EBE3] rounded-xl p-6 text-center hover:border-[#FFC425] transition-colors">
              <div className="w-12 h-12 bg-[#FFF5E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-6 h-6 text-[#FFC425]" />
              </div>
              <h3 className="font-bold text-[#4A3C2C] mb-2">AI & ML</h3>
              <p className="text-sm text-[#8B7355]">Prompt Engineering, LLMs</p>
            </div>
            
            <div className="bg-white border border-[#F0EBE3] rounded-xl p-6 text-center hover:border-[#FFC425] transition-colors">
              <div className="w-12 h-12 bg-[#FFF5E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-[#FFC425]" />
              </div>
              <h3 className="font-bold text-[#4A3C2C] mb-2">Development</h3>
              <p className="text-sm text-[#8B7355]">React, SQL, JavaScript</p>
            </div>
            
            <div className="bg-white border border-[#F0EBE3] rounded-xl p-6 text-center hover:border-[#FFC425] transition-colors">
              <div className="w-12 h-12 bg-[#FFF5E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[#FFC425]" />
              </div>
              <h3 className="font-bold text-[#4A3C2C] mb-2">Operations</h3>
              <p className="text-sm text-[#8B7355]">Team Leadership, QA</p>
            </div>
            
            <div className="bg-white border border-[#F0EBE3] rounded-xl p-6 text-center hover:border-[#FFC425] transition-colors">
              <div className="w-12 h-12 bg-[#FFF5E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-[#FFC425]" />
              </div>
              <h3 className="font-bold text-[#4A3C2C] mb-2">Business</h3>
              <p className="text-sm text-[#8B7355]">Finance, Investment, Strategy</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Warm & Inviting */}
      <section className="py-24 bg-gradient-to-br from-[#4A3C2C] to-[#2F241F] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Build Something Together
            </h2>
            <p className="text-xl text-[#D4C4B0] leading-relaxed">
              Open to opportunities in AI/ML, operations leadership, and venture collaboration. 
              Whether you're hiring, investing, or just want to connect—I'd love to hear from you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:sikler.dan@gmail.com" className="px-10 py-4 bg-[#FFC425] hover:bg-[#E8B84D] text-[#2F241F] rounded-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a href="/Dan_Sikler_Resume.pdf" download="Dan_Sikler_Resume.pdf" className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-4 pt-8 border-t border-white/20">
            <a href="https://linkedin.com/in/danielsikler" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/dansikler" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:sikler.dan@gmail.com" className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
