
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
  {
    name: 'Starter',
    price: '$299',
    description: 'Perfect for small businesses',
    features: [
      'Landing Page',
      'Responsive Design',
      'Basic SEO',
      '48h Delivery',
      'Email Support'
    ]
  },
  {
    name: 'Professional',
    price: '$799',
    description: 'For growing businesses',
    features: [
      'Multi-page Website',
      'Custom Design',
      'Advanced SEO',
      'CMS Integration',
      '72h Delivery',
      'Priority Support'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$1,999',
    description: 'For large-scale projects',
    features: [
      'Full Web Application',
      'Custom Backend',
      'API Integration',
      'Database Setup',
      '1 Week Delivery',
      '24/7 Support'
    ]
  }
];

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        '.pricing-card',
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
    <section id="pricing" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div ref={sectionRef}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text"
          >
            Transparent Pricing
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`pricing-card glass-card p-8 rounded-2xl hover-lift hover-target relative group ${
                  plan.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold gradient-text mb-2 group-hover:from-pink-400 group-hover:to-purple-400">
                    {plan.price}
                  </div>
                  <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/70 group-hover:text-white transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 group-hover:from-pink-400 group-hover:to-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover-target">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
