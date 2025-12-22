import { motion } from 'motion/react';
import { UserPlus } from 'lucide-react';
import { useState } from 'react';
import { CreatorApplicationModal } from './CreatorApplicationModal';

export function CreatorCorner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-[#111111] rounded-3xl overflow-hidden border-2 border-[#d7bf69]"
          >
            {/* Background Image with Parallax */}
            <div className="absolute inset-0 opacity-10">
              <img
                src="https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2NTI2OTMwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creators"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 py-20 px-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#d7bf69] rounded-full flex items-center justify-center gold-glow">
                <UserPlus className="w-10 h-10 text-black" strokeWidth={1.5} />
              </div>

              <h2 className="mb-4">Are You a Creator?</h2>
              <p className="text-[#E0E0E0] text-lg max-w-2xl mx-auto mb-8">
                Join our exclusive network of influencers and content creators. Get access to premium
                brand collaborations, fair compensation, and professional campaign support.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#d7bf69] text-black px-10 py-4 rounded-lg gold-glow-hover text-lg cursor-pointer"
              >
                Join Our Creator Network
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <CreatorApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}