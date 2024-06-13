import React, { useEffect } from 'react';

const HeroSection = () => {

    return (
        <section id="about-hero" className="hero hero--about hero-trigger">
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-12 col-md-11 col-lg-8 col-xl-7 text-center mx-auto">
                        <div className="hero-title">
                            <span className="text-headline-label text-headline-label--secondary text-uppercase">About</span>
                            <h1 className="display-5 mb-3 mb-lg-5">Fueled by True Passion</h1>
                            <p className="m-0">At Blackberg Group, strategic prowess meets creative ingenuity to redefine the future of public service. We tackle challenges head-on, turning obstacles into opportunities. Simultaneously, we embrace bold creativity—incorporating fresh perspectives into every endeavor.</p>
                        </div>                            
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;