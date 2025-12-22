import { motion } from 'motion/react';
import { Users, Share2, Video, TrendingUp, Star, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Influencer Marketing Campaigns',
    description: 'End-to-end creator campaigns that drive awareness and conversions.',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Strategy, content creation, and daily management for your brand accounts.',
  },
  {
    icon: Video,
    title: 'UGC & Content Production',
    description: 'Authentic user-generated content and professional brand shoots.',
  },
  {
    icon: TrendingUp,
    title: 'Performance & Paid Amplification',
    description: 'Boost organic content with targeted paid social campaigns.',
  },
  {
    icon: Star,
    title: 'Creator / Talent Management',
    description: 'Representing and managing influencers for brand partnerships.',
  },
  {
    icon: BarChart3,
    title: 'Strategy, Reporting & Analytics',
    description: 'Data-driven insights and transparent performance tracking.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 dark-gradient opacity-50" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">What We Do at TheOneHub.</h2>
          <p className="text-[#E0E0E0] text-lg max-w-2xl mx-auto">
            Full-service influencer marketing and social media solutions tailored for luxury brands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#111111] border border-[#d7bf69] rounded-xl p-8 hover-lift group"
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-[#d7bf69] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <h4 className="mb-3">{service.title}</h4>
                <p className="text-[#E0E0E0] mb-4">{service.description}</p>
                <a
                  href="#"
                  className="text-[#d7bf69] inline-flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer"
                >
                  Learn more →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}