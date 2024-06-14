import React, { useEffect } from 'react';

const HeroSection = () => {

    return (
            <section id="organizational-effectiveness-hero" className="hero hero--primary hero--right-align hero-trigger">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-12 col-md-12 col-lg-7 offset-lg-5">
                            <div className="hero-title">
                                <h1 className="display-2 text-white mb-3 mb-lg-5">Organizational Effectiveness</h1>
                                <p className="lead text-white"> Mastering data-driven change and innovation</p>
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