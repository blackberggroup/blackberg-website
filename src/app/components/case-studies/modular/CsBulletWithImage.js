import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CSBulletWithImage = ({ section }) => {
  const { bulletBody, bulletImage } = section;
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
      className="py-2"
    >
      <div className="container">
      <div className="col-12 col-md-8 col-lg-8 col-xxl-7 mx-auto d-flex">
            {bulletImage?.url && (
            <div className="pe-4 me-2">
                <img
                src={bulletImage.url}
                alt={bulletImage.altText || ''}
                width={64}
                height={64}
                />
            </div>
            )}
            {bulletBody?.html && (
            <div
                className="content-rich-text"
                dangerouslySetInnerHTML={{ __html: bulletBody.html }}
            />
            )}
        </div>
      </div>
    </section>
  );
};

export default CSBulletWithImage;