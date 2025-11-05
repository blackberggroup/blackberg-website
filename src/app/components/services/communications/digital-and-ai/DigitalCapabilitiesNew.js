"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const DigitalCapabilitiesNew = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const itemRefs = useRef([]);
  itemRefs.current = [];

  const addToRefs = (el) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const elems = [
        titleRef.current,
        imageRef.current,
        ...itemRefs.current,
      ];

      gsap.set(elems, { opacity: 0, y: 20 });

      elems.forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power1.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",           
            toggleActions: "play none none none"
          }
        });
      });
    });
  }, []);

  const accordionItems = [
    {
      id: "One",
      title: "Web Design & Development",
      content:
        "We deliver modern, user-focused web experiences that drive engagement and measurable results. Our combine strategic communications, digital transformation, and scalable technical solutions. From federal agencies to state & local governments, associations, and nonprofits, we create accessible, data-driven, and AI-enhanced websites that meet both organizational and audience needs.",
      defaultExpanded: true,
    },
    {
      id: "Two",
      title: "Cybersecurity",
      content:
        "We integrate security by design into every digital and AI initiative. From zero trust architectures to AI-driven threat detection and FedRAMP-compliant cloud environments, our cybersecurity solutions protect sensitive data and mission-critical systems. We ensure compliance with federal standards—including NIST, FISMA, and CMMC—while tailoring risk management frameworks to agency needs. Our proactive approach safeguards operations, strengthens resilience, and builds public trust.",
    },
    {
      id: "Three",
      title: "Data Integration",
      content:
        "We provide data integration services that unify disparate data sources into a cohesive, secure platform, enabling seamless access and real-time insights for clients. By leveraging AI-driven data mapping and transformation, we enhance interoperability and accelerate decision-making across complex systems.",
    },
    {
      id: "Four",
      title: "Technology Accelerators",
      content:
        "We rapidly deploy low-code/no-code, cloud-native, and AI-enabled platforms that shorten time-to-mission and reduce cost. Our accelerators empower agencies to prototype, test, and scale solutions with speed, ensuring responsiveness to evolving policy and operational demands. Whether integrating data lakes, standing up digital portals, or deploying AI pilots, we enable faster delivery without sacrificing security or compliance.",
    },
    {
      id: "Five",
      title: "Digital Transformation",
      content:
        "We guide organizations through end-to-end modernization journeys by aligning people, processes, and technology. Our work spans cloud adoption, legacy system migration, and enterprise architecture design—always with an eye toward human-centered outcomes. We embed AI, data analytics, and agile delivery models into transformation roadmaps, ensuring measurable improvements in performance, efficiency, and service delivery across the enterprise.",
    },
  ];

  return (
    <section id="ai-services" className="py-8 py-lg-10">
      <div className="container">
        <h2 ref={titleRef} className="display-5 text-center mb-5">
          Our Digital Services
        </h2>
        <div className="row align-items-center flex-row-reverse">
          <div
            ref={imageRef}
            className="col-12 col-lg-6 mb-4 mb-lg-0"
          >
            <Image
              src="/images/services/digital-ai/digital-services.jpg"
              alt="Our team celebrating"
              width={600}
              height={400}
              className="img-fluid rounded-4"
              fetchPriority="auto"
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="accordion" id="digitalServicesAccordion">
              {accordionItems.map((item) => (
                <div
                  className="accordion-item"
                  key={item.id}
                  ref={addToRefs}
                >
                  <h3
                    className="accordion-header"
                    id={`heading${item.id}`}
                  >
                    <button
                      className={`accordion-button ${
                        item.defaultExpanded ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${item.id}`}
                      aria-expanded={!!item.defaultExpanded}
                      aria-controls={`collapse${item.id}`}
                    >
                      {item.title}
                    </button>
                  </h3>
                  <div
                    id={`collapse${item.id}`}
                    className={`accordion-collapse collapse ${
                      item.defaultExpanded ? "show" : ""
                    }`}
                    aria-labelledby={`heading${item.id}`}
                    data-bs-parent="#setsUsApartAccordion"
                  >
                    <div className="accordion-body">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalCapabilitiesNew;
