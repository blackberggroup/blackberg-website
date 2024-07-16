import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';

const ResourcesSection = ({ page }) => {
    if(page.resources){
        return (
            <section id="insight-resources" className="pb-6 pb-md-7" aria-label="Insight resources">
                <div className="container">
                    {page.resources && (
                    <div className="row mb-0">
                        <div className="col-12 col-md-8 col-lg-8 col-xxl-7 mx-auto content-rich-text">    
                            <span className="display-5 pb-4 d-flex">Resources</span>
                            <RichText className="mt-3" content={page.resources.raw} />
                        </div>
                    </div>
                    )}
                </div>
            </section>
        );
    }
};

export default ResourcesSection;