import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from "gsap/dist/gsap";

const FeaturedImageSection = () => {

    const containerRef = useRef(null);
    const imageRef = useRef(null);
  
    useEffect(() => {
  
        const tl = gsap.timeline({
            repeat: 0, 
            delay: 0,
            ease: "sine.out"
        });

        tl.set(containerRef.current, {
            visibility: "visible"
        });
        
        tl.fromTo(containerRef.current,
            {
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
            },
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 1,
                ease: "sine.out"
            }
        );

        tl.from(imageRef.current, {
            scale: 1.4,
            duration: 3,
            ease: "sine.out",
            delay: -1
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