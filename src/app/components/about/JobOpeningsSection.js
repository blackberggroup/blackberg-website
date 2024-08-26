import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const JobOpeningsSection = () => {

    return (
        <section id="job-openings-section" className="py-8 py-md-11">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-12 col-xl-11 col-xxl-9 mx-auto">
                        <div className="job-openings-container text-white rounded-4 d-flex flex-column flex-md-row px-0">
                            <div className="col-12 col-md-5 p-5 p-lg-7 pe-lg-0">
                                <span class="h4">Like what you see here?<br />Want to learn more?</span>
                                <h5 className="m-0 mt-3">Apply for one of our open roles and we’ll be in touch.</h5>
                                <Link href="/about/careers" aria-label="" className="btn btn-secondary  align-self-start mt-5">
                                    View Job Openings
                                    <img src="/images/arrow-narrow-right.svg" width="20" height="20" className="ms-2" alt="" />    
                                </Link>
                            </div>
                            <div className="col-12 col-md-7 ms-auto position-relative">
                                <Image src="/images/about/job-openings-circle.webp"
                                    className="img-fluid h-auto ps-lg-3 ps-xl-7 ps-xxl-5"
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