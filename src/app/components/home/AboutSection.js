import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

const AboutSection = () => {

    const circleRef = useRef(null);

    useEffect(() => {

        const element = circleRef.current;

        // Scale animation
        gsap.fromTo(element, 
            { scale: 0.65 }, 
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

        // const handleResize = () => {
        //     ScrollTrigger.refresh();
        // };
    
        // window.addEventListener('resize', handleResize);
  

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, []);

    return (
        <section id="home-about-section" className="container-fluid py-6 my-0 mt-lg-6" aria-label="About Overview">
            <div className="container position-relative">
                <img src="/images/home/home-about-circle.webp" alt="Abstract circle pattern" className="position-absolute" id="home-about-circle" ref={circleRef} />
                <div className="row mt-4 d-flex position-relative">
                    <div className="col-md-12 col-lg-3">
                        <span className="text-headline-label text-headline-label--secondary text-uppercase text-white">About</span>
                        <h2 className="text-headline display-3 text-white">Blackberg Group</h2>
                    </div>
                    <div className="col-12 col-md-10 col-lg-7 offset-md-2 ml-auto py-4 py-lg-10 position-relative">
                        <p className="pt-0 pt-lg-5 text-white">We are a Service-Disabled, Veteran-Owned Small Business (SDVOSB) and Woman-Owned Small Business (WOSB) uniting strategic operations with creative marketing to uplift public service missions. Specializing in strategy, operations, communications, and organizational effectiveness, our team leads engagements that foster operational excellence and marketing that sparks movements.</p>
                        <Link href="/about" aria-label="Learn more about Blackberg Group" className="btn btn-secondary mt-3">
                            Read More
                            <img src="/images/arrow-narrow-right.svg" width="20" height="20" className="ms-2" />    
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;