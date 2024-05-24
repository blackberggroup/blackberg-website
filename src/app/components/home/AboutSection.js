import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutSection = () => {

    gsap.registerPlugin(ScrollTrigger);
    const circleRef = useRef(null);

    useEffect(() => {

        const element = circleRef.current;

        // Scale animation
        gsap.fromTo(element, 
            { scale: 0.5 }, 
            {
            scale: 1,
            duration: 2,
            scrollTrigger: {
                trigger: element,
                start: 'top 100%',
                end: 'center center',
                scrub: true,
            }
            }
        );

        // Rotate animation
        gsap.fromTo(element, 
            { rotate: 0 }, 
            {
            rotate: 360,
            duration: 10,
            scrollTrigger: {
                trigger: element,
                start: 'top 100%',
                end: 'bottom top',
                scrub: true,
            }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, []);

    return (
        <section id="home-about-section" className="container-fluid py-6 my-0 my-lg-6" aria-label="About Overview">
            <div className="container position-relative">
                <img src="/images/home/home-about-circle.webp" alt="Abstract circle pattern" className="position-absolute" id="home-about-circle" ref={circleRef} />
                <div className="row mt-4 d-flex position-relative">
                    <div className="col-md-12 col-lg-3">
                        <span className="text-headline-label text-uppercase">About</span>
                        <h2 className="text-headline display-3">Blackberg Group</h2>
                    </div>
                    <div className="col-md-12 col-lg-7 offset-lg-1 ml-auto py-4 py-lg-10">
                        <p className="pt-0 pt-lg-5">We are a Service-Disabled Veteran-Owned Small Business (SDVOSB) and Woman-Owned Small Business (WOSB) uniting strategic operations with creative marketing to uplift public service missions. Specializing in strategy, operations, communications, and organizational effectiveness, our team leads engagements that foster operational excellence and marketing that sparks movements. </p>
                        <Link href="/about" aria-label="Learn more about Blackberg Group" className="btn btn-primary mt-3">More About Blackberg Group</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;