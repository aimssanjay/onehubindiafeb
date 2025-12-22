import { motion } from 'motion/react';

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#d7bf69]/20 via-black to-[#d7bf69]/20 relative overflow-hidden">
      {/* Additional glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-6 max-w-3xl mx-auto">
            Ready to launch your next influencer campaign?
          </h2>
          <p className="text-[#E0E0E0] text-xl mb-10 max-w-2xl mx-auto">
            Tell us your goals. We'll bring the right creators and strategy.
          </p>

          <button 
            onClick={() => (window as any).navigateToPage('registration')}
            className="bg-[#d7bf69] text-black px-12 py-5 rounded-lg gold-glow-hover gold-shimmer text-lg cursor-pointer"
          >
            Book a Strategy Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}