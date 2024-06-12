import React from 'react';
import Image from 'next/image';

const RelatedCaseStudiesSection = () => {

    return (
        <section id="related-case-studies" className="py-8 py-md-11" aria-label="Related case studies">
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-0 mb-5 mb-md-7">
                        <h4 className="display-5 m-0">Related Case Studies</h4>
                    </div>
                    {/* Copy & Paste for additional Case Studies */}
                    <div className="col-12 col-md-6 d-flex flex-column">
                        <figure className="mb-4">
                            <Image src="/images/case-studies/va-immersive/case-study-vha-resuscitation-symposium.webp"
                             className="img-fluid rounded-4 w-100 position-relative" 
                             alt="Person wearing VR headset" 
                             fill={true}
                             loading="lazy" />
                        </figure>
                        <h5 className="mb-3">VA Immersive National Marketing</h5>
                        <span className="badge badge--case-study align-self-start">Communications</span>
                    </div>
                    {/* End of Copy & Paste */}
                </div>
            </div>
        </section>
    );
};

export default RelatedCaseStudiesSection;