
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Award, Users, Headphones, Zap, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising on quality. We understand the importance of meeting deadlines.'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'High-quality work that exceeds expectations. Every project is crafted with attention to detail and precision.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled professionals with years of experience across multiple domains and cutting-edge technologies.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to assist you whenever you need help or have questions.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Latest technologies and innovative solutions to keep your business ahead of the competition.'
  },
  {
    icon: Shield,
    title: 'Reliable',
    description: 'Consistent and dependable service delivery. We build long-term partnerships with our clients.'
  }
];

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        '.reason-card',
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
    <section id="why-choose-us" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div ref={sectionRef}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text"
          >
            Why Choose Us?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="reason-card glass-card p-8 rounded-2xl hover-lift hover-target text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">
                  <reason.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
