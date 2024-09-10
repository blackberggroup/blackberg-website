import React, { useEffect } from 'react';

const HeroSection = () => {

    return (
            <section id="service-hero" className="hero hero--contact d-flex align-items-center hero-trigger">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-12 col-lg-9 text-center mx-auto">
                            <div className="hero-title py-0 py-lg-6">
                                <span className="text-headline-label text-headline-label--secondary text-uppercase">Contact</span>
                                <h1 className="display-5 mb-3 mb-lg-5">Get in touch. Say hello.</h1>
                                <p className="m-0">If you have a complex problem that needs support, our team would love to speak with you.  </p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default HeroSection;