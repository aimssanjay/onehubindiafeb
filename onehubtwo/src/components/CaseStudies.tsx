import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const caseStudies = [
  {
    brand: 'Luxury Salon Chain',
    industry: 'Beauty & Wellness',
    description: 'Launched 12 new outlets with a coordinated influencer push across 6 cities.',
    metrics: [
      { label: '+150% Engagement', value: '+150%' },
      { label: '3X ROAS', value: '3X' },
      { label: '2.1M+ Reach', value: '2.1M+' },
    ],
  },
  {
    brand: 'Premium Restaurant Group',
    industry: 'Food & Beverage',
    description: 'Creator-led campaign for new menu launch featuring 25 food influencers.',
    metrics: [
      { label: '+220% Footfall', value: '+220%' },
      { label: '4.5X ROAS', value: '4.5X' },
      { label: '3.8M+ Reach', value: '3.8M+' },
    ],
  },
  {
    brand: 'Fashion E-Commerce Brand',
    industry: 'Fashion & Lifestyle',
    description: 'Multi-platform campaign with nano and macro influencers for festival collection.',
    metrics: [
      { label: '+180% Sales', value: '+180%' },
      { label: '5X ROAS', value: '5X' },
      { label: '5.2M+ Reach', value: '5.2M+' },
    ],
  },
];

export function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Campaigns That Deliver Real Results.</h2>
          <p className="text-[#E0E0E0] text-lg">Proven success stories from brands we've partnered with.</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.brand}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0.5,
                  scale: index === currentIndex ? 1.05 : 0.95,
                }}
                transition={{ duration: 0.4 }}
                className={`bg-[#111111] rounded-2xl p-8 transition-all ${
                  index === currentIndex
                    ? 'border-2 border-[#d7bf69] gold-glow'
                    : 'border border-[#d7bf69]/30'
                }`}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mb-4 border border-[#d7bf69]/20">
                    <span className="text-gray-400 text-xs">Logo</span>
                  </div>
                  <div className="inline-block bg-transparent border border-[#d7bf69] text-[#d7bf69] px-3 py-1 rounded-full text-sm mb-4">
                    {study.industry}
                  </div>
                  <h4 className="mb-3">{study.brand}</h4>
                  <p className="text-[#E0E0E0] text-sm">{study.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-[#E0E0E0] text-sm">{metric.label}</span>
                      <span className="text-white">{metric.value}</span>
                    </div>
                  ))}
                </div>

                <a href="#" className="text-[#d7bf69] inline-flex items-center gap-2">
                  View Case Study →
                </a>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-[#d7bf69] text-black flex items-center justify-center hover-lift"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-[#d7bf69] text-black flex items-center justify-center hover-lift"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}