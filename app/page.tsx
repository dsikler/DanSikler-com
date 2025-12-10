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
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section - Darker & Bolder */}
      <section className="relative bg-tan overflow-hidden">
        
        {/* Subtle accent elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="space-y-8">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-tan-dark rounded-full text-charcoal text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span>Building ventures across industries</span>
              </div>
              
              {/* Name */}
    <div>
                <h1 className="text-6xl md:text-7xl font-bold text-charcoal tracking-tight leading-none">
                  Dan Sikler
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-lg text-charcoal leading-relaxed max-w-xl">
                Trust & Safety leader, AI specialist, real estate investor, and entrepreneur. 
                Building ventures that create value across technology, property, and e-commerce.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="/about" 
                  className="group px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <User className="w-5 h-5" />
                  Learn More About Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/resume" 
                  className="px-8 py-4 bg-transparent border-2 border-slate-600 hover:border-primary text-charcoal rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  View Resume
                </a>
              </div>
              
              {/* Info */}
              <div className="flex items-center gap-6 text-sm text-slate-600 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
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
                {/* Blue glow */}
                <div className="absolute -inset-8 bg-primary/20 rounded-3xl blur-2xl"></div>
                
                {/* Image */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <img 
                    src="/dan-sikler-home.JPG" 
                    alt="Dan Sikler" 
                    className="w-full h-full object-cover rounded-2xl border-4 border-white shadow-2xl"
                  />
                  {/* Badge */}
                  <div className="absolute -bottom-4 -right-4 px-5 py-3 bg-primary rounded-xl shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="font-bold text-white">Open to Connect</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-slate-600 animate-bounce" />
        </div>
        
      </section>

      {/* Company Bar - Darker */}
      <section className="py-8 bg-charcoal border-y border-charcoal/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 text-tan-light">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="font-medium">Indeed • Glassdoor</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span className="font-medium">Program and Operations Management</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="font-medium">Kent State University</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span className="font-medium">10+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section - Rich Cards on Dark */}
      <section className="py-24 bg-gradient-to-b from-charcoal to-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold text-tan">
              What I'm Building
            </h2>
            <p className="text-xl text-tan-light max-w-3xl mx-auto leading-relaxed">
              Exploring ventures across multiple industries—each designed to solve real problems and create lasting value
            </p>
          </div>
          
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1: Resume */}
            <a href="/resume" className="group h-full flex">
              <div className="bg-slate-800 border border-slate-700/30 hover:border-primary rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col w-full">
                
                {/* Blue accent */}
                <div className="h-1 bg-gradient-to-r from-primary to-accent"></div>
                
                <div className="p-8 space-y-6 flex flex-col flex-1">
                  
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold text-tan group-hover:text-primary transition-colors">
                      Resume & Skills
                    </h3>
                    <p className="text-tan-light leading-relaxed">
                      Scaling Trust & Safety operations through expert AI training, prompt engineering, and vendor strategy.
                    </p>
                  </div>
                  
                  {/* Link */}
                  <div className="flex items-center gap-2 text-primary font-semibold pt-2 group-hover:gap-3 transition-all mt-auto">
                    <span>View Experience</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                </div>
              </div>
            </a>
            
            {/* Card 2: Elevate Finance */}
            <a href="https://elevate-ledger.netlify.app/" target="_blank" rel="noopener noreferrer" className="group h-full flex">
              <div className="bg-slate-800 border border-slate-700/30 hover:border-primary rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col w-full">
                <div className="h-1 bg-gradient-to-r from-primary to-accent"></div>
                <div className="p-8 space-y-6 flex flex-col flex-1">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold text-tan group-hover:text-primary transition-colors">
                      Elevate Finance
                    </h3>
                    <p className="text-tan-light leading-relaxed">
                      A smart budgeting tool designed to simplify tracking and build wealth without restricting your lifestyle.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold pt-2 group-hover:gap-3 transition-all mt-auto">
                    <span>Try the App</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
            
            {/* Card 3: Elevate Asset Management */}
            <a href="https://elevate-asset-management.netlify.app/" target="_blank" rel="noopener noreferrer" className="group h-full flex">
              <div className="bg-slate-800 border border-slate-700/30 hover:border-primary rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col w-full">
                <div className="h-1 bg-gradient-to-r from-primary to-accent"></div>
                <div className="p-8 space-y-6 flex flex-col flex-1">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Building2 className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold text-tan group-hover:text-primary transition-colors">
                      Elevate Asset Management
                    </h3>
                    <p className="text-tan-light leading-relaxed">
                      Strategic real estate investment focused on flipping, modernizing, and managing properties for long-term growth.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold pt-2 group-hover:gap-3 transition-all mt-auto">
                    <span>View Portfolio</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
            
            {/* Card 4: Yak Brothers */}
            <a href="https://yak-brothers.netlify.app/" target="_blank" rel="noopener noreferrer" className="group relative h-full flex">
              <div className="bg-slate-800 border border-slate-700/30 hover:border-primary rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col w-full">
                <div className="h-1 bg-gradient-to-r from-primary to-accent"></div>
                <div className="p-8 space-y-6 flex flex-col flex-1">
                  {/* Website in Progress badge */}
                  <div className="absolute top-6 right-6 px-3 py-1 bg-primary text-white rounded-full text-xs font-bold shadow-md">
                    Website in Progress
                  </div>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold text-tan group-hover:text-primary transition-colors">
                      Yak Brothers
                    </h3>
                    <p className="text-tan-light leading-relaxed">
                      Premium and all-natural yak chews providing a healthier, longer-lasting treat for happier dogs.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold pt-2 group-hover:gap-3 transition-all mt-auto">
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
      <section className="py-24 bg-tan">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-charcoal">
              Core Competencies
            </h2>
            <p className="text-lg text-charcoal">
              Cross-functional expertise across technology, operations, and business
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="bg-white border border-tan-dark rounded-xl p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-charcoal mb-2">AI Strategy & Model Training</h3>
              <p className="text-sm text-slate-600">Optimizing LLMs through advanced prompt engineering, golden dataset curation, and rigorous SQL-based performance auditing.</p>
            </div>
            
            <div className="bg-white border border-tan-dark rounded-xl p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-charcoal mb-2">Trust & Safety Operations</h3>
              <p className="text-sm text-slate-600">Safeguarding platforms via global content moderation, high-stakes escalation management, and strategic policy enforcement.</p>
            </div>
            
            <div className="bg-white border border-tan-dark rounded-xl p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-charcoal mb-2">Global Program Management</h3>
              <p className="text-sm text-slate-600">Scaling operational efficiency through vendor leadership, cross-functional migrations, and standardized QA frameworks.</p>
            </div>
            
            <div className="bg-white border border-tan-dark rounded-xl p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-charcoal mb-2">Data Analytics & Strategic Investment</h3>
              <p className="text-sm text-slate-600">Leveraging SQL-driven insights and financial expertise to automate workflows, reduce manual overhead, and maximize asset performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Keep Similar But Refined Font */}
      <section className="py-24 bg-gradient-to-br from-charcoal via-charcoal to-slate-900 text-white relative overflow-hidden">
        
        {/* Subtle glow */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-10">
          
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-tan">
              Let's Build Something Together
            </h2>
            <p className="text-xl text-tan-light leading-relaxed">
              Open to opportunities in AI, ML, program management, operations leadership, and venture collaboration. 
              Whether you are hiring, investing, or just want to connect, I would love to hear from you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:sikler.dan@gmail.com" className="px-10 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-xl">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a href="/Dan_Sikler_Resume.pdf" download="Dan_Sikler_Resume.pdf" className="px-10 py-4 bg-transparent border-2 border-slate-600 hover:border-primary text-tan rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
          
          {/* Social */}
          <div className="flex items-center justify-center gap-4 pt-8 border-t border-slate-700/30">
            <a href="https://linkedin.com/in/danielsikler" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 hover:bg-primary border border-slate-700/30 hover:border-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <Linkedin className="w-5 h-5 text-primary group-hover:text-white" />
            </a>
            <a href="https://github.com/dansikler" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 hover:bg-primary border border-slate-700/30 hover:border-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <Github className="w-5 h-5 text-primary group-hover:text-white" />
            </a>
            <a href="mailto:sikler.dan@gmail.com" className="w-12 h-12 bg-slate-800 hover:bg-primary border border-slate-700/30 hover:border-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <Mail className="w-5 h-5 text-primary group-hover:text-white" />
            </a>
          </div>
          
        </div>
      </section>
    </div>
  );
}
