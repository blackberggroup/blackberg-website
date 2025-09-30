"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

export default function UnlockingPotential() {
  const titleRef = useRef(null);
  const cardRefs = useRef([]);
    const btnRef = useRef(null);
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

      // Fade+slide in the heading
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Fade+slide in each card
      cardRefs.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power1.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: i * 0.15,
        });
      });
    });
  }, []);

  return (
    <section
      id="unlocking-potential"
      className="pb-8 pb-lg-11"
    >
      <div className="container position-relative z-2">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6">
                    <h2
            ref={titleRef}
            className="display-5 mb-6"
          >
            Unlocking Mission-Driven Potential
          </h2>
          <p>Artificial intelligence and digital transformation offer unprecedented opportunities for the public sector to achieve greater efficiency, agility, and impact. Blackberg helps agencies harness these technologies to anticipate needs, streamline complex processes, and deliver mission-aligned services with confidence and scale.</p>
               <Link
                  href="/contact"
                  className="btn btn-secondary hero__btn"
                  aria-label="Learn more about our event management offering"
                  ref={btnRef}
                >
                  Contact Us for a Discovery Call
                </Link>
          </div>
            <div className="col-12 col-md-6 mt-5 mt-md-0">
                <div className="card bg-transparent border-0">
                  <div className="overflow-hidden rounded-4">
                    <img src="/images/digital-sample.png" alt="" className="img-fluid" />
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
