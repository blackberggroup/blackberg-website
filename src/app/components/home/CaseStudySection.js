import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const CaseStudySection = () => {

    gsap.registerPlugin(ScrollTrigger);
    const featuredCaseStudyRef = useRef(null);
    const secondCaseStudyRef = useRef(null);
    const thirdCaseStudyRef = useRef(null);

    useEffect(() => {

        const featuredCaseStudy = featuredCaseStudyRef.current;
        const secondCaseStudy = secondCaseStudyRef.current;
        const thirdCaseStudy = thirdCaseStudyRef.current;

        gsap.to(featuredCaseStudy, {
            translateY: "-64px",
            ease: "none",
            scrollTrigger: {
                trigger: featuredCaseStudy,
                start: 'top 100%',
                end: 'bottom top',
                scrub: true,
            }
        });

        gsap.to(secondCaseStudy, {
            translateY: "-64px",
            ease: "none",
            scrollTrigger: {
                trigger: secondCaseStudy,
                start: 'top 100%',
                end: 'bottom top',
                scrub: true,
            }
        });

        gsap.to(thirdCaseStudy, {
            translateY: "-64px",
            ease: "none",
            scrollTrigger: {
                trigger: thirdCaseStudy,
                start: 'top 100%',
                end: 'bottom top',
                scrub: true,
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, []);

    return (
        <section id="home-case-study-section" className="container-fluid pb-7 pb-md-10" aria-label="Case Study Overview">
            <div className="container position-relative">
                <div className="row mt-4 d-flex position-relative">
                    <div className="col-12 text-center">
                        <span className="text-headline-label text-headline-label--secondary text-uppercase text-white">Our Work</span>
                        <h2 className="text-headline display-3 text-white">Case Studies</h2>
                    </div>
                    {/* Featured Case Study */}
                    <div className="col-12 py-7 py-lg-10 position-relative">
                        <div className="card card--case-study border-0 bg-transparent" ref={featuredCaseStudyRef}>
                            <Link href="/case-studies/" aria-label="View VHA Resuscitation Symposium case study" className="text-decoration-none">
                                <div className="card-image">
                                    <img src="/images/home/case-study-vha-resuscitation-symposium.webp" className="card-img-top" alt="Person presenting at conference"></img>
                                </div>
                                <div className="card-body d-flex flex-column text-white p-0 mt-4 mt-md-7">
                                    <h3 className="card-title mb-3">VHA Resuscitation Symposium </h3>
                                    <span className="card-category">Event Management </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* End of Featured Case Study */}
                    {/* Secondary Case Studies */}
                    <div className="col-12 col-lg-6 position-relative">
                        <div className="card card--case-study border-0 bg-transparent" ref={secondCaseStudyRef}>
                            <Link href="/case-studies/" aria-label="View VA Immersive National Marketing case study" className="text-decoration-none">
                                <div className="card-image">
                                    <img src="/images/home/case-study-va-immersive-national-marketing.webp" className="card-img-top" alt="Person wearing VR headsest"></img>
                                </div>
                                <div className="card-body d-flex flex-column text-white p-0 mt-4 mt-lg-7">
                                    <h3 className="card-title mb-3">VA Immersive National Marketing </h3>
                                    <span className="card-category">Communications</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-7 mt-lg-0 position-relative">
                        <div className="card card--case-study border-0 bg-transparent" ref={thirdCaseStudyRef}>
                            <Link href="/case-studies/" aria-label="View Suicide Prevention Annual Report case study" className="text-decoration-none">
                                <div className="card-image">
                                    <img src="/images/home/case-study-va-immersive-national-marketing.webp" className="card-img-top" alt=""></img>
                                </div>
                                <div className="card-body d-flex flex-column text-white p-0 mt-4 mt-lg-7">
                                    <h3 className="card-title mb-3">Suicide Prevention Annual Report </h3>
                                    <span className="card-category">Web Design and Development</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* End of Secondary Case Studies */}
                </div>
            </div>
        </section>
    );
};

export default CaseStudySection;