import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';

const StrategiesSection = ({ page }) => {

    return (
        <section id="strategies" className="py-8 py-md-11" aria-label="Strategies">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <h2 className="display-5 mb-3">Key Strategies</h2>
                        <p className="m-0">{page.strategiesContent}</p>
                    </div>
                    <div className="col-12 col-lg-6 ms-md-auto">
                        <div className="row gx-4 gy-4 gx-md-5 gy-md-5 pt-4 pt-lg-0 my-0">
                            {page.strategies && page.strategies.length > 0 && (
                            <div className="col-12 col-md-6 mt-4 mt-lg-0">
                                <h3 className="display-6">{page.strategies[0].title}</h3>
                                <p className="m-0">{page.strategies[0].details}</p>
                            </div>
                            )}
                            {page.strategies && page.strategies.length > 1 && (
                            <div className="col-12 col-md-6 mt-4 mt-lg-0">
                                <h3 className="display-6">{page.strategies[1].title}</h3>
                                <p className="m-0">{page.strategies[1].details}</p>
                            </div>
                            )}
                            {page.strategies && page.strategies.length > 2 && (
                            <div className="col-12 col-md-6">
                                <h3 className="display-6">{page.strategies[2].title}</h3>
                                <p className="m-0">{page.strategies[2].details}</p>
                            </div>
                            )}
                            {page.strategies && page.strategies.length > 3 && (
                            <div className="col-12 col-md-6">
                                <h3 className="display-6">{page.strategies[3].title}</h3>
                                <p className="m-0">{page.strategies[3].details}</p>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategiesSection;