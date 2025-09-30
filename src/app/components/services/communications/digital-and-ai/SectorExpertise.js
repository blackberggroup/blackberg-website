"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SectorExpertise = () => {
  const titleRef = useRef(null);
  const col1Ref  = useRef(null);
  const col2Ref  = useRef(null);
  const col3Ref  = useRef(null);
  const col4Ref  = useRef(null);
   const col5Ref  = useRef(null);
    const col6Ref  = useRef(null);
     const col7Ref  = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const elems = [
        titleRef.current,
        col1Ref.current,
        col2Ref.current,
        col3Ref.current,
        col4Ref.current,
        col5Ref.current,
        col6Ref.current,
        col7Ref.current,
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
    <section id="partner-expertise" className="pb-8 pb-lg-11">
      <div className="container">
        <div className="row stats-row justify-content-center d-none">
          <div ref={col1Ref} className="col-12 col-md-6 col-lg-4 mb-4 mb-md-5 d-flex flex-column text-center">
            <div class="ai-hero-card text-white py-5 rounded">
              <img src="/images/projects-delivered-icon.svg" className="mb-3" />
            <h3 className="h4 mb-0">100+</h3>
            <p className="mb-0 text-uppercase text-figtree">Projects Delivered</p>
            </div>
          </div>
          <div ref={col2Ref} className="col-12 col-md-6 col-lg-4 mb-4 mb-md-5 d-flex flex-column text-center">
              <div class="ai-hero-card text-white py-5 rounded">
              <img src="/images/compliance-guarantee.svg" className="mb-3" />
            <h3 className="h4 mb-0">100%</h3>
            <p className="mb-0 text-uppercas text-figtree">WCAG 2.1 Compliance</p>
            </div>
          </div>
          <div ref={col3Ref} className="col-12 col-md-6 col-lg-4 mb-4 mb-md-5 d-flex flex-column text-center">
              <div class="ai-hero-card text-white py-5 rounded">
              <img src="/images/ai-insights.svg" className="mb-3" />
            <h3 className="h4 mb-0">AI</h3>
            <p className="mb-0 text-uppercase text-figtree">Driven Insights</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-9 text-center mx-auto">
            <h2 ref={titleRef} className="display-5 mb-5 section-title">Experience Spanning Sectors</h2>
          </div>
        </div>
        <div className="row mt-4">
          <div ref={col4Ref} className="col-12 col-md-6 col-lg-3 mb-4 mb-md-5 d-flex flex-column text-center">
            <div className="border p-2 rounded d-inline-flex align-self-start mx-auto mb-3">
              <img src="/images/federal-state-icon.svg" className="" />
            </div>
            <h3 className="h4">Federal and State <br /> Government</h3>
            <p>Secure, compliant platforms that make public services clearer, faster, and more accessible.</p>
          </div>
          <div ref={col5Ref} className="col-12 col-md-6 col-lg-3 mb-4 mb-md-5 d-flex flex-column text-center">
             <div className="border p-2 rounded d-inline-flex align-self-start mx-auto mb-3">
              <img src="/images/corporate-companies-icon.svg" className="" />
            </div>
            <h3 className="h4">Corporate <br />Companies</h3>
            <p>High-performance digital experiences built for scale and innovation.</p>
          </div>
          <div ref={col6Ref} className="col-12 col-md-6 col-lg-3 mb-4 mb-md-5 d-flex flex-column text-center">
             <div className="border p-2 rounded d-inline-flex align-self-start mx-auto mb-3">
              <img src="/images/trade-associations-icon.svg" className="" />
            </div>
            <h3 className="h4">Trade <br />Associations</h3>
            <p>Platforms that streamline operations, meet requirements, and strengthen client relationships.</p>
          </div>
        <div ref={col7Ref} className="col-12 col-md-6 col-lg-3 mb-4 mb-md-5 d-flex flex-column text-center">
             <div className="border p-2 rounded d-inline-flex align-self-start mx-auto mb-3">
              <img src="/images/nonprofit-icon.svg" className="" />
            </div>
            <h3 className="h4">Nonprofits and <br /> Foundations</h3>
            <p>Websites that inspire supporters, drive donations, and showcase measurable impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorExpertise;
