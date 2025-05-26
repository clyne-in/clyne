
import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles
    const particleCount = 50;
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 2 + 's';
      container.appendChild(particle);
      particlesRef.current.push(particle);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      particlesRef.current.forEach((particle, index) => {
        const rect = particle.getBoundingClientRect();
        const particleX = rect.left + rect.width / 2;
        const particleY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(clientX - particleX, 2) + Math.pow(clientY - particleY, 2)
        );

        const maxDistance = 100;
        const force = Math.max(0, (maxDistance - distance) / maxDistance);

        const angle = Math.atan2(clientY - particleY, clientX - particleX);
        const moveX = Math.cos(angle) * force * 20;
        const moveY = Math.sin(angle) * force * 20;

        particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        particle.style.opacity = String(0.3 + force * 0.7);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      particlesRef.current.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return <div ref={containerRef} className="particles-container" />;
};

export default ParticleBackground;
