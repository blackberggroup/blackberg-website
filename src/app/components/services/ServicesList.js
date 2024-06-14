import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ServicesList = () => {

    const cardRefs = useRef([]);
    const timelines = useRef([]);
    useEffect(() => {

        cardRefs.current.forEach(card => {
        
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: 'center center',
                    end: 'max',
                    scrub: true
                }
            })
            .to(card, {
                ease: 'none',
                startAt: {filter: 'blur(0px)'},
                filter: 'blur(3px)',
                scrollTrigger: {
                    trigger: card,
                    start: 'center center',
                    end: '+=100%',
                    scrub: true
                }
            }, 0)
            .to(card, {
                ease: 'none',
                scale: 0.4,
                yPercent: -50
            }, 0)

            timelines.current.push(tl);
        });

        return () => {
            timelines.current.forEach(tl => tl.kill());
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="row mt-4 d-flex flex-column align-items-center">
            {/* Services | Strategy */}
            <section className="col-md-12 col-lg-9 mb-4 mb-md-5 mt-0 mt-lg-5 sticky" ref={(el) => (cardRefs.current[0] = el)} aria-label="Strategy Service Overview">
                <div className="card card--service border-0">
                    <Link href="/services/strategy" aria-label="Learn more about our Strategy services">
                        <figure className="card-image">
                            <img src="/images/services/services-strategy.webp" className="card-img-top" alt="Team strategizing in office" loading="lazy"></img>
                        </figure>
                        <div className="card-body d-flex flex-column">
                            <h3 className="card-title display-5">Strategy</h3>
                            <p className="card-text">Translating vision into actionable blueprints</p>
                        </div>
                    </Link>
                </div>
            </section>
            {/* Services | Communications */}
            <section className="col-md-12 col-lg-9 mb-4 mb-md-5 mt-0 mt-lg-5 sticky" ref={(el) => (cardRefs.current[1] = el)} aria-label="Communications Service Overview">
                <div className="card card--service border-0">
                    <Link href="/services/communications" aria-label="Learn more about our Communications services">
                        <figure className="card-image">
                            <img src="/images/services/services-communications.webp" className="card-img-top" alt="Two veterans communicating" loading="lazy"></img>
                        </figure>
                        <div className="card-body d-flex flex-column">
                            <h3 className="card-title display-5">Communications</h3>
                            <p className="card-text">Shaping hearts and minds behind public service</p>
                        </div>
                    </Link>
                </div>
            </section>
            {/* Services | Organizational Effectiveness */}
            <section className="col-md-12 col-lg-9 mb-4 mb-md-5 mt-0 mt-lg-5 sticky" ref={(el) => (cardRefs.current[2] = el)} aria-label="Organizational Effectiveness Service Overview">
                <div className="card card--service border-0">
                    <Link href="/services/organizational-effectiveness" aria-label="Learn more about our Organizational Effectiveness services">
                        <figure className="card-image">
                            <img src="/images/services/services-organizational-effectiveness.webp" className="card-img-top" alt="Team reviewing data in office" loading="lazy"></img>
                        </figure>
                        <div className="card-body d-flex flex-column">
                            <h3 className="card-title display-5">Organizational<br /> Effectiveness</h3>
                            <p className="card-text">Mastering data-driven change and innovation</p>
                        </div>
                    </Link>
                </div>
            </section>
            {/* Services | Operations */}
            <section className="col-md-12 col-lg-9 mb-4 mb-md-5 mt-0 mt-lg-5 sticky" ref={(el) => (cardRefs.current[3] = el)} aria-label="Operations Service Overview">
                <div className="card card--service border-0">
                    <Link href="/services/operations" aria-label="Learn more about our Operations services">
                        <figure className="card-image">
                            <img src="/images/services/services-operations.webp" className="card-img-top" alt="Team meeting at office table" loading="lazy"></img>
                        </figure>
                        <div className="card-body d-flex flex-column">
                            <h3 className="card-title display-5">Operations</h3>
                            <p className="card-text">Driving operations into pathways for unprecedented growth</p>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServicesList;