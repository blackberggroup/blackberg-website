import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DateFormatted from '../../DateFormatted';

const RelatedInsightsSection = ({ relatedInsights }) => {

    return (
        <>
        {relatedInsights && relatedInsights.length > 0 && (
        <>
        <section id="related-insights" className="py-8 py-md-11" aria-label="Related Insights">
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-0 mb-5 mb-md-7 d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <h4 className="display-5 m-0">Related Insights</h4>
                        <Link href="/insights" aria-label="View all Insight articles written by Blackberg Group personnel" className="btn btn-primary mt-4 mt-md-0">
                            View All Articles
                            <img src="/images/arrow-narrow-right-light.svg" width="20" height="20" className="ms-2" alt="white arrow pointing right" />    
                        </Link>
                    </div>

                    {relatedInsights.map((insight, index) => (
                    <div className="col-12 col-md-6 col-lg-4 position-relative mb-5" key={insight.id}>
                        <div className="card card--insight border-0 bg-transparent">
                            <Link href={`/insights/${insight.slug}`} aria-label={`Read the full Insight on ${insight.title}`} className="text-decoration-none">
                                <div className="card-image rounded-4">
                                    <Image src={insight.coverImage.url}
                                    className="img-fluid rounded-4 w-100 position-relative" 
                                    alt={`${insight.title}`}
                                    fill={true}
                                    loading="lazy" />
                                </div>
                                <div className="card-body d-flex flex-column p-0 mt-3">
                                    <span className="h4 card-title mb-3">{insight.title}</span>
                                    <DateFormatted dateString={insight.date} />
                                    <div className="card-author d-flex align-items-center mt-2 pt-1">
                                        <Image src={insight.employee.image.url}
                                        className="img-fluid position-relative" 
                                        alt={`${insight.employee.firstName} ${insight.employee.lastName} author profile`}
                                        fill={true}
                                        loading="lazy" />
                                        <span className="card-author-name ps-2">{insight.employee.firstName} {insight.employee.lastName}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
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