import React from 'react';
import Link from 'next/link';

const ResultsSection = ({ page }) => {

    return (
        <section id="results" className="py-8 py-md-11" aria-label="Results">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6 mx-auto">
                        <h2 className="display-5 mb-3">The Result</h2>
                        <p className="m-0 mb-5">{page.resultContent}</p>
                        <h3>Share this case study:</h3>
                        <div className="social-share mt-4">
                            <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${page.slug}`} target="_blank" className="btn btn-outline" aria-label={`Share ${page.title} case study on LinkedIn`}>LinkedIn</Link>
                            <Link href={`https://www.twitter.com/intent/tweet?text=${page.title}&via=blackberggroup&url=https://blackberggroup.com/case-studies/${page.slug}`} target="_blank" className="btn btn-outline" aria-label={`Share ${page.title} case study on Twitter`}>Twitter</Link>
                            <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://blackberggroup.com/case-studies/${page.slug}`} target="_blank" className="btn btn-outline" aria-label={`Share ${page.title} case study on Facebook`}>Facebook</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultsSection;