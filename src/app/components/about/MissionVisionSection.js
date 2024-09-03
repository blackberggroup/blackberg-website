import Image from 'next/image';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const MissionVisionSection = () => {

    useEffect(() => {
        gsap.to('.circle-arrow-about', {
            rotation: 45,
            ease: 'none', 
            scrollTrigger: {
                trigger: 'body',
                start: 'top top', 
                end: 'bottom top',
                scrub: true,  
            }
        });
    }, []);    

    return (
            <section id="mission-vision-section" className="py-8 py-md-11 position-relative z-1">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-md-6 col-xl-5 col-xxl-4">
                            <div className="position-relative">
                                <Image src="/images/about/about-mission-vision.webp"
                                    className="w-100 h-auto rounded-4 mb-5 mb-md-0 position-relative"
                                    fill={true}
                                    alt="Multiple US Air Force planes and helicopters flying in formation." />
                                <img src="/images/about/circle-arrow-about.svg" className="circle-arrow-about unselectable d-none d-sm-block" alt="" />                                
                            </div>
                        </div>                        
                        <div className="col-12 col-md-6 col-xl-5 col-xxl-4">
                            <h2 className="display-5 mb-3">Mission</h2>
                            <p>Unite strategic operations with creative marketing to uplift public service missions.</p>
                            <h2 className="display-5 mb-3 mt-6">Vision</h2>
                            <p>Advance public service missions and connect them with those who it serves. Together, we shape hearts and minds behind public service. </p>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default MissionVisionSection;