"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const CtaSmall = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const el = wrapperRef.current;

      gsap.set(el, { opacity: 0, y: 20 });

      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",             
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section id="event-management-cta-small" className="pb-8 pb-lg-10">
      <div className="container">
        <div ref={wrapperRef} className="cta-small-wrapper p-7 rounded-4 bg-tertiary">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8">
              <div className="cta-small__content text-white">
                <h3 className="mb-3 mb-lg-5">Ready to Make Your Next Event Unforgettable?</h3>
                <p className="lead mb-4 mb-lg-0">Let&apos;s map your vision, align your stakeholders, and craft an experience that moves people and delivers measurable impact.</p>
              </div>
            </div>
            <div className="col d-flex justify-content-start justify-content-lg-end">
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
    </section>
  );
};

export default CtaSmall;
