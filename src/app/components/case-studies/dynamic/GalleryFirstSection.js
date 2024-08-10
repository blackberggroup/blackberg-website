import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const GalleryFirstSection = ({ page }) => {

    useEffect(() => {

        const images = document.querySelectorAll("#gallery img");

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
                    trigger: "#gallery",
                    start: "top 70%", 
                    once: true,
                }
            }
        );

    }, []);

    return (
        <section id="gallery" className="case-study-gallery py-8 py-md-11" aria-label="Gallery">
            <div className="container">
                <div className="row gx-3 gy-3 gx-lg-5">
                    {page.gallery && page.gallery.length > 0 && (
                    <div class="col-12 col-md-7 mt-0" id="gallery-img-one">
                        <div className="img-reveal rounded-4">
                            <Image src={page.gallery[0].url}
                                className="img-fluid rounded-4 w-100 position-relative will-change" 
                                alt={page.gallery[0].altText}
                                fill={true}
                                loading="lazy" />
                        </div>
                    </div>
                    )}
                    <div className="col-12 col-md-5 mt-3 mt-md-0 d-flex flex-column">
                        {page.gallery && page.gallery.length > 1 && (
                        <div className="col-12" id="gallery-img-two">
                            <div className="img-reveal rounded-4">
                                <Image src={page.gallery[1].url}
                                    className="img-fluid rounded-4 w-100 position-relative will-change" 
                                    alt={page.gallery[1].url}
                                    fill={true}
                                    loading="lazy" />
                            </div>
                        </div>
                        )}
                        <div className="col-12 d-flex mt-3 mt-lg-5 d-flex flex-grow-1">
                            {page.gallery && page.gallery.length > 2 && (
                            <div className="col-6 pe-2 pe-lg-3" id="gallery-img-three">
                                <div className="img-reveal rounded-4">
                                    <Image src={page.gallery[2].url}
                                        className="img-fluid rounded-4 w-100 position-relative will-change" 
                                        alt={page.gallery[2].altText}
                                        fill={true}
                                        loading="lazy" />
                                </div>
                            </div>
                            )}
                            {page.gallery && page.gallery.length > 3 && (
                            <div className="col-6 ps-2 ps-lg-3" id="gallery-img-four">
                                <div className="img-reveal rounded-4">
                                    <Image src={page.gallery[3].url}
                                        className="img-fluid rounded-4 w-100 position-relative will-change" 
                                        alt={page.gallery[3].altText}
                                        fill={true}
                                        loading="lazy" />
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
      </section>
    );
};

export default GalleryFirstSection;