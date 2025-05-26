
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Scene3D from './Scene3D';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollToSection = (s) => {
    
      s.scrollIntoView({ behavior: 'smooth' });
    
    
  };


  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Scene3D />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          CLYNE
        </motion.h1>
        
        <motion.p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Premium Tech service development with lightning-fast delivery and unbeatable prices
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        ><a href="#about" style={{scrollBehavior:"smooth"}}>
          <button style={{scrollBehavior:"smooth"}}
          
           className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full hover:scale-105 transition-transform hover-target">
            Get Started
          </button></a>
          <a href="#portfolio" style={{scrollBehavior:"smooth"}}>
          <button className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors hover-target">
            View Our Work
          </button></a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
