import { motion } from 'motion/react';
import { Target, Users, BarChart, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const reasons = [
  {
    icon: Target,
    title: 'Strategy First',
    description: 'Every campaign starts with deep research, audience insights, and a clear roadmap.',
  },
  {
    icon: Users,
    title: 'Curated Creator Network',
    description: 'Handpicked influencers vetted for authenticity, engagement, and brand fit.',
  },
  {
    icon: BarChart,
    title: 'Transparent Reporting',
    description: 'Real-time dashboards and detailed analytics for every campaign metric.',
  },
  {
    icon: Zap,
    title: 'End-to-End Execution',
    description: 'From briefing to content creation to launch – we handle everything.',
  },
];

const stats = [
  { number: 250, label: 'CAMPAIGNS' },
  { number: 500, label: 'CREATORS' },
  { number: 15, label: 'INDUSTRIES' },
];

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    const increment = end / (duration * 60);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
        setHasAnimated(true);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration, hasAnimated]);

  return <>{count}+</>;
}

export function WhyChooseUs() {
  const [startCounting, setStartCounting] = useState(false);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Why Brands Choose TheOneHub.</h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-4 bg-[#d7bf69]/20 rounded-full flex items-center justify-center group-hover:bg-[#d7bf69]/30 transition-colors"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-[#d7bf69]" strokeWidth={1.5} />
                </motion.div>
                <h4 className="mb-3">{reason.title}</h4>
                <p className="text-[#E0E0E0]">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setStartCounting(true)}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div 
                className="text-5xl md:text-6xl text-white mb-2"
                whileHover={{ scale: 1.1, color: '#d7bf69' }}
                transition={{ duration: 0.3 }}
              >
                {startCounting ? <Counter end={stat.number} /> : '0+'}
              </motion.div>
              <div className="text-[#d7bf69] tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}