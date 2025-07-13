"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

const insightItems = [
  {
    id: 1,
    authorName: "Kevin Moloney",
    authorImage: "https://us-east-1-shared-usea1-02.graphassets.com/AORR3b2exTpqw7qrnJeZBz/Wc7oFZlSWyKKfKzVsoF8",
    title:
      "Mapping Out The Event Planning Process",
    image:
      "https://us-east-1-shared-usea1-02.graphassets.com/AORR3b2exTpqw7qrnJeZBz/XJe1QGelQ4Ob8PhiO8dH",
    slug: "/insights/mapping-out-the-event-planning-process",
  },
  {
    id: 2,
    authorName: "Isabella Staton",
    authorImage: "https://us-east-1-shared-usea1-02.graphassets.com/AORR3b2exTpqw7qrnJeZBz/4yeLQyWcQaSpBa3BXwvb",    
    title: "Adapting for Hybrid and AI Events",
    image:
      "https://us-east-1-shared-usea1-02.graphassets.com/AORR3b2exTpqw7qrnJeZBz/ekOU2umTqqbN49GTmxhg",
    slug: "/insights/adapting-for-hybrid-and-ai-events",
  },
  {
    id: 3,
    authorName: "Kevin Moloney",
    authorImage: "https://us-east-1-shared-usea1-02.graphassets.com/AORR3b2exTpqw7qrnJeZBz/Wc7oFZlSWyKKfKzVsoF8",    
    title: "6 Considerations to Enhance Attendee Experiences",
    image:
      "https://us-east-1-shared-usea1-02.graphassets.com/AORR3b2exTpqw7qrnJeZBz/vdzO6WiDQICgrcWBjyk1",
    slug: "/insights/6-considerations-to-enhance-attendee-experiences",
  },  
];

export default function Insights() {
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
      id="event-insights"
      className="py-8 py-lg-10"
    >
      <div className="container z-2 position-relative">
        <h2
          ref={titleRef}
          className="display-5 mb-6"
        >
          Our Latest Insights
        </h2>
        <div className="row">
          {insightItems.map((item) => (
            <div
              key={item.id}
              ref={addToRefs}
              className="col-12 col-md-4 mb-5"
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
                    <h3 className="fw-bold">{item.title}</h3>
                    <div className="d-flex align-items-center">
                        <span className="me-3">
                            <Image
                                src={item.authorImage}
                                alt={item.authorName}
                                width={40}
                                height={40}
                                className="img-fluid"
                            />
                        </span>
                        {item.authorName}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
