import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';

const CaseStudySection = ({ caseStudies }) => {

    //gsap.registerPlugin(ScrollTrigger);
    const featuredCaseStudyRef = useRef(null);
    const secondCaseStudyRef = useRef(null);
    const thirdCaseStudyRef = useRef(null);

    useEffect(() => {

        const featuredCaseStudy = featuredCaseStudyRef.current;
        const secondCaseStudy = secondCaseStudyRef.current;
        const thirdCaseStudy = thirdCaseStudyRef.current;

        // gsap.to(featuredCaseStudy, {
        //     translateY: "-64px",
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: featuredCaseStudy,
        //         start: 'top 100%',
        //         end: 'bottom top',
        //         scrub: true,
        //     }
        // });

        // gsap.to(secondCaseStudy, {
        //     translateY: "-64px",
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: secondCaseStudy,
        //         start: 'top 100%',
        //         end: 'bottom top',
        //         scrub: true,
        //     }
        // });

        // gsap.to(thirdCaseStudy, {
        //     translateY: "-64px",
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: thirdCaseStudy,
        //         start: 'top 100%',
        //         end: 'bottom top',
        //         scrub: true,
        //     }
        // });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, []);

    return (
        <section id="home-case-study-section" className="container-fluid pb-7 pb-md-10" aria-label="Case Study Overview">
            <div className="container position-relative">
                <div className="row mt-4 d-flex position-relative">
                    <div className="col-12 text-center pb-7 pb-lg-8">
                        <span className="text-headline-label text-headline-label--secondary text-uppercase text-white">Our Work</span>
                        <h2 className="text-headline display-3 text-white">Case Studies</h2>
                    </div>
                    {/* Featured Case Study */}
                    {caseStudies?.length > 0 &&
                    <div className="col-12  pb-7 pb-lg-10 position-relative">
                        <div className="card card--case-study border-0 bg-transparent" ref={featuredCaseStudyRef}>
                            <Link href={`/case-studies/${caseStudies[0].slug}`} aria-label="View VHA Resuscitation Symposium case study" className="text-decoration-none">
                                <div className="card-image card-image--featured">
                                    {/* <img src={caseStudies[0].coverImage.url} className="card-img-top" alt={caseStudies[0].coverImage.altText}></img>
                                     */}
                                    <Image src={caseStudies[0].coverImage.url}
                                        className="img-fluid rounded-4 w-100 position-relative" 
                                        alt={caseStudies[0].title}
                                        fill={true}
                                        loading="lazy" />
                                </div>
                                <div className="card-body d-flex flex-column text-white p-0 mt-4 mt-md-7">
                                    <h3 className="card-title mb-3">{caseStudies[0].title}</h3>
                                    <span className="card-category">{caseStudies[0].category} </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    }
                    {/* End of Featured Case Study */}
                    {/* Secondary Case Studies */}
                    {caseStudies?.length > 1 && 
                    <div className="col-12 col-lg-6 position-relative">
                        <div className="card card--case-study border-0 bg-transparent" ref={secondCaseStudyRef}>
                            <Link href={`/case-studies/${caseStudies[1].slug}`} aria-label="View VA Immersive National Marketing case study" className="text-decoration-none">
                                <div className="card-image">
                                    <Image src={caseStudies[1].coverImage.url}
                                    className="img-fluid rounded-4 w-100 position-relative" 
                                    alt={caseStudies[1].title}
                                    fill={true}
                                    loading="lazy" />
                                </div>
                                <div className="card-body d-flex flex-column text-white p-0 mt-4 mt-lg-7">
                                    <h3 className="card-title mb-3">{caseStudies[1].title} </h3>
                                    <span className="card-category">{caseStudies[1].category}</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    }                   
                    {caseStudies?.length > 2 && 
                    <div className="col-12 col-lg-6 mt-7 mt-lg-0 position-relative">
                        <div className="card card--case-study border-0 bg-transparent" ref={thirdCaseStudyRef}>
                            <Link href={`/case-studies/${caseStudies[2].slug}`} aria-label="View Suicide Prevention Annual Report case study" className="text-decoration-none">
                                <div className="card-image card-img-top">
                                    <Image src={caseStudies[2].coverImage.url}
                                    className="img-fluid rounded-4 w-100 position-relative" 
                                    alt={caseStudies[2].title}
                                    fill={true}
                                    loading="lazy" />
                                </div>
                                <div className="card-body d-flex flex-column text-white p-0 mt-4 mt-lg-7">
                                    <h3 className="card-title mb-3">{caseStudies[2].title} </h3>
                                    <span className="card-category">{caseStudies[2].category}</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    }
                    {/* End of Secondary Case Studies */}
                </div>
            </div>
        </section>
    );
};

export default CaseStudySection;