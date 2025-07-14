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
    title: "Experience Design & Programming",
    description:
      "Together, we build your event's foundation. We design the agenda, map out the attendee journey, and craft an experience that feels purposeful at every moment.",
  },
  {
    id: 3,
    image: "/images/services/communications/event-management/step-1.png",
    title: "Branding, Marketing and Engagement",
    description:
      "We bring your event to life with standout creative and integrated communications. Whether it's a federal summit or corporate retreat, we tailor the tone, visuals, and outreach to your audience. ",
  },
  {
    id: 4,
    image: "/images/services/communications/event-management/step-1.png",
    title: "Logistics & Production",
    description:
      "We handle every behind-the-scenes detail, so you don't have to. From sourcing venues to managing vendors, we keep things moving and aligned with your goals.",
  },
  {
    id: 5,
    image: "/images/services/communications/event-management/step-1.png",
    title: "Showtime",
    description:
      "We are onsite, online, and always on. Our team runs the show, from speaker rehearsals to minute-by-minute management, ensuring a smooth, professional experience from start to finish.",
  },
  {
    id: 6,
    image: "/images/services/communications/event-management/step-1.png",
    title: "Wrap-Up & Impact Reporting",
    description:
      "We don't just end with applause; we provide data, insights, and post-event materials that help you tell the story, sustain momentum, and plan what's next.",
  },    
];

export default function StepByStepProcess() {
  const sectionRef = useRef();
  const panelsRef  = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section  = sectionRef.current;
      const panels   = panelsRef.current;
      const distance = panels.scrollWidth - section.clientWidth;

      // 1) pin the section for exactly `distance` pixels of vertical scroll
      ScrollTrigger.create({
        trigger: section,
        start:   "top top",
        end:     () => `+=${distance}`,
        pin:     true,
        pinSpacing: false,
        invalidateOnRefresh: true,
        markers: true,               // remove markers in production
      });

      // 2) scrub the panels left→right over the same scroll
      gsap.to(panels, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start:   "top top",
          end:     () => `+=${distance}`,
          scrub:   true,
          invalidateOnRefresh: true,
          // no `scroller:` here
        },
      });

      // 3) make sure all measurements are freshly calculated
      ScrollTrigger.refresh();
    }, sectionRef);

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
