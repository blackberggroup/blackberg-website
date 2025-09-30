"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Capabilities = () => {
  const titleRef = useRef(null);
  const col1Ref  = useRef(null);
  const col2Ref  = useRef(null);
  const col3Ref  = useRef(null);
    const col4Ref  = useRef(null);
    const col5Ref  = useRef(null);


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
            <h2 ref={titleRef} className="display-5 mb-5 section-title">Our AI Services</h2>
          </div>
        </div>
        <div className="row">
          <div ref={col1Ref} className="col-12 col-lg-4 mb-4 mb-md-5 column-corporate">
            <h3 className="h4">Generative AI & Adaptive Content</h3>
            <p>Blackberg transforms communications through generative AI tools that deliver personalized messaging, dynamic content, and engaging experiences. We enhance your outreach with tailored interactions that resonate with stakeholders across platforms, while reducing time-to-publish.</p>
          </div>
          <div ref={col2Ref} className="col-12 col-lg-4 mb-4 mb-md-5 column-conferences">
            <h3 className="h4">Intelligent Automation & Custom AI Tools</h3>
            <p>Our experts streamline repetitive tasks and complex workflows with tailored automation solutions, robotic process automation (RPA), and custom-developed AI tools. These tools improve accuracy, reduce manual efforts, and increase operational efficiency across your organization.</p>
          </div>
          <div ref={col3Ref} className="col-12 col-lg-4 mb-4 mb-md-5 column-events">
            <h3 className="h4">Conversational AI & Virtual Assistants</h3>
            <p>Our team has demonstrated expertise implementing secure, scalable chatbots and voice assistants to improve stakeholder experiences. From customer service to internal support, conversational AI offers immediate, effective interactions, while freeing human capital for high-value tasks.</p>
          </div>
            <div ref={col4Ref} className="col-12 col-lg-4 mb-4 mb-md-5 column-events">
            <h3 className="h4">Predictive Analytics & Strategic Decision-Making</h3>
            <p>We leverage predictive analytics (e.g., machine learning, statistical modeling, or real-time data integration) to forecast outcomes, assess risk, and guide strategic initiatives. These tools offer organizations actionable intelligence for policy planning, mission delivery, fraud detection, resource allocation, budget forecasting, and crisis response.</p>
          </div>
         <div ref={col5Ref} className="col-12 col-lg-4 mb-4 mb-md-5 column-events">
            <h3 className="h4">Organizational & Performance Insights</h3>
            <p>Our AI services translate complex datasets into clear, actionable insights for organizational performance improvements and workforce trend insights. Equip your leaders with clear visibility to inform strategic organizational improvements through AI driven dashboards, sentiment analysis, workforce trends, and other tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
