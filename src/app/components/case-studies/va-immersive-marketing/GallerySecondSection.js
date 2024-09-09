import React from 'react';
import Image from 'next/image';

const GallerySecondSection = () => {

    return (
        <section id="gallery-two" className="py-8 py-md-11" aria-label="Second gallery">
            <div className="container">
                <div className="row gx-4 gx-md-5">
                    <div className="col-12 col-md-6">
                        <Image src="/images/case-studies/va-immersive/va-immersive-people-holding-vr-devices.webp"
                             className="img-fluid rounded-4 w-100 position-relative" 
                             alt="Person wearing VR headset" 
                             fill={true}
                             loading="lazy" />
                    </div>
                    <div className="col-12 col-md-6 mt-4 mt-md-auto">
                        <Image src="/images/case-studies/va-immersive/va-immersive-person-using-vr.webp"
                             className="img-fluid rounded-4 w-100 position-relative" 
                             alt="Person wearing VR headset" 
                             fill={true}
                             loading="lazy" />
                    </div>
                    </div>
                </div>
        </section>
    );
};

export default GallerySecondSection;