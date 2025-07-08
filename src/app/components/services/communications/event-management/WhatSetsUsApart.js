"use client";

import React from "react";
import Image from "next/image";

const WhatSetsUsApart = () => {
  const accordionItems = [
    {
      id: "One",
      title: "Integrated Delivery Model",
      content:
        "We deliver all services—from strategy and agenda design to creative, marketing outreach, event logistics, and technical production—under one team. No silos. No missed connections. We deliver a cohesive, immersive event experience with tangible results.",
      defaultExpanded: true,
    },
    {
      id: "Two",
      title: "Audience-Centered Design",
      content:
        "Our events are designed with purpose and people in mind, whether you are inspiring a corporate team or mobilizing a nationwide movement. We prioritize accessibility, inclusion, and emotional resonance to ensure all participants feel connected to your mission.",
    },
    {
      id: "Three",
      title: "Flexible & Flawless Execution",
      content:
        "Whether in-person, virtual, or hybrid, we adapt seamlessly to deliver interactive, engaging events through a mix of creativity, structure, and real-time coordination. Our team delivers planning, budgeting, site selection, contract negotiation, speaker and special guest coordination, and reporting for seamless execution.",
    },
    {
      id: "Four",
      title: "Cross-Sector Experience",
      content:
        "We've produced major events for federal agencies, nonprofits, and private-sector clients—tailoring each experience to the unique expectations, regulations, and outcomes of the audience.",
    },
    {
      id: "Five",
      title: "Data Driven Results",
      content:
        "We don't just execute, we measure. We track key engagement metrics and audience feedback to deliver events that are not only memorable, but measurable.",
    },
  ];

  return (
    <section id="what-sets-us-apart" className="py-8 py-lg-10">
      <div className="container">
        <h2 className="display-5 text-center mb-5">What Sets Us Apart</h2>
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <Image
              src="/images/services/communications/event-management/what-sets-us-apart.png"
              alt="Our team celebrating"
              width={600}
              height={400}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="accordion" id="setsUsApartAccordion">
              {accordionItems.map((item) => (
                <div className="accordion-item" key={item.id}>
                  <h3 className="accordion-header" id={`heading${item.id}`}>
                    <button
                      className={`accordion-button ${
                        item.defaultExpanded ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${item.id}`}
                      aria-expanded={!!item.defaultExpanded}
                      aria-controls={`collapse${item.id}`}
                    >
                      {item.title}
                    </button>
                  </h3>
                  <div
                    id={`collapse${item.id}`}
                    className={`accordion-collapse collapse ${
                      item.defaultExpanded ? "show" : ""
                    }`}
                    aria-labelledby={`heading${item.id}`}
                    data-bs-parent="#setsUsApartAccordion"
                  >
                    <div className="accordion-body">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
