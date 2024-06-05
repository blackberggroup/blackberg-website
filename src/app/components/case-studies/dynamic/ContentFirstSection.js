import React from 'react';

const ContentFirstSection = ({ page }) => {

    return (
        <section id="content-first" className="pb-8 pb-md-11" aria-label="Case study challenge and solution">
            <div className="container">
                {page.introContent && (
                <div className="row mb-0">
                    <div className="col-12 col-md-8 col-lg-6 mx-auto">
                        <p className="m-0">{page.introContent}</p>
                    </div>
                </div>
                )}
                {/* Divider */}
                <div className="row my-0">
                <div classname="col-12 hr">
                    <hr className="hr--primar my-8" />
                </div>
                </div>
                {/* Content | The Challenge */}
                {page.challengeContent && (
                <div className="row mt-0">
                    <div className="col-12 col-md-8 col-lg-6 mx-auto">
                        <h2 className="display-5 mb-3">The Challenge</h2>
                        <p className="m-0">{page.challengeContent}</p>
                    </div>
                </div>
                )}
                {/* Content | The Solution */}
                {page.solutionConten && (
                <div className="row mt-8 mt-md-11">
                    <div className="col-12 col-md-8 col-lg-6 mx-auto">
                        <h2 className="display-5 mb-3">The Solution</h2>
                        <p className="m-0">{page.solutionContent}</p>
                    </div>
                </div>
                )}
            </div>
        </section>
    );
};

export default ContentFirstSection;