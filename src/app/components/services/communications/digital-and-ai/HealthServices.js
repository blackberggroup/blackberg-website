"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const HealthServices = () => {
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
      title: "Health Analytics & AI",
      content:
        "We design and implement precise, practical AI and analytics solutions to harness clinical, behavioral, and genomic data. Our approach drives progress in population health, research, predictive medicine, and beyond.",
      defaultExpanded: true,
    },
    {
      id: "Two",
      title: "Health Technology & IT Modernization",
      content:
        "We equip your organization with flexible, efficient foundations to evolve continuously, supported by long-term, data-driven strategies. With a deep understanding of your unique constraints, we guide you through the cultural, strategic, and practical challenges of enterprise IT modernization.",
    },
    {
      id: "Three",
      title: "Life Sciences",
      content:
        "Our clinicians, scientists, technologists, strategists, and statisticians empower your organization to harness cutting-edge technologies effectively. We accelerate research and improve health outcomes by addressing complex biomedical informatics and organizational challenges together.",
    },
    {
      id: "Four",
      title: "Healthcare & Clinical Operations",
      content:
        "The ever-changing healthcare landscape requires a proactive approach, blending clinicians and administrators with experts in analytics, technology, facilities management, and operations. We deliver safe, clinically effective, and cost-efficient solutions to tackle your organization’s most significant challenges.",
    },
  ];

  return (
    <section id="ai-services" className="py-8 py-lg-10 bg-electric-green-50">
      <div className="container">
        <h2 ref={titleRef} className="display-5 text-center mb-5">
          Our Healthcare IT Services
        </h2>
        <div className="row align-items-center">
          <div
            ref={imageRef}
            className="col-12 col-lg-6 mb-4 mb-lg-0"
          >
            <Image
              src="/images/services/digital-ai/health-services.jpg"
              alt="Our team celebrating"
              width={600}
              height={400}
              className="img-fluid rounded-4"
              fetchPriority="auto"
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="accordion" id="healthServicesAccordion">
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

export default HealthServices;
