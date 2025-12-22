import { useState } from 'react';
import { motion } from 'motion/react';
import { DollarSign, Shield, HeadphonesIcon, Clock, Instagram, Youtube, TrendingUp, User, Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function InfluencersPage() {
  const [formData, setFormData] = useState({
    name: '',
    handle: '',
    email: '',
    phone: '',
    category: '',
    country: '',
    followers: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Get Paid Brand Deals',
      description: 'Access premium brand partnerships with competitive rates and transparent payment terms.'
    },
    {
      icon: Shield,
      title: 'Access Top UAE & GCC Brands',
      description: 'Work with leading brands across fashion, beauty, F&B, tech, lifestyle, and more.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Dedicated Campaign Support',
      description: 'Get personalized support from our creator relations team for every campaign.'
    },
    {
      icon: Clock,
      title: 'On-time Payments',
      description: 'Guaranteed payment within 30 days of campaign completion. No delays, no hassles.'
    }
  ];

  const categories = [
    {
      name: 'Fashion & Beauty',
      image: 'https://images.unsplash.com/photo-1462430638866-7ad892655344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYmxvZ2dlcnxlbnwxfHx8fDE3NjUzNjMxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Style, makeup, skincare & beauty content'
    },
    {
      name: 'Food & Restaurants',
      image: 'https://images.unsplash.com/photo-1472393365320-db77a5abbecc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwaW5mbHVlbmNlcnxlbnwxfHx8fDE3NjUzNjMxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Culinary experiences & restaurant reviews'
    },
    {
      name: 'Travel & Lifestyle',
      image: 'https://images.unsplash.com/photo-1600670942298-b10325b17dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBibG9nZ2VyfGVufDF8fHx8MTc2NTM2MzE5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Travel destinations & lifestyle content'
    },
    {
      name: 'Tech & Gaming',
      image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGluZmx1ZW5jZXJ8ZW58MXx8fHwxNzY1MzMwNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Technology reviews & gaming content'
    },
    {
      name: 'Moms & Families',
      image: 'https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGluZmx1ZW5jZXJzJTIwY3JlYXRvcnN8ZW58MXx8fHwxNzY1MzYzMTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Parenting, family life & kids content'
    },
    {
      name: 'Fitness & Wellness',
      image: 'https://images.unsplash.com/photo-1624717369155-2b748ce8f0ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMGZpbG1pbmd8ZW58MXx8fHwxNzY1Mjg5NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Fitness routines, nutrition & health'
    }
  ];

  const showcaseCreators = [
    { name: '@sarah_dubai', category: 'Fashion', followers: '125K', engagement: '4.2%' },
    { name: '@foodie_uae', category: 'Food', followers: '89K', engagement: '5.1%' },
    { name: '@travel_gems', category: 'Travel', followers: '156K', engagement: '3.8%' },
    { name: '@tech_reviews', category: 'Tech', followers: '72K', engagement: '4.5%' },
    { name: '@beauty_vault', category: 'Beauty', followers: '198K', engagement: '4.8%' },
    { name: '@fitness_guru', category: 'Fitness', followers: '134K', engagement: '5.3%' },
    { name: '@mom_life_uae', category: 'Family', followers: '91K', engagement: '6.2%' },
    { name: '@lifestyle_diaries', category: 'Lifestyle', followers: '167K', engagement: '4.1%' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Apply',
      description: 'Submit your application with your social handles and niche'
    },
    {
      step: '02',
      title: 'Get Approved',
      description: 'Our team reviews and verifies your profile within 48-72 hours'
    },
    {
      step: '03',
      title: 'Receive Briefs',
      description: 'Get matched with relevant brand campaigns in your category'
    },
    {
      step: '04',
      title: 'Create & Get Paid',
      description: 'Execute campaigns, deliver content, and receive guaranteed payment'
    }
  ];

  const testimonials = [
    {
      quote: 'OneHub connected me with amazing brands that truly align with my values. The payment is always on time and the support is incredible!',
      name: '@lifestyle_maya',
      platform: 'Instagram',
      followers: '145K'
    },
    {
      quote: 'Best decision I made as a creator. Professional team, great brands, and transparent communication throughout every campaign.',
      name: '@foodie_sam',
      platform: 'TikTok',
      followers: '89K'
    },
    {
      quote: 'Working with OneHub has elevated my content and opened doors to collaborations I never thought possible. Highly recommend!',
      name: '@tech_layla',
      platform: 'YouTube',
      followers: '67K'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero with Big Image */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGluZmx1ZW5jZXJzJTIwY3JlYXRvcnN8ZW58MXx8fHwxNzY1MzYzMTk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Content Creators"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-2 border border-[#d7bf69] rounded-full mb-6">
              <span className="text-[#d7bf69]">For Influencers & Creators</span>
            </div>
            <h1 className="mb-6">
              Join the OneHub<br />
              <span className="text-[#d7bf69]">Creator Network</span>
            </h1>
            <p className="text-xl text-[#E0E0E0] mb-8 leading-relaxed">
              Connect with premium brands across UAE and GCC. Get paid for authentic collaborations, UGC content, and long-term partnerships that grow your influence and income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#d7bf69] text-black px-8 py-4 rounded-lg gold-glow-hover">
                Apply as an Influencer
              </button>
              <button className="border-2 border-[#d7bf69] text-[#d7bf69] px-8 py-4 rounded-lg hover:bg-[#d7bf69] hover:text-black transition-all">
                Learn How It Works
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join OneHub */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2>Why Join <span className="text-[#d7bf69]">OneHub</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div
                  className="p-8 rounded-2xl border border-[#d7bf69]/30 hover-lift h-full"
                  style={{
                    background: 'rgba(18, 18, 18, 0.6)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <div className="w-14 h-14 rounded-xl bg-[#d7bf69]/10 flex items-center justify-center mb-6 gold-glow">
                    <benefit.icon className="w-7 h-7 text-[#d7bf69]" />
                  </div>
                  <h4 className="mb-3">{benefit.title}</h4>
                  <p className="text-[#E0E0E0] text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Influencer Categories */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2>Creator <span className="text-[#d7bf69]">Categories</span></h2>
            <p className="text-xl text-[#E0E0E0] mt-4">
              We work with creators across all niches and platforms
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-[#d7bf69]/30 hover-lift"
              >
                <div className="aspect-[4/3] relative">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white mb-2">{category.name}</h4>
                    <p className="text-sm text-[#E0E0E0]">{category.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Influencer Showcase Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2>Creators in Our <span className="text-[#d7bf69]">Network</span></h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {showcaseCreators.map((creator, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group"
              >
                <div
                  className="p-6 rounded-2xl border border-[#d7bf69]/30 hover:border-[#d7bf69] transition-all hover-lift text-center"
                  style={{
                    background: 'rgba(18, 18, 18, 0.6)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-[#d7bf69]/50 flex items-center justify-center mb-4">
                    <User className="w-8 h-8 text-[#d7bf69] opacity-60" />
                  </div>
                  <h4 className="text-sm mb-1">{creator.name}</h4>
                  <div className="inline-block px-3 py-1 bg-[#d7bf69]/10 rounded-full mb-3">
                    <span className="text-xs text-[#d7bf69]">{creator.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-[#E0E0E0] text-xs mb-1">Followers</p>
                      <p className="text-white">{creator.followers}</p>
                    </div>
                    <div>
                      <p className="text-[#E0E0E0] text-xs mb-1">Engagement</p>
                      <p className="text-[#d7bf69]">{creator.engagement}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-12"
          >
            <h2>Apply to Join <span className="text-[#d7bf69]">OneHub</span></h2>
            <p className="text-xl text-[#E0E0E0] mt-4">
              Start your journey with premium brand collaborations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="p-8 md:p-10 rounded-2xl border border-[#d7bf69]/30"
              style={{
                background: 'rgba(18, 18, 18, 0.6)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-[#E0E0E0]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="handle" className="block text-sm mb-2 text-[#E0E0E0]">
                      Instagram / TikTok / YouTube Handle *
                    </label>
                    <input
                      type="text"
                      id="handle"
                      name="handle"
                      value={formData.handle}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                      placeholder="@yourhandle"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-[#E0E0E0]">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2 text-[#E0E0E0]">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="category" className="block text-sm mb-2 text-[#E0E0E0]">
                      Main Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                    >
                      <option value="">Select a category</option>
                      <option value="fashion">Fashion & Beauty</option>
                      <option value="food">Food & Restaurants</option>
                      <option value="travel">Travel & Lifestyle</option>
                      <option value="tech">Tech & Gaming</option>
                      <option value="family">Moms & Families</option>
                      <option value="fitness">Fitness & Wellness</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm mb-2 text-[#E0E0E0]">
                      Country / City *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                      placeholder="Dubai, UAE"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="followers" className="block text-sm mb-2 text-[#E0E0E0]">
                    Follower Range *
                  </label>
                  <select
                    id="followers"
                    name="followers"
                    value={formData.followers}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                  >
                    <option value="">Select a range</option>
                    <option value="5k-25k">5K - 25K</option>
                    <option value="25k-50k">25K - 50K</option>
                    <option value="50k-100k">50K - 100K</option>
                    <option value="100k-500k">100K - 500K</option>
                    <option value="500k+">500K+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-[#E0E0E0]">
                    Message / Links
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your content and include links to your best work..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#d7bf69] text-black px-8 py-4 rounded-lg gold-glow-hover"
                >
                  Submit Application
                </button>

                <p className="text-sm text-[#E0E0E0] text-center">
                  We'll review your application and get back to you within 48-72 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2>How It Works for <span className="text-[#d7bf69]">Influencers</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full border-2 border-[#d7bf69] flex items-center justify-center mb-6">
                  <span className="text-[#d7bf69]">{step.step}</span>
                </div>
                <h4 className="mb-3">{step.title}</h4>
                <p className="text-[#E0E0E0] text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Influencer Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2>What Creators <span className="text-[#d7bf69]">Say</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div
                  className="p-8 rounded-2xl border border-[#d7bf69]/30 h-full"
                  style={{
                    background: 'rgba(18, 18, 18, 0.6)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <Instagram className="w-10 h-10 text-[#d7bf69] mb-6" />
                  <p className="text-[#E0E0E0] mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d7bf69]/50 flex items-center justify-center">
                      <User className="w-6 h-6 text-[#d7bf69] opacity-60" />
                    </div>
                    <div>
                      <h4 className="text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-[#E0E0E0]">{testimonial.platform} • {testimonial.followers}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
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
              Ready to Work with <span className="text-[#d7bf69]">Top Brands?</span>
            </h2>
            <p className="text-xl text-[#E0E0E0] mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of creators who trust OneHub for premium brand collaborations and guaranteed payments.
            </p>
            <button className="bg-[#d7bf69] text-black px-10 py-4 rounded-lg gold-glow-hover">
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
