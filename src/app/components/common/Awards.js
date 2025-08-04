"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const awards = [
  {
    id: 1,
    src: "/images/awards/marcom.png",
    alt: "MarCom Awards",
    width: 200,
    height: 80,
  },
  {
    id: 2,
    src: "/images/awards/eddie-ozzie.png",
    alt: "Folio Eddie & Ozzie Awards",
    width: 180,
    height: 100,
  },
  {
    id: 3,
    src: "/images/awards/azbees.png",
    alt: "ASBPE Azbee Awards of Excellence",
    width: 200,
    height: 80,
  },
  {
    id: 4,
    src: "/images/awards/content-marketing-awards.png",
    alt: "Content Marketing Awards",
    width: 180,
    height: 80,
  },
];

const Awards = () => {
  const titleRef = useRef(null);
  const logoRefs = useRef([]);
  logoRefs.current = [];

  const addLogoRef = (el) => {
    if (el && !logoRefs.current.includes(el)) {
      logoRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      // Build an array: [title, logo1, logo2, ...]
      const elems = [titleRef.current, ...logoRefs.current];

      // Hide & shift left initially
      gsap.set(elems, { opacity: 0, x: -50 });

      elems.forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power1.out",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    });
  }, []);

  return (
    <section id="awards" className="awards bg-light py-8">
      <div className="container text-center">
        <div className="row justify-content-center align-items-center gx-4 gy-4">
          {/* Title */}
          <div className="col-12 col-md" ref={titleRef}>
            <h2 className="display-5 m-0">Awards</h2>
          </div>

          {/* Logos */}
          {awards.map(({ id, src, alt, width, height }) => (
            <div
              key={id}
              className="col-6 col-md"
              ref={addLogoRef}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
