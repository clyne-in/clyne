
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce solution with payment integration',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Shopify'],
    liveUrl: 'https://doggystickers.vercel.app/',
    githubUrl: 'https://github.com/btahir/next-shopify-starter'
  },
  {
    title: 'Fitness Mobile App',
    category: 'App Development',
    description: 'Cross-platform fitness tracking application',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop',
    technologies: ['React Native', 'Firebase', 'Redux'],
    liveUrl: 'https://github.com/Srujangv05/Beast-Fitness',
    githubUrl: 'https://github.com/Srujangv05/Beast-Fitness'
  },
  {
    title: 'Brand Identity Design',
    category: 'Graphic Design',
    description: 'Complete brand identity package for startup',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    technologies: ['Illustrator', 'Photoshop', 'Figma'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Product Launch Video',
    category: 'Video Production',
    description: 'Promotional video with motion graphics',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
    technologies: ['After Effects', 'Premiere Pro', 'Cinema 4D'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'AI Chatbot Integration',
    category: 'AI & ML',
    description: 'Custom AI chatbot for customer service',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'React'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    description: 'Modern dashboard design for analytics platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    technologies: ['Figma', 'React', 'Chart.js', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        '.portfolio-card',
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
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div ref={sectionRef}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text"
          >
            Our Work
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="portfolio-card glass-card rounded-2xl overflow-hidden hover-lift hover-target group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <a href={item.liveUrl} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink size={16} className="text-white" />
                    </a>
                    <a href={item.githubUrl} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Github size={16} className="text-white" />
                    </a> */}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  <p className="text-white/70 mb-4 text-sm">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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

export default PortfolioSection;
