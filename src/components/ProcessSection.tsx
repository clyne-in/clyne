
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We understand your requirements and goals through detailed consultation.'
  },
  {
    step: '02',
    title: 'Design',
    description: 'Creating wireframes and mockups that align with your brand vision.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Building your project with cutting-edge technologies and best practices.'
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Testing, optimization, and launching your project on time.'
  }
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        '.process-step',
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
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
    <section id="process" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div ref={sectionRef}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text"
          >
            Our Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="process-step text-center hover-target group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-white/70 group-hover:text-white transition-colors duration-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
