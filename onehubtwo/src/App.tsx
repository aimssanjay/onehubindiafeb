import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustedBrands } from './components/TrustedBrands';
import { Services } from './components/Services';
import { CampaignGallery } from './components/CampaignGallery';
import { InfluencerCategories } from './components/InfluencerCategories';
import { CreatorCarousel } from './components/CreatorCarousel';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { HowItWorks } from './components/HowItWorks';
import { CreatorCorner } from './components/CreatorCorner';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ServicesPage } from './pages/ServicesPage';
import { InfluencersPage } from './pages/InfluencersPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { RegistrationPage } from './pages/RegistrationPage';
import faviconImage from 'https://onehub.ae/wp-content/uploads/2023/10/One-Hub-Logo.webp';

export default function App() {
  // Update document title based on current page
  useEffect(() => {
    document.title = "OneHub Creators Network | Influencer Marketing";
  }, []);

  const getPageFromPath = () => {
    const path = window.location.pathname;
    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    if (path === '/services') return 'services';
    if (path === '/influencers') return 'influencers';
    if (path === '/case-studies') return 'case-studies';
    if (path === '/registration') return 'registration';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact' | 'services' | 'influencers' | 'case-studies' | 'registration'>(getPageFromPath());

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToPage = (page: 'home' | 'about' | 'contact' | 'services' | 'influencers' | 'case-studies' | 'registration') => {
    setCurrentPage(page);
    
    // Update URL
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Expose navigation function globally
  if (typeof window !== 'undefined') {
    (window as any).navigateToPage = navigateToPage;
  }

  return (
    <div className="min-h-screen bg-black">
      <Header currentPage={currentPage} onNavigate={navigateToPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <TrustedBrands />
          <Services />
          <CampaignGallery />
          <InfluencerCategories />
          <CreatorCarousel />
          <WhyChooseUs />
          {/* <CaseStudies /> */}
          <Testimonials />
          <HowItWorks />
          <CreatorCorner />
          <FinalCTA />
        </>
      )}
      
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'influencers' && <InfluencersPage />}
      {currentPage === 'case-studies' && <CaseStudiesPage />}
      {currentPage === 'registration' && <RegistrationPage />}
      
      <Footer onNavigate={navigateToPage} />
    </div>
  );
}