import React from 'react';

const HeroSection = () => {

    return (
            <section id="case-study-hero" className="hero hero--primary hero-trigger">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-12 col-md-12 col-lg-7">
                            <div className="hero-title">
                                <h1 className="display-2 text-white mb-3 mb-lg-5">Case Studies</h1>
                                <p className="lead text-white">Explore the real impact of strategic collaboration and innovative solutions. Our Case Studies showcase how Blackberg Group, armed with a dynamic team of subject matter experts, consistently achieves tangible and measurable results for our clients.</p>
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