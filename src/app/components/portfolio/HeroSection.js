import React, { useEffect } from 'react';

const HeroSection = () => {

    return (
        <section id="portfolio-hero" className="hero hero--primary hero-trigger">
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-12 col-md-12 col-lg-7">
                        <div className="hero-title">
                            <h1 className="display-2 text-white mb-3 mb-lg-5">Portfolio</h1>
                            <p className="lead text-white">Discover our dynamic portfolio, showcasing a diverse range of branding, event, and publication projects designed to elevate your brand&rsquo;s voice. With deep expertise in communication and marketing, our work highlights creative strategies and successful implementations that drive results and effectively engage audiences.</p>
                        </div>                            
                    </div>
                </div>
            </div>
            <div className="hero__donut">
                <img src="/images/donut.svg" className="unselectable" alt="circle graphic" />
            </div>
        </section>
    );
};

export default HeroSection;