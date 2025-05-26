
import React, { useEffect, useRef } from 'react';

interface SectionParticlesProps {
  particleCount?: number;
  color?: string;
  size?: number;
}

const SectionParticles: React.FC<SectionParticlesProps> = ({ 
  particleCount = 30, 
  color = '#6366f1',
  size = 2 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'section-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.backgroundColor = color;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.animationDelay = Math.random() * 3 + 's';
      particle.style.animationDuration = (3 + Math.random() * 2) + 's';
      container.appendChild(particle);
      particlesRef.current.push(particle);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      particlesRef.current.forEach((particle) => {
        const particleRect = particle.getBoundingClientRect();
        const particleX = particleRect.left - rect.left + particleRect.width / 2;
        const particleY = particleRect.top - rect.top + particleRect.height / 2;

        const distance = Math.sqrt(
          Math.pow(x - particleX, 2) + Math.pow(y - particleY, 2)
        );

        const maxDistance = 150;
        const force = Math.max(0, (maxDistance - distance) / maxDistance);

        if (force > 0) {
          const angle = Math.atan2(y - particleY, x - particleX);
          const moveX = Math.cos(angle) * force * 30;
          const moveY = Math.sin(angle) * force * 30;

          particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
          particle.style.opacity = String(0.3 + force * 0.7);
        } else {
          particle.style.transform = 'translate(0px, 0px)';
          particle.style.opacity = '0.3';
        }
      });
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      particlesRef.current.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, [particleCount, color, size]);

  return <div ref={containerRef} className="section-particles-container" />;
};

export default SectionParticles;
