
import React, { useEffect, useState, useCallback, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const requestRef = useRef<number>();
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        || window.innerWidth < 768 
        || ('ontouchstart' in window);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const updateCursor = useCallback((e: MouseEvent) => {
    if (isMobile) return;
    setPosition({ x: e.clientX, y: e.clientY });
  }, [isMobile]);

  const updateFollower = useCallback(() => {
    if (isMobile) return;
    
    setFollowerPosition(prev => ({
      x: prev.x + (position.x - prev.x) * 0.12,
      y: prev.y + (position.y - prev.y) * 0.12
    }));

    requestRef.current = requestAnimationFrame(updateFollower);
  }, [position, isMobile]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    if (isMobile) return;
    
    const target = e.target as HTMLElement;
    if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('hover-target')) {
      setIsHovering(true);
    }
  }, [isMobile]);

  const handleMouseOut = useCallback((e: MouseEvent) => {
    if (isMobile) return;
    
    const target = e.target as HTMLElement;
    if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('hover-target')) {
      setIsHovering(false);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    document.addEventListener('mousemove', updateCursor, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    requestRef.current = requestAnimationFrame(updateFollower);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [updateCursor, handleMouseOver, handleMouseOut, updateFollower, isMobile]);

  // Update cursor position with transforms for better performance
  useEffect(() => {
    if (cursorRef.current && !isMobile) {
      cursorRef.current.style.transform = `translate3d(${position.x - 6}px, ${position.y - 6}px, 0)`;
    }
  }, [position, isMobile]);

  useEffect(() => {
    if (followerRef.current && !isMobile) {
      followerRef.current.style.transform = `translate3d(${followerPosition.x - 14}px, ${followerPosition.y - 14}px, 0)`;
    }
  }, [followerPosition, isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{ left: 0, top: 0 }}
      />
      
      <div
        ref={followerRef}
        className="cursor-follower"
        style={{ left: 0, top: 0 }}
      />
    </>
  );
};

export default CustomCursor;
