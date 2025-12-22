import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface HeaderProps {
  currentPage: 'home' | 'about' | 'contact' | 'services' | 'influencers' | 'case-studies' | 'registration';
  onNavigate: (page: 'home' | 'about' | 'contact' | 'services' | 'influencers' | 'case-studies' | 'registration') => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'home' as const },
    { name: 'About', page: 'about' as const },
    { name: 'Services', page: 'services' as const },
    { name: 'Influencers', page: 'influencers' as const },
    { name: 'Case Studies', page: 'case-studies' as const },
    { name: 'Registration', page: 'registration' as const },
    { name: 'Contact', page: 'contact' as const }
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    onNavigate(link.page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 bg-black transition-all duration-300 ${
        scrolled ? 'shadow-lg border-b border-[#d7bf69]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex items-center cursor-pointer">
          <motion.img
            src="https://onehub.ae/wp-content/uploads/2023/10/One-Hub-Logo.webp"
            alt="TheOneHub.in"
            className="h-12 md:h-14 lg:h-16"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className={`text-white hover:text-[#d7bf69] transition-colors cursor-pointer ${
                currentPage === link.page ? 'text-[#d7bf69]' : ''
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('registration')}
            className="bg-[#d7bf69] text-black px-6 py-2.5 rounded-lg gold-glow-hover cursor-pointer"
          >
            Join Our Creator Network
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 cursor-pointer"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-[#d7bf69] transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-[#d7bf69] transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-[#d7bf69] transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-t border-[#d7bf69]/30"
        >
          <nav className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`block w-full text-left text-white hover:text-[#d7bf69] transition-colors py-2 cursor-pointer ${
                  currentPage === link.page ? 'text-[#d7bf69]' : ''
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => {
                onNavigate('registration');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#d7bf69] text-black px-6 py-2.5 rounded-lg gold-glow-hover mt-4 cursor-pointer"
            >
              Book Strategy Call
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}