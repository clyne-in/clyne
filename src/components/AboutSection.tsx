
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionParticles from './SectionParticles';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  return (
    <section id="about" className="py-24 px-6 relative">
      <SectionParticles particleCount={25} color="#8b5cf6" size={3} />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div ref={sectionRef} className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
            About CLYNE
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
            We are a cutting-edge Tech service development agency that combines 
            lightning-fast delivery with premium quality at unbeatable prices. 
            Our team of expert developers and designers work around the clock 
            to bring your digital vision to life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-card p-8 rounded-2xl hover-lift hover-target"
            >
              <div className="text-4xl font-bold gradient-text mb-4">20+</div>
              <h3 className="text-xl font-semibold text-white mb-2">Tech Stacks</h3>
              <p className="text-white/60">We working in wide range of tect stacks.</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-card p-8 rounded-2xl hover-lift hover-target"
            >
              <div className="text-4xl font-bold gradient-text mb-4">48h</div>
              <h3 className="text-xl font-semibold text-white mb-2">Average Turnaround</h3>
              <p className="text-white/60">Lightning-fast delivery without compromising quality</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-card p-8 rounded-2xl hover-lift hover-target"
            >
              <div className="text-4xl font-bold gradient-text mb-4">99.9%</div>
              <h3 className="text-xl font-semibold text-white mb-2">Client Satisfaction</h3>
              <p className="text-white/60">Exceptional quality that exceeds expectations</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
