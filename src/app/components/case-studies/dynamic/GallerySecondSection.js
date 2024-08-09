import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const GallerySecondSection = ({ page }) => {

    
    useEffect(() => {

        const images = document.querySelectorAll("#gallery-two img");

        gsap.fromTo(
            images,
            {
                opacity: 0,
                scale: 1.25,
                y: 0
            },
            {
                ease: "Power3.out",
                opacity: 1,
                duration: 1,
                y: 0,
                scale: 1,
                stagger: 0.25,
                scrollTrigger: {
                    trigger: "#gallery-two", // Ensure the correct trigger element is used
                    start: "top 70%", // Adjust start position to trigger later
               //     markers: true, // Markers for debugging
                    once: true, // Ensure the animation runs only once
                    //delay: 0.4,
                }
            }
        );

        // Clean up function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, []);

    return (
        <section id="gallery-two" className="py-8 py-md-11" aria-label="Second gallery">
            <div className="container">
                <div className="row gx-4 gx-md-5">
                    {page.gallerySecondary && page.gallerySecondary.length > 0 && (
                    <div class="col-12 col-md-6">
                        <div className="img-reveal rounded-4">
                            <Image src={page.gallerySecondary[0].url}
                                className="img-fluid rounded-4 w-100 position-relative will-change" 
                                alt={page.gallerySecondary[0].altText}
                                fill={true}
                                loading="lazy" />
                        </div>
                    </div>
                    )}
                    {page.gallerySecondary && page.gallerySecondary.length > 1 && (
                    <div class="col-12 col-md-6 mt-4 mt-md-auto">
                        <div className="img-reveal rounded-4">
                            <Image src={page.gallerySecondary[1].url}
                                className="img-fluid rounded-4 w-100 position-relative will-change" 
                                alt={page.gallerySecondary[1].altText}
                                fill={true}
                                loading="lazy" />
                        </div>
                    </div>
                    )}
                    </div>
                </div>
        </section>
    );
};

export default GallerySecondSection;