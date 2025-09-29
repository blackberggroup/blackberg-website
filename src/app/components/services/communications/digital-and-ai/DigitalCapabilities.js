"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const DigitalCapabilities = () => {
  const titleRef = useRef(null);
  const col1Ref  = useRef(null);
  const col2Ref  = useRef(null);
  const col3Ref  = useRef(null);
    const col4Ref  = useRef(null);


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
            <h2 ref={titleRef} className="display-5 mb-5 section-title">Our Digital Service Capabilities</h2>
          </div>
        </div>
        <div className="row">
          <div ref={col1Ref} className="col-12 col-lg-6 mb-4 mb-md-5 column-corporate">
            <h3 className="h4">Web Design & Development</h3>
            <p>We deliver modern, user-focused web experiences that drive engagement and measurable results. Our combine strategic communications, digital transformation, and scalable technical solutions. From federal agencies to state & local governments, associations, and nonprofits, we create accessible, data-driven, and AI-enhanced websites that meet both organizational and audience needs.</p>
          </div>
          <div ref={col2Ref} className="col-12 col-lg-6 mb-4 mb-md-5 column-conferences">
            <h3 className="h4">Technology Accelerators</h3>
            <p>We rapidly deploy low-code/no-code, cloud-native, and AI-enabled platforms that shorten time-to-mission and reduce cost. Our accelerators empower agencies to prototype, test, and scale solutions with speed, ensuring responsiveness to evolving policy and operational demands. Whether integrating data lakes, standing up digital portals, or deploying AI pilots, we enable faster delivery without sacrificing security or compliance.</p>
          </div>
          <div ref={col3Ref} className="col-12 col-lg-6 mb-4 mb-md-5 column-events">
            <h3 className="h4">Digital Transformation</h3>
            <p>We guide organizations through end-to-end modernization journeys by aligning people, processes, and technology. Our work spans cloud adoption, legacy system migration, and enterprise architecture design—always with an eye toward human-centered outcomes. We embed AI, data analytics, and agile delivery models into transformation roadmaps, ensuring measurable improvements in performance, efficiency, and service delivery across the enterprise.</p>
          </div>
            <div ref={col4Ref} className="col-12 col-lg-6 mb-4 mb-md-5 column-events">
            <h3 className="h4">Cybersecurity</h3>
            <p>We integrate security by design into every digital and AI initiative. From zero trust architectures to AI-driven threat detection and FedRAMP-compliant cloud environments, our cybersecurity solutions protect sensitive data and mission-critical systems. We ensure compliance with federal standards—including NIST, FISMA, and CMMC—while tailoring risk management frameworks to agency needs. Our proactive approach safeguards operations, strengthens resilience, and builds public trust.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalCapabilities;
