import { useEffect, useRef } from "react";
import { Overlay } from "../lib/overlay";

const PageTransitionOut = ({ children }) => { 
  
  const gridOverlayRef = useRef(null);

  useEffect(() => {

    const overlayElement = document.querySelector('.overlay');
    const overlay = new Overlay(overlayElement, {
        rows: 9,
        columns: 17
    });

    overlay.show({
      duration: 0.5,
      stagger: {
          grid: [overlay.options.rows, overlay.options.columns],
          from: 'edges',
          each: 0.025
      }
  })
  .then(() => {})

}, []);    

   return (
     <div className="overlay" ref={gridOverlayRef}>
        {children}
    </div>
)};
export default PageTransitionOut;