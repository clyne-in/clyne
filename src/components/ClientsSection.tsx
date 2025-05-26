
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { name: 'TechCorp', project: 'E-commerce Platform' },
  { name: 'StartupX', project: 'Mobile App' },
  { name: 'DesignStudio', project: 'Portfolio Website' },
  { name: 'FinanceFlow', project: 'Banking Dashboard' },
  { name: 'HealthTech', project: 'Telemedicine App' },
  { name: 'EduLearn', project: 'Learning Platform' },
];

const ClientsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        '.client-card',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
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
    <section id="clients" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div ref={sectionRef}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text"
          >
            Our Clients
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="client-card glass-card p-8 rounded-2xl text-center hover-lift hover-target"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {client.name.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
                <p className="text-white/60">{client.project}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
