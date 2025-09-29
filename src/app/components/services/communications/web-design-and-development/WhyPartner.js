"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WhyPartner = () => {
  const titleRef = useRef(null);
  const col1Ref  = useRef(null);
  const col2Ref  = useRef(null);
  const col3Ref  = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const elems = [
        titleRef.current,
        col1Ref.current,
        col2Ref.current,
        col3Ref.current,
      ];

      gsap.set(elems, { opacity: 0, y: 20 });

      elems.forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",       
            toggleActions: "play none none none",
          },
          delay: i * 0.1            
        });
      });
    });
  }, []);

  return (
    <section id="why-partner" className="py-8 py-lg-10">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 ref={titleRef} className="display-5 mb-5 section-title">Why Partner with Blackberg? </h2>
            <p>Blackberg uniquely combines deep public sector expertise, mission-driven leadership, and AI innovation to deliver impactful solutions:</p>
          </div>
        </div>
        <div className="row">
          <div ref={col1Ref} className="col-12 col-lg-4 mb-4 mb-md-5 column-corporate">
            <h3 className="h4">Trusted Public Sector Experience</h3>
            <p>Proven track record working with federal agencies, healthcare institutions, and nonprofit organizations.</p>
          </div>
          <div ref={col2Ref} className="col-12 col-lg-4 mb-4 mb-md-5 column-conferences">
            <h3 className="h4">Integrated AI Expertise</h3>
            <p>We seamlessly blend strategic advisory, technical implementation, and ethical governance in every AI initiative.</p>
          </div>
          <div ref={col3Ref} className="col-12 col-lg-4 mb-4 mb-md-5 column-events">
            <h3 className="h4">Mission-Aligned Solutions</h3>
            <p>Deeply committed to public service values, we ensure AI solutions align with your mission and enhance community impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
