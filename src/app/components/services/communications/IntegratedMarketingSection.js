import Image from 'next/image';
import React, { useEffect } from 'react';

const IntegratedMarketingSection = () => {

    return (
        <section id="communications-integrated-marketing" className="py-8 py-md-11">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="section-image">
                            <Image src="/images/services/communications/integrated-marketing.webp"
                                className="image rounded-4 mb-5 mb-md-0"
                                fill={true}
                                alt="Two circles laying on a greed background with small balls organized inside of the two circles."
                            />
                        </div>
                    </div>                        
                    <div className="col-12 col-md-6">
                        <h2 className="display-5 mb-3">Integrated Marketing</h2>
                        <p>We ensure your brand story is presented cohesively across platforms, maximizing reach and engagement. Our data-driven strategies not only amplify your message, but also drive awareness and engagement in your mission.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegratedMarketingSection;