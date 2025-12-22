import { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, TrendingUp, Users, Target, Award, ArrowRight, Eye, Heart, Share2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function CaseStudiesPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedObjective, setSelectedObjective] = useState('All');

  const filters = ['All', 'F&B', 'Lifestyle', 'Tech', 'Beauty', 'Fashion', 'Wellness'];
  const objectives = ['All', 'Awareness', 'Sales', 'Launch', 'Engagement'];

  const caseStudies = [
    {
      id: 1,
      brand: 'Luxury Salon Chain',
      logo: '💇',
      industry: 'Beauty',
      objective: 'Launch',
      campaign: 'New Outlet Launch Campaign',
      description: 'Multi-city influencer campaign to launch 12 new salon locations',
      image: 'https://images.unsplash.com/photo-1758613653947-cfce6ae77b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGNhbXBhaWduJTIwcGhvdG9zaG9vdHxlbnwxfHx8fDE3NjUzNjI5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: {
        reach: '2.1M',
        engagement: '+150%',
        roas: '3X'
      }
    },
    {
      id: 2,
      brand: 'Premium Restaurant Group',
      logo: '🍽️',
      industry: 'F&B',
      objective: 'Awareness',
      campaign: 'New Menu Launch',
      description: 'Creator-led campaign featuring 25 food influencers across Dubai',
      image: 'https://images.unsplash.com/photo-1472393365320-db77a5abbecc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwaW5mbHVlbmNlcnxlbnwxfHx8fDE3NjUzNjMxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: {
        reach: '3.8M',
        engagement: '+220%',
        roas: '4.5X'
      }
    },
    {
      id: 3,
      brand: 'Fashion E-Commerce',
      logo: '👗',
      industry: 'Fashion',
      objective: 'Sales',
      campaign: 'Festival Collection Launch',
      description: 'Multi-platform campaign with nano and macro influencers',
      image: 'https://images.unsplash.com/photo-1462430638866-7ad892655344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYmxvZ2dlcnxlbnwxfHx8fDE3NjUzNjMxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: {
        reach: '5.2M',
        engagement: '+180%',
        roas: '5X'
      }
    },
    {
      id: 4,
      brand: 'Tech Startup',
      logo: '📱',
      industry: 'Tech',
      objective: 'Launch',
      campaign: 'App Launch Campaign',
      description: 'Influencer-driven app launch with tech reviewers and early adopters',
      image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGluZmx1ZW5jZXJ8ZW58MXx8fHwxNzY1MzMwNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: {
        reach: '1.5M',
        engagement: '+200%',
        roas: '6X'
      }
    },
    {
      id: 5,
      brand: 'Wellness Brand',
      logo: '🧘',
      industry: 'Wellness',
      objective: 'Engagement',
      campaign: 'Mindfulness Challenge',
      description: '30-day wellness challenge with fitness and lifestyle influencers',
      image: 'https://images.unsplash.com/photo-1624717369155-2b748ce8f0ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMGZpbG1pbmd8ZW58MXx8fHwxNzY1Mjg5NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: {
        reach: '2.8M',
        engagement: '+275%',
        roas: '4X'
      }
    },
    {
      id: 6,
      brand: 'Lifestyle Hotel',
      logo: '🏨',
      industry: 'Lifestyle',
      objective: 'Awareness',
      campaign: 'Staycation Series',
      description: 'Travel and lifestyle influencers showcasing hotel experiences',
      image: 'https://images.unsplash.com/photo-1600670942298-b10325b17dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBibG9nZ2VyfGVufDF8fHx8MTc2NTM2MzE5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: {
        reach: '4.2M',
        engagement: '+165%',
        roas: '3.5X'
      }
    }
  ];

  const filteredStudies = caseStudies.filter(study => {
    const industryMatch = selectedFilter === 'All' || study.industry === selectedFilter;
    const objectiveMatch = selectedObjective === 'All' || study.objective === selectedObjective;
    return industryMatch && objectiveMatch;
  });

  const featuredStudy = caseStudies[1]; // Premium Restaurant Group

  return (
    <div className="min-h-screen bg-black">
      {/* Hero with Campaign Image */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758613653947-cfce6ae77b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGNhbXBhaWduJTIwcGhvdG9zaG9vdHxlbnwxfHx8fDE3NjUzNjI5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Campaign"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-2 border border-[#d7bf69] rounded-full mb-6">
              <span className="text-[#d7bf69]">Case Studies</span>
            </div>
            <h1 className="mb-6">
              Real Campaigns.<br />
              <span className="text-[#d7bf69]">Real Results.</span>
            </h1>
            <p className="text-xl text-[#E0E0E0] leading-relaxed">
              Explore our portfolio of successful influencer marketing campaigns that drove measurable impact for brands across the UAE and GCC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="py-8 bg-[#0a0a0a] sticky top-[72px] z-40 border-b border-[#d7bf69]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <p className="text-sm text-[#E0E0E0] mb-2">Industry</p>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedFilter === filter
                        ? 'bg-[#d7bf69] text-black'
                        : 'border border-[#d7bf69]/30 text-[#E0E0E0] hover:border-[#d7bf69]'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-[#E0E0E0] mb-2">Objective</p>
              <div className="flex flex-wrap gap-2">
                {objectives.map((objective) => (
                  <button
                    key={objective}
                    onClick={() => setSelectedObjective(objective)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedObjective === objective
                        ? 'bg-[#d7bf69] text-black'
                        : 'border border-[#d7bf69]/30 text-[#E0E0E0] hover:border-[#d7bf69]'
                    }`}
                  >
                    {objective}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Cards Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group"
              >
                <div
                  className="rounded-2xl border border-[#d7bf69]/30 overflow-hidden hover-lift h-full flex flex-col"
                  style={{
                    background: 'rgba(18, 18, 18, 0.6)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={study.image}
                      alt={study.campaign}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm border border-[#d7bf69]/50 rounded-full">
                      <span className="text-xs text-[#d7bf69]">{study.industry}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] border border-[#d7bf69]/30 flex items-center justify-center text-2xl">
                        {study.logo}
                      </div>
                      <h4 className="text-sm">{study.brand}</h4>
                    </div>
                    <h3 className="mb-3">{study.campaign}</h3>
                    <p className="text-sm text-[#E0E0E0] mb-6 flex-grow">{study.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-[#d7bf69]/20">
                      <div>
                        <p className="text-[#d7bf69] mb-1">{study.metrics.reach}</p>
                        <p className="text-xs text-[#E0E0E0]">Reach</p>
                      </div>
                      <div>
                        <p className="text-[#d7bf69] mb-1">{study.metrics.engagement}</p>
                        <p className="text-xs text-[#E0E0E0]">Engagement</p>
                      </div>
                      <div>
                        <p className="text-[#d7bf69] mb-1">{study.metrics.roas}</p>
                        <p className="text-xs text-[#E0E0E0]">ROAS</p>
                      </div>
                    </div>
                    
                    <a href="#" className="text-[#d7bf69] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-[#d7bf69] opacity-40 mx-auto mb-4" />
              <p className="text-xl text-[#E0E0E0]">No case studies match your filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Case Study Highlight */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2>Featured <span className="text-[#d7bf69]">Case Study</span></h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#d7bf69] hover-lift">
                <ImageWithFallback
                  src={featuredStudy.image}
                  alt={featuredStudy.campaign}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-xl bg-[#1a1a1a] border border-[#d7bf69]/30 flex items-center justify-center text-3xl">
                  {featuredStudy.logo}
                </div>
                <div>
                  <h3>{featuredStudy.brand}</h3>
                  <p className="text-sm text-[#d7bf69]">{featuredStudy.industry}</p>
                </div>
              </div>
              
              <h2 className="mb-6">{featuredStudy.campaign}</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-[#d7bf69]" />
                    <h4>Objective</h4>
                  </div>
                  <p className="text-[#E0E0E0]">
                    Launch new seasonal menu with maximum visibility across Dubai's food scene
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-[#d7bf69]" />
                    <h4>Strategy</h4>
                  </div>
                  <p className="text-[#E0E0E0]">
                    Partnered with 25 food influencers across micro and macro tiers for authentic reviews and UGC content
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-[#d7bf69]" />
                    <h4>Results</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-[#1a1a1a] border border-[#d7bf69]/30">
                      <p className="text-[#d7bf69] mb-1">{featuredStudy.metrics.reach}</p>
                      <p className="text-xs text-[#E0E0E0]">Total Reach</p>
                    </div>
                    <div className="p-4 rounded-lg bg-[#1a1a1a] border border-[#d7bf69]/30">
                      <p className="text-[#d7bf69] mb-1">{featuredStudy.metrics.engagement}</p>
                      <p className="text-xs text-[#E0E0E0]">Footfall Increase</p>
                    </div>
                    <div className="p-4 rounded-lg bg-[#1a1a1a] border border-[#d7bf69]/30">
                      <p className="text-[#d7bf69] mb-1">{featuredStudy.metrics.roas}</p>
                      <p className="text-xs text-[#E0E0E0]">ROAS</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="bg-[#d7bf69] text-black px-8 py-4 rounded-lg gold-glow-hover inline-flex items-center gap-2">
                Read Full Story <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sample Detail Layout Preview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2>Inside a <span className="text-[#d7bf69]">Case Study</span></h2>
            <p className="text-xl text-[#E0E0E0] mt-4">
              Deep dive into campaign execution and results
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Campaign Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-4 gap-6"
            >
              {[
                { icon: Target, label: 'Industry', value: 'Food & Beverage' },
                { icon: Award, label: 'Objective', value: 'Menu Launch' },
                { icon: Users, label: 'Creators', value: '25 Influencers' },
                { icon: TrendingUp, label: 'Duration', value: '4 Weeks' }
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-[#d7bf69]/30 text-center"
                  style={{
                    background: 'rgba(18, 18, 18, 0.6)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <item.icon className="w-8 h-8 text-[#d7bf69] mx-auto mb-3" />
                  <p className="text-sm text-[#E0E0E0] mb-1">{item.label}</p>
                  <p className="text-white">{item.value}</p>
                </div>
              ))}
            </motion.div>

            {/* Content Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="mb-8 text-center">Campaign Content Highlights</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl overflow-hidden border border-[#d7bf69]/30 bg-gradient-to-br from-[#1a1a1a] to-black hover-lift group"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <Camera className="w-8 h-8 text-[#d7bf69] opacity-40 mb-2" />
                      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-1 text-xs text-[#E0E0E0]">
                          <Heart className="w-3 h-3" /> 12K
                        </div>
                        <div className="flex items-center gap-1 text-xs text-[#E0E0E0]">
                          <Eye className="w-3 h-3" /> 45K
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Strip of Brands */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-12"
          >
            <h3>Trusted by <span className="text-[#d7bf69]">Leading Brands</span></h3>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="aspect-square rounded-lg border border-[#d7bf69]/30 bg-[#1a1a1a] flex items-center justify-center hover:border-[#d7bf69] hover:bg-[#d7bf69]/5 transition-all hover-lift"
              >
                <Award className="w-8 h-8 text-[#d7bf69] opacity-40" />
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
              Want Results Like <span className="text-[#d7bf69]">These?</span>
            </h2>
            <p className="text-xl text-[#E0E0E0] mb-10 max-w-2xl mx-auto leading-relaxed">
              Let OneHub create a data-driven influencer marketing campaign that delivers measurable impact for your brand.
            </p>
            <button className="bg-[#d7bf69] text-black px-10 py-4 rounded-lg gold-glow-hover">
              Start a Campaign with OneHub
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
