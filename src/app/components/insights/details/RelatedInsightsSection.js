import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RelatedInsightsSection = ({ page }) => {

    return (
        <>
        {page.relatedInsights && page.relatedInsights.length > 0 && (
        <>
        <section id="related-insights" className="py-8 py-md-11" aria-label="Related Insights">
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-0 mb-5 mb-md-7">
                        <h4 className="display-5 m-0">Related Insights</h4>
                    </div>

                    {page.relatedInsights.map((insight, index) => (
                    <div className="col-12 col-md-6 d-flex flex-column" key={index} >
                        <Link href={insight.slug} aria-label={`Read more about our ${insight.title} Insight`} className="text-decoration-none">
                            <figure className="mb-4">
                                <Image src={insight.coverImage.url}
                                className="img-fluid rounded-4 w-100 position-relative" 
                                alt={insight.coverImage.altText}
                                fill={true}
                                loading="lazy" />
                            </figure>
                            <h5 className="mb-3">{caseStudy.title}</h5>
                            <span className="badge badge--insight align-self-start">{caseStudy.category.title}</span>
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

export default RelatedInsightsSection;