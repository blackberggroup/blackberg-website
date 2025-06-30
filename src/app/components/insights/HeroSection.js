import React, { useEffect } from 'react';

const HeroSection = () => {

    return (
        <section id="insight-hero" className="hero hero--primary hero-trigger">
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-12 col-md-12 col-lg-7">
                        <div className="hero-title">
                            <h1 className="display-2 text-white mb-3 mb-lg-5">Insights</h1>
                            <p className="lead text-white">Discover thought leadership and real-world solutions designed to drive measurable impact in federal, state, and local sectors. From AI-powered marketing and influencer strategies to human-centered design and organizational effectiveness, our Insights guide you through practical approaches to achieve your mission.</p>
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