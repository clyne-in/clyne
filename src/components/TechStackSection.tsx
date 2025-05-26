
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from './ui/badge';

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  // Available Technologies (for current services)
  { name: 'React', category: 'Frontend', available: true },
  { name: 'Next.js', category: 'Framework', available: true },
  { name: 'Node.js', category: 'Backend', available: true },
  { name: 'TypeScript', category: 'Language', available: true },
  { name: 'Tailwind CSS', category: 'Styling', available: true },
  { name: 'MongoDB', category: 'Database', available: true },
  { name: 'PostgreSQL', category: 'Database', available: true },
  { name: 'AWS', category: 'Cloud', available: true },
  { name: 'React Native', category: 'Mobile', available: true },
  { name: 'Flutter', category: 'Mobile', available: true },
  { name: 'Figma', category: 'Design', available: true },
  { name: 'Adobe XD', category: 'Design', available: true },
  { name: 'Premiere Pro', category: 'Video', available: true },
  { name: 'WordPress', category: 'CMS', available: true },
  { name: 'Google Analytics', category: 'SEO', available: true },
  { name: 'SEMrush', category: 'SEO', available: true },
  { name: 'Ahrefs', category: 'SEO', available: true },
  { name: 'Python', category: 'AI/ML', available: true },
  { name: 'TensorFlow', category: 'AI/ML', available: true },
  { name: 'PyTorch', category: 'AI/ML', available: true },
  { name: 'OpenAI', category: 'AI/ML', available: true },
  
  // Coming Soon Technologies
  { name: 'Swift', category: 'iOS', available: false },
  { name: 'Kotlin', category: 'Android', available: false },
  { name: 'Photoshop', category: 'Graphics', available: false },
  { name: 'Illustrator', category: 'Graphics', available: false },
  { name: 'After Effects', category: 'Animation', available: false },
  { name: 'Blender', category: '3D', available: false },
  { name: 'Cinema 4D', category: '3D', available: false },
  
  
  
];

const TechStackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        '.tech-item',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
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

  const availableTech = technologies.filter(tech => tech.available);
  const comingSoonTech = technologies.filter(tech => !tech.available);

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div ref={sectionRef}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text"
          >
            Tech Stack & Tools
          </motion.h2>
          
          {/* Available Technologies */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Badge className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-lg">
                Currently Available
              </Badge>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {availableTech.map((tech, index) => (
                <motion.div
                  key={`available-${index}`}
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  className="tech-item glass-card p-6 rounded-xl text-center hover-target group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    <span className="text-white font-bold text-lg">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                  
                  <h3 className="text-white font-semibold mb-1 group-hover:text-blue-400 transition-colors duration-300 text-sm">
                    {tech.name}
                  </h3>
                  
                  <p className="text-white/60 text-xs group-hover:text-white/80 transition-colors duration-300">
                    {tech.category}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coming Soon Technologies */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Badge variant="secondary" className="bg-gray-500 text-white px-4 py-2 text-lg">
                Coming Soon
              </Badge>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {comingSoonTech.map((tech, index) => (
                <motion.div
                  key={`coming-soon-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="tech-item glass-card p-6 rounded-xl text-center hover-target group opacity-75"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg mx-auto mb-4 flex items-center justify-center transition-all duration-300">
                    <span className="text-white font-bold text-lg">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                  
                  <h3 className="text-white font-semibold mb-1 transition-colors duration-300 text-sm">
                    {tech.name}
                  </h3>
                  
                  <p className="text-white/60 text-xs transition-colors duration-300">
                    {tech.category}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
