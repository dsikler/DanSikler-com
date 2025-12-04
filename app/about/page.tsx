import { TrendingUp, Dumbbell, Heart, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Text */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Hey, I'm Dan</h1>
            <h2 className="text-xl text-slate-300 mb-6">
              Trust & Safety Program Leader | AI Enthusiast | Real Estate Investor
            </h2>
            <p className="text-lg text-white leading-relaxed">
              Based in St. Augustine, Florida, I'm a Trust & Safety operations program leader at Indeed, where I train AI models and optimize content moderation systems. Beyond my day job, I'm an entrepreneur building ventures across technology, real estate, and e-commerce, always looking for ways to create value and solve real problems.
            </p>
          </div>

          {/* Right Column - Photo */}
          <div>
            <img
              src="/IMG_4757.jpeg"
              alt="Dan Sikler standing on a rocky outcrop overlooking a stunning blue lake surrounded by mountains"
              className="rounded-lg shadow-xl w-[70%] object-cover aspect-[4/5]"
            />
          </div>
        </section>

        {/* Section 1: Professional Background */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-12 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">What I Do Professionally</h2>
          <div className="space-y-4 text-base text-white leading-relaxed">
            <p>
              I lead Trust & Safety operations for one of the world's largest job platforms, specializing in AI model training, prompt engineering, and content moderation at scale. My work involves training GPT models, designing golden datasets, and building SQL-based frameworks that balance automation with human oversight.
            </p>
            <p>
              With a background in Finance from Kent State University and 6+ years in operations, I've managed global BPO teams, driven complex technical migrations, and implemented data-driven solutions that improve accuracy and efficiency. I'm passionate about leveraging AI to make systems smarter, safer, and more effective.
            </p>
          </div>
        </section>

        {/* Section 2: The Productivity Obsession */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Tracking Everything</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Text */}
            <div className="space-y-4 text-base text-white leading-relaxed">
              <p>
                I'm a productivity geek who lives by the phrase 'What gets measured gets managed.' I track weekly tasks, daily habits, every penny I spend, calories consumed, and weights lifted. If there's a metric, I'm probably measuring it in a spreadsheet.
              </p>
              <p>
                Improving and being great at everything I do is a genuine passion. I'm always optimizing, always iterating, always looking for that 1% improvement. Love a good productivity audiobook? I've got recommendations for days.
              </p>
            </div>

            {/* Right Column - Callout Box */}
            <div className="bg-teal-900/30 border-l-4 border-teal-500 p-6 rounded-lg">
              <TrendingUp className="w-8 h-8 text-teal-400 mb-3" />
              <p className="text-xl font-semibold text-white mb-2">
                "What gets measured gets managed"
              </p>
              <p className="text-sm text-slate-300 italic">
                A Dan Sikler mantra
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: AI & The Future */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why AI Matters</h2>
          <div className="space-y-4 text-base text-white leading-relaxed mb-12">
            <p>
              I'm a big believer that AI is the future, and those who become experts in it will be best positioned for success. Like any powerful technology, it can be used to grow and become more efficient, or it can be used wastefully or even nefariously.
            </p>
            <p>
              My current passion is learning AI technologies and exploring how they can make the world a better place. From prompt engineering to LLM optimization, I'm hands-on with the tools that are reshaping how we work, build, and solve problems.
            </p>
          </div>
        </section>

        {/* Section 4: The Investor Mindset */}
        <section className="bg-amber-900/20 rounded-xl p-8 mb-12 border border-amber-700/50">
          <h2 className="text-3xl font-bold text-white mb-6">Building Wealth & Sweat Equity</h2>
          <div className="space-y-4 text-base text-white leading-relaxed">
            <p>
              I maintain an investor mindset across multiple asset classes: equities, crypto, commodities, and real estate. But real estate is where I get to roll up my sleeves and build sweat equity.
            </p>
            <p>
              Learning the trades growing up from my father, I like to get my hands dirty improving distressed properties and turning them into happy family rentals. There's something deeply satisfying about transforming a neglected house into someone's home.
            </p>
            <p className="text-lg font-semibold text-amber-300 mt-4">
              That's why I founded Elevate Asset Management LLC - to formalize my real estate investment approach and continue growing a portfolio of rental properties.
            </p>
          </div>
        </section>

        {/* Section 5: Family & Dogs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Family First</h2>
          <div className="space-y-4 text-base text-white leading-relaxed mb-6">
            <p>
              I'm engaged to marry my best friend, and together we've built a small family with our two dogs. We love taking them on adventures, spoiling them in every way possible, and hopefully expanding our family in the future.
            </p>
            <p>
              Our dogs aren't just pets, they're family members who get the best care, the longest walks, and definitely the premium treats (which is exactly why I'm launching Yak Brothers, by the way).
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              { src: '/family_first_photos/aaa.jpg', alt: 'Family photo' },
              { src: '/family_first_photos/bbbbb.jpeg', alt: 'Family photo' },
              { src: '/family_first_photos/cccc.heif', alt: 'Family photo' },
              { src: '/family_first_photos/IMG_2897.jpeg', alt: 'Family photo' },
              { src: '/family_first_photos/IMG_6010.jpeg', alt: 'Family photo' },
              { src: '/family_first_photos/zzzzz.jpeg', alt: 'Family photo' },
            ].map((photo, index) => (
              <img
                key={index}
                src={photo.src}
                alt={photo.alt}
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 w-full h-full object-cover aspect-square"
              />
            ))}
          </div>
        </section>

        {/* Section 6: Life & Health */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Living Well</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Column 1 - Fitness */}
            <div>
              <Dumbbell className="w-10 h-10 text-teal-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Fitness</h3>
              <p className="text-base text-white leading-relaxed">
                I've hit the gym 4 times a week for over a decade. Dedicated to the craft of strength, health, and longevity.
              </p>
            </div>

            {/* Column 2 - Wellness */}
            <div>
              <Heart className="w-10 h-10 text-teal-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Wellness</h3>
              <p className="text-base text-white leading-relaxed">
                Meal prep, sauna sessions, meditation, and breathwork keep me grounded and focused.
              </p>
            </div>

            {/* Column 3 - Consistency */}
            <div>
              <Calendar className="w-10 h-10 text-teal-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Consistency</h3>
              <p className="text-base text-white leading-relaxed">
                Health isn't a sprint, it's a decade-long commitment to showing up every single day.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Travel & Adventure */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Travel & Remote Life</h2>
          <div className="bg-blue-900/20 rounded-xl p-8 mb-8 border border-blue-700/50">
            <div className="space-y-4 text-base text-white leading-relaxed">
              <p>
                One of my proudest accomplishments was buying an old RV, renovating it, and living in it while working remotely across the western United States. I've lived in multiple states, always taking full advantage of the remote lifestyle.
              </p>
              <p>
                Recently, I've focused on traveling outside the U.S. In 2025, I visited three new countries: Aruba, Portugal, and Spain. There's something magical about experiencing new cultures, trying new foods, and seeing the world from different perspectives.
              </p>
            </div>
          </div>

          {/* Travel Photos Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Some Favorite Travel Moments</h3>
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
                  className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 w-full h-full object-cover aspect-square"
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl mb-8">
            Interested in collaborating, chatting about AI, talking real estate, or just want to share productivity tips? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:sikler.dan@gmail.com"
              className="bg-white text-blue-900 px-8 py-4 rounded-md font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Get In Touch
            </Link>
            <Link
              href="/resume"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
            >
              View Resume
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
