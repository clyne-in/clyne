
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from './ui/badge';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies',
    features: ['React/Next.js', 'Node.js', 'Database Design', 'API Integration'],
    price: 'Starting from $500',
    available: true
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization'],
    price: 'Starting from $1,200',
    available: true
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, user-centered designs that convert visitors into customers',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    price: 'Starting from $300',
    available: true
  },
  {
    title: 'Graphic Design',
    description: 'Eye-catching visual designs for all your branding and marketing needs',
    features: ['Logo Design', 'Brand Identity', 'Print Design', 'Marketing Materials'],
    price: 'Starting from $150',
    available: false
  },
  {
    title: 'Video Editing & Production',
    description: 'Professional video content creation from concept to final delivery',
    features: ['Video Editing', 'Motion Graphics', 'Color Grading', 'Audio Mixing'],
    price: 'Starting from $200',
    available: true
  },
  {
    title: 'Content Creation',
    description: 'Engaging content that tells your story and connects with your audience',
    features: ['Script Writing', 'Thumbnail Design', 'Social Media Content', 'Blog Writing'],
    price: 'Starting from $100',
    available: true
  },
  {
    title: 'AI & ML Services',
    description: 'Cutting-edge AI solutions and machine learning implementations',
    features: ['AI Integration', 'Custom ML Models', 'Data Analysis', 'Automation'],
    price: 'Starting from $800',
    available: false
  },
  {
    title: 'Animation & Motion Graphics',
    description: 'Dynamic animations and motion graphics that bring your ideas to life',
    features: ['2D Animation', '3D Animation', 'Motion Graphics', 'Character Design'],
    price: 'Starting from $400',
    available: false
  },
  {
    title: 'SEO & Digital Marketing',
    description: 'Boost your online presence and reach your target audience effectively',
    features: ['SEO Optimization', 'Keyword Research', 'Content Strategy', 'Analytics'],
    price: 'Starting from $250',
    available: false
  },
  {
    title: 'Training & Consultation',
    description: 'Expert training and consultation to upskill your team and optimize workflows',
    features: ['Technical Training', 'Workshops', 'Best Practices', 'Strategy Planning'],
    price: 'Starting from $300',
    available: false
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        '.service-card',
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
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div ref={sectionRef}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text"
          >
            Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: service.available ? 1.02 : 1.01 }}
                className={`service-card glass-card p-8 rounded-2xl hover-lift hover-target relative ${!service.available ? 'opacity-75' : ''}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <div className="flex flex-col items-end gap-2">
                    <Badge 
                      variant={service.available ? "default" : "secondary"}
                      className={service.available ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-500"}
                    >
                      {service.available ? "Available" : "Coming Soon"}
                    </Badge>
                    <span className={`text-lg font-semibold px-3 py-1 rounded-full text-sm ${
                      service.available 
                        ? 'text-blue-400 bg-blue-500/20' 
                        : 'text-gray-400 bg-gray-500/20'
                    }`}>
                      {service.price}
                    </span>
                  </div>
                </div>
                <p className="text-white/70 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/60">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        service.available 
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                          : 'bg-gray-500'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
