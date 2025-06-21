import React from 'react';

const DetailsSection = ({page}) => {

    return (
        <section id="case-study-details" className="py-8 py-md-11 mt-8" aria-label="VA Immersive National Marketing case study details">
            <div className="container">
                <div className="row d-flex flex-column flex-md-row">
                    {page.title && (
                    <div className="col-12 col-sm-9 col-md-12 col-lg-10 col-xl-10">
                        <h1 className="display-5 m-0">{page.title}</h1>
                    </div>
                    )}
                    <div className="col-12 col-lg-2 col-xl-2 mt-4 mt-md-0 d-flex flex-lg-column ms-auto">
                        {page.client && (
                        <div className="d-flex flex-column text-figtree">
                            <span className="fw-bold-800 mb-2">Client</span>
                            <span className="label-data text-noto">{page.client}</span>
                        </div>
                        )}
                        {page.category && (
                        <div className="d-flex flex-column ms-10 ms-lg-0 mt-lg-7 mt-lg-7 text-figtree">
                            <span className="fw-bold-800 mb-2">Category</span>
                            <span className="badge badge--case-study align-self-start">{page.category}</span>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsSection;