"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Insights() {
  const titleRef = useRef(null);
  const containerRef = useRef(null); // NEW
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      // Set initial state
      gsap.set(containerRef.current, { opacity: 0, y: 50 });
      cardRefs.current.forEach(card => gsap.set(card, { opacity: 0, y: 40 }));

      // Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // 1. Title fades in
      tl.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power1.out",
      })
        // 2. Container slides/fades in
        .to(containerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power1.out",
        }, "-=0.2") // Slight overlap for smoothness
        // 3. Cards fade in staggered
        .to(
          cardRefs.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power1.out",
            stagger: 0.15,
          },
          "-=0.2" // Overlap with container anim
        );
    });
  }, []);

  // ... steps array same as before
  const steps = [
    // ... your steps objects
    {
      step: "Step 1",
      title: "Discovery & Visioning",
      desc: "We start by learning everything we can about your organization, audience and objectives. Through collaborative workshops or strategy calls, we align on what success looks like and how the event can serve as a catalyst for connection, innovation, or transformation.",
    },
    // ... rest of your steps
    {
      step: "Step 2",
      title: "Experience Design & Programming",
      desc: "Together, we build your event's foundation. We design the agenda, map out the attendee journey, and craft an experience that feels purposeful at every moment.",
    },
    {
      step: "Step 3",
      title: "Branding, Marketing and Engagement",
      desc: "We bring your event to life with standout creative and integrated communications. Whether it's a federal summit or corporate retreat, we tailor the tone, visuals, and outreach to your audience.",
    },
    {
      step: "Step 4",
      title: "Logistics & Production",
      desc: "We handle every behind-the-scenes detail, so you don't have to. From sourcing venues to managing vendors, we keep things moving and aligned with your goals.",
    },
    {
      step: "Step 5",
      title: "Showtime",
      desc: "We are onsite, online, and always on. Our team runs the show, from speaker rehearsals to minute-by-minute management, ensuring a smooth, professional experience from start to finish.",
    },
    {
      step: "Step 6",
      title: "Wrap-Up & Impact Reporting",
      desc: "We don't just end with applause; we provide data, insights, and post-event materials that help you tell the story, sustain momentum, and plan what's next.",
    },
  ];

  return (
    <section id="steps-grid" className="steps-grid pt-8 pt-10">
      <div className="container z-2 position-relative">
        <h2 ref={titleRef} className="display-5 mb-6 text-center text-white">
          Our Step-by-Step Process
        </h2>
        <div className="row">
          <div className="col-12">
            <div
              className="steps-grid__container shadow-lg rounded-4 mb-n5 position-relative"
              ref={containerRef} // <-- NEW REF
            >
              <div className="row">
                {steps.map((step, i) => (
                  <div key={i} className="col-12 col-md-6 col-xl-4">
                    <div className="p-5" ref={addToRefs}>
                      <span className="text-primary fw-bold">{step.step}</span>
                      <h3 className="h4">{step.title}</h3>
                      <p className="card-text">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
