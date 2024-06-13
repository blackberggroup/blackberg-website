import React, { useEffect } from 'react';

const HeroSection = () => {

    return (
            <section id="operations-hero" className="hero hero--primary hero-trigger">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-12 col-md-12 col-lg-7">
                            <div className="hero-title">
                                <h1 className="display-2 text-white mb-3 mb-lg-5">Operations</h1>
                                <p className="lead text-white">Driving operations into pathways for unprecedented growth</p>
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