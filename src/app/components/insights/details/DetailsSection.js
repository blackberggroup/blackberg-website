import React from 'react';
import DateFormatted from '../../DateFormatted';

const DetailsSection = ({page}) => {

    return (
        <section id="insight-details" className="py-8 py-md-11 mt-8" aria-label="Insight details">
            <div className="container">
                <div className="row d-flex flex-column">
                    <div className="col-12 mb-5">
                        <h1 className="display-5 m-0">{page.title}</h1>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                        <div className="d-flex text-figtree">
                            <span className="fw-bold-800 mb-2 me-4 me-md-6">{page.employee.firstName} {page.employee.lastName}</span>
                            <span className="label-data text-noto">
                                <DateFormatted dateString={page.date} />
                            </span>
                        </div>
                        <div className="d-flex flex-column text-figtree">
                            <span className="badge badge--case-study align-self-start">{page.category.title}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsSection;