// components/HeroSection.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const donut1Ref = useRef(null);
  const donut2Ref = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    // Dynamically import ScrollTrigger in the browser
    if (typeof window !== 'undefined') {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        // 1) Fade + zoom intro
        const tl = gsap.timeline({
          defaults: { duration: 1, ease: 'power1.out' }
        });
        tl.from(headlineRef.current, {
          opacity: 0,
          scale: 0.95,
          transformOrigin: 'center center'
        })
        .from(
          subRef.current,
          {
            opacity: 0,
            scale: 0.95,
            transformOrigin: 'center center'
          },
          '+=0.1'
        );

        // 2) Parallax on scroll
        [ 
          { el: headlineRef.current, yPercent: 30 },
          { el: subRef.current,   yPercent: 40 }
        ].forEach(({ el, yPercent }) => {
          gsap.to(el, {
            yPercent,
            ease: 'none',
            scrollTrigger: {
              trigger: '#event-management-hero',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        });
      });
    }

    // 3) Donut float (runs on both server and client, but does nothing until mounted)
    const animateDonut = (el) => {
      const x = gsap.utils.random(-100, 100);
      const y = gsap.utils.random(-100, 100);
      gsap.to(el, {
        x,
        y,
        duration: 12,
        ease: 'power1.inOut',
        onComplete: () => animateDonut(el),
      });
    };
    if (donut1Ref.current) animateDonut(donut1Ref.current);
    if (donut2Ref.current) animateDonut(donut2Ref.current);
  }, []);

  return (
    <section id="event-management-hero">
      <div className="hero hero--fullscreen vh-100 position-relative hero-trigger">
        <div className="container h-100 position-relative">
          <div className="row align-items-center h-100">
            <div className="col-12 col-md-10 offset-md-1">
              <div className="hero-title text-center">
                <h1 ref={headlineRef} className="display-2 hero-title__headline text-white mb-3 mb-lg-5">
                  High-Impact Events for Teams, Leaders, and Changemakers
                </h1>
                <p ref={subRef} className="hero-title__subheadline lead text-white">
                  From corporate retreats and association conferences to government summits, we plan and create experiences that move people and make your mission unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>

          <img src="/images/donut-white.svg" className="hero__donut1 unselectable" alt="" ref={donut1Ref} />

          <img src="/images/donut.svg" className="hero__donut2 unselectable" alt="" ref={donut2Ref} />

      </div>
    </section>
  );
};

export default HeroSection;
