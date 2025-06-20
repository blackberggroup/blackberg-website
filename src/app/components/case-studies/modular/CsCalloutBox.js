import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CSCalloutBox = ({ section }) => {
  const { calloutBody, variant } = section;
  const containerRef = useRef(null);

  const borderClasses = {
    primary:   'border-primary',
    secondary: 'border-secondary',
    tertiary:  'border-tertiary',
  };
  const borderClass = borderClasses[variant] || borderClasses.primary;

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true,
      },
    });

    tl.from(containerRef.current, {
      y: 50,
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power2.out',
    });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-6 content-rich-text callout-box"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-8 col-xxl-7 mx-auto">
            <div className={`border-start border-4 ${borderClass} ps-4`}>
              {calloutBody?.html && (
                <div
                  className="rich-text prose fst-italic"
                  dangerouslySetInnerHTML={{ __html: calloutBody.html }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSCalloutBox;