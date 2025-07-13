// components/services/communications/event-management/StepByStepProcess.js
"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// register once
gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    image: "/images/services/communications/event-management/step-1.png",
    title: "Discovery & Visioning",
    description:
      "We start by learning everything we can about your organization, audience and objectives. Through collaborative workshops or strategy calls, we align on what success looks like and how the event can serve as a catalyst for connection, innovation, or transformation.",
  },
  {
    id: 2,
    image: "/images/services/communications/event-management/step-1.png",
    title: "Design & Planning",
    description:
      "Working hand-in-hand with you, we develop detailed run-of-show, creative storyboards, branding, and marketing assets—then lock down venues, vendors, and tech to bring it all to life.",
  },
  {
    id: 3,
    image: "/images/services/communications/event-management/step-1.png",
    title: "Production & Execution",
    description:
      "On-site or virtual, our team orchestrates every detail: from registration to staging, A/V, speaker support, and post-event surveys—so you deliver a seamless, memorable experience.",
  },
  {
    id: 4,
    image: "/images/services/communications/event-management/step-1.png",
    title: "Analysis & Optimization",
    description:
      "We gather attendance, engagement, and feedback data in real time, then provide you with clear insights and recommendations to make your next event even stronger.",
  },
];

export default function StepByStepProcess() {
  const sectionRef = useRef();
  const panelsRef  = useRef();

  useLayoutEffect(() => {
    // grab Lenis container (ReactLenis wraps children in .lenis__scroll)
    const scrollerEl = document.querySelector(".lenis__scroll") || window;

    // use gsap.context so we clean up on unmount
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const panels  = panelsRef.current;
      const distance = panels.scrollWidth - section.clientWidth;

      // 1) Pin the section for exactly `distance` pixels of scroll
      ScrollTrigger.create({
        scroller: scrollerEl,
        trigger:  section,
        start:    "top top",
        end:      () => `+=${distance}`,
        pin:      true,
        pinSpacing: false,
        pinType:  scrollerEl === window ? "fixed" : "transform",
        invalidateOnRefresh: true,
        markers: true,
      });

      // 2) Scrub the panels left→right over that same scroll
      gsap.to(panels, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          scroller: scrollerEl,
          trigger:  section,
          start:    "top top",
          end:      () => `+=${distance}`,
          scrub:    true,
          invalidateOnRefresh: true,
        },
      });

      // 3) force a refresh so measurements are accurate
      ScrollTrigger.refresh();
    }, sectionRef);

    // on unmount, kill everything & remove pin wrappers
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="step-by-step-process"
      ref={sectionRef}
      className="step-by-step-process position-relative text-white"
      style={{
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#012B24",
      }}
    >
      <div className="content">
        <h2 className="display-5 text-center mb-6">
          Our Step-by-Step Process
        </h2>
        <div className="panels-container" style={{ overflow: "hidden" }}>
          <div
            className="panels-scroller"
            ref={panelsRef}
            style={{ display: "flex" }}
          >
            {steps.map((step) => (
              <div
                key={step.id}
                className="panel"
                style={{
                  minWidth: "100vw",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 2rem",
                }}
              >
                <div className="row align-items-center gx-5">
                  <div className="col-12 col-lg-6">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={800}
                      height={500}
                      className="img-fluid rounded-4"
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="step-card p-5 rounded-4 bg-light text-dark">
                      <p className="small text-primary fw-bold mb-2">
                        Step {step.id}
                      </p>
                      <h3 className="h4 mb-3">{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="progress-bar-wrapper">
        <div className="progress-bar" />
      </div>
    </section>
  );
}
