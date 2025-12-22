import { motion } from 'motion/react';
import { Users, Share2, Video, TrendingUp, Lightbulb, Camera, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function ServicesPage() {
  const navigateToPage = (page: string) => {
    if (typeof window !== 'undefined' && (window as any).navigateToPage) {
      (window as any).navigateToPage(page);
    }
  };

  const services = [
    {
      icon: Users,
      title: 'Influencer Marketing Campaigns',
      description: 'Full-service influencer partnerships from creator sourcing to campaign execution and performance reporting.'
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Comprehensive social media strategy, content creation, community management, and growth optimization.'
    },
    {
      icon: Video,
      title: 'UGC Content Creation',
      description: 'Authentic user-generated content from real creators that drives engagement and conversions.'
    },
    {
      icon: TrendingUp,
      title: 'Paid Ads & Performance Marketing',
      description: 'Data-driven paid social campaigns across Instagram, TikTok, Facebook, and YouTube with measurable ROI.'
    },
    {
      icon: Lightbulb,
      title: 'Brand Strategy & Positioning',
      description: 'Strategic brand development, messaging, positioning, and go-to-market strategies for launches.'
    },
    {
      icon: Camera,
      title: 'Content Production (Photo & Video)',
      description: 'Professional photo and video production services for campaigns, products, and brand storytelling.'
    },
    {
      icon: Calendar,
      title: 'Event & On-ground Activations',
      description: 'Creator events, product launches, brand activations, and on-ground experiences with influencer integration.'
    }
  ];

  const highlightServices = [
    {
      title: 'Influencer Marketing',
      description: 'Connect with the right creators who resonate with your target audience and drive authentic engagement.',
      image: 'https://images.unsplash.com/photo-1759393851741-674ee71fb498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZsdWVuY2VyJTIwY2FtcGFpZ24lMjBtb2JpbGV8ZW58MXx8fHwxNzY1MzYzMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Strategic creator matching & vetting',
        'Contract negotiation & management',
        'Content brief development',
        'Campaign monitoring & reporting',
        'Performance analytics & insights'
      ]
    },
    {
      title: 'Social Media Management',
      description: 'Full-service social media management that builds communities, drives engagement, and grows your brand presence.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hbmFnZXJ8ZW58MXx8fHwxNzY1MzYzMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Content strategy & planning',
        'Daily content creation & posting',
        'Community engagement & moderation',
        'Analytics & monthly reporting',
        'Growth optimization strategies'
      ]
    },
    {
      title: 'Paid Ads & Performance Marketing',
      description: 'Drive measurable results with data-driven paid campaigns optimized for conversions and ROI.',
      image: 'https://images.unsplash.com/photo-1600003014308-b91e8feb7dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWlkJTIwYWRzJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzY1MzYzMTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Campaign strategy & setup',
        'Creative development & testing',
        'Audience targeting & segmentation',
        'A/B testing & optimization',
        'Real-time performance tracking'
      ]
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Brief',
      description: 'We start by understanding your brand, objectives, target audience, and campaign goals.'
    },
    {
      number: '02',
      title: 'Creator Match & Strategy',
      description: 'Our team selects verified creators aligned with your brand and develops a comprehensive campaign strategy.'
    },
    {
      number: '03',
      title: 'Campaign Execution',
      description: 'We manage all aspects of campaign execution including content creation, approvals, and publishing.'
    },
    {
      number: '04',
      title: 'Reporting & Optimization',
      description: 'Track performance in real-time with detailed analytics and optimize campaigns for maximum impact.'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      description: 'Perfect for brands testing influencer marketing',
      features: [
        '3-5 micro-influencers',
        'Single platform focus',
        'Basic reporting',
        '1 month campaign'
      ],
      budget: '$10K - $25K'
    },
    {
      name: 'Growth',
      description: 'Ideal for established brands scaling reach',
      features: [
        '8-12 mid-tier creators',
        'Multi-platform strategy',
        'Advanced analytics',
        '3 month engagement',
        'Dedicated account manager'
      ],
      budget: '$25K - $75K',
      highlighted: true
    },
    {
      name: 'Premium',
      description: 'Comprehensive campaigns for maximum impact',
      features: [
        '15+ creators (all tiers)',
        'Full-funnel strategy',
        'Real-time dashboard',
        '6+ month partnership',
        'Executive reporting',
        'Priority support'
      ],
      budget: '$75K+'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero with Background Image */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY1Mjc3NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Content Studio"
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
              <span className="text-[#d7bf69]">Our Services</span>
            </div>
            <h1 className="mb-6">
              End-to-End Influencer &<br />
              <span className="text-[#d7bf69]">Social Media Solutions</span>
            </h1>
            <p className="text-xl text-[#E0E0E0] mb-8 leading-relaxed">
              OneHub is your full-service partner for influencer marketing, social media management, and performance-driven campaigns. From strategy to execution, we deliver results that matter.
            </p>
            <button 
              onClick={() => navigateToPage('contact')}
              className="bg-[#d7bf69] text-black px-8 py-4 rounded-lg gold-glow-hover"
            >
              Book a Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2>What We <span className="text-[#d7bf69]">Do</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group"
              >
                <div
                  className="p-8 rounded-2xl border border-[#d7bf69]/30 hover:border-[#d7bf69] transition-all hover-lift h-full"
                  style={{
                    background: 'rgba(18, 18, 18, 0.6)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <div className="w-14 h-14 rounded-xl bg-[#d7bf69]/10 flex items-center justify-center mb-6 group-hover:bg-[#d7bf69]/20 transition-colors">
                    <service.icon className="w-7 h-7 text-[#d7bf69]" />
                  </div>
                  <h4 className="mb-3">{service.title}</h4>
                  <p className="text-[#E0E0E0] text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Service Blocks */}
      {highlightServices.map((service, index) => (
        <section
          key={index}
          className={`py-20 ${index % 2 === 0 ? 'bg-black' : 'bg-[#0a0a0a]'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#d7bf69] hover-lift">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-video object-cover"
                  />
                </div>
                <div className="absolute -z-10 inset-0 bg-[#d7bf69] blur-[60px] opacity-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <h3 className="mb-4">{service.title}</h3>
                <p className="text-lg text-[#E0E0E0] mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#d7bf69] flex-shrink-0 mt-1" />
                      <span className="text-[#E0E0E0]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2>How We <span className="text-[#d7bf69]">Work with You</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-[#d7bf69]/20 mb-4" style={{ fontSize: '4rem', lineHeight: 1 }}>
                  {step.number}
                </div>
                <h4 className="mb-3">{step.title}</h4>
                <p className="text-[#E0E0E0] text-sm leading-relaxed">{step.description}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 text-[#d7bf69]/30">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages / Service Tiers */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2>Service <span className="text-[#d7bf69]">Packages</span></h2>
            <p className="text-xl text-[#E0E0E0] mt-4">
              Flexible solutions tailored to your budget and objectives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative ${pkg.highlighted ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#d7bf69] text-black px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <div
                  className={`p-8 rounded-2xl border h-full flex flex-col ${
                    pkg.highlighted
                      ? 'border-[#d7bf69] gold-glow'
                      : 'border-[#d7bf69]/30'
                  }`}
                  style={{
                    background: 'rgba(18, 18, 18, 0.6)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <h3 className="mb-2">{pkg.name}</h3>
                  <p className="text-[#E0E0E0] text-sm mb-6">{pkg.description}</p>
                  <div className="mb-6">
                    <div className="text-[#d7bf69]">{pkg.budget}</div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#d7bf69] flex-shrink-0 mt-0.5" />
                        <span className="text-[#E0E0E0] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigateToPage('contact')}
                    className={`w-full py-3 rounded-lg transition-all ${
                      pkg.highlighted
                        ? 'bg-[#d7bf69] text-black gold-glow-hover'
                        : 'border-2 border-[#d7bf69] text-[#d7bf69] hover:bg-[#d7bf69] hover:text-black'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-related Case Study Teaser */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2>See Our Work <span className="text-[#d7bf69]">in Action</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                brand: 'Premium F&B Chain',
                campaign: 'New Menu Launch',
                metrics: '220% footfall increase • 3.8M reach'
              },
              {
                brand: 'Fashion E-Commerce',
                campaign: 'Festival Collection',
                metrics: '180% sales increase • 5.2M reach'
              },
              {
                brand: 'Beauty Brand',
                campaign: 'Product Launch',
                metrics: '150% engagement • 2.1M reach'
              }
            ].map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div
                  className="rounded-2xl border border-[#d7bf69]/30 overflow-hidden hover-lift"
                  style={{
                    background: 'rgba(18, 18, 18, 0.6)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <div className="aspect-video bg-gradient-to-br from-[#1a1a1a] to-black flex items-center justify-center border-b border-[#d7bf69]/30">
                    <Camera className="w-12 h-12 text-[#d7bf69] opacity-40" />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] border border-[#d7bf69]/30 flex items-center justify-center mb-4">
                      <span className="text-[#d7bf69] text-xs">Logo</span>
                    </div>
                    <h4 className="mb-2">{study.brand}</h4>
                    <p className="text-[#E0E0E0] mb-4">{study.campaign}</p>
                    <p className="text-sm text-[#d7bf69] mb-4">{study.metrics}</p>
                    <a 
                      onClick={() => navigateToPage('case-studies')}
                      className="text-[#d7bf69] inline-flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer"
                    >
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Services CTA */}
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
              Not Sure Which Service <span className="text-[#d7bf69]">You Need?</span>
            </h2>
            <p className="text-xl text-[#E0E0E0] mb-10 max-w-2xl mx-auto leading-relaxed">
              Let our team help you identify the right mix of services to achieve your marketing objectives and business goals.
            </p>
            <button className="bg-[#d7bf69] text-black px-10 py-4 rounded-lg gold-glow-hover">
              Talk to Our Team
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}