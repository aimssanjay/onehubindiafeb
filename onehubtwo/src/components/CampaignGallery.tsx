import { motion } from 'motion/react';
import { useState } from 'react';

const campaigns = [
  {
    image: 'https://images.unsplash.com/photo-1588560107833-167198a53677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzY1MjkxMDY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Fine Dining Launch',
    metric: '1.8M+ Reach',
  },
  {
    image: 'https://images.unsplash.com/photo-1662289031972-df424bb541bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGx1eHVyeXxlbnwxfHx8fDE3NjUyMTkyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Salon Campaign',
    metric: '2.5X Bookings',
  },
  {
    image: 'https://images.unsplash.com/photo-1759683935063-10fa40f93dd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBicmFuZCUyMGNhbXBhaWdufGVufDF8fHx8MTc2NTI5MTA2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Lifestyle Brand',
    metric: '3.2M+ Impressions',
  },
  {
    image: 'https://images.unsplash.com/photo-1560187839-af980ee37cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHklMjByZXN0YXVyYW50fGVufDF8fHx8MTc2NTI2OTgxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'F&B Content',
    metric: '850K+ Engagement',
  },
  {
    image: 'https://images.unsplash.com/photo-1704440263700-e63c995b5dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjUyNDMyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Tech Launch',
    metric: '500K+ Downloads',
  },
  {
    image: 'https://images.unsplash.com/photo-1649345946706-afbf86eee046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzY1MjgyNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Wellness Studio',
    metric: '1.2M+ Reach',
  },
  {
    image: 'https://images.unsplash.com/photo-1584998316204-3b1e3b1895ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaW5mbHVlbmNlcnxlbnwxfHx8fDE3NjUyOTA5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Fashion Collab',
    metric: '2.8M+ Views',
  },
  {
    image: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY1MjUyMDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Travel Series',
    metric: '4.1M+ Reach',
  },
  {
    image: 'https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3NjUyMTYwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Gaming Campaign',
    metric: '1.5M+ Impressions',
  },
];

export function CampaignGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          <h2 className="mb-4">Campaign Stories & Creator Moments.</h2>
          <p className="text-[#E0E0E0] text-lg">Visual excellence meets measurable impact.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6"
              >
                <h4 className="text-white mb-1">{campaign.title}</h4>
                <p className="text-[#d7bf69]">{campaign.metric}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}