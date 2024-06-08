import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CreativeStudioSection = () => {

    useEffect(() => {
        const dots = document.querySelectorAll('.dot');
        
        dots.forEach((dot, index) => {
            gsap.fromTo(dot, 
                { y: index % 2 === 0 ? -50 : -80 }, // Start position
                { 
                    y: index % 2 === 0 ? 50 : -20, // End position
                    ease: 'Power1.easeOut',
                    scrollTrigger: {
                        trigger: dot,
                        start: 'top bottom', // When the top of the dot hits the bottom of the viewport
                        end: 'bottom top', // When the bottom of the dot hits the top of the viewport
                        scrub: true
                    }
                }
            );
        });
    }, []);

    return (
        <section id="communications-creative-studio" className="py-8 py-md-11">
            <div className="container position-relative">
                <div className="section-wrapper rounded-4 p-6 p-md-8">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 order-2 order-lg-1">
                            <h2 className="text-headline display-5 text-black mb-3">Creative Studio</h2>
                            <p>Blackberg Creative Studio is where imagination and vision come to life. We deliver a full suite of in-house creative services spanning graphic design, web design, videography, and photography. This creative hub is dedicated to innovation and aesthetic excellence, ensuring that every piece of content we produce is not only visually stunning but also strategically aligned with your goals.</p>
                        </div>
                        <div className="col-12 col-lg-5 offset-lg-1 order-1 order-lg-2 mb-6 mb-lg-0">
                            <img src="/images/services/communications/creative-studio.webp" className="img-fluid" />
                        </div>                        
                    </div>
                </div>
                <span className="dot dot__one top-50 end-100 z-n1"></span>
                <span className="dot dot__two top-0 end-0 z-n1"></span>
                <span className="dot dot__three top-100 start-50  z-n1"></span>
            </div>
        </section>
    );
};

export default CreativeStudioSection;
