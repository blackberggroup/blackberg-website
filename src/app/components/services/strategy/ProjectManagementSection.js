import Image from 'next/image';
import React, { useEffect } from 'react';

const ProjectManagementSection = () => {

    return (
            <section id="operations-project-management" className="py-8 py-md-11">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 order-2 order-md-1">
                            <h2 className="display-5 mb-3">Strategic Awareness</h2>
                            <p>A great strategy begins with a robust awareness of your organization&lsquo;s internal and external environment. Trends like globalization, social media, and cloud computing have narrowed the window of relevance to annual strategic refreshes. The advent of artificial intelligence, increased mobility, and advances in data science promise to narrow the window of relevance further.</p>
                            <p>We move beyond the &ldquo;snapshot approach&ldquo;—tailoring awareness to predictive trends and factors most relevant to our organization. These span policy, law, environmental, social, political, economic, value chains, technology, talent, and stakeholder needs. By emphasizing predictive trends, we anticipate strategic positioning for the future.</p>
                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-2">
                            <div className="section-image">
                                <Image src="/images/services/strategy/strategic-awareness.webp"
                                    className="image rounded-4 mb-5 mb-md-0"
                                    fill={true}
                                    alt="A man using a tablet to analyze pie charts."
                                />
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>
    );
};

export default ProjectManagementSection;