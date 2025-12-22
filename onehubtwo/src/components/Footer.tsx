import { Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';
import { Pin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'contact' | 'services' | 'influencers' | 'case-studies' | 'registration') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: 'Home', page: 'home' as const },
    { name: 'About', page: 'about' as const },
    { name: 'Services', page: 'services' as const },
    { name: 'Influencers', page: 'influencers' as const },
    { name: 'Case Studies', page: 'case-studies' as const },
    { name: 'Contact', page: 'contact' as const }
  ];
  const services = [
    'Influencer Campaigns',
    'Social Media Management',
    'UGC Production',
    'Paid Amplification',
    'Creator Management',
    'Analytics',
  ];

  const handleNavClick = (page: typeof quickLinks[0]['page']) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t-2 border-[#d7bf69] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <img
              src="https://onehub.ae/wp-content/uploads/2023/10/One-Hub-Logo.webp"
              alt="TheOneHub.in"
              className="h-10 mb-4"
            />
            <p className="text-[#E0E0E0] text-sm">
              Premium influencer marketing for brands that demand excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className="text-[#E0E0E0] hover:text-[#d7bf69] transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => {
                      onNavigate('home');
                      setTimeout(() => {
                        const element = document.getElementById('services');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="text-[#E0E0E0] hover:text-[#d7bf69] transition-colors text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-[#E0E0E0]">
              <li>
                <a
                  href="mailto:info@onehub.in"
                  className="hover:text-[#d7bf69] transition-colors cursor-pointer"
                >
                  info@onehub.in
                </a>
              </li>
              <li>
                <a href="tel:+919811475519" className="hover:text-[#d7bf69] transition-colors cursor-pointer">
                  +91 9811475519
                </a>
              </li>
              <li className="pt-2">New Delhi, India</li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 flex-wrap">
              <a
                href="https://www.instagram.com/onehub.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#d7bf69] text-white flex items-center justify-center hover:bg-[#d7bf69] hover:text-black transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/people/OneHub-India/61584802413879/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#d7bf69] text-white flex items-center justify-center hover:bg-[#d7bf69] hover:text-black transition-all cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@onehub_india"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#d7bf69] text-white flex items-center justify-center hover:bg-[#d7bf69] hover:text-black transition-all cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/onehub-india/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#d7bf69] text-white flex items-center justify-center hover:bg-[#d7bf69] hover:text-black transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://in.pinterest.com/onehubinfluencers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#d7bf69] text-white flex items-center justify-center hover:bg-[#d7bf69] hover:text-black transition-all cursor-pointer"
                aria-label="Pinterest"
              >
                <Pin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d7bf69]/30 pt-8">
          <p className="text-center text-[#E0E0E0] text-sm">
            © 2025 OneHub. All rights reserved. Crafted for luxury brands and premium
            creators.
          </p>
        </div>
      </div>
    </footer>
  );
}