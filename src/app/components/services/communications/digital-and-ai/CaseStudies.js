"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

const workItems = [
  {
    id: 1,
    title:
      "Suicide Prevention Annual Report",
    image:
      "https://us-east-1-shared-usea1-02.graphassets.com/AORR3b2exTpqw7qrnJeZBz/0P3SdNoQk23ZkzK9M7D0",
    slug: "/case-studies/suicide-prevention-annual-report",
  },
];

export default function CaseStudies() {
  const titleRef = useRef(null);
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
      id="event-case-studies"
      className="py-8 py-lg-10 text-white"
    >
      <div className="container position-relative z-2">
        <div className="row">
          {workItems.map((item) => (
            <div
              key={item.id}
              ref={addToRefs}
              className="col-12 col-md-6 mb-5"
            >
              <Link href={item.slug} className="text-decoration-none">
                <div className="card bg-transparent border-0">
                  <div className="overflow-hidden rounded-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={450}
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="card-body p-0 mt-3">
                    <h4 className="fw-bold text-white small">{item.title}</h4>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <div className="col-12 col-md-6">
                    <h2
            ref={titleRef}
            className="display-5 mb-6"
          >
            Proven Impact Through Digital Services
          </h2>
          <p>Explore how our recent solutions have empowered organizations to better engage audiences, improve their operations, and drive lasting impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
