import React from 'react';
import RichTextRenderer from '../../rich-text/RichTextRenderer';

const ContentSection = ({ page }) => {

    return (
        <section id="content" className="py-8 py-md-11 content-rich-text" aria-label="Career Details content">
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

export default ContentSection;