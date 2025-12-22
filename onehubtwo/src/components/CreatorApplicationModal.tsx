import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CreatorApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreatorApplicationModal({ isOpen, onClose }: CreatorApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    city: '',
    nationality: '',
    whatsapp: '',
    instagram: '',
    isPublic: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = 'Creator Network Application';
    const body = `
Name: ${formData.name}
Gender: ${formData.gender}
Email: ${formData.email}
City: ${formData.city}
Nationality: ${formData.nationality}
WhatsApp Number: ${formData.whatsapp}
Instagram User Name: ${formData.instagram}
Instagram Profile is Public: ${formData.isPublic ? 'Yes' : 'No'}
    `.trim();
    
    window.location.href = `mailto:info@theonehub.ae?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Reset form and close modal
    setFormData({
      name: '',
      gender: '',
      email: '',
      city: '',
      nationality: '',
      whatsapp: '',
      instagram: '',
      isPublic: false
    });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-black border-2 border-[#d7bf69] rounded-2xl max-w-lg w-full p-6 sm:p-8 my-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full border border-[#d7bf69]/50 flex items-center justify-center hover:bg-[#d7bf69]/10 transition-all cursor-pointer"
              >
                <X className="w-5 h-5 text-[#d7bf69]" />
              </button>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white placeholder-[#d7bf69]/50 focus:border-[#d7bf69] focus:outline-none transition-colors"
                    placeholder="Name"
                  />
                </div>

                {/* Gender */}
                <div>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white placeholder-[#d7bf69]/50 focus:border-[#d7bf69] focus:outline-none transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23d7bf69'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      backgroundSize: '1.5em 1.5em'
                    }}
                  >
                    <option value="" className="text-[#d7bf69]/50">Select Gender</option>
                    <option value="Male" className="text-white">Male</option>
                    <option value="Female" className="text-white">Female</option>
                  </select>
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white placeholder-[#d7bf69]/50 focus:border-[#d7bf69] focus:outline-none transition-colors"
                    placeholder="Email"
                  />
                </div>

                {/* City */}
                <div>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white placeholder-[#d7bf69]/50 focus:border-[#d7bf69] focus:outline-none transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23d7bf69'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      backgroundSize: '1.5em 1.5em'
                    }}
                  >
                    <option value="" className="text-[#d7bf69]/50">Select City</option>
                    <option value="New Delhi" className="text-white">New Delhi</option>
                    <option value="Mumbai" className="text-white">Mumbai</option>
                    <option value="Bangalore" className="text-white">Bangalore</option>
                    <option value="Dubai" className="text-white">Dubai</option>
                    <option value="Abu Dhabi" className="text-white">Abu Dhabi</option>
                    <option value="Other" className="text-white">Other</option>
                  </select>
                </div>

                {/* Nationality */}
                <div>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white placeholder-[#d7bf69]/50 focus:border-[#d7bf69] focus:outline-none transition-colors"
                    placeholder="Nationality"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white placeholder-[#d7bf69]/50 focus:border-[#d7bf69] focus:outline-none transition-colors"
                    placeholder="WhatsApp Number"
                  />
                </div>

                {/* Instagram User Name */}
                <div>
                  <input
                    type="text"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white placeholder-[#d7bf69]/50 focus:border-[#d7bf69] focus:outline-none transition-colors"
                    placeholder="Instagram User Name"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="isPublic"
                    id="isPublic"
                    checked={formData.isPublic}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-[#d7bf69]/30 bg-black text-[#d7bf69] focus:ring-[#d7bf69] focus:ring-offset-0 cursor-pointer"
                  />
                  <label htmlFor="isPublic" className="text-white text-sm cursor-pointer">
                    My Instagram profile is not private
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#d7bf69] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#c9b25f] transition-all cursor-pointer mt-6"
                >
                  Apply Now
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
