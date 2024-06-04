import React, { useEffect } from 'react';

const HeroSection = () => {

    return (
            <section id="service-hero" className="hero hero--contact">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-12 col-md-12 col-lg-9 text-center mx-auto">
                            <div className="hero-title">
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