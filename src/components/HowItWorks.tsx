import { motion } from 'motion/react';
import { Search, Users, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery & Brief',
    description: 'We learn your brand, goals, audience, and campaign objectives.',
  },
  {
    icon: Users,
    number: '02',
    title: 'Strategy & Creator Shortlisting',
    description: 'Custom strategy with handpicked creators matched to your brand.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Content & Launch',
    description: 'Content creation, approvals, scheduling, and coordinated launch.',
  },
  {
    icon: BarChart,
    number: '04',
    title: 'Reporting & Optimisation',
    description: 'Live tracking, detailed reports, and continuous optimization.',
  },
];

export function HowItWorks() {
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
          <h2 className="mb-4">How a Campaign with Us Works.</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-[#d7bf69] hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  {/* Number Circle on Timeline */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#d7bf69] rounded-full flex items-center justify-center text-black relative z-10 border-4 border-black shadow-lg">
                    <span>{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-black border-2 border-[#d7bf69] rounded-2xl flex items-center justify-center">
                    <Icon className="w-10 h-10 text-[#d7bf69]" strokeWidth={1.5} />
                  </div>

                  <h4 className="mb-3">{step.title}</h4>
                  <p className="text-[#E0E0E0]">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}