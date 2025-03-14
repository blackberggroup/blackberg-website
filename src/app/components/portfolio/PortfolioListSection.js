import React, { useState } from 'react';
import PortfolioCategoryFilter from '@/app/components/portfolio/PortfolioCategoryFilter';
import Layout1 from '@/app/components/portfolio/Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';
import Layout4 from './Layout4';
import Layout5 from './Layout5';
import Layout6 from './Layout6';

const PortfolioListSection = ({ portfolioList }) => {

    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = Array.from(
        new Set(
            portfolioList.flatMap(portfolio => 
                portfolio.portfolioCategory.map(cat => cat.title)
            )
        )
    );
    
    const filteredPortfolio = selectedCategory === 'all' 
        ? portfolioList 
        : portfolioList.filter(portfolio => 
            portfolio.portfolioCategory.some(cat => cat.title === selectedCategory)
        );

    return (
        <section id="portfolio-list-section" className="pb-0 pt-8">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 mb-8 mb-lg-10 portfolio-categories">
                        <span className="h6 text-primary">Portfolio Categories</span>
                        <PortfolioCategoryFilter 
                            categories={categories} 
                            selectedCategory={selectedCategory} 
                            onSelectCategory={setSelectedCategory}
                        />
                    </div>
                    <div className="col-12 col-md-12">
                        <div className="row gx-6">
                            {filteredPortfolio.map((item, index) => (
                                <div className="position-relative mb-8 mb-md-11" key={item.id}>
                                    {item.layoutStyle === "layout1" && (
                                        <Layout1 data={item} index={index} />
                                    )}
                                    {item.layoutStyle === "layout2" && (
                                        <Layout2 data={item} index={index} />
                                    )}
                                    {item.layoutStyle === "layout3" && (
                                        <Layout3 data={item} index={index} />
                                    )}
                                    {item.layoutStyle === "layout4" && (
                                        <Layout4 data={item} index={index} />
                                    )}
                                    {item.layoutStyle === "layout5" && (
                                        <Layout5 data={item} index={index} />
                                    )}
                                    {item.layoutStyle === "layout6" && (
                                        <Layout6 data={item} index={index} />
                                    )}
                                </div>
                            ))}   
                        </div>
                    </div>
                    </div>
                 </div>
        </section>
    );
};

export default PortfolioListSection;