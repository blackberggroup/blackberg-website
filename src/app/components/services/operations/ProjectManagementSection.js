import Image from 'next/image';
import React, { useEffect } from 'react';

const ProjectManagementSection = () => {

    return (
            <section id="operations-project-management" className="py-8 py-md-11">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 order-2 order-md-1">
                            <h2 className="display-5 mb-3">Project Management Solution Group</h2>
                            <p>While project management fundamentals remain consistent, project management must continuously evolve to achieve organizational results and excellence. Blackberg has established an in-house Project Management Solution Group designed for managers to assess emerging trends, share lessons learned, and engage in forward-thinking discussions.</p>
                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-2">
                            <div className="section-image">
                                <Image src="/images/services/operations/project-management-solution-group.webp"
                                    className="image rounded-4 mb-5 mb-md-0"
                                    fill={true}
                                    alt="ALT_TEXT"
                                />
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>
    );
};

export default ProjectManagementSection;