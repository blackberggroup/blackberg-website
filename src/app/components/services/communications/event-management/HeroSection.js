import React, { useEffect, useRef } from 'react';
import Link from "next/link";

const HeroSection = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const donut1Ref = useRef(null);
  const donut2Ref = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Dynamically import GSAP + plugins only on client
    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]).then(([gsapModule, ScrollTriggerModule]) => {
      const gsap = gsapModule.gsap || gsapModule.default;
      const ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;
      gsap.registerPlugin(ScrollTrigger);

      // Set initial state for all animated elements
      gsap.set([heroRef.current, bgRef.current], { opacity: 0, scale: 0.95 });
      gsap.set(headlineRef.current, { opacity: 0, scale: 0.95 });
      gsap.set(subRef.current, { opacity: 0, scale: 0.95 });
      gsap.set(btnRef.current, { opacity: 0, scale: 0.95 });

      // Timeline for hero+bg, then headline, then subheadline, then button
      const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power1.out' } });
      tl.to([heroRef.current, bgRef.current], {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out'
      })
        .to(headlineRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'power2.out'
        })
        .to(subRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'power2.out'
        }, "-=0.4")
        .to(btnRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'power2.out'
        }, "-=0.3");

      // Parallax scroll effects
      [
        { el: headlineRef.current, yPercent: 30 },
        { el: subRef.current, yPercent: 40 },
        { el: btnRef.current, yPercent: 55 },
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

      // Donut animation logic
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
    });
  }, []);

  // Slow smooth scroll to #next-section using dynamic import of ScrollToPlugin
  const handleHeroBtnClick = async (e) => {
    e.preventDefault();
    const nextSection = document.getElementById('event-management-specialize-in');
    if (nextSection) {
      const gsapModule = await import('gsap');
      const scrollToPluginModule = await import('gsap/ScrollToPlugin');
      const gsap = gsapModule.gsap || gsapModule.default;
      const ScrollToPlugin = scrollToPluginModule.ScrollToPlugin || scrollToPluginModule.default;
      gsap.registerPlugin(ScrollToPlugin);

      gsap.to(window, {
        duration: 2, // seconds (make higher for even slower)
        scrollTo: { y: nextSection, offsetY: 0 },
        ease: "power2.inOut"
      });
    }
  };

  return (
    <section id="event-management-hero">
      <div
        className="hero hero--fullscreen vh-100 position-relative hero-trigger"
        ref={heroRef}
      >
        <div
          ref={bgRef}
          className="hero__bg"
        />
        <div className="container h-100 position-relative z-4">
          <div className="row align-items-center h-100">
            <div className="col-12 col-md-10 offset-md-1">
              <div className="hero-title text-center">
                <h1 ref={headlineRef} className="display-2 hero-title__headline text-white mb-3 mb-lg-5">
                  High-Impact Events for Teams, Leaders, and Changemakers
                </h1>
                <p ref={subRef} className="hero-title__subheadline lead text-white mb-6">
                  From corporate retreats and association conferences to government summits, we plan and create experiences that move people and make your mission unforgettable.
                </p>
                <Link
                  href="#"
                  className="btn btn-secondary hero__btn"
                  aria-label="Schedule a Discovery Call"
                  ref={btnRef}
                  onClick={handleHeroBtnClick}
                >
                  Learn More
                  <img src="/images/arrow-narrow-down.svg" className="ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src="/images/donut-white.svg" className="hero__donut1 unselectable" alt="" ref={donut1Ref} style={{ zIndex: 2, position: "absolute" }} />
        <img src="/images/donut.svg" className="hero__donut2 unselectable" alt="" ref={donut2Ref} style={{ zIndex: 2, position: "absolute" }} />
      </div>
    </section>
  );
};

export default HeroSection;
