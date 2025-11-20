"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const CapabilitiesNew = () => {
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
      title: "Generative AI & Adaptive Content",
      content:
        "Blackberg transforms communications through generative AI tools that deliver personalized messaging, dynamic content, and engaging experiences. We enhance your outreach with tailored interactions that resonate with stakeholders across platforms, while reducing time-to-publish.",
      defaultExpanded: true,
    },
    {
      id: "Two",
      title: "Intelligent Automation & Custom AI Tools",
      content:
        "Our experts streamline repetitive tasks and complex workflows with tailored automation solutions, robotic process automation (RPA), and custom-developed AI tools. These tools improve accuracy, reduce manual efforts, and increase operational efficiency across your organization.",
    },
    {
      id: "Three",
      title: "Conversational AI & Virtual Assistants",
      content:
        "Our team has demonstrated expertise implementing secure, scalable chatbots and voice assistants to improve stakeholder experiences. From customer service to internal support, conversational AI offers immediate, effective interactions, while freeing human capital for high-value tasks.",
    },
    {
      id: "Four",
      title: "Predictive Analytics & Strategic Decision-Making",
      content:
        "We leverage predictive analytics (e.g., machine learning, statistical modeling, or real-time data integration) to forecast outcomes, assess risk, and guide strategic initiatives. These tools offer organizations actionable intelligence for policy planning, mission delivery, fraud detection, resource allocation, budget forecasting, and crisis response.",
    },
    {
      id: "Five",
      title: "Organizational & Performance Insights",
      content:
        "Our AI services translate complex datasets into clear, actionable insights for organizational performance improvements and workforce trend insights. Equip your leaders with clear visibility to inform strategic organizational improvements through AI driven dashboards, sentiment analysis, workforce trends, and other tools.",
    },
  ];

  return (
    <section id="ai-services" className="py-8 py-lg-10 bg-electric-green-50">
      <div className="container">
        <h2 ref={titleRef} className="display-5 text-center mb-5">
          Our AI Services
        </h2>
        <div className="row align-items-center">
          <div
            ref={imageRef}
            className="col-12 col-lg-6 mb-4 mb-lg-0"
          >
            <Image
              src="/images/services/digital-ai/ai-services.jpg"
              alt="Our team celebrating"
              width={600}
              height={400}
              className="img-fluid rounded-4"
              fetchPriority="auto"
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="accordion" id="aiServicesAccordion">
              {accordionItems.map((item) => (
                <div
                  className="accordion-item"
                  key={item.id}
                  ref={addToRefs}
                >
                  <h3
                    className="accordion-header"
                    id={`aiHeading${item.id}`}
                  >
                    <button
                      className={`accordion-button ${
                        item.defaultExpanded ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#aiCollapse${item.id}`}
                      aria-expanded={!!item.defaultExpanded}
                      aria-controls={`collapse${item.id}`}
                    >
                      {item.title}
                    </button>
                  </h3>
                  <div
                    id={`aiCollapse${item.id}`}
                    className={`accordion-collapse collapse ${
                      item.defaultExpanded ? "show" : ""
                    }`}
                    aria-labelledby={`aiHeading${item.id}`}
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

export default CapabilitiesNew;
