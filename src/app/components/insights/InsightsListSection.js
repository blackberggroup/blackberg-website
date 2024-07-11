import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DateFormatted from '../DateFormatted';
import InsightCategoryFilter from './InsightCategoryFilter';

const InsightsListSection = ({ insights }) => {

    const [selectedCategory, setSelectedCategory] = useState('all');
    const categories = Array.from(new Set(insights.map(insight => insight.category.title)));
    const filteredInsights = selectedCategory === 'all' ? insights : insights.filter(insight => insight.category.title === selectedCategory);

    return (
        <section id="insights-list-section" className="py-8 py-md-11">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 mb-5 insight-categories">
                        <span className="h6 text-primary">Insight Categories</span>
                        <InsightCategoryFilter 
                            categories={categories} 
                            selectedCategory={selectedCategory} 
                            onSelectCategory={setSelectedCategory}
                        />
                    </div>
                    <div className="col-12 col-md-9">
                        <div className="row gx-6">
                            {filteredInsights.map((insight, index) => (
                                <div className={`position-relative ${index === 0 ? 'col-12 mb-7' : 'col-12 col-lg-6 mb-5'}`} key={insight.id}>
                                    <div className={`card card--insight border-0 bg-transparent ${index === 0 ? 'featured' : ''}`}>
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
                    </div>
                 </div>
        </section>
    );
};

export default InsightsListSection;