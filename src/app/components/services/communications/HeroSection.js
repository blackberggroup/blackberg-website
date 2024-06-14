import React, { useEffect } from 'react';

const HeroSection = () => {

    return (
            <section id="communications-hero" className="hero hero--primary hero--right-align hero-trigger">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <img src="/images/services/communications/hero-video-donut.webp" className="fluid-img hero__video-image d-none d-lg-block" alt="Donut shaped image of diverse professionals clapping and smiling" />
                        <div className="col-12 col-md-12 col-lg-7 offset-lg-5">
                            <div className="hero-title">
                                <h1 className="display-2 text-white mb-3 mb-lg-5">Communications</h1>
                                <p className="lead text-white"> Shaping Hearts and Minds Behind Public Service</p>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="hero__bg-image"></div>
                <div className="hero__donut">
                    <img src="/images/donut.svg" className="unselectable" alt="" />
                </div>
            </section>
    );
};

export default HeroSection;