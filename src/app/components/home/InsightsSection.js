import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
import DateFormatted from '../DateFormatted';

const InsightsSection = ({ insights }) => {


    useEffect(() => {


    }, []);

    return (
        <section id="insights-section" className="container-fluid pt-8 pt-md-11 pb-3 pb-md-10" aria-label="Featured Insights">
            <div className="container position-relative">
                <div className="row d-flex position-relative gx-5">
                    <div className="col-12 text-center mb-7">
                        <h2 className="text-headline display-5 mb-4">Insights</h2>
                        <Link href="/insights" aria-label="View all Insight articles written by Blackberg Group personnel" className="btn btn-primary align-self-start">
                            View All Articles
                            <img src="/images/arrow-narrow-right-light.svg" width="20" height="20" className="ms-2" alt="white arrow pointing right" />    
                        </Link>
                    </div>
   
                    {insights.map(insight => (
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
    );
};

export default InsightsSection;