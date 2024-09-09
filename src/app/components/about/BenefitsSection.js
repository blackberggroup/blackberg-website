import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const BenefitsSection = () => {

    useEffect(() => {
 
        gsap.to(".circle-36", {
            translateY: "-100px",
            ease: "none",
            scrollTrigger: {
                trigger: "#benefits-section",
                start: 'top top',
                end: "+=1000px",
                scrub: true,
            }
        });

        gsap.to(".circle-76", {
            translateY: "-70px",
            ease: "none",
            scrollTrigger: {
                trigger: "#benefits-section",
                start: 'top top',
                end: "+=1000px",
                scrub: true,
            }
        });

        gsap.to(".circle-106", {
            translateY: "-100px",
            ease: "none",
            scrollTrigger: {
                trigger: "#benefits-section",
                start: 'top top',
                end: "+=1000px",
                scrub: true,
            }
        });

    }, []);    

    return (
        <section id="benefits-section" className="py-8 py-md-11">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-9 col-lg-6 col-xl-5 text-center mx-auto position-relative z-2">
                        <span className="text-headline-label text-headline-label--secondary text-uppercase">Benefits</span>
                        <h2 className="display-5 m-0 text-uppercase">Our Work Perks</h2>
                        <p className="mb-0 mt-5">As a small firm, our culture is continuously evolving alongside our workforce. Below are some of the employee-launched and firm-supported initiatives that we foster today.</p>                       
                    </div>
                </div>
                <div className="row mt-6 mt-md-8 gx-5 justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4 position-relative">
                        <div className="circle-detail circle-36 z-1"></div>
                        <div className="circle-detail circle-76 z-1"></div>
                        <div className="bg-white rounded-4 p-4 p-md-5 benefits-card position-relative z-2 h-100">
                            <Image src="/images/about/professional-development-icon.webp"
                                className="img-fluid position-relative h-auto benefits-icon"
                                fill={true}
                                alt="Multiple US Air Force planes and helicopters flying in formation." />
                            <h3 className="h5 my-3">Professional Development</h3>
                            <p className="m-0">We believe in investing back in our people. Blackberg houses a professional development action group that builds a learning curriculum customized to each career track, mentorship programming, and our broader learning management system.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 position-relative mt-6 mt-md-0">
                        <div className="bg-white rounded-4 p-4 p-md-5 benefits-card position-relative z-2 h-100">
                            <Image src="/images/about/remote-work-icon.webp"
                                className="img-fluid position-relative h-auto benefits-icon"
                                fill={true}
                                alt="Multiple US Air Force planes and helicopters flying in formation." />
                            <h3 className="h5 my-3">Remote Work</h3>
                            <p className="m-0">While some clients require in-person meetings or travel, most of our work can be completed remotely. We trust our people to perform wherever they may be located. Our consultants span coast to coast, delivering impact across the nation.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 position-relative mt-6 mt-lg-0">
                    <div className="circle-detail circle-106 z-1"></div>
                        <div className="bg-white rounded-4 p-4 p-md-5 benefits-card position-relative z-2 h-100">
                            <Image src="/images/about/corporate-social-responsibility-icon.webp"
                                className="img-fluid position-relative h-auto benefits-icon"
                                fill={true}
                                alt="Multiple US Air Force planes and helicopters flying in formation." />
                            <h3 className="h5 my-3">Corporate Social Responsibility</h3>
                            <p className="m-0">As a Veteran-owned business dedicated to public service, we are committed to giving back to our community and producing real action that betters our society. Our goal is to be thoughtful about how our work and our actions impact the world around us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;