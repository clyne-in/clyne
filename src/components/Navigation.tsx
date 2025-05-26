
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8; // Approximate hero section height
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setIsNavExpanded(false);
  };

  const navigationItems = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Why Us', id: 'why-choose-us' },
    { name: 'Process', id: 'process' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all  duration-500 ${
        isScrolled ? 'glass-card backdrop-blur-md py-2' : 'glass-card backdrop-blur-md bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 hover-target relative"
            onMouseEnter={() => isScrolled && setIsNavExpanded(true)}
            onMouseLeave={() => isScrolled && setIsNavExpanded(false)}
          >
            <img 
              src="../logo-only.png"               
              alt="CLYNE Logo" 
              className="w-10 h-10 rounded-lg"
            />
            <motion.span 
              className="text-2xl font-bold gradient-text"
              animate={{
                opacity: isScrolled && !isNavExpanded ? 0 : 1,
                width: isScrolled && !isNavExpanded ? 0 : 'auto'
              }}
              transition={{ duration: 0.3 }}
            >
              CLYNE
            </motion.span>

            {/* Expanded Navigation on Logo Hover (Desktop) */}
            <AnimatePresence>
              {isScrolled && isNavExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:flex absolute left-full ml-8 space-x-6 bg-black/20 backdrop-blur-md rounded-lg px-4 py-2"
                >
                  {navigationItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className="text-white/80 hover:text-purple-400 transition-colors duration-300 hover-target relative group whitespace-nowrap"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Desktop Menu - Hidden when scrolled */}
          <motion.div 
            className="hidden md:flex space-x-8"
            animate={{
              opacity: isScrolled ? 0 : 1,
              pointerEvents: isScrolled ? 'none' : 'auto'
            }}
            transition={{ duration: 0.3 }}
          >
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-purple-400 transition-colors duration-300 hover-target relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-purple-400 transition-colors hover-target"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 glass-card backdrop-blur-md rounded-lg p-4"
            >
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/80 hover:text-purple-400 transition-colors duration-300 text-left py-2"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
