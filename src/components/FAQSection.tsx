
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'How to make an order?',
    answer: 'To make an order, just click the whatsapp icon in the bottom right corner.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on complexity and scope. Simple websites take 1-2 weeks, while complex applications can take 4-8 weeks. We provide detailed timelines during our initial consultation.'
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we offer ongoing support and maintenance packages. This includes bug fixes, updates, and technical support to ensure your project continues to run smoothly.'
  },
  {
    question: 'Can you work with existing designs or do you create from scratch?',
    answer: 'We can work both ways! We can implement your existing designs or create completely new designs from scratch based on your requirements and brand guidelines.'
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern web technologies like React, Node.js, mobile development with React Native and Flutter, AI/ML with Python and TensorFlow, and design tools like Figma and Adobe Creative Suite.'
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We maintain regular communication through your preferred channels (email, Slack, WhatsApp). We provide regular updates, milestone reports, and are available for calls when needed.'
  },
  {
    question: 'What are your payment terms?',
    answer: 'We typically work with a 50% upfront payment and 50% upon completion for smaller projects. For larger projects, we can arrange milestone-based payments. Payment methods include bank transfer, PayPal, and other secure options.'
  },
  {
    question: 'Do you sign NDAs and contracts?',
    answer: 'Absolutely! We take confidentiality seriously and are happy to sign NDAs and detailed contracts to protect your intellectual property and establish clear project terms.'
  },
  {
    question: 'Can you help with SEO and digital marketing?',
    answer: 'Yes, we offer comprehensive SEO services including keyword research, on-page optimization, content strategy, and digital marketing to help improve your online visibility and reach.'
  }
];

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        '.faq-item',
        { y: 50, opacity: 0 },
        {
          y: 0,
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

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div ref={sectionRef}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item glass-card rounded-2xl overflow-hidden hover-target"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    size={20} 
                    className={`text-purple-400 transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-white/10">
                    <p className="text-white/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
