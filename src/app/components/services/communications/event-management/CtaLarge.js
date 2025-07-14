"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const CtaSmall = () => {
  const arrowRef   = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const arrow = arrowRef.current;

        gsap.to(arrow, {
            rotation: 20,      // 100 degrees clockwise
            ease:     "sine.out",   // linear progression
            scrollTrigger: {
                trigger: '#event-insights',               // base it on scrolling through this section
                start:   "top bottom",     // when top of section hits bottom of viewport
                end:     "bottom top",     // until bottom of section hits top of viewport
                scrub:   true,             // link progress directly to scrollbar
            },
        });
    });
  }, []);

  return (
    <section id="event-management-cta-large" className="pb-8 pb-lg-10">
      <div className="container position-relative">
        <div className="cta-large-wrapper position-relative overflow-hidden p-7 rounded-4 z-2">
          <div className="row align-items-center position-relative z-2">
            <div className="col-12 col-lg-10 offset-lg-1 text-center">
              <div className="cta-small__content text-white">
                <h2 className="display-5 mb-3 mb-lg-5">Let&apos;s Create an Experience That Resonates</h2>
                <h3 className="mb-4">Planning an event, meeting, or workshop?</h3>
                <p className="lead">Let&apos;s talk about how Blackberg&apos;s integrated event services can help you design, manage, and deliver a convening that makes a measurable impact.</p>
                <Link
                    href="#"
                    className="btn btn-secondary"
                    aria-label="Schedule a Discovery Call"
                >
                    Schedule a Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="event-management-circle-arrow" ref={arrowRef} className="event-management-circle-arrow">
            <img src="/images/circle-arrow.svg" />
        </div>        
      </div>
    </section>
  );
};

export default CtaSmall;
