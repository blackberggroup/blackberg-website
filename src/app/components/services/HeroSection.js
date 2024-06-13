import React, { useEffect } from 'react';

const HeroSection = () => {

    return (
            <section id="service-hero" className="hero hero--primary hero-trigger">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-12 col-md-12 col-lg-7">
                            <div className="hero-title">
                                <h1 className="display-2 text-white mb-3 mb-lg-5">Our Services</h1>
                                <p className="lead text-white">We believe public service impact happens at the intersection of strategic operations and creative marketing. By uniting these distinct capabilities, Blackberg helps shape hearts and minds behind public service missions.</p>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="hero__bg-image"></div>
                <div className="hero__donut">
                    <img src="/images/donut.svg" className="unselectable" />
                </div>
            </section>
    );
};

export default HeroSection;