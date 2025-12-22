import { motion } from 'motion/react';
import { brands } from '../config/brands';

export function TrustedBrands() {
  return (
    <section className="py-20 bg-black border-t border-[#d7bf69]/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[#d7bf69] mb-4 tracking-wide uppercase">TRUSTED BY LEADING BRANDS</h2>
          <p className="text-[#E0E0E0] text-lg">
            Across F&B, beauty, fashion, tech, apps and hospitality.
          </p>
        </motion.div>

        <div className="relative overflow-hidden py-8">
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
            className="flex gap-16 items-center"
          >
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 h-28 flex items-center justify-center bg-white rounded-lg p-4 hover:shadow-xl hover:shadow-[#d7bf69]/20 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <img 
                 src={`./logos/brand-${i}.png`}
                  alt={`brand-${i}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 border-b border-[#d7bf69] w-24 mx-auto" />
      </div>
    </section>
  );
}