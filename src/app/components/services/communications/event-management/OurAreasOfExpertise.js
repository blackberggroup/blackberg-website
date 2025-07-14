"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const OurAreasOfExpertise = () => {
  const titleRef = useRef(null);
  const rowsRef = useRef([]);
  rowsRef.current = [];

  const addToRefs = (el) => {
    if (el && !rowsRef.current.includes(el)) {
      rowsRef.current.push(el);
    }
  };

useEffect(() => {
  if (typeof window === "undefined") return;

  import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in the title
    gsap.set(titleRef.current, { opacity: 0, y: 20 });
    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power1.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    rowsRef.current.forEach((row) => {
      // 1) Row fade + slide
      gsap.set(row, { opacity: 0, y: 20 });
      gsap.to(row, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: row,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // locate decorators
      const circle = row.querySelector(".img-decore-circle-dots");
      const dots   = row.querySelector(".img-decore-dots");

      if (circle) {
        gsap.set(circle, { scale: 0, rotation: -280 });
        gsap.to(circle, {
          scale: 1,
          rotation: 0,
          ease: "sine.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            end: "bottom 60%",
            scrub: true,
          },
        });
      }

      if (dots) {
        gsap.set(dots, { scale: 0 });
        gsap.to(dots, {
          scale: 1,
          ease: "sine.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            end: "bottom 80%",
            scrub: true,
          },
        });
      }
    });
  });
}, []);

  return (
    <section id="areas-of-expertise" className="py-8 py-lg-10">
      <div className="container">
        <div ref={titleRef} className="text-center mb-7">
          <h2 className="display-5">Our Areas of Expertise</h2>
          <p className="lead">
            We bring together planners, designers, marketers, and technologists to deliver
            end-to-end event execution.
          </p>
        </div>

        {/* Program Curation & Audience Engagement */}
        <div ref={addToRefs} className="row align-items-center mb-8">
          <div className="col-12 col-lg-6 order-lg-2 mb-4 mb-lg-0">
            <Image
                src="/images/services/communications/event-management/agenda-and-experience-design.webp"
              alt="Agenda & Experience Design"
                width={590}
                height={415}
              className="img-fluid w-100 rounded-4"
            />
          </div>
          <div className="col-12 col-lg-6 order-lg-1">
            <h3 className="mb-3">Program Curation & Audience Engagement</h3>
            <ul className="lh-lg">
              <li>Facilitation of agenda-building workshops with internal teams</li>
              <li>Speaker engagement strategy and session formats</li>
              <li>Integration of experiential elements, storytelling, and live demonstrations</li>
              <li>Attendee journey mapping and engagement flow</li>
              <li>Session formats that balance inspiration and interaction</li>
              <li>Development of run-of-show, tech cues, and timing blocks</li>
              <li>Accessibility & inclusion planning (ASL, translation, sensory accommodations)</li>
            </ul>
          </div>
        </div>

        {/* Brand Storytelling & Promotional Campaigns */}
        <div ref={addToRefs} className="row align-items-center mb-8">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <Image
                src="/images/services/communications/integrated-marketing.webp"
              alt="Creative & Marketing Integration"
                width={590}
                height={415}
              className="img-fluid w-100 rounded-4"
            />
          </div>
          <div className="col-12 col-lg-6">
            <h3 className="mb-3">Brand Storytelling & Promotional Campaigns</h3>
            <ul className="lh-lg">
              <li>Cohesive event branding, signage, and environmental design</li>
              <li>Cross-channel marketing campaigns (email, social, earned media)</li>
              <li>Design & deployment of event websites, apps, and registration platforms</li>
              <li>Pre-event promotion strategies and engagement-building tactics</li>
              <li>Branded swag and print collateral design</li>
              <li>Speaker toolkits and promotional content</li>
              <li>Copywriting and creative direction for all event assets</li>
            </ul>
          </div>
        </div>

        {/* End-to-End Logistics & Production Management */}
        <div ref={addToRefs} className="row align-items-center mb-8">
          <div className="col-12 col-lg-6 order-lg-2 mb-4 mb-lg-0">
            <div className="img-wrapper position-relative">
              <Image
                src="/images/services/communications/event-management/logistics-and-production-management.webp"
                alt="iEX event production showing cameras and lights"
                width={590}
                height={415}
                className="img-fluid w-100 rounded-4"
              />
              <img
                src="/images/circle-dotted-2.svg"
                width="300"
                height="300"
                className="img-decore-circle-dots position-absolute z-n1"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 order-lg-1">
            <h3 className="mb-3">End-to-End Logistics & Production Management</h3>
            <ul className="lh-lg">
              <li>Venue sourcing and contracting</li>
              <li>Technical planning for audiovisuals, livestreams, and hybrid formats</li>
              <li>Vendor coordination, speaker logistics, and accessibility planning</li>
              <li>Travel and lodging coordination</li>
              <li>Catering planning, menu design, and dietary accommodations</li>
              <li>Permitting, insurance, and risk management</li>
              <li>Budget tracking and vendor payment management</li>
            </ul>
          </div>
        </div>

        {/* Execution & Follow-Through */}
        <div ref={addToRefs} className="row align-items-center">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <Image
              src="/images/services/communications/event-management/execution-and-follow-through.webp"
              alt="Execution & Follow-Through"
              width={590}
              height={415}
              className="img-fluid w-100 rounded-4"
            />
          </div>
          <div className="col-12 col-lg-6">
            <h3 className="mb-3">Execution & Follow-Through</h3>
            <ul className="lh-lg">
              <li>Onsite staffing, run-of-show management, and speaker support</li>
              <li>Media coordination, VIP handling, and talent logistics</li>
              <li>Attendee experience oversight (wayfinding, signage, registration, help desks)</li>
              <li>Real-time issue resolution and coordination with venues and vendors</li>
              <li>Post-event analysis and metrics reporting</li>
              <li>Stakeholder debriefs and lessons learned</li>
              <li>Repurposing of content (recordings, highlight videos, social recaps, blogs)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAreasOfExpertise;
