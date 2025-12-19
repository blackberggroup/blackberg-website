import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CsNarrowRegularText = ({ section }) => {
  const { wideHeadline, wideBody } = section;
  const containerRef = useRef(null);

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
      className="py-4 content-rich-text narrow-regular-text"
    >
      <div className="container">
        <div className="col-12">
          {wideHeadline && <h2 className="mb-4">{wideHeadline}</h2>}
          {wideBody?.html && (
            <div
              className="rich-text prose"
              dangerouslySetInnerHTML={{ __html: wideBody.html }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CsNarrowRegularText;