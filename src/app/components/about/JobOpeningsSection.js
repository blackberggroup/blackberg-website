import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const JobOpeningsSection = () => {

    return (
        <section id="job-openings-section" className="py-8 py-md-11">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-12 col-xl-10 col-xxl-9 mx-auto">
                        <div className="job-openings-container text-white rounded-4 d-flex flex-column flex-md-row px-0">
                            <div className="col-12 col-md-5 p-5 p-lg-7">
                                <h4>Like what you see here? Want to learn more?</h4>
                                <h5 className="m-0 mt-3">Apply for one of our open roles and we’ll be in touch.</h5>
                                <Link href="/careers" aria-label="" className="btn btn-secondary  align-self-start mt-5">
                                    View Job Openings
                                    <img src="/images/arrow-narrow-right.svg" width="20" height="20" className="ms-2" />    
                                </Link>
                            </div>
                            <div className="col-12 col-md-7 ms-auto position-relative">
                                <Image src="/images/about/job-openings-circle.webp"
                                    className="img-fluid h-auto ps-md-5 ps-lg-7"
                                    id="job-circle"
                                    fill={true}
                                    alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobOpeningsSection;