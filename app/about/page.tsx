import { TrendingUp, Dumbbell, Heart, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <div className="bg-blue-dark min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h1 className="font-heading text-4xl font-bold text-white mb-4">Hey, I'm Dan</h1>
            <h2 className="font-heading text-xl text-brand-tan-dark mb-6">
              Trust & Safety Program Leader | Technical Project Manager | Builder
            </h2>
            <p className="text-lg text-tan leading-relaxed">
              I lead Trust & Safety operations at Indeed-Glassdoor, where I train AI models, manage cross-functional projects, and optimize content moderation systems at scale. Based in Wadsworth, Ohio, I spend my free time building things that solve problems I actually have. Like Elevate Ledger, a budgeting tool I created when existing finance apps didn't cut it. I also invest in real estate and tinker with new business ideas. If there's a more efficient way to do something, I'm probably already thinking about it.
            </p>
          </div>

          <div>
            <img
              src="/dan-sikler-about-me.jpeg"
              alt="Dan Sikler standing on a rocky outcrop overlooking a stunning blue lake surrounded by mountains"
              className="rounded-lg shadow-xl w-[70%] object-cover aspect-[4/5]"
            />
          </div>
        </section>

        {/* Section 1: Professional Background */}
        <section className="bg-blue/50 rounded-xl p-8 mb-12 border border-orange/20">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">What I Do Professionally</h2>
          <div className="space-y-4 text-base text-tan leading-relaxed">
            <p>
              I lead Trust & Safety operations at Indeed-Glassdoor, where I own the product roadmap for moderation systems and coordinate engineering teams through sprint planning and Agile delivery. My work spans AI model training (achieving 92.7% accuracy), prompt engineering, UAT leadership, and cross-functional program management across Legal, Product, and Engineering organizations.
            </p>
            <p>
              With 7+ years in Trust & Safety operations and a Finance degree from Kent State, I've led complex technical migrations, managed global BPO teams across 5 countries, and implemented regulatory compliance programs (DSA). I build SQL-based frameworks that balance AI automation with human oversight, making content moderation smarter, safer, and more scalable.
            </p>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="bg-blue/50 rounded-xl p-8 mb-12 border border-orange/20">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">Skills &amp; Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-gold mb-3">AI &amp; Machine Learning</h3>
              <ul className="space-y-2 text-base text-tan leading-relaxed">
                <li>- GenAI Prompt Engineering &amp; LLM Optimization</li>
                <li>- AI Model Training &amp; Golden Dataset Curation</li>
                <li>- GPT Model Fine-Tuning &amp; Performance Analysis</li>
                <li>- AI Output Auditing &amp; Model Drift Detection</li>
                <li>- Bias Detection &amp; Quality Threshold Calibration</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-gold mb-3">Project &amp; Program Management</h3>
              <ul className="space-y-2 text-base text-tan leading-relaxed">
                <li>- Agile/Scrum Methodologies (Sprint Planning, Backlog Grooming, Retrospectives)</li>
                <li>- User Acceptance Testing (UAT) Leadership</li>
                <li>- JIRA Backlog Management &amp; Defect Triage</li>
                <li>- Cross-Functional Stakeholder Coordination</li>
                <li>- Risk Management &amp; Mitigation Strategies</li>
                <li>- Change Management &amp; Process Redesign</li>
                <li>- Regulatory Compliance Program Management (DSA)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-gold mb-3">Data &amp; Analytics</h3>
              <ul className="space-y-2 text-base text-tan leading-relaxed">
                <li>- SQL (Advanced Querying, Performance Dashboards, Data Validation)</li>
                <li>- Tableau Analytics &amp; Data Visualization</li>
                <li>- Root Cause Analysis &amp; A/B Testing</li>
                <li>- KPI Tracking &amp; Performance Metrics</li>
                <li>- Database Management &amp; Troubleshooting</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-gold mb-3">Trust &amp; Safety Operations</h3>
              <ul className="space-y-2 text-base text-tan leading-relaxed">
                <li>- Content Moderation Strategy &amp; Policy Enforcement</li>
                <li>- QA Framework Design &amp; Calibration</li>
                <li>- Escalation Management &amp; Resolution</li>
                <li>- Vendor &amp; BPO Operations (60+ Offshore Moderators, 5 Countries)</li>
                <li>- Compliance &amp; Audit Management</li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-heading text-xl font-semibold text-gold mb-3">Technical Platforms</h3>
              <ul className="space-y-2 text-base text-tan leading-relaxed">
                <li>
                  <span className="font-semibold text-white">Project Management:</span> Jira, Microsoft Project
                </li>
                <li>
                  <span className="font-semibold text-white">Data:</span> Superset, Tableau, SQL (PostgreSQL, MySQL)
                </li>
                <li>
                  <span className="font-semibold text-white">Moderation &amp; Training:</span> Retool, Lessonly, Guru
                </li>
                <li>
                  <span className="font-semibold text-white">CRM/Business:</span> Salesforce, NetSuite
                </li>
                <li>
                  <span className="font-semibold text-white">Development:</span> JavaScript, Cursor, Git
                </li>
                <li>
                  <span className="font-semibold text-white">Collaboration:</span> Slack, Teams, Zoom, Google Workspace
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-gold mb-3">Product &amp; Strategy</h3>
              <ul className="space-y-2 text-base text-tan leading-relaxed">
                <li>- Product Roadmap Ownership</li>
                <li>- Requirements Definition &amp; Acceptance Criteria Development</li>
                <li>- Engineering Partnership &amp; Coordination</li>
                <li>- Sprint Planning &amp; Backlog Refinement</li>
                <li>- Stakeholder Alignment Across Legal, Product, Engineering</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-gold mb-3">Business &amp; Operations</h3>
              <ul className="space-y-2 text-base text-tan leading-relaxed">
                <li>- Operational Excellence &amp; Process Optimization</li>
                <li>- Budgeting &amp; Cost Management</li>
                <li>- Supply Chain &amp; Inventory Management</li>
                <li>- Workforce Management &amp; Resource Allocation</li>
                <li>- Property Management &amp; Real Estate Investment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: The Productivity Obsession */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">Tracking Everything</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4 text-base text-tan leading-relaxed">
              <p>
                I'm a productivity geek who lives by the phrase 'What gets measured gets managed.' I track weekly tasks, daily habits, every penny I spend, calories consumed, and weights lifted. If there's a metric, I'm probably measuring it in a spreadsheet.
              </p>
              <p>
                Improving and being great at everything I do is a genuine passion. I'm always optimizing, always iterating, always looking for that 1% improvement. Love a good productivity audiobook? I've got recommendations for days.
              </p>
            </div>

            <div className="bg-orange/15 border-l-4 border-orange p-6 rounded-lg">
              <TrendingUp className="w-8 h-8 text-orange mb-3" />
              <p className="font-heading text-xl font-semibold text-white mb-2">
                "What gets measured gets managed"
              </p>
              <p className="text-sm text-brand-tan-dark italic">
                A Dan Sikler mantra
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: AI & The Future */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">Why AI Matters</h2>
          <div className="space-y-4 text-base text-tan leading-relaxed mb-12">
            <p>
              I'm a big believer that AI is the future, and those who become experts in it will be best positioned for success. Like any powerful technology, it can be used to grow and become more efficient, or it can be used wastefully or even nefariously.
            </p>
            <p>
              My current passion is learning AI technologies and exploring how they can make the world a better place. From prompt engineering to LLM optimization, I'm hands-on with the tools that are reshaping how we work, build, and solve problems.
            </p>
          </div>
        </section>

        {/* Section 4: The Investor Mindset */}
        <section className="bg-orange/15 rounded-xl p-8 mb-12 border border-orange/30">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">Building Wealth & Sweat Equity</h2>
          <div className="space-y-4 text-base text-tan leading-relaxed">
            <p>
              I maintain an investor mindset across multiple asset classes: equities, crypto, commodities, and real estate. But real estate is where I get to roll up my sleeves and build sweat equity.
            </p>
            <p>
              Learning the trades growing up from my father, I like to get my hands dirty improving distressed properties and turning them into happy family rentals. There's something deeply satisfying about transforming a neglected house into someone's home.
            </p>
            <p className="text-lg font-semibold text-gold mt-4">
              That's why I founded Elevate Asset Management LLC - to formalize my real estate investment approach and continue growing a portfolio of rental properties.
            </p>
          </div>
        </section>

        {/* Section 5: Family & Dogs */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">Family First</h2>
          <div className="space-y-4 text-base text-tan leading-relaxed mb-6">
            <p>
              I'm engaged to marry my best friend, and together we've built a small family with our two dogs. We love taking them on adventures, spoiling them in every way possible, and hopefully expanding our family in the future.
            </p>
            <p>
              Our dogs aren't just pets, they're family members who get the best care, the longest walks, and definitely the premium treats.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              { src: '/family_first_photos/aaa.jpg', alt: 'Family photo' },
              { src: '/family_first_photos/bbbbb.jpeg', alt: 'Family photo' },
              { src: '/family_first_photos/IMG_2280.jpeg', alt: 'Family photo' },
              { src: '/family_first_photos/IMG_6010.jpeg', alt: 'Family photo' },
              { src: '/family_first_photos/louie.jpeg', alt: 'Family photo' },
              { src: '/family_first_photos/zzzzz.jpeg', alt: 'Family photo' },
            ].map((photo, index) => (
              <img
                key={index}
                src={photo.src}
                alt={photo.alt}
                className="rounded-lg shadow-md hover:shadow-xl hover:shadow-orange/10 transition-all duration-300 w-full h-full object-cover aspect-square"
              />
            ))}
          </div>
        </section>

        {/* Section 6: Life & Health */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">Living Well</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <Dumbbell className="w-10 h-10 text-orange mb-3" />
              <h3 className="font-heading text-xl font-semibold text-white mb-2">Fitness</h3>
              <p className="text-base text-tan leading-relaxed">
                I've hit the gym 4 times a week for over a decade. Dedicated to the craft of strength, health, and longevity.
              </p>
            </div>

            <div>
              <Heart className="w-10 h-10 text-orange mb-3" />
              <h3 className="font-heading text-xl font-semibold text-white mb-2">Wellness</h3>
              <p className="text-base text-tan leading-relaxed">
                Meal prep, sauna sessions, meditation, and breathwork keep me grounded and focused.
              </p>
            </div>

            <div>
              <Calendar className="w-10 h-10 text-orange mb-3" />
              <h3 className="font-heading text-xl font-semibold text-white mb-2">Consistency</h3>
              <p className="text-base text-tan leading-relaxed">
                Health isn't a sprint, it's a decade-long commitment to showing up every single day.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Travel & Adventure */}
        <section className="mb-8">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">Travel & Remote Life</h2>
          <div className="bg-blue/50 rounded-xl p-8 mb-8 border border-gold/30">
            <div className="space-y-4 text-base text-tan leading-relaxed">
              <p>
                One of my proudest accomplishments was buying an old RV, renovating it, and living in it while working remotely across the western United States. I've lived in multiple states, always taking full advantage of the remote lifestyle.
              </p>
              <p>
                Recently, I've focused on traveling outside the U.S. In 2025, I visited three new countries: Aruba, Portugal, and Spain. There's something magical about experiencing new cultures, trying new foods, and seeing the world from different perspectives.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-heading text-2xl font-semibold text-white mb-6">Some Favorite Travel Moments</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: '/travel_photos/addvsfg.jpeg', alt: 'Travel moment' },
                { src: '/travel_photos/bb.jpeg', alt: 'Travel moment' },
                { src: '/travel_photos/FullSizeRender.jpeg', alt: 'Travel moment' },
                { src: '/travel_photos/IMG_0952.jpeg', alt: 'Travel moment' },
                { src: '/travel_photos/IMG_4693.jpeg', alt: 'Travel moment' },
                { src: '/travel_photos/IMG_4990.jpeg', alt: 'Travel moment' },
                { src: '/travel_photos/IMG_5288.jpeg', alt: 'Travel moment' },
                { src: '/travel_photos/IMG_5716.jpeg', alt: 'Travel moment' },
                { src: '/travel_photos/IMG_5945.jpeg', alt: 'Travel moment' },
                { src: '/travel_photos/IMG_6767.jpeg', alt: 'Travel moment' },
                { src: '/travel_photos/IMG_6780.jpeg', alt: 'Travel moment' },
                { src: '/travel_photos/sdfsdf.jpeg', alt: 'Travel moment' },
              ].map((photo, index) => (
                <img
                  key={index}
                  src={photo.src}
                  alt={photo.alt}
                  className="rounded-lg shadow-md hover:shadow-xl hover:shadow-orange/10 transition-all duration-300 w-full h-full object-cover aspect-square"
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-orange to-gold text-white rounded-xl p-12 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl mb-8 text-white/90">
            Interested in collaborating, chatting about AI, talking real estate, or just want to share productivity tips? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:sikler.dan@gmail.com"
              className="min-w-[260px] bg-blue hover:bg-blue-dark text-white px-8 py-4 rounded-lg font-heading font-semibold transition-colors duration-200 text-center"
            >
              Get In Touch
            </Link>
            <Link
              href="/resume"
              className="min-w-[260px] border-2 border-white text-white px-8 py-4 rounded-lg font-heading font-semibold hover:bg-blue hover:border-blue transition-colors duration-200 text-center"
            >
              View Resume
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
