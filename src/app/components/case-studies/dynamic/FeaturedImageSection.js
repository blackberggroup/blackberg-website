import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const FeaturedImageSection = ({ page }) => {

    useEffect(() => {

        gsap.fromTo("#featured-image img", 
            { scale: 1.25 }, 
            { scale: 1, duration: 1.5, ease: "power2.out", delay: .8}
        );

        gsap.to("#featured-image img", {
            y: "10%",
            ease: "none",
            scrollTrigger: {
                trigger: "#featured-image", 
                start: "top center", 
                end: "bottom top", 
                scrub: true, 
                markers: false, 
            }
        });

    }, []);

    return (
        <section id="featured-image" className="mb-8" aria-label="Featured image">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="img-reveal rounded-4">
                            <Image src={page.coverImage.url}
                                className="img-fluid rounded-4 w-100 position-relative will-change" 
                                alt={page.coverImage.altText}
                                fill={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedImageSection;