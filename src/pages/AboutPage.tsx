import { motion } from 'motion/react';
import { Award, Target, Users, Sparkles, TrendingUp, Shield, Check } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function AboutPage() {
  const navigateToPage = (page: string) => {
    if (typeof window !== 'undefined' && (window as any).navigateToPage) {
      (window as any).navigateToPage(page);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 dark-gradient" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block bg-[#d7bf69]/10 border border-[#d7bf69] rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6"
              >
                <span className="text-[#d7bf69] text-sm sm:text-base">About TheOneHub.in</span>
              </motion.div>
              
              <h1 className="mb-4 sm:mb-6">
                Where Creativity<br />Meets Strategy
              </h1>
              <p className="text-[#E0E0E0] text-lg md:text-xl mb-6 sm:mb-8 max-w-xl">
                One Hub started in Dubai, and now we're proudly established in India! Our journey began with a clear vision: to bridge the gap between ambitious brands and the perfect creators who can tell their stories.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigateToPage('registration')}
                  className="bg-[#d7bf69] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg gold-glow-hover cursor-pointer"
                >
                  Book a Strategy Call
                </button>
                <button 
                  onClick={() => navigateToPage('contact')}
                  className="border-2 border-[#d7bf69] text-[#d7bf69] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#d7bf69] hover:text-black transition-all cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>

            {/* Right: Image with Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#d7bf69]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1603201667106-0e3e0ae584c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2NTM2Mjk5NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="OneHub Team"
                  className="w-full aspect-[4/3] object-cover"
                />
                
                {/* Floating Stat Badges */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
                  <div className="bg-black/80 backdrop-blur-xl border border-[#d7bf69] rounded-xl px-4 sm:px-6 py-3 sm:py-4">
                    <div className="text-[#d7bf69] mb-1 text-xl sm:text-2xl">5K+</div>
                    <p className="text-xs sm:text-sm text-white">Creators</p>
                  </div>
                </div>
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20">
                  <div className="bg-black/80 backdrop-blur-xl border border-[#d7bf69] rounded-xl px-4 sm:px-6 py-3 sm:py-4">
                    <div className="text-[#d7bf69] mb-1 text-xl sm:text-2xl">300+</div>
                    <p className="text-xs sm:text-sm text-white">Campaigns</p>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 inset-0 bg-[#d7bf69] blur-[80px] opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="mb-12"
          >
            <h2 className="relative inline-block">
              Our Story
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-[#d7bf69]" />
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-[#E0E0E0] mb-6 leading-relaxed">
                One Hub started in Dubai, and now we're proudly established in India! Our journey began with a clear vision: to bridge the gap between ambitious brands and the perfect creators who can tell their stories.
              </p>
              <p className="text-lg text-[#E0E0E0] mb-6 leading-relaxed">
                We connect brands with the right creators — micro, macro, and mega influencers — across every niche imaginable. From beauty and fashion to tech, food, lifestyle, and beyond, we have the perfect match for your brand.
              </p>
              <p className="text-lg text-[#E0E0E0] mb-6 leading-relaxed">
                Our mission is simple yet powerful: create meaningful, high-quality content that actually works. We don't believe in vanity metrics or superficial engagement. Instead, we focus on authentic partnerships that drive real results.
              </p>
              <p className="text-lg text-[#E0E0E0] leading-relaxed">
                Whatever your industry, whatever your goals, we'll match you with the perfect creator to make your brand shine. That's the OneHub promise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#d7bf69] hover-lift">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1OTUzMjA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="OneHub Office"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-[#d7bf69] blur-[60px] opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Mission',
                description: 'To revolutionize influencer marketing in the MENA region by creating seamless, performance-driven connections between brands and creators, powered by data and driven by authenticity.'
              },
              {
                icon: Award,
                title: 'Vision',
                description: 'To be the most trusted and innovative influencer marketing platform across the Middle East, setting new standards for transparency, performance, and creator-brand relationships.'
              },
              {
                icon: Sparkles,
                title: 'Values',
                description: 'Transparency in every partnership. Creator-first approach. Data-driven decision making. Long-term relationship building. Unwavering commitment to delivering measurable results.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group"
              >
                <div
                  className="p-8 rounded-2xl border border-[#d7bf69]/30 hover-lift h-full"
                  style={{
                    background: 'rgba(18, 18, 18, 0.6)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#d7bf69]/10 flex items-center justify-center mb-6 gold-glow">
                    <item.icon className="w-8 h-8 text-[#d7bf69]" />
                  </div>
                  <h3 className="mb-4">{item.title}</h3>
                  <p className="text-[#E0E0E0] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OneHub - Differentiators */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2>Why Brands & Creators <span className="text-[#d7bf69]">Choose Us</span></h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6 mb-8">
                {[
                  'End-to-end campaign management from strategy to reporting',
                  'Curated network of verified, high-quality creators',
                  'Real-time analytics dashboards and performance tracking',
                  'Deep local expertise with reach across UAE & GCC',
                  'Transparent pricing with clear, measurable ROI',
                  'Dedicated account managers and creator support teams'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#d7bf69] flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-lg text-[#E0E0E0]">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: 'Verified Network', description: 'Authenticated creators only' },
                  { icon: TrendingUp, title: 'Performance Tracking', description: 'Real-time insights' },
                  { icon: Users, title: 'Expert Support', description: 'Dedicated team guidance' },
                  { icon: Award, title: 'Proven Results', description: '300+ successful campaigns' }
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-[#d7bf69]/30"
                    style={{
                      background: 'rgba(18, 18, 18, 0.6)',
                      backdropFilter: 'blur(20px)'
                    }}
                  >
                    <feature.icon className="w-8 h-8 text-[#d7bf69] mb-3" />
                    <h4 className="text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-[#E0E0E0]">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#d7bf69] hover-lift">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBsYXB0b3B8ZW58MXx8fHwxNzY1MzYyOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Analytics Dashboard"
                  className="w-full aspect-video object-cover"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-[#d7bf69] blur-[60px] opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Creator & Brand Strip */}
<section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
  
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="mb-8">Brands We've Worked With</h3>
             
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4 mb-12">

                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35].map((i) => (
                  <div
                    key={i}
                    className="aspect-\[3\/4\] rounded-lg border border-[#d7bf69]/30 bg-[#ffffff] flex items-center justify-center hover:border-[#d7bf69] hover:bg-[#ffffff]/5 transition-all hover-lift"
                  >
                    <ImageWithFallback
                  src={`./logos/brand-${i}.png`}
                  alt={`brand-${i}`}
                  className="w-full aspect-video object-cover"
                />
                  </div>
                ))}
              </div>
                         </motion.div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d7bf69] to-transparent mt-12" />
        </div>
      </section>


      {/* Timeline / Milestones */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2>Our <span className="text-[#d7bf69]">Journey</span></h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-[#d7bf69]/30 hidden md:block" />

            <div className="space-y-16">
              {[
                { year: '2019', title: 'OneHub Founded', description: 'Launched in Dubai with a vision to transform influencer marketing in the Middle East' },
                { year: '2020', title: 'First 100 Creators', description: 'Built a curated network of authentic voices across beauty, fashion, and lifestyle' },
                { year: '2021', title: '1M+ Campaign Reach', description: 'Achieved first million-reach campaign milestone with major F&B brand' },
                { year: '2022', title: 'GCC Expansion', description: 'Extended services across Saudi Arabia, Qatar, and UAE with 50+ brand partnerships' },
                { year: '2023', title: 'Tech Platform Launch', description: 'Introduced real-time analytics platform and automated campaign management tools' },
                { year: '2025', title: 'Industry Leader', description: 'Recognized as the leading influencer marketing platform in UAE with 5K+ creators' }
              ].map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="inline-block px-4 py-1 bg-[#d7bf69] text-black rounded-full mb-3">
                      {milestone.year}
                    </div>
                    <h4 className="mb-2">{milestone.title}</h4>
                    <p className="text-[#E0E0E0]">{milestone.description}</p>
                  </div>

                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-[#d7bf69] gold-glow" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Images Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2>Behind the <span className="text-[#d7bf69]">Scenes</span></h2>
            <p className="text-xl text-[#E0E0E0] mt-4">
              A glimpse into OneHub's creative culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Content Shoots', 
                subtitle: 'Crafting visual stories that convert',
                image: 'https://images.unsplash.com/photo-1624717369155-2b748ce8f0ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMGZpbG1pbmd8ZW58MXx8fHwxNzY1Mjg5NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              { 
                title: 'Strategy Sessions', 
                subtitle: 'Planning winning campaigns',
                image: 'https://images.unsplash.com/photo-1687862528147-0ecb1aa4b81d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBzdHJhdGVneSUyMHBsYW5uaW5nfGVufDF8fHx8MTc2NTM2Mjk5Nnww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              { 
                title: 'Creator Events', 
                subtitle: 'Building community connections',
                image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGluZmx1ZW5jZXJ8ZW58MXx8fHwxNzY1MzMwNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#d7bf69]/30 hover-lift">
                  <div className="relative w-full h-full">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <h4 className="text-[#d7bf69] mb-2">{item.title}</h4>
                      <p className="text-sm text-center text-white">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 dark-gradient" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-[#d7bf69] rounded-full blur-[180px] opacity-20" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="mb-6">
              Ready to Build Something <span className="text-[#d7bf69]">Big Together?</span>
            </h2>
            <p className="text-xl text-[#E0E0E0] mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're a brand looking to amplify your reach or a creator ready to work with premium brands, let's start a conversation that leads to results.
            </p>
            <button 
              onClick={() => navigateToPage('contact')}
              className="bg-[#d7bf69] text-black px-10 py-4 rounded-lg gold-glow-hover cursor-pointer"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
