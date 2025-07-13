"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WeSpecializeIn = () => {
  const titleRef = useRef(null);
  const col1Ref  = useRef(null);
  const col2Ref  = useRef(null);
  const col3Ref  = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const elems = [
        titleRef.current,
        col1Ref.current,
        col2Ref.current,
        col3Ref.current,
        contentRef.current,
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
    <section id="event-management-specialize-in" className="py-8 py-lg-10">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 ref={titleRef} className="display-5 mb-5 section-title">We Specialize In</h2>
          </div>
        </div>
        <div className="row">
          <div ref={col1Ref} className="col-12 col-lg-4 mb-4 mb-md-5 column-corporate">
            <h3 className="h4">Corporate Offsites & Retreats</h3>
            <p>Team-building, leadership alignment, and strategic planning in destinations that inspire.</p>
          </div>
          <div ref={col2Ref} className="col-12 col-lg-4 mb-4 mb-md-5 column-conferences">
            <h3 className="h4">Conferences & Summits</h3>
            <p>Full-scale productions designed to engage audiences, elevate content, and drive outcomes.</p>
          </div>
          <div ref={col3Ref} className="col-12 col-lg-4 mb-4 mb-md-5 column-events">
            <h3 className="h4">Mission-Driven Events</h3>
            <p>Purpose-led gatherings for federal agencies, nonprofits, and associations—built for meaning, not just logistics.</p>
          </div>
        </div>
        <div ref={contentRef} className="row section-content">
          <p>
            We design experiences that move people and foster connection—from
            large-scale federal convenings and mission-driven summits to
            association conferences and corporate retreats. Our event
            management services combine event planning, experiential design,
            marketing, and technical execution under one roof. This holistic
            approach ensures every touchpoint—before, during, and after your
            event—works in harmony to elevate your brand and engage your
            audience. Our team of certified meeting and event professionals
            have facilitated more than 300 events ranging in size from 20 to
            7,000 participants. Whether in-person, virtual, or hybrid, we help
            organizations create experiences that inform, inspire, and advance
            your mission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeSpecializeIn;
