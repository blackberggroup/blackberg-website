import React from 'react';
import DateFormatted from '../../layout/DateFormatted';

const DetailsSection = ({page}) => {

    return (
        <section id="insight-details" className="py-8 py-md-11 mt-8" aria-label="Insight details">
            <div className="container">
                <div className="row d-flex flex-column">
                    <div className="col-12 mb-5">
                        <h1 className="display-5 m-0">{page.title}</h1>
                    </div>
                    <div className="col-12 d-flex flex-column flex-md-row justify-content-between">
                        <div className="d-flex flex-column flex-md-row text-figtree">
                            <span className="fw-bold-800 mb-2 me-4 me-md-6">{page.employee.firstName} {page.employee.lastName}</span>
                            <span className="label-data text-noto">
                                <DateFormatted dateString={page.date} />
                            </span>
                        </div>
                        {page.category && page.category.length > 0 && (
                        <div className="d-flex flex-wrap text-figtree mt-3 mt-md-0">
                            {page.category.map((cat, index) => (
                                <span key={index} className="badge badge--case-study align-self-start me-3 me-md-0 ms-0 ms-md-3 mb-3">
                                {cat.title}
                                </span>
                            ))}
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsSection;