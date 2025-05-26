
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    text: 'CLYNE delivered our e-commerce platform in just 3 days. The quality exceeded our expectations and the price was unbeatable!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    company: 'DesignStudio Pro',
    text: 'Amazing team! They built our portfolio website with stunning animations and perfect responsiveness. Highly recommended!',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    company: 'StartupX',
    text: 'Fast, professional, and affordable. CLYNE transformed our mobile app idea into reality in record time.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        '.testimonial-card',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
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
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div ref={sectionRef}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text"
          >
            What Our Clients Say
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="testimonial-card glass-card p-8 rounded-2xl hover-lift hover-target group"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl group-hover:text-pink-400 transition-colors duration-300">★</span>
                  ))}
                </div>
                
                <p className="text-white/80 mb-6 italic group-hover:text-white transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
