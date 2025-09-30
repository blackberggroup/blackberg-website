"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HealthcareServices = () => {
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
            <h2 ref={titleRef} className="display-5 mb-5 section-title">Our Digital Healthcare Services</h2>
          </div>
        </div>
        <div className="row">
          <div ref={col1Ref} className="col-12 col-lg-6 mb-4 mb-md-5 column-corporate">
            <h3 className="h4">Health Analytics & AI</h3>
            <p>We design and implement precise, practical AI and analytics solutions to harness clinical, behavioral, and genomic data. Our approach drives progress in population health, research, predictive medicine, and beyond.</p>
          </div>
          <div ref={col2Ref} className="col-12 col-lg-6 mb-4 mb-md-5 column-conferences">
            <h3 className="h4">Health Technology & IT Modernization</h3>
            <p>We equip your organization with flexible, efficient foundations to evolve continuously, supported by long-term, data-driven strategies. With a deep understanding of your unique constraints, we guide you through the cultural, strategic, and practical challenges of enterprise IT modernization.</p>
          </div>
          <div ref={col3Ref} className="col-12 col-lg-6 mb-4 mb-md-5 column-events">
            <h3 className="h4">Life Sciences</h3>
            <p>Our clinicians, scientists, technologists, strategists, and statisticians empower your organization to harness cutting-edge technologies effectively. We accelerate research and improve health outcomes by addressing complex biomedical informatics and organizational challenges together.</p>
          </div>
            <div ref={col4Ref} className="col-12 col-lg-6 mb-4 mb-md-5 column-events">
            <h3 className="h4">Healthcare & Clinical Operations </h3>
            <p>The ever-changing healthcare landscape requires a proactive approach, blending clinicians and administrators with experts in analytics, technology, facilities management, and operations. We deliver safe, clinically effective, and cost-efficient solutions to tackle your organization’s most significant challenges.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareServices;
