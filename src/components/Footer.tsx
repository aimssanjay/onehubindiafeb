import {
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Pin } from "lucide-react";

interface FooterProps {
  onNavigate: (
    page:
      | "home"
      | "about"
      | "contact"
      | "services"
      | "influencers"
      | "case-studies"
      | "registration"
  ) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: "Home", page: "home" as const },
    { name: "About", page: "about" as const },
    { name: "Services", page: "services" as const },
    { name: "Influencers", page: "influencers" as const },
    { name: "Case Studies", page: "case-studies" as const },
    { name: "Contact", page: "contact" as const },
  ];

  const services = [
    "Influencer Campaigns",
    "Social Media Management",
    "UGC Production",
    "Paid Amplification",
    "Creator Management",
    "Analytics",
  ];

  const handleNavClick = (page: typeof quickLinks[0]["page"]) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-[#d7bf69]/30 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Logo */}
          <div className="md:col-span-3">
            <img
              src="https://onehub.ae/wp-content/uploads/2023/10/One-Hub-Logo.webp"
              alt="TheOneHub.in"
              className="h-8 mb-3"
            />
            <p className="text-[#E0E0E0] text-sm">
              Premium influencer marketing for brands that demand excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className="text-[#E0E0E0] hover:text-[#d7bf69] text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="mb-3 text-white">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick("home")}
                    className="text-[#E0E0E0] hover:text-[#d7bf69] text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-5">
            <h4 className="mb-3 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-[#E0E0E0]">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-[#d7bf69]" />
                <a href="mailto:info@theonehub.in">info@theonehub.in</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[#d7bf69]" />
                <a href="tel:+919811475519">+91 9811475519</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-[#d7bf69]" />
                <span>
                  C120, 2nd floor, flat no 1, Paryavaran Complex, New Delhi 110030
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d7bf69]/20 pt-6 text-center text-sm text-[#E0E0E0]">
          <p>
            © 2025 OneHubindia. All rights reserved. Design and Developed by{" "}
            <a
              href="https://www.rewind.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d7bf69] hover:underline font-semibold"
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
