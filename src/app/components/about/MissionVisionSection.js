import Image from 'next/image';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionVisionSection = () => {

    useEffect(() => {
        gsap.to('.circle-arrow-about', {
            rotation: 5,
            ease: 'none', 
            scrollTrigger: {
                trigger: 'body',
                start: '-=300', 
                end: '+=600',
                scrub: true,  
            }
        });
    }, []);    

    return (
            <section id="mission-vision-section" className="py-8 py-md-11 position-relative z-1">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-md-6 col-xl-5 col-xxl-4">
                            <div className="section-image">
                                <Image src="/images/about/about-mission-vision.webp"
                                    className="image rounded-4 mb-5 mb-md-0"
                                    fill={true}
                                    alt="Multiple US Air Force planes and helicopters flying in formation." />
                                <img src="/images/about/circle-arrow-about.svg" className="circle-arrow-about unselectable d-none d-sm-block" />                                
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