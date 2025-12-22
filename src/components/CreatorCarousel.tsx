import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const creators = [
  {
    name: '@priyasharma',
    category: 'Beauty | Instagram',
    image: 'https://images.unsplash.com/photo-1678730939174-bf600a5e0af2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwaW5mbHVlbmNlcnxlbnwxfHx8fDE3NjUxODgzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: '@rohitkhanna',
    category: 'Tech | YouTube',
    image: 'https://images.unsplash.com/photo-1642610225765-a1cd62b7b565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGNyZWF0b3J8ZW58MXx8fHwxNzY1MjkxMTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: '@lifewithneha',
    category: 'Lifestyle | TikTok',
    image: 'https://images.unsplash.com/photo-1563237481-693b5bc6423e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBibG9nZ2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1MjcwNjM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: '@arjunverma',
    category: 'Fitness | Instagram',
    image: 'https://images.unsplash.com/photo-1543132220-e7fef0b974e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTIyMjEyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: '@mayafoodie',
    category: 'Food | Instagram',
    image: 'https://images.unsplash.com/photo-1558975285-193b2c315c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTE4ODM0OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: '@vikastravel',
    category: 'Travel | YouTube',
    image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGluZmx1ZW5jZXJ8ZW58MXx8fHwxNzY1MTgxNjczfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function CreatorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % creators.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + creators.length) % creators.length);
  };

  const visibleCreators = [
    creators[(currentIndex - 1 + creators.length) % creators.length],
    creators[currentIndex],
    creators[(currentIndex + 1) % creators.length],
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[25px] md:text-[40px] lg:text-[48px]">Featured Creators</h2>
          <p className="text-[#E0E0E0] text-base md:text-lg max-w-2xl mx-auto">
            Meet our curated network of verified influencers across multiple categories
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Navigation Buttons - Hidden on mobile */}
            <button
              onClick={prev}
              className="hidden md:flex w-12 h-12 rounded-full border-2 border-[#d7bf69] items-center justify-center hover:bg-[#d7bf69] hover:text-black transition-all group z-10 cursor-pointer"
              aria-label="Previous creator"
            >
              <ChevronLeft className="w-6 h-6 text-[#d7bf69] group-hover:text-black" />
            </button>

            <div className="flex gap-4 md:gap-6 items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {visibleCreators.map((creator, idx) => (
                  <motion.div
                    key={`${currentIndex}-${idx}`}
                    initial={{ opacity: 0, scale: 0.8, x: idx === 2 ? 100 : idx === 0 ? -100 : 0 }}
                    animate={{
                      opacity: idx === 1 ? 1 : 0.5,
                      scale: idx === 1 ? 1 : 0.85,
                      x: 0,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    whileHover={{ scale: idx === 1 ? 1.05 : 0.9, y: -10 }}
                    className={`relative rounded-2xl overflow-hidden shadow-2xl border-2 cursor-pointer ${
                      idx === 1 
                        ? 'border-[#d7bf69] w-72 h-[420px] md:w-80 md:h-96' 
                        : 'hidden md:block border-[#d7bf69]/30 md:w-64 md:h-80'
                    }`}
                  >
                    <img
                      src={creator.image}
                      alt={creator.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-6">
                      <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white mb-2 text-xl md:text-2xl"
                      >
                        {creator.name}
                      </motion.h4>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-[#d7bf69] text-base md:text-sm"
                      >
                        {creator.category}
                      </motion.p>
                    </div>
                    <motion.div
                      className="absolute inset-0 border-2 border-[#d7bf69] opacity-0 hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.02 }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Navigation Buttons - Hidden on mobile */}
            <button
              onClick={next}
              className="hidden md:flex w-12 h-12 rounded-full border-2 border-[#d7bf69] items-center justify-center hover:bg-[#d7bf69] hover:text-black transition-all group z-10 cursor-pointer"
              aria-label="Next creator"
            >
              <ChevronRight className="w-6 h-6 text-[#d7bf69] group-hover:text-black" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-12">
            {creators.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  index === currentIndex ? 'bg-[#d7bf69] w-8' : 'bg-[#d7bf69]/30'
                }`}
                aria-label={`Go to creator ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}