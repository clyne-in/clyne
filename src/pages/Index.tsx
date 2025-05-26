
import React from 'react';
import CustomCursor from '../components/CustomCursor';
import ParticleBackground from '../components/ParticleBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ProcessSection from '../components/ProcessSection';
import TechStackSection from '../components/TechStackSection';
import ClientsSection from '../components/ClientsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen animated-bg text-white overflow-x-hidden">
      <CustomCursor />
      <ParticleBackground />
      <Navigation />
      <FloatingWhatsApp />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <TechStackSection />
        {/* <ClientsSection />
        <TestimonialsSection /> */}
        <FAQSection />
        <ContactSection />
      </main>
      
      <footer className="py-8 text-center text-white/60 border-t border-white/10">
        <p>&copy; 2025 CLYNE. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
