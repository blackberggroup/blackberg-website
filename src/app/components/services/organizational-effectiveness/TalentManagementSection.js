import Image from 'next/image';
import React, { useEffect } from 'react';

const TalentManagementSection = () => {

    return (
            <section id="organizational-effectiveness-talent-management" className="py-8 py-md-11">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 order-2 order-md-1">
                            <h2 className="display-5 mb-3">Talent Management</h2>
                            <p>Blackberg deploys an interdisciplinary approach to strategic planning&mdash;synthesizing strategic awareness and formulating a response that positions your organization for success. Our experts work in tandem with leaders to refine their organization&ldquo;s vision, mission, purpose, goals, and strategic objectives.</p>
                            <p>We construct goals and strategic objectives in a time-bound and priority manner, including objectives based on predicted trends for future-oriented takes. This enables proactive strategic positioning and planning, while maintaining flexibility for alternative future states.</p>
                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-2">
                            <div className="section-image">
                                <Image src="/images/services/organizational-effectiveness/talent-management.webp"
                                    className="image rounded-4 mb-5 mb-md-0"
                                    fill={true}
                                    alt="A group of professionals smiling and greeting their client."
                                />
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>
    );
};

export default TalentManagementSection;