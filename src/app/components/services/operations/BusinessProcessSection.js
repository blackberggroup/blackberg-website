import Image from 'next/image';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const BusinessProcessSection = () => {

    useEffect(() => {
        // GSAP animation for rotating the circle-arrow
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
    }, []);    

    return (
            <section id="operations-business-process" className="py-8 py-md-11">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="section-image">
                                <Image src="/images/services/operations/business-process-engineering.webp"
                                    className="image rounded-4 mb-5 mb-md-0"
                                    fill={true}
                                    alt="Multiple US Air Force planes and helicopters flying in formation."
                                />
                                <img src="/images/circle-arrow.svg" className="circle-arrow unselectable d-none d-sm-block" />                                
                            </div>
                        </div>                        
                        <div className="col-12 col-md-6">
                            <h2 className="display-5 mb-3">Business Process Engineering</h2>
                            <p>We leverage our deep expertise in business process re-engineering to dissect and rebuild processes—ensuring they align perfectly with your strategic objectives and emerging market demands. This meticulous engineering results in enhanced productivity, reduced costs, and a robust framework that supports sustainable growth and adaptability in an ever-evolving business environment.</p>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default BusinessProcessSection;