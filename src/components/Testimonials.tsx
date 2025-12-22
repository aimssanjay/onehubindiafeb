import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'TheOneHub transformed our social strategy completely. Their creator network is unmatched, and the results speak for themselves.',
    name: 'Ananya Patel',
    designation: 'Marketing Director',
    brand: 'Luxury Salon Co.',
    image: 'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NTgzNTA3MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    quote:
      'Working with TheOneHub felt like having an extension of our team. Professional, transparent, and always delivering beyond expectations.',
    name: 'Rajesh Kumar',
    designation: 'Founder & CEO',
    brand: 'Premium Food Chain',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTc4ODk1MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    quote:
      'The attention to detail and strategic thinking that TheOneHub brings is exceptional. Every campaign has exceeded our KPIs.',
    name: 'Meera Singh',
    designation: 'Brand Manager',
    brand: 'Fashion Brand',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1Nzk2MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
          <h2 className="mb-4">What Our Clients Say.</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative h-[400px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
                scale: index === currentIndex ? 1 : 0.95,
              }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 ${index === currentIndex ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="bg-black border-2 border-[#d7bf69] rounded-2xl p-12 shadow-xl">
                <Quote className="w-12 h-12 text-[#d7bf69] mb-6" />
                <p className="text-[#E0E0E0] text-xl mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#d7bf69]/50"
                  />
                  <div>
                    <p className="text-white">{testimonial.name}</p>
                    <p className="text-[#E0E0E0] text-sm">{testimonial.designation}</p>
                    <p className="text-[#d7bf69] text-sm">{testimonial.brand}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8 absolute bottom-0 left-0 right-0">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#d7bf69] w-8' : 'bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}