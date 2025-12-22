import { motion } from 'motion/react';
import { useState } from 'react';

const categories = [
  {
    title: 'Fashion & Lifestyle',
    instagram: 'https://images.unsplash.com/photo-1584998316204-3b1e3b1895ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaW5mbHVlbmNlcnxlbnwxfHx8fDE3NjUyOTA5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    facebook: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmYXNoaW9uJTIwaW5mbHVlbmNlcnxlbnwxfHx8fDE3NjUyOTA5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    youtube: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmYXNoaW9uJTIwaW5mbHVlbmNlcnxlbnwxfHx8fDE3NjUyOTA5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Beauty & Skincare',
    instagram: 'https://images.unsplash.com/photo-1720308418433-7ef548d98831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjcmVhdG9yfGVufDF8fHx8MTc2NTI5MDk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    facebook: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxiZWF1dHklMjBjcmVhdG9yfGVufDF8fHx8MTc2NTI5MDk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    youtube: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxiZWF1dHklMjBjcmVhdG9yfGVufDF8fHx8MTc2NTI5MDk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Food & Restaurants',
    instagram: 'https://images.unsplash.com/photo-1560187839-af980ee37cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHklMjByZXN0YXVyYW50fGVufDF8fHx8MTc2NTI2OTgxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    facebook: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmb29kJTIwcGhvdG9ncmFwaHklMjByZXN0YXVyYW50fGVufDF8fHx8MTc2NTI2OTgxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    youtube: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmb29kJTIwcGhvdG9ncmFwaHklMjByZXN0YXVyYW50fGVufDF8fHx8MTc2NTI2OTgxNHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Tech & Apps',
    instagram: 'https://images.unsplash.com/photo-1704440263700-e63c995b5dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjUyNDMyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    facebook: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjUyNDMyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    youtube: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjUyNDMyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Fitness & Wellness',
    instagram: 'https://images.unsplash.com/photo-1649345946706-afbf86eee046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzY1MjgyNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    facebook: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmaXRuZXNzJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzY1MjgyNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    youtube: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmaXRuZXNzJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzY1MjgyNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Moms & Family',
    instagram: 'https://images.unsplash.com/photo-1589169011402-8b2cbd1ee593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBjaGlsZCUyMGZhbWlseXxlbnwxfHx8fDE3NjUyOTEwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    facebook: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb3RoZXIlMjBjaGlsZCUyMGZhbWlseXxlbnwxfHx8fDE3NjUyOTEwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    youtube: 'https://images.unsplash.com/photo-1595503240812-7286dafaddc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb3RoZXIlMjBjaGlsZCUyMGZhbWlseXxlbnwxfHx8fDE3NjUyOTEwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Travel & Experiences',
    instagram: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY1MjUyMDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    facebook: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY1MjUyMDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    youtube: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY1MjUyMDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Gaming & Entertainment',
    instagram: 'https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3NjUyMTYwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    facebook: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxnYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3NjUyMTYwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    youtube: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxnYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3NjUyMTYwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const platforms = ['Instagram', 'Facebook', 'YouTube'];

export function InfluencerCategories() {
  const [selectedPlatform, setSelectedPlatform] = useState('Instagram');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getImageForPlatform = (category: typeof categories[0]) => {
    switch (selectedPlatform) {
      case 'Instagram':
        return category.instagram;
      case 'Facebook':
        return category.facebook;
      case 'YouTube':
        return category.youtube;
      default:
        return category.instagram;
    }
  };

  return (
    <section id="influencers" className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Explore Our Influencer Network.</h2>
          <p className="text-[#E0E0E0] text-lg mb-8">
            Handpicked creators across categories, platforms and regions.
          </p>

          {/* Platform Filter Pills */}
          <div className="flex justify-center gap-3 mb-12">
            {platforms.map((platform) => (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={`px-6 py-2 rounded-full transition-all cursor-pointer ${
                  selectedPlatform === platform
                    ? 'bg-[#d7bf69] text-black'
                    : 'bg-transparent border-2 border-[#d7bf69] text-white hover:bg-[#d7bf69] hover:text-black'
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.img
                src={getImageForPlatform(category)}
                alt={category.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-[#d7bf69] uppercase tracking-wider inline-block border-b border-[#d7bf69] pb-1">
                  {category.title}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/60 flex items-center justify-center"
              >
                <span className="text-white">View Creators →</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}