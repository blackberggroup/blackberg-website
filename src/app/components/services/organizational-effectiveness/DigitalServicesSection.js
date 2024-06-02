import Image from 'next/image';
import React, { useEffect } from 'react';

const DigitalServicesSection = () => {

    return (
            <section id="organizational-effectiveness-digital-services" className="py-8 py-md-11">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="section-image">
                                <Image src="/images/services/organizational-effectiveness/digital-services.webp"
                                    className="image rounded-4 mb-5 mb-md-0"
                                    fill={true}
                                    alt="A person's extended hand. Interconnected cloud graphics overlaying the hand."
                                />
                            </div>
                        </div>                        
                        <div className="col-12 col-md-6">
                            <h2 className="display-5 mb-3">Digital Services</h2>
                            <p>Our digital services meld cloud transformation, software development, data management, and digital experience optimization into a cohesive digital force. This integration enhances your operational effectiveness, drives innovation, and positions your organization for sustained success in a rapidly evolving digital landscape.</p>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default DigitalServicesSection;
