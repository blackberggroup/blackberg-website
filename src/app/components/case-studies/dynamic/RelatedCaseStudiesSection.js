import React from 'react';
import Image from 'next/image';
import HrSpacer from '../HrSpacer';
import Link from 'next/link';

const RelatedCaseStudiesSection = ({ page }) => {

    return (
        <>
        {page.relatedCaseStudies && page.relatedCaseStudies.length > 0 && (
        <>
        <HrSpacer />
        <section id="related-case-studies" className="py-8 py-md-11" aria-label="Related case studies">
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-0 mb-5 mb-md-7">
                        <h4 className="display-5 m-0">Related Case Studies</h4>
                    </div>

                    {page.relatedCaseStudies.map((caseStudy, index) => (
                    <div className="col-12 col-md-6 d-flex flex-column" key={index} >
                        <Link href={caseStudy.slug} aria-label={`Read more about our ${caseStudy.title} case study`} className="text-decoration-none">
                            <figure className="mb-4">
                                <Image src={caseStudy.coverImage.url}
                                className="img-fluid rounded-4 w-100 position-relative" 
                                alt={caseStudy.coverImage.altText}
                                fill={true}
                                loading="lazy" />
                            </figure>
                            <h5 className="mb-3">{caseStudy.title}</h5>
                            <span className="badge badge--case-study align-self-start">{caseStudy.category}</span>
                        </Link>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        </>
        )}
        </>
    );
};

export default RelatedCaseStudiesSection;