"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WhoWeWorkWith = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(sectionRef.current,   { backgroundColor: "#ffffff" });
      gsap.set(contentRef.current,   { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom top",
          scrub: false,
        },
      });

      tl.to(sectionRef.current, {
        backgroundColor: "#2B3E5E",
      });

      tl.to(
        contentRef.current,
        { opacity: 1 },
        0.5
      );
    });
  }, []);

  const partners = [
    "Government Agencies",
    "Fortune 500 Companies",
    "Nonprofits and Foundations",
    "Trade Associations",
    "Innovation Hubs & Startups",
  ];

  return (
    <section
      id="who-we-work-with"
      ref={sectionRef}
      className="py-8 py-lg-10 text-white"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container" ref={contentRef}>
        <div className="row align-items-start">
          <div className="col-12 col-lg-8 col-xl-9 mb-4 mb-lg-0">
            <h2 className="display-5 mb-3">Who We Work With</h2>
            <p className="lead">
              Our clients range from large federal agencies to fast-moving startups,
              each with a story to tell and a goal to achieve.
            </p>
          </div>
          <div className="col-12 col-lg-4 col-xl-3">
            <ul className="list-unstyled">
              {partners.map((p, i) => (
                <li key={i} className="mb-2">
                  • {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
