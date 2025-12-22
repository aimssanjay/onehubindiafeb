import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Clock, Instagram, Linkedin, Youtube, MessageCircle, Send, Building2, User as UserIcon, Facebook, Pin } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    userType: '',
    budget: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 dark-gradient" />
        <div className="absolute top-20 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#d7bf69] rounded-full blur-[120px] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-[#d7bf69]/10 border border-[#d7bf69] rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6"
            >
              <span className="text-[#d7bf69] text-sm sm:text-base">Let's Connect</span>
            </motion.div>
            
            <h1 className="mb-4 sm:mb-6">
              Start Your Next<br />Big Campaign
            </h1>
            <p className="text-[#E0E0E0] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Whether you're a brand looking to amplify your reach or a creator ready to partner with premium brands, 
              we'd love to hear from you. Let's build something remarkable together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Form + Info */}
      <section className="py-12 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div
                className="p-8 md:p-10 rounded-2xl border border-[#d7bf69]/30"
                style={{
                  background: 'rgba(18, 18, 18, 0.6)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <h3 className="mb-8">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2 text-[#E0E0E0]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm mb-2 text-[#E0E0E0]">
                        Brand / Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2 text-[#E0E0E0]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm mb-2 text-[#E0E0E0]">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                        placeholder="+91 98114 75519"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="userType" className="block text-sm mb-2 text-[#E0E0E0]">
                        I am a *
                      </label>
                      <select
                        id="userType"
                        name="userType"
                        value={formData.userType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="brand">Brand</option>
                        <option value="agency">Agency</option>
                        <option value="influencer">Influencer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm mb-2 text-[#E0E0E0]">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors"
                      >
                        <option value="">Select a range</option>
                        <option value="under-10k">Below ₹10,000</option>
                        <option value="10k-50k">₹10,000 - ₹50,000</option>
                        <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                        <option value="100k-500k">₹1,00,000 - ₹5,00,000</option>
                        <option value="over-500k">Above ₹5,00,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 text-[#E0E0E0]">
                      How Can We Help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-black border border-[#d7bf69]/30 text-white focus:border-[#d7bf69] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project, campaign goals, or how you'd like to collaborate..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#d7bf69] text-black px-8 py-4 rounded-lg gold-glow-hover flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    Submit Message
                  </button>

                  <p className="text-sm text-[#E0E0E0] text-center">
                    We usually respond within 24 hours.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Quick Contact Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div
                className="p-6 rounded-2xl border border-[#d7bf69]/30"
                style={{
                  background: 'rgba(18, 18, 18, 0.6)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <h4 className="mb-6">Contact Information</h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#d7bf69]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#d7bf69]" />
                    </div>
                    <div>
                      <div className="text-white mb-1">Location</div>
                      <p className="text-sm text-[#E0E0E0]">
                        C120, 2nd floor, flat no 1,<br />
                        Paryavaran Complex,<br />
                        New Delhi 110030
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#d7bf69]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#d7bf69]" />
                    </div>
                    <div>
                      <div className="text-white mb-1">Email</div>
                      <a href="mailto:info@theonehub.in" className="text-sm text-[#d7bf69] hover:underline cursor-pointer">
                        info@theonehub.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#d7bf69]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#d7bf69]" />
                    </div>
                    <div>
                      <div className="text-white mb-1">Phone / WhatsApp</div>
                      <a href="tel:+919811475519" className="text-sm text-[#d7bf69] hover:underline cursor-pointer">
                        +91 9811475519
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#d7bf69]/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-[#d7bf69]" />
                    </div>
                    <div>
                      <div className="text-white mb-1">Website</div>
                      <a href="https://www.theonehub.in" target="_blank" rel="noopener noreferrer" className="text-sm text-[#d7bf69] hover:underline cursor-pointer">
                        www.theonehub.in
                      </a>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="pt-4 border-t border-[#d7bf69]/20">
                    <div className="text-white mb-3">Follow Us</div>
                    <div className="flex gap-3 flex-wrap">
                      <a
                        href="https://snapchat.com/t/QFwYFxUS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-[#d7bf69]/10 border border-[#d7bf69]/30 flex items-center justify-center hover:bg-[#d7bf69] hover:border-[#d7bf69] transition-all group cursor-pointer"
                        aria-label="Snapchat"
                      >
                        <svg className="w-5 h-5 text-[#d7bf69] group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3 0 .727-.09 1.216-.18.336-.06.687-.12 1.033-.12.36 0 .63.09.814.18.246.135.48.33.615.54.18.27.27.57.27.87 0 .87-.63 1.38-1.187 1.83-.345.27-.705.555-.855.87-.12.24-.12.54-.12.765 0 .285.015.57.045.855.09 1.005.27 2.22 1.395 2.97.465.315.735.54.735.96 0 .18-.045.33-.135.48-.27.45-1.065.705-1.725.87-.285.075-.57.12-.825.18l-.015.015c-.09.27-.18.615-.24.87-.075.345-.135.705-.21 1.065-.015.075-.03.15-.045.225-.105.48-.21.975-.42 1.38-.225.42-.57.78-1.005 1.005-.465.24-.99.345-1.53.345-.61 0-1.2-.12-1.86-.33-.57-.18-1.155-.39-1.725-.57-.465-.135-.93-.24-1.38-.24-.435 0-.885.105-1.335.24-.57.18-1.155.39-1.725.57-.66.21-1.25.33-1.86.33-.54 0-1.065-.105-1.53-.345-.435-.225-.78-.585-1.005-1.005-.21-.405-.315-.9-.42-1.38-.015-.075-.03-.15-.045-.225-.075-.36-.135-.72-.21-1.065-.06-.255-.15-.6-.24-.87l-.015-.015c-.255-.06-.54-.105-.825-.18-.66-.165-1.455-.42-1.725-.87-.09-.15-.135-.3-.135-.48 0-.42.27-.645.735-.96 1.125-.75 1.305-1.965 1.395-2.97.03-.285.045-.57.045-.855 0-.225 0-.525-.12-.765-.15-.315-.51-.6-.855-.87-.557-.45-1.187-.96-1.187-1.83 0-.3.09-.6.27-.87.135-.21.369-.405.615-.54.184-.09.454-.18.814-.18.346 0 .697.06 1.033.12.489.09.916.18 1.216.18.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847 1.583-3.545 4.94-3.821 5.93-3.821z"/>
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/onehub.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-[#d7bf69]/10 border border-[#d7bf69]/30 flex items-center justify-center hover:bg-[#d7bf69] hover:border-[#d7bf69] transition-all group cursor-pointer"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5 text-[#d7bf69] group-hover:text-black transition-colors" />
                      </a>
                      <a
                        href="https://www.facebook.com/people/OneHub-India/61584802413879/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-[#d7bf69]/10 border border-[#d7bf69]/30 flex items-center justify-center hover:bg-[#d7bf69] hover:border-[#d7bf69] transition-all group cursor-pointer"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-5 h-5 text-[#d7bf69] group-hover:text-black transition-colors" />
                      </a>
                      <a
                        href="https://www.youtube.com/@onehub_india"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-[#d7bf69]/10 border border-[#d7bf69]/30 flex items-center justify-center hover:bg-[#d7bf69] hover:border-[#d7bf69] transition-all group cursor-pointer"
                        aria-label="YouTube"
                      >
                        <Youtube className="w-5 h-5 text-[#d7bf69] group-hover:text-black transition-colors" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/onehub-india/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-[#d7bf69]/10 border border-[#d7bf69]/30 flex items-center justify-center hover:bg-[#d7bf69] hover:border-[#d7bf69] transition-all group cursor-pointer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 text-[#d7bf69] group-hover:text-black transition-colors" />
                      </a>
                      <a
                        href="https://in.pinterest.com/onehubinfluencers/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-[#d7bf69]/10 border border-[#d7bf69]/30 flex items-center justify-center hover:bg-[#d7bf69] hover:border-[#d7bf69] transition-all group cursor-pointer"
                        aria-label="Pinterest"
                      >
                        <svg className="w-5 h-5 text-[#d7bf69] group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div
                className="p-6 rounded-2xl border border-[#d7bf69]/30 text-center"
                style={{
                  background: 'rgba(18, 18, 18, 0.6)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <MessageCircle className="w-12 h-12 text-[#d7bf69] mx-auto mb-4" />
                <h4 className="mb-2">Quick Response?</h4>
                <p className="text-sm text-[#E0E0E0] mb-4">
                  Chat with us on WhatsApp for instant replies
                </p>
                <a 
                  href="https://wa.me/919811475519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-[#d7bf69] text-[#d7bf69] px-6 py-3 rounded-lg hover:bg-[#d7bf69] hover:text-black transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Different Ways to Connect */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2>Different Ways to <span className="text-[#d7bf69]">Connect</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: 'Brand Campaigns',
                description: 'Partner with us to create powerful influencer marketing campaigns that drive real results.',
                link: 'Contact for Campaigns'
              },
              {
                icon: UserIcon,
                title: 'Influencer Collaborations',
                description: 'Join our network of verified creators and connect with leading brands across the GCC.',
                link: 'Apply as Creator'
              },
              {
                icon: Send,
                title: 'Partnerships & Media',
                description: 'Explore collaboration opportunities, press inquiries, and strategic partnerships.',
                link: 'Contact Team'
              }
            ].map((option, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div
                  className="p-8 rounded-2xl border border-[#d7bf69]/30 hover-lift h-full flex flex-col"
                  style={{
                    background: 'rgba(18, 18, 18, 0.6)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <div className="w-16 h-16 rounded-xl bg-[#d7bf69]/10 flex items-center justify-center mb-6 gold-glow group-hover:bg-[#d7bf69]/20 transition-colors">
                    <option.icon className="w-8 h-8 text-[#d7bf69]" />
                  </div>
                  <h4 className="mb-4">{option.title}</h4>
                  <p className="text-[#E0E0E0] mb-6 flex-grow">{option.description}</p>
                  <a
                    href="#"
                    className="text-[#d7bf69] hover:underline inline-flex items-center gap-2"
                  >
                    {option.link}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Strip */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h3 className="mb-8">Connect with OneHub <span className="text-[#d7bf69]">Online</span></h3>
            <div className="flex items-center justify-center flex-wrap gap-4 mb-12">
              <a
                href="https://snapchat.com/t/QFwYFxUS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border-2 border-[#d7bf69]/50 flex items-center justify-center hover:border-[#d7bf69] hover:bg-[#d7bf69]/10 transition-all hover-lift group cursor-pointer"
                aria-label="Snapchat"
              >
                <svg className="w-6 h-6 text-[#d7bf69] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3 0 .727-.09 1.216-.18.336-.06.687-.12 1.033-.12.36 0 .63.09.814.18.246.135.48.33.615.54.18.27.27.57.27.87 0 .87-.63 1.38-1.187 1.83-.345.27-.705.555-.855.87-.12.24-.12.54-.12.765 0 .285.015.57.045.855.09 1.005.27 2.22 1.395 2.97.465.315.735.54.735.96 0 .18-.045.33-.135.48-.27.45-1.065.705-1.725.87-.285.075-.57.12-.825.18l-.015.015c-.09.27-.18.615-.24.87-.075.345-.135.705-.21 1.065-.015.075-.03.15-.045.225-.105.48-.21.975-.42 1.38-.225.42-.57.78-1.005 1.005-.465.24-.99.345-1.53.345-.61 0-1.2-.12-1.86-.33-.57-.18-1.155-.39-1.725-.57-.465-.135-.93-.24-1.38-.24-.435 0-.885.105-1.335.24-.57.18-1.155.39-1.725.57-.66.21-1.25.33-1.86.33-.54 0-1.065-.105-1.53-.345-.435-.225-.78-.585-1.005-1.005-.21-.405-.315-.9-.42-1.38-.015-.075-.03-.15-.045-.225-.075-.36-.135-.72-.21-1.065-.06-.255-.15-.6-.24-.87l-.015-.015c-.255-.06-.54-.105-.825-.18-.66-.165-1.455-.42-1.725-.87-.09-.15-.135-.3-.135-.48 0-.42.27-.645.735-.96 1.125-.75 1.305-1.965 1.395-2.97.03-.285.045-.57.045-.855 0-.225 0-.525-.12-.765-.15-.315-.51-.6-.855-.87-.557-.45-1.187-.96-1.187-1.83 0-.3.09-.6.27-.87.135-.21.369-.405.615-.54.184-.09.454-.18.814-.18.346 0 .697.06 1.033.12.489.09.916.18 1.216.18.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847 1.583-3.545 4.94-3.821 5.93-3.821z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/onehub.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border-2 border-[#d7bf69]/50 flex items-center justify-center hover:border-[#d7bf69] hover:bg-[#d7bf69]/10 transition-all hover-lift group cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-[#d7bf69] group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.facebook.com/people/OneHub-India/61584802413879/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border-2 border-[#d7bf69]/50 flex items-center justify-center hover:border-[#d7bf69] hover:bg-[#d7bf69]/10 transition-all hover-lift group cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-[#d7bf69] group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.youtube.com/@onehub_india"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border-2 border-[#d7bf69]/50 flex items-center justify-center hover:border-[#d7bf69] hover:bg-[#d7bf69]/10 transition-all hover-lift group cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6 text-[#d7bf69] group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/company/onehub-india/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border-2 border-[#d7bf69]/50 flex items-center justify-center hover:border-[#d7bf69] hover:bg-[#d7bf69]/10 transition-all hover-lift group cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-[#d7bf69] group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://in.pinterest.com/onehubinfluencers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border-2 border-[#d7bf69]/50 flex items-center justify-center hover:border-[#d7bf69] hover:bg-[#d7bf69]/10 transition-all hover-lift group cursor-pointer"
                aria-label="Pinterest"
              >
                <svg className="w-6 h-6 text-[#d7bf69] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-12"
          >
            <h2>Frequently Asked <span className="text-[#d7bf69]">Questions</span></h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'What is the typical campaign timeline?',
                answer: 'Most campaigns run between 2-6 weeks, depending on scope and deliverables. We provide a detailed timeline during the strategy phase.'
              },
              {
                question: 'What is the minimum budget for a campaign?',
                answer: 'Campaign budgets vary based on objectives and creator selection. Our minimum campaign budget starts at $10,000 for comprehensive influencer partnerships.'
              },
              {
                question: 'How do I join as an influencer?',
                answer: 'Simply fill out the contact form above, select "Influencer" as your type, and tell us about your content and audience. Our team will review and get back to you within 48 hours.'
              },
              {
                question: 'What platforms do you work with?',
                answer: 'We specialize in Instagram, TikTok, YouTube, and emerging platforms. We match the right platform to your campaign objectives and target audience.'
              },
              {
                question: 'Do you provide analytics and reporting?',
                answer: 'Yes! We provide real-time campaign dashboards and comprehensive reports covering reach, engagement, conversions, and ROI metrics.'
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-[#d7bf69]/30 rounded-xl overflow-hidden"
                style={{
                  background: 'rgba(18, 18, 18, 0.6)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-[#d7bf69]/5 transition-colors"
                >
                  <h4 className="pr-4">{faq.question}</h4>
                  <div
                    className={`w-6 h-6 rounded-full border-2 border-[#d7bf69] flex items-center justify-center flex-shrink-0 transition-transform ${
                      openFaq === i ? 'rotate-45' : ''
                    }`}
                  >
                    <div className="w-3 h-0.5 bg-[#d7bf69] absolute" />
                    <div className="w-0.5 h-3 bg-[#d7bf69] absolute" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-[#E0E0E0]">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Micro-CTA */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h3 className="mb-4">Prefer Email?</h3>
            <p className="text-lg text-[#E0E0E0] mb-6">
              Drop us a message and we'll take it from there.
            </p>
            <a
              href="mailto:info@theonehub.in"
              className="inline-flex items-center gap-2 text-[#d7bf69] hover:underline text-xl cursor-pointer"
            >
              <Mail className="w-6 h-6" />
              info@theonehub.in
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}