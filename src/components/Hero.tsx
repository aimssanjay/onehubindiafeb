import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';

const carouselImages = [
  'https://images.unsplash.com/photo-1678330197184-125080fa5eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBwb3N0JTIwbW9ja3VwfGVufDF8fHx8MTc2NTI5MDk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1584998316204-3b1e3b1895ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaW5mbHVlbmNlcnxlbnwxfHx8fDE3NjUyOTA5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1720308418433-7ef548d98831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjcmVhdG9yfGVufDF8fHx8MTc2NTI5MDk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1690883793939-f8cca2f28ee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBob25lfGVufDF8fHx8MTc2NTI4OTQ1MHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1645849017333-abc9c24522b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZsdWVuY2VyJTIwY29udGVudCUyMGNyZWF0b3J8ZW58MXx8fHwxNzY1Mjg3MTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
];

const stats = [
  { label: '500+ Creators', delay: 0.3 },
  { label: '3X ROAS', delay: 0.5 },
  { label: 'Million+ Reach', delay: 0.7 },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-black">
      {/* Dark gradient with gold accents */}
      <div className="absolute inset-0 dark-gradient" />
      <div className="absolute top-20 right-0 w-64 h-64 md:w-96 md:h-96 opacity-10 gold-pulse">
        <svg viewBox="0 0 200 200" className="text-[#d7bf69]">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="mb-4 md:mb-6">
            Where Bold Brands &<br />
            Powerful Creators Connect.
          </h1>
          <p className="text-[#E0E0E0] text-lg md:text-xl mb-6 md:mb-8 max-w-xl">
            TheOneHub.in runs premium influencer and social media campaigns that blend aesthetics with measurable performance.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <button
              onClick={() => (window as any).navigateToPage('registration')}
              className="bg-[#d7bf69] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg gold-glow-hover gold-shimmer cursor-pointer"
            >
              Join Our Creator Network
            </button>
           
          </div>
        </motion.div>

        {/* Right: Phone Mockup with Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative mt-12 lg:mt-0"
        >
          <div className="relative z-10 mx-auto w-[280px] sm:w-[300px] h-[560px] sm:h-[600px]">
            {/* Phone Frame */}
            <div className="absolute inset-0 bg-[#d7bf69]/20 rounded-[3rem] shadow-2xl p-3 border border-[#d7bf69]/30">
              <div className="bg-black rounded-[2.5rem] h-full w-full overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-6 sm:h-7 bg-[#d7bf69] rounded-b-3xl z-20" />
                <div className="relative h-full overflow-hidden">
                  {carouselImages.map((img, index) => (
                    <motion.img
                      key={index}
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: currentSlide === index ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating overlays with creator images - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden lg:block absolute -left-20 top-20 w-32 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-[#d7bf69]"
            >
              <img
                src="https://images.unsplash.com/photo-1584998316204-3b1e3b1895ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaW5mbHVlbmNlcnxlbnwxfHx8fDE3NjUyOTA5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creator"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="hidden lg:block absolute -right-16 top-40 w-28 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-[#d7bf69]"
            >
              <img
                src="https://images.unsplash.com/photo-1720308418433-7ef548d98831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjcmVhdG9yfGVufDF8fHx8MTc2NTI5MDk4OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creator"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Floating Stat Chips - Responsive positioning */}
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="absolute bg-black px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg border-2 border-[#d7bf69] text-sm sm:text-base z-[999] pr-[10px] sm:pr-4"
              style={{
                top: index === 0 ? '10%' : index === 1 ? '50%' : '80%',
                right: index === 0 ? '10px' : index === 1 ? '10px' : '10px',
              }}
            >
              <span className="text-white">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}