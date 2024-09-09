import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import InsightCategoryFilter from './InsightCategoryFilter';

const InsightsListSection = ({ insights }) => {

    const [selectedCategory, setSelectedCategory] = useState('all');
    // Extract unique category titles from all insights
    // The `flatMap()` method is used to first map each insight to its categories (`category` is an array of objects).
    // It then flattens the result into a single array of category titles.
    // We then pass this array to `new Set()` to ensure we only get unique category titles.
    // Finally, `Array.from()` converts the Set back into an array of unique category titles.
    const categories = Array.from(
        new Set(
            insights.flatMap(insight => 
                insight.category.map(cat => cat.title)
            )
        )
    );
    
    // Filter insights based on the selected category
    // If `selectedCategory` is 'all', we return all insights without any filtering.
    // Otherwise, we filter the insights by checking if any category within an insight matches the `selectedCategory`.
    // The `some()` method is used here to check if at least one category in the array has a title that matches `selectedCategory`.
    const filteredInsights = selectedCategory === 'all' 
        ? insights // No filtering; return all insights
        : insights.filter(insight => 
            insight.category.some(cat => cat.title === selectedCategory)
        );

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
                                                <span>{insight.formattedDate}</span>
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