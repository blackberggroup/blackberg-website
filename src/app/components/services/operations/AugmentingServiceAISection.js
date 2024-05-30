import Image from 'next/image';
import React, { useEffect } from 'react';

const AugmentingServiceAISection = () => {

    return (
            <section id="operations-augmented-services-ai" className="py-8 py-md-11">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 order-2 order-md-1">
                            <h2 className="display-5 mb-3">Augmenting Services with AI</h2>
                            <p>Our team is testing emerging AI solutions to augment staffing, optimize workflow efficiency, and personalize communications. As part of this in-house experimentation, we&lsquo;re uncovering the best solutions for more holistic AI integration.</p>
                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-2">
                            <div className="section-image">
                                <Image src="/images/services/operations/augmenting-services-ai.webp"
                                    className="image rounded-4 mb-5 mb-md-0"
                                    fill={true}
                                    alt="Man siting at a desk with a laptop. Augmented reality of charts and data is displayed."
                                />
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>
    );
};

export default AugmentingServiceAISection;