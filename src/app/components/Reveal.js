// components/Reveal.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Reveal = ({ children, index }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    const element = revealRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        delay: index * 0.2, 
      }
    );
  }, [index]);

  return (
    <div ref={revealRef} className="reveal">
      {children}
    </div>
  );
};

export default Reveal;
