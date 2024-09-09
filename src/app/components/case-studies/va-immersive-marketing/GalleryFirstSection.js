import React from 'react';
import Image from 'next/image';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const GalleryFirstSection = () => {

    return (
        <section id="gallery" className="py-8 py-md-11" aria-label="Gallery">
            <div className="container">
                <div className="row gx-3 gy-3 gx-lg-5">
                    <div className="col-12 col-md-7 mt-0">
                        <Image src="/images/case-studies/va-immersive/va-immersive-person-using-vr-2.webp"
                             className="img-fluid rounded-4 w-100 position-relative" 
                             alt="Person wearing VR headset" 
                             fill={true}
                             loading="lazy" />
                    </div>
                    <div className="col-12 col-md-5 mt-3 mt-md-0">
                        <div className="col-12">
                            <Image src="/images/case-studies/va-immersive/va-immersive-person-using-vr-3.webp"
                                className="img-fluid rounded-4 w-100 position-relative" 
                                alt="Person wearing VR headset" 
                                fill={true}
                                loading="lazy" />
                        </div>
                        <div className="col-12 d-flex mt-3 mt-lg-5">
                            <div className="col-6 pe-2 pe-lg-3">
                                <Image src="/images/case-studies/va-immersive/va-immersive-person-using-vr-4.webp"
                                    className="img-fluid rounded-4 w-100 position-relative" 
                                    alt="Person wearing VR headset" 
                                    fill={true}
                                    loading="lazy" />
                            </div>
                            <div className="col-6 ps-2 ps-lg-3">
                                <Image src="/images/case-studies/va-immersive/va-immersive-people-by-hardware.webp"
                                    className="img-fluid rounded-4 w-100 position-relative" 
                                    alt="Person wearing VR headset" 
                                    fill={true}
                                    loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    );
};

export default GalleryFirstSection;