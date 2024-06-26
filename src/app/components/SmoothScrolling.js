import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function SmoothScrolling({ children }) {

    const lenisRef = useRef()
  
    useEffect(() => {
      function update(time) {
        lenisRef.current?.lenis?.raf(time * 1000)
      }
    
      gsap.ticker.add(update)
    
      return () => {
        gsap.ticker.remove(update)
      }
    })

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1, smoothTouch: false, smoothWheel: true}}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;