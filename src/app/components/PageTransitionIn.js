import { useEffect, useRef } from "react";
import { Overlay } from "../lib/overlay";

const PageTransitionIn = ({ children }) => { 
  
  const gridOverlayRef = useRef(null);

  useEffect(() => {

    const overlayElement = document.querySelector('.overlay');
    overlayElement.classList.add("loading");
    const overlay = new Overlay(overlayElement, {
        rows: 9,
        columns: 17
    });

    overlay.show({
      duration: 0,
      stagger: {
          grid: [overlay.options.rows, overlay.options.columns],
          from: 'edges',
          each: 0.025
      }
  })
  .then(() => {

    overlayElement.classList.remove("loading");

      overlay.hide({
          duration: 0.5,
          ease: 'power1',
          stagger: {
              grid: [overlay.options.rows, overlay.options.columns],
              from: 'center',
              each: 0.025
          }
      }).then(() => {});
      
  })

}, []);    

   return (
     <div className="overlay" ref={gridOverlayRef}>
        {children}
    </div>
)};
export default PageTransitionIn;