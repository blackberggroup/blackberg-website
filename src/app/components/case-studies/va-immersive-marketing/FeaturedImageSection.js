import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from "gsap/dist/gsap";

const FeaturedImageSection = () => {

    const containerRef = useRef(null);
    const imageRef = useRef(null);
  
    useEffect(() => {
  
        let tl = gsap.timeline({
            scrollTrigger: {
            trigger: containerRef.current,
            toggleActions: "restart none none reset"
            }
        });
        
        tl.set(containerRef.current, { autoAlpha: 1 });

        tl.from(containerRef.current, {
            xPercent: -100,
     
            duration: 1.5
        });

        tl.from(imageRef.current, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
  
            duration: 1.5
        });
          
        // Clean up function
        return () => {
            if (tl) tl.kill();
        };
    }, []);
  

    return (
        <section id="featured-image" className="mb-8" aria-label="Featured image">
            <div className="container">
                <div className="row">
                    <div className="col-12 rounded-4 reveal-image">
                        <div className="inner" ref={containerRef}>
                            <Image src="/images/case-studies/va-immersive/va-immersive-cover.webp"
                                className="img-fluid rounded-4 w-100 position-relative" 
                                alt="Person wearing VR headset" 
                                fill={true}
                                ref={imageRef} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedImageSection;