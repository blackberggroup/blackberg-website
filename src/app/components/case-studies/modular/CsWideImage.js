import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CsWideImage = ({ section }) => {
  const { wideImage } = section;
  const containerRef = useRef(null);
  const imageRef     = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start:   'top 60%',             
        toggleActions: 'play none none none',
        once:    true,                  
      }
    });

    tl.set(containerRef.current, { autoAlpha: 0 });

    tl.to(containerRef.current, { autoAlpha: 1, duration: 0 })
      .from(containerRef.current, {
        xPercent: -100,
        duration: 1.5
      })
      .from(imageRef.current, {
        xPercent: 100,
        scale:    1.3,
        duration: 1.5
      }, '<');

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section className="pb-4">
      <div className="container">
        <div className="row">
          <div className="col-12 rounded-4 reveal-image">
            <div className="inner" ref={containerRef}>
              <Image
                src={wideImage.url}
                alt={wideImage.altText}
                fill
                ref={imageRef}
                className="img-fluid rounded-4 w-100 position-relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CsWideImage;