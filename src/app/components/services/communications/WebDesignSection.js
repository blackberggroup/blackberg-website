import React, { useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const WebDesignSection = () => {
    useEffect(() => {
        gsap.to('.circle-arrow', {
            rotation: 35,  // Rotate 360 degrees
            ease: 'none',   // No easing for continuous rotation
            scrollTrigger: {
                trigger: 'body', // Trigger the animation when this section enters the viewport
                start: 'top top',  // Start the animation when the top of the section reaches the top of the viewport
                end: 'bottom top', // End the animation when the bottom of the section reaches the top of the viewport
                scrub: true,       // Smooth scrubbing, ties the animation progress to the scroll progress
            }
        });

        const thumbs = document.querySelectorAll('.column');

        thumbs.forEach((thumb) => {
            gsap.fromTo(thumb, {
                x: 0
            }, {
                y: -400, // Adjust this value to control the parallax depth
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: "#communications-web-design",
                    start: "top bottom", // Trigger animation when thumb starts to enter viewport
                    end: "bottom top", // End animation when thumb leaves viewport
                    scrub: true
                }
            });
        });
    }, []);

    return (
        <section id="communications-web-design" className="py-8 py-md-11">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-10 offset-lg-1">
                        <h2 className="text-headline display-5 mb-3 text-center">Web Design and Development</h2>
                        <p>Transform your online presence with our digital team, where technical expertise meets sophisticated design. We focus on creating websites that are both visually striking and functionally reliable. Our approach balances robust back-end infrastructure with a seamless front-end user experience, ensuring that your website is more than just a digital address — an interactive showcase of your brand&lsquo;s personality and values.</p>
                        <div className="text-center">
                            <Link href="/case-studies/2023-suicide-prevention-annual-report" aria-label="View latest web design case study" className="btn btn-primary d-none">View Latest Case Study
                                <img src="/images/arrow-narrow-right-light.svg" width="20" height="20" className="ms-2" alt="" />
                            </Link> 
                        </div>
                    </div> 
                </div>
                <div className="iso-wrapper position-relative">
                    <div className="iso-container overflow-hidden position-relative rounded-4 bg-primary my-7 my-lg-10">
                        <div className="iso-row">
                            <div className="column">
                                <figure className="ItemCard__thumb">
                                    <img src="/images/services/communications/mockups/isometric/spar-1.webp" className="img-fluid" alt="Mockup of the Suicide Prevention Annual Report website" />
                                </figure>
                            </div>
                            <div className="column mt-6">
                                <figure className="ItemCard__thumb">
                                    <img src="/images/services/communications/mockups/isometric/fellowships.webp" className="img-fluid" alt="Mockup of the VHA Fellowships website" />                                    
                                </figure>
                            </div>
                            <div className="column">
                                <figure className="ItemCard__thumb">
                                    <img src="/images/services/communications/mockups/isometric/iex-2023.webp" className="img-fluid" alt="Mockup of the iEX 2023 landing page" />
                                </figure>
                            </div>
                            <div className="column mt-6">
                                <figure className="ItemCard__thumb">
                                    <img src="/images/services/communications/mockups/isometric/ncchi.webp" className="img-fluid" alt="Mockup of the VHA National Center for Collaborative Healthcare Innovation website" />
                                </figure>
                            </div>     
                            <div className="column d-block d-md-none">
                                <figure className="ItemCard__thumb">
                                    <img src="/images/services/communications/mockups/isometric/spar-1.webp" className="img-fluid" alt="Mockup of the Suicide Prevention Annual Report website" />
                                </figure>
                            </div>
                            <div className="column mt-6 d-block d-md-none">
                                <figure className="ItemCard__thumb">
                                    <img src="/images/services/communications/mockups/isometric/fellowships.webp" className="img-fluid" alt="Mockup of the VHA Fellowships website" />                                    
                                </figure>
                            </div>             
                        </div>
                    </div>
                    <img src="/images/circle-arrow.svg" className="circle-arrow unselectable d-none d-sm-block" alt="" />                                
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4 mb-5 mb-lg-0">
                        <h3 className="h2">Product Consulting</h3>
                        <p>Our product consultants use a proven method to break down your product into its essential components, analyze each part, and offer prioritized recommendations to optimize every aspect.</p>
                    </div>
                    <div className="col-12 col-lg-4 mb-5 mb-lg-0">
                        <h3 className="h2">UI/UX Design</h3>
                        <p>Exceptional UI/UX design, incorporating optimal flow and a seamless user journey, is key to creating a truly great product that drives user actions, and our extensive experience refining hundreds of top apps and products ensures we deliver just that.</p>
                    </div>
                    <div className="col-12 col-lg-4">
                        <h3 className="h2">Web Development</h3>
                        <p>Your website serves as your online identity, so to make an instant impact and foster lasting connections with your target audience, it must be sharp, clear, and convey your message effectively from the start.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDesignSection;
