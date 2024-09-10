import Image from 'next/image';
import React, { useEffect } from 'react';

const HeroSection = ({ page }) => {

    const typeMapping = {
        fullTime: "Full-time",
        partTime: "Part-time",
        contract: "Contract",
        temporary: "Temporary"
    };

    return (
            <section id="careers-hero" className="hero hero--careers d-flex align-items-center hero-trigger">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-12 col-lg-9 text-center mx-auto">
                            <div className="hero-title py-0 py-lg-6">
                                <span className="text-headline-label text-headline-label--secondary text-uppercase">Careers</span>
                                <h1 className="display-5 mb-0">{page.title}</h1>
                            </div>                       
                            <div className="hero-details d-flex justify-content-center text-figtree">
                                <div className="detail detail--location me-3 d-flex align-items-center">
                                        <Image src="/images/location-icon.svg"
                                        className="img-fluid position-relative me-1" 
                                        alt="location pin icon"
                                        width="20"
                                        height="20"/>
                                    <span>{page.location}</span>
                                </div>
                                <div className="detail detail--type d-flex align-items-center">
                                    <Image src="/images/clock-icon.svg"
                                    className="img-fluid me-1" 
                                    alt="job type icon"
                                    width="20"
                                    height="20" />
                                    <span>{typeMapping[page.type] || "Full-time"}</span>
                                </div>
                            </div>     
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default HeroSection;