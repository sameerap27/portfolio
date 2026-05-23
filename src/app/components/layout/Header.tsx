'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHoveringTop, setIsHoveringTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header if at top or scrolling up
      if (currentScrollY < 50 || currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        // Hide header if scrolling down past 50px
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Show header if mouse is near the top of the screen (within 30px)
      if (e.clientY < 30) {
        setIsHoveringTop(true);
      } else {
        setIsHoveringTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <header className={isVisible || isHoveringTop ? 'header-visible' : 'header-hidden'}>
      <nav className="nav">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" className="resume-link">Resume</a>
      </nav>
    </header>
  );
}
