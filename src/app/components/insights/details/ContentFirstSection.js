import React from 'react';
import RichTextRenderer from '../../rich-text/RichTextRenderer';

const ContentFirstSection = ({ page }) => {


    return (
        <section id="content-first" className="pb-6 pb-md-7 content-rich-text" aria-label="Case study challenge and solution">
            <div className="container">
                {page.content && (
                <div className="row mb-0">
                    <div className="col-12 col-md-8 col-lg-8 col-xxl-7 mx-auto">    
                        <RichTextRenderer page={page} />
                    </div>
                </div>
                )}
            </div>
        </section>
    );
};

export default ContentFirstSection;