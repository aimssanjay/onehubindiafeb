import { Instagram, Linkedin, Youtube, Facebook, Mail, Phone, MapPin } from 'lucide-react';
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
    <footer className="bg-black border-t border-[#d7bf69]/30 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-3">
            <img
              src="https://onehub.ae/wp-content/uploads/2023/10/One-Hub-Logo.webp"
              alt="TheOneHub.in"
              className="h-8 mb-3"
            />
            <p className="text-[#E0E0E0] text-sm leading-relaxed">
              Premium influencer marketing for brands that demand excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="mb-3 text-white text-base">Quick Links</h4>
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
          <div className="md:col-span-2">
            <h4 className="mb-3 text-white text-base">Services</h4>
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
          <div className="md:col-span-5">
            <h4 className="mb-3 text-white text-base">Contact</h4>
            <ul className="space-y-2.5 text-sm text-[#E0E0E0]">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-[#d7bf69] flex-shrink-0" />
                <a
                  href="mailto:info@theonehub.in"
                  className="hover:text-[#d7bf69] transition-colors"
                >
                  info@theonehub.in
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[#d7bf69] flex-shrink-0" />
                <a 
                  href="tel:+919811475519" 
                  className="hover:text-[#d7bf69] transition-colors"
                >
                  +91 9811475519
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-[#d7bf69] flex-shrink-0" />
                <span>C120, 2nd floor, flat no 1, Paryavaran Complex, New Delhi 110030</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-2.5 mt-4">
              <a
                href="https://snapchat.com/t/QFwYFxUS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#d7bf69]/50 text-[#d7bf69] flex items-center justify-center hover:bg-[#d7bf69] hover:text-black transition-all"
                aria-label="Snapchat"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3 0 .727-.09 1.216-.18.336-.06.687-.12 1.033-.12.36 0 .63.09.814.18.246.135.48.33.615.54.18.27.27.57.27.87 0 .87-.63 1.38-1.187 1.83-.345.27-.705.555-.855.87-.12.24-.12.54-.12.765 0 .285.015.57.045.855.09 1.005.27 2.22 1.395 2.97.465.315.735.54.735.96 0 .18-.045.33-.135.48-.27.45-1.065.705-1.725.87-.285.075-.57.12-.825.18l-.015.015c-.09.27-.18.615-.24.87-.075.345-.135.705-.21 1.065-.015.075-.03.15-.045.225-.105.48-.21.975-.42 1.38-.225.42-.57.78-1.005 1.005-.465.24-.99.345-1.53.345-.61 0-1.2-.12-1.86-.33-.57-.18-1.155-.39-1.725-.57-.465-.135-.93-.24-1.38-.24-.435 0-.885.105-1.335.24-.57.18-1.155.39-1.725.57-.66.21-1.25.33-1.86.33-.54 0-1.065-.105-1.53-.345-.435-.225-.78-.585-1.005-1.005-.21-.405-.315-.9-.42-1.38-.015-.075-.03-.15-.045-.225-.075-.36-.135-.72-.21-1.065-.06-.255-.15-.6-.24-.87l-.015-.015c-.255-.06-.54-.105-.825-.18-.66-.165-1.455-.42-1.725-.87-.09-.15-.135-.3-.135-.48 0-.42.27-.645.735-.96 1.125-.75 1.305-1.965 1.395-2.97.03-.285.045-.57.045-.855 0-.225 0-.525-.12-.765-.15-.315-.51-.6-.855-.87-.557-.45-1.187-.96-1.187-1.83 0-.3.09-.6.27-.87.135-.21.369-.405.615-.54.184-.09.454-.18.814-.18.346 0 .697.06 1.033.12.489.09.916.18 1.216.18.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847 1.583-3.545 4.94-3.821 5.93-3.821z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/onehub.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#d7bf69]/50 text-[#d7bf69] flex items-center justify-center hover:bg-[#d7bf69] hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/people/OneHub-India/61584802413879/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#d7bf69]/50 text-[#d7bf69] flex items-center justify-center hover:bg-[#d7bf69] hover:text-black transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@onehub_india"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#d7bf69]/50 text-[#d7bf69] flex items-center justify-center hover:bg-[#d7bf69] hover:text-black transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/onehub-india/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#d7bf69]/50 text-[#d7bf69] flex items-center justify-center hover:bg-[#d7bf69] hover:text-black transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://in.pinterest.com/onehubinfluencers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#d7bf69]/50 text-[#d7bf69] flex items-center justify-center hover:bg-[#d7bf69] hover:text-black transition-all"
                aria-label="Pinterest"
              >
                <Pin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d7bf69]/20 pt-6">
          <p className="text-center text-[#E0E0E0] text-sm">
            © 2025 OneHubindiaaa. All rights reserved. Design and Developed by{" "}
            <a 
              href="https://www.rewind.ae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#d7bf69] hover:underline"
            >
              Rewind Productions
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}