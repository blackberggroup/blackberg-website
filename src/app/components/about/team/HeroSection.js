import React, { useEffect } from 'react';

const HeroSection = () => {

    return (
        <section id="about-hero" className="hero hero--about hero--about-team hero-trigger">
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-12 col-md-11 col-lg-8 col-xl-7 text-center mx-auto">
                        <div className="hero-title">
                            <span className="text-headline-label text-headline-label--secondary text-uppercase">About</span>
                            <h1 className="display-5 mb-0">Meet The Team</h1>
                        </div>                            
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;